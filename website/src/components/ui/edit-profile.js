"use client"
import { useState } from "react"
import  Button  from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function EditProfile({ profile, setProfile, trigger }) {
    const [isOpen, setIsOpen] = useState(false)
    const [formData, setFormData] = useState(profile)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const handleSave = () => {
        setProfile(formData)
        setIsOpen(false)
    }

    const handleOpenChange = (open) => {
        if (open) setFormData(profile)
        setIsOpen(open)
    }

    return (
        <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogDescription>
                        Update your details and click save when done.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="fullName" className="text-right">
                            Full Name
                        </Label>
                        <Input
                            id="fullName"
                            value={formData.fullName}
                            placeholder="Enter your full name"
                            onChange={handleChange}
                            className="col-span-3"
                        />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                            Email
                        </Label>
                        <Input
                            id="email"
                            value={formData.email}
                            placeholder="Enter your email"
                            onChange={handleChange}
                            className="col-span-3"
                        />
                    </div>
                </div>

                <DialogFooter>
                    <Button onClick={handleSave}>Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
