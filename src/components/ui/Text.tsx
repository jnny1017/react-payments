import { ReactNode } from 'react';

interface Props {
    as: 'h1' | 'p' | 'span';
    children: ReactNode;
}

export default function Text({ as: Component, children }: Props) {
    return (
        <Component className={Component === 'h1' ? 'page-title' : 'title'}>
            {children}
        </Component>
    );
}
