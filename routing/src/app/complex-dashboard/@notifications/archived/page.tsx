import { Card } from "@/components/card"
import Link from "next/link"
export default function Archivednotifications(){
    return(
        <>
            <div>
                <div><Card>Archived Notifications</Card></div>
                <Link href = "/complex-dashboard/">Notifications </Link>
            </div>
            
        </>
    )
}