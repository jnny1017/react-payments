import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export default function FormControl({ children }: Props) {
    return <div className="input-container">{children}</div>;
}
