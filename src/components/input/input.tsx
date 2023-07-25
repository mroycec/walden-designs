"use client"
import { useState, FocusEventHandler, ChangeEventHandler, HTMLAttributes, SetStateAction } from 'react';

type TextInputProps = HTMLAttributes<HTMLInputElement> & {
    name?: string;
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    onFocus?: FocusEventHandler<HTMLInputElement>;
    disabled?: boolean;
    required?: boolean;
    error?: string;
    validated?: boolean;
    type?: 'text' | 'password' | 'email' | 'number' | 'date'
    form?: string;
};

const TextInput = ({
    name,
    label,
    placeholder,
    value,
    onChange,
    onBlur,
    onFocus,
    disabled,
    required,
    error,
    validated,
    form,
    ...rest
}: TextInputProps) => {
    const [data, setData] = useState(value || '');
    const [focused, setFocused] = useState(false);

    const handleChange = (onChange) ? onChange : (event: { target: { value: SetStateAction<string>; }; }) => {
        setData(event.target.value);
    };

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
                    type="text"
                    form={form}
                    id='input'
                    name={name}
                    placeholder={placeholder}
                    value={data}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    disabled={disabled}
                    required={required}
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