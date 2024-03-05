import useForm from '../hooks/useform';
import { FormValuesType } from '../model/FormValuesType';
import CardForm from './CardForm';
import CardPreview from './CardPreview';

const initialState: FormValuesType = {
    cardNumber: {
        cardNumber1: '',
        cardNumber2: '',
        cardNumber3: '',
        cardNumber4: '',
    },
    expiryDate: {
        expiryMonth: '',
        expiryYear: '',
    },
    ownerName: '',
    securityCode: '',
    password: {
        password1: '',
        password2: '',
    },
};

export default function CardContainer() {
    const { values, handleChange, handleSubmit } = useForm({
        initialValues: initialState,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div>
            <CardPreview values={values} />
            <form onSubmit={handleSubmit}>
                <CardForm values={values} onChange={handleChange} />
                <div className="button-box">
                    <button type="submit">다음</button>
                </div>
            </form>
        </div>
    );
}
