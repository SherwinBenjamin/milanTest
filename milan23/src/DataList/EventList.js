const data = [
  {
    id: 1,
    name: "Music",
    link: "h",
    color: "#faa307",
    bgImage: "../../utils/images/eventlistbg-music.png",
    bgGradientColor: "",
    textGradientColor: "",
    eventColor: "",
    events: [
      {
        id: "11",
        title: "",
        eventName: "Daw Masters",
      },
      {
        id: "12",
        title: "spin back DJ battle",
        eventName: "spin back",
        description:
          "An event to showcase disc jockey's skills and techniques to enthuse the audience",
        teamsize: "solo",
        mode: "offline",
        timelimit: "10 minutes showcase +1 min setup",
        judgingcriteria:
          "Gear used, Track Selection, Technical Skills, Transitions, Creativity, Crowd response",
        rules: [
          "1. All Participants are expected to carry their music in Pen Drives. (Laptop iS also permitted to connect with the industry standard gear provided).",
          "2. Participants are free to use remixes however use of pre-mixes, pre edited and mashups are strictly not permitted.",
          "3. Participants are free to USe Acapella, SFX, Hot cues.",
          "4. Decision Of the judges will be final and binding,",
          "5. In the case ot a stoppage ot the performance by the participant, the following rules Will apply:",
          "-If the stoppage is due to equipment failure and not due to the fault Of the participant, the participant will be allowed to perform the set in its entirety from the beginning.",
          "-If the stoppage is due to equipment failure which is due to the fault of the participant, Participant may be allowed to readjust the equipment and continue the set where the equipment broke down.",
        ],
        note: "NOTE Further details and procedure (also regarding the equipment Which Will be provided) Will benotified, to the people Who register, prior to the event.",
        contact: [
          {
            name: "Raghav",
            contact: "+91 87696 77759",
          },
          {
            name: "Himberley",
            contact: "+91 98312 90910",
          },
        ],
        quote: "I'M A DJ. I GET THE PARTY STARTED.",
      },
      {
        id: "13",
        eventName: "Vibrato" 
      },
      {
        id: "14",
        eventName: "Alankar" 
      },
      {
        id: "15",
        eventName: "Symphony" 
      },
      {
        id: "16",
        eventName: "Resonance" 
      },
      {
        id: "17",
        eventName: "Fuzon" 
      },
      {
        id: "18",
        eventName: "Tarang" 
      },
      {
        id: "19",
        eventName: "Mic Drop" 
      },
      {
        id: "110",
        eventName: "Bars" 
      },
    ],
  },
  {
    id: 2,
    name: "Dance",
    link: "h",
    color: "#faa307",
    bgImage: require("../utils/images/eventlistbg-dance.png"),
    bgGradientColor: "",
    textGradientColor: "",
    eventColor: "",
    events: [
      {
        id: "21",
        eventName: "Western Solo (college level)" 
      },
      {
        id: "22",
        eventName: "Western Solo (professional level)" 
      },
      {
        id: "23",
        eventName: "Choreonite" 
      },
      {
        id: "24",
        eventName: "Dance Battle (1 vs 1)" 
      },
      {
        id: "25",
        eventName: "PETTARAP" 
      },
      {
        id: "26",
        eventName: "Classical Solo" 
      },
    ]
  },
  {
    id: 3,
    name: "Fashion",
    link: "h",
    color: "#f48c06",
    bgImage:"../utils/images/eventlistbg-fashion",
    bgGradientColor: "",
    textGradientColor: "",
    eventColor: "",
    events: [
      {
        id: "31",
        eventName: "Versa Style" 
      },
      {
        id: "32",
        eventName: "Black Haven" 
      },
      {
        id: "33",
        eventName: "Project Runway (designer ramp)" 
      },
      {
        id: "34",
        eventName: "Boho Chic" 
      },
      {
        id: "35",
        eventName: "Mr. and Ms.Milan" 
      },
      {
        id: "36",
        eventName: "La Vogue" 
      },
    ]
  },
  {
    id: 4,
    name: "Movies and Dramatics",
    link: "h",
    color: "#e85d04",
    bgImage:"../utils/images/eventlistbg-m&d",
    bgGradientColor: "",
    textGradientColor: "",
    eventColor: "",
    events: [
      {
        id: "41",
        eventName: "Nukkad Natak" 
      },
      {
        id: "42",
        eventName: "Stage Play" 
      },
      {
        id: "43",
        eventName: "Mime" 
      },
      {
        id: "44",
        eventName: "Standup Comedy" 
      },
      {
        id: "45",
        eventName: "Spotlight" 
      },
      {
        id: "46",
        eventName: "Impromptu" 
      },
      {
        id: "47",
        eventName: "Radio Play" 
      },
      {
        id: "48",
        eventName: "Short Film" 
      },
    ]
  },
  {
    id: 5,
    name: "Literary",
    link: "h",
    color: "#dc2f02",
    bgImage:"../utils/images/eventlistbg-literary",
    bgGradientColor: "",
    textGradientColor: "",
    eventColor: "",
    events: [
      {
        id: "51",
        eventName: "Slam Poetry" 
      },
      {
        id: "52",
        eventName: "JAM" 
      },
      {
        id: "53",
        eventName: "Koffee with Milan" 
      },
      {
        id: "54",
        eventName: "British Parliamentary Debate" 
      },
      {
        id: "55",
        eventName: "Turncoat" 
      },
      {
        id: "56",
        eventName: "Article Writing" 
      },
      {
        id: "57",
        eventName: "Smack a Little Laugh a Little" 
      },
      {
        id: "58",
        eventName: "App Cracker" 
      },
      {
        id: "59",
        eventName: "Nano Tale" 
      },
    ]
  },
  {
    id: 6,
    name: "Creative Arts",
    link: "h",
    color: "#d00000",
    bgImage:"../utils/images/eventlistbg-creativearts",
    bgGradientColor: "",
    textGradientColor: "",
    eventColor: "",
    events: [
      {
        id: "61",
        eventName: "Katushka" 
      },
      {
        id: "62",
        eventName: "Noventa" 
      },
      {
        id: "63",
        eventName: "Bhavachitram" 
      },
      {
        id: "64",
        eventName: "Graffiti" 
      },
      {
        id: "65",
        eventName: "Kawai" 
      },
      {
        id: "66",
        eventName: "Chunk Abstrato" 
      },
      {
        id: "67",
        eventName: "Totem" 
      },
    ]
  },
  {
    id: 7,
    name: "Quiz",
    link: "h",
    color: "#9d0208",
    bgImage:"../utils/images/eventlistbg-quiz",
    bgGradientColor: "",
    textGradientColor: "",
    eventColor: "",
    events: [
      {
        id: "71",
        eventName: "Let's Get Quizzical" 
      },
      {
        id: "72",
        eventName: "Les Quierables" 
      },
      {
        id: "73",
        eventName: "Mixed Doubles" 
      },
      {
        id: "74",
        eventName: "Jumble the Good Word" 
      },
    ]
  },
  {
    id: 8,
    name: "Gaming",
    link: "h",
    color: "#6a040f",
    bgImage:"../utils/images/eventlistbg-gaming",
    bgGradientColor: "",
    textGradientColor: "",
    eventColor: "",
    events: [
      {
        id: "81",
        eventName: "Valorant" 
      },
      {
        id: "82",
        eventName: "FIFA" 
      },
      {
        id: "83",
        eventName: "COD Mobile" 
      },
      {
        id: "84",
        eventName: "Clash Royale" 
      },
      {
        id: "85",
        eventName: "Stumble Guys" 
      },
      {
        id: "86",
        eventName: "CS GO" 
      },
    ]
  },
  {
    id: 9,
    name: "Self Defence",
    link: "h",
    color: "#370617",
    bgImage:"../utils/images/eventlistbg-selfdefence",
    bgGradientColor: "",
    textGradientColor: "",
    eventColor: "",
    event: [
      {
        id: "91",
        eventName: "Strengthmania" 
      },
    ]
  },
];

export default data;
