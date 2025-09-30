"use client"

import { useState } from "react"

export const ClientComponentOne= ()=>{
    const [name,setName ] = useState("I am batman")
    return <h1>This is Client Component One.</h1>
}