export const total = (items) => {
  let totalAmount=0;
  items.forEach((item) => {
    totalAmount += item.amount;
  });
  return totalAmount;
};
