interface Codes{
    code:string;
    label:string;
    decor:string;
    follow?:string;
    codes?:[Codes, ...Codes[]];
}
interface cameoEvent{
    rootCode:string;
    label:string;
    codes:[Codes, ...Codes[]]
}
const cameoTypeCodes = [
    {
        code:"COP",
        label:"Police forces"
    },
    {
        code:"GOV",
        label:"Government"
    },
    {
        code:"INS",
        label:"Insurgents"
    },
    {
        code:"JUD",
        label:"Judiciary"
    },
    {
        code:"MIL",
        label:"Military"
    },
    {
        code:"OPP",
        label:"Political Opposition"
    },
    {
        code:"REB",
        label:"Rebels"
    },
    {
        code:"SEP",
        label:"Separatist Rebels"
    },
    {
        code:"SPY",
        label:"State Intelligence"
    },
    {
        code:"UAF",
        label:"Unaligned Armed Forces"
    },
    {
        code:"AGR",
        label:"Agriculture",
        decor:"SUB",
    },
    {
        code:"BUS",
        label:"Business",
        decor:"REPLACE",
        word:"a"
    },
    {
        code:"CRM",
        label:"Criminal",
        decor:"REPLACE",
        word:"a"
    },
    {
        code:"CVL",
        label:"Civilian",
        decor:"REPLACE",
        word:"a"
    },
    {
        code:"DEV",
        label:"Development"
    },
    {
        code:"EDU",
        label:"Education",
        decor:"SUB",
    },
    {
        code:"ELI",
        label:"Elites"
    },
    {
        code:"ENV",
        label:"Environmental",
        decor:"SUB",
    },
    {
        code:"HLH",
        label:"Health",
        decor:"SUB"
    },
    {
        code:"HRI",
        label:"Human Rights",
        decor:"SUB"
    },
    {
        code:"LAB",
        label:"Labor",
        decor:"SUB"
    },
    {
        code:"LEG",
        label:"Legislature"
    },
    {
        code:"MED",
        label:"Media"
    },
    {
        code:"REF",
        label:"Refugees"
    },
    {
        code:"MOD",
        label:"Moderate",
        decor:"SUB"
    },
    {
        code:"RAD",
        label:"Radical"
    },
    {
        code:"AMN",
        label:"Amnesty International"
    },
    {
        code:"IRC",
        label:"Red Cross"
    },
    {
        code:"GRP",
        label:"Greenpeace",
        decor:"SUB"
    },
    {
        code:"UNO",
        label:"United Nations"
    },
    {
        code:"PKO",
        label:"Peacekeepers"
    },
    {
        code:"UIS",
        label:"Unidentified State Actor"
    },
    {
        code:"IMG",
        label:"International Militarized Group"
    },
    {
        code:"INT",
        label:"International/Transnational Generic"
    },
    {
        code:"MNC",
        label:"Multinational Corporation"
    },
    {
        code:"NGM",
        label:"Non-Governmental Movement"
    },
    {
        code:"NGO",
        label:"Non-Governmental Organization"
    },
    {
        code:"SET",
        label:"Settler"
    },
    {
        code:"IGO",
        label:"Inter-Governmental Organization"
    }
]
const cameoEventCodesRaw = [
    {
        rootCode:"01",
        label:"MAKE PUBLIC STATEMENT",
        codes:[
            {
                code:"010",
                label:"Make statement, not specified below"
            },
            {
                code:"011",
                label:"Decline comment"
            },
            {
                code:"012",
                label:"Make pessimistic comment"
            },
            {
                code:"013",
                label:"Make optimistic comment"
            },
            {
                code:"014",
                label:"Consider policy option"
            },
            {
                code:"015",
                label:"Acknowledge or claim responsibility"
            },
            {
                code:"016",
                label:"Deny responsibility"
            },
            {
                code:"017",
                label:"Engage in symbolic act"
            },
            {
                code:"018",
                label:"Make empathetic comment"
            },
            {
                code:"019",
                label:"Express accord"
            }
        ]
    },
    {
        rootCode:"02",
        label:"APPEAL",
        codes:[
            {
                code:"020",
                label:"Appeal, not specified below"
            },
            {
                rootCode:"021",
                label:"Appeal for material cooperation, not specified below",
                codes:[
                    {
                        code:"0211",
                        label:"Appeal for economic cooperation"
                    },
                    {
                        code:"0212",
                        label:"Appeal for military cooperation"
                    },
                    {
                        code:"0213",
                        label:"Appeal for judicial cooperation"
                    },
                    {
                        code:"0214",
                        label:"Appeal for intelligence"
                    }
                ]
            },
            {
                code:"022",
                label:"Appeal for diplomatic cooperation, such as policy support"
            },
            {
                rootCode:"023",
                label:"Appeal for aid, not specified below",
                codes:[
                    {
                        code:"0231",
                        label:"Appeal for economic aid"
                    },
                    {
                        code:"0232",
                        label:"Appeal for military aid"
                    },
                    {
                        code:"0233",
                        label:"Appeal for humanitarian aid"
                    },
                    {
                        code:"0234",
                        label:"Appeal for military protection or peacekeeping"
                    }
                ]
            },
            {
                rootCode:"024",
                label:"Appeal for political reform, not specified below",
                codes:[
                    {
                        code:"0241",
                        label:"Appeal for change in leadership"
                    },
                    {
                        code:"0242",
                        label:"Appeal for policy change"
                    },
                    {
                        code:"0243",
                        label:"Appeal for rights"
                    },
                    {
                        code:"0244",
                        label:"Appeal for change in institutions, regime"
                    }
                ]
            },
            {
                rootCode:"025",
                label:"Appeal to yield",
                codes:[
                    {
                        code:"0251",
                        label:"Appeal for easing of administrative sanctions"
                    },
                    {
                        code:"0252",
                        label:"Appeal for easing of popular dissentAppeal for policy change"
                    },
                    {
                        code:"0253",
                        label:"Appeal for release of persons or property"
                    },
                    {
                        code:"0254",
                        label:"Appeal for easing of economic sanctions, boycott, or embargo"
                    },
                    {
                        code:"0255",
                        label:"Appeal for target to allow international involvement (non-mediation)"
                    },
                    {
                        code:"0256",
                        label:"Appeal for de-escalation of military engagement"
                    }
                ]
            },
            {
                code:"026",
                label:"Appeal to others to meet or negotiate"
            },
            {
                code:"027",
                label:"Appeal to others to settle dispute"
            },
            {
                code:"028",
                label:"Appeal to others to engage in or accept mediation"
            }
        ]
    },
    {
        rootCode:"03",
        label:"EXPRESS INTENT TO COOPERATE",
        codes:[
            {
                code:"030",
                label:"Express intent to cooperate, not specified below"
            },
            {
                rootCode:"031",
                label:"Express intent to engage in material cooperation,  not specified below",
                codes:[
                    {
                        code:"0311",
                        label:"Express intent to cooperate economically"
                    },
                    {
                        code:"0312",
                        label:"Express intent to cooperate militarily"
                    },
                    {
                        code:"0313",
                        label:"Express intent to cooperate on judicial matters"
                    },
                    {
                        code:"0314",
                        label:"Express intent to cooperate on intelligence"
                    }
                ]
            },
            {
                code:"032",
                label:"Express intent to provide diplomatic cooperation such as policy support"
            },
            {
                rootCode:"033",
                label:"Express intent to provide material aid, not specified below",
                codes:[
                    {
                        code:"0331",
                        label:"Express intent to provide economic aid"
                    },
                    {
                        code:"0332",
                        label:"Express intent to provide military aid"
                    },
                    {
                        code:"0333",
                        label:"Express intent to provide humanitarian aid"
                    },
                    {
                        code:"0334",
                        label:"Express intent to provide military protection or peacekeeping"
                    }
                ]
            },
            {
                rootCode:"034",
                label:"Express intent to institute political reform, not specified below",
                codes:[
                    {
                        code:"0341",
                        label:"Express intent to change leadership"
                    },
                    {
                        code:"0342",
                        label:"Express intent to change policy"
                    },
                    {
                        code:"0343",
                        label:"Express intent to provide rights"
                    },
                    {
                        code:"0344",
                        label:"Express intent to change institutions, regime"
                    }
                ]
            },
            {
                rootCode:"035",
                label:"Express intent to yield, not specified below",
                codes:[
                    {
                        code:"0351",
                        label:"Express intent to ease administrative sanctions"
                    },
                    {
                        code:"0352",
                        label:"Express intent to ease popular dissent"
                    },
                    {
                        code:"0353",
                        label:"Express intent to release persons or property"
                    },
                    {
                        code:"0354",
                        label:"Express intent to ease economic sanctions, boycott, or embargo"
                    },
                    {
                        code:"0355",
                        label:"Express intent to allow international involvement (not mediation)"
                    },
                    {
                        code:"0356",
                        label:"Express intent to de-escalate military engagement "
                    }
                ]
            },
            {
                code:"036",
                label:"Express intent to meet or negotiate"
            },
            {
                code:"037",
                label:"Express intent to settle dispute"
            },
            {
                code:"038",
                label:"Express intent to accept mediation"
            },
            {
                code:"039",
                label:"Express intent to mediate"
            },
        ]
    },
    {
        rootCode:"04",
        label:"CONSULT",
        codes:[
            {
                code:"041",
                label:"Discuss by telephone"
            },
            {
                code:"042",
                label:"Make a visit"
            },
            {
                code:"043",
                label:"Host a visit"
            },
            {
                code:"044",
                label:"Meet at a Meet at a 'third' location"
            },
            {
                code:"045",
                label:"Mediate"
            },
            {
                code:"046",
                label:"Engage in negotiation"
            },
            {
                code:"040",
                label:"Consult, not specified below"
            }
        ]
    },
    {
        rootCode:"05",
        label:"ENGAGE IN DIPLOMATIC COOPERATION",
        codes:[
            {
                code:"050",
                label:"Engage in diplomatic cooperation, not specified below"
            },
            {
                code:"051",
                label:"Praise or endorse"
            },
            {
                code:"052",
                label:"Defend verbally"
            },
            {
                code:"053",
                label:"Rally support on behalf of"
            },
            {
                code:"054",
                label:"Grant diplomatic recognition"
            },
            {
                code:"055",
                label:"Apologize"
            },
            {
                code:"056",
                label:"Forgive"
            },
            {
                code:"057",
                label:"Sign formal agreement"
            }
        ]
    },
    {
        rootCode:"06",
        label:"ENGAGE IN MATERIAL COOPERATION",
        codes:[
            {
                code:"060",
                label:"Engage in material cooperation, not specified below"
            },
            {
                code:"061",
                label:"Cooperate economically"
            },
            {
                code:"062",
                label:"Cooperate militarily"
            },
            {
                code:"063",
                label:"Engage in judicial cooperation"
            },
            {
                code:"064",
                label:"Share intelligence or information"
            },
        ]
    },
    {
        rootCode:"07",
        label:"PROVIDE AID",
        codes:[
            {
                code:"070",
                label:"Provide aid, not specified below"
            },
            {
                code:"071",
                label:"Provide economic aid"
            },
            {
                code:"072",
                label:"Provide military aid"
            },
            {
                code:"073",
                label:"Provide humanitarian aid"
            },
            {
                code:"074",
                label:"Provide military protection or peacekeeping"
            },
            {
                code:"075",
                label:"Grant asylum"
            }
        ]
    },
    {
        rootCode:"08",
        label:"YIELD",
        codes:[
            {
                code:"080",
                label:"Yield, not specified below "
            },
            {
                rootCode:"081",
                label:"Ease administrative sanctions, not specified below",
                codes:[
                    {
                        code:"0811",
                        label:"Ease restrictions on political freedoms"
                    },
                    {
                        code:"0812",
                        label:"Ease ban on political parties or politicians"
                    },
                    {
                        code:"0813",
                        label:"Ease curfew"
                    },
                    {
                        code:"0814",
                        label:"Ease state of emergency or martial law"
                    }
                ]
            },
            {
                code:"082",
                label:"Ease political dissent"
            },
            {
                rootCode:"083",
                label:"Accede to requests or demands for political reform not specified below",
                codes:[
                    {
                        code:"0831",
                        label:"Accede to demands for change in leadership"
                    },
                    {
                        code:"0832",
                        label:"Accede to demands for change in policy"
                    },
                    {
                        code:"0833",
                        label:"Accede to demands for rights"
                    },
                    {
                        code:"0834",
                        label:"Accede to demands for change in institutions, regime"
                    }
                ]
            },
            {
                rootCode:"084",
                label:"Return, release, not specified below",
                codes:[
                    {
                        code:"0841",
                        label:"Return, release person(s)"
                    },
                    {
                        code:"0842",
                        label:"Return, release property"
                    }
                ]
            },
            {
                code:"085",
                label:"Ease economic sanctions, boycott, embargo"
            },
            {
                rootCode:"086",
                label:"Allow international involvement not specified below",
                codes:[
                    {
                        code:"0861",
                        label:"Receive deployment of peacekeepers"
                    },
                    {
                        code:"0862",
                        label:"Receive inspectors"
                    },
                    {
                        code:"0863",
                        label:"Allow delivery of humanitarian aid"
                    }
                ]
            },
            {
                rootCode:"087",
                label:"De-escalate military engagement",
                codes:[
                    {
                        code:"0871",
                        label:"Declare truce, ceasefire"
                    },
                    {
                        code:"0872",
                        label:"Ease military blockade"
                    },
                    {
                        code:"0873",
                        label:"Demobilize armed forces"
                    },
                    {
                        code:"0874",
                        label:"Retreat or surrender militarily"
                    }
                ]
            }
        ]
    },
    {
        rootCode:"09",
        label:"INVESTIGATE",
        codes:[
            {
                code:"090",
                label:"Investigate, not specified below"
            },
            {
                code:"091",
                label:"Investigate crime, corruption"
            },
            {
                code:"092",
                label:"Investigate human rights abuses"
            },
            {
                code:"093",
                label:"Investigate military action"
            },
            {
                code:"094",
                label:"Investigate war crimes"
            }
        ]
    },
    {
        rootCode:"10",
        label:"DEMAND",
        codes:[
            {
                code:"100",
                label:"Demand, not specified below"
            },
            {
                rootCode:"101",
                label:"Demand information, investigation",
                codes:[
                    {
                        code:"1011",
                        label:"Demand economic cooperation"
                    },
                    {
                        code:"1012",
                        label:"Demand military cooperation"
                    },
                    {
                        code:"1013",
                        label:"Demand judicial cooperation"
                    },
                    {
                        code:"1014",
                        label:"Demand intelligence cooperation"
                    }
                ]
            },
            {
                code:"102",
                label:"Demand policy support"
            },
            {
                rootCode:"103",
                label:"Demand aid, protection, or peacekeeping",
                codes:[
                    {
                        code:"1031",
                        label:"Demand economic aid"
                    },
                    {
                        code:"1032",
                        label:"Demand military aid"
                    },
                    {
                        code:"1033",
                        label:"Demand humanitarian aid"
                    },
                    {
                        code:"1034",
                        label:"Demand military protection or peacekeeping"
                    }
                ]
            },
            {
                rootCode:"104",
                label:"Demand political reform, not specified below",
                codes:[
                    {
                        code:"1041",
                        label:"Demand change in leadership"
                    },
                    {
                        code:"1042",
                        label:"Demand policy change"
                    },
                    {
                        code:"1043",
                        label:"Demand rights"
                    },
                    {
                        code:"1044",
                        label:"Demand change in institutions, regime"
                    }
                ]
            },
            {
                rootCode:"105",
                label:"Demand mediation",
                codes:[
                    {
                        code:"1051",
                        label:"Demand easing of administrative sanctions"
                    },
                    {
                        code:"1052",
                        label:"Demand easing of political dissent"
                    },
                    {
                        code:"1053",
                        label:"Demand release of persons or property"
                    },
                    {
                        code:"1054",
                        label:"Demand easing of economic sanctions, boycott, or embargo"
                    },
                    {
                        code:"1055",
                        label:"Demand that target allows international involvement (non-mediation)"
                    },
                    {
                        code:"1056",
                        label:"Demand de-escalation of military engagement"
                    }
                ]
            },
            {
                code:"106",
                label:"Demand meeting, negotiation"
            },
            {
                code:"107",
                label:"Demand ceasefire"
            },
            {
                code:"108",
                label:"Demand meeting, negotiation"
            }
        ]
    },
    {
        rootCode:"11",
        label:"DISAPPROVE",
        codes:[
            {
                code:"110",
                label:"Demand ceasefire"
            },
            {
                code:"111",
                label:"Demand meeting, negotiation"
            },
            {
                rootCode:"112",
                label:"Accuse, not specified below",
                codes:[
                    {
                        code:"1121",
                        label:"Accuse of crime, corruption"
                    },
                    {
                        code:"1122",
                        label:"Accuse of human rights abuses"
                    },
                    {
                        code:"1123",
                        label:"Accuse of aggression"
                    },
                    {
                        code:"1124",
                        label:"Accuse of war crimes"
                    },
                    {
                        code:"1125",
                        label:"Accuse of espionage, treason"
                    }
                ]
            },
            {
                code:"113",
                label:"Rally opposition against"
            },
            {
                code:"114",
                label:"Complain officially"
            },
            {
                code:"115",
                label:"Bring lawsuit against"
            },
            {
                code:"116",
                label:"Find guilty or liable (legally)"
            }
        ]
    },
    {
        rootCode:"12",
        label:"REJECT",
        codes:[
            {
                code:"120",
                label:"Reject, not specified below"
            },
            {
                rootCode:"121",
                label:"Reject material cooperation",
                codes:[
                    {
                        code:"1211",
                        label:"Reject economic cooperation"
                    },
                    {
                        code:"1212",
                        label:"Reject military cooperation"
                    }
                ]
            },
            {
                rootCode:"122",
                label:"Reject request or demand for material aid, not specified below",
                codes:[
                    {
                        code:"1221",
                        label:"Reject request for economic aid"
                    },
                    {
                        code:"1222",
                        label:"Reject request for military aid"
                    },
                    {
                        code:"1223",
                        label:"Reject request for humanitarian aid"
                    },
                    {
                        code:"1224",
                        label:"Reject request for military protection or peacekeeping"
                    }
                ]
            },
            {
                rootCode:"123",
                label:"Reject request or demand for political reform, not specified below",
                codes:[
                    {
                        code:"1231",
                        label:"Reject request for change in leadership"
                    },
                    {
                        code:"1232",
                        label:"Reject request for policy change"
                    },
                    {
                        code:"1233",
                        label:"Reject request for rights"
                    },
                    {
                        code:"1234",
                        label:"Reject request for change in institutions, regime"
                    }
                ]
            },
            {
                rootCode:"124",
                label:"Refuse to yield, not specified below",
                codes:[
                    {
                        code:"1241",
                        label:"Refuse to ease administrative sanctions"
                    },
                    {
                        code:"1242",
                        label:"Refuse to ease popular dissent"
                    },
                    {
                        code:"1243",
                        label:"Refuse to release persons or property"
                    },
                    {
                        code:"1244",
                        label:"Refuse to ease economic sanctions, boycott, or embargo"
                    },
                    {
                        code:"1245",
                        label:"Refuse to allow international involvement (non mediation)"
                    },
                    {
                        code:"1246",
                        label:"Refuse to de-escalate military engagement"
                    }
                ]
            },
            {
                code:"125",
                label:"Reject proposal to meet, discuss, or negotiate"
            },
            {
                code:"126",
                label:"Reject mediation"
            },
            {
                code:"127",
                label:"Reject plan, agreement to settle dispute"
            },
            {
                code:"128",
                label:"Defy norms, law"
            },
            {
                code:"129",
                label:"Veto"
            }
        ]
    },
    {
        rootCode:"13",
        label:"THREATEN",
        codes:[
            {
                code:"130",
                label:"Threaten, not specified below"
            },
            {
                rootCode:"131",
                label:"Threaten non-force, not specified below",
                codes:[
                    {
                        code:"1311",
                        label:"Threaten to reduce or stop aid"
                    },
                    {
                        code:"1312",
                        label:"Threaten to boycott, embargo, or sanction"
                    },
                    {
                        code:"1313",
                        label:"Threaten to reduce or break relations"
                    }
                ]
            },
            {
                rootCode:"132",
                label:"Threaten with administrative sanctions, not specified below",
                codes:[
                    {
                        code:"1321",
                        label:"Threaten to impose restrictions on political freedoms"
                    },
                    {
                        code:"1322",
                        label:"Threaten to ban political parties or politicians"
                    },
                    {
                        code:"1323",
                        label:"Threaten to impose curfew"
                    },
                    {
                        code:"1324",
                        label:"Threaten to impose state of emergency or martial law"
                    }
                ]
            },
            {
                code:"133",
                label:"Threaten political dissent, protest"
            },
            {
                code:"134",
                label:"Threaten to halt negotiations"
            },
            {
                code:"135",
                label:"Threaten to halt mediation"
            },
            {
                code:"136",
                label:"Threaten to halt international involvement (non-mediation)"
            },
            {
                code:"137",
                label:"Threaten with violent repression"
            },
            {
                rootCode:"138",
                label:"Threaten to use military force, not specified below",
                codes:[
                    {
                        code:"1381",
                        label:"Threaten blockade"
                    },
                    {
                        code:"1382",
                        label:"Threaten occupation"
                    },
                    {
                        code:"1383",
                        label:"Threaten unconventional violence"
                    },
                    {
                        code:"1384",
                        label:"Threaten conventional attack"
                    },
                    {
                        code:"1385",
                        label:"Threaten attack with WMD"
                    }
                ]
            },
            {
                code:"139",
                label:"Give ultimatum"
            }
        ]
    },
    {
        rootCode:"14",
        label:"PROTEST",
        codes:[
            {
                code:"140",
                label:"Engage in political dissent, not specified below"
            },
            {
                rootCode:"141",
                label:"Demonstrate or rally",
                codes:[
                    {
                        code:"1411",
                        label:"Demonstrate for leadership change"
                    },
                    {
                        code:"1412",
                        label:"Demonstrate for policy change"
                    },
                    {
                        code:"1413",
                        label:"Demonstrate for rights"
                    },
                    {
                        code:"1414",
                        label:"Demonstrate for change in institutions, regime"
                    }
                ]
            },
            {
                rootCode:"142",
                label:"Conduct hunger strike, not specified below",
                codes:[
                    {
                        code:"1421",
                        label:"Conduct hunger strike for leadership change"
                    },
                    {
                        code:"1422",
                        label:"Conduct hunger strike for policy change"
                    },
                    {
                        code:"1423",
                        label:"Conduct hunger strike for rights"
                    },
                    {
                        code:"1424",
                        label:"Conduct hunger strike for change in institutions, regime"
                    }
                ]
            },
            {
                rootCode:"143",
                label:"Conduct strike or boycott, not specified below",
                codes:[
                    {
                        code:"1431",
                        label:"Conduct strike or boycott for leadership change"
                    },
                    {
                        code:"1432",
                        label:"Conduct strike or boycott for policy change"
                    },
                    {
                        code:"1433",
                        label:"Conduct strike or boycott for rights"
                    },
                    {
                        code:"1434",
                        label:"Conduct strike or boycott for change in institutions, regime"
                    }
                ]
            },
            {
                rootCode:"144",
                label:"Obstruct passage, block",
                codes:[
                    {
                        code:"1441",
                        label:"Obstruct passage to demand leadership change"
                    },
                    {
                        code:"1442",
                        label:"Obstruct passage to demand policy change"
                    },
                    {
                        code:"1443",
                        label:"Obstruct passage to demand rights"
                    },
                    {
                        code:"1444",
                        label:"Obstruct passage to demand change in institutions, regime"
                    }
                ]
            },
            {
                rootCode:"145",
                label:"Protest violently, riot",
                codes:[
                    {
                        code:"1451",
                        label:"Engage in violent protest for leadership change"
                    },
                    {
                        code:"1452",
                        label:"Engage in violent protest for policy change"
                    },
                    {
                        code:"1453",
                        label:"Obstruct passage to demand rights"
                    },
                    {
                        code:"1454",
                        label:"Engage in violent protest for  change in institutions, regime"
                    }
                ]
            }
        ]
    },
    {
        rootCode:"15",
        label:"EXHIBIT FORCE POSTURE",
        codes:[
            {
                code:"150",
                label:"Demonstrate military or police power, not specified below"
            },
            {
                code:"151",
                label:"Increase police alert status"
            },
            {
                code:"152",
                label:"Increase military alert status"
            },
            {
                code:"153",
                label:"Mobilize or increase police power"
            },
            {
                code:"154",
                label:"Mobilize or increase armed forces "
            }
        ]
    },
    {
        rootCode:"16",
        label:"REDUCE RELATIONS",
        codes:[
            {
                code:"160",
                label:"Reduce relations, not specified below"
            },
            {
                code:"161",
                label:"Reduce or break diplomatic relations"
            },
            {
                rootCode:"162",
                label:"Reduce or stop aid, not specified below",
                codes:[
                    {
                        code:"1621",
                        label:"Reduce or stop economic assistance"
                    },
                    {
                        code:"1622",
                        label:"Reduce or stop military assistance"
                    },
                    {
                        code:"1623",
                        label:"Reduce or stop humanitarian assistance"
                    }
                ]
            },
            {
                code:"163",
                label:"Impose embargo, boycott, or sanctions"
            },
            {
                code:"164",
                label:"Halt negotiations"
            },
            {
                code:"165",
                label:"Halt mediation"
            },
            {
                rootCode:"166",
                label:"Expel or withdraw, not specified below",
                codes:[
                    {
                        code:"1661",
                        label:"Expel or withdraw peacekeepers"
                    },
                    {
                        code:"1662",
                        label:"Expel or withdraw inspectors, observers"
                    },
                    {
                        code:"1663",
                        label:"Expel or withdraw aid agencies"
                    }
                ]
            }
        ]
    },
    {
        rootCode:"17",
        label:"COERCE",
        codes:[
            {
                code:"170",
                label:"Coerce, not specified below"
            },
            {
                rootCode:"171",
                label:"Seize or damage property, not specified below",
                codes:[
                    {
                        code:"1711",
                        label:"Confiscate property"
                    },
                    {
                        code:"1712",
                        label:"Destroy property"
                    }
                ]
            },
            {
                rootCode:"172",
                label:"Impose administrative sanctions, not specified below",
                codes:[
                    {
                        code:"1721",
                        label:"Impose restrictions on political freedoms"
                    },
                    {
                        code:"1722",
                        label:"Ban political parties or politicians"
                    },
                    {
                        code:"1723",
                        label:"Impose curfew"
                    },
                    {
                        code:"1724",
                        label:"Impose state of emergency or martial law"
                    }
                ]
            },
            {
                code:"173",
                label:"Arrest, detain, or charge with legal action"
            },
            {
                code:"174",
                label:"Expel or deport individuals"
            },
            {
                code:"175",
                label:"Use tactics of violent repression"
            }
        ]
    },
    {
        rootCode:"18",
        label:"ASSAULT",
        codes:[
            {
                code:"180",
                label:"Use unconventional violence, not specified below"
            },
            {
                code:"181",
                label:"Abduct, hijack, or take hostage"
            },
            {
                rootCode:"182",
                label:"Physically assault, not specified below",
                codes:[
                    {
                        code:"1821",
                        label:"Sexually assault"
                    },
                    {
                        code:"1822",
                        label:"Torture"
                    },
                    {
                        code:"1823",
                        label:"Kill by physical assault"
                    }
                ]
            },
            {
                rootCode:"183",
                label:"Conduct suicide, car, or other non-military bombing, not spec below",
                codes:[
                    {
                        code:"1831",
                        label:"Carry out suicide bombing"
                    },
                    {
                        code:"1832",
                        label:"Carry out car bombing"
                    },
                    {
                        code:"1833",
                        label:"Carry out roadside bombing"
                    }
                ]
            },
            {
                code:"184",
                label:"Use as human shield"
            },
            {
                code:"185",
                label:"Attempt to assassinate"
            },
            {
                code:"186",
                label:"Assassinate"
            }
        ]
    },
    {
        rootCode:"19",
        label:"FIGHT",
        codes:[
            {
                code:"190",
                label:"Use conventional military force, not specified below"
            },
            {
                code:"191",
                label:"Impose blockade, restrict movement"
            },
            {
                code:"192",
                label:"Occupy territory"
            },
            {
                code:"193",
                label:"Fight with small arms and light weapons"
            },
            {
                code:"194",
                label:"Fight with artillery and tanks"
            },
            {
                code:"195",
                label:"Employ aerial weapons"
            },
            {
                code:"196",
                label:"Violate ceasefire"
            }
        ]
    },
    {
        rootCode:"20",
        label:"USE UNCONVENTIONAL MASS VIOLENCE",
        codes:[
            {
                code:"200",
                label:"Use unconventional mass violence, not specified below"
            },
            {
                code:"201",
                label:"Engage in mass expulsion"
            },
            {
                code:"202",
                label:"Engage in mass killings"
            },
            {
                code:"203",
                label:"Engage in ethnic cleansing"
            },
            {
                rootCode:"204",
                label:"Use weapons of mass destruction, not specified below",
                codes:[
                    {
                        code:"2041",
                        label:"Use chemical, biological, or radiologicalweapons"
                    },
                    {
                        code:"2042",
                        label:"Detonate nuclear weapons"
                    }
                ]
            }
        ]
    }
]
const cameoEventCodes:cameoEvent[] = [
    {
        rootCode:"01",
        label:"MAKE PUBLIC STATEMENT",
        codes:[
            {
                code:"010",
                label:"Make statement, not specified below",
                decor:"made a statement"
            },
            {
                code:"011",
                label:"Decline comment",
                decor:"declined to comment"
            },
            {
                code:"012",
                label:"Make pessimistic comment",
                decor:"made a pessimistic comment"
            },
            {
                code:"013",
                label:"Make optimistic comment",
                decor:"Made an optimistic comment"
            },
            {
                code:"014",
                label:"Consider policy option",
                decor:"Considered a policy option"
            },
            {
                code:"015",
                label:"Acknowledge or claim responsibility",
                decor:"Acknowledged or claimed responsibility"
            },
            {
                code:"016",
                label:"Deny responsibility",
                decor:"denied responsibility"
            },
            {
                code:"017",
                label:"Engage in symbolic act",
                decor:"engaged in symbolic act"
            },
            {
                code:"018",
                label:"Make empathetic comment",
                decor:"made an empathetic comment"
            },
            {
                code:"019",
                label:"Express accord",
                decor:"expressed accord"
            }
        ]
    },
    {
        rootCode:"02",
        label:"APPEAL",
        codes:[
            {
                code:"020",
                label:"Appeal, not specified below",
                decor:"appealed"
            },
            {
                code:"021",
                label:"Appeal for material cooperation, not specified below",
                decor:"appealed for material cooperation",
                codes:[
                    {
                        code:"0211",
                        label:"Appeal for economic cooperation",
                        decor:"appealed for economic cooperation"
                    },
                    {
                        code:"0212",
                        label:"Appeal for military cooperation",
                        decor:"appealed for military cooperation"
                    },
                    {
                        code:"0213",
                        label:"Appeal for judicial cooperation",
                        decor:"appealed for judicial cooperation"
                    },
                    {
                        code:"0214",
                        label:"Appeal for intelligence",
                        decor:"appealed for intelligence"
                    }
                ]
            },
            {
                code:"022",
                label:"Appeal for diplomatic cooperation, such as policy support",
                decor:"appealed for diplomatic cooperation, such as policy support"
            },
            {
                code:"023",
                label:"Appeal for aid, not specified below",
                decor:"appealed for aid",
                codes:[
                    {
                        code:"0231",
                        label:"Appeal for economic aid",
                        decor:"appealed for economic aid"
                    },
                    {
                        code:"0232",
                        label:"Appeal for military aid",
                        decor:"appealed for military aid"
                    },
                    {
                        code:"0233",
                        label:"Appeal for humanitarian aid",
                        decor:"appealed for humanitarian aid"
                    },
                    {
                        code:"0234",
                        label:"Appeal for military protection or peacekeeping",
                        decor:"appealed for military protection or peacekeeping"
                    }
                ]
            },
            {
                code:"024",
                label:"Appeal for political reform, not specified below",
                decor:"appealed for political reform",
                codes:[
                    {
                        code:"0241",
                        label:"Appeal for change in leadership",
                        decor:"appealed for change in leadership"
                    },
                    {
                        code:"0242",
                        label:"Appeal for policy change",
                        decor:"appealed for policy change"
                    },
                    {
                        code:"0243",
                        label:"Appeal for rights",
                        decor:"appealed for rights"
                    },
                    {
                        code:"0244",
                        label:"Appeal for change in institutions, regime",
                        decor:"appealed for change in institutions, regime"
                    }
                ]
            },
            {
                code:"025",
                label:"Appeal to yield, not specified below",
                decor:"appealed to yield",
                codes:[
                    {
                        code:"0251",
                        label:"Appeal for easing of administrative sanction",
                        decor:"appealed for easing of administrative sanction"
                    },
                    {
                        code:"0252",
                        label:"Appeal for easing of popular dissent",
                        decor:"appealed for easing of popular dissent"
                    },
                    {
                        code:"0253",
                        label:"Appeal for release of persons or property",
                        decor:"appealed for release of persons or property"
                    },
                    {
                        code:"0254",
                        label:"Appeal for easing of economic sanctions, boycott, or embargo",
                        decor:"appealed for easing of economic sanctions, boycott, or embargo"
                    },
                    {
                        code:"0255",
                        label:"Appeal for target to allow international involvement (non-mediation)",
                        decor:"appealed for target to allow international involvement (non-mediation)"
                    },
                    {
                        code:"0256",
                        label:"Appeal for de-escalation of military engagement",
                        decor:"appealed for de-escalation of military engagement"
                    }
                ]
            },
            {
                code:"026",
                label:"Appeal to others to meet or negotiate",
                decor:"appealed to others to meet or negotiate"
            },
            {
                code:"027",
                label:"Appeal to others to settle dispute",
                decor:"appealed to others to settle dispute"
            },
            {
                code:"028",
                label:"Appeal to others to engage in or accept mediation",
                decor:"appealed to others to engage in or accept mediation"
            }
        ]
    },
    {
        rootCode:"03",
        label:"EXPRESS INTENT TO COOPERATE",
        codes:[
            {
                code:"030",
                label:"Express intent to cooperate, not specified below",
                decor:"expressed intent to cooperate",
                follow:"with"
            },
            {
                code:"031",
                label:"Express intent to engage in material cooperation,  not specified below",
                decor:"expressed intent to engage in material cooperation",
                follow:"with",
                codes:[
                    {
                        code:"0311",
                        label:"Express intent to cooperate economically",
                        decor:"expressed intent to cooperate economically",
                        follow:"with"
                    },
                    {
                        code:"0312",
                        label:"Express intent to cooperate militarily",
                        decor:"expressed intent to cooperate militarily",
                        follow:"with"
                    },
                    {
                        code:"0313",
                        label:"Express intent to cooperate on judicial matters",
                        decor:"expressed intent to cooperate on judicial matters",
                        follow:"with"
                    },
                    {
                        code:"0314",
                        label:"Express intent to cooperate on intelligence",
                        decor:"expressed intent to cooperate on intelligence",
                        follow:"with"
                    }
                ]
            },
            {
                code:"032",
                label:"Express intent to provide diplomatic cooperation such as policy support",
                decor:"expressed intent to provide diplomatic cooperation such as policy support"
            },
            {
                code:"033",
                label:"Express intent to provide material aid, not specified below",
                decor:"expressed intent to provide material aid",
                codes:[
                    {
                        code:"0331",
                        label:"Express intent to provide economic aid",
                        decor:"expressed intent to provide economic aid"
                    },
                    {
                        code:"0332",
                        label:"Express intent to provide military aid",
                        decor:"expressed intent to provide military aid"
                    },
                    {
                        code:"0333",
                        label:"Express intent to provide humanitarian aid",
                        decor:"expressed intent to provide humanitarian aid"
                    },
                    {
                        code:"0334",
                        label:"Express intent to provide military protection or peacekeeping",
                        decor:"expressed intent to provide military protection or peacekeeping"
                    }
                ]
            },
            {
                code:"034",
                label:"Express intent to institute political reform, not specified below",
                decor:"expressed intent to institute political reform",
                follow:"in",
                codes:[
                    {
                        code:"0341",
                        label:"Express intent to change leadership",
                        decor:"expressed intent to change leadership",
                        follow:"in"
                    },
                    {
                        code:"0342",
                        label:"Express intent to change policy",
                        decor:"expressed intent to change policy",
                        follow:"in"
                    },
                    {
                        code:"0343",
                        label:"Express intent to provide rights",
                        decor:"expressed intent to provide rights"
                    },
                    {
                        code:"0344",
                        label:"Express intent to change institutions, regime",
                        decor:"expressed intent to change institutions, regime",
                        follow:"in"
                    }
                ]
            },
            {
                code:"035",
                label:"Express intent to yield, not specified below",
                decor:"expressed intent to yield",
                codes:[
                    {
                        code:"0351",
                        label:"Express intent to ease administrative sanctions",
                        decor:"expressed intent to ease administrative sanctions"
                    },
                    {
                        code:"0352",
                        label:"Express intent to ease popular dissent",
                        decor:"expressed intent to ease popular dissent"
                    },
                    {
                        code:"0353",
                        label:"Express intent to release persons or property",
                        decor:"expressed intent to release persons or property",
                        follow:"of/from"
                    },
                    {
                        code:"0354",
                        label:"Express intent to ease economic sanctions, boycott, or embargo",
                        decor:"expressed intent to ease economic sanctions, boycott, or embargo"
                    },
                    {
                        code:"0355",
                        label:"Express intent to allow international involvement (not mediation)",
                        decor:"expressed intent to allow international involvement (not mediation)"
                    },
                    {
                        code:"0356",
                        label:"Express intent to de-escalate military engagement",
                        decor:"expressed intent to de-escalate military engagement",
                        follow:"of"
                    }
                ]
            },
            {
                code:"036",
                label:"Express intent to meet or negotiate",
                decor:"expressed intent to meet or negotiate",
                follow:"with"
            },
            {
                code:"037",
                label:"Express intent to settle dispute",
                decor:"expressed intent to settle dispute",
                follow:"with"
            },
            {
                code:"038",
                label:"Express intent to accept mediation",
                decor:"expressed intent to accept mediation",
                follow:"with"
            },
            {
                code:"039",
                label:"Express intent to mediate",
                decor:"expressed intent to mediate",
                follow:"with"
            },
        ]
    },
    {
        rootCode:"04",
        label:"CONSULT",
        codes:[
            {
                code:"041",
                label:"Discuss by telephone",
                decor:"discussed by telephone",
                follow:"with"
            },
            {
                code:"042",
                label:"Make a visit",
                decor:"made a visit"
            },
            {
                code:"043",
                label:"Host a visit",
                decor:"hosted a visit",
                follow:"for"
            },
            {
                code:"044",
                label:"Meet at a Meet at a 'third' location",
                decor:"met at a Meet at a 'third' location",
                follow:"with"
            },
            {
                code:"045",
                label:"Mediate",
                decor:"mediated",
                follow:"with"
            },
            {
                code:"046",
                label:"Engage in negotiation",
                decor:"engaged in negotiation",
                follow:"with"
            },
            {
                code:"040",
                label:"Consult, not specified below",
                decor:"consulted",
                follow:"none"
            }
        ]
    },
    {
        rootCode:"05",
        label:"ENGAGE IN DIPLOMATIC COOPERATION",
        codes:[
            {
                code:"050",
                label:"Engage in diplomatic cooperation, not specified below",
                decor:"engaged in diplomatic cooperation",
                follow:"with"
            },
            {
                code:"051",
                label:"Praise or endorse",
                decor:"praised or endorsed",
                follow:"none"
            },
            {
                code:"052",
                label:"Defend verbally",
                decor:"defended verbally",
                follow:"none"
            },
            {
                code:"053",
                label:"Rally support on behalf of",
                decor:"rallied support",
                follow:"on behalf of"
            },
            {
                code:"054",
                label:"Grant diplomatic recognition",
                decor:"granted diplomatic recognition"
            },
            {
                code:"055",
                label:"Apologize",  
                decor:"apologized",
            },
            {
                code:"056",
                label:"Forgive",
                decor:"forgived"
            },
            {
                code:"057",
                label:"Sign formal agreement",
                decor:"signed formal agreement",
                follow:"with"
            }
        ]
    },
    {
        rootCode:"06",
        label:"ENGAGE IN MATERIAL COOPERATION",
        codes:[
            {
                code:"060",
                label:"Engage in material cooperation, not specified below",
                decor:"engaged in material cooperation",
                follow:"to help"
            },
            {
                code:"061",
                label:"Cooperate economically",
                decor:"cooperated economically",
                follow:"with"
            },
            {
                code:"062",
                label:"Cooperate militarily",
                decor:"cooperated militarily",
                follow:"with"
            },
            {
                code:"063",
                label:"Engage in judicial cooperation",
                decor:"engaged in judicial cooperation",
                follow:"to help/with"
            },
            {
                code:"064",
                label:"Share intelligence or information",
                decor:"shared intelligence or information",
                follow:"with"
            },
        ]
    },
    {
        rootCode:"07",
        label:"PROVIDE AID",
        codes:[
            {
                code:"070",
                label:"Provide aid, not specified below",
                decor:"provided aid"
            },
            {
                code:"071",
                label:"Provide economic aid",
                decor:"provided economic aid"
            },
            {
                code:"072",
                label:"Provide military aid",
                decor:"provided military aid"
            },
            {
                code:"073",
                label:"Provide humanitarian aid",
                decor:"provided humanitarian aid"
            },
            {
                code:"074",
                label:"Provide military protection or peacekeeping",
                decor:"provided military protection or peacekeeping"
            },
            {
                code:"075",
                label:"Grant asylum",
                decor:"granted asylum"
            }
        ]
    },
    {
        rootCode:"08",
        label:"YIELD",
        codes:[
            {
                code:"080",
                label:"Yield, not specified below",
                decor:"yielded"
            },
            {
                code:"081",
                label:"Ease administrative sanctions, not specified below",
                decor:"eased administrative sanctions",
                codes:[
                    {
                        code:"0811",
                        label:"Ease restrictions on political freedoms",
                        decor:"eased restrictions on political freedoms"
                    },
                    {
                        code:"0812",
                        label:"Ease ban on political parties or politicians",
                        decor:"eased ban on political parties or politicians"
                    },
                    {
                        code:"0813",
                        label:"Ease curfew",
                        decor:"eased curfew"
                    },
                    {
                        code:"0814",
                        label:"Ease state of emergency or martial law",
                        decor:"eased state of emergency or martial law"
                    }
                ]
            },
            {
                code:"082",
                label:"Ease political dissent",
                decor:"eased political dissent"
            },
            {
                code:"083",
                label:"Accede to requests or demands for political reform not specified below",
                decor:"acceded to requests or demands for political reform",
                follow:"from",
                codes:[
                    {
                        code:"0831",
                        label:"Accede to demands for change in leadership",
                        decor:"acceded to demands for change in leadership",
                        follow:"from"
                    },
                    {
                        code:"0832",
                        label:"Accede to demands for change in policy",
                        decor:"acceded to demands for change in policy",
                        follow:"from"
                    },
                    {
                        code:"0833",
                        label:"Accede to demands for rights",
                        decor:"acceded to demands for rights",
                        follow:"from"
                    },
                    {
                        code:"0834",
                        label:"Accede to demands for change in institutions, regime",
                        decor:"acceded to demands for change in institutions, regime",
                        follow:"from"
                    }
                ]
            },
            {
                code:"084",
                label:"Return, release, not specified below",
                decor:"returned, released",
                codes:[
                    {
                        code:"0841",
                        label:"Return, release person(s)",
                        decor:"returned, released person(s)"
                    },
                    {
                        code:"0842",
                        label:"Return, release property",
                        decor:"returned, released property"
                    }
                ]
            },
            {
                code:"085",
                label:"Ease economic sanctions, boycott, embargo",
                decor:"eased economic sanctions, boycott, embargo"
            },
            {
                code:"086",
                label:"Allow international involvement not specified below",
                decor:"allowed international involvement",
                follow:"from",
                codes:[
                    {
                        code:"0861",
                        label:"Receive deployment of peacekeepers",
                        decor:"received deployment of peacekeepers",
                        follow:"from"
                    },
                    {
                        code:"0862",
                        label:"Receive inspectors",
                        decor:"received inspectors",
                        follow:"from"
                    },
                    {
                        code:"0863",
                        label:"Allow delivery of humanitarian aid",
                        decor:"allowed delivery of humanitarian aid",
                        follow:"from"
                    }
                ]
            },
            {
                code:"087",
                label:"De-escalate military engagement",
                decor:"de-escalated military engagement",
                codes:[
                    {
                        code:"0871",
                        label:"Declare truce, ceasefire",
                        decor:"declared truce, ceasefire"
                    },
                    {
                        code:"0872",
                        label:"Ease military blockade",
                        decor:"eased military blockade"
                    },
                    {
                        code:"0873",
                        label:"Demobilize armed forces",
                        decor:"demobilized armed forces"
                    },
                    {
                        code:"0874",
                        label:"Retreat or surrender militarily",
                        decor:"retreated or surrendered militarily"
                    }
                ]
            }
        ]
    },
    {
        rootCode:"09",
        label:"INVESTIGATE",
        codes:[
            {
                code:"090",
                label:"Investigate, not specified below",
                decor:"investigated"
            },
            {
                code:"091",
                label:"Investigate crime, corruption",
                decor:"investigated crime, corruption"
            },
            {
                code:"092",
                label:"Investigate human rights abuses",
                decor:"investigated human rights abuses"
            },
            {
                code:"093",
                label:"Investigate military action",
                decor:"investigated military action"
            },
            {
                code:"094",
                label:"Investigate war crimes",
                decor:"investigated war crimes"
            }
        ]
    },
    {
        rootCode:"10",
        label:"DEMAND",
        codes:[
            {
                code:"100",
                label:"Demand, not specified below",
                decor:"demanded"
            },
            {
                code:"101",
                label:"Demand information, investigation",
                decor:"demanded",
                codes:[
                    {
                        code:"1011",
                        label:"Demand economic cooperation",
                        decor:"demanded economic cooperation"
                    },
                    {
                        code:"1012",
                        label:"Demand military cooperation",
                        decor:"demanded military cooperation"
                    },
                    {
                        code:"1013",
                        label:"Demand judicial cooperation",
                        decor:"demanded judicial cooperation"
                    },
                    {
                        code:"1014",
                        label:"Demand intelligence cooperation",
                        decor:"demanded intelligence cooperation"
                    }
                ]
            },
            {
                code:"102",
                label:"Demand policy support",
                decor:"demanded policy support"
            },
            {
                code:"103",
                label:"Demand aid, protection, or peacekeeping",
                decor:"demanded aid, protection, or peacekeeping",
                codes:[
                    {
                        code:"1031",
                        label:"Demand economic aid",
                        decor:"demanded economic aid"
                    },
                    {
                        code:"1032",
                        label:"Demand military aid",
                        decor:"demanded military aid"
                    },
                    {
                        code:"1033",
                        label:"Demand humanitarian aid",
                        decor:"demanded humanitarian aid"
                    },
                    {
                        code:"1034",
                        label:"Demand military protection or peacekeeping",
                        decor:"demanded military protection or peacekeeping"
                    }
                ]
            },
            {
                code:"104",
                label:"Demand political reform, not specified below",
                decor:"demanded political reform",
                codes:[
                    {
                        code:"1041",
                        label:"Demand change in leadership",
                        decor:"demanded change in leadership"
                    },
                    {
                        code:"1042",
                        label:"Demand policy change",
                        decor:"demanded policy change"
                    },
                    {
                        code:"1043",
                        label:"Demand rights",
                        decor:"demanded rights"
                    },
                    {
                        code:"1044",
                        label:"Demand change in institutions, regime",
                        decor:"demanded change in institutions, regime"
                    }
                ]
            },
            {
                code:"105",
                label:"Demand mediation",
                decor:"demanded mediation",
                codes:[
                    {
                        code:"1051",
                        label:"Demand easing of administrative sanctions",
                        decor:"demanded easing of administrative sanctions"
                    },
                    {
                        code:"1052",
                        label:"Demand easing of political dissent",
                        decor:"demanded easing of political dissent"
                    },
                    {
                        code:"1053",
                        label:"Demand release of persons or property",
                        decor:"demanded release of persons or property"
                    },
                    {
                        code:"1054",
                        label:"Demand easing of economic sanctions, boycott, or embargo",
                        decor:"demanded easing of economic sanctions, boycott, or embargo"
                    },
                    {
                        code:"1055",
                        label:"Demand that target allows international involvement (non-mediation)",
                        decor:"demanded that target allows international involvement (non-mediation)"
                    },
                    {
                        code:"1056",
                        label:"Demand de-escalation of military engagement",
                        decor:"demanded de-escalation of military engagement"
                    }
                ]
            },
            {
                code:"106",
                label:"Demand meeting, negotiation",
                decor:"demanded meeting, negotiation"
            },
            {
                code:"107",
                label:"Demand ceasefire",
                decor:"demanded ceasefire"
            },
            {
                code:"108",
                label:"Demand meeting, negotiation",
                decor:"demanded meeting, negotiation"
            }
        ]
    },
    {
        rootCode:"11",
        label:"DISAPPROVE",
        codes:[
            {
                code:"110",
                label:"Demand ceasefire",
                decor:"demanded ceasefire"
            },
            {
                code:"111",
                label:"Demand meeting, negotiation",
                decor:"demanded meeting, negotiation"
            },
            {
                code:"112",
                label:"Accuse, not specified below",
                decor:"accused",
                codes:[
                    {
                        code:"1121",
                        label:"Accuse of crime, corruption",
                        decor:"accused of crime, corruption"
                    },
                    {
                        code:"1122",
                        label:"Accuse of human rights abuses",
                        decor:"accused of human rights abuses"
                    },
                    {
                        code:"1123",
                        label:"Accuse of aggression",
                        decor:"accused of aggression"
                    },
                    {
                        code:"1124",
                        label:"Accuse of war crimes",
                        decor:"accused of war crimes"
                    },
                    {
                        code:"1125",
                        label:"Accuse of espionage, treason",
                        decor:"accused of espionage, treason"
                    }
                ]
            },
            {
                code:"113",
                label:"Rally opposition against",
                decor:"rallied opposition against"
            },
            {
                code:"114",
                label:"Complain officially",
                decor:"complained officially"
            },
            {
                code:"115",
                label:"Bring lawsuit against",
                decor:"brought lawsuit against"
            },
            {
                code:"116",
                label:"Find guilty or liable (legally)",
                decor:"found guilty or liable (legally)"
            }
        ]
    },
    {
        rootCode:"12",
        label:"REJECT",
        codes:[
            {
                code:"120",
                label:"Reject, not specified below",
                decor:"rejected"
            },
            {
                code:"121",
                label:"Reject material cooperation",
                decor:"rejected material cooperation",
                codes:[
                    {
                        code:"1211",
                        label:"Reject economic cooperation",
                        decor:"rejected economic cooperation"
                    },
                    {
                        code:"1212",
                        label:"Reject military cooperation",
                        decor:"rejected military cooperation"
                    }
                ]
            },
            {
                code:"122",
                label:"Reject request or demand for material aid, not specified below",
                decor:"rejected request or demand for material aid",
                codes:[
                    {
                        code:"1221",
                        label:"Reject request for economic aid",
                        decor:"rejected request for economic aid"
                    },
                    {
                        code:"1222",
                        label:"Reject request for military aid",
                        decor:"rejected request for military aid"
                    },
                    {
                        code:"1223",
                        label:"Reject request for humanitarian aid",
                        decor:"rejected request for humanitarian aid"
                    },
                    {
                        code:"1224",
                        label:"Reject request for military protection or peacekeeping",
                        decor:"rejected request for military protection or peacekeeping"
                    }
                ]
            },
            {
                code:"123",
                label:"Reject request or demand for political reform, not specified below",
                decor:"rejected request or demand for political reform",
                codes:[
                    {
                        code:"1231",
                        label:"Reject request for change in leadership",
                        decor:"rejected request for change in leadership"
                    },
                    {
                        code:"1232",
                        label:"Reject request for policy change",
                        decor:"rejected request for policy change"
                    },
                    {
                        code:"1233",
                        label:"Reject request for rights",
                        decor:"rejected request for rights"
                    },
                    {
                        code:"1234",
                        label:"Reject request for change in institutions, regime",
                        decor:"rejected request for change in institutions, regime"
                    }
                ]
            },
            {
                code:"124",
                label:"Refuse to yield, not specified below",
                decor:"refused to yield",
                codes:[
                    {
                        code:"1241",
                        label:"Refuse to ease administrative sanctions",
                        decor:"refused to ease administrative sanctions"
                    },
                    {
                        code:"1242",
                        label:"Refuse to ease popular dissent",
                        decor:"refused to ease popular dissent"
                    },
                    {
                        code:"1243",
                        label:"Refuse to release persons or property",
                        decor:"refused to release persons or property"
                    },
                    {
                        code:"1244",
                        label:"Refuse to ease economic sanctions, boycott, or embargo",
                        decor:"refused to ease economic sanctions, boycott, or embargo"
                    },
                    {
                        code:"1245",
                        label:"Refuse to allow international involvement (non mediation)",
                        decor:"refused to allow international involvement (non mediation)"
                    },
                    {
                        code:"1246",
                        label:"Refuse to de-escalate military engagement",
                        decor:"refused to de-escalate military engagement"
                    }
                ]
            },
            {
                code:"125",
                label:"Reject proposal to meet, discuss, or negotiate",
                decor:"rejected proposal to meet, discuss, or negotiate"
            },
            {
                code:"126",
                label:"Reject mediation",
                decor:"rejected mediation"
            },
            {
                code:"127",
                label:"Reject plan, agreement to settle dispute",
                decor:"rejected plan, agreement to settle dispute"
            },
            {
                code:"128",
                label:"Defy norms, law",
                decor:"Defied norms, law"
            },
            {
                code:"129",
                label:"Veto",
                decor:"vetoed"
            }
        ]
    },
    {
        rootCode:"13",
        label:"THREATEN",
        codes:[
            {
                code:"130",
                label:"Threaten, not specified below",
                decor:"threatened "
            },
            {
                code:"131",
                label:"Threaten non-force, not specified below",
                decor:"threatened non-force",
                codes:[
                    {
                        code:"1311",
                        label:"Threaten to reduce or stop aid",
                        decor:"threatened to reduce or stop aid"
                    },
                    {
                        code:"1312",
                        label:"Threaten to boycott, embargo, or sanction",
                        decor:"threatened to boycott, embargo, or sanction"
                    },
                    {
                        code:"1313",
                        label:"Threaten to reduce or break relations",
                        decor:"threatened to reduce or break relations"
                    }
                ]
            },
            {
                code:"132",
                label:"Threaten with administrative sanctions, not specified below",
                decor:"threatened with administrative sanctions",
                codes:[
                    {
                        code:"1321",
                        label:"Threaten to impose restrictions on political freedoms",
                        decor:"threatened to impose restrictions on political freedoms"
                    },
                    {
                        code:"1322",
                        label:"Threaten to ban political parties or politicians",
                        decor:"threatened to ban political parties or politicians"
                    },
                    {
                        code:"1323",
                        label:"Threaten to impose curfew",
                        decor:"threatened to impose curfew"
                    },
                    {
                        code:"1324",
                        label:"Threaten to impose state of emergency or martial law",
                        decor:"threatened to impose state of emergency or martial law"
                    }
                ]
            },
            {
                code:"133",
                label:"Threaten political dissent, protest",
                decor:"threatened political dissent, protest"
            },
            {
                code:"134",
                label:"Threaten to halt negotiations",
                decor:"threatened to halt negotiations"
            },
            {
                code:"135",
                label:"Threaten to halt mediation",
                decor:"threatened to halt mediation"
            },
            {
                code:"136",
                label:"Threaten to halt international involvement (non-mediation)",
                decor:"threatened to halt international involvement (non-mediation)"
            },
            {
                code:"137",
                label:"Threaten with violent repression",
                decor:"threatened with violent repression"
            },
            {
                code:"138",
                label:"Threaten to use military force, not specified below",
                decor:"threatened to use military force",
                codes:[
                    {
                        code:"1381",
                        label:"Threaten blockade",
                        decor:"threatened blockade"
                    },
                    {
                        code:"1382",
                        label:"Threaten occupation",
                        decor:"threatened occupation"
                    },
                    {
                        code:"1383",
                        label:"Threaten unconventional violence",
                        decor:"threatened unconventional violence"
                    },
                    {
                        code:"1384",
                        label:"Threaten conventional attack",
                        decor:"threatened conventional attack"
                    },
                    {
                        code:"1385",
                        label:"Threaten attack with WMD",
                        decor:"threatened attack with WMD"
                    }
                ]
            },
            {
                code:"139",
                label:"Give ultimatum",
                decor:"gave ultimatum"
            }
        ]
    },
    {
        rootCode:"14",
        label:"PROTEST",
        codes:[
            {
                code:"140",
                label:"Engage in political dissent, not specified below",
                decor:"engaged in political dissent"
            },
            {
                code:"141",
                label:"Demonstrate or rally",
                decor:"demonstrated or rallied",
                codes:[
                    {
                        code:"1411",
                        label:"Demonstrate for leadership change",
                        decor:"demonstrated for leadership change"
                    },
                    {
                        code:"1412",
                        label:"Demonstrate for policy change",
                        decor:"demonstrated for policy change"
                    },
                    {
                        code:"1413",
                        label:"Demonstrate for rights",
                        decor:"demonstrated for rights"
                    },
                    {
                        code:"1414",
                        label:"Demonstrate for change in institutions, regime",
                        decor:"demonstrated for change in institutions, regime"
                    }
                ]
            },
            {
                code:"142",
                label:"Conduct hunger strike, not specified below",
                decor:"conducted hunger strike",
                codes:[
                    {
                        code:"1421",
                        label:"Conduct hunger strike for leadership change",
                        decor:"conducted hunger strike for leadership change"
                    },
                    {
                        code:"1422",
                        label:"Conduct hunger strike for policy change",
                        decor:"conducted hunger strike for policy change"
                    },
                    {
                        code:"1423",
                        label:"Conduct hunger strike for rights",
                        decor:"conducted hunger strike for rights"
                    },
                    {
                        code:"1424",
                        label:"Conduct hunger strike for change in institutions, regime",
                        decor:"conducted hunger strike for change in institutions, regime"
                    }
                ]
            },
            {
                code:"143",
                label:"Conduct strike or boycott, not specified below",
                decor:"conducted strike or boycott",
                codes:[
                    {
                        code:"1431",
                        label:"Conduct strike or boycott for leadership change",
                        decor:"conducted strike or boycott for leadership change"
                    },
                    {
                        code:"1432",
                        label:"Conduct strike or boycott for policy change",
                        decor:"conducted strike or boycott for policy change"
                    },
                    {
                        code:"1433",
                        label:"Conduct strike or boycott for rights",
                        decor:"conducted strike or boycott for rights"
                    },
                    {
                        code:"1434",
                        label:"Conduct strike or boycott for change in institutions, regime",
                        decor:"conducted strike or boycott for change in institutions, regime"
                    }
                ]
            },
            {
                code:"144",
                label:"Obstruct passage, block",
                decor:"obstructed passage, block",
                codes:[
                    {
                        code:"1441",
                        label:"Obstruct passage to demand leadership change",
                        decor:"obstructed passage to demand leadership change"
                    },
                    {
                        code:"1442",
                        label:"Obstruct passage to demand policy change",
                        decor:"obstructed passage to demand policy change"
                    },
                    {
                        code:"1443",
                        label:"Obstruct passage to demand rights",
                        decor:"obstructed passage to demand rights"
                    },
                    {
                        code:"1444",
                        label:"Obstruct passage to demand change in institutions, regime",
                        decor:"obstructed passage to demand change in institutions, regime"
                    }
                ]
            },
            {
                code:"145",
                label:"Protest violently, riot",
                decor:"protested violently, riot",
                codes:[
                    {
                        code:"1451",
                        label:"Engage in violent protest for leadership change",
                        decor:"engaged in violent protest for leadership change"
                    },
                    {
                        code:"1452",
                        label:"Engage in violent protest for policy change",
                        decor:"engaged in violent protest for policy change"
                    },
                    {
                        code:"1453",
                        label:"Obstruct passage to demand rights",
                        decor:"obstructed passage to demand rights"
                    },
                    {
                        code:"1454",
                        label:"Engage in violent protest for change in institutions, regime",
                        decor:"engaged in violent protest for change in institutions, regime"
                    }
                ]
            }
        ]
    },
    {
        rootCode:"15",
        label:"EXHIBIT FORCE POSTURE",
        codes:[
            {
                code:"150",
                label:"Demonstrate military or police power, not specified below",
                decor:"demonstrated military or police power"
            },
            {
                code:"151",
                label:"Increase police alert status",
                decor:"increased police alert status"
            },
            {
                code:"152",
                label:"Increase military alert status",
                decor:"increased military alert status"
            },
            {
                code:"153",
                label:"Mobilize or increase police power",
                decor:"mobilized or increased police power"
            },
            {
                code:"154",
                label:"Mobilize or increase armed forces ",
                decor:"mobilized or increased armed forces "
            }
        ]
    },
    {
        rootCode:"16",
        label:"REDUCE RELATIONS",
        codes:[
            {
                code:"160",
                label:"Reduce relations, not specified below",
                decor:"reduced relations"
            },
            {
                code:"161",
                label:"Reduce or break diplomatic relations",
                decor:"reduced or broke diplomatic relations"
            },
            {
                code:"162",
                label:"Reduce or stop aid, not specified below",
                decor:"reduced or stopped aid",
                codes:[
                    {
                        code:"1621",
                        label:"Reduce or stop economic assistance",
                        decor:"reduced or stopped economic assistance"
                    },
                    {
                        code:"1622",
                        label:"Reduce or stop military assistance",
                        decor:"reduced or stopped military assistance"
                    },
                    {
                        code:"1623",
                        label:"Reduce or stop humanitarian assistance",
                        decor:"reduced or stopped humanitarian assistance"
                    }
                ]
            },
            {
                code:"163",
                label:"Impose embargo, boycott, or sanctions",
                decor:"imposed embargo, boycott, or sanctions"
            },
            {
                code:"164",
                label:"Halt negotiations",
                decor:"halted negotiations"
            },
            {
                code:"165",
                label:"Halt mediation",
                decor:"halted mediation"
            },
            {
                code:"166",
                label:"Expel or withdraw, not specified below",
                decor:"expelled or withdrawn",
                codes:[
                    {
                        code:"1661",
                        label:"Expel or withdraw peacekeepers",
                        decor:"expelled or withdrawn peacekeepers"
                    },
                    {
                        code:"1662",
                        label:"Expel or withdraw inspectors, observers",
                        decor:"expelled or withdrawn inspectors, observers"
                    },
                    {
                        code:"1663",
                        label:"Expel or withdraw aid agencies",
                        decor:"expelled or withdrawn aid agencies"
                    }
                ]
            }
        ]
    },
    {
        rootCode:"17",
        label:"COERCE",
        codes:[
            {
                code:"170",
                label:"Coerce, not specified below",
                decor:"coerced"
            },
            {
                code:"171",
                label:"Seize or damage property, not specified below",
                decor:"seized or damaged property",
                codes:[
                    {
                        code:"1711",
                        label:"Confiscate property",
                        decor:"confiscated property"
                    },
                    {
                        code:"1712",
                        label:"Destroy property",
                        decor:"destroyed property"
                    }
                ]
            },
            {
                code:"172",
                label:"Impose administrative sanctions, not specified below",
                decor:"imposed administrative sanctions",
                codes:[
                    {
                        code:"1721",
                        label:"Impose restrictions on political freedoms",
                        decor:"imposed restrictions on political freedoms"
                    },
                    {
                        code:"1722",
                        label:"Ban political parties or politicians",
                        decor:"banned political parties or politicians"
                    },
                    {
                        code:"1723",
                        label:"Impose curfew",
                        decor:"imposed curfew"
                    },
                    {
                        code:"1724",
                        label:"Impose state of emergency or martial law",
                        decor:"imposed state of emergency or martial law"
                    }
                ]
            },
            {
                code:"173",
                label:"Arrest, detain, or charge with legal action",
                decor:"Arrested, detained, or charged with legal action"
            },
            {
                code:"174",
                label:"Expel or deport individuals",
                decor:"expelled or deported individuals"
            },
            {
                code:"175",
                label:"Use tactics of violent repression",
                decor:"used tactics of violent repression"
            }
        ]
    },
    
]
const cameoCountryCodes = [
    {
        code:"WSB",
        label:"West Bank"
    },
    {
        code:"BAG",
        label:"Baghdad"
    },
    {
        code:"GZS",
        label:"Gaza Strip"
    },
    {
        code:"AFR",
        label:"Africa"
    },
    {
        code:"ASA",
        label:"Asia"
    },
    {
        code:"BLK",
        label:"Balkans"
    },
    {
        code:"CRB",
        label:"Caribbean"
    },
    {
        code:"CAU",
        label:"Caucasus"
    },
    {
        code:"CFR",
        label:"Central Africa"
    },
    {
        code:"CAS",
        label:"Central Asia"
    },
    {
        code:"CEU",
        label:"Central Europe"
    },
    {
        code:"EIN",
        label:"East Indies"
    },
    {
        code:"EAF",
        label:"Eastern Africa"
    },
    {
        code:"EEU",
        label:"Eastern Europe"
    },
    {
        code:"EUR",
        label:"Europe"
    },
    {
        code:"LAM",
        label:"Latin America"
    },
    {
        code:"MEA",
        label:"Middle East"
    },
    {
        code:"MDT",
        label:"Mediterranean"
    },
    {
        code:"NAF",
        label:"North Africa"
    },
    {
        code:"NMR",
        label:"North America"
    },
    {
        code:"PGS",
        label:"Persian Gulf"
    },
    {
        code:"SCN",
        label:"Scandinavia"
    },
    {
        code:"SAM",
        label:"South America"
    },
    {
        code:"SAS",
        label:"South Asia"
    },
    {
        code:"SEA",
        label:"Southeast Asia"
    },
    {
        code:"SAF",
        label:"Southern Africa"
    },
    {
        code:"WAF",
        label:"West Africa"
    },
    {
        code:"WST",
        label:"The West"
    },
    {
        code:"AFG",
        label:"Afghanistan"
    },
    {
        code:"ALA",
        label:"Aland Islands"
    },
    {
        code:"ALB",
        label:"Albania"
    },
    {
        code:"DZA",
        label:"Algeria"
    },
    {
        code:"ASM",
        label:"American Samoa"
    },
    {
        code:"AND",
        label:"Andorra"
    },
    {
        code:"AGO",
        label:"Angola"
    },
    {
        code:"AIA",
        label:"Anguilla"
    },
    {
        code:"ATG",
        label:"Antigua and Barbuda"
    },
    {
        code:"ARG",
        label:"Argentina"
    },
    {
        code:"ARM",
        label:"Armenia"
    },
    {
        code:"ABW",
        label:"Aruba"
    },
    {
        code:"AUS",
        label:"Australia"
    },
    {
        code:"AUT",
        label:"Austria"
    },
    {
        code:"AZE",
        label:"Azerbaijan"
    },
    {
        code:"BHS",
        label:"Bahamas"
    },
    {
        code:"BHR",
        label:"Bahrain"
    },
    {
        code:"BGD",
        label:"Bangladesh"
    },
    {
        code:"BRB",
        label:"Barbados"
    },
    {
        code:"BLR",
        label:"Belarus"
    },
    {
        code:"BEL",
        label:"Belgium"
    },
    {
        code:"BLZ",
        label:"Belize"
    },
    {
        code:"BEN",
        label:"Benin"
    },
    {
        code:"BMU",
        label:"Bermuda"
    },
    {
        code:"BTN",
        label:"Bhutan"
    },
    {
        code:"BOL",
        label:"Bolivia"
    },
    {
        code:"BIH",
        label:"Bosnia and Herzegovina"
    },
    {
        code:"BWA",
        label:"Botswana"
    },
    {
        code:"BRA",
        label:"Brazil"
    },
    {
        code:"VGB",
        label:"British Virgin Islands"
    },
    {
        code:"BRN",
        label:"Brunei Darussalam"
    },
    {
        code:"BGR",
        label:"Bulgaria"
    },
    {
        code:"BFA",
        label:"Burkina Faso"
    },
    {
        code:"BDI",
        label:"Burundi"
    },
    {
        code:"KHM",
        label:"Cambodia"
    },
    {
        code:"CMR",
        label:"Cameroon"
    },
    {
        code:"CAN",
        label:"Canada"
    },
    {
        code:"CPV",
        label:"Cape Verde"
    },
    {
        code:"CYM",
        label:"Cayman Islands"
    },
    {
        code:"CAF",
        label:"Central African Republic"
    },
    {
        code:"TCD",
        label:"Chad"
    },
    {
        code:"CHL",
        label:"Chile"
    },
    {
        code:"CHN",
        label:"China"
    },
    {
        code:"COL",
        label:"Columbia"
    },
    {
        code:"COM",
        label:"Comoros"
    },
    {
        code:"COD",
        label:"Democratic Republic of the Congo"
    },
    {
        code:"COG",
        label:"People's Republic of the Congo"
    },
    {
        code:"COK",
        label:"Cook Islands"
    },
    {
        code:"CRI",
        label:"Costa Rica"
    },
    {
        code:"CIV",
        label:"Ivory Coast"
    },
    {
        code:"HRV",
        label:"Croatia"
    },
    {
        code:"CUB",
        label:"Cuba"
    },
    {
        code:"CYP",
        label:"Cyprus"
    },
    {
        code:"CZE",
        label:"Czech Republic"
    },
    {
        code:"DNK",
        label:"Denmark"
    },
    {
        code:"DJI",
        label:"Djibouti"
    },
    {
        code:"DMA",
        label:"Dominica"
    },
    {
        code:"DOM",
        label:"Dominican Republic"
    },
    {
        code:"TMP",
        label:"East Timor"
    },
    {
        code:"ECU",
        label:"Ecuador"
    },
    {
        code:"EGY",
        label:"Egypt"
    },
    {
        code:"SLV",
        label:"El Salvador"
    },
    {
        code:"GNQ",
        label:"Equatorial Guinea"
    },
    {
        code:"ERI",
        label:"Eritrea"
    },
    {
        code:"EST",
        label:"Estonia"
    },
    {
        code:"ETH",
        label:"Ethiopia"
    },
    {
        code:"FRO",
        label:"Faeroe Islands"
    },
    {
        code:"FLK",
        label:"Falkland Islands"
    },
    {
        code:"FJI",
        label:"Fiji"
    },
    {
        code:"FIN",
        label:"Finland"
    },
    {
        code:"FRA",
        label:"France"
    },
    {
        code:"GUF",
        label:"French Guiana"
    },
    {
        code:"PYF",
        label:"French Polynesia"
    },
    {
        code:"GAB",
        label:"Gabon"
    },
    {
        code:"GMB",
        label:"Gambia"
    },
    {
        code:"GEO",
        label:"Georgia"
    },
    {
        code:"DEU",
        label:"Germany"
    },
    {
        code:"GHA",
        label:"Ghana"
    },
    {
        code:"GIB",
        label:"Gibraltar"
    },
    {
        code:"GRC",
        label:"Greece"
    },
    {
        code:"GRL",
        label:"Greenland"
    },
    {
        code:"GRD",
        label:"Grenada"
    },
    {
        code:"GLP",
        label:"Guadeloupe"
    },
    {
        code:"GUM",
        label:"Guam"
    },
    {
        code:"GTM",
        label:"Guatemala"
    },
    {
        code:"GIN",
        label:"Guinea"
    },
    {
        code:"GNB",
        label:"Guinea-Bissau"
    },
    {
        code:"GUY",
        label:"Guyana"
    },
    {
        code:"HTI",
        label:"Haiti"
    },
    {
        code:"VAT",
        label:"Vatican City"
    },
    {
        code:"HND",
        label:"Honduras"
    },
    {
        code:"HKG",
        label:"Hong Kong"
    },
    {
        code:"HUN",
        label:"Hungary"
    },
    {
        code:"ISL",
        label:"Iceland"
    },
    {
        code:"IND",
        label:"India"
    },
    {
        code:"IDN",
        label:"Indonesia"
    },
    {
        code:"IRN",
        label:"Iran"
    },
    {
        code:"IRQ",
        label:"Iraq"
    },
    {
        code:"IRL",
        label:"Ireland"
    },
    {
        code:"IMY",
        label:"Isle of Man"
    },
    {
        code:"ISR",
        label:"Israel"
    },
    {
        code:"ITA",
        label:"Italy"
    },
    {
        code:"JAM",
        label:"Jamaica"
    },
    {
        code:"JPN",
        label:"Japan"
    },
    {
        code:"JOR",
        label:"Jordan"
    },
    {
        code:"KAZ",
        label:"Kazakhstan"
    },
    {
        code:"KEN",
        label:"Kenya"
    },
    {
        code:"KIR",
        label:"Kiribati"
    },
    {
        code:"PRK",
        label:"North Korea"
    },
    {
        code:"KOR",
        label:"South Korea"
    },
    {
        code:"KWT",
        label:"Kuwait"
    },
    {
        code:"KGZ",
        label:"Kyrgyzstan"
    },
    {
        code:"LAO",
        label:"Laos"
    },
    {
        code:"LVA",
        label:"Latvia"
    },
    {
        code:"LBN",
        label:"Lebanon"
    },
    {
        code:"LSO",
        label:"Lesotho"
    },
    {
        code:"LBR",
        label:"Liberia"
    },
    {
        code:"LBY",
        label:"Libya"
    },
    {
        code:"LIE",
        label:"Liechtenstein"
    },
    {
        code:"LTU",
        label:"Lithuania"
    },
    {
        code:"LUX",
        label:"Luxembourg"
    },
    {
        code:"MAC",
        label:"Macao"
    },
    {
        code:"MKD",
        label:"Macedonia"
    },
    {
        code:"MDG",
        label:"Madagascar"
    },
    {
        code:"MWI",
        label:"Malawi"
    },
    {
        code:"MYS",
        label:"Malaysia"
    },
    {
        code:"MDV",
        label:"Maldives"
    },
    {
        code:"MLI",
        label:"Mali"
    },
    {
        code:"MLT",
        label:"Malta"
    },
    {
        code:"MHL",
        label:"Marshall Islands"
    },
    {
        code:"MTQ",
        label:"Martinique"
    },
    {
        code:"MRT",
        label:"Mauritania"
    },
    {
        code:"MUS",
        label:"Mauritius"
    },
    {
        code:"MYT",
        label:"Mayotte"
    },
    {
        code:"MEX",
        label:"Mexico"
    },
    {
        code:"FSM",
        label:"Micronesia"
    },
    {
        code:"MDA",
        label:"Moldova"
    },
    {
        code:"MCO",
        label:"Monaco"
    },
    {
        code:"MNG",
        label:"Mongolia"
    },
    {
        code:"MTN",
        label:"Montenegro"
    },
    {
        code:"MSR",
        label:"Montserrat"
    },
    {
        code:"MAR",
        label:"Morocco"
    },
    {
        code:"MOZ",
        label:"Mozambique"
    },
    {
        code:"MMR",
        label:"Myanmar"
    },
    {
        code:"NAM",
        label:"Namibia"
    },
    {
        code:"NRU",
        label:"Nauru"
    },
    {
        code:"NPL",
        label:"Nepal"
    },
    {
        code:"NLD",
        label:"Netherlands"
    },
    {
        code:"ANT",
        label:"Netherlands Antilles"
    },
    {
        code:"NCL",
        label:"New Caledonia"
    },
    {
        code:"NZL",
        label:"New Zealand"
    },
    {
        code:"NIC",
        label:"Nicaragua"
    },
    {
        code:"NER",
        label:"Niger"
    },
    {
        code:"NGA",
        label:"Nigeria"
    },
    {
        code:"NIU",
        label:"Niue"
    },
    {
        code:"NFK",
        label:"Norfolk Island"
    },
    {
        code:"MNP",
        label:"Northern Mariana Islands"
    },
    {
        code:"NOR",
        label:"Norway"
    },
    {
        code:"PSE",
        label:"Occupied Palestinian Territory"
    },
    {
        code:"OMN",
        label:"Oman"
    },
    {
        code:"PAK",
        label:"Pakistan"
    },
    {
        code:"PLW",
        label:"Palau"
    },
    {
        code:"PAN",
        label:"Panama"
    },
    {
        code:"PNG",
        label:"Papua New Guinea"
    },
    {
        code:"PRY",
        label:"Paraguay"
    },
    {
        code:"PER",
        label:"Peru"
    },
    {
        code:"PHL",
        label:"Philippines"
    },
    {
        code:"PCN",
        label:"Pitcairn"
    },
    {
        code:"POL",
        label:"Poland"
    },
    {
        code:"PRT",
        label:"Portugal"
    },
    {
        code:"PRI",
        label:"Puerto Rico"
    },
    {
        code:"QAT",
        label:"Qatar"
    },
    {
        code:"REU",
        label:"Runion"
    },
    {
        code:"ROM",
        label:"Romania"
    },
    {
        code:"RUS",
        label:"Russia"
    },
    {
        code:"RWA",
        label:"Rwanda"
    },
    {
        code:"SHN",
        label:"Saint Helena"
    },
    {
        code:"KNA",
        label:"Saint Kitts-Nevis"
    },
    {
        code:"LCA",
        label:"Saint Lucia"
    },
    {
        code:"SPM",
        label:"Saint Pierre and Miquelon"
    },
    {
        code:"VCT",
        label:"Saint Vincent and the Grenadines"
    },
    {
        code:"WSM",
        label:"Samoa"
    },
    {
        code:"SMR",
        label:"San Marino"
    },
    {
        code:"STP",
        label:"Sao Tome and Principe"
    },
    {
        code:"SAU",
        label:"Saudi Arabia"
    },
    {
        code:"SEN",
        label:"Senegal"
    },
    {
        code:"SRB",
        label:"Serbia"
    },
    {
        code:"SYC",
        label:"Seychelles"
    },
    {
        code:"SLE",
        label:"Sierra Leone"
    },
    {
        code:"SGP",
        label:"Singapore"
    },
    {
        code:"SVN",
        label:"Slovenia"
    },
    {
        code:"SLB",
        label:"Solomon Islands"
    },
    {
        code:"SOM",
        label:"Somalia"
    },
    {
        code:"ZAF",
        label:"South Africa"
    },
    {
        code:"ESP",
        label:"Spain"
    },
    {
        code:"LKA",
        label:"Sri Lanka"
    },
    {
        code:"SDN",
        label:"Sudan"
    },
    {
        code:"SUR",
        label:"Suriname"
    },
    {
        code:"SJM",
        label:"Svalbard and Jan Mayen Islands"
    },
    {
        code:"SWZ",
        label:"Swaziland"
    },
    {
        code:"SWE",
        label:"Sweden"
    },
    {
        code:"CHE",
        label:"Switzerland"
    },
    {
        code:"SYR",
        label:"Syria"
    },
    {
        code:"TWN",
        label:"Taiwan"
    },
    {
        code:"TJK",
        label:"Tajikistan"
    },
    {
        code:"TZA",
        label:"Tanzania"
    },
    {
        code:"THA",
        label:"Thailand"
    },
    {
        code:"TGO",
        label:"Togo"
    },
    {
        code:"TKL",
        label:"Tokelau"
    },
    {
        code:"TON",
        label:"Tonga"
    },
    {
        code:"TTO",
        label:"Trinidad and Tobago"
    },
    {
        code:"TUN",
        label:"Tunisia"
    },
    {
        code:"TUR",
        label:"Turkey"
    },
    {
        code:"TKM",
        label:"Turkmenistan"
    },
    {
        code:"TCA",
        label:"Turks and Caicos Islands"
    },
    {
        code:"TUV",
        label:"Tuvalu"
    },
    {
        code:"UGA",
        label:"Uganda"
    },
    {
        code:"UKR",
        label:"Ukraine"
    },
    {
        code:"ARE",
        label:"United Arab Emirates"
    },
    {
        code:"GBR",
        label:"United Kingdom"
    },
    {
        code:"USA",
        label:"United States"
    },
    {
        code:"VIR",
        label:"United States Virgin Islands"
    },
    {
        code:"URY",
        label:"Uruguay"
    },
    {
        code:"UZB",
        label:"Uzbekistan"
    },
    {
        code:"VUT",
        label:"Vanuatu"
    },
    {
        code:"VEN",
        label:"Venezuela"
    },
    {
        code:"VNM",
        label:"Vietnam"
    },
    {
        code:"WLF",
        label:"Wallis and Futuna Islands"
    },{
        code:"ESH",
        label:"Western Sahara"
    },
    {
        code:"YEM",
        label:"Yemen"
    },
    {
        code:"ZMB",
        label:"Zambia"
    },
    {
        code:"ZWE",
        label:"Zimbabwe"
    }
]



export {cameoTypeCodes, cameoEventCodes, cameoCountryCodes};