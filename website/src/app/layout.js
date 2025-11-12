import './globals.css'

export const metadata = {
    title: 'VisuaLit - Visualize Content While Reading',
    description: 'Visualize the content when reading without imagine. Transform your reading experience with AI-powered visualization.',
    icons: {
        icon: [
            { url: '/VisuaLit-Logo.png', sizes: '32x32', type: 'image/png' },
            { url: '/VisuaLit-Logo.png', sizes: '64x64', type: 'image/png' },
        ],
        shortcut: '/VisuaLit-Logo.png',
        apple: '/VisuaLit-Logo.png',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="h-full" suppressHydrationWarning>
            <body className="h-full bg-black text-white relative" suppressHydrationWarning>
                {/* Global Animated Background */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
                </div>
                {/* Content */}
                <div className="relative z-10">
                    {children}
                </div>
            </body>
        </html>
    )
}