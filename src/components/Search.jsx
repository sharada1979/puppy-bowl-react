import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";
import { useNavigate } from "react-router-dom";

export default function Search(){
    const [players, setPlayers] = useState([]);
    const [search, setSearch] = useState("");
    const [searchedPlayer, setSearchedPlayer] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPlayers(){
            const res = await fetchAllPlayers();
            setPlayers(res.data.players);
            setSearchedPlayer(res.data.players)
        }

        fetchPlayers();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (search === "") { setSearchedPlayer(players); return; }
        const filterBySearch = players.filter((e) => {
            if (e.name.toLowerCase()
                .includes(search.toLowerCase())) { return e; }
        })
        setSearchedPlayer(filterBySearch);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
            <label>
                    search:{" "}
                    <input value={search} 
                        onChange={(e) => setSearch(e.target.value)}
                    required/>
                </label>
                <button>Submit</button>
            </form>

            <hr />
            <div>
            {
              searchedPlayer.map((player) => {
                    return (
                        <div key={player.id}>
                            <img src={player.imageUrl} alt="dog" />
                            <h3>{player.name}</h3>
                            <button onClick={() => navigate(`/${player.id}`)}>See details</button>
                        </div>
                    )
                })
            }

            {/* {
              searchedPlayer && searchedPlayer.map((player) => {
                    return (
                        <div key={player.id}>
                            <img src={player.imageUrl} alt="dog" />
                            <h3>{player.name}</h3>
                            <button onClick={() => navigate(`/${player.id}`)}>See details</button>
                        </div>
                    )
                })
            } */}
        </div>
        </>
    )
    
}
