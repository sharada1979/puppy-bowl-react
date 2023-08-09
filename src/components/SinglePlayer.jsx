import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiFetchSinglePlayers } from "../API";

export default function SinglePlayer(){
    const { id } = useParams();
    const [player, setPlayer] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchSinglePlayer(id){
            const res = await apiFetchSinglePlayers(id);
            setPlayer(res)
        }

        fetchSinglePlayer(id);
        
    }, [])
    const COHORT = "2302-acc-pt-web-pt-a";
    const baseUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}`;
    async function handleClick(){
        try {
            const response = await fetch(
              `${baseUrl}/players/${id}`,
              {method: 'DELETE'}
            );
            const result = await response.json();
            console.log(result);
            navigate("/")
          } catch (err) {
            console.error(err);
            throw new Error(err);
          }
    }

    console.log(player);
    return (
        <div>
            <h1>{player.name}</h1>
            <img className="singleImg" src={player.imageUrl} alt="img" />
            <button onClick={handleClick}>Please don't delete me!</button>
        </div>
    )
}