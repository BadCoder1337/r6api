export const regions = ['ncsa', 'emea', 'apac'];

export const plucks = [
    'max_mmr',
    'skill_mean',
    'abandons',
    'region',
    'rank',
    'mmr',
    'wins',
    'skill_stdev',
    'losses',
    'max_rank',
];

export const URLS: { [key: string]: { [key: string]: string } } = {
    "PC": {
        URL:
            "https://public-ubiservices.ubi.com/v2/profiles?platformType=uplay&nameOnPlatform=",
        STATS_URL:
            "https://public-ubiservices.ubi.com/v1/spaces/5172a557-50b5-4665-b7db-e3f2e8c5041d/sandboxes/OSBOR_PC_LNCH_A/playerstats2/statistics?",
        LEVEL_URL:
            "https://public-ubiservices.ubi.com/v1/spaces/5172a557-50b5-4665-b7db-e3f2e8c5041d/sandboxes/OSBOR_PC_LNCH_A/r6playerprofile/playerprofile/progressions?profile_ids=",
        REVERSE_URL:
            "https://public-ubiservices.ubi.com/v2/profiles?platformType=uplay&idOnPlatform=",
        TIME_URL:
            "https://public-ubiservices.ubi.com/v1/spaces/5172a557-50b5-4665-b7db-e3f2e8c5041d/sandboxes/OSBOR_PC_LNCH_A/playerstats2/statistics?statistics=casualpvp_timeplayed,rankedpvp_timeplayed&populations=",
        RANK_URL:
            "https://public-ubiservices.ubi.com/v1/spaces/5172a557-50b5-4665-b7db-e3f2e8c5041d/sandboxes/OSBOR_PC_LNCH_A/r6karma/players?board_id=pvp_ranked&",
        LOGIN_URL: "https://public-ubiservices.ubi.com/v3/profiles/sessions?"
    },
    "PS4": {
        URL:
            "https://public-ubiservices.ubi.com/v2/profiles?platformType=psn&nameOnPlatform=",
        STATS_URL:
            "https://public-ubiservices.ubi.com/v1/spaces/05bfb3f7-6c21-4c42-be1f-97a33fb5cf66/sandboxes/OSBOR_PS4_LNCH_A/playerstats2/statistics?",
        LEVEL_URL:
            "https://public-ubiservices.ubi.com/v1/spaces/05bfb3f7-6c21-4c42-be1f-97a33fb5cf66/sandboxes/OSBOR_PS4_LNCH_A/r6playerprofile/playerprofile/progressions?profile_ids=",
        REVERSE_URL:
            "https://public-ubiservices.ubi.com/v2/profiles?platformType=psn&idOnPlatform=",
        TIME_URL:
            "https://public-ubiservices.ubi.com/v1/spaces/05bfb3f7-6c21-4c42-be1f-97a33fb5cf66/sandboxes/OSBOR_PS4_LNCH_A/playerstats2/statistics?statistics=casualpvp_timeplayed,rankedpvp_timeplayed&populations=",
        RANK_URL:
            "https://public-ubiservices.ubi.com/v1/spaces/05bfb3f7-6c21-4c42-be1f-97a33fb5cf66/sandboxes/OSBOR_PS4_LNCH_A/r6karma/players?board_id=pvp_ranked&",
        LOGIN_URL: "https://public-ubiservices.ubi.com/v3/profiles/sessions?"
    },
    "XBOX": {
        URL:
            "https://public-ubiservices.ubi.com/v2/profiles?platformType=xbl&nameOnPlatform=",
        STATS_URL:
            "https://public-ubiservices.ubi.com/v1/spaces/98a601e5-ca91-4440-b1c5-753f601a2c90/sandboxes/OSBOR_XBOXONE_LNCH_A/playerstats2/statistics?",
        LEVEL_URL:
            "https://public-ubiservices.ubi.com/v1/spaces/98a601e5-ca91-4440-b1c5-753f601a2c90/sandboxes/OSBOR_XBOXONE_LNCH_A/r6playerprofile/playerprofile/progressions?profile_ids=",
        REVERSE_URL:
            "https://public-ubiservices.ubi.com/v2/profiles?platformType=xbl&idOnPlatform=",
        TIME_URL:
            "https://public-ubiservices.ubi.com/v1/spaces/98a601e5-ca91-4440-b1c5-753f601a2c90/sandboxes/OSBOR_XBOXONE_LNCH_A/playerstats2/statistics?statistics=casualpvp_timeplayed,rankedpvp_timeplayed&populations=",
        RANK_URL:
            "https://public-ubiservices.ubi.com/v1/spaces/98a601e5-ca91-4440-b1c5-753f601a2c90/sandboxes/OSBOR_XBOXONE_LNCH_A/r6karma/players?board_id=pvp_ranked&",
        LOGIN_URL: "https://public-ubiservices.ubi.com/v3/profiles/sessions?"
    }
}

