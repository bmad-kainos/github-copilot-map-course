/**
 * Exercise 5 — Customisation starter.
 *
 * This project intentionally has NO custom instructions of its own.
 * You will create `.github/copilot-instructions.md` at the repo root,
 * then add a feature below and observe how the instructions shape
 * Copilot's suggestions.
 */

export interface Product {
  name: string;
  priceInPence: number;
}

export function totalPrice(products: Product[]): number {
  return products.reduce((sum, p) => sum + p.priceInPence, 0);
}

// TODO: add a formatCurrency function
// Once you've written .github/copilot-instructions.md, use Copilot to
// implement `formatCurrency(pence: number): string` that returns a GBP
// string like "£12.34". Notice how your instructions influence the result.

if (import.meta.url === `file://${process.argv[1]}`) {
  const basket: Product[] = [
    { name: "Sticker pack", priceInPence: 499 },
    { name: "Mug", priceInPence: 1299 },
  ];
  console.log("Total (pence):", totalPrice(basket));
}
