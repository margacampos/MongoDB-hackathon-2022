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
                dontknow:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]]
            },
            eventCode:{
                knows:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                knowsNot:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                dontknow:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]]
            },
        }
    },
    {
        person:"NEWS_EDITOR",
        text:{
            location:{
                knows:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                knowsNot:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                dontknow:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]]
            },
            actor:{
                knows:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                knowsNot:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                dontknow:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]]
            },
            eventCode:{
                knows:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                knowsNot:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                dontknow:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]]
            },
        }
    },
    {
        person:"REPORTER",
        text:{
            location:{
                knows:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                knowsNot:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                dontknow:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]]
            },
            actor:{
                knows:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                knowsNot:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                dontknow:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]]
            },
            eventCode:{
                knows:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                knowsNot:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                dontknow:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]]
            },
        }
    },
    {
        person:"ART_DIRECTOR",
        text:{
            location:{
                knows:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                knowsNot:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                dontknow:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]]
            },
            actor:{
                knows:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                knowsNot:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                dontknow:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]]
            },
            eventCode:{
                knows:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                knowsNot:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]],
                dontknow:[["This week's event should be focused on $.", "Anything else you need?"],["I heard from Thomas that there was a great story to focus on in $.", "Hope I was of help."],["Well... I'm not sure...", "If I can recall correctly there was a great event in $ but I would ask someone else if I were you."]]
            },
        }
    }
]
export {eventDialogs, clueDialogs};