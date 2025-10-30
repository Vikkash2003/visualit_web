import './globals.css'
import 'react-device-frameset/styles/marvel-devices.min.css'

export const metadata = {
    title: 'Visualize Content - Landing Page',
    description: 'Visualize the content when reading without imagine',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="h-full">
        <body className="h-full">{children}</body>
        </html>
    )
}