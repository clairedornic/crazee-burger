export function formatPrice(priceToFormat: number) {
  // @TODO: perhaps change this to if(!price) return 0
  if (!priceToFormat) return "0,00 €";
  const price: number = replaceFrenchCommaWithDot(priceToFormat);

  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price);
  return formattedPrice;
}

export function replaceFrenchCommaWithDot(price: string | number) {
  if (typeof price === "string") price = parseFloat(price.replace(",", "."));
  return price;
}
