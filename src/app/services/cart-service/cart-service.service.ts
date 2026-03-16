import { computed, Injectable, signal } from "@angular/core";
import { IProduct } from "../../interfaces/product.interface";

@Injectable ({ providedIn: 'root' })

export class CartService {
    private cart = signal<Record<number, IProduct>>({});
    public myCart = this.cart.asReadonly();

    public totalItems = computed(() => { 
        return Object.values(this.cart()).reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0) 
    });

    public cartItems = computed(() => Object.values(this.cart()));

    public totalPrice = computed(() => {
        return Object.values(this.cart()).reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity), 0);
    });

    public isCartEmpty = computed(() => {
        return Object.keys(this.cart()).length === 0
    });

    addToCart(product: IProduct) {
        this.cart.update(prev => {
            const existProduct = prev[product.id];
            if (existProduct) {
                return { ...prev, [product.id]: { ...existProduct, quantity: existProduct.quantity + 1 } }
            } else {
                return { ...prev, [product.id]: { ...product, quantity: 1 } };
            }
        });
    }

    handleDecrement(productId: number) {
        this.cart.update(prev => {
            const existProduct = prev[productId];
            if (existProduct && existProduct.quantity > 1) {
                return { ...prev, [productId]: { ...existProduct, quantity: existProduct.quantity - 1 } };
            } else {
               const { [productId]: removed, ...rest } = prev;
               return rest;
            }
        })
    }
}