import { NextRouter } from "next/router";
import { IButtonsProps } from "../components/Buttons";

export interface ButtonsBig {
    text:string;
    onClick:()=>void;
    grid:false;
}
export interface ButtonsGrid {
    button:{
        text:string;
        onClick:()=>void;
    }[]
    grid:true;
    gridID:number;
}

let router:NextRouter;

const homeButtons:(ButtonsBig|ButtonsGrid)[]= [
    {
        text:"START",
        onClick:()=>{},
        grid:false
    },
    {
        button:[{
            text:"How it works",
            onClick:()=>{}
        },
        {
            text:"About us",
            onClick:()=>{router.push("/about","/more-about-gdelt-newsroom")}
        }],
        grid:true,
        gridID:1
    }
];

export { homeButtons };