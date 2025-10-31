"use client"
import { useState } from "react"
import  Button  from "@/components/ui/button"
import { EditProfile } from "@/components/ui/edit-profile"

export function Demo({ openTrigger }) {
    const [profile, setProfile] = useState({
        fullName: "Manoj",
        email: "manoj@example.com",
    })

    return (
        <EditProfile
            profile={profile}
            setProfile={setProfile}
            trigger={openTrigger || <Button>Open Dialog</Button>}
        />
    )
}
