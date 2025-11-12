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
                    {/* Placeholder for video - replace with actual video */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                                <Play className="w-10 h-10 text-white ml-1" />
                            </div>
                            <p className="text-gray-400">{contentData.demo.placeholderMessage}</p>
                            <p className="text-sm text-gray-500 mt-2">
                                {contentData.demo.placeholderSubtext}
                            </p>
                        </div>
                    </div>
                    {/* When you have a video, replace the above with: */}
                    {/* <iframe
                        className="w-full h-full"
                        src="your-video-url"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    /> */}
                </div>
            </DialogContent>
        </Dialog>
    );
}

