import { useEffect, useState } from 'react'; 
import Image from 'next/image';
import styles from "../../styles/Newsroom.module.scss"
import { cameoCountryCodes, cameoEventCodes, cameoTypeCodes } from '../../data/cameoCodes';
import Select from './Select';
import Header from '../Header';
import { motion } from 'framer-motion';
import Loading from '../Loading';
import { arrangeTitle2, formatDate } from '../../utils/gameUtils';

export interface IArchiveProps {
}
const tapaTransition = {
  duration:0.5,
}
export default function Archive (props: IArchiveProps) {
    const [search, setSearch] = useState([])
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState("")
    const [loading, setLoading] = useState(false)
    const [country, setCountry] = useState({label:"Country", code:""});
    const [actor, setActor] = useState({label:"Actor", code:""});
    const [event, setEvent] = useState({label:"Event", code:""});
    const getEvents = async() =>{
      const res = await fetch("/api/archive-events", {
        method: "POST",
        body: JSON.stringify({eventRootCode:event.code, countryCode:country.code, actorCode:actor.code})
      });
      const events = await res.json()
      await events.map((i:any)=>i.title=arrangeTitle2(i.title.toUpperCase(),40))
      if(await events){
        setSearch(await events);
        setLoading(false);
        setOpen(true);
      }
    }
    useEffect(() => {
      setLoading(true);
      getEvents()
      return () => {
        
      }
    }, [country,actor,event])
    useEffect(() => {
      let date = new Date();
      let dateToNumber = `${date.getFullYear()}${date.getMonth()<=8?`0${date.getMonth()+1}`:date.getMonth()+1}${date.getDate()<=9?`0${date.getDate()}`:date.getDate()}`
      setDate(formatDate(parseInt(dateToNumber)));
      return () => {
        
      }
    }, [])
    
  return (
    <div>
      <Header title='ARCHIVES'/>
      <div className={styles.selection}>
        <Select title={country.label}>
          <button key={"none"} onClick={()=>setCountry({label:"Country", code:""})}>None</button>
          {cameoCountryCodes.map((i)=><button key={i.code} onClick={()=>setCountry(i)}>{i.label}</button>)}
        </Select>
        <Select title={actor.label}>
          <button key={"none"} onClick={()=>setActor({label:"Actor", code:""})}>None</button>
          {cameoTypeCodes.map((i)=><button key={i.code} onClick={()=>setActor(i)}>{i.label}</button>)}
        </Select>
        <Select title={event.label}>
          <button key={"none"} onClick={()=>setEvent({label:"Event", code:""})}>None</button>
          {cameoEventCodes.map((i)=><button key={i.rootCode} onClick={()=>setEvent({label:i.label.toLowerCase(), code:i.rootCode})}>{i.label.toLowerCase()}</button>)}
        </Select>
      </div>
     <div className={styles.archiveSVG}>
     
     {loading ? <Loading/>
     :<svg viewBox="0 -100 660 797" fill="none">
     <rect id="Rounded rectangle" x="73.5" y="0.5" width="536" height="259" rx="7.5" fill="#52461B" stroke="black"/>
     {search!=[] && search.map((i, index)=><motion.g id={`Article${index}`} key={index} className={styles.new}
     animate={open?{y:0}:{y:-20*index}} transition={{duration:0.1}} whileHover={{y:-70}}>
     <g id="Rectangle 53" filter={`url(#filter${index}_d_175_600)`}>
     <rect x="27" y={14+54*index} width="614.764" height="214" fill="#F5F2E8"/>
     </g>
     <text id="title" fill="#42413F" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Maison mono" fontSize="19" letterSpacing="0em">{i.title.map((j:string,ind:number)=><tspan key={ind} x="67.7637" y={60.1621+54*index+30*ind}>{j}</tspan>)}</text>
     <g id="Group 24">
     <text id="title" fill="#42413F" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Maison mono" fontSize="13" letterSpacing="0em"><tspan x="67.7637" y={80+54*index+20*i.title.length} onClick={()=>window.open(i.SourceURL,'_blank')}>Find more about this event here.</tspan></text>
     
     <rect id="Rectangle 98" x="42.5638" y={165.745+54*index+20*i.title.length} width="133.264" height="9.72727" fill="#52461B"/>
     <rect id="Rectangle 94" x="42.5638" y={183.255+54*index+20*i.title.length} width="133.264" height="9.72727" fill="#52461B"/>
     <rect id="Rectangle 91" x="42.5638" y={130.727+54*index+20*i.title.length} width="133.264" height="9.72727" fill="#52461B"/>
     <rect id="Rectangle 95" x="42.5638" y={200.764+54*index+20*i.title.length} width="133.264" height="9.72727" fill="#52461B"/>
     <rect id="Rectangle 92" x="42.5638" y={148.236+54*index+20*i.title.length} width="133.264" height="9.72727" fill="#52461B"/>
     <rect id="Rectangle 96" x="42.5638" y={218.273+54*index+20*i.title.length} width="133.264" height="9.72727" fill="#52461B"/>
     </g>
     <g id="Group 21">
     <rect id="Rectangle 98" x="192.364" y={165.745+54*index+20*i.title.length} width="133.264" height="9.72727" fill="#52461B"/>
     <rect id="Rectangle 100" x="192.364" y={183.255+54*index+20*i.title.length} width="133.264" height="9.72727" fill="#52461B"/>
     <rect id="Rectangle 101" x="192.364" y={130.727+54*index+20*i.title.length} width="133.264" height="9.72727" fill="#52461B"/>
     <rect id="Rectangle 102" x="192.364" y={200.764+54*index+20*i.title.length} width="133.264" height="9.72727" fill="#52461B"/>
     <rect id="Rectangle 103" x="192.364" y={148.236+54*index+20*i.title.length} width="133.264" height="9.72727" fill="#52461B"/>
     <rect id="Rectangle 104" x="192.364" y={218.273+54*index+20*i.title.length} width="133.264" height="9.72727" fill="#52461B"/>
     </g>
     <g id="Group 22">
     <rect id="Rectangle 98_2" x="342.163" y={165.745+54*index+20*i.title.length} width="133.264" height="9.72727" fill="#52461B"/>
     <rect id="Rectangle 100_2" x="342.163" y={183.255+54*index+20*i.title.length} width="133.264" height="9.72727" fill="#52461B"/>
     <rect id="Rectangle 101_2" x="342.163" y={130.727+54*index+20*i.title.length} width="133.264" height="9.72727" fill="#52461B"/>
     <rect id="Rectangle 102_2" x="342.163" y={200.764+54*index+20*i.title.length} width="133.264" height="9.72727" fill="#52461B"/>
     <rect id="Rectangle 103_2" x="342.163" y={148.236+54*index+20*i.title.length} width="133.264" height="9.72727" fill="#52461B"/>
     <rect id="Rectangle 104_2" x="342.163" y={218.273+54*index+20*i.title.length} width="133.264" height="9.72727" fill="#52461B"/>
     </g>
     <g id="Group 23">
     <rect id="Rectangle 98_3" x="491.963" y={165.745+54*index+20*i.title.length} width="133.264" height="9.72727" fill="#52461B"/>
     <rect id="Rectangle 100_3" x="491.963" y={183.255+54*index+20*i.title.length} width="133.264" height="9.72727" fill="#52461B"/>
     <rect id="Rectangle 101_3" x="491.963" y={130.727+54*index+20*i.title.length} width="133.264" height="9.72727" fill="#52461B"/>
     <rect id="Rectangle 102_3" x="491.963" y={200.764+54*index+20*i.title.length} width="133.264" height="9.72727" fill="#52461B"/>
     <rect id="Rectangle 103_3" x="491.963" y={148.236+54*index+20*i.title.length} width="133.264" height="9.72727" fill="#52461B"/>
     <rect id="Rectangle 104_3" x="491.963" y={218.273+54*index+20*i.title.length} width="133.264" height="9.72727" fill="#52461B"/>
     </g>
     </motion.g>)}
      <g id="tapa" className={styles.tapa} onClick={()=>setOpen(state=>!state)}>
     <motion.rect 
     animate={open?{y:61.5+61.5*search.length}:{y:0}} transition={tapaTransition} className={styles.tapa}
     id="Rectangle 34" x="1.5" width="656" height="468" rx="8.5" fill="#DFC79E" stroke="black" strokeWidth="3"/>
     <g id="Group 8">
     <motion.rect 
     animate={open?{y:313.973+61.5*search.length}:{y:252.473}} transition={tapaTransition}
     id="Rectangle 36" x="162.976"  width="341.482" height="15.9758" fill="black"/>
     <motion.rect 
     animate={open?{y:296+61.5*search.length}:{y:234.5}} transition={tapaTransition}
     id="Rectangle 37" x="147"  width="15.9758" height="55.9151" rx="3" fill="black"/>
     <motion.rect 
     animate={open?{y:296+61.5*search.length}:{y:234.5}} transition={tapaTransition}
     id="Rectangle 38" x="496.47" width="15.9758" height="55.9151" rx="3" fill="black"/>
     </g>
     <motion.rect 
     animate={open?{y:154+61.5*search.length}:{y:92.5}} transition={tapaTransition}
     id="Rectangle 40" x="94" width="471" height="84" rx="10" fill="#F5F2E8"/>
     <motion.text id="November 20th, 2022"  animate={open?{y:211.391+61.5*search.length}:{y:149.891}} transition={tapaTransition} fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="Century" fontSize="40" letterSpacing="0em"><motion.tspan x="131" >{date}</motion.tspan></motion.text>
     </g>
     <defs>
     <filter id="filter0_d_175_600" x="-3" y="-12" width="674.764" height="274" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
     <feFlood floodOpacity="0" result="BackgroundImageFix"/>
     <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
     <feOffset dy="4"/>
     <feGaussianBlur stdDeviation="15"/>
     <feComposite in2="hardAlpha" operator="out"/>
     <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
     <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_175_600"/>
     <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_175_600" result="shape"/>
     </filter>
     <filter id="filter1_d_175_600" x="-3" y="42" width="674.764" height="274" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
     <feFlood floodOpacity="0" result="BackgroundImageFix"/>
     <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
     <feOffset dy="4"/>
     <feGaussianBlur stdDeviation="15"/>
     <feComposite in2="hardAlpha" operator="out"/>
     <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
     <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_175_600"/>
     <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_175_600" result="shape"/>
     </filter>
     <filter id="filter2_d_175_600" x="-3" y="100" width="674.764" height="274" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
     <feFlood floodOpacity="0" result="BackgroundImageFix"/>
     <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
     <feOffset dy="4"/>
     <feGaussianBlur stdDeviation="15"/>
     <feComposite in2="hardAlpha" operator="out"/>
     <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
     <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_175_600"/>
     <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_175_600" result="shape"/>
     </filter>
     <filter id="filter3_d_175_600" x="-2" y="159" width="674.764" height="274" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
     <feFlood floodOpacity="0" result="BackgroundImageFix"/>
     <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
     <feOffset dy="4"/>
     <feGaussianBlur stdDeviation="15"/>
     <feComposite in2="hardAlpha" operator="out"/>
     <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
     <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_175_600"/>
     <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_175_600" result="shape"/>
     </filter>
     <filter id="filter4_d_175_600" x="-3" y="220" width="674.764" height="274" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
     <feFlood floodOpacity="0" result="BackgroundImageFix"/>
     <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
     <feOffset dy="4"/>
     <feGaussianBlur stdDeviation="15"/>
     <feComposite in2="hardAlpha" operator="out"/>
     <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
     <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_175_600"/>
     <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_175_600" result="shape"/>
     </filter>
     <clipPath id="clip0_175_600">
     <rect width="659" height="777" fill="white"/>
     </clipPath>
     </defs>
          </svg>}

     </div>
    </div>
  );
}