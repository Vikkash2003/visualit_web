"use client"
import { useState } from "react"
import  Button  from "@/components/ui/button"
import { EditProfile } from "@/components/ui/edit-profile"
import { contentData } from "@/lib/contentData"

export function Demo({ openTrigger }) {
    const [profile, setProfile] = useState(contentData.demo.defaultProfile)

    return (
        <EditProfile
            profile={profile}
            setProfile={setProfile}
            trigger={openTrigger || <Button>Open Dialog</Button>}
        />
    )
}
