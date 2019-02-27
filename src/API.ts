import { AuthService } from "./Auth";
import { isUuid } from "./helpers";
import * as Errors from './errors'
import * as querystring from 'querystring';
import { regions, URLS, STATS } from "./constants";
import fetcher from './fetch'
import { isString, isArray } from "util";
import { Platform, REGION, UbisoftPlayersLevelResponse, UbisoftPlaytimeResponse, UbisoftProfilesResponse, GetCurrentNameResponse, GetRankedResponse, GetStatsResponse, GetLevelResponse, GetPlayTimeResponse, UbisoftPlayersRankResponse, UbisoftPlayerProfileData, FindByNameResponse, StatsSelector, UbisoftPlayerStatsData } from "./Types";

export class APIService {
    private readonly auth: AuthService


    constructor(authService: AuthService) {
        this.auth = authService
    }

    /**
     * Get ranked information about Player or list of Players by their Ids
     * 
     * @param platform Player's Platform
     * @param ids Id or list of Player Ids
     * @param season Number of the rank season
     */
    async getRank(platform: Platform, ids: string | Array<string>, season: number = -1): Promise<GetRankedResponse> {

        let _ids = this._convertIds(ids)
        this._validateIds(_ids)
        this._checkIdsLenth(_ids, 200)

        const opts = {
            season_id: season,
            profile_ids: _ids.join(','),
        };

        let token = await this.auth.getAuthString()

        const rankMap: GetRankedResponse = {}

        for (let regionKey in regions) {
            let region = regions[regionKey]
            const qs = Object.assign({}, opts, { region_id: region });
            let res = await fetcher<UbisoftPlayersRankResponse>(`${URLS[platform].RANK_URL}${querystring.stringify(qs)}`, {}, token)
            for (let id in res.players) {
                let data = res.players[id]
                if (!rankMap[id]) {
                    rankMap[id] = { id, season: data.season }
                }
                rankMap[id][data.region as REGION] = data
            }
        }

        return rankMap
    }

    /**
     * Get Stats of a Player or list of Players by their Ids
     * 
     * @param platform Player Platform
     * @param ids Id or list of ids of players
     * @param stats Object with selected stats. Wildcard supported
     */

    async getStats(platform: Platform, ids: string | string[], stats: StatsSelector = { general: ['lost', 'won', 'kills', 'deaths'] }): Promise<GetStatsResponse> {

        let _ids = this._convertIds(ids)
        this._validateIds(_ids)
        this._checkIdsLenth(_ids, 200);

        const token = await this.auth.getAuthString();

        const statParams: string[] = [];

        if (stats.general) {
            const { general } = stats;
            if (general === '*') {
                Object.values(STATS.general).map(s => statParams.push(s + ':infinite'))
            } else {
                Object.entries(STATS.general).map((e: any) => general.indexOf(e[0]) !== -1 ? statParams.push(e[1] + ':infinite') : null)
            }
        }

        if (stats.gamemodes) {
            // TODO
        }

        if (stats.playlists) {
            // TODO
        }

        if (stats.operator) {
            // TODO
        }

        // console.log('TCL: APIService -> statParams', statParams, statParams.length)

        const res = await fetcher<UbisoftPlayerStatsData>(`${URLS[platform].STATS_URL}statistics=${statParams.join(',')}&populations=${_ids.join(',')}`, {}, token)

        const statsData: GetStatsResponse = {};
        for (const id in res.results) {
            const { general, gamemodes, playlists, operator} = stats;
            statsData[id] = {
                id,
                general: Object.entries(res.results[id])
                            .filter((e) => general === '*' ? true : Object.values(STATS.general).includes(e[0].slice(0, -9)))
                            .map((e) => {
                                e[0] = Object.keys(STATS.general)[Object.values(STATS.general).indexOf(e[0].slice(0, -9))]
                                return e;
                            })
                            .reduce((obj, [k, v]) => ({ ...obj, [k]: v }), {}),
                gamemodes: {}, // TODO
                playlists: {}, // TODO
            }
        }
        return statsData;
    }