export const WEAPONTYPES = {
    1: 'assault',
    2: 'smg',
    3: 'lmg',
    4: 'sniper',
    5: 'pistol',
    6: 'shotgun',
    7: 'mp',
    8: 'shield',
    9: 'launcher',
    B: 'B',
};

export const OPERATORS = {
    'recruit-sas': {
        id: "recruit-sas",
        side: "both",
        name: "recruit",
        readableName: "Recruit SAS",
        ctu: 'sas',
        readableCtuName: "SAS",
        fullIndex: "1:1",
        gadget: "nothing"
    },
    'recruit-fbi-swat': {
        id: "recruit-fbi-swat",
        side: "both",
        name: "recruit",
        readableName: "Recruit FBI SWAT",
        ctu: "fbi-swat",
        readableCtuName: "FBI SWAT",
        fullIndex: "1:2",
        gadget: "nothing"
    },
    'recruit-gign': {
        id: "recruit-gign",
        side: "both",
        name: "recruit",
        readableName: "Recruit GIGN",
        ctu: 'gign',
        readableCtuName: "GIGN",
        fullIndex: "1:3",
        gadget: "nothing"
    },
    'recruit-spetsnaz': {
        id: "recruit-spetsnaz",
        side: "both",
        name: "recruit",
        readableName: "Recruit SPETSNAZ",
        ctu: "spetsnaz",
        readableCtuName: "SPETSNAZ",
        fullIndex: "1:4",
        gadget: "nothing"
    },
    'recruit-gsg-9': {
        id: "recruit-gsg-9",
        side: "both",
        name: "recruit",
        readableName: "Recruit GSG 9",
        ctu: "gsg-9",
        readableCtuName: "GSG 9",
        fullIndex: "1:5",
        gadget: "nothing"
    },
    'smoke': {
        id: "smoke",
        side: "def",
        name: "smoke",
        readableName: "Smoke",
        ctu: 'sas',
        readableCtuName: "SAS",
        fullIndex: "2:1",
        gadget: "operatorpvp_smoke_poisongaskill"
    },
    'mute': {
        id: "mute",
        side: "def",
        name: "mute",
        readableName: "Mute",
        ctu: 'sas',
        readableCtuName: "SAS",
        fullIndex: "3:1",
        gadget: "operatorpvp_mute_gadgetjammed"
    },
    'sledge': {
        id: "sledge",
        side: "atk",
        name: "sledge",
        readableName: "Sledge",
        ctu: 'sas',
        readableCtuName: "SAS",
        fullIndex: "4:1",
        gadget: "operatorpvp_sledge_hammerhole"
    },
    'thatcher': {
        id: "thatcher",
        side: "atk",
        name: "thatcher",
        readableName: "Thatcher",
        ctu: 'sas',
        readableCtuName: "SAS",
        fullIndex: "5:1",
        gadget: "operatorpvp_thatcher_gadgetdestroywithemp"
    },
    'castle': {
        id: "castle",
        side: "def",
        name: "castle",
        readableName: "Castle",
        ctu: "fbi-swat",
        readableCtuName: "FBI SWAT",
        fullIndex: "2:2",
        gadget: "operatorpvp_castle_kevlarbarricadedeployed"
    },
    'ash': {
        id: "ash",
        side: "atk",
        name: "ash",
        readableName: "Ash",
        ctu: "fbi-swat",
        readableCtuName: "FBI SWAT",
        fullIndex: "3:2",
        gadget: "operatorpvp_ash_bonfirewallbreached"
    },
    'pulse': {
        id: "pulse",
        side: "def",
        name: "pulse",
        readableName: "Pulse",
        ctu: "fbi-swat",
        readableCtuName: "FBI SWAT",
        fullIndex: "4:2",
        gadget: "operatorpvp_pulse_heartbeatspot"
    },
    'thermite': {
        id: "thermite",
        side: "atk",
        name: "thermite",
        readableName: "Thermite",
        ctu: "fbi-swat",
        readableCtuName: "FBI SWAT",
        fullIndex: "5:2",
        gadget: "operatorpvp_thermite_reinforcementbreached"
    },
    'doc': {
        id: "doc",
        side: "def",
        name: "doc",
        readableName: "Doc",
        ctu: 'gign',
        readableCtuName: "GIGN",
        fullIndex: "2:3",
        gadget: "operatorpvp_doc_teammaterevive"
    },
    'rook': {
        id: "rook",
        side: "def",
        name: "rook",
        readableName: "Rook",
        ctu: 'gign',
        readableCtuName: "GIGN",
        fullIndex: "3:3",
        gadget: "operatorpvp_rook_armortakenteammate"
    },
    'twitch': {
        id: "twitch",
        side: "atk",
        name: "twitch",
        readableName: "Twitch",
        ctu: 'gign',
        readableCtuName: "GIGN",
        fullIndex: "4:3",
        gadget: "operatorpve_twitch_gadgetdestroybyshockdrone"
    },
    'montagne': {
        id: "montagne",
        side: "atk",
        name: "montagne",
        readableName: "Montagne",
        ctu: 'gign',
        readableCtuName: "GIGN",
        fullIndex: "5:3",
        gadget: "operatorpvp_montagne_shieldblockdamage"
    },
    'glaz': {
        id: "glaz",
        side: "atk",
        name: "glaz",
        readableName: "Glaz",
        ctu: "spetsnaz",
        readableCtuName: "SPETSNAZ",
        fullIndex: "2:4",
        gadget: "operatorpvp_glaz_sniperkill"
    },
    'fuze': {
        id: "fuze",
        side: "atk",
        name: "fuze",
        readableName: "Fuze",
        ctu: "spetsnaz",
        readableCtuName: "SPETSNAZ",
        fullIndex: "3:4",
        gadget: "operatorpvp_fuze_clusterchargekill"
    },
    'kapkan': {
        id: "kapkan",
        side: "def",
        name: "kapkan",
        readableName: "Kapkan",
        ctu: "spetsnaz",
        readableCtuName: "SPETSNAZ",
        fullIndex: "4:4",
        gadget: "operatorpvp_kapkan_boobytrapkill"
    },
    'tachanka': {
        id: "tachanka",
        side: "def",
        name: "tachanka",
        readableName: "Tachanka (Lord)",
        ctu: "spetsnaz",
        readableCtuName: "SPETSNAZ",
        fullIndex: "5:4",
        gadget: "operatorpvp_tachanka_turretkill"
    },
    'blitz': {
        id: "blitz",
        side: "atk",
        name: "blitz",
        readableName: "Blitz",
        ctu: "gsg-9",
        readableCtuName: "GSG 9",
        fullIndex: "2:5",
        gadget: "operatorpvp_blitz_flashedenemy"
    },
    'iq': {
        id: "iq",
        side: "atk",
        name: "iq",
        readableName: "IQ",
        ctu: "gsg-9",
        readableCtuName: "GSG 9",
        fullIndex: "3:5",
        gadget: "operatorpvp_iq_gadgetspotbyef"
    },
    'jager': {
        id: "jager",
        side: "def",
        name: "jager",
        readableName: "Jäger",
        ctu: "gsg-9",
        readableCtuName: "GSG 9",
        fullIndex: "4:5",
        gadget: "operatorpvp_jager_gadgetdestroybycatcher"
    },
    'bandit': {
        id: "bandit",
        side: "def",
        name: "bandit",
        readableName: "Bandit",
        ctu: "gsg-9",
        readableCtuName: "GSG 9",
        fullIndex: "5:5",
        gadget: "operatorpvp_bandit_batterykill"
    },
    'buck': {
        id: "buck",
        side: "atk",
        name: "buck",
        readableName: "Buck",
        ctu: "jtf2",
        readableCtuName: "JTF2",
        fullIndex: "2:6",
        gadget: "operatorpvp_buck_kill"
    },
    'frost': {
        id: "frost",
        side: "def",
        name: "frost",
        readableName: "Frost",
        ctu: "jtf2",
        readableCtuName: "JTF2",
        fullIndex: "3:6",
        gadget: "operatorpvp_frost_dbno"
    },
    'blackbeard': {
        id: "blackbeard",
        side: "atk",
        name: "blackbeard",
        readableName: "Blackbeard",
        ctu: "navy-seal",
        readableCtuName: "NAVY SEAL",
        fullIndex: "2:7",
        gadget: "operatorpvp_blackbeard_gunshieldblockdamage"
    },
    'valkyrie': {
        id: "valkyrie",
        side: "def",
        name: "valkyrie",
        readableName: "Valkyrie",
        ctu: "navy-seal",
        readableCtuName: "NAVY SEAL",
        fullIndex: "3:7",
        gadget: "operatorpvp_valkyrie_camdeployed"
    },
    'capitao': {
        id: "capitao",
        side: "atk",
        name: "capitao",
        readableName: "Capitão",
        ctu: "bope",
        readableCtuName: "BOPE",
        fullIndex: "2:8",
        gadget: "operatorpvp_capitao_lethaldartkills"
    },
    'caveira': {
        id: "caveira",
        side: "def",
        name: "caveira",
        readableName: "Caveira",
        ctu: "bope",
        readableCtuName: "BOPE",
        fullIndex: "3:8",
        gadget: "operatorpvp_caveira_interrogations"
    },
    'hibana': {
        id: "hibana",
        side: "atk",
        name: "hibana",
        readableName: "Hibana",
        ctu: "sat",
        readableCtuName: "SAT",
        fullIndex: "2:9",
        gadget: "operatorpvp_hibana_detonate_projectile"
    },
    'echo': {
        id: "echo",
        side: "def",
        name: "echo",
        readableName: "Echo",
        ctu: "sat",
        readableCtuName: "SAT",
        fullIndex: "3:9",
        gadget: "operatorpvp_echo_enemy_sonicburst_affected"
    },
    'jackal': {
        id: "jackal",
        side: "atk",
        name: "jackal",
        readableName: "Jackal",
        ctu: "geo",
        readableCtuName: "GEO",
        fullIndex: "2:A",
        gadget: "operatorpvp_cazador_assist_kill"
    },
    'mira': {
        id: "mira",
        side: "def",
        name: "mira",
        readableName: "Mira",
        ctu: "geo",
        readableCtuName: "GEO",
        fullIndex: "3:A",
        gadget: "operatorpvp_black_mirror_gadget_deployed"
    },
    'ying': {
        id: "ying",
        side: "atk",
        name: "ying",
        readableName: "Ying",
        ctu: "sdu",
        readableCtuName: "SDU",
        fullIndex: "2:B",
        gadget: "operatorpvp_dazzler_gadget_detonate"
    },
    'lesion': {
        id: "lesion",
        side: "def",
        name: "lesion",
        readableName: "Lesion",
        ctu: "sdu",
        readableCtuName: "SDU",
        fullIndex: "3:B",
        gadget: "operatorpvp_caltrop_enemy_affected"
    },
    'ela': {
        id: "ela",
        side: "def",
        name: "ela",
        readableName: "Ela",
        ctu: "grom",
        readableCtuName: "GROM",
        fullIndex: "2:C",
        gadget: "operatorpvp_concussionmine_detonate"
    },
    'zofia': {
        id: "zofia",
        side: "atk",
        name: "zofia",
        readableName: "Zofia",
        ctu: "grom",
        readableCtuName: "GROM",
        fullIndex: "3:C",
        gadget: "operatorpvp_concussiongrenade_detonate"
    },
    'vigil': {
        id: "vigil",
        side: "def",
        name: "vigil",
        readableName: "Vigil",
        ctu: "707th-smb",
        readableCtuName: "707th SMB",
        fullIndex: "3:D",
        gadget: "operatorpvp_attackerdrone_diminishedrealitymode"
    },
    'dokkaebi': {
        id: "dokkaebi",
        side: "atk",
        name: "dokkaebi",
        readableName: "Dokkaebi",
        ctu: "707th-smb",
        readableCtuName: "707th SMB",
        fullIndex: "2:D",
        gadget: "operatorpvp_phoneshacked"
    },
    'lion': {
        id: "lion",
        side: "atk",
        name: "lion",
        readableName: "Lion",
        ctu: "cbrn",
        readableCtuName: "CBRN (GIGN)",
        fullIndex: "3:E",
        gadget: "operatorpvp_tagger_tagdevice_spot"
    },
    'finka': {
        id: "finka",
        side: "atk",
        name: "finka",
        readableName: "Finka",
        ctu: "cbrn",
        readableCtuName: "CBRN (SPETSNAZ)",
        fullIndex: "4:E",
        gadget: "operatorpvp_rush_adrenalinerush"
    },
    'alibi': {
        id: "alibi",
        side: "def",
        name: "alibi",
        fullIndex: "3:F",
        readableName: "Alibi",
        ctu: "gis",
        readableCtuName: "GIS",
        gadget: "operatorpvp_deceiver_revealedattackers"
    },
    'maestro': {
        id: "maestro",
        side: "def",
        name: "maestro",
        fullIndex: "2:F",
        readableName: "Maestro",
        ctu: "gis",
        readableCtuName: "GIS",
        gadget: "operatorpvp_barrage_killswithturret"
    },
    'maverick': {
        id: "maverick",
        side: "atk",
        name: "maverick",
        readableName: "Maverick",
        ctu: "gsutr",
        readableCtuName: "GSUTR",
        fullIndex: "2:10",
        gadget: "operatorpvp_maverick_wallbreached"
    },
    'clash': {
        id: "clash",
        side: "def",
        name: "clash",
        readableName: "Clash",
        ctu: "gsutr",
        readableCtuName: "GSUTR",
        fullIndex: "3:10",
        gadget: "operatorpvp_clash_sloweddown"
    },
    'kaid': {
        id: "kaid",
        side: "def",
        name: "kaid",
        readableName: "Kaid",
        ctu: "gigr",
        readableCtuName: "GIGR",
        fullIndex: "3:11",
        gadget: "operatorpvp_Nomad_Assist"
    },
    'nomad': {
        id: "nomad",
        side: "atk",
        name: "nomad",
        readableName: "Nomad",
        ctu: "gigr",
        readableCtuName: "GIGR",
        fullIndex: "2:11",
        gadget: "operatorpvp_Kaid_Electroclaw_Hatches"
    },
    'mozzie': {
        id: "mozzie",
        side: "def",
        name: "mozzie",
        readableName: "Mozzie",
        ctu: "sasr",
        readableCtuName: "SASR",
        fullIndex: "3:12",
        gadget: "nothing"
    },
    'gridlock': {
        id: "gridlock",
        side: "atk",
        name: "gridlock",
        readableName: "Gridlock",
        ctu: "sasr",
        readableCtuName: "SASR",
        fullIndex: "2:12",
        gadget: "nothing"
    }
};

