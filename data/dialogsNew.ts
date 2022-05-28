const eventDialogs = [
    {
        event:"firstday",
        dialog:{
            START:["MANAGING_EDITOR", "NEWS_EDITOR"],
            AFTER_EVENT:["REPORTER", "ART_DIRECTOR"],
            AFTER_TITLE:["NEWS_EDITOR", "ART_DIRECTOR"],
            AFTER_LAYOUT:["MANAGING_EDITOR"]
        },
        available:{
            START:["MANAGING_EDITOR", "NEWS_EDITOR"],
            AFTER_EVENT:["MANAGING_EDITOR","ART_DIRECTOR"],
            AFTER_TITLE:["NEWS_EDITOR", "REPORTER", "ART_DIRECTOR"],
            AFTER_LAYOUT:["MANAGING_EDITOR"]
        },
        knowledge:{
            MANAGING_EDITOR:{type:"location", knowledge:0},
            NEWS_EDITOR:{type:"actor", knowledge:0},
            ART_DIRECTOR:"none",
            REPORTER:{type:"eventCode", knowledge:0}
        }
    },
    {
        event:"empty",
        dialog:{
            START:[""],
            AFTER_EVENT:[""],
            AFTER_TITLE:[""],
            AFTER_LAYOUT:[""]
        },
        available:{
            START:["MANAGING_EDITOR", "NEWS_EDITOR"],
            AFTER_EVENT:["MANAGING_EDITOR","ART_DIRECTOR"],
            AFTER_TITLE:["NEWS_EDITOR", "REPORTER", "ART_DIRECTOR"],
            AFTER_LAYOUT:["MANAGING_EDITOR"]
        },
        knowledge:{
            MANAGING_EDITOR:{type:"location", knowledge:0},
            NEWS_EDITOR:{type:"actor", knowledge:0},
            ART_DIRECTOR:{type:"none", knowledge:0},
            REPORTER:{type:"eventCode", knowledge:0}
        }
    },
    {
        event:"cupcakes",
        dialog:{
            START:["REPORTER", "NEWS_EDITOR"],
            AFTER_EVENT:["MANAGING_EDITOR", "REPORTER"],
            AFTER_TITLE:["NEWS_EDITOR", "ART_DIRECTOR"],
            AFTER_LAYOUT:["REPORTER","ART_DIRECTOR","NEWS_EDITOR","MANAGING_EDITOR"]
        },
        available:{
            START:["REPORTER", "NEWS_EDITOR"],
            AFTER_EVENT:["MANAGING_EDITOR","REPORTER"],
            AFTER_TITLE:["NEWS_EDITOR", "REPORTER", "ART_DIRECTOR"],
            AFTER_LAYOUT:["MANAGING_EDITOR", "ART_DIRECTOR", "NEWS_EDITOR", "REPORTER"]
        },
        knowledge:{
            MANAGING_EDITOR:{type:"none", knowledge:0},
            NEWS_EDITOR:{type:"actor", knowledge:0}, 
            ART_DIRECTOR:"location",
            REPORTER:{type:"eventCode", knowledge:0}
        }
    },
    {
        event:"empty",
        dialog:{
            START:[""],
            AFTER_EVENT:[""],
            AFTER_TITLE:[""],
            AFTER_LAYOUT:[""]
        },
        available:{
            START:["REPORTER", "NEWS_EDITOR", "ART_DIRECTOR"],
            AFTER_EVENT:["MANAGING_EDITOR","REPORTER"],
            AFTER_TITLE:["NEWS_EDITOR", "ART_DIRECTOR"],
            AFTER_LAYOUT:["MANAGING_EDITOR", "ART_DIRECTOR"]
        },
        knowledge:{
            MANAGING_EDITOR:{type:"location", knowledge:0},
            NEWS_EDITOR:{type:"actor", knowledge:0},
            ART_DIRECTOR:{type:"none", knowledge:0},
            REPORTER:{type:"eventCode", knowledge:0}
        }
    },
    {
        event:"missingcoat",
        dialog:{
            START:["MANAGING_EDITOR", "NEWS_EDITOR"],
            AFTER_EVENT:["REPORTER","NEWS_EDITOR"],
            AFTER_TITLE:["ART_DIRECTOR"],
            AFTER_LAYOUT:["ART_DIRECTOR","MANAGING_EDITOR"]
        },
        available:{
            START:["REPORTER", "NEWS_EDITOR"],
            AFTER_EVENT:["MANAGING_EDITOR", "NEWS_EDITOR"],
            AFTER_TITLE:["NEWS_EDITOR","ART_DIRECTOR"],
            AFTER_LAYOUT:["MANAGING_EDITOR", "NEWS_EDITOR", "REPORTER"]
        },
        knowledge:{
            MANAGING_EDITOR:{type:"location", knowledge:0},
            NEWS_EDITOR:{type:"none", knowledge:0}, 
            ART_DIRECTOR:{type:"actor", knowledge:0},
            REPORTER:{type:"eventCode", knowledge:0}
        }
    },
    {
        event:"sick",
        dialog:{
            START:["MANAGING_EDITOR", "NEWS_EDITOR"],
            AFTER_EVENT:["REPORTER"],
            AFTER_TITLE:["MANAGING_EDITOR"],
            AFTER_LAYOUT:["REPORTER","MANAGING_EDITOR"]
        },
        available:{
            START:["REPORTER", "NEWS_EDITOR", "MANAGING_EDITOR"],
            AFTER_EVENT:["MANAGING_EDITOR", "NEWS_EDITOR"],
            AFTER_TITLE:["NEWS_EDITOR", "MANAGING_EDITOR"],
            AFTER_LAYOUT:["MANAGING_EDITOR", "NEWS_EDITOR", "REPORTER"]
        },
        knowledge:{
            MANAGING_EDITOR:{type:"location", knowledge:0},
            NEWS_EDITOR:{type:"eventCode", knowledge:0}, 
            ART_DIRECTOR:{type:"none", knowledge:0},
            REPORTER:{type:"actor", knowledge:0}
        }
    }
    
]
//0=>knows themselves 1=>Knows from someone 2=>Thinks they know
const clueDialogs = [
    {
        person:"MANAGING_EDITOR",
        text:{
            location:{
                knows:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                knowsNot:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                dontknow:[["Mmm... I'm not sure.", "I think you should ask someone else, maybe Jakub knows."],["I have so much in my head right now but let me think... what was it...", "I'm sorry I can't recall."],["I don't know about the location but I'm sure someone else does.", "If you ask around I'm sure someone will have the answer."]]
            },
            actor:{
                knows:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                knowsNot:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                dontknow:[["Mmm... I'm not sure.", "I think you should ask someone else, maybe Thomas knows."],["I have so much in my head right now but let me think... what was it...", "I'm sorry I can't recall."],["I don't know but I'm sure someone else does.", "If you ask around I'm sure someone will have the answer."]]
            },
            eventCode:{
                knows:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                knowsNot:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                dontknow:[["Mmm... I'm not sure.", "I think you should ask someone else, maybe Aaliyah knows."],["I have so much in my head right now but let me think... what was it...", "I'm sorry I can't recall."],["I don't know but I'm sure someone else does.", "If you ask around I'm sure someone will have the answer."]]
            },
        }
    },
    {
        person:"NEWS_EDITOR",
        text:{
            location:{
                knows:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                knowsNot:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                dontknow:[["Mmm... I'm not sure.", "I think you should ask someone else, maybe Thomas knows."],["I have so much in my head right now but let me think... what was it...", "I'm sorry I can't recall."],["I don't know but I'm sure someone else does.", "If you ask around I'm sure someone will have the answer."]]
            },
            actor:{
                knows:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                knowsNot:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                dontknow:[["Mmm... I'm not sure.", "I think you should ask someone else, maybe Gabrielle knows."],["I have so much in my head right now but let me think... what was it...", "I'm sorry I can't recall."],["I don't know but I'm sure someone else does.", "If you ask around I'm sure someone will have the answer."]]
            },
            eventCode:{
                knows:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                knowsNot:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                dontknow:[["Mmm... I'm not sure.", "I think you should ask someone else, maybe Aaliyah knows."],["I have so much in my head right now but let me think... what was it...", "I'm sorry I can't recall."],["I don't know but I'm sure someone else does.", "If you ask around I'm sure someone will have the answer."]]
            },
        }
    },
    {
        person:"REPORTER",
        text:{
            location:{
                knows:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                knowsNot:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                dontknow:[["Mmm... I'm not sure.", "I think you should ask someone else, maybe Gabrielle knows."],["I have so much in my head right now but let me think... what was it...", "I'm sorry I can't recall."],["I don't know but I'm sure someone else does.", "If you ask around I'm sure someone will have the answer."]]
            },
            actor:{
                knows:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                knowsNot:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                dontknow:[["Mmm... I'm not sure.", "I think you should ask someone else, maybe Aaliyah knows."],["I have so much in my head right now but let me think... what was it...", "I'm sorry I can't recall."],["I don't know but I'm sure someone else does.", "If you ask around I'm sure someone will have the answer."]]
            },
            eventCode:{
                knows:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                knowsNot:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                dontknow:[["Mmm... I'm not sure.", "I think you should ask someone else, maybe Jakub knows."],["I have so much in my head right now but let me think... what was it...", "I'm sorry I can't recall."],["I don't know but I'm sure someone else does.", "If you ask around I'm sure someone will have the answer."]]
            },
        }
    },
    {
        person:"ART_DIRECTOR",
        text:{
            location:{
                knows:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                knowsNot:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                dontknow:[["Mmm... I'm not sure.", "I think you should ask someone else, maybe Thomas knows."],["I have so much in my head right now but let me think... what was it...", "I'm sorry I can't recall."],["I don't know but I'm sure someone else does.", "If you ask around I'm sure someone will have the answer."]]
            },
            actor:{
                knows:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                knowsNot:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                dontknow:[["Mmm... I'm not sure.", "I think you should ask someone else, maybe Gabrielle knows."],["I have so much in my head right now but let me think... what was it...", "I'm sorry I can't recall."],["I don't know but I'm sure someone else does.", "If you ask around I'm sure someone will have the answer."]]
            },
            eventCode:{
                knows:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                knowsNot:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                dontknow:[["Mmm... I'm not sure.", "I think you should ask someone else, maybe Jakub knows."],["I have so much in my head right now but let me think... what was it...", "I'm sorry I can't recall."],["I don't know but I'm sure someone else does.", "If you ask around I'm sure someone will have the answer."]]
            },
        }
    }
]
//SimpleDialogs
const simpleDialogs =[
    {
        person:"MANAGING_EDITOR",
        event:[
            {
                eventId:"firstday",
                dialogs:{
                    START:["Welcome to the newsroom! I am Gabrielle the managing editor.","Here, you will be working with Jakub the news editor, Aaliyah the art director and Thomas the reporter on the front page of our newspaper.",
                    "Once you have finished, the editor-in-chief will review your work and judge if it is ready to publish.", "You can see the 'To do' list I left for you to know which tasks are left. (Remember you can move around the newsroom by dragging and talk to me or others by clicking on us...)",
                    "If you need anything, just ask."],
                    AFTER_LAYOUT:["How was your first week?", "Now all you have to do is present your work to the editor in chief.", "She will be the one to say if your work will be published or not.","I'll stay a little longer in case you need anything, It really was nice meeting you."],
                    AFTER_EVENT:[""],
                    AFTER_TITLE:[""]
                }
            },
            {
                eventId:"cupcakes",
                dialogs:{
                    START:[""],
                    AFTER_LAYOUT:["Thank you so much! I can not believe you remembered!"],
                    AFTER_EVENT:["🎶 Adieu donc la belle je m'en va... Puisquc mon bâtiment s'en va... Je m'en vais faire un tour à Nantes... Puisque ie Roi me we demande ... 🎶","mmm... It smells like chocalate in here. Do you have any idea why?", "I need to find out where that smell is coming from."],
                    AFTER_TITLE:[""]
                }
            },
            {
                eventId:"missingcoat",
                dialogs:{
                    START:["Hey! How are you today?", "I'll be here if you need anything."],
                    AFTER_LAYOUT:["I think it's time to present your work. Do you think it's ready?", "You still have time to change a few things."],
                    AFTER_EVENT:[""],
                    AFTER_TITLE:[""]
                }
            },
            {
                eventId:"sick",
                dialogs:{
                    START:["Bonjour!", "Aaliyah called sick this morning, do you think you can handle chosing the design alone?", "Great! I'm here if you need help."],
                    AFTER_LAYOUT:["I think so too. Aaliyah will be happy to know you did great in her absence."],
                    AFTER_EVENT:[""],
                    AFTER_TITLE:["I noticed you chose a title already, now is time to choose the design.", "I'll be around if you need help."]
                }
            },
        ]
        
    },
    {
        person:"NEWS_EDITOR",
        event:[
            {
                eventId:"firstday",
                dialogs:{
                    START:["Hello, my name is Jakub and I am the news editor.", "The first thing we need to do is assign a story for Thomas to cover. Later, we will find the story's perfect title.",
                    "Here I have some of the current events, all you have to do is choose the one you think will fit better this weeks newspaper.",
                    "If you are not sure what decision to make, ask around.", "There will always be someone that knows the answer."],
                    AFTER_LAYOUT:[""],
                    AFTER_EVENT:[""],
                    AFTER_TITLE:["Almost finished the week already, how do you feel?","Do you like the job? I can see why Gabrielle hired you.", "Anyway, I'm going back to work.","See you next week!"]
                }
            },
            {
                eventId:"cupcakes",
                dialogs:{
                    START:["I don't know if I can concentrate with this smell, I'm hungry and I just had breakfast!", "Good luck today!"],
                    AFTER_TITLE:["Gabrielle is leaving for a few hours and we thought later today would be a great moment for singing happy birthday.","What do you think? I will be in the newsroom if you need anything."],
                    AFTER_LAYOUT:["🎶 Happy birthday dear Gabrielle 🎶", "🎶 Happy birthday to you 🎶"],
                    AFTER_EVENT:[""]
                }
            },
            {
                eventId:"missingcoat",
                dialogs:{
                    START:["Well I can't find my coat, has anyone seen it?", "Anyway, let's assign Thomas a story. If you see my coat please let me know."],
                    AFTER_LAYOUT:[""],
                    AFTER_EVENT:["Let's think of a title while we wait."],
                    AFTER_TITLE:[""]
                }
            },
            {
                eventId:"sick",
                dialogs:{
                    START:["I'm sure she will be fine soon.", "If you need help I will be around."],
                    AFTER_LAYOUT:[""],
                    AFTER_EVENT:[""],
                    AFTER_TITLE:[""]
                }
            },
        ]
        
    },
    {
        person:"REPORTER",
        event:[
            {
                eventId:"firstday",
                dialogs:{
                    START:[""],
                    AFTER_LAYOUT:[""],
                    AFTER_TITLE:[""],
                    AFTER_EVENT:["Sorry I'm a little late. I forgot you were starting today and got a little carried away talking to Jakub.", "I'm Thomas by the way, these team's reporter. I write stories based on the news editor's assigments and gather information based on interviews, observation, research...", "I would show you around or something but you know, it is a little late. Do you have the story I need to cover?","Okay, thanks. It has been a pleasure meeting you! Hope we can talk more some other day!"],
                }
            },
            {
                eventId:"cupcakes",
                dialogs:{
                    AFTER_TITLE:[""],
                    START:["Hey! How are things going?", "Can you smell chocolate?", "I knew it! Today is Gabrielle's birthday so I brought some chocolate cupcakes.", "It was supposed to be a surprise but... chocolate smells delicious. Now I'm sure she will notice.", "If she asks, could you keep the secret?"],
                    AFTER_EVENT:["It is definetly not coming from me!"]  ,
                    AFTER_LAYOUT:["🎶 Happy birthday to you 🎶"]
                }
            },
            {
                eventId:"missingcoat",
                dialogs:{
                    START:[""],
                    AFTER_LAYOUT:[""],
                    AFTER_EVENT:["Thank you, I don't think this story will take much time.", "See you tomorrow!"],
                    AFTER_TITLE:[""]
                }
            },
            {
                eventId:"sick",
                dialogs:{
                    START:["I'm sure she will be fine soon.", "If you need help I will be around."],
                    AFTER_LAYOUT:["I'm heading home. Love the design you chose, really fits the story."],
                    AFTER_EVENT:["I'm on my way then, see you!"],
                    AFTER_TITLE:[""]
                }
            },
        ]
        
    },
    {
        person:"ART_DIRECTOR",
        event:[
            {
                eventId:"firstday",
                dialogs:{
                    AFTER_EVENT:["Was that Thomas running?", "Welcome to the newsroom. I'm the newspaper's art director, Aaliyah. I'm in charge of the design and quality and cohesiveness of the art of our newspaper.", "I was told the both of us would be working on the front page today. I already have some ideas for how I want it to look.","I am looking forward to working with you."],
                    AFTER_TITLE:["Hey! can I borrow you a minute?", "I need you to choose what design you prefer."],
                    START:[""],
                    AFTER_LAYOUT:[""]
                }
            },
            {
                eventId:"cupcakes",
                dialogs:{
                    AFTER_LAYOUT:["🎶 Happy birthday to you 🎶"],
                    AFTER_TITLE:["I just found out today is Gabrielle's birthday!", "I can't believe I forgot...", "At least Thomas brought cupcakes."],
                    AFTER_EVENT:[""],
                    START:[""]
                }
            },
            {
                eventId:"missingcoat",
                dialogs:{
                    START:[""],
                    AFTER_LAYOUT:["The one you chose was actually my favourite.", "Thank you for your help."],
                    AFTER_EVENT:[""],
                    AFTER_TITLE:["Good morning! Could you give me your opinion on the designs I've made?", "I'll be waiting."]
                }
            },
        ]
        
    }
]
const simpleOnClickDialogs =[
    {
        person:"MANAGING_EDITOR",
        event:[
            {
                eventId:"firstday",
                dialogs:{
                    START:["Remember to always ask questions when needed."],
                    AFTER_LAYOUT:["Remember you can still make changes to your choices."],
                    AFTER_EVENT:["Remember to see your 'To do' list so you don't forget anything."],
                    AFTER_TITLE:[""]
                }
            },
            {
                eventId:"cupcakes",
                dialogs:{
                    START:[""],
                    AFTER_LAYOUT:["Thank you so much! I can not believe you remembered!"],
                    AFTER_EVENT:["Did anyone bring chocolate?"],
                    AFTER_TITLE:[""]
                }
            },
            {
                eventId:"missingcoat",
                dialogs:{
                    START:[""],
                    AFTER_LAYOUT:["Have you made any changes yet?"],
                    AFTER_EVENT:["Have you seen Jakub's coat? It probably is around here somewhere."],
                    AFTER_TITLE:[""]
                }
            },
            {
                eventId:"empty",
                dialogs:{
                    START:["How are you? Remember to always ask questions when needed."],
                    AFTER_LAYOUT:["Remember you can still make changes to your choices."],
                    AFTER_EVENT:["Remember to see your 'To do' list so you don't forget anything."],
                    AFTER_TITLE:["Remember you can make changes to your choices."]
                }
            },
            {
                eventId:"sick",
                dialogs:{
                    START:["Do you need any help?"],
                    AFTER_LAYOUT:["Do you need anything?"],
                    AFTER_EVENT:["How can I help you?"],
                    AFTER_TITLE:["I'm sure you will make a great design choice!"]
                }
            },
        ]
        
    },
    {
        person:"NEWS_EDITOR",
        event:[
            {
                eventId:"firstday",
                dialogs:{
                    START:["Do you need help choosing the event?"],
                    AFTER_LAYOUT:[""],
                    AFTER_EVENT:["I liked your decision. Now we need to write the title."],
                    AFTER_TITLE:["Just read the title you chose. You are doing great for your first week."]
                }
            },
            {
                eventId:"cupcakes",
                dialogs:{
                    START:["How can I help you?"],
                    AFTER_TITLE:["Gabrielle is leaving for a few hours and we thought later today would be a great moment for singing happy birthday.","What do you think?"],
                    AFTER_LAYOUT:["This cupcakes are delicious."],
                    AFTER_EVENT:[""]
                }
            },
            {
                eventId:"missingcoat",
                dialogs:{
                    START:["I might have left my coat in the car..."],
                    AFTER_LAYOUT:["I found my coat! It was in the archives.", "I don't know how it ended up there."],
                    AFTER_EVENT:["I am pretty sure I did not leave it at home..."],
                    AFTER_TITLE:["I am going to take a look around and see if I can find my coat.", "Is there anything you need?"]
                }
            },
            {
                eventId:"empty",
                dialogs:{
                    START:["Good morning!"],
                    AFTER_LAYOUT:["You are an expert by now."],
                    AFTER_EVENT:["Choosing events is easier when you know what you are looking for."],
                    AFTER_TITLE:["How are you?"]
                }
            },
            {
                eventId:"sick",
                dialogs:{
                    START:["Do you need any help?"],
                    AFTER_LAYOUT:["I think you did great."],
                    AFTER_EVENT:["Let's choose a title."],
                    AFTER_TITLE:["I'm sure Aaliyah will be happy with your decision."]
                }
            },
        ]
        
    },
    {
        person:"REPORTER",
        event:[
            {
                eventId:"firstday",
                dialogs:{
                    START:[""],
                    AFTER_LAYOUT:[""],
                    AFTER_TITLE:["I have not read the title you chose yet but I'm sure it's great. Need any help?"],
                    AFTER_EVENT:["Sorry I'm a little late. I forgot you were starting today and got a little carried away talking to Jakub.", "I'm Thomas by the way, these team's reporter.", "I would show you around or something but you know, it is a little late. Do you have the story I need to cover?","Okay, thanks. It has been a pleasure meeting you! Hope we can talk more some other day!"],
                }
            },
            {
                eventId:"cupcakes",
                dialogs:{
                    AFTER_TITLE:["I'm preparing my voice for singing.","LA, La, la, La, LA, LAAAA 🎶"],
                    START:["Remember to keep the secret"],
                    AFTER_EVENT:["Today no one brought chocolate to the office Gabrielle. Please, stop asking."] ,
                    AFTER_LAYOUT:["🎶 Cumpleaños feliz 🎶","🎶 Cumpleaños feliz 🎶", "🎶 Te deseamos tooodooos 🎶", "🎶 Un cumpleaños feliz 🎶"]
                }
            },
            {
                eventId:"missingcoat",
                dialogs:{
                    START:["Hello! I am waiting on your assigment. Do you need my help choosing?"],
                    AFTER_LAYOUT:["I went to the archives earlier but did not see Jakub's coat.", "How strange..."],
                    AFTER_EVENT:[""],
                    AFTER_TITLE:[""]
                }
            },
            {
                eventId:"empty",
                dialogs:{
                    START:["Welcome back!"],
                    AFTER_LAYOUT:["Today was kind of boring..."],
                    AFTER_EVENT:["This story will be great, I can feel it."],
                    AFTER_TITLE:["Anything I can help you with?"]
                }
            },
            {
                eventId:"sick",
                dialogs:{
                    START:["I hope Aaliyah is okay...", "I'll send her a 'Get well' card later."],
                    AFTER_LAYOUT:["I'm off to the post office, need anything?"],
                    AFTER_EVENT:[""],
                    AFTER_TITLE:[""]
                }
            },
        ]
        
    },
    {
        person:"ART_DIRECTOR",
        event:[
            {
                eventId:"firstday",
                dialogs:{
                    AFTER_EVENT:["I'm looking forward to working together."],
                    AFTER_TITLE:["Hey! can I borrow you a minute?", "I need you to choose what design you prefer."],
                    START:[""],
                    AFTER_LAYOUT:[""]
                }
            },
            {
                eventId:"cupcakes",
                dialogs:{
                    AFTER_LAYOUT:["This cupcakes are great."],
                    AFTER_TITLE:["Did you know today was Gabrielle's birthday?", "I can't believe I forgot...", "At least Thomas brought cupcakes."],
                    AFTER_EVENT:[""],
                    START:[""]
                }
            },
            {
                eventId:"missingcoat",
                dialogs:{
                    START:[""],
                    AFTER_LAYOUT:[""],
                    AFTER_EVENT:[""],
                    AFTER_TITLE:["Choosing the design can wait. What can I help you with?"]
                }
            },
            {
                eventId:"empty",
                dialogs:{
                    START:["How are you doing?"],
                    AFTER_LAYOUT:["I think today's design really fits the story."],
                    AFTER_EVENT:["I'm already imagining how the story you chose will look in the front page."],
                    AFTER_TITLE:["Let's choose a design."]
                }
            },
        ]
        
    }
]
export {eventDialogs, clueDialogs, simpleDialogs, simpleOnClickDialogs};