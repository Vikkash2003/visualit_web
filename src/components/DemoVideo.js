'use client'

import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Play } from 'lucide-react';
import { contentData } from '@/lib/contentData';

export function DemoVideo({ trigger }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-full bg-black/95 border-white/20">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-white">
                        {contentData.demo.title}
                    </DialogTitle>
                    <DialogDescription className="text-gray-400">
                        {contentData.demo.description}
                    </DialogDescription>
                </DialogHeader>
                <div className="aspect-video w-full bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center relative overflow-hidden">
                    <iframe
                        className="w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/uar-FaNS1lk"
                        title={contentData.demo.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
}