// let OperatorGadgets: Array<string> = []
// OPERATORS.forEach((op) => {
//     if (op.gadget !== 'nothing') {
//         OperatorGadgets.push(op.gadget)
//     }
// })

export const STATS = {
    casual: {
        deaths: 'casualpvp_death',
        lost: 'casualpvp_matchlost',
        played: 'casualpvp_matchplayed',
        won: 'casualpvp_matchwon',
        timePlayed: 'casualpvp_timeplayed',
        kills: 'casualpvp_kills',
    },
    custom: {
        timePlayed: 'custompvp_timeplayed',
    },
    general: {
        assists: 'generalpvp_killassists',
        meleeKills: 'generalpvp_meleekills',
        penetrationKills: 'generalpvp_penetrationkills',
        revives: 'generalpvp_revive',
        blindKills: 'generalpvp_blindkills',
        dbno: 'generalpvp_dbno',
        dbnoAssists: 'generalpvp_dbnoassists',
        gadgetsDestroyed: 'generalpvp_gadgetdestroy',
        hostageDefense: 'generalpvp_hostagedefense',
        hostageRescue: 'generalpvp_hostagerescue',
        rappelBreaches: 'generalpvp_rappelbreach',
        revivesDenied: 'generalpvp_revivedenied',
        serverAggression: 'generalpvp_serveraggression',
        serverDefender: 'generalpvp_serverdefender',
        serversHacked: 'generalpvp_servershacked',
        suicides: 'generalpvp_suicide',
        deaths: 'generalpvp_death',
        lost: 'generalpvp_matchlost',
        played: 'generalpvp_matchplayed',
        won: 'generalpvp_matchwon',
        timePlayed: 'generalpvp_timeplayed',
        kills: 'generalpvp_kills',
        headshot: 'generalpvp_headshot',
        bulletsFired: 'generalpvp_bulletfired',
        bulletsHit: 'generalpvp_bullethit',
        barricadesDeployed: 'generalpvp_barricadedeployed',
        reinforcementsDeployed: 'generalpvp_reinforcementdeployed'
    },
    ranked: {
        deaths: 'rankedpvp_death',
        lost: 'rankedpvp_matchlost',
        played: 'rankedpvp_matchplayed',
        won: 'rankedpvp_matchwon',
        timePlayed: 'rankedpvp_timeplayed',
        kills: 'rankedpvp_kills',
    },
    secure: {
        bestScore: 'secureareapvp_bestscore',
        lost: 'secureareapvp_matchlost',
        played: 'secureareapvp_matchplayed',
        won: 'secureareapvp_matchwon',
        timePlayed: 'secureareapvp_timeplayed',
    },
    hostage: {
        bestScore: 'rescuehostagepvp_bestscore',
        lost: 'rescuehostagepvp_matchlost',
        played: 'rescuehostagepvp_matchplayed',
        won: 'rescuehostagepvp_matchwon',
        timePlayed: 'rescuehostagepvp_timeplayed',
    },
    bomb: {
        bestScore: 'plantbombpvp_bestscore',
        lost: 'plantbombpvp_matchlost',
        played: 'plantbombpvp_matchplayed',
        won: 'plantbombpvp_matchwon',
        timePlayed: 'plantbombpvp_timeplayed',
    },
    weapons: {}
}

// TODO weapons & operators
