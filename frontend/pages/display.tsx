import { NextPage } from "next";
import { useRouter } from "next/router";
import GameScreen from "../components/Game/GameScreen";

const Display: NextPage = () => {
    const Router = useRouter();
    
    return (
      <div>
        {/* <GameScreen gameObject={game} setGame={setGame}/> */}
      </div>
    )
  }
  
  export default Display
  