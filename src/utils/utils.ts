const formatCardNumber = (cardNumber: string): string => {
    const maskLength = Math.max(0, cardNumber.length - 8);
    const masked = cardNumber.slice(0, 8) + '*'.repeat(maskLength);

    return masked.replace(/(.{4})/g, '$1-').slice(0, -1);
};

export default formatCardNumber;
