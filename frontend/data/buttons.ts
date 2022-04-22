import { NextRouter } from "next/router";
import { Url } from "url";

export interface ButtonsBig {
    text:string;
    onClick:()=>void;
    grid:false;
    router:string;
}
export interface ButtonsGrid {
    button:{
        text:string;
        onClick:()=>void;
        router:string;
    }[]
    grid:true;
    gridID:number;
}

let router:NextRouter;

const homeButtons:(ButtonsBig|ButtonsGrid)[]= [
    {
        text:"START",
        onClick:()=>{},
        grid:false,
        router:""
    },
    {
        button:[{
            text:"How it works",
            onClick:()=>{},
            router:""
        },
        {
            text:"About us",
            router:"/about",
            onClick:()=>{}
        }],
        grid:true,
        gridID:1
    }
];

const aboutButtons:(ButtonsBig|ButtonsGrid)[]= [
    {
        text:"START",
        onClick:()=>{},
        grid:false,
        router:""
    },
    {
        button:[{
            text:"How it works",
            onClick:()=>{},
            router:""
        },
        {
            text:"Home",
            router:"/",
            onClick:()=>{}
        }],
        grid:true,
        gridID:1
    }
];

export { homeButtons, aboutButtons };