const genDialog = (type:string, weekNum:number, event:string, person:number, lastWeekPoints?:number, media?:number) => {
    //Create dialogs for specific sections  
    let arr = dialogs[person][weekNum];
    const salute = getSalute(arr, "salute");
    const comment = genComment(arr);
    const eventText = genEventText(arr, event);
    const goodbye = genSalute(arr, "goodbye")
    let d = [...salute, ...comment, ...eventText, ...goodbye]
}

const genStoryLine = (week:number, lastWeekPoints?:number, media?:number) =>{
    //Unite dialogs with screen selections
    //Get event and dialog order based on event

}
const getEvent = (weekNum:number, lastWeekPoints?:number, media?:number) => {
    const weekArr = eventDialogOrder.filter(i=>i.week===weekNum-1)
    const ranNum = Math.floor(Math.random()*weekArr.length);
    return weekArr[ranNum];
}
const getSalute = (posDialogs:{salute:string[], goodbye:string[]}, type:"salute"|"goodbye") =>{
    //Get saludo
    const ranNum = Math.round(Math.random());
    console.log(ranNum)
    return posDialogs[type][ranNum];
}
export {}

const dialogs = [
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
                salute:[
                    "Hello",
                    "Hi"
                ],
                goodbye:[
                    "Good bye!",
                    "See you!"
                ],
                comment:[
                    {
                        score: 9,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 7,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 5,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 3,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 0,
                        comment: "Are you sure you want to continue?"
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
            {
                salute:[
                    "Hello",
                    "Hi"
                ],
                goodbye:[
                    "Good bye!",
                    "See you!"
                ],
                comment:[
                    {
                        score: 9,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 7,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 5,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 3,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 0,
                        comment: "Are you sure you want to continue?"
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
            {
                salute:[
                    "Hello",
                    "Hi"
                ],
                goodbye:[
                    "Good bye!",
                    "See you!"
                ],
                comment:[
                    {
                        score: 9,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 7,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 5,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 3,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 0,
                        comment: "Are you sure you want to continue?"
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
            {
                salute:[
                    "Hello",
                    "Hi"
                ],
                goodbye:[
                    "Good bye!",
                    "See you!"
                ],
                comment:[
                    {
                        score: 9,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 7,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 5,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 3,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 0,
                        comment: "Are you sure you want to continue?"
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
                salute:[
                    "Hello",
                    "Hi"
                ],
                goodbye:[
                    "Good bye!",
                    "See you!"
                ],
                comment:[
                    {
                        score: 9,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 7,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 5,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 3,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 0,
                        comment: "Are you sure you want to continue?"
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
            {
                salute:[
                    "Hello",
                    "Hi"
                ],
                goodbye:[
                    "Good bye!",
                    "See you!"
                ],
                comment:[
                    {
                        score: 9,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 7,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 5,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 3,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 0,
                        comment: "Are you sure you want to continue?"
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
            {
                salute:[
                    "Hello",
                    "Hi"
                ],
                goodbye:[
                    "Good bye!",
                    "See you!"
                ],
                comment:[
                    {
                        score: 9,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 7,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 5,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 3,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 0,
                        comment: "Are you sure you want to continue?"
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
            {
                salute:[
                    "Hello",
                    "Hi"
                ],
                goodbye:[
                    "Good bye!",
                    "See you!"
                ],
                comment:[
                    {
                        score: 9,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 7,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 5,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 3,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 0,
                        comment: "Are you sure you want to continue?"
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
                salute:[
                    "Hello",
                    "Hi"
                ],
                goodbye:[
                    "Good bye!",
                    "See you!"
                ],
                comment:[
                    {
                        score: 9,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 7,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 5,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 3,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 0,
                        comment: "Are you sure you want to continue?"
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
            {
                salute:[
                    "Hello",
                    "Hi"
                ],
                goodbye:[
                    "Good bye!",
                    "See you!"
                ],
                comment:[
                    {
                        score: 9,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 7,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 5,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 3,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 0,
                        comment: "Are you sure you want to continue?"
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
            {
                salute:[
                    "Hello",
                    "Hi"
                ],
                goodbye:[
                    "Good bye!",
                    "See you!"
                ],
                comment:[
                    {
                        score: 9,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 7,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 5,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 3,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 0,
                        comment: "Are you sure you want to continue?"
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
            {
                salute:[
                    "Hello",
                    "Hi"
                ],
                goodbye:[
                    "Good bye!",
                    "See you!"
                ],
                comment:[
                    {
                        score: 9,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 7,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 5,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 3,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 0,
                        comment: "Are you sure you want to continue?"
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
                salute:[
                    "Hello",
                    "Hi"
                ],
                goodbye:[
                    "Good bye!",
                    "See you!"
                ],
                comment:[
                    {
                        score: 9,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 7,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 5,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 3,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 0,
                        comment: "Are you sure you want to continue?"
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
            {
                salute:[
                    "Hello",
                    "Hi"
                ],
                goodbye:[
                    "Good bye!",
                    "See you!"
                ],
                comment:[
                    {
                        score: 9,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 7,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 5,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 3,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 0,
                        comment: "Are you sure you want to continue?"
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
            {
                salute:[
                    "Hello",
                    "Hi"
                ],
                goodbye:[
                    "Good bye!",
                    "See you!"
                ],
                comment:[
                    {
                        score: 9,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 7,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 5,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 3,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 0,
                        comment: "Are you sure you want to continue?"
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
            {
                salute:[
                    "Hello",
                    "Hi"
                ],
                goodbye:[
                    "Good bye!",
                    "See you!"
                ],
                comment:[
                    {
                        score: 9,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 7,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 5,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 3,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 0,
                        comment: "Are you sure you want to continue?"
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
                salute:[
                    "Hello",
                    "Hi"
                ],
                goodbye:[
                    "Good bye!",
                    "See you!"
                ],
                comment:[
                    {
                        score: 9,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 7,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 5,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 3,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 0,
                        comment: "Are you sure you want to continue?"
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
            {
                salute:[
                    "Hello",
                    "Hi"
                ],
                goodbye:[
                    "Good bye!",
                    "See you!"
                ],
                comment:[
                    {
                        score: 9,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 7,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 5,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 3,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 0,
                        comment: "Are you sure you want to continue?"
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
            {
                salute:[
                    "Hello",
                    "Hi"
                ],
                goodbye:[
                    "Good bye!",
                    "See you!"
                ],
                comment:[
                    {
                        score: 9,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 7,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 5,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 3,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 0,
                        comment: "Are you sure you want to continue?"
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
            {
                salute:[
                    "Hello",
                    "Hi"
                ],
                goodbye:[
                    "Good bye!",
                    "See you!"
                ],
                comment:[
                    {
                        score: 9,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 7,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 5,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 3,
                        comment: "You did super great last week!"
                    },
                    {
                        score: 0,
                        comment: "Are you sure you want to continue?"
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