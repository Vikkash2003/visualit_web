/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,jsx}',
        './src/components/**/*.{js,jsx}',
        './src/app/**/*.{js,jsx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#000000',
                foreground: '#ffffff',
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'gradient': 'gradient-x 3s linear infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'gradient-x': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
                    '50%': { opacity: '0.8', transform: 'scale(1.05)' },
                },
            },
            fontFamily: {
                display: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [],
    corePlugins: {
        preflight: true,
    },
}