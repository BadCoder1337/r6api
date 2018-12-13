export type UUID = string;
export enum Platform {
    PC = 'PC',
    PS4 = 'PS4',
    XBOX = 'XBOX',
}

export type REGION = 'emea' | 'ncsa' | 'apac';

export interface UbisoftRankResponse {
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

export interface UbisoftRankResponse {
    players: {
        [id: string]: UbisoftRankResponse;
    };
}

export interface UbisoftPlayerRankData {
    id: UUID;
    season: number;
    apac: UbisoftRankResponse;
    emea: UbisoftRankResponse;
    ncsa: UbisoftRankResponse;
}

export interface UbisoftRegionStatsData {
    [id: string]: UbisoftPlayerRankData;
}

export interface UbisoftLevelData {
    profile_id: UUID;
    level: number;
}

export interface UbisoftNameLevelResponse {
    player_profiles: UbisoftLevelData[];
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

export interface UbisoftProfileData {
    profileId: UUID;
    userId: UUID;
    nameOnPlatform: string;
}

export interface UbisoftProfileResponse {
    profiles: Array<UbisoftProfileData>;
}