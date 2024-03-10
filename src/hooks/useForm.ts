import { ChangeEvent, useState } from 'react';


export function useForm<T>(initState: T) {
    const [formValues, setformValues] = useState(initState);

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
        const { name, value } = target;

        setformValues({
            ...formValues,
            [name]: value,
        })
    };

    return {
        handleChange,
        formValues,
    }
};