    /**
     * Get Level of a Player or list of Players by their Ids
     * 
     * @param platform Player Platform
     * @param ids Id or list of ids of players
     */
    async getLevel(platform: Platform, ids: string | Array<string>): Promise<GetLevelResponse> {

        let _ids = this._convertIds(ids)
        this._validateIds(_ids)
        this._checkIdsLenth(_ids, 40)

        const token = await this.auth.getAuthString();

        const res = await fetcher<UbisoftPlayersLevelResponse>(`${URLS[platform].LEVEL_URL}${_ids.join(',')}`, {}, token);
        let levelData: GetLevelResponse = {}
        for (let profileKey in res.player_profiles) {
            levelData[res.player_profiles[profileKey].profile_id] = res.player_profiles[profileKey]
        }
        return levelData;
    }

    /**
     * Get total played time of a Player or list of Players by their ids
     * 
     * @param platform Players Platform
     * @param ids Id or list of Players Ids
     */
    async getPlayTime(platform: Platform, ids: string | Array<string>): Promise<GetPlayTimeResponse> {

        let _ids = this._convertIds(ids)
        this._validateIds(_ids)
        this._checkIdsLenth(_ids, 40)

        const token = await this.auth.getAuthString();
        const res = await fetcher<UbisoftPlaytimeResponse>(`${URLS[platform].TIME_URL}${_ids.join(',')}`, {}, token);
        let playTimeData: GetPlayTimeResponse = {}
        for (let id in res.results) {
            playTimeData[id] = {
                id,
                casual: res.results[id]['casualpvp_timeplayed:infinite'],
                ranked: res.results[id]['rankedpvp_timeplayed:infinite'],
            }
        }

        return playTimeData
    }

    /**
     * Get current name or names of Player or list of Players
     * 
     * @param platform Player's Platform
     * @param ids Id or list of Player's Ids
     */
    async getCurrentName(platform: Platform, ids: string | Array<string>): Promise<GetCurrentNameResponse> {

        let _ids = this._convertIds(ids)
        this._validateIds(_ids)
        this._checkIdsLenth(_ids, 40)

        const token = await this.auth.getAuthString();
        const res = await fetcher<UbisoftProfilesResponse>(`${URLS[platform].REVERSE_URL}${_ids.join(',')}`, {}, token);
        let currentNameData: GetCurrentNameResponse = {}
        for (let key in res.profiles) {
            currentNameData[res.profiles[key].profileId] = {
                id: res.profiles[key].profileId,
                userId: res.profiles[key].userId,
                name: res.profiles[key].nameOnPlatform,
            }
        }

        return currentNameData
    }


    /**
     * Find a Player or list of Players by their uplay nicknames
     * 
     * @param platform Player's Platform
     * @param aliases Uplay nickname or list of Player's nicknames
     */
    async findByName(platform: Platform, aliases: string | Array<string>): Promise<FindByNameResponse> {
        const _aliases = this._convertIds(aliases)
        this._checkIdsLenth(_aliases, 40)

        const token = await this.auth.getAuthString();
        const res = await fetcher<UbisoftProfilesResponse>(`${URLS[platform].URL}${_aliases.join(',')}`, {}, token);

        let plaerNameData: FindByNameResponse = {}
        for (let key in res.profiles) {
            plaerNameData[res.profiles[key].nameOnPlatform] = {
                id: res.profiles[key].profileId,
                userId: res.profiles[key].userId,
                name: res.profiles[key].nameOnPlatform,
            }
        }

        return plaerNameData
    }

    //TODO: add stats getting data



    /**
     * Check if array length is less than length param
     * 
     * @param _ids list of checking Ids
     * @param length needed length to check
     */
    private _checkIdsLenth(_ids: Array<string>, length: number): void {
        if (_ids.length > length) {
            throw new Errors.TooManyIdsError(`too many ids passed (max. ${length})`);
        }
    }

    /**
     * Check if every ids are a true UUID
     * 
     * @param _ids checkingIds
     */
    private _validateIds(_ids: Array<string>): void {
        if (_ids.some(id => !isUuid(id))) {
            throw new Error('passed id is not a valid UUID');
        }
    }

    /**
     * Convert ids to array of ids if needed
     * 
     * @param ids needed to convert ids
     */
    private _convertIds(ids: string | string[]): string[] {
        if (isString(ids)) {
            ids = [ids]
        }
        return ids
    }

}