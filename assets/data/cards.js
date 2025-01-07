/**
 * types
 * 0 close combat
 * 1 ranged
 * 2 siege
 * 3 leader
 * 4 special
 * 5 weather
 */

module.exports = {
  "none": {
    name: "none",
    power: 0,
    ability: null,
    img: "",
    faction: "northern",
    type: 0
  },
  "redanian_foot_soldier1": {
    name: "Redanian Foot Soldier",
    power: 1,
    ability: null,
    img: "foot_soldier1",
    faction: "northern",
    type: 0
  },
  "redanian_foot_soldier2": {
    name: "Redanian Foot Soldier",
    power: 1,
    ability: null,
    img: "foot_soldier2",
    faction: "northern",
    type: 0
  },
  "poor_fucking_infantry": {
    name: "Poor Fucking Infantry",
    power: 1,
    ability: "tight_bond",
    img: "infantry",
    faction: "northern",
    type: 0
  },
  "yarpen_zigrin": {
    name: "Yarpen Zigrin",
    power: 2,
    ability: null,
    img: "yarpen",
    faction: "northern",
    type: 0
  },
  "blue_stripes_commando": {
    name: "Blue Stripes Commando",
    power: 4,
    ability: "tight_bond",
    img: "commando",
    faction: "northern",
    type: 0
  },
  "sigismund_dijkstra": {
    name: "Sigismund Dijkstra",
    power: 4,
    ability: "spy",
    img: "dijkstra",
    faction: "northern",
    type: 0
  },
  "prince_stennis": {
    name: "Prince Stennis",
    power: 5,
    ability: "spy",
    img: "stennis",
    faction: "northern",
    type: 0
  },
  "siegfried_of_denesle": {
    name: "Siegfried of Denesle",
    power: 5,
    ability: null,
    img: "siegfried",
    faction: "northern",
    type: 0
  },
  "ves": {
    name: "Ves",
    power: 5,
    ability: null,
    img: "ves",
    faction: "northern",
    type: 0
  },
  "vernon_roche": {
    name: "Vernon Roche",
    power: 10,
    ability: "hero",
    img: "roche",
    faction: "northern",
    type: 0
  },
  "john_natalis": {
    name: "John Natalis",
    power: 10,
    ability: "hero",
    img: "natalis",
    faction: "northern",
    type: 0
  },
  "sheldon_skaggs": {
    name: "Sheldon Skaggs",
    power: 4,
    ability: null,
    img: "skaggs",
    faction: "northern",
    type: 1
  },
  "sabrina_glevissig": {
    name: "Sabrina Glevissig",
    power: 4,
    ability: null,
    img: "sabrina",
    faction: "northern",
    type: 1
  },
  "crinfrid_reavers_dragon_hunter": {
    name: "Crinfrid Reaver's Dragon Hunter",
    power: 5,
    ability: "tight_bond",
    img: "crinfrid",
    faction: "northern",
    type: 1
  },
  "sile_de_tansarville": {
    name: "Síle de Tansarville",
    power: 5,
    ability: null,
    img: "sile",
    faction: "northern",
    type: 1
  },
  "keira_metz": {
    name: "Keira Metz",
    power: 5,
    ability: null,
    img: "keira",
    faction: "northern",
    type: 1
  },
  "dethmold": {
    name: "Dethmold",
    power: 6,
    ability: null,
    img: "dethmold",
    faction: "northern",
    type: 1
  },
  "kaedweni_siege_expert1": {
    name: "Kaedweni Siege Expert",
    power: 1,
    ability: "morale_boost",
    img: "siege_expert1",
    faction: "northern",
    type: 2
  },
  "kaedweni_siege_expert2": {
    name: "Kaedweni Siege Expert",
    power: 1,
    ability: "morale_boost",
    img: "siege_expert2",
    faction: "northern",
    type: 2
  },
  "kaedweni_siege_expert3": {
    name: "Kaedweni Siege Expert",
    power: 1,
    ability: "morale_boost",
    img: "siege_expert3",
    faction: "northern",
    type: 2
  },
  "dun_banner_medic": {
    name: "Dun Banner Medic",
    power: 5,
    ability: "medic",
    img: "medic",
    faction: "northern",
    type: 2
  },
  "ballista1": {
    name: "Ballista",
    power: 6,
    ability: null,
    img: "ballista1",
    faction: "northern",
    type: 2
  },
  "ballista2": {
    name: "Ballista",
    power: 6,
    ability: null,
    img: "ballista2",
    faction: "northern",
    type: 2
  },
  "trebuchet1": {
    name: "Trebuchet",
    power: 6,
    ability: null,
    img: "trebuchet1",
    faction: "northern",
    type: 2
  },
  "trebuchet2": {
    name: "Trebuchet",
    power: 6,
    ability: null,
    img: "trebuchet2",
    faction: "northern",
    type: 2
  },
  "thaler": {
    name: "Thaler",
    power: 1,
    ability: "spy",
    img: "thaler",
    faction: "northern",
    type: 2
  },
  "foltest_king_of_temeria": {
    name: "Foltest: King of Temeria",
    power: -1,
    ability: "foltest_leader1",
    img: "foltest_king",
    faction: "northern",
    type: 3
  },
  "foltest_lord_commander": {
    name: "Foltest: Lord Commander of the North",
    power: -1,
    ability: "foltest_leader2",
    img: "foltest_commander",
    faction: "northern",
    type: 3
  },
  "foltest_siegemaster": {
    name: "Foltest: The Siegemaster",
    power: -1,
    ability: "foltest_leader3",
    img: "foltest_siege",
    faction: "northern",
    type: 3
  },
  "foltest_forged": {
    name: "Foltest: The Steel-Forged",
    power: -1,
    ability: "foltest_leader4",
    img: "foltest_forged",
    faction: "northern",
    type: 3
  },
  "foltest_son_of_medel": {
    name: "Foltest: Son of Medell",
    power: -1,
    ability: "foltest_leader5",
    img: "foltest_son",
    faction: "northern",
    type: 3
  },
  "philippa_eilhart": {
    name: "Philippa Eilhart",
    power: 10,
    ability: "hero",
    img: "eilhart",
    faction: "northern",
    type: 1
  },
  "esterad_thyssen": {
    name: "Esterad Thyssen",
    power: 10,
    ability: "hero",
    img: "thyssen",
    faction: "northern",
    type: 0
  },
  "siege_tower": {
    name: "Siege Tower",
    power: 6,
    ability: null,
    img: "siege_tower",
    faction: "northern",
    type: 2
  },
  "catapult": {
    name: "Catapult",
    power: 8,
    ability: "tight_bond",
    img: "catapult",
    faction: "northern",
    type: 2
  },
  "decoy": {
    name: "Decoy",
    power: -1,
    ability: "decoy",
    img: "decoy",
    faction: "neutral",
    type: 4
  },
  "scorch": {
    name: "Scorch",
    power: -1,
    ability: "scorch_card",
    img: "scorch",
    faction: "neutral",
    type: 4
  },
  "commanders_horn": {
    name: "Commander's Horn",
    power: -1,
    ability: "commanders_horn_card",
    img: "horn",
    faction: "neutral",
    type: 4
  },
  "impenetrable_fog": {
    name: "Impenetrable Fog",
    power: -1,
    ability: "weather_fog",
    img: "fog",
    faction: "neutral",
    type: 5
  },
  "biting_frost": {
    name: "Biting Frost",
    power: -1,
    ability: "weather_frost",
    img: "frost",
    faction: "neutral",
    type: 5
  },
  "torrential_rain": {
    name: "Torrential Rain",
    power: -1,
    ability: "weather_rain",
    img: "rain",
    faction: "neutral",
    type: 5
  },
  "clear_weather": {
    name: "Clear Weather",
    power: -1,
    ability: "weather_clear",
    img: "clear",
    faction: "neutral",
    type: 5
  },
  "avallach": {
    name: "Avallac'h",
    power: 0,
    ability: ["hero", "spy"],
    img: "avallach",
    faction: "neutral",
    type: 0
  },
  "dandelion": {
    name: "Dandelion",
    power: 2,
    ability: "commanders_horn",
    img: "dandelion",
    faction: "neutral",
    type: 0
  },
  "emiel": {
    name: "Emiel Regis Rohellec Terzieff",
    power: 5,
    ability: null,
    img: "emiel",
    faction: "neutral",
    type: 0
  },
  "zoltan": {
    name: "Zoltan Chivay",
    power: 5,
    ability: null,
    img: "zoltan",
    faction: "neutral",
    type: 0
  },
  "vesemir": {
    name: "Vesemir",
    power: 6,
    ability: null,
    img: "vesemir",
    faction: "neutral",
    type: 0
  },
  "villentretenmerth": {
    name: "Villentretenmerth ",
    power: 7,
    ability: "scorch",
    img: "villentretenmerth",
    faction: "neutral",
    type: 0
  },
  "triss": {
    name: "Triss Merigold",
    power: 7,
    ability: "hero",
    img: "triss",
    faction: "neutral",
    type: 0
  },
  "yen": {
    name: "Yennefer of Vengerberg",
    power: 7,
    ability: ["hero", "medic"],
    img: "yen",
    faction: "neutral",
    type: 1
  },
  "ciri": {
    name: "Cirilla Fiona Elen Rianno",
    power: 15,
    ability: "hero",
    img: "ciri",
    faction: "neutral",
    type: 0
  },
  "geralt": {
    name: "Geralt of Rivia",
    power: 15,
    ability: "hero",
    img: "geralt",
    faction: "neutral",
    type: 0
  },
  "francesca_pureblood_elf": {
    name: "Francesca Findabair: Pureblood Elf",
    power: -1,
    ability: "francesca_leader1",
    img: "francesca_pureblood",
    faction: "scoiatael",
    type: 3
  },
  "francesca_the_beautiful": {
    name: "Francesca Findabair: The Beautiful",
    power: -1,
    ability: "francesca_leader2",
    img: "francesca_beautiful",
    faction: "scoiatael",
    type: 3
  },
  "francesca_daisy_of_the_valley": {
    name: "Francesca Findabair: Daisy of The Valley",
    power: -1,
    ability: "francesca_leader3",
    img: "francesca_daisy",
    faction: "scoiatael",
    type: 3
  },
  "francesca_queen_of_dol_blathanna": {
    name: "Francesca Findabair: Queen of Dol Blathanna",
    power: -1,
    ability: "francesca_leader4",
    img: "francesca_queen",
    faction: "scoiatael",
    type: 3
  },
  "francesca_hope_of_the_aen_seidhe": {
    name: "Francesca Findabair: Hope of the Aen Seidhe",
    power: -1,
    ability: "francesca_leader5",
    img: "francesca_hope",
    faction: "scoiatael",
    type: 3
  },
  "saesenthessis": {
    name: "Saesenthessis",
    power: 10,
    ability: "hero",
    img: "saesenthessis",
    faction: "scoiatael",
    type: 1
  },
  "iorveth": {
    name: "Iorveth",
    power: 10,
    ability: "hero",
    img: "iorveth",
    faction: "scoiatael",
    type: 1
  },
  "isengrim_faoiltiarnah": {
    name: "Isengrim Faoiltiarnah",
    power: 10,
    ability: ["hero", "morale_boost"],
    img: "isengrim",
    faction: "scoiatael",
    type: 0
  },
  "eithne": {
    name: "Eithne",
    power: 10,
    ability: "hero",
    img: "eithne",
    faction: "scoiatael",
    type: 1
  },
  "havekar_healer1": {
    name: "Havekar Healer",
    power: 0,
    ability: "medic",
    img: "healer1",
    faction: "scoiatael",
    type: 1
  },
  "havekar_healer2": {
    name: "Havekar Healer",
    power: 0,
    ability: "medic",
    img: "healer2",
    faction: "scoiatael",
    type: 1
  },
  "havekar_healer3": {
    name: "Havekar Healer",
    power: 0,
    ability: "medic",
    img: "healer3",
    faction: "scoiatael",
    type: 1
  },
  "riordain": {
    name: "Riordain",
    power: 1,
    ability: null,
    img: "riordain",
    faction: "scoiatael",
    type: 1
  },
  "toruviel": {
    name: "Toruviel",
    power: 2,
    ability: null,
    img: "toruviel",
    faction: "scoiatael",
    type: 1
  },
  "elven_skirmisher1": {
    name: "Elven Skirmisher",
    power: 2,
    ability: "muster",
    musterType: "skirmisher",
    img: "elven_skirmisher1",
    faction: "scoiatael",
    type: 1
  },
  "elven_skirmisher2": {
    name: "Elven Skirmisher",
    power: 2,
    ability: "muster",
    musterType: "skirmisher",
    img: "elven_skirmisher2",
    faction: "scoiatael",
    type: 1
  },
  "elven_skirmisher3": {
    name: "Elven Skirmisher",
    power: 2,
    ability: "muster",
    musterType: "skirmisher",
    img: "elven_skirmisher3",
    faction: "scoiatael",
    type: 1
  },
  "dwarven_skirmisher1": {
    name: "Dwarven Skirmisher",
    power: 3,
    ability: "muster",
    musterType: "skirmisher",
    img: "dwarven_skirmisher1",
    faction: "scoiatael",
    type: 0
  },
  "dwarven_skirmisher2": {
    name: "Dwarven Skirmisher",
    power: 3,
    ability: "muster",
    musterType: "skirmisher",
    img: "dwarven_skirmisher2",
    faction: "scoiatael",
    type: 0
  },
  "dwarven_skirmisher3": {
    name: "Dwarven Skirmisher",
    power: 3,
    ability: "muster",
    musterType: "skirmisher",
    img: "dwarven_skirmisher3",
    faction: "scoiatael",
    type: 0
  },
  "ciaran_aep_easnillien": {
    name: "Ciaran aep Easnillien",
    power: 3,
    ability: "agile",
    img: "easnillien",
    faction: "scoiatael",
    type: 0
  },
  "vrihedd_brigade_recruit": {
    name: "Vrihedd Brigade Recruit",
    power: 4,
    ability: null,
    img: "recruit",
    faction: "scoiatael",
    type: 1
  },
  "dol_blathanna_archer": {
    name: "Dol Blathanna Archer",
    power: 4,
    ability: null,
    img: "archer",
    faction: "scoiatael",
    type: 1
  },
  "havekar_smuggler1": {
    name: "Havekar Smuggler",
    power: 5,
    ability: "muster",
    musterType: "smuggler",
    img: "smuggler1",
    faction: "scoiatael",
    type: 0
  },
  "havekar_smuggler2": {
    name: "Havekar Smuggler",
    power: 5,
    ability: "muster",
    musterType: "smuggler",
    img: "smuggler2",
    faction: "scoiatael",
    type: 0
  },
  "havekar_smuggler3": {
    name: "Havekar Smuggler",
    power: 5,
    ability: "muster",
    musterType: "smuggler",
    img: "smuggler3",
    faction: "scoiatael",
    type: 0
  },
  "mahakaman_defender1": {
    name: "Mahakaman Defender",
    power: 5,
    ability: null,
    img: "defender1",
    faction: "scoiatael",
    type: 0
  },
  "mahakaman_defender2": {
    name: "Mahakaman Defender",
    power: 5,
    ability: null,
    img: "defender2",
    faction: "scoiatael",
    type: 0
  },
  "mahakaman_defender3": {
    name: "Mahakaman Defender",
    power: 5,
    ability: null,
    img: "defender3",
    faction: "scoiatael",
    type: 0
  },
  "mahakaman_defender4": {
    name: "Mahakaman Defender",
    power: 5,
    ability: null,
    img: "defender4",
    faction: "scoiatael",
    type: 0
  },
  "mahakaman_defender5": {
    name: "Mahakaman Defender",
    power: 5,
    ability: null,
    img: "defender5",
    faction: "scoiatael",
    type: 0
  },
  "vrihedd_brigade_veteran1": {
    name: "Vrihedd Brigade Veteran",
    power: 5,
    ability: "agile",
    img: "veteran1",
    faction: "scoiatael",
    type: 0
  },
  "vrihedd_brigade_veteran2": {
    name: "Vrihedd Brigade Veteran",
    power: 5,
    ability: "agile",
    img: "veteran2",
    faction: "scoiatael",
    type: 0
  },
  "dennis_cranmer": {
    name: "Dennis Cranmer",
    power: 6,
    ability: null,
    img: "cranmer",
    faction: "scoiatael",
    type: 0
  },
  "filavandrel_aen_fidhail": {
    name: "Filavandrel aén Fidháil",
    power: 6,
    ability: "agile",
    img: "fidhail",
    faction: "scoiatael",
    type: 0
  },
  "ida_emean_aep_sivney": {
    name: "Ida Emean aep Sivney",
    power: 6,
    ability: null,
    img: "sivney",
    faction: "scoiatael",
    type: 1
  },
  "yaevinn": {
    name: "Yaevinn",
    power: 6,
    ability: "agile",
    img: "yaevinn",
    faction: "scoiatael",
    type: 0
  },
  "barclay_els": {
    name: "Barclay Els",
    power: 6,
    ability: "agile",
    img: "barclay",
    faction: "scoiatael",
    type: 0
  },
  "dol_blathanna_scout1": {
    name: "Dol Blathanna Scout",
    power: 6,
    ability: "agile",
    img: "scout1",
    faction: "scoiatael",
    type: 0
  },
  "dol_blathanna_scout2": {
    name: "Dol Blathanna Scout",
    power: 6,
    ability: "agile",
    img: "scout2",
    faction: "scoiatael",
    type: 0
  },
  "dol_blathanna_scout3": {
    name: "Dol Blathanna Scout",
    power: 6,
    ability: "agile",
    img: "scout3",
    faction: "scoiatael",
    type: 0
  },
  "milva": {
    name: "Milva",
    power: 10,
    ability: "morale_boost",
    img: "milva",
    faction: "scoiatael",
    type: 1
  },
  "schirru": {
    name: "Schirrú",
    power: 6,
    ability: "scorch_siege",
    img: "schirru",
    faction: "scoiatael",
    type: 2
  },
  "eredin_commander_of_the_red_riders": {
    name: "Eredin: Commander of the Red Riders",
    power: -1,
    ability: "eredin_leader1",
    img: "eredin_commander",
    faction: "monster",
    type: 3
  },
  "eredin_bringer_of_death": {
    name: "Eredin: Bringer of Death",
    power: -1,
    ability: "eredin_leader2",
    img: "eredin_bringer",
    faction: "monster",
    type: 3
  },
  "eredin_destroyer_of_worlds": {
    name: "Eredin: Destroyer of Worlds",
    power: -1,
    ability: "eredin_leader3",
    img: "eredin_destroyer",
    faction: "monster",
    type: 3
  },
  "eredin_king_of_the_wild_hunt": {
    name: "Eredin: King of The Wild Hunt",
    power: -1,
    ability: "eredin_leader4",
    img: "eredin_king",
    faction: "monster",
    type: 3
  },
  "eredin_the_treacherous": {
    name: "Eredin: The Treacherous",
    power: -1,
    ability: "eredin_leader5",
    img: "eredin_treacherous",
    faction: "monster",
    type: 3
  },
  "kayran": {
    name: "Kayran",
    power: 8,
    ability: ["hero", "morale_boost", "agile"],
    img: "kayran",
    faction: "monster",
    type: 0
  },
  "leshen": {
    name: "Leshen",
    power: 10,
    ability: "hero",
    img: "leshen",
    faction: "monster",
    type: 1
  },
  "imlerith": {
    name: "Imlerith",
    power: 10,
    ability: "hero",
    img: "imlerith",
    faction: "monster",
    type: 0
  },
  "draug": {
    name: "Draug",
    power: 10,
    ability: "hero",
    img: "draug",
    faction: "monster",
    type: 0
  },
  "ghoul1": {
    name: "Ghoul",
    power: 1,
    ability: "muster",
    musterType: "ghoul",
    img: "ghoul1",
    faction: "monster",
    type: 0
  },
  "ghoul2": {
    name: "Ghoul",
    power: 1,
    ability: "muster",
    musterType: "ghoul",
    img: "ghoul2",
    faction: "monster",
    type: 0
  },
  "ghoul3": {
    name: "Ghoul",
    power: 1,
    ability: "muster",
    musterType: "ghoul",
    img: "ghoul3",
    faction: "monster",
    type: 0
  },
  "nekker1": {
    name: "Nekker",
    power: 2,
    ability: "muster",
    musterType: "nekker",
    img: "nekker1",
    faction: "monster",
    type: 0
  },
  "nekker2": {
    name: "Nekker",
    power: 2,
    ability: "muster",
    musterType: "nekker",
    img: "nekker2",
    faction: "monster",
    type: 0
  },
  "nekker3": {
    name: "Nekker",
    power: 2,
    ability: "muster",
    musterType: "nekker",
    img: "nekker3",
    faction: "monster",
    type: 0
  },
  "wyvern": {
    name: "Wyvern",
    power: 2,
    ability: null,
    img: "wyvern",
    faction: "monster",
    type: 1
  },
  "foglet": {
    name: "Foglet",
    power: 2,
    ability: null,
    img: "foglet",
    faction: "monster",
    type: 0
  },
  "celaeno_harpy": {
    name: "Celaeno Harpy",
    power: 2,
    ability: "agile",
    img: "celaeno_harpy",
    faction: "monster",
    type: 0
  },
  "gargoyle": {
    name: "Gargoyle",
    power: 2,
    ability: null,
    img: "gargoyle",
    faction: "monster",
    type: 1
  },
  "cockatrice": {
    name: "Cockatrice",
    power: 2,
    ability: null,
    img: "cockatrice",
    faction: "monster",
    type: 1
  },
  "harpy": {
    name: "Harpy",
    power: 2,
    ability: "agile",
    img: "harpy",
    faction: "monster",
    type: 0
  },
  "endrega": {
    name: "Endrega",
    power: 2,
    ability: null,
    img: "endrega",
    faction: "monster",
    type: 1
  },
  "vampire_bruxa": {
    name: "Vampire: Bruxa",
    power: 4,
    ability: "muster",
    musterType: "vampire",
    img: "vampire_bruxa",
    faction: "monster",
    type: 0
  },
  "vampire_fleder": {
    name: "Vampire: Fleder",
    power: 4,
    ability: "muster",
    musterType: "vampire",
    img: "vampire_fleder",
    faction: "monster",
    type: 0
  },
  "vampire_garkain": {
    name: "Vampire: Garkain",
    power: 4,
    ability: "muster",
    musterType: "vampire",
    img: "vampire_garkain",
    faction: "monster",
    type: 0
  },
  "vampire_ekimmara": {
    name: "Vampire: Ekimmara",
    power: 4,
    ability: "muster",
    musterType: "vampire",
    img: "vampire_ekimmara",
    faction: "monster",
    type: 0
  },
  "arachas1": {
    name: "Arachas",
    power: 4,
    ability: "muster",
    musterType: "arachas",
    img: "arachas1",
    faction: "monster",
    type: 0
  },
  "arachas2": {
    name: "Arachas",
    power: 4,
    ability: "muster",
    musterType: "arachas",
    img: "arachas2",
    faction: "monster",
    type: 0
  },
  "arachas3": {
    name: "Arachas",
    power: 4,
    ability: "muster",
    musterType: "arachas",
    img: "arachas3",
    faction: "monster",
    type: 0
  },
  "botchling": {
    name: "Botchling",
    power: 4,
    ability: null,
    img: "botchling",
    faction: "monster",
    type: 0
  },
  "forktail": {
    name: "Forktail",
    power: 5,
    ability: null,
    img: "forktail",
    faction: "monster",
    type: 0
  },
  "plague_maiden": {
    name: "Plague Maiden",
    power: 5,
    ability: null,
    img: "forktail",
    faction: "monster",
    type: 0
  },
  "griffin": {
    name: "Griffin",
    power: 5,
    ability: null,
    img: "griffin",
    faction: "monster",
    type: 0
  },
  "werewolf": {
    name: "Werewolf",
    power: 5,
    ability: null,
    img: "werewolf",
    faction: "monster",
    type: 0
  },
  "frightener": {
    name: "Frightener",
    power: 5,
    ability: null,
    img: "frightener",
    faction: "monster",
    type: 0
  },
  "ice_giant": {
    name: "Ice Giant",
    power: 5,
    ability: null,
    img: "ice_giant",
    faction: "monster",
    type: 2
  },
  "grave_hag": {
    name: "Grave Hag",
    power: 5,
    ability: null,
    img: "grave_hag",
    faction: "monster",
    type: 1
  },
  "toad": {
    name: "Toad",
    power: 6,
    ability: "scorch_range",
    img: "toad",
    faction: "monster",
    type: 1
  },
  "vampire_katakan": {
    name: "Vampire: Katakan",
    power: 5,
    ability: "muster",
    musterType: "vampire",
    img: "vampire_katakan",
    faction: "monster",
    type: 0
  },
  "crone_whispess": {
    name: "Crone: Whispess",
    power: 6,
    ability: "muster",
    musterType: "crone",
    img: "crone_whispess",
    faction: "monster",
    type: 0
  },
  "crone_brewess": {
    name: "Crone: Brewess",
    power: 6,
    ability: "muster",
    musterType: "crone",
    img: "crone_brewess",
    faction: "monster",
    type: 0
  },
  "crone_weavess": {
    name: "Crone: Weavess",
    power: 6,
    ability: "muster",
    musterType: "crone",
    img: "crone_weavess",
    faction: "monster",
    type: 0
  },
  "arachas_behemoth": {
    name: "Arachas Behemoth",
    power: 6,
    ability: "muster",
    musterType: "arachas",
    img: "arachas_behemoth",
    faction: "monster",
    type: 2
  },
  "fire_elemental": {
    name: "Fire Elemental",
    power: 6,
    ability: null,
    img: "fire_elemental",
    faction: "monster",
    type: 2
  },
  "fiend": {
    name: "Fiend",
    power: 6,
    ability: null,
    img: "fiend",
    faction: "monster",
    type: 0
  },
  "earth_elemental": {
    name: "Earth Elemental",
    power: 6,
    ability: null,
    img: "earth_elemental",
    faction: "monster",
    type: 2
  },
  "emreis_emperor": {
    name: "Emhyr var Emreis: Emperor of Nilfgaard",
    power: -1,
    ability: "emreis_leader1",
    img: "emhyr_emperor",
    faction: "nilfgaard",
    type: 3
  },
  "emreis_imperial": {
    name: "Emhyr var Emreis: His Imperial Majesty",
    power: -1,
    ability: "emreis_leader2",
    img: "emhyr_imperial",
    faction: "nilfgaard",
    type: 3
  },
  "emreis_white": {
    name: "Emhyr var Emreis: The White Flame",
    power: -1,
    ability: "emreis_leader3",
    img: "emhyr_white",
    faction: "nilfgaard",  
    type: 3
  },
  "emreis_relentless": {
    name: "Emhyr var Emreis: the Relentless",
    power: -1,
    ability: "emreis_leader4",
    img: "emhyr_relentless",
    faction: "nilfgaard",
    type: 3
  },
  "emreis_invader": {
    name: "Emhyr var Emreis: Invader of the North",
    power: -1,
    ability: "emreis_leader5",
    img: "emhyr_invader",
    faction: "nilfgaard",
    type: 3
  },
  "tibor_eggebracht": {
    name: "test",
    power: 10,
    ability: "hero",
    img: "eggebracht",
    faction: "nilfgaard",
    type: 1
  },
  "letho_of_gulet": {
    name: "Letho of Gulet",
    power: 10,
    ability: "hero",
    img: "letho",
    faction: "nilfgaard",
    type: 0
  },
  "morvran_voorhis": {
    name: "Morvran Voorhis",
    power: 10,
    ability: "hero",
    img: "voorhis",
    faction: "nilfgaard",
    type: 2
  },
  "menno_coehoorn": {
    name: "Menno Coehoorn",
    power: 10,
    ability: ["hero", "medic"],
    img: "menno",
    faction: "nilfgaard",
    type: 0
  },
  "siege_technician": {
    name: "Siege Technician",
    power: 0,
    ability: "medic",
    img: "siege_tech",
    faction: "nilfgaard",
    type: 2
  },
  "etolian_auxiliary_archers1": {
    name: "Etolian Auxiliary Archers",
    power: 1,
    ability: "medic",
    img: "aux_archers1",
    faction: "nilfgaard",
    type: 1
  },
  "etolian_auxiliary_archers2": {
    name: "Etolian Auxiliary Archers",
    power: 1,
    ability: "medic",
    img: "aux_archers2",
    faction: "nilfgaard",
    type: 1
  },
  "albrich": {
    name: "Albrich",
    power: 2,
    ability: null,
    img: "albrich",
    faction: "nilfgaard",
    type: 1
  },
  "sweers": {
    name: "Sweers",
    power: 2,
    ability: null,
    img: "sweers",
    faction: "nilfgaard",
    type: 2
  },
  "nausicaa_cavalry_rider": {
    name: "Nausicaa Cavalry Rider",
    power: 2,
    ability: "tight_bond",
    img: "nausicaa_cavalry_rider",
    faction: "nilfgaard",
    type: 0
  },
  "vreemde": {
    name: "Vreemde",
    power: 2,
    ability: null,
    img: "vreemde",
    faction: "nilfgaard",
    type: 0
  },
  "rotten_mangonel": {
    name: "Rotten Mangonel",
    power: 3,
    ability: null,
    img: "rotten_mangonel",
    faction: "nilfgaard",
    type: 2
  },
  "morteisen": {
    name: "Morteisen",
    power: 3,
    ability: null,
    img: "morteisen",
    faction: "nilfgaard",
    type: 0
  },
  "puttkammer": {
    name: "Puttkammer",
    power: 3,
    ability: null,
    img: "puttkammer",
    faction: "nilfgaard",
    type: 1
  },
  "impera_brigade_guard": {
    name: "Impera Brigade Guard",
    power: 3,
    ability: "tight_bond",
    img: "impera_brigade_guard",
    faction: "nilfgaard",
    type: 0
  },
  "vanhemar": {
    name: "Vanhemar",
    power: 4,
    ability: null,
    img: "vanhemar",
    faction: "nilfgaard",
    type: 1
  },
  "vattier_de_rideaux": {
    name: "Vattier de Rideaux",
    power: 4,
    ability: "spy",
    img: "vattier",
    faction: "nilfgaard",
    type: 0
  },
  "rainfarn": {
    name: "Rainfarn",
    power: 4,
    ability: null,
    img: "rainfarn",
    faction: "nilfgaard",
    type: 0
  },
  "cynthia": {
    name: "Cynthia",
    power: 4,
    ability: null,
    img: "cynthia",
    faction: "nilfgaard",
    type: 1
  },
  "zerrikanian_fire_scorpion": {
    name: "Zerrikanian Fire Scorpion",
    power: 5,
    ability: null,
    img: "fire_scorpion",
    faction: "nilfgaard",
    type: 2
  },
  "young_emmisary1": {
    name: "Young Emissary",
    power: 5,
    ability: "tight_bond",
    img: "young_emissary1",
    faction: "nilfgaard",
    type: 0
  },
  "young_emmisary2": {
    name: "Young Emissary",
    power: 5,
    ability: "tight_bond",
    img: "young_emissary2",
    faction: "nilfgaard",
    type: 0
  },
  "renuald_aep_matsen": {
    name: "Renuald aep Matsen",
    power: 5,
    ability: null,
    img: "renauld",
    faction: "nilfgaard",
    type: 1
  },
  "siege_engineer": {
    name: "Siege Engineer",
    power: 6,
    ability: null,
    img: "siege_engineer",
    faction: "nilfgaard",
    type: 2
  },
  "cahir_mawr_dyffryn_aep_ceallach": {
    name: "Cahir Mawr Dyffryn aep Ceallach",
    power: 6,
    ability: null,
    img: "ceallach",
    faction: "nilfgaard",
    type: 0
  },
  "fringilla_vigo": {
    name: "Fringilla Vigo",
    power: 6,
    ability: null,
    img: "vigo",
    faction: "nilfgaard",
    type: 1
  },
  "assire_var_anahid": {
    name: "Assire var Anahid",
    power: 6,
    ability: null,
    img: "assire_var_anahid",
    faction: "nilfgaard",
    type: 1
  },
  "shilard_fitz_oesterlen": {
    name: "Shilard Fitz-Oesterlen",
    power: 7,
    ability: "spy",
    img: "shilard",
    faction: "nilfgaard",
    type: 0
  },
  "stefan_skellen": {
    name: "Stefan Skellen",
    power: 9,
    ability: "spy",
    img: "stefan_skellen",
    faction: "nilfgaard",
    type: 0
  },
  "heavy_zerrikanian_fire_scorpion": {
    name: "Heavy Zerrikanian Fire Scorpion",
    power: 10,
    ability: null,
    img: "heavy_fire_scorpion",
    faction: "nilfgaard",
    type: 2
  },
  "black_infantry_archer1": {
    name: "Black Infantry Archer",
    power: 10,
    ability: null,
    img: "black_infantry_archer1",
    faction: "nilfgaard",
    type: 1
  },
  "black_infantry_archer2": {
    name: "Black Infantry Archer",
    power: 10,
    ability: null,
    img: "black_infantry_archer2",
    faction: "nilfgaard",
    type: 1
  },
  "kambi": {
    name: "Kambi",
    power: 0,
    ability: "summon_avenger",
    summonType: "hemdall",
    img: "kambi",
    faction: "skellige",
    type: 0
  },
  "birna_bran": {
    name: "Birna Bran",
    power: 2,
    ability: "medic",
    img: "birna",
    faction: "skellige",
    type: 0
  },
  "berserker": {
    name: "Berserker",
    power: 4,
    ability: "berserker",
    berserkerType: "transformed_vildkaarl",
    img: "berserker",
    faction: "skellige",
    type: 0
  },
  "shield_maiden1": {
    name: "Shield Maiden",
    power: 4,
    ability: "tight_bond",
    musterType: "shield_maiden",
    img: "shield_maiden1",
    faction: "skellige",
    type: 0
  },
  "shield_maiden2": {
    name: "Shield Maiden",
    power: 4,
    ability: "tight_bond",
    musterType: "shield_maiden",
    img: "shield_maiden2",
    faction: "skellige",
    type: 0
  },
  "shield_maiden3": {
    name: "Shield Maiden",
    power: 4,
    ability: "tight_bond",
    musterType: "shield_maiden",
    img: "shield_maiden3",
    faction: "skellige",
    type: 0
  },
  "skald": {
    name: "Clan Heymaey Skald",
    power: 4,
    ability: null,
    img: "skald",
    faction: "skellige",
    type: 0
  },
  "armorsmith": {
    name: "Clan Tordarroch Armorsmith",
    power: 4,
    ability: null,
    img: "armorsmith",
    faction: "skellige",
    type: 0
  },
  "donar_an_hindar": {
    name: "Donar an Hindar",
    power: 4,
    ability: null,
    img: "donar",
    faction: "skellige",
    type: 0
  },
  "svanrige": {
    name: "Svanrige",
    power: 4,
    ability: null,
    img: "svanrige",
    faction: "skellige",
    type: 0
  },
  "udalryk": {
    name: "Udalryk",
    power: 4,
    ability: null,
    img: "udalryk",
    faction: "skellige",
    type: 0
  },
  "blueboy_lugos": {
    name: "Blueboy Lugos",
    power: 6,
    ability: null,
    img: "blueboy",
    faction: "skellige",
    type: 0
  },
  "warrior": {
    name: "Clan an Craite Warrior",
    power: 6,
    ability: "tight_bond",
    img: "warrior",
    faction: "skellige",
    type: 0
  },
  "madman_lugos": {
    name: "Madman Lugos",
    power: 6,
    ability: null,
    img: "madman",
    faction: "skellige",
    type: 0
  },
  "olaf": {
    name: "Olaf",
    power: 12,
    ability: ["tight_bond", "agile"],
    img: "olaf",
    faction: "skellige",
    type: 0
  },
  "transformed_vildkaarl": {
    name: "Transformed Vildkaarl",
    power: 12,
    ability: "morale_boost",
    img: "vildkaarl",
    faction: "skellige",
    type: 0
  },
  "young_berserker": {
    name: "Young Berserker",
    power: 2,
    ability: "berserker",
    berserkerType: "transformed_young_vildkaarl",
    img: "young_berserker",
    faction: "skellige",
    type: 1
  },
  "light_longship": {
    name: "Light Longship",
    power: 4,
    ability: "muster",
    musterType: "light_longship",
    img: "light_longship",
    faction: "skellige",
    type: 1
  },
  "archer": {
    name: "Clan Brokvar Archer",
    power: 6,
    ability: null,
    img: "archer",
    faction: "skellige",
    type: 1
  },
  "pirate": {
    name: "Clan Dimun Pirate",
    power: 6,
    ability: "scorch_range",
    img: "pirate",
    faction: "skellige",
    type: 1
  },
  "transformed_young_vildkaarl": {
    name: "Transformed Young Vildkaarl",
    power: 6,
    ability: "tight_bond",
    img: "young_vildkaarl",
    faction: "skellige",
    type: 1
  },
  "draig_bon_dhu": {
    name: "Draig Bon-Dhu",
    power: 2,
    ability: "commanders_horn",
    img: "draig",
    faction: "skellige",
    type: 2
  },
  "holger_blackhand": {
    name: "Holger Blackhand",
    power: 4,
    ability: null,
    img: "holger",
    faction: "skellige",
    type: 2
  },
  "war_longship": {
    name: "War Longship",
    power: 6,
    ability: "tight_bond",
    img: "war_longship",
    faction: "skellige",
    type: 2
  },
  "hjalmar": {
    name: "Hjalmar",
    power: 10,
    ability: "hero",
    img: "hjalmar",
    faction: "skellige",
    type: 0
  },
  "cerys": {
    name: "Cerys",
    power: 10,
    ability: ["hero", "muster"],
    musterType: "shield_maiden",
    img: "cerys",
    faction: "skellige",
    type: 0
  },
  "hemdall": {
    name: "Hemdall",
    power: 11,
    ability: "hero",
    img: "hemdall",
    faction: "skellige",
    type: 0
  },
  "ermion": {
    name: "Ermion",
    power: 8,
    ability: ["hero", "mardroeme"],
    img: "ermion",
    faction: "skellige",
    type: 1
  },
  "crach_an_craite": {
    name: "Crach An Craite",
    power: -1,
    ability: "crach_an_craite",
    img: "crach_an_craite",
    faction: "skellige",
    type: 3
  },
  "king_bran": {
    name: "King Bran",
    power: -1,
    ability: "king_bran",
    img: "king_bran",
    faction: "skellige",
    type: 3
  },
  "skellige_storm": {
    name: "Skellige Storm",
    power: -1,
    ability: "weather_storm",
    img: "storm",
    faction: "neutral",
    type: 5
  },
  "mardroeme": {
    name: "Mardroeme",
    power: -1,
    ability: "mardroeme",
    img: "mardroeme",
    faction: "neutral",
    type: 4
  },
  "cow": {
    name: "Cow",
    power: 0,
    ability: "summon_avenger",
    summonType: "bovine_defense_force",
    img: "cow",
    faction: "neutral",
    type: 1
  },
  "gaunter_odimm": {
    name: "Gaunter O'Dimm",
    power: 2,
    ability: "muster",
    musterType: "gaunter_odimm",
    img: "gaunter_odimm",
    faction: "neutral",
    type: 2
  },
  "gaunter_odimm_darkness": {
    name: "Gaunter O'Dimm: Darkness",
    power: 4,
    ability: "muster",
    musterType: "gaunter_odimm",
    img: "gaunter_odimm_darkness",
    faction: "neutral",
    type: 1
  },
  "olgeird_von_everec": {
    name: "Olgeird von Everec",
    power: 6,
    ability: ["agile", "morale_boost"],
    img: "olgeird",
    faction: "neutral",
    type: 0
  },
  "bovine_defense_force": {
    name: "Bovine Defense Force",
    power: 8,
    img: "chort",
    faction: "neutral",
    type: 0
  },
}
