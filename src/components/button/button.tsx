"use client"
import React, { ButtonHTMLAttributes, useState } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'text';
    size?: 'sm' | 'md' | 'lg' | 'scale';
    disabled?: boolean;
    handleClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    children,
    className = '',
    variant = 'primary',
    size = 'md',
    disabled = false,
    handleClick = () => {},
    ...rest
}) => {
    let colorClasses = '';
    let sizeClasses = '';
    let disabledClasses = '';

    switch (variant) {
        case 'primary':
            colorClasses = 'bg-primary hover:bg-primaryDark text-primaryDark hover:text-tint-300';
            break;
        case 'secondary':
            colorClasses = 'bg-secondary hover:bg-secondaryDark text-tint-300';
            break;
        case 'outline':
            colorClasses = 'border border-tint-600 hover:border-primary text-tint-600 hover:text-primary';
            break;
        case 'text':
            colorClasses = 'text-gray-500 hover:text-primary';
            break;
            
        default:
            break;
    }

    switch (size) {
        case 'sm':
            sizeClasses = 'py-1 px-2 text-sm';
            break;
        case 'md':
            sizeClasses = 'py-2 px-4 text-base';
            break;
        case 'lg':
            sizeClasses = 'py-3 px-6 text-lg';
            break;
        case 'scale':
            sizeClasses = 'py-1 px-2 md:py-2 md:px-4 lg:py-3 lg:px-6 text-sm md:text-base lg:text-lg';
            break;
        default:
            break;
    }

    if (disabled) {
        disabledClasses = 'opacity-50 cursor-not-allowed';
    }

    const classes = `inline-block rounded-[8px] font-semibold focus:outline-none transition-all duration-200 ease-in-out ${colorClasses} ${sizeClasses} ${disabledClasses} ${className}`;

    const [isTouched, setIsTouched] = useState(false);

    const handleTouchStart = () => {
        setIsTouched(true);
    };

    const handleTouchEnd = () => {
        setIsTouched(false);
    };

    const touchStyles = isTouched ? { backgroundColor: 'primaryDark'} : {backgroundColor: 'primary' }

    return (
        <button 
          className={classes}
          disabled={disabled}
          style={touchStyles}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={handleClick}
          {...rest}>
            {children}
        </button>
    );
};

export default Button;