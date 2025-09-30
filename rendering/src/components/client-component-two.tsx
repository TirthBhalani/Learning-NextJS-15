"use client"

import { useState } from "react"

export const ClientComponentTwo= ()=>{
    const [name,setName ] = useState("I am batman")
    return <h1>This is Client Component Two.</h1>
}