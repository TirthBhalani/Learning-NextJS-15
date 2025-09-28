export default function Docs(
    {params} : {params : {slug: string[]}}
){  
    params.slug?.forEach(element => {
        console.log(element)
    });
    return <h1>This is an example of catch all segments</h1>
}