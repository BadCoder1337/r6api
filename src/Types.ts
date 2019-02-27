import { OPERATORS } from "./constants";

export declare type UUID = string;

export type Platform = "PC" | "XBOX" | "PS4" | "XBOXONE";

export declare type REGION = 'emea' | 'ncsa' | 'apac';

export interface PlayerRankedData {
    region: string;
    board_id: string;
    past_seasons_abandons: number;
    update_time: string;
    skill_mean: number;
    abandons: number;
    season: number;
    profile_id: string;
    past_seasons_losses: number;
    max_mmr: number;
    mmr: number;
    wins: number;
    skill_stdev: number;
    rank: number;
    losses: number;
    next_rank_mmr: number;
    past_seasons_wins: number;
    previous_rank_mmr: number;
    max_rank: number;
}

export interface UbisoftPlayersRankResponse {
    players: {
        [id: string]: PlayerRankedData;
    };
}

export interface PlayerRankedResponseData {
    id: UUID;
    season: number;
    apac?: PlayerRankedData;
    emea?: PlayerRankedData;
    ncsa?: PlayerRankedData;
}

export interface TimePlayed { timePlayed: number }

export interface Kills { kills: number }

export interface WLP {
    lost: number;
    played: number;
    won: number;
}

export interface DefaultStats extends TimePlayed, Kills, WLP { deaths: number }

export interface GameModeStats extends WLP { bestScore: number }

export interface ShootingStats extends Kills {
    headshot: number;
    bulletsFired: number;
    bulletsHit: number;
}

export interface OperatorStats extends DefaultStats { gadgetPvp: number }

export interface GeneralStats extends DefaultStats, ShootingStats {
    assists: number;
    meleeKills: number;
    penetrationKills: number;
    revives: number;
    blindKills: number;
    dbno: number;
    dbnoAssists: number;
    gadgetsDestroyed: number;
    hostageDefense: number;
    hostageRescue: number;
    rappelBreaches: number;
    revivesDenied: number;
    serverAggression: number;
    serverDefender: number;
    serversHacked: number;
    suicides: number;
}

export interface PlayerStatsResponseData {
    id: UUID;
    general?: Partial<GeneralStats>;
    gamemodes?: {
        secure?: Partial<GameModeStats>;
        hostage?: Partial<GameModeStats>;
        bomb?: Partial<GameModeStats>;
    };
    playlists?: {
        casual?: Partial<DefaultStats>;
        ranked?: Partial<DefaultStats>;
        custom?: Partial<TimePlayed>;
    };
    operator?: { [key in keyof typeof OPERATORS]: OperatorStats }
}

export interface StatsSelector {
    general?: Array<keyof GeneralStats> | '*';
    gamemodes?: {
        secure?: Array<keyof GameModeStats> | '*';
        hostage?: Array<keyof GameModeStats> | '*';
        bomb?: Array<keyof GameModeStats> | '*';
    };
    playlists?: {
        casual?: Array<keyof DefaultStats> | '*';
        ranked?: Array<keyof DefaultStats> | '*';
        custom?: Array<keyof TimePlayed> | '*';
    }
    operator?: Array<keyof typeof OPERATORS | 'def' | 'atk' | 'both'> | '*' ;
}

export interface UbisoftPlayerStatsData {
    results: {
        [id: string]: {
            [field: string]: number;
        };
    };
}

export interface UbisoftPlayerLevelData {
    profile_id: UUID;
    level: number;
    lootbox_probability: number;
    xp: number
}

export interface UbisoftPlayersLevelResponse {
    player_profiles: UbisoftPlayerLevelData[];
}

export interface UbisoftPlaytimeData {
    'casualpvp_timeplayed:infinite': number;
    'rankedpvp_timeplayed:infinite': number;
}

export interface UbisoftPlaytimeResponse {
    results: {
        [id: string]: UbisoftPlaytimeData;
    };
}

export interface PlayTimeData {
    id: UUID,
    casual: number;
    ranked: number
}

export interface CurrentNamePlayerData {
    id: UUID,
    userId: string,
    name: string
}

export interface UbisoftPlayerProfileData {
    profileId: UUID,
    userId: UUID,
    nameOnPlatform: string,
    platformType: string,
    idOnPlatform: string
}

export interface UbisoftProfilesResponse {
    profiles: Array<UbisoftPlayerProfileData>;
}


//Responses
export type GetCurrentNameResponse = { [key: string]: CurrentNamePlayerData }
export type GetRankedResponse = { [key: string]: PlayerRankedResponseData }
export type GetStatsResponse = { [key: string]: PlayerStatsResponseData }
export type GetLevelResponse = { [key: string]: UbisoftPlayerLevelData }
export type GetPlayTimeResponse = { [key: string]: PlayTimeData }
export type FindByNameResponse = GetCurrentNameResponse