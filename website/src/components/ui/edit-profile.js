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
            <DialogContent className="sm:max-w-[425px] bg-gray-900 border-white/20 text-white">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-white">Edit Profile</DialogTitle>
                    <DialogDescription className="text-gray-400">
                        Update your details and click save when done.
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-6 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="fullName" className="text-gray-300 font-medium">
                            Full Name
                        </Label>
                        <Input
                            id="fullName"
                            value={formData.fullName}
                            placeholder="Enter your full name"
                            onChange={handleChange}
                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-purple-500/20"
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="email" className="text-gray-300 font-medium">
                            Email
                        </Label>
                        <Input
                            id="email"
                            value={formData.email}
                            placeholder="Enter your email"
                            onChange={handleChange}
                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-purple-500/20"
                        />
                    </div>
                </div>

                <DialogFooter>
                    <Button
                        onClick={handleSave}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    >
                        Save changes
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
