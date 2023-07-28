import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'text';
    size?: 'sm' | 'md' | 'lg' | 'scale';
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    className = '',
    variant = 'primary',
    size = 'md',
    disabled = false,
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
            colorClasses = 'border border-gray-500 hover:border-blue-500 text-gray-500 hover:text-blue-500';
            break;
        case 'text':
            colorClasses = 'text-gray-500 hover:text-blue-500';
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

    return (
        <button className={classes} disabled={disabled} {...rest}>
            {children}
        </button>
    );
};

export default Button;