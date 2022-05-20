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