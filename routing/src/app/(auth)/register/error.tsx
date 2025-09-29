'use client'
export default function ErrorBoundary({error}: {error:Error}){
    return <h1>This is the error:  {error.message} </h1>
}