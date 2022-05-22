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
                    "Once you have finished, the editor-in-chief will review your work and judge if it is ready to publish.", "Soon Jakub will be here to help you.",
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

        ]
        
    },
    {
        person:"NEWS_EDITOR",
        event:[
            {
                eventId:"firstday",
                dialogs:{
                    START:["Hello, my name is Jakub and I am the news editor.", "The first thing we need to do is assign a story for Thomas to cover.",
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
                    AFTER_EVENT:["Sorry I'm a little late. I forgot you were starting today and got a little carried away talking to Jakub.", "I'm Thomas by the way, these team's reporter.", "I would show you around or something but you know, it is a little late. Do you have the story I need to cover?","Okay, thanks. It has been a pleasure meeting you! Hope we can talk more some other day!"],
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

        ]
        
    },
    {
        person:"ART_DIRECTOR",
        event:[
            {
                eventId:"firstday",
                dialogs:{
                    AFTER_EVENT:["Was that Thomas running?", "Welcome to the newsroom. I'm the newspaper's art director, Aaliyah.", "I was told the both of us would be working on the front page today. I have some ideas for how I want it to look but I need to talk to Jakub, have you seen him?",
                    "If you see him could you tell him I'm looking for him?","I am looking forward to working with you."],
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

        ]
        
    },
    {
        person:"NEWS_EDITOR",
        event:[
            {
                eventId:"firstday",
                dialogs:{
                    START:["Hello, my name is Jakub and I am the news editor.", "The first thing we need to do is assign a story for Thomas to cover.",
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
                    AFTER_EVENT:["Sorry I'm a little late. I forgot you were starting today and got a little carried away talking to Jakub.", "I'm Thomas by the way, these team's reporter.", "I would show you around or something but you know, it is a little late. Do you have the story I need to cover?","Okay, thanks. It has been a pleasure meeting you! Hope we can talk more some other day!"],
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

        ]
        
    },
    {
        person:"ART_DIRECTOR",
        event:[
            {
                eventId:"firstday",
                dialogs:{
                    AFTER_EVENT:["Was that Thomas running?", "Welcome to the newsroom. I'm the newspaper's art director, Aaliyah.", "I was told the both of us would be working on the front page today. I have some ideas for how I want it to look but I need to talk to Jakub, have you seen him?",
                    "If you see him could you tell him I'm looking for him?","I am looking forward to working with you."],
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

        ]
        
    }
]
export {eventDialogs, clueDialogs, simpleDialogs, simpleOnClickDialogs};