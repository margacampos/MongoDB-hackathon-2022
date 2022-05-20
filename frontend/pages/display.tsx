import { NextPage } from "next";
import { useRouter } from "next/router";
import Ask from "../components/Game/Ask";
import GameScreen from "../components/Game/GameScreen";
import Templates from "../components/Game/Templates/Templates";

const Display: NextPage = () => {
    const Router = useRouter();
    
    return (
      <div>
        {/* <GameScreen gameObject={game} setGame={setGame}/> */}
        <Ask person="MANAGING_EDITOR"/>
      </div>
    )
  }
  
  export default Display
  