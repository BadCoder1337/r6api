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

export interface UbisoftPlayerLevelData {
    profile_id: UUID;
    level: number;
    lootbox_probability: number,
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
    casual: number,
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
export type GetLevelResponse = { [key: string]: UbisoftPlayerLevelData }
export type GetPlayTimeResponse = { [key: string]: PlayTimeData }
export type FindByNameResponse = GetCurrentNameResponse