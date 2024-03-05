import { ReactNode } from 'react';

interface Props {
    type?: 'button' | 'submit';
    children: ReactNode;
}

export default function Button({ type = 'button', children }: Props) {
    return <button type={type}>{children}</button>;
}
