import { Product } from "./types";

export function checkIsSelected(selectedPrpoduct: Product[], product: Product) {
    return selectedPrpoduct.some(item => item.id === product.id);
}

export function formatPrice(price: number){
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2     
    });
    return formatter.format(price);
}