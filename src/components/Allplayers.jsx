import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API/index.js";
import { useNavigate } from "react-router-dom";
export default function Allplayers() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSeachParam] = useState("");
  const navigate= useNavigate()
  // Runs only on the first render
  // useEffect(() => {}, []);
  // Import the useState and useEffect hooks.
  useEffect(() => {
    async function getAllPLayers() {
      const APIResponse = await fetchAllPlayers();
      // If/Else statement + Props
      if (APIResponse.success) {
        setPlayers(APIResponse.data.players);
      } else {
        setError(APIResponse.error.message);
      }
      console.log(APIResponse.data.players);
    }
    getAllPLayers();
  }, []);






return (
    <div>
      {players.map((player) => {
        return (
          <div>
            <h4>{player.name}</h4>
            <img src={player.imageUrl} alt=""/>
            <button onClick={() => navigate(`/${player.id}`)}>See details</button>
                            {/* <button onClick={() => handleClick(player.id)}>Please don't delete me!</button> */}

          </div>
        );
      })}
    </div>
  );
}





