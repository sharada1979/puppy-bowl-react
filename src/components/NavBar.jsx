import { Link } from "react-router-dom"

export default function NavBar(){
    return (
        <>
            <Link to={"/"}>Home</Link>
            <Link to={"/create"}>Create new player</Link>
            <Link to={"/search"}>Search</Link>
        </>
    )
}