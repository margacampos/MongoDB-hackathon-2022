export interface Week{
    salute: {
        START:string[][];
        AFTER_EVENT:string[][];
        AFTER_TITLE:string[][];
        AFTER_LAYOUT:string[][];
    };
    goodbye: {
        START:string[][];
        AFTER_EVENT?:string[][];
        AFTER_TITLE?:string[][];
        AFTER_LAYOUT:string[][];
    };
    comment: {
        score: number;
        comment: {
            media:number;
            comment:{
                START?:string[][];
                AFTER_EVENT?:string[][];
                AFTER_TITLE?:string[][];
                AFTER_LAYOUT?:string[][];
            };
        }[];
    }[];
    events: {
        eventId: string;
        dialogs: {
            START?:string[];
            AFTER_EVENT?:string[];
            AFTER_TITLE?:string[];
            AFTER_LAYOUT?:string[];
        };
    }[];
}
interface Dialog{
        person: string;
        firstWeek: {
            salute: string[];
            goodbye: string[];
            comment:{
                score: number;
                comment:{
                        START:string[];
                        AFTER_EVENT:string[];
                        AFTER_TITLE:string[];
                        AFTER_LAYOUT:string[];
                    };
                }[];
            event:{
                START:string[];
                AFTER_EVENT:string[];
                AFTER_TITLE:string[];
                AFTER_LAYOUT:string[];
            };
        };
        weeks:Week[];
} 

// const MANAGING_EDITOR = [
//     [
//        ,
//         ,
        
//     ],
//     [
//         ,
//         "Between you and me, the editor in chief was super happy you decided to come for another week.",
//         "Well, I need to go now. Jakup must be arriving soon.",
//         "Keep up the good work!"
//     ],
//     [
//         ,
//         "I heard the editor in chief wasn't too happy about your work but don't worry I'm sure this week will be better.",
//         "Anyway, I need to go now. Remember to listen to your co-workers!",
//     ],
//     [
//         "Happy fourth week! You are about to make one month here at the newsroom!",
//         "I'm really happy to see you here. If I'm honest, I wasn't too sure you were going to stay.",
//         "I have brought a few cupcakes to celebrate. If you see Aaliyah make sure to give her one, She is the only one I haven't seen this morning.",
//     ]
// ]

