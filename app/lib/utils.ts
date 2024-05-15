export const formatPrice = (price: number) => {
  return `$${price.toLocaleString('en', {
    useGrouping: false,
    minimumFractionDigits: 2,
  })}`;
};