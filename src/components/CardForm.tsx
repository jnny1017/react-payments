import { ChangeEvent } from 'react';

import { FormValuesType } from '../model/FormValuesType';
import FormControl from './ui/FormControl';
import FormLabel from './ui/FormLabel';
import TextField from './ui/TextField';

interface Props {
    values: FormValuesType;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function CardForm({ values, onChange }: Props) {
    const { ownerName } = values;

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event);
    };

    return (
        <>
            <FormControl>
                <FormLabel htmlFor="cardNumber1">카드 번호</FormLabel>
                <div className="input-box">
                    <TextField
                        name="cardNumber.cardNumber1"
                        validationRules={{
                            isNumeric: true,
                            maxLength: 4,
                        }}
                        onChange={handleInputChange}
                    />
                    <TextField
                        name="cardNumber.cardNumber2"
                        validationRules={{
                            isNumeric: true,
                            maxLength: 4,
                        }}
                        onChange={handleInputChange}
                    />
                    <TextField
                        type="password"
                        name="cardNumber.cardNumber3"
                        validationRules={{
                            isNumeric: true,
                            maxLength: 4,
                        }}
                        onChange={handleInputChange}
                    />
                    <TextField
                        type="password"
                        name="cardNumber.cardNumber4"
                        validationRules={{
                            isNumeric: true,
                            maxLength: 4,
                        }}
                        onChange={handleInputChange}
                    />
                </div>
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="expiryMonth">만료일</FormLabel>
                <div className="input-box w-50">
                    <TextField
                        name="expiryDate.expiryMonth"
                        placeholder="MM"
                        validationRules={{
                            isNumeric: true,
                            maxLength: 2,
                            minNumber: 1,
                            maxNumber: 12,
                        }}
                        onChange={handleInputChange}
                    />

                    <TextField
                        name="expiryDate.expiryYear"
                        placeholder="YY"
                        validationRules={{
                            isNumeric: true,
                            maxLength: 2,
                        }}
                        onChange={handleInputChange}
                    />
                </div>
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="ownerName">
                    카드 소유자 이름(선택)
                    <span>{ownerName.length}/30</span>
                </FormLabel>
                <TextField
                    name="ownerName"
                    validationRules={{
                        maxLength: 30,
                    }}
                    placeholder="카드에 표시된 이름과 동일하게 입력하세요."
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="securityCode">보안 코드(CVC/CVV)</FormLabel>
                <TextField
                    name="securityCode"
                    validationRules={{
                        isNumeric: true,
                        maxLength: 3,
                    }}
                    className="w-25"
                    onChange={handleInputChange}
                />
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="password1">카드 비밀번호</FormLabel>
                <TextField
                    type="password"
                    name="password.password1"
                    validationRules={{
                        isNumeric: true,
                        maxLength: 1,
                    }}
                    className="w-15"
                    onChange={handleInputChange}
                />
                <TextField
                    type="password"
                    name="password.password2"
                    validationRules={{
                        isNumeric: true,
                        maxLength: 1,
                    }}
                    className="w-15"
                    onChange={handleInputChange}
                />
                **
            </FormControl>
        </>
    );
}
