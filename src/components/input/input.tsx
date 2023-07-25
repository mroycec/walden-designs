"use client"
import { useState, FocusEventHandler, ChangeEventHandler, InputHTMLAttributes } from 'react';

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
    name?: string;
    label?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    onFocus?: FocusEventHandler<HTMLInputElement>;
    disabled?: boolean;
    required?: boolean;
    error?: string;
    validated?: boolean;
};

const TextInput = ({
    name,
    label,
    value,
    onChange,
    onBlur,
    onFocus,
    disabled,
    required,
    error,
    validated,
    ...rest
}: TextInputProps) => {
    const [focused, setFocused] = useState(false);

    const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
        setFocused(true);
        if (onFocus) onFocus(e);
    };

    const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
        setFocused(false);
        if (onBlur) onBlur(e);
    };

    return (
        <div className="flex flex-col">
            {label && (
                <label
                    htmlFor="input"
                    className="mb-2 font-medium text-tint-900 dark:text-gray-300"
                >
                    {label}
                    {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <div className="relative">
                <input
                    value={value}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required={required}
                    disabled={disabled}
                    className={`
            w-full px-4 py-2 rounded-lg border ${focused
                        ? 'border-tint-700 focus:drop-shadow focus:outline-none placeholder-tint-300'
                            : error
                                ? 'border-red-500'
                                : 'border-tint-400 placeholder-tint-500'
                        } ${disabled
                            ? 'bg-gray-100 cursor-not-allowed text-gray-400'
                            : 'bg-tint-200 text-gray-800'
                        } ${validated
                            ? 'inner-shadow'
                            : ''
                        }
            `//dark:bg-tint-800 dark:text-tint-300 dark:border-tint-600
          }
                    {...rest}

                />
                {error && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg
                            className="w-6 h-6 text-red-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.5 7.5l-5 5 5 5-1.5 1.5-5-5-5 5-1.5-1.5 5-5-5-5L7.5 1.5l5 5 5-5 1.5 1.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                )}
            </div>
            {error && (
                <span className="mt-2 text-sm font-medium text-red-500">{error}</span>
            )}
        </div>
    );
};

export default TextInput;