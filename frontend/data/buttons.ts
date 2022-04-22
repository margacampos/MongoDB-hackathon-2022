import { NextRouter } from "next/router";
import { IButtonsProps } from "../components/Buttons";

let router:NextRouter;

const homeButtons:({
    text:string;
    onClick:()=>void;
    grid:false;
}|{
    button:{
        text:string;
        onClick:()=>void;
    }[]
    grid:true;
    gridID:number;
})[] = [
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