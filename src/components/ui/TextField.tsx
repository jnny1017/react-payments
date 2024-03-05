import { ChangeEvent, HTMLInputTypeAttribute, useState } from 'react';

interface ValidationRules {
    isNumeric?: boolean;
    maxLength?: number;
    minNumber?: number;
    maxNumber?: number;
}

interface Props {
    type?: HTMLInputTypeAttribute;
    name: string;
    required?: boolean;
    placeholder?: string;
    variant?: 'filled' | 'standard';
    className?: string;
    validationRules?: ValidationRules;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function TextField({
    type = 'text',
    name,
    required = false,
    placeholder,
    variant = 'filled',
    className,
    validationRules,
    onChange,
}: Props) {
    const [inputValue, setInputValue] = useState('');

    const isValidInput = (value: string) => {
        const numberValue = Number(value);
        const pattern = /^[0-9]*$/;

        if (!validationRules || value === '') {
            return true;
        }

        if (validationRules.isNumeric && !pattern.test(value)) {
            return false;
        }

        if (
            validationRules.minNumber &&
            numberValue < validationRules.minNumber
        ) {
            return false;
        }

        if (
            validationRules.maxNumber &&
            numberValue > validationRules.maxNumber
        ) {
            return false;
        }

        if (
            validationRules.maxLength !== undefined &&
            value.length > validationRules.maxLength
        ) {
            return false;
        }

        return true;
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        if (isValidInput(value)) {
            setInputValue(value);
            onChange(event);
        }
    };

    return (
        <>
            <input
                type={type}
                id={name}
                name={name}
                required={required}
                placeholder={placeholder}
                value={inputValue}
                onChange={handleChange}
                className={`${className} input-basic ${
                    variant === 'standard' ? 'input-line' : ''
                }`}
            />
        </>
    );
}
