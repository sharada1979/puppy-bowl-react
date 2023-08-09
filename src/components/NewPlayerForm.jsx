import { createNewPlayer } from "../API";
import { useState } from "react";

export default function NewPlayerForm(){
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [url, setUrl] = useState("");
    const [team, setTeam] = useState("");
    const [cohortId, setCohortId] = useState("")

    async function handleSubmit(e){
        e.preventDefault();
        createNewPlayer(name, breed, url, team);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                {/* name */}
                <label>
                    Name:{" "}
                    <input value={name} 
                        onChange={(e) => setName(e.target.value)}
                    required/>
                </label>

                <label>
                    Breed:{" "}
                    <input value={breed} 
                        onChange={(e) => setBreed(e.target.value)}
                    required/>
                </label>

                <label>
                    URL:{" "}
                    <input value={url} 
                        onChange={(e) => setUrl(e.target.value)}
                    required/>
                </label>

                <label>
                    TeamID:{" "}
                    <input type="number" value={team} 
                        onChange={(e) => setTeam(e.target.value)}
                    required/>
                </label>

                <label>
                    cohortID:{" "}
                    <input type="number" value={cohortId} 
                        onChange={(e) => setCohortId(e.target.value)}
                    required/>
                </label>

                <button>Submit</button>
            </form>
        </div>
    )
}