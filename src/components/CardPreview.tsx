import { FormValuesType } from '../model/FormValuesType';
import formatCardNumber from '../utils/utils';

interface Props {
    values: FormValuesType;
}

export default function CardPreview({ values }: Props) {
    const {
        cardNumber,
        ownerName,
        expiryDate: { expiryMonth, expiryYear },
    } = values;

    const concatenatedValues = Object.values(cardNumber).join('');

    return (
        <div className="card-box">
            <div className="empty-card">
                <div className="card-top"></div>
                <div className="card-middle">
                    <div className="small-card__chip"></div>
                </div>
                <div className="card-bottom">
                    <div className="card-bottom__number">
                        <span className="card-text">
                            {formatCardNumber(concatenatedValues)}
                        </span>
                    </div>
                    <div className="card-bottom__info">
                        <span className="card-text">{ownerName || 'NAME'}</span>
                        <span className="card-text">
                            {expiryMonth || 'MM'} / {expiryYear || 'YY'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
