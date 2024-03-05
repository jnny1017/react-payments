import { ChangeEvent, FormEvent, useState } from 'react';

interface Props<T> {
    initialValues: T;
    onSubmit: (values: T) => void;
}

export default function useForm<T>({ initialValues, onSubmit }: Props<T>) {
    const [values, setValues] = useState<T>(initialValues);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const [category, key] = name.split('.');

        if (category && key) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            setValues((prev: any) => ({
                ...prev,
                [category]: {
                    ...prev[category],
                    [key]: value,
                },
            }));

            return;
        }

        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        onSubmit(values);
    };

    return {
        values,
        handleChange,
        handleSubmit,
    };
}
