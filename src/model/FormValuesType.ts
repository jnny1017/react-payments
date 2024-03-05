interface FormValuesType {
    cardNumber: {
        cardNumber1: string;
        cardNumber2: string;
        cardNumber3: string;
        cardNumber4: string;
    };
    expiryDate: {
        expiryMonth: string;
        expiryYear: string;
    };
    ownerName: string;
    securityCode: string;
    password: {
        password1: string;
        password2: string;
    };
}

export type { FormValuesType };
