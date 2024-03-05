import { PropsWithChildren } from 'react';

interface Props {
    htmlFor?: string;
}

export default function FormLabel({
    htmlFor,
    children,
}: PropsWithChildren<Props>) {
    return (
        <label htmlFor={htmlFor} className="input-title">
            {children}
        </label>
    );
}
