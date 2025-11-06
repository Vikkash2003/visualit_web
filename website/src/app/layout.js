import './globals.css'

export const metadata = {
    title: 'Visualit - Visualize Content While Reading',
    description: 'Visualize the content when reading without imagine. Transform your reading experience with AI-powered visualization.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="h-full">
            <body className="h-full" suppressHydrationWarning={true}>
                {children}
            </body>
        </html>
    )
}