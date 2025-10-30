import React from 'react'

const Button = ({ children, className = '', variant = 'default', ...props }) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50'

    const variants = {
        default: 'bg-white text-black hover:bg-gray-100 active:bg-gray-200',
        outline: 'border-2 border-white bg-transparent text-white hover:bg-white hover:text-black active:bg-gray-100',
    }

    return (
        <button
            className={`${baseStyles} ${variants[variant]} px-6 py-3 ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
