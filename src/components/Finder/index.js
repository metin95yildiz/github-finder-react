import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitSearch } from "../../store/actions";
import "./Finder.scss";

export default function Finder() {
    const [username, setUsername] = useState("");
    const dispatch = useDispatch();
    function submit(event) {
        event.preventDefault();
        dispatch(submitSearch(username))
    }
    return (
        <form onSubmit={submit}>
            <input type="search" className="search"
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter a Github username"
            />
            <input type="submit" className="submit" value="Search" disabled={!username}/>
        </form>
    )
}