const dialogs:Dialog[] = [
    {
        person:"MANAGING_EDITOR",
        firstWeek: {
            salute: [ "Welcome to the newsroom! I am Gabrielle the managing editor."],
            goodbye:["Just remember the deadlines!"],
            comment:[
                {
                    score: 9,
                    comment:{
                            START:["You will be working with Jakub the news editor, Aaliyah the art director and Thomas the reporter on the front page of our newspaper.",
                            "Once you have finished, the editor-in-chief will review your work and judge if it is ready to publish."],
                            AFTER_EVENT:["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."],
                            AFTER_TITLE:["I knew I had made a great decision hiring you.", "That title you chose was just perfect."],
                            AFTER_LAYOUT:["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work."]
                        }
                    },
                    {
                        score: 7,
                        comment:{
                                START:["You will be working with Jakub the news editor, Aaliyah the art director and Thomas the reporter on the front page of our newspaper.",
                                "Once you have finished, the editor-in-chief will review your work and judge if it is ready to publish."],
                                AFTER_EVENT:["You did great with the event chosing. Thomas could not wait to start writing"],
                                AFTER_TITLE:["I knew you would be great. I just saw Thomas and he was super happy.", "He said you chose exactly the title he would have chosen."],
                                AFTER_LAYOUT:["You did really well for your first week!", "I am sure the editor in chief will be happy to publish your work."]
                            }
                        },
                    {
                        score: 5,
                        comment:{
                                START:["You will be working with Jakub the news editor, Aaliyah the art director and Thomas the reporter on the front page of our newspaper.",
                                "Once you have finished, the editor-in-chief will review your work and judge if it is ready to publish."],
                                AFTER_EVENT:["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."],
                                AFTER_TITLE:["I knew I had made a great decision hiring you.", "That title you chose was just perfect."],
                                AFTER_LAYOUT:["You did great for your first week. I am sure next week will be better.", "Let's see what the editor in chief thinks."]
                            }
                        },
                    {
                        score: 3,
                        comment:{
                                START:["You will be working with Jakub the news editor, Aaliyah the art director and Thomas the reporter on the front page of our newspaper.",
                                "Once you have finished, the editor-in-chief will review your work and judge if it is ready to publish."],
                                AFTER_EVENT:["I heard Thomas wasn't too happy about your event decision."],
                                AFTER_TITLE:["I heard Jakub wasn't too happy about your title decision."],
                                AFTER_LAYOUT:[ "I have only heard good things about you so...","Don't be too hard on yourself and whatever the editor in chief says, It's just your first week. There is a lot of room for improvement."]
                            }
                        },
                    {
                        score: 0,
                        comment:{
                                START:["You will be working with Jakub the news editor, Aaliyah the art director and Thomas the reporter on the front page of our newspaper.",
                                "Once you have finished, the editor-in-chief will review your work and judge if it is ready to publish."],
                                AFTER_EVENT:["How do you feel? Was it too hard?", "Remember to always pay attention to the details, they can be the difference between great and bad."],
                                AFTER_TITLE:["First title choice. That must be exciting.", "I have not spoken to Jakub yet but I'm sure you are doing great."],
                                AFTER_LAYOUT:[ "First days at a new job can be hard but you can't lose motivation!","Remember constructive critizism is always good!"]
                            }
                        },],
            event:{
                START:["Soon Jakub will be here to help you.",
                "I am sure you will do fine..."],
                AFTER_EVENT:["Anyway, the first week can be intimidating.", "Make sure you ask whenever needed. Everyone here would love to help."],
                AFTER_TITLE:["Anyway, the first week can be intimidating.", "Make sure you ask whenever needed. Everyone here would love to help."],
                AFTER_LAYOUT:[ "Anyway, the first week can be intimidating.", "Make sure you ask whenever needed. Everyone here would love to help."]
            }
            
        },
        weeks:[
            {
                salute:{
                    START:[["Welcome back to the ship!", "Firs week of the month, let's see how we do."], ["First days of the month are great, they always feel like a fresh start."],["🎶 Adieu donc la belle je m'en va... Puisquc mon bâtiment s'en va... Je m'en vais faire un tour à Nantes... Puisque ie Roi me we demande ... 🎶", "Bonjour! How is everything?"]],
                    AFTER_EVENT:[["Ahoy!"]],
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
                                comment: {
                                    START:[["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."]],
                                    AFTER_EVENT:[["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."]],
                                    AFTER_TITLE:[["I knew I had made a great decision hiring you.", "That title you chose was just perfect."]],
                                    AFTER_LAYOUT:[["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]]
                                }
                            },
                            {
                                media:7,
                                comment:{
                                    START:[["You did great last week.","I knew this job was perfect for you. Keep up the good work."]],
                                    AFTER_EVENT:[["You did great with the event chosing. Thomas could not wait to start writing"]],
                                    AFTER_TITLE:[["I knew you would be great. I just saw Thomas and he was super happy.", "He said you chose exactly the title he would have chosen."]],
                                    AFTER_LAYOUT:[["You did really well! Even better than past weeks I may add.", "I am sure the editor in chief will be happy to publish your work."]]
                                }
                            },
                            {
                                media:5,
                                comment: {
                                    START:[["You are starting to get the hang of it. I am sure soon everyone will notice."]],
                                    AFTER_LAYOUT:[["You did fine this week but there still room for improvement.", "Let's see what the editor in chief thinks."]]
                                }
                            },
                            {
                                media:3,
                                comment: {
                                    START:[["See? I was sure you had it in you.","This week we are proving the editor in chief wrong."]],
                                    AFTER_EVENT:[["I heard Thomas wasn't too happy about your event decision."]],
                                    AFTER_TITLE:[["I heard Jakub wasn't too happy about your title decision."]],
                                    AFTER_LAYOUT:[ ["I have only heard good things about you so...","Don't be too hard on yourself. There is a lot of room for improvement."]]
                                }
                            },
                            {
                                media:0,
                                comment: {
                                    START:[["Last week was a tough one wasn't it?","Luckily you are doing sooo much better now", "keep up the good work."]],
                                    AFTER_EVENT:[["How do you feel? Was it too hard?", "Remember to always pay attention to the details, they can be the difference between great and bad."]],
                                    AFTER_TITLE:[["I have not spoken to Jakub yet but I'm sure you are doing great."]],
                                    AFTER_LAYOUT:[ ["It can be hard sometimes but you can't lose motivation!","Remember constructive critizism is always good!"]]
                                }
                            }
                    ]
                    },
                    {
                        score: 7,
                        comment: [
                            {
                                media:9,
                                comment: {
                                    START:[["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."]],
                                    AFTER_EVENT:[["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."]],
                                    AFTER_TITLE:[["I knew I had made a great decision hiring you.", "That title you chose was just perfect."]],
                                    AFTER_LAYOUT:[["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]]
                                }
                            },
                            {
                                media:7,
                                comment:{
                                    START:[["You did great last week.","I knew this job was perfect for you. Keep up the good work."]],
                                    AFTER_EVENT:[["You did great with the event chosing. Thomas could not wait to start writing"]],
                                    AFTER_TITLE:[["I knew you would be great. I just saw Thomas and he was super happy.", "He said you chose exactly the title he would have chosen."]],
                                    AFTER_LAYOUT:[["You did really well! Even better than past weeks I may add.", "I am sure the editor in chief will be happy to publish your work."]]
                                }
                            },
                            {
                                media:5,
                                comment: {
                                    START:[["You are starting to get the hang of it. I am sure soon everyone will notice."]],
                                    AFTER_LAYOUT:[["You did fine this week but there still room for improvement.", "Let's see what the editor in chief thinks."]]
                                }
                            },
                            {
                                media:3,
                                comment: {
                                    START:[["See? I was sure you had it in you.","This week we are proving the editor in chief wrong."]],
                                    AFTER_EVENT:[["I heard Thomas wasn't too happy about your event decision."]],
                                    AFTER_TITLE:[["I heard Jakub wasn't too happy about your title decision."]],
                                    AFTER_LAYOUT:[ ["I have only heard good things about you so...","Don't be too hard on yourself. There is a lot of room for improvement."]]
                                }
                            },
                            {
                                media:0,
                                comment: {
                                    START:[["Last week was a tough one wasn't it?","Luckily you are doing sooo much better now", "keep up the good work."]],
                                    AFTER_EVENT:[["How do you feel? Was it too hard?", "Remember to always pay attention to the details, they can be the difference between great and bad."]],
                                    AFTER_TITLE:[["I have not spoken to Jakub yet but I'm sure you are doing great."]],
                                    AFTER_LAYOUT:[ ["It can be hard sometimes but you can't lose motivation!","Remember constructive critizism is always good!"]]
                                }
                            }
                    ]
                    },
                    
                    {
                        score: 5,
                        comment: [
                            {
                                media:9,
                                comment: {
                                    START:[["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."]],
                                    AFTER_EVENT:[["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."]],
                                    AFTER_TITLE:[["I knew I had made a great decision hiring you.", "That title you chose was just perfect."]],
                                    AFTER_LAYOUT:[["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]]
                                }
                            },
                            {
                                media:7,
                                comment:{
                                    START:[["You did great last week.","I knew this job was perfect for you. Keep up the good work."]],
                                    AFTER_EVENT:[["You did great with the event chosing. Thomas could not wait to start writing"]],
                                    AFTER_TITLE:[["I knew you would be great. I just saw Thomas and he was super happy.", "He said you chose exactly the title he would have chosen."]],
                                    AFTER_LAYOUT:[["You did really well! Even better than past weeks I may add.", "I am sure the editor in chief will be happy to publish your work."]]
                                }
                            },
                            {
                                media:5,
                                comment: {
                                    START:[["You are starting to get the hang of it. I am sure soon everyone will notice."]],
                                    AFTER_LAYOUT:[["You did fine this week but there still room for improvement.", "Let's see what the editor in chief thinks."]]
                                }
                            },
                            {
                                media:3,
                                comment: {
                                    START:[["I heard the editor in chief wasn't too happy about your work but don't worry I'm sure this week will be better."]],
                                    AFTER_EVENT:[["I heard Thomas wasn't too happy about your event decision."]],
                                    AFTER_TITLE:[["I heard Jakub wasn't too happy about your title decision."]],
                                    AFTER_LAYOUT:[ ["I have only heard good things about you so...","Don't be too hard on yourself. There is a lot of room for improvement."]]
                                }
                            },
                            {
                                media:0,
                                comment: {
                                    START:[["I heard the editor in chief wasn't too happy about your work but don't worry I'm sure this week will be better."]],
                                    AFTER_EVENT:[["How do you feel? Was it too hard?", "Remember to always pay attention to the details, they can be the difference between great and bad."]],
                                    AFTER_TITLE:[["I have not spoken to Jakub yet but I'm sure you are doing great."]],
                                    AFTER_LAYOUT:[ ["It can be hard sometimes but you can't lose motivation!","Remember constructive critizism is always good!"]]
                                }
                            }
                            
                    ]
                    },
                    {
                        score: 3,
                        comment: [
                            {
                                media:9,
                                comment: {
                                    START:[["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."]],
                                    AFTER_EVENT:[["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."]],
                                    AFTER_TITLE:[["I knew I had made a great decision hiring you.", "That title you chose was just perfect."]],
                                    AFTER_LAYOUT:[["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]]
                                }
                            },
                            {
                                media:7,
                                comment:{
                                    START:[["You did great last week.","I knew this job was perfect for you. Keep up the good work."]],
                                    AFTER_EVENT:[["You did great with the event chosing. Thomas could not wait to start writing"]],
                                    AFTER_TITLE:[["I knew you would be great. I just saw Thomas and he was super happy.", "He said you chose exactly the title he would have chosen."]],
                                    AFTER_LAYOUT:[["You did really well! Even better than past weeks I may add.", "I am sure the editor in chief will be happy to publish your work."]]
                                }
                            },
                            {
                                media:5,
                                comment: {
                                    START:[["You are starting to get the hang of it. I am sure soon everyone will notice."]],
                                    AFTER_LAYOUT:[["You did fine this week but there still room for improvement.", "Let's see what the editor in chief thinks."]]
                                }
                            },
                            {
                                media:3,
                                comment: {
                                    START:[["I heard the editor in chief wasn't too happy about your work but don't worry I'm sure this week will be better."]],
                                    AFTER_EVENT:[["I heard Thomas wasn't too happy about your event decision."]],
                                    AFTER_TITLE:[["I heard Jakub wasn't too happy about your title decision."]],
                                    AFTER_LAYOUT:[ ["I have only heard good things about you so...","Don't be too hard on yourself. There is a lot of room for improvement."]]
                                }
                            },
                            {
                                media:0,
                                comment: {
                                    START:[["I heard the editor in chief wasn't too happy about your work but don't worry I'm sure this week will be better."]],
                                    AFTER_EVENT:[["How do you feel? Was it too hard?", "Remember to always pay attention to the details, they can be the difference between great and bad."]],
                                    AFTER_TITLE:[["I have not spoken to Jakub yet but I'm sure you are doing great."]],
                                    AFTER_LAYOUT:[ ["It can be hard sometimes but you can't lose motivation!","Remember constructive critizism is always good!"]]
                                }
                            }
                            
                    ]
                    },
                    {
                        score: 0,
                        comment: [
                            {
                                media:9,
                                comment: {
                                    START:[["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."]],
                                    AFTER_EVENT:[["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."]],
                                    AFTER_TITLE:[["I knew I had made a great decision hiring you.", "That title you chose was just perfect."]],
                                    AFTER_LAYOUT:[["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]]
                                }
                            },
                            {
                                media:7,
                                comment:{
                                    START:[["You did great last week.","I knew this job was perfect for you. Keep up the good work."]],
                                    AFTER_EVENT:[["You did great with the event chosing. Thomas could not wait to start writing"]],
                                    AFTER_TITLE:[["I knew you would be great. I just saw Thomas and he was super happy.", "He said you chose exactly the title he would have chosen."]],
                                    AFTER_LAYOUT:[["You did really well! Even better than past weeks I may add.", "I am sure the editor in chief will be happy to publish your work."]]
                                }
                            },
                            {
                                media:5,
                                comment: {
                                    START:[["You are starting to get the hang of it. I am sure soon everyone will notice."]],
                                    AFTER_LAYOUT:[["You did fine this week but there still room for improvement.", "Let's see what the editor in chief thinks."]]
                                }
                            },
                            {
                                media:3,
                                comment: {
                                    START:[["I heard the editor in chief wasn't too happy about your work but don't worry I'm sure this week will be better."]],
                                    AFTER_EVENT:[["I heard Thomas wasn't too happy about your event decision."]],
                                    AFTER_TITLE:[["I heard Jakub wasn't too happy about your title decision."]],
                                    AFTER_LAYOUT:[ ["I have only heard good things about you so...","Don't be too hard on yourself. There is a lot of room for improvement."]]
                                }
                            },
                            {
                                media:0,
                                comment: {
                                    START:[["I heard the editor in chief wasn't too happy about your work but don't worry I'm sure this week will be better."]],
                                    AFTER_EVENT:[["How do you feel? Was it too hard?", "Remember to always pay attention to the details, they can be the difference between great and bad."]],
                                    AFTER_TITLE:[["I have not spoken to Jakub yet but I'm sure you are doing great."]],
                                    AFTER_LAYOUT:[ ["It can be hard sometimes but you can't lose motivation!","Remember constructive critizism is always good!"]]
                                }
                            }
                            
                    ]
                    },
                ],
                events:[
                    {
                        eventId: "cupcakes",
                        //Each index leads to the next piece of dialog relating to this topic from the person
                        dialogs:{
                            START:["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."],
                            AFTER_EVENT:["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."],
                            AFTER_TITLE:["I knew I had made a great decision hiring you.", "That title you chose was just perfect."],
                            AFTER_LAYOUT:["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]
                        }
                    },
                    {
                        eventId: "missingcoat",
                        dialogs:{
                            START:["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."],
                            AFTER_EVENT:["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."],
                            AFTER_TITLE:["I knew I had made a great decision hiring you.", "That title you chose was just perfect."],
                            AFTER_LAYOUT:["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]
                        }
                    },
                    {
                        eventId: "runninglate",
                        dialogs:{
                            START:["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."],
                            AFTER_EVENT:["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."],
                            AFTER_TITLE:["I knew I had made a great decision hiring you.", "That title you chose was just perfect."],
                            AFTER_LAYOUT:["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]
                        }
                    },
                    {
                        eventId: "sick",
                        dialogs:{
                            START:["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."],
                            AFTER_EVENT:["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."],
                            AFTER_TITLE:["I knew I had made a great decision hiring you.", "That title you chose was just perfect."],
                            AFTER_LAYOUT:["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]
                        }
                    }
                ]
            },
            
            
        ]
    },
    {
        person: "NEWS_EDITOR",
        firstWeek: {
            salute: ["Hello, my name is Jakub and I am the news editor."],
            goodbye:["First weeks can be hard but you will do great, I know it."],
            comment:[
            {
                score: 9,
                comment:{
                        START:["The first thing we need to do is assign a story for Thomas to cover.",
                        "Here I have some of the current events, all you have to do is choose the one you think will fit better this weeks newspaper.",
                        "I made you a note with what we are looking for these week. Remember to check it from time to time."],
                        AFTER_EVENT:["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."],
                        AFTER_TITLE:["I knew I had made a great decision hiring you.", "That title you chose was just perfect."],
                        AFTER_LAYOUT:["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work."]
                    }
                },
                {
                    score: 7,
                    comment:{
                            START:["The first thing we need to do is assign a story for Thomas to cover.",
                            "Here I have some of the current events, all you have to do is choose the one you think will fit better this weeks newspaper.",
                            "I made you a note with what we are looking for these week. Remember to check it from time to time."],
                            AFTER_EVENT:["You did great with the event chosing. Thomas could not wait to start writing"],
                            AFTER_TITLE:["I knew you would be great. I just saw Thomas and he was super happy.", "He said you chose exactly the title he would have chosen."],
                            AFTER_LAYOUT:["You did really well for your first week!", "I am sure the editor in chief will be happy to publish your work."]
                        }
                    },
                {
                    score: 5,
                    comment:{
                            START:["The first thing we need to do is assign a story for Thomas to cover.",
                            "Here I have some of the current events, all you have to do is choose the one you think will fit better this weeks newspaper.",
                            "I made you a note with what we are looking for these week. Remember to check it from time to time."],
                            AFTER_EVENT:["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."],
                            AFTER_TITLE:["I knew I had made a great decision hiring you.", "That title you chose was just perfect."],
                            AFTER_LAYOUT:["You did great for your first week. I am sure next week will be better.", "Let's see what the editor in chief thinks."]
                        }
                    },
                {
                    score: 3,
                    comment:{
                            START:["The first thing we need to do is assign a story for Thomas to cover.",
                            "Here I have some of the current events, all you have to do is choose the one you think will fit better this weeks newspaper.",
                            "I made you a note with what we are looking for these week. Remember to check it from time to time."],
                            AFTER_EVENT:["I heard Thomas wasn't too happy about your event decision."],
                            AFTER_TITLE:["I heard Jakub wasn't too happy about your title decision."],
                            AFTER_LAYOUT:[ "I have only heard good things about you so...","Don't be too hard on yourself and whatever the editor in chief says, It's just your first week. There is a lot of room for improvement."]
                        }
                    },
                {
                    score: 0,
                    comment:{
                            START:["The first thing we need to do is assign a story for Thomas to cover.",
                            "Here I have some of the current events, all you have to do is choose the one you think will fit better this weeks newspaper.",
                            "I made you a note with what we are looking for these week. Remember to check it from time to time."],
                            AFTER_EVENT:["How do you feel? Was it too hard?", "Remember to always pay attention to the details, they can be the difference between great and bad."],
                            AFTER_TITLE:["First title choice. That must be exciting.", "I have not spoken to Jakub yet but I'm sure you are doing great."],
                            AFTER_LAYOUT:[ "First days at a new job can be hard but you can't lose motivation!","Remember constructive critizism is always good!"]
                        }
                    }],
            event:{
                START:["Remember Thomas will arrive soon but don't worry, I'll distract him a little bit, just focus on making the best decision."],
                AFTER_EVENT:["Anyway, the first week can be intimidating.", "Make sure you ask whenever needed. Everyone here would love to help."],
                AFTER_TITLE:["Anyway, the first week can be intimidating.", "Make sure you ask whenever needed. Everyone here would love to help."],
                AFTER_LAYOUT:[ "Anyway, the first week can be intimidating.", "Make sure you ask whenever needed. Everyone here would love to help."]
            }
        },
        weeks:[
            {
                salute:{
                    START:[["Welcome back to the ship!", "Firs week of the month, let's see how we do."], ["First days of the month are great, they always feel like a fresh start."],["🎶 Adieu donc la belle je m'en va... Puisquc mon bâtiment s'en va... Je m'en vais faire un tour à Nantes... Puisque ie Roi me we demande ... 🎶", "Bonjour! How is everything?"]],
                    AFTER_EVENT:[["Ahoy!"]],
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
                                comment: {
                                    START:[["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."]],
                                    AFTER_EVENT:[["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."]],
                                    AFTER_TITLE:[["I knew I had made a great decision hiring you.", "That title you chose was just perfect."]],
                                    AFTER_LAYOUT:[["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]]
                                }
                            },
                            {
                                media:7,
                                comment:{
                                    START:[["You did great last week.","I knew this job was perfect for you. Keep up the good work."]],
                                    AFTER_EVENT:[["You did great with the event chosing. Thomas could not wait to start writing"]],
                                    AFTER_TITLE:[["I knew you would be great. I just saw Thomas and he was super happy.", "He said you chose exactly the title he would have chosen."]],
                                    AFTER_LAYOUT:[["You did really well! Even better than past weeks I may add.", "I am sure the editor in chief will be happy to publish your work."]]
                                }
                            },
                            {
                                media:5,
                                comment: {
                                    START:[["You are starting to get the hang of it. I am sure soon everyone will notice."]],
                                    AFTER_LAYOUT:[["You did fine this week but there still room for improvement.", "Let's see what the editor in chief thinks."]]
                                }
                            },
                            {
                                media:3,
                                comment: {
                                    START:[["See? I was sure you had it in you.","This week we are proving the editor in chief wrong."]],
                                    AFTER_EVENT:[["I heard Thomas wasn't too happy about your event decision."]],
                                    AFTER_TITLE:[["I heard Jakub wasn't too happy about your title decision."]],
                                    AFTER_LAYOUT:[ ["I have only heard good things about you so...","Don't be too hard on yourself. There is a lot of room for improvement."]]
                                }
                            },
                            {
                                media:0,
                                comment: {
                                    START:[["Last week was a tough one wasn't it?","Luckily you are doing sooo much better now", "keep up the good work."]],
                                    AFTER_EVENT:[["How do you feel? Was it too hard?", "Remember to always pay attention to the details, they can be the difference between great and bad."]],
                                    AFTER_TITLE:[["I have not spoken to Jakub yet but I'm sure you are doing great."]],
                                    AFTER_LAYOUT:[ ["It can be hard sometimes but you can't lose motivation!","Remember constructive critizism is always good!"]]
                                }
                            }
                    ]
                    },
                    {
                        score: 7,
                        comment: [
                            {
                                media:9,
                                comment: {
                                    START:[["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."]],
                                    AFTER_EVENT:[["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."]],
                                    AFTER_TITLE:[["I knew I had made a great decision hiring you.", "That title you chose was just perfect."]],
                                    AFTER_LAYOUT:[["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]]
                                }
                            },
                            {
                                media:7,
                                comment:{
                                    START:[["You did great last week.","I knew this job was perfect for you. Keep up the good work."]],
                                    AFTER_EVENT:[["You did great with the event chosing. Thomas could not wait to start writing"]],
                                    AFTER_TITLE:[["I knew you would be great. I just saw Thomas and he was super happy.", "He said you chose exactly the title he would have chosen."]],
                                    AFTER_LAYOUT:[["You did really well! Even better than past weeks I may add.", "I am sure the editor in chief will be happy to publish your work."]]
                                }
                            },
                            {
                                media:5,
                                comment: {
                                    START:[["You are starting to get the hang of it. I am sure soon everyone will notice."]],
                                    AFTER_LAYOUT:[["You did fine this week but there still room for improvement.", "Let's see what the editor in chief thinks."]]
                                }
                            },
                            {
                                media:3,
                                comment: {
                                    START:[["See? I was sure you had it in you.","This week we are proving the editor in chief wrong."]],
                                    AFTER_EVENT:[["I heard Thomas wasn't too happy about your event decision."]],
                                    AFTER_TITLE:[["I heard Jakub wasn't too happy about your title decision."]],
                                    AFTER_LAYOUT:[ ["I have only heard good things about you so...","Don't be too hard on yourself. There is a lot of room for improvement."]]
                                }
                            },
                            {
                                media:0,
                                comment: {
                                    START:[["Last week was a tough one wasn't it?","Luckily you are doing sooo much better now", "keep up the good work."]],
                                    AFTER_EVENT:[["How do you feel? Was it too hard?", "Remember to always pay attention to the details, they can be the difference between great and bad."]],
                                    AFTER_TITLE:[["I have not spoken to Jakub yet but I'm sure you are doing great."]],
                                    AFTER_LAYOUT:[ ["It can be hard sometimes but you can't lose motivation!","Remember constructive critizism is always good!"]]
                                }
                            }
                    ]
                    },
                    
                    {
                        score: 5,
                        comment: [
                            {
                                media:9,
                                comment: {
                                    START:[["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."]],
                                    AFTER_EVENT:[["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."]],
                                    AFTER_TITLE:[["I knew I had made a great decision hiring you.", "That title you chose was just perfect."]],
                                    AFTER_LAYOUT:[["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]]
                                }
                            },
                            {
                                media:7,
                                comment:{
                                    START:[["You did great last week.","I knew this job was perfect for you. Keep up the good work."]],
                                    AFTER_EVENT:[["You did great with the event chosing. Thomas could not wait to start writing"]],
                                    AFTER_TITLE:[["I knew you would be great. I just saw Thomas and he was super happy.", "He said you chose exactly the title he would have chosen."]],
                                    AFTER_LAYOUT:[["You did really well! Even better than past weeks I may add.", "I am sure the editor in chief will be happy to publish your work."]]
                                }
                            },
                            {
                                media:5,
                                comment: {
                                    START:[["You are starting to get the hang of it. I am sure soon everyone will notice."]],
                                    AFTER_LAYOUT:[["You did fine this week but there still room for improvement.", "Let's see what the editor in chief thinks."]]
                                }
                            },
                            {
                                media:3,
                                comment: {
                                    START:[["I heard the editor in chief wasn't too happy about your work but don't worry I'm sure this week will be better."]],
                                    AFTER_EVENT:[["I heard Thomas wasn't too happy about your event decision."]],
                                    AFTER_TITLE:[["I heard Jakub wasn't too happy about your title decision."]],
                                    AFTER_LAYOUT:[ ["I have only heard good things about you so...","Don't be too hard on yourself. There is a lot of room for improvement."]]
                                }
                            },
                            {
                                media:0,
                                comment: {
                                    START:[["I heard the editor in chief wasn't too happy about your work but don't worry I'm sure this week will be better."]],
                                    AFTER_EVENT:[["How do you feel? Was it too hard?", "Remember to always pay attention to the details, they can be the difference between great and bad."]],
                                    AFTER_TITLE:[["I have not spoken to Jakub yet but I'm sure you are doing great."]],
                                    AFTER_LAYOUT:[ ["It can be hard sometimes but you can't lose motivation!","Remember constructive critizism is always good!"]]
                                }
                            }
                            
                    ]
                    },
                    {
                        score: 3,
                        comment: [
                            {
                                media:9,
                                comment: {
                                    START:[["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."]],
                                    AFTER_EVENT:[["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."]],
                                    AFTER_TITLE:[["I knew I had made a great decision hiring you.", "That title you chose was just perfect."]],
                                    AFTER_LAYOUT:[["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]]
                                }
                            },
                            {
                                media:7,
                                comment:{
                                    START:[["You did great last week.","I knew this job was perfect for you. Keep up the good work."]],
                                    AFTER_EVENT:[["You did great with the event chosing. Thomas could not wait to start writing"]],
                                    AFTER_TITLE:[["I knew you would be great. I just saw Thomas and he was super happy.", "He said you chose exactly the title he would have chosen."]],
                                    AFTER_LAYOUT:[["You did really well! Even better than past weeks I may add.", "I am sure the editor in chief will be happy to publish your work."]]
                                }
                            },
                            {
                                media:5,
                                comment: {
                                    START:[["You are starting to get the hang of it. I am sure soon everyone will notice."]],
                                    AFTER_LAYOUT:[["You did fine this week but there still room for improvement.", "Let's see what the editor in chief thinks."]]
                                }
                            },
                            {
                                media:3,
                                comment: {
                                    START:[["I heard the editor in chief wasn't too happy about your work but don't worry I'm sure this week will be better."]],
                                    AFTER_EVENT:[["I heard Thomas wasn't too happy about your event decision."]],
                                    AFTER_TITLE:[["I heard Jakub wasn't too happy about your title decision."]],
                                    AFTER_LAYOUT:[ ["I have only heard good things about you so...","Don't be too hard on yourself. There is a lot of room for improvement."]]
                                }
                            },
                            {
                                media:0,
                                comment: {
                                    START:[["I heard the editor in chief wasn't too happy about your work but don't worry I'm sure this week will be better."]],
                                    AFTER_EVENT:[["How do you feel? Was it too hard?", "Remember to always pay attention to the details, they can be the difference between great and bad."]],
                                    AFTER_TITLE:[["I have not spoken to Jakub yet but I'm sure you are doing great."]],
                                    AFTER_LAYOUT:[ ["It can be hard sometimes but you can't lose motivation!","Remember constructive critizism is always good!"]]
                                }
                            }
                            
                    ]
                    },
                    {
                        score: 0,
                        comment: [
                            {
                                media:9,
                                comment: {
                                    START:[["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."]],
                                    AFTER_EVENT:[["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."]],
                                    AFTER_TITLE:[["I knew I had made a great decision hiring you.", "That title you chose was just perfect."]],
                                    AFTER_LAYOUT:[["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]]
                                }
                            },
                            {
                                media:7,
                                comment:{
                                    START:[["You did great last week.","I knew this job was perfect for you. Keep up the good work."]],
                                    AFTER_EVENT:[["You did great with the event chosing. Thomas could not wait to start writing"]],
                                    AFTER_TITLE:[["I knew you would be great. I just saw Thomas and he was super happy.", "He said you chose exactly the title he would have chosen."]],
                                    AFTER_LAYOUT:[["You did really well! Even better than past weeks I may add.", "I am sure the editor in chief will be happy to publish your work."]]
                                }
                            },
                            {
                                media:5,
                                comment: {
                                    START:[["You are starting to get the hang of it. I am sure soon everyone will notice."]],
                                    AFTER_LAYOUT:[["You did fine this week but there still room for improvement.", "Let's see what the editor in chief thinks."]]
                                }
                            },
                            {
                                media:3,
                                comment: {
                                    START:[["I heard the editor in chief wasn't too happy about your work but don't worry I'm sure this week will be better."]],
                                    AFTER_EVENT:[["I heard Thomas wasn't too happy about your event decision."]],
                                    AFTER_TITLE:[["I heard Jakub wasn't too happy about your title decision."]],
                                    AFTER_LAYOUT:[ ["I have only heard good things about you so...","Don't be too hard on yourself. There is a lot of room for improvement."]]
                                }
                            },
                            {
                                media:0,
                                comment: {
                                    START:[["I heard the editor in chief wasn't too happy about your work but don't worry I'm sure this week will be better."]],
                                    AFTER_EVENT:[["How do you feel? Was it too hard?", "Remember to always pay attention to the details, they can be the difference between great and bad."]],
                                    AFTER_TITLE:[["I have not spoken to Jakub yet but I'm sure you are doing great."]],
                                    AFTER_LAYOUT:[ ["It can be hard sometimes but you can't lose motivation!","Remember constructive critizism is always good!"]]
                                }
                            }
                            
                    ]
                    },
                ],
                events:[
                    {
                        eventId: "cupcakes",
                        //Each index leads to the next piece of dialog relating to this topic from the person
                        dialogs:{
                            START:["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."],
                            AFTER_EVENT:["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."],
                            AFTER_TITLE:["I knew I had made a great decision hiring you.", "That title you chose was just perfect."],
                            AFTER_LAYOUT:["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]
                        }
                    },
                    {
                        eventId: "missingcoat",
                        dialogs:{
                            START:["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."],
                            AFTER_EVENT:["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."],
                            AFTER_TITLE:["I knew I had made a great decision hiring you.", "That title you chose was just perfect."],
                            AFTER_LAYOUT:["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]
                        }
                    },
                    {
                        eventId: "runninglate",
                        dialogs:{
                            START:["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."],
                            AFTER_EVENT:["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."],
                            AFTER_TITLE:["I knew I had made a great decision hiring you.", "That title you chose was just perfect."],
                            AFTER_LAYOUT:["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]
                        }
                    },
                    {
                        eventId: "sick",
                        dialogs:{
                            START:["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."],
                            AFTER_EVENT:["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."],
                            AFTER_TITLE:["I knew I had made a great decision hiring you.", "That title you chose was just perfect."],
                            AFTER_LAYOUT:["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]
                        }
                    }
                ]
            },
            
            
        ]
    },
    {
        person:"ART_DIRECTOR",
        firstWeek: {
            salute: ["Was that Thomas running?", "Anyway, welcome to the newsroom. I'm the newspaper's art director, Aaliyah."],
            goodbye:["Also, I am looking forward to working with you. See you!"],
            comment:[
                {
                    score: 9,
                    comment:{
                            START:["I was told both of us would be working on the front page today. I have some ideas for how I want it to look but I need to talk to Jakub, have you seen him?",
                            "Well, If you see him please tell him to give me the title so I can start planning"],
                            AFTER_EVENT:["I was told both of us would be working on the front page today. I have some ideas for how I want it to look but I need to talk to Jakub, have you seen him?",
                            "Well, If you see him please tell him to give me the title so I can start planning"],
                            AFTER_TITLE:["I knew I had made a great decision hiring you.", "That title you chose was just perfect."],
                            AFTER_LAYOUT:["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work."]
                        }
                    },
                    {
                        score: 7,
                        comment:{
                                START:["I was told both of us would be working on the front page today. I have some ideas for how I want it to look but I need to talk to Jakub, have you seen him?",
                                "Well, If you see him please tell him to give me the title so I can start planning"],
                                AFTER_EVENT:["I was told both of us would be working on the front page today. I have some ideas for how I want it to look but I need to talk to Jakub, have you seen him?",
                                "Well, If you see him please tell him to give me the title so I can start planning"],
                                AFTER_TITLE:["I knew you would be great. I just saw Thomas and he was super happy.", "He said you chose exactly the title he would have chosen."],
                                AFTER_LAYOUT:["You did really well for your first week!", "I am sure the editor in chief will be happy to publish your work."]
                            }
                        },
                    {
                        score: 5,
                        comment:{
                                START:["I was told both of us would be working on the front page today. I have some ideas for how I want it to look but I need to talk to Jakub, have you seen him?",
                                "Well, If you see him please tell him to give me the title so I can start planning"],
                                AFTER_EVENT:["I was told both of us would be working on the front page today. I have some ideas for how I want it to look but I need to talk to Jakub, have you seen him?",
                                "Well, If you see him please tell him to give me the title so I can start planning"],
                                AFTER_TITLE:["I knew I had made a great decision hiring you.", "That title you chose was just perfect."],
                                AFTER_LAYOUT:["You did great for your first week. I am sure next week will be better.", "Let's see what the editor in chief thinks."]
                            }
                        },
                    {
                        score: 3,
                        comment:{
                                START:["I was told both of us would be working on the front page today. I have some ideas for how I want it to look but I need to talk to Jakub, have you seen him?",
                                "Well, If you see him please tell him to give me the title so I can start planning"],
                                AFTER_EVENT:["I was told both of us would be working on the front page today. I have some ideas for how I want it to look but I need to talk to Jakub, have you seen him?",
                                "Well, If you see him please tell him to give me the title so I can start planning"],
                                AFTER_TITLE:["I heard Jakub wasn't too happy about your title decision."],
                                AFTER_LAYOUT:[ "I have only heard good things about you so...","Don't be too hard on yourself and whatever the editor in chief says, It's just your first week. There is a lot of room for improvement."]
                            }
                        },
                    {
                        score: 0,
                        comment:{
                                START:["I was told both of us would be working on the front page today. I have some ideas for how I want it to look but I need to talk to Jakub, have you seen him?",
                                "Well, If you see him please tell him to give me the title so I can start planning"],
                                AFTER_EVENT:["I was told both of us would be working on the front page today. I have some ideas for how I want it to look but I need to talk to Jakub, have you seen him?",
                                "Well, If you see him please tell him to give me the title so I can start planning"],
                                AFTER_TITLE:["First title choice. That must be exciting.", "I have not spoken to Jakub yet but I'm sure you are doing great."],
                                AFTER_LAYOUT:[ "First days at a new job can be hard but you can't lose motivation!","Remember constructive critizism is always good!"]
                            }
                        }
                    ],
            event:{
                START:["Anyway, the first week can be intimidating.", "Make sure you ask whenever needed. Everyone here would love to help."],
                AFTER_EVENT:["Anyway, the first week can be intimidating.", "Make sure you ask whenever needed. Everyone here would love to help."],
                AFTER_TITLE:["Anyway, the first week can be intimidating.", "Make sure you ask whenever needed. Everyone here would love to help."],
                AFTER_LAYOUT:[ "Anyway, the first week can be intimidating.", "Make sure you ask whenever needed. Everyone here would love to help."]
            }
        },
       weeks:[
            {
                salute:{
                    START:[["Welcome back to the ship!", "Firs week of the month, let's see how we do."], ["First days of the month are great, they always feel like a fresh start."],["🎶 Adieu donc la belle je m'en va... Puisquc mon bâtiment s'en va... Je m'en vais faire un tour à Nantes... Puisque ie Roi me we demande ... 🎶", "Bonjour! How is everything?"]],
                    AFTER_EVENT:[["Ahoy!"]],
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
                                comment: {
                                    START:[["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."]],
                                    AFTER_EVENT:[["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."]],
                                    AFTER_TITLE:[["I knew I had made a great decision hiring you.", "That title you chose was just perfect."]],
                                    AFTER_LAYOUT:[["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]]
                                }
                            },
                            {
                                media:7,
                                comment:{
                                    START:[["You did great last week.","I knew this job was perfect for you. Keep up the good work."]],
                                    AFTER_EVENT:[["You did great with the event chosing. Thomas could not wait to start writing"]],
                                    AFTER_TITLE:[["I knew you would be great. I just saw Thomas and he was super happy.", "He said you chose exactly the title he would have chosen."]],
                                    AFTER_LAYOUT:[["You did really well! Even better than past weeks I may add.", "I am sure the editor in chief will be happy to publish your work."]]
                                }
                            },
                            {
                                media:5,
                                comment: {
                                    START:[["You are starting to get the hang of it. I am sure soon everyone will notice."]],
                                    AFTER_LAYOUT:[["You did fine this week but there still room for improvement.", "Let's see what the editor in chief thinks."]]
                                }
                            },
                            {
                                media:3,
                                comment: {
                                    START:[["See? I was sure you had it in you.","This week we are proving the editor in chief wrong."]],
                                    AFTER_EVENT:[["I heard Thomas wasn't too happy about your event decision."]],
                                    AFTER_TITLE:[["I heard Jakub wasn't too happy about your title decision."]],
                                    AFTER_LAYOUT:[ ["I have only heard good things about you so...","Don't be too hard on yourself. There is a lot of room for improvement."]]
                                }
                            },
                            {
                                media:0,
                                comment: {
                                    START:[["Last week was a tough one wasn't it?","Luckily you are doing sooo much better now", "keep up the good work."]],
                                    AFTER_EVENT:[["How do you feel? Was it too hard?", "Remember to always pay attention to the details, they can be the difference between great and bad."]],
                                    AFTER_TITLE:[["I have not spoken to Jakub yet but I'm sure you are doing great."]],
                                    AFTER_LAYOUT:[ ["It can be hard sometimes but you can't lose motivation!","Remember constructive critizism is always good!"]]
                                }
                            }
                    ]
                    },
                    {
                        score: 7,
                        comment: [
                            {
                                media:9,
                                comment: {
                                    START:[["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."]],
                                    AFTER_EVENT:[["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."]],
                                    AFTER_TITLE:[["I knew I had made a great decision hiring you.", "That title you chose was just perfect."]],
                                    AFTER_LAYOUT:[["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]]
                                }
                            },
                            {
                                media:7,
                                comment:{
                                    START:[["You did great last week.","I knew this job was perfect for you. Keep up the good work."]],
                                    AFTER_EVENT:[["You did great with the event chosing. Thomas could not wait to start writing"]],
                                    AFTER_TITLE:[["I knew you would be great. I just saw Thomas and he was super happy.", "He said you chose exactly the title he would have chosen."]],
                                    AFTER_LAYOUT:[["You did really well! Even better than past weeks I may add.", "I am sure the editor in chief will be happy to publish your work."]]
                                }
                            },
                            {
                                media:5,
                                comment: {
                                    START:[["You are starting to get the hang of it. I am sure soon everyone will notice."]],
                                    AFTER_LAYOUT:[["You did fine this week but there still room for improvement.", "Let's see what the editor in chief thinks."]]
                                }
                            },
                            {
                                media:3,
                                comment: {
                                    START:[["See? I was sure you had it in you.","This week we are proving the editor in chief wrong."]],
                                    AFTER_EVENT:[["I heard Thomas wasn't too happy about your event decision."]],
                                    AFTER_TITLE:[["I heard Jakub wasn't too happy about your title decision."]],
                                    AFTER_LAYOUT:[ ["I have only heard good things about you so...","Don't be too hard on yourself. There is a lot of room for improvement."]]
                                }
                            },
                            {
                                media:0,
                                comment: {
                                    START:[["Last week was a tough one wasn't it?","Luckily you are doing sooo much better now", "keep up the good work."]],
                                    AFTER_EVENT:[["How do you feel? Was it too hard?", "Remember to always pay attention to the details, they can be the difference between great and bad."]],
                                    AFTER_TITLE:[["I have not spoken to Jakub yet but I'm sure you are doing great."]],
                                    AFTER_LAYOUT:[ ["It can be hard sometimes but you can't lose motivation!","Remember constructive critizism is always good!"]]
                                }
                            }
                    ]
                    },
                    
                    {
                        score: 5,
                        comment: [
                            {
                                media:9,
                                comment: {
                                    START:[["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."]],
                                    AFTER_EVENT:[["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."]],
                                    AFTER_TITLE:[["I knew I had made a great decision hiring you.", "That title you chose was just perfect."]],
                                    AFTER_LAYOUT:[["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]]
                                }
                            },
                            {
                                media:7,
                                comment:{
                                    START:[["You did great last week.","I knew this job was perfect for you. Keep up the good work."]],
                                    AFTER_EVENT:[["You did great with the event chosing. Thomas could not wait to start writing"]],
                                    AFTER_TITLE:[["I knew you would be great. I just saw Thomas and he was super happy.", "He said you chose exactly the title he would have chosen."]],
                                    AFTER_LAYOUT:[["You did really well! Even better than past weeks I may add.", "I am sure the editor in chief will be happy to publish your work."]]
                                }
                            },
                            {
                                media:5,
                                comment: {
                                    START:[["You are starting to get the hang of it. I am sure soon everyone will notice."]],
                                    AFTER_LAYOUT:[["You did fine this week but there still room for improvement.", "Let's see what the editor in chief thinks."]]
                                }
                            },
                            {
                                media:3,
                                comment: {
                                    START:[["I heard the editor in chief wasn't too happy about your work but don't worry I'm sure this week will be better."]],
                                    AFTER_EVENT:[["I heard Thomas wasn't too happy about your event decision."]],
                                    AFTER_TITLE:[["I heard Jakub wasn't too happy about your title decision."]],
                                    AFTER_LAYOUT:[ ["I have only heard good things about you so...","Don't be too hard on yourself. There is a lot of room for improvement."]]
                                }
                            },
                            {
                                media:0,
                                comment: {
                                    START:[["I heard the editor in chief wasn't too happy about your work but don't worry I'm sure this week will be better."]],
                                    AFTER_EVENT:[["How do you feel? Was it too hard?", "Remember to always pay attention to the details, they can be the difference between great and bad."]],
                                    AFTER_TITLE:[["I have not spoken to Jakub yet but I'm sure you are doing great."]],
                                    AFTER_LAYOUT:[ ["It can be hard sometimes but you can't lose motivation!","Remember constructive critizism is always good!"]]
                                }
                            }
                            
                    ]
                    },
                    {
                        score: 3,
                        comment: [
                            {
                                media:9,
                                comment: {
                                    START:[["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."]],
                                    AFTER_EVENT:[["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."]],
                                    AFTER_TITLE:[["I knew I had made a great decision hiring you.", "That title you chose was just perfect."]],
                                    AFTER_LAYOUT:[["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]]
                                }
                            },
                            {
                                media:7,
                                comment:{
                                    START:[["You did great last week.","I knew this job was perfect for you. Keep up the good work."]],
                                    AFTER_EVENT:[["You did great with the event chosing. Thomas could not wait to start writing"]],
                                    AFTER_TITLE:[["I knew you would be great. I just saw Thomas and he was super happy.", "He said you chose exactly the title he would have chosen."]],
                                    AFTER_LAYOUT:[["You did really well! Even better than past weeks I may add.", "I am sure the editor in chief will be happy to publish your work."]]
                                }
                            },
                            {
                                media:5,
                                comment: {
                                    START:[["You are starting to get the hang of it. I am sure soon everyone will notice."]],
                                    AFTER_LAYOUT:[["You did fine this week but there still room for improvement.", "Let's see what the editor in chief thinks."]]
                                }
                            },
                            {
                                media:3,
                                comment: {
                                    START:[["I heard the editor in chief wasn't too happy about your work but don't worry I'm sure this week will be better."]],
                                    AFTER_EVENT:[["I heard Thomas wasn't too happy about your event decision."]],
                                    AFTER_TITLE:[["I heard Jakub wasn't too happy about your title decision."]],
                                    AFTER_LAYOUT:[ ["I have only heard good things about you so...","Don't be too hard on yourself. There is a lot of room for improvement."]]
                                }
                            },
                            {
                                media:0,
                                comment: {
                                    START:[["I heard the editor in chief wasn't too happy about your work but don't worry I'm sure this week will be better."]],
                                    AFTER_EVENT:[["How do you feel? Was it too hard?", "Remember to always pay attention to the details, they can be the difference between great and bad."]],
                                    AFTER_TITLE:[["I have not spoken to Jakub yet but I'm sure you are doing great."]],
                                    AFTER_LAYOUT:[ ["It can be hard sometimes but you can't lose motivation!","Remember constructive critizism is always good!"]]
                                }
                            }
                            
                    ]
                    },
                    {
                        score: 0,
                        comment: [
                            {
                                media:9,
                                comment: {
                                    START:[["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."]],
                                    AFTER_EVENT:[["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."]],
                                    AFTER_TITLE:[["I knew I had made a great decision hiring you.", "That title you chose was just perfect."]],
                                    AFTER_LAYOUT:[["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]]
                                }
                            },
                            {
                                media:7,
                                comment:{
                                    START:[["You did great last week.","I knew this job was perfect for you. Keep up the good work."]],
                                    AFTER_EVENT:[["You did great with the event chosing. Thomas could not wait to start writing"]],
                                    AFTER_TITLE:[["I knew you would be great. I just saw Thomas and he was super happy.", "He said you chose exactly the title he would have chosen."]],
                                    AFTER_LAYOUT:[["You did really well! Even better than past weeks I may add.", "I am sure the editor in chief will be happy to publish your work."]]
                                }
                            },
                            {
                                media:5,
                                comment: {
                                    START:[["You are starting to get the hang of it. I am sure soon everyone will notice."]],
                                    AFTER_LAYOUT:[["You did fine this week but there still room for improvement.", "Let's see what the editor in chief thinks."]]
                                }
                            },
                            {
                                media:3,
                                comment: {
                                    START:[["I heard the editor in chief wasn't too happy about your work but don't worry I'm sure this week will be better."]],
                                    AFTER_EVENT:[["I heard Thomas wasn't too happy about your event decision."]],
                                    AFTER_TITLE:[["I heard Jakub wasn't too happy about your title decision."]],
                                    AFTER_LAYOUT:[ ["I have only heard good things about you so...","Don't be too hard on yourself. There is a lot of room for improvement."]]
                                }
                            },
                            {
                                media:0,
                                comment: {
                                    START:[["I heard the editor in chief wasn't too happy about your work but don't worry I'm sure this week will be better."]],
                                    AFTER_EVENT:[["How do you feel? Was it too hard?", "Remember to always pay attention to the details, they can be the difference between great and bad."]],
                                    AFTER_TITLE:[["I have not spoken to Jakub yet but I'm sure you are doing great."]],
                                    AFTER_LAYOUT:[ ["It can be hard sometimes but you can't lose motivation!","Remember constructive critizism is always good!"]]
                                }
                            }
                            
                    ]
                    },
                ],
                events:[
                    {
                        eventId: "cupcakes",
                        //Each index leads to the next piece of dialog relating to this topic from the person
                        dialogs:{
                            START:["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."],
                            AFTER_EVENT:["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."],
                            AFTER_TITLE:["I knew I had made a great decision hiring you.", "That title you chose was just perfect."],
                            AFTER_LAYOUT:["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]
                        }
                    },
                    {
                        eventId: "missingcoat",
                        dialogs:{
                            START:["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."],
                            AFTER_EVENT:["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."],
                            AFTER_TITLE:["I knew I had made a great decision hiring you.", "That title you chose was just perfect."],
                            AFTER_LAYOUT:["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]
                        }
                    },
                    {
                        eventId: "runninglate",
                        dialogs:{
                            START:["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."],
                            AFTER_EVENT:["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."],
                            AFTER_TITLE:["I knew I had made a great decision hiring you.", "That title you chose was just perfect."],
                            AFTER_LAYOUT:["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]
                        }
                    },
                    {
                        eventId: "sick",
                        dialogs:{
                            START:["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."],
                            AFTER_EVENT:["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."],
                            AFTER_TITLE:["I knew I had made a great decision hiring you.", "That title you chose was just perfect."],
                            AFTER_LAYOUT:["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]
                        }
                    }
                ]
            },
            
            
        ]
    },
    {
        person:"REPORTER",
        firstWeek: {
            salute: ["Sorry I'm a little late. I forgot you were starting today and got a little carried away talking to Jakub."],
            goodbye:["Okay, thanks. It has been a pleasure meeting you! Hope we can talk more some other day!"],
            comment:[
                {
                score: 9,
                    comment:{
                            START:["I'm Thomas by the way, these team's reporter."],
                            AFTER_EVENT:["I'm Thomas by the way, these team's reporter."],
                            AFTER_TITLE:["I knew I had made a great decision hiring you.", "That title you chose was just perfect."],
                            AFTER_LAYOUT:["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work."]
                        }
                    },
                    {
                        score: 7,
                        comment:{
                                START:["I'm Thomas by the way, these team's reporter."],
                                AFTER_EVENT:["I'm Thomas by the way, these team's reporter."],
                                AFTER_TITLE:["I knew you would be great. I just saw Thomas and he was super happy.", "He said you chose exactly the title he would have chosen."],
                                AFTER_LAYOUT:["You did really well for your first week!", "I am sure the editor in chief will be happy to publish your work."]
                            }
                        },
                    {
                        score: 5,
                        comment:{
                                START:["I'm Thomas by the way, these team's reporter."],
                                AFTER_EVENT:["I'm Thomas by the way, these team's reporter."],
                                AFTER_TITLE:["I knew I had made a great decision hiring you.", "That title you chose was just perfect."],
                                AFTER_LAYOUT:["You did great for your first week. I am sure next week will be better.", "Let's see what the editor in chief thinks."]
                            }
                        },
                    {
                        score: 3,
                        comment:{
                                START:["I'm Thomas by the way, these team's reporter."],
                                AFTER_EVENT:["I'm Thomas by the way, these team's reporter."],
                                AFTER_TITLE:["I heard Jakub wasn't too happy about your title decision."],
                                AFTER_LAYOUT:[ "I have only heard good things about you so...","Don't be too hard on yourself and whatever the editor in chief says, It's just your first week. There is a lot of room for improvement."]
                            }
                        },
                    {
                        score: 0,
                        comment:{
                                START:["I'm Thomas by the way, these team's reporter."],
                                AFTER_EVENT:["I'm Thomas by the way, these team's reporter."],
                                AFTER_TITLE:["First title choice. That must be exciting.", "I have not spoken to Jakub yet but I'm sure you are doing great."],
                                AFTER_LAYOUT:[ "First days at a new job can be hard but you can't lose motivation!","Remember constructive critizism is always good!"]
                            }
                        }
                    ],
            event:{
                START:["I would show you arround or something but you know, it is a little late. Do you have the story I need to cover?"],
                AFTER_EVENT:["I would show you arround or something but you know, it is a little late. Do you have the story I need to cover?"],
                AFTER_TITLE:["Anyway, the first week can be intimidating.", "Make sure you ask whenever needed. Everyone here would love to help."],
                AFTER_LAYOUT:[ "Anyway, the first week can be intimidating.", "Make sure you ask whenever needed. Everyone here would love to help."]
            }
        },
        weeks:[
            {
                salute:{
                    START:[["Welcome back to the ship!", "Firs week of the month, let's see how we do."], ["First days of the month are great, they always feel like a fresh start."],["🎶 Adieu donc la belle je m'en va... Puisquc mon bâtiment s'en va... Je m'en vais faire un tour à Nantes... Puisque ie Roi me we demande ... 🎶", "Bonjour! How is everything?"]],
                    AFTER_EVENT:[["Ahoy!"]],
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
                                comment: {
                                    START:[["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."]],
                                    AFTER_EVENT:[["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."]],
                                    AFTER_TITLE:[["I knew I had made a great decision hiring you.", "That title you chose was just perfect."]],
                                    AFTER_LAYOUT:[["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]]
                                }
                            },
                            {
                                media:7,
                                comment:{
                                    START:[["You did great last week.","I knew this job was perfect for you. Keep up the good work."]],
                                    AFTER_EVENT:[["You did great with the event chosing. Thomas could not wait to start writing"]],
                                    AFTER_TITLE:[["I knew you would be great. I just saw Thomas and he was super happy.", "He said you chose exactly the title he would have chosen."]],
                                    AFTER_LAYOUT:[["You did really well! Even better than past weeks I may add.", "I am sure the editor in chief will be happy to publish your work."]]
                                }
                            },
                            {
                                media:5,
                                comment: {
                                    START:[["You are starting to get the hang of it. I am sure soon everyone will notice."]],
                                    AFTER_LAYOUT:[["You did fine this week but there still room for improvement.", "Let's see what the editor in chief thinks."]]
                                }
                            },
                            {
                                media:3,
                                comment: {
                                    START:[["See? I was sure you had it in you.","This week we are proving the editor in chief wrong."]],
                                    AFTER_EVENT:[["I heard Thomas wasn't too happy about your event decision."]],
                                    AFTER_TITLE:[["I heard Jakub wasn't too happy about your title decision."]],
                                    AFTER_LAYOUT:[ ["I have only heard good things about you so...","Don't be too hard on yourself. There is a lot of room for improvement."]]
                                }
                            },
                            {
                                media:0,
                                comment: {
                                    START:[["Last week was a tough one wasn't it?","Luckily you are doing sooo much better now", "keep up the good work."]],
                                    AFTER_EVENT:[["How do you feel? Was it too hard?", "Remember to always pay attention to the details, they can be the difference between great and bad."]],
                                    AFTER_TITLE:[["I have not spoken to Jakub yet but I'm sure you are doing great."]],
                                    AFTER_LAYOUT:[ ["It can be hard sometimes but you can't lose motivation!","Remember constructive critizism is always good!"]]
                                }
                            }
                    ]
                    },
                    {
                        score: 7,
                        comment: [
                            {
                                media:9,
                                comment: {
                                    START:[["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."]],
                                    AFTER_EVENT:[["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."]],
                                    AFTER_TITLE:[["I knew I had made a great decision hiring you.", "That title you chose was just perfect."]],
                                    AFTER_LAYOUT:[["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]]
                                }
                            },
                            {
                                media:7,
                                comment:{
                                    START:[["You did great last week.","I knew this job was perfect for you. Keep up the good work."]],
                                    AFTER_EVENT:[["You did great with the event chosing. Thomas could not wait to start writing"]],
                                    AFTER_TITLE:[["I knew you would be great. I just saw Thomas and he was super happy.", "He said you chose exactly the title he would have chosen."]],
                                    AFTER_LAYOUT:[["You did really well! Even better than past weeks I may add.", "I am sure the editor in chief will be happy to publish your work."]]
                                }
                            },
                            {
                                media:5,
                                comment: {
                                    START:[["You are starting to get the hang of it. I am sure soon everyone will notice."]],
                                    AFTER_LAYOUT:[["You did fine this week but there still room for improvement.", "Let's see what the editor in chief thinks."]]
                                }
                            },
                            {
                                media:3,
                                comment: {
                                    START:[["See? I was sure you had it in you.","This week we are proving the editor in chief wrong."]],
                                    AFTER_EVENT:[["I heard Thomas wasn't too happy about your event decision."]],
                                    AFTER_TITLE:[["I heard Jakub wasn't too happy about your title decision."]],
                                    AFTER_LAYOUT:[ ["I have only heard good things about you so...","Don't be too hard on yourself. There is a lot of room for improvement."]]
                                }
                            },
                            {
                                media:0,
                                comment: {
                                    START:[["Last week was a tough one wasn't it?","Luckily you are doing sooo much better now", "keep up the good work."]],
                                    AFTER_EVENT:[["How do you feel? Was it too hard?", "Remember to always pay attention to the details, they can be the difference between great and bad."]],
                                    AFTER_TITLE:[["I have not spoken to Jakub yet but I'm sure you are doing great."]],
                                    AFTER_LAYOUT:[ ["It can be hard sometimes but you can't lose motivation!","Remember constructive critizism is always good!"]]
                                }
                            }
                    ]
                    },
                    
                    {
                        score: 5,
                        comment: [
                            {
                                media:9,
                                comment: {
                                    START:[["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."]],
                                    AFTER_EVENT:[["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."]],
                                    AFTER_TITLE:[["I knew I had made a great decision hiring you.", "That title you chose was just perfect."]],
                                    AFTER_LAYOUT:[["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]]
                                }
                            },
                            {
                                media:7,
                                comment:{
                                    START:[["You did great last week.","I knew this job was perfect for you. Keep up the good work."]],
                                    AFTER_EVENT:[["You did great with the event chosing. Thomas could not wait to start writing"]],
                                    AFTER_TITLE:[["I knew you would be great. I just saw Thomas and he was super happy.", "He said you chose exactly the title he would have chosen."]],
                                    AFTER_LAYOUT:[["You did really well! Even better than past weeks I may add.", "I am sure the editor in chief will be happy to publish your work."]]
                                }
                            },
                            {
                                media:5,
                                comment: {
                                    START:[["You are starting to get the hang of it. I am sure soon everyone will notice."]],
                                    AFTER_LAYOUT:[["You did fine this week but there still room for improvement.", "Let's see what the editor in chief thinks."]]
                                }
                            },
                            {
                                media:3,
                                comment: {
                                    START:[["I heard the editor in chief wasn't too happy about your work but don't worry I'm sure this week will be better."]],
                                    AFTER_EVENT:[["I heard Thomas wasn't too happy about your event decision."]],
                                    AFTER_TITLE:[["I heard Jakub wasn't too happy about your title decision."]],
                                    AFTER_LAYOUT:[ ["I have only heard good things about you so...","Don't be too hard on yourself. There is a lot of room for improvement."]]
                                }
                            },
                            {
                                media:0,
                                comment: {
                                    START:[["I heard the editor in chief wasn't too happy about your work but don't worry I'm sure this week will be better."]],
                                    AFTER_EVENT:[["How do you feel? Was it too hard?", "Remember to always pay attention to the details, they can be the difference between great and bad."]],
                                    AFTER_TITLE:[["I have not spoken to Jakub yet but I'm sure you are doing great."]],
                                    AFTER_LAYOUT:[ ["It can be hard sometimes but you can't lose motivation!","Remember constructive critizism is always good!"]]
                                }
                            }
                            
                    ]
                    },
                    {
                        score: 3,
                        comment: [
                            {
                                media:9,
                                comment: {
                                    START:[["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."]],
                                    AFTER_EVENT:[["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."]],
                                    AFTER_TITLE:[["I knew I had made a great decision hiring you.", "That title you chose was just perfect."]],
                                    AFTER_LAYOUT:[["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]]
                                }
                            },
                            {
                                media:7,
                                comment:{
                                    START:[["You did great last week.","I knew this job was perfect for you. Keep up the good work."]],
                                    AFTER_EVENT:[["You did great with the event chosing. Thomas could not wait to start writing"]],
                                    AFTER_TITLE:[["I knew you would be great. I just saw Thomas and he was super happy.", "He said you chose exactly the title he would have chosen."]],
                                    AFTER_LAYOUT:[["You did really well! Even better than past weeks I may add.", "I am sure the editor in chief will be happy to publish your work."]]
                                }
                            },
                            {
                                media:5,
                                comment: {
                                    START:[["You are starting to get the hang of it. I am sure soon everyone will notice."]],
                                    AFTER_LAYOUT:[["You did fine this week but there still room for improvement.", "Let's see what the editor in chief thinks."]]
                                }
                            },
                            {
                                media:3,
                                comment: {
                                    START:[["I heard the editor in chief wasn't too happy about your work but don't worry I'm sure this week will be better."]],
                                    AFTER_EVENT:[["I heard Thomas wasn't too happy about your event decision."]],
                                    AFTER_TITLE:[["I heard Jakub wasn't too happy about your title decision."]],
                                    AFTER_LAYOUT:[ ["I have only heard good things about you so...","Don't be too hard on yourself. There is a lot of room for improvement."]]
                                }
                            },
                            {
                                media:0,
                                comment: {
                                    START:[["I heard the editor in chief wasn't too happy about your work but don't worry I'm sure this week will be better."]],
                                    AFTER_EVENT:[["How do you feel? Was it too hard?", "Remember to always pay attention to the details, they can be the difference between great and bad."]],
                                    AFTER_TITLE:[["I have not spoken to Jakub yet but I'm sure you are doing great."]],
                                    AFTER_LAYOUT:[ ["It can be hard sometimes but you can't lose motivation!","Remember constructive critizism is always good!"]]
                                }
                            }
                            
                    ]
                    },
                    {
                        score: 0,
                        comment: [
                            {
                                media:9,
                                comment: {
                                    START:[["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."]],
                                    AFTER_EVENT:[["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."]],
                                    AFTER_TITLE:[["I knew I had made a great decision hiring you.", "That title you chose was just perfect."]],
                                    AFTER_LAYOUT:[["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]]
                                }
                            },
                            {
                                media:7,
                                comment:{
                                    START:[["You did great last week.","I knew this job was perfect for you. Keep up the good work."]],
                                    AFTER_EVENT:[["You did great with the event chosing. Thomas could not wait to start writing"]],
                                    AFTER_TITLE:[["I knew you would be great. I just saw Thomas and he was super happy.", "He said you chose exactly the title he would have chosen."]],
                                    AFTER_LAYOUT:[["You did really well! Even better than past weeks I may add.", "I am sure the editor in chief will be happy to publish your work."]]
                                }
                            },
                            {
                                media:5,
                                comment: {
                                    START:[["You are starting to get the hang of it. I am sure soon everyone will notice."]],
                                    AFTER_LAYOUT:[["You did fine this week but there still room for improvement.", "Let's see what the editor in chief thinks."]]
                                }
                            },
                            {
                                media:3,
                                comment: {
                                    START:[["I heard the editor in chief wasn't too happy about your work but don't worry I'm sure this week will be better."]],
                                    AFTER_EVENT:[["I heard Thomas wasn't too happy about your event decision."]],
                                    AFTER_TITLE:[["I heard Jakub wasn't too happy about your title decision."]],
                                    AFTER_LAYOUT:[ ["I have only heard good things about you so...","Don't be too hard on yourself. There is a lot of room for improvement."]]
                                }
                            },
                            {
                                media:0,
                                comment: {
                                    START:[["I heard the editor in chief wasn't too happy about your work but don't worry I'm sure this week will be better."]],
                                    AFTER_EVENT:[["How do you feel? Was it too hard?", "Remember to always pay attention to the details, they can be the difference between great and bad."]],
                                    AFTER_TITLE:[["I have not spoken to Jakub yet but I'm sure you are doing great."]],
                                    AFTER_LAYOUT:[ ["It can be hard sometimes but you can't lose motivation!","Remember constructive critizism is always good!"]]
                                }
                            }
                            
                    ]
                    },
                ],
                events:[
                    {
                        eventId: "cupcakes",
                        //Each index leads to the next piece of dialog relating to this topic from the person
                        dialogs:{
                            START:["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."],
                            AFTER_EVENT:["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."],
                            AFTER_TITLE:["I knew I had made a great decision hiring you.", "That title you chose was just perfect."],
                            AFTER_LAYOUT:["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]
                        }
                    },
                    {
                        eventId: "missingcoat",
                        dialogs:{
                            START:["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."],
                            AFTER_EVENT:["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."],
                            AFTER_TITLE:["I knew I had made a great decision hiring you.", "That title you chose was just perfect."],
                            AFTER_LAYOUT:["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]
                        }
                    },
                    {
                        eventId: "runninglate",
                        dialogs:{
                            START:["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."],
                            AFTER_EVENT:["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."],
                            AFTER_TITLE:["I knew I had made a great decision hiring you.", "That title you chose was just perfect."],
                            AFTER_LAYOUT:["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]
                        }
                    },
                    {
                        eventId: "sick",
                        dialogs:{
                            START:["You did super great last week!", "Between you and me, the editor in chief was super happy you decided to come for another week."],
                            AFTER_EVENT:["Wow! Jakub just told me you were a natural.", "The event you chose to cover was really interesting and engaging."],
                            AFTER_TITLE:["I knew I had made a great decision hiring you.", "That title you chose was just perfect."],
                            AFTER_LAYOUT:["Wow! You are a natural! I don't think I have any advice for you.", "I am sure the editor in chief will love your work, as usual."]
                        }
                    }
                ]
            },
            
            
        ]
    }
]
const eventDialogOrder = [
    {
        event:"firstweek",
        week: -1,
        order: ["MANAGING_EDITOR", "NEWS_EDITOR", "SELECT_EVENT", "REPORTER", "ART_DIRECTOR","SELECT_TITLE", "NEWS_EDITOR", "ART_DIRECTOR", "SELECT_LAYOUT", "ART_DIRECTOR", "MANAGING_EDITOR", "SCORE_SCREEN"]
    },

]
export {dialogs, eventDialogOrder}