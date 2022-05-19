import { NextPage } from "next";
import { useRouter } from "next/router";
import GameScreen from "../components/Game/GameScreen";
import Templates from "../components/Game/Templates/Templates";

const Display: NextPage = () => {
    const Router = useRouter();
    
    return (
      <div>
        {/* <GameScreen gameObject={game} setGame={setGame}/> */}
        <Templates title="Este es el mejor título ever but it is just tooo long what can I do oh goodness gracious"/>
      </div>
    )
  }
  
  export default Display
  