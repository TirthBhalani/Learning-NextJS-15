"use client";
import { use, useState } from "react";
export default function DashBoardPage(){
    const [name,setName] = useState("");

    return(
        <div>
            <h1>DashBoard</h1>
            <input type="text" value={name} onChange={e=> setName(e.target.value)} />
            <p>Hello, {name}</p>
        </div>
    )
}