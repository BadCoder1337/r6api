import { AuthService } from "./Auth";
import { Platform, UbisoftRankResponse, UbisoftRegionStatsData, UbisoftPlayerRankData, REGION, UbisoftNameLevelResponse, UbisoftLevelData, UbisoftPlaytimeResponse, UUID, UbisoftProfileResponse, UbisoftProfileData } from "./Types";
import { isUuid } from "./helpers";
import * as Errors from './errors'
import * as querystring from 'querystring';
import { regions, URLS, plucks } from "./constants";
import fetcher from './fetch'

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
    async getRank(platform: Platform, ids: string | Array<string>, season: number = -1) {
        const _ids = [].concat(ids);

        this._validateIds(_ids)
        this._checkIdsLenth(_ids, 200)

        const opts = {
            season_id: season,
            profile_ids: _ids.join(','),
        };

        let token = await this.auth.getAuthString()

        const regionData = await Promise.all(
            regions.map(region => {
                const qs = Object.assign({}, opts, { region_id: region });
                return fetcher<UbisoftRankResponse>(
                    `${URLS[platform].RANK_URL}${querystring.stringify(qs)}`,
                    {},
                    token,
                );
            })
        );

        if (regionData instanceof Error) {
            throw regionData;
        }

        const rankMap = regionData.reduce((acc: UbisoftRegionStatsData, regionData: UbisoftRankResponse) => {

            Object.keys(regionData.players).forEach(id => {

                const value = regionData.players[id];

                if (acc[id] == null) {
                    acc[id] = { id, season: value.season } as any;
                }
                acc[id][value.region as REGION] = plucks.reduce(
                    (acc, curr) => {
                        acc[curr] = (value as any)[curr];
                        return acc;
                    },
                    {} as any,
                );
            });
            return acc;
        },
            {} as UbisoftRegionStatsData,
        );

        return Object.keys(rankMap).map(id => rankMap[id]) as UbisoftPlayerRankData[];

    }

    /**
     * Get Level of a Player or list of Players by their Ids
     * 
     * @param platform Player Platform
     * @param ids Id or list of ids of players
     */
    async getLevel(platform: Platform, ids: string | Array<string>) {
        const _ids = [].concat(ids);

        this._validateIds(_ids)

        this._checkIdsLenth(_ids, 40)
        const token = await this.auth.getAuthString();
        const res = await fetcher<UbisoftNameLevelResponse>(
            `${URLS[platform].LEVEL_URL}${_ids.join(',')}`,
            {},
            token,
        );

        if (res instanceof Error) {
            throw res;
        }

        return [].concat(res.player_profiles).map((profile: UbisoftLevelData) => ({
            id: profile.profile_id,
            level: profile.level,
        }));
    }

    /**
     * Get total played time of a Player or list of Players by their ids
     * 
     * @param platform Players Platform
     * @param ids Id or list of Players Ids
     */
    async getPlayTime(platform: Platform, ids: string | Array<string>) {
        const _ids = [].concat(ids);

        this._validateIds(_ids)
        this._checkIdsLenth(_ids, 40)

        const token = await this.auth.getAuthString();
        const res = await fetcher<UbisoftPlaytimeResponse>(
            `${URLS[platform].URL}${_ids.join(',')}`,
            {},
            token,
        );

        if (res instanceof Error) {
            throw res;
        }

        return [].concat(Object.keys(res.results)).map((key: UUID) => ({
            id: key,
            casual: res.results[key]['casualpvp_timeplayed:infinite'],
            ranked: res.results[key]['rankedpvp_timeplayed:infinite'],
        }));

    }

    /**
     * Get current name or names of Player or list of Players
     * 
     * @param platform Player's Platform
     * @param ids Id or list of Player's Ids
     */
    async getCurrentName(platform: Platform, ids: string | Array<String>) {
        const _ids = [].concat(ids);

        this._validateIds(_ids)
        this._checkIdsLenth(_ids, 40)

        const token = await this.auth.getAuthString();
        const res = await fetcher<UbisoftProfileResponse>(
            `${URLS[platform].REVERSE_URL}${_ids.join(',')}`,
            {},
            token,
        );

        if (res instanceof Error) {
            throw res;
        }

        return [].concat(res.profiles).map((profile: UbisoftProfileData) => ({
            id: profile.profileId,
            userid: profile.userId,
            name: profile.nameOnPlatform,
        }));

    }

    /**
     * Find a Player or list of Players by their uplay nicknames
     * 
     * @param platform Player's Platform
     * @param aliases Uplay nickname or list of Player's nicknames
     */
    async findByName(platform: Platform, aliases: string | Array<string>) {
        const _aliases = [].concat(aliases);
        this._checkIdsLenth(_aliases, 40)

        const token = await this.auth.getAuthString();
        const res = await fetcher<UbisoftProfileResponse>(
            `${URLS[platform].URL}${_aliases.join(',')}`,
            {},
            token,
        );

        if (res instanceof Error) {
            throw res;
        }

        return [].concat(res.profiles).map((profile: UbisoftProfileData) => ({
            id: profile.profileId,
            userid: profile.userId,
            name: profile.nameOnPlatform,
        }));
    }




    private _checkIdsLenth(_ids: Array<string>, length: number): void {
        if (_ids.length > length) {
            throw new Errors.TooManyIdsError(`too many ids passed (max. ${length})`);
        }
    }


    private _validateIds(_ids: Array<string>): void {
        if (_ids.some(id => !isUuid(id))) {
            throw new Error('passed id is not a valid UUID');
        }
    }

}