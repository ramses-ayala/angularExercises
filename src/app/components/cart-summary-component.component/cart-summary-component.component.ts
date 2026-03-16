import { Component, inject } from "@angular/core";
import { CartService } from "../../services/cart-service/cart-service.service";
import { IProduct } from "../../interfaces/product.interface";

@Component ({
    selector: 'cart-summary-component',
    templateUrl: './cart-summary-component.component.html'
})

export class CartSummaryComponent {
    private cartService = inject(CartService);
    isEmptyShoppingCart = this.cartService.isCartEmpty;
    totalItemsInCart = this.cartService.totalItems;
    total = this.cartService.totalPrice;
    cart = this.cartService.cartItems;

    addProduct (product: IProduct): void {
        this.cartService.addToCart(product);
    }

    deleteProduct (productId: number): void {
        this.cartService.handleDecrement(productId);
    }
}