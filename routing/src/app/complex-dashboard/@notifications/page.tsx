import { Card } from "@/components/card"
import Link from "next/link"
export default function notifications(){
    return(
        <>  
            <div>
                <div><Card>Notifications</Card></div>
                <Link href = "/complex-dashboard/archived">Archived </Link>
            </div>
            
        </>
    )
}