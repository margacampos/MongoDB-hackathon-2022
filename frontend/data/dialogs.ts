export interface Week{
    salute: {
        START:string[][];
        AFTER_EVENT:string[][];
        AFTER_TITLE:string[][];
        AFTER_LAYOUT:string[][];
    };
    goodbye: {
        START:string[][];
        AFTER_EVENT:string[][];
        AFTER_TITLE:string[][];
        AFTER_LAYOUT:string[][];
    };
    comment: {
        score: number;
        comment: {
            media:number;
            comment:string[];
        }[];
    }[];
    events: {
        eventId: string;
        dialogs: string[];
    }[];
}
interface Dialog{
        person: string;
        firstWeek: {
            salute: never[];
            goodbye: never[];
            comment: never[];
            events: {
                eventId: string;
                dialogs: string[];
            };
        };
        weeks:Week[];
} 
const NEWS_EDITOR = [
    
    [
        "Hello, my name is Jakub and I am the news editor.",
        "The first thing we need to do is assign a story for Thomas to cover.",
        "Here I have some of the current events, all you have to do is choose the one you think will fit better this weeks newspaper.",
        "Here is a note with what we are looking for these week. Remember to check it from time to time.",
        "Thomas will be here soon but you don't need to worry, I'll distract him a little bit, just focus on making the best decision.",
        "First weeks can be hard but you will do great, I know it."
    ],
    [

    ]
]
const MANAGING_EDITOR = [
    [
        "Welcome to the newsroom! I am Gabrielle the managing editor and I just saw your profile and thought you would be perfect for this job",
        "You will be working with Jakub the news editor, Aaliyah the art director and Thomas the reporter on the front page of our newspaper.",
        "Once you have finnished, the editor-in-chief will review your work and judge if it is ready to publish.",
        "Remember, there is a deadline! Let's see if you can handle the pressure!"
    ],
    [
        "Welcome back crew mate! You did great last week.",
        "Between you and me, the editor in chief was super happy you decided to come for another week.",
        "Well, I need to go now. Jakup must be arriving soon.",
        "Keep up the good work!"
    ],
    [
        "Last week was a tough one wasn't it?",
        "I heard the editor in chief wasn't too happy about your work but don't worry I'm sure this week will be better.",
        "Anyway, I need to go now. Remember to listen to your co-workers!",
    ],
    [
        "Happy fourth week! You are about to make one month here at the newsroom!",
        "I'm really happy to see you here. If I'm honest, I wasn't too sure you were going to stay.",
        "I have brought a few cupcakes to celebrate. If you see Aaliyah make sure to give her one, She is the only one I haven't seen this morning.",
    ]
]
const ART_EDITOR = [
    [
        "Was that Thomas running?",
        "Anyway, welcome to the newsroom. I'm the newspaper art director, Aaliyah.",
        "I was told both of us would be working on the front page today. I have some ideas for how I want it to look but I need to talk to Jakub, have you seen him?",
        "Well If you see him please tell him to give me the title so I can start planning",
        "Also, I am looking forward to working with you. See you!"
    ]
]
const REPORTER = [
    [
        "Sorry I'm a little late. I forgot you were starting today and got a little carried away talking to Jakub.",
        "I'm Thomas by the way, these team's reporter.",
        "I would show you arround or something but you know, It is a little late. Do you have the story I need to cover?",
        "Okay, thanks. It has been a pleasure meeting you! Hope we can talk more some other day!"
    ],

]
const dialogs:Dialog[] = [
    {
        person:"MANAGING_EDITOR",
        firstWeek: {
            salute: [],
            goodbye:[],
            comment:[],
            events:{
                        eventId: "firstweek",
                        //Each index leads to the next piece of dialog relating to this topic from the person
                        dialogs:[
                            "Welcome to your first week aboard! I am Grabielle and I love boats and the see",
                            "I heard Jakub brought cupcakes today, did he leave one for me?"
                        ]
                    }
        },
        weeks:[
            {
                salute:{
                    START:[["Hello"]],
                    AFTER_EVENT:[["Hi"]],
                    AFTER_TITLE:[["haoh"]],
                    AFTER_LAYOUT:[["haha"]]
                },
                goodbye:{
                    START:[["Goodbye"]],
                    AFTER_EVENT:[["Good bye"]],
                    AFTER_TITLE:[["Bye"]],
                    AFTER_LAYOUT:[["Agur yogur"]]
                },
                comment:[
                    {
                        score: 9,
                        comment: [
                            {
                                media:9,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:7,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:5,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:3,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:0,
                                comment: ["You did super great last week!"]
                            },
                    ]
                    },
                    {
                        score: 7,
                        comment: [
                            {
                                media:9,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:7,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:5,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:3,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:0,
                                comment: ["You did super great last week!"]
                            },
                    ]
                    },
                    
                    {
                        score: 5,
                        comment: [
                            {
                                media:9,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:7,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:5,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:3,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:0,
                                comment: ["You did super great last week!"]
                            },
                    ]
                    },
                    {
                        score: 3,
                        comment: [
                            {
                                media:9,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:7,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:5,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:3,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:0,
                                comment: ["You did super great last week!"]
                            },
                    ]
                    },
                    {
                        score: 0,
                        comment: [
                            {
                                media:9,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:7,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:5,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:3,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:0,
                                comment: ["You did super great last week!"]
                            },
                    ]
                    },
                ],
                events:[
                    {
                        eventId: "cupcakes",
                        //Each index leads to the next piece of dialog relating to this topic from the person
                        dialogs:[
                            "I brought cupcakes today!",
                            "I heard Jakub brought cupcakes today, did he leave one for me?"
                        ]
                    },
                    {
                        eventId: "missingcoat",
                        dialogs:[
                            "Anyway, I don't know where I placed my coat today. It is long and green. If you see it, Could you let me know?",
                            "Turns out I left my coat at home, sorry for bothering you. I need to be more careful."
                        ]
                    },
                    {
                        eventId: "runninglate",
                        dialogs:[
                            "Thomas is late and we need the story anyway",
                            "I heard Jakub brought cupcakes today, did he leave one for me?"
                        ]
                    },
                    {
                        eventId: "sick",
                        dialogs:[
                            "Jakub is sick today, I need you to work on the title alone today. Do you think you can do this?",
                            "I heard Jakub brought cupcakes today, did he leave one for me?"
                        ]
                    }
                ]
            },
            
            
        ]
    },
    {
        person: "NEWS_EDITOR",
        firstWeek: {
            salute: [],
            goodbye:[],
            comment:[],
            events:{
                        eventId: "firstweek",
                        //Each index leads to the next piece of dialog relating to this topic from the person
                        dialogs:[
                            "Welcome to your first week aboard! I am Grabielle and I love boats and the see",
                            "I heard Jakub brought cupcakes today, did he leave one for me?"
                        ]
                    }
        },
        weeks:[
            {
                salute:{
                    START:[["Hello"]],
                    AFTER_EVENT:[["Hi"]],
                    AFTER_TITLE:[["haoh"]],
                    AFTER_LAYOUT:[["haha"]]
                },
                goodbye:{
                    START:[["Goodbye"]],
                    AFTER_EVENT:[["Good bye"]],
                    AFTER_TITLE:[["Bye"]],
                    AFTER_LAYOUT:[["Agur yogur"]]
                },
                comment:[
                    {
                        score: 9,
                        comment: [
                            {
                                media:9,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:7,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:5,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:3,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:0,
                                comment: ["You did super great last week!"]
                            },
                    ]
                    },
                    {
                        score: 7,
                        comment: [
                            {
                                media:9,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:7,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:5,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:3,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:0,
                                comment: ["You did super great last week!"]
                            },
                    ]
                    },
                    
                    {
                        score: 5,
                        comment: [
                            {
                                media:9,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:7,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:5,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:3,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:0,
                                comment: ["You did super great last week!"]
                            },
                    ]
                    },
                    {
                        score: 3,
                        comment: [
                            {
                                media:9,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:7,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:5,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:3,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:0,
                                comment: ["You did super great last week!"]
                            },
                    ]
                    },
                    {
                        score: 0,
                        comment: [
                            {
                                media:9,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:7,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:5,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:3,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:0,
                                comment: ["You did super great last week!"]
                            },
                    ]
                    },
                ],
                events:[
                    {
                        eventId: "cupcakes",
                        //Each index leads to the next piece of dialog relating to this topic from the person
                        dialogs:[
                            "I brought cupcakes today!",
                            "I heard Jakub brought cupcakes today, did he leave one for me?"
                        ]
                    },
                    {
                        eventId: "missingcoat",
                        dialogs:[
                            "Anyway, I don't know where I placed my coat today. It is long and green. If you see it, Could you let me know?",
                            "Turns out I left my coat at home, sorry for bothering you. I need to be more careful."
                        ]
                    },
                    {
                        eventId: "runninglate",
                        dialogs:[
                            "Thomas is late and we need the story anyway",
                            "I heard Jakub brought cupcakes today, did he leave one for me?"
                        ]
                    },
                    {
                        eventId: "sick",
                        dialogs:[
                            "Jakub is sick today, I need you to work on the title alone today. Do you think you can do this?",
                            "I heard Jakub brought cupcakes today, did he leave one for me?"
                        ]
                    }
                ]
            },
            
            
        ]
    },
    {
        person:"ART_EDITOR",
        firstWeek: {
            salute: [],
            goodbye:[],
            comment:[],
            events:{
                        eventId: "firstweek",
                        //Each index leads to the next piece of dialog relating to this topic from the person
                        dialogs:[
                            "Welcome to your first week aboard! I am Grabielle and I love boats and the see",
                            "I heard Jakub brought cupcakes today, did he leave one for me?"
                        ]
                    }
        },
        weeks:[
            {
                salute:{
                    START:[["Hello"]],
                    AFTER_EVENT:[["Hi"]],
                    AFTER_TITLE:[["haoh"]],
                    AFTER_LAYOUT:[["haha"]]
                },
                goodbye:{
                    START:[["Goodbye"]],
                    AFTER_EVENT:[["Good bye"]],
                    AFTER_TITLE:[["Bye"]],
                    AFTER_LAYOUT:[["Agur yogur"]]
                },
                comment:[
                    {
                        score: 9,
                        comment: [
                            {
                                media:9,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:7,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:5,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:3,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:0,
                                comment: ["You did super great last week!"]
                            },
                    ]
                    },
                    {
                        score: 7,
                        comment: [
                            {
                                media:9,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:7,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:5,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:3,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:0,
                                comment: ["You did super great last week!"]
                            },
                    ]
                    },
                    
                    {
                        score: 5,
                        comment: [
                            {
                                media:9,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:7,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:5,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:3,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:0,
                                comment: ["You did super great last week!"]
                            },
                    ]
                    },
                    {
                        score: 3,
                        comment: [
                            {
                                media:9,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:7,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:5,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:3,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:0,
                                comment: ["You did super great last week!"]
                            },
                    ]
                    },
                    {
                        score: 0,
                        comment: [
                            {
                                media:9,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:7,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:5,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:3,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:0,
                                comment: ["You did super great last week!"]
                            },
                    ]
                    },
                ],
                events:[
                    {
                        eventId: "cupcakes",
                        //Each index leads to the next piece of dialog relating to this topic from the person
                        dialogs:[
                            "I brought cupcakes today!",
                            "I heard Jakub brought cupcakes today, did he leave one for me?"
                        ]
                    },
                    {
                        eventId: "missingcoat",
                        dialogs:[
                            "Anyway, I don't know where I placed my coat today. It is long and green. If you see it, Could you let me know?",
                            "Turns out I left my coat at home, sorry for bothering you. I need to be more careful."
                        ]
                    },
                    {
                        eventId: "runninglate",
                        dialogs:[
                            "Thomas is late and we need the story anyway",
                            "I heard Jakub brought cupcakes today, did he leave one for me?"
                        ]
                    },
                    {
                        eventId: "sick",
                        dialogs:[
                            "Jakub is sick today, I need you to work on the title alone today. Do you think you can do this?",
                            "I heard Jakub brought cupcakes today, did he leave one for me?"
                        ]
                    }
                ]
            },
            
            
        ]
    },
    {
        person:"REPORTER",
        firstWeek: {
            salute: [],
            goodbye:[],
            comment:[],
            events:{
                        eventId: "firstweek",
                        //Each index leads to the next piece of dialog relating to this topic from the person
                        dialogs:[
                            "Welcome to your first week aboard! I am Grabielle and I love boats and the see",
                            "I heard Jakub brought cupcakes today, did he leave one for me?"
                        ]
                    }
        },
        weeks:[
            {
                salute:{
                    START:[["Hello"]],
                    AFTER_EVENT:[["Hi"]],
                    AFTER_TITLE:[["haoh"]],
                    AFTER_LAYOUT:[["haha"]]
                },
                goodbye:{
                    START:[["Goodbye"]],
                    AFTER_EVENT:[["Good bye"]],
                    AFTER_TITLE:[["Bye"]],
                    AFTER_LAYOUT:[["Agur yogur"]]
                },
                comment:[
                    {
                        score: 9,
                        comment: [
                            {
                                media:9,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:7,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:5,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:3,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:0,
                                comment: ["You did super great last week!"]
                            },
                    ]
                    },
                    {
                        score: 7,
                        comment: [
                            {
                                media:9,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:7,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:5,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:3,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:0,
                                comment: ["You did super great last week!"]
                            },
                    ]
                    },
                    
                    {
                        score: 5,
                        comment: [
                            {
                                media:9,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:7,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:5,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:3,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:0,
                                comment: ["You did super great last week!"]
                            },
                    ]
                    },
                    {
                        score: 3,
                        comment: [
                            {
                                media:9,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:7,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:5,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:3,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:0,
                                comment: ["You did super great last week!"]
                            },
                    ]
                    },
                    {
                        score: 0,
                        comment: [
                            {
                                media:9,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:7,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:5,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:3,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:0,
                                comment: ["You did super great last week!"]
                            },
                    ]
                    },
                ],
                events:[
                    {
                        eventId: "cupcakes",
                        //Each index leads to the next piece of dialog relating to this topic from the person
                        dialogs:[
                            "I brought cupcakes today!",
                            "I heard Jakub brought cupcakes today, did he leave one for me?"
                        ]
                    },
                    {
                        eventId: "missingcoat",
                        dialogs:[
                            "Anyway, I don't know where I placed my coat today. It is long and green. If you see it, Could you let me know?",
                            "Turns out I left my coat at home, sorry for bothering you. I need to be more careful."
                        ]
                    },
                    {
                        eventId: "runninglate",
                        dialogs:[
                            "Thomas is late and we need the story anyway",
                            "I heard Jakub brought cupcakes today, did he leave one for me?"
                        ]
                    },
                    {
                        eventId: "sick",
                        dialogs:[
                            "Jakub is sick today, I need you to work on the title alone today. Do you think you can do this?",
                            "I heard Jakub brought cupcakes today, did he leave one for me?"
                        ]
                    }
                ]
            },
            
            
        ]
    },
    {
        person:"EDITOR_IN_CHIEF",
        firstWeek: {
            salute: [],
            goodbye:[],
            comment:[],
            events:{
                        eventId: "firstweek",
                        //Each index leads to the next piece of dialog relating to this topic from the person
                        dialogs:[
                            "Welcome to your first week aboard! I am Grabielle and I love boats and the see",
                            "I heard Jakub brought cupcakes today, did he leave one for me?"
                        ]
                    }
        },
        weeks:[
            {
                salute:{
                    START:[["Hello"]],
                    AFTER_EVENT:[["Hi"]],
                    AFTER_TITLE:[["haoh"]],
                    AFTER_LAYOUT:[["haha"]]
                },
                goodbye:{
                    START:[["Goodbye"]],
                    AFTER_EVENT:[["Good bye"]],
                    AFTER_TITLE:[["Bye"]],
                    AFTER_LAYOUT:[["Agur yogur"]]
                },
                comment:[
                    {
                        score: 9,
                        comment: [
                            {
                                media:9,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:7,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:5,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:3,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:0,
                                comment: ["You did super great last week!"]
                            },
                    ]
                    },
                    {
                        score: 7,
                        comment: [
                            {
                                media:9,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:7,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:5,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:3,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:0,
                                comment: ["You did super great last week!"]
                            },
                    ]
                    },
                    
                    {
                        score: 5,
                        comment: [
                            {
                                media:9,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:7,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:5,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:3,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:0,
                                comment: ["You did super great last week!"]
                            },
                    ]
                    },
                    {
                        score: 3,
                        comment: [
                            {
                                media:9,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:7,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:5,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:3,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:0,
                                comment: ["You did super great last week!"]
                            },
                    ]
                    },
                    {
                        score: 0,
                        comment: [
                            {
                                media:9,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:7,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:5,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:3,
                                comment: ["You did super great last week!"]
                            },
                            {
                                media:0,
                                comment: ["You did super great last week!"]
                            },
                    ]
                    },
                ],
                events:[
                    {
                        eventId: "cupcakes",
                        //Each index leads to the next piece of dialog relating to this topic from the person
                        dialogs:[
                            "I brought cupcakes today!",
                            "I heard Jakub brought cupcakes today, did he leave one for me?"
                        ]
                    },
                    {
                        eventId: "missingcoat",
                        dialogs:[
                            "Anyway, I don't know where I placed my coat today. It is long and green. If you see it, Could you let me know?",
                            "Turns out I left my coat at home, sorry for bothering you. I need to be more careful."
                        ]
                    },
                    {
                        eventId: "runninglate",
                        dialogs:[
                            "Thomas is late and we need the story anyway",
                            "I heard Jakub brought cupcakes today, did he leave one for me?"
                        ]
                    },
                    {
                        eventId: "sick",
                        dialogs:[
                            "Jakub is sick today, I need you to work on the title alone today. Do you think you can do this?",
                            "I heard Jakub brought cupcakes today, did he leave one for me?"
                        ]
                    }
                ]
            },
            
            
        ]
    },

]
const eventDialogOrder = [
    {
        event:"firstweek",
        week: -1,
        order: ["MANAGING_EDITOR", "NEWS_EDITOR", "SELECT_EVENT", "REPORTER", "ART_DIRECTOR","SELECT_TITLE", "NEWS_EDITOR", "ART_DIRECTOR", "SELECT_LAYOUT", "ART_DIRECTOR", "MANAGING_EDITOR", "SCORE_SCREEN"]
    },

]
export {dialogs, eventDialogOrder}