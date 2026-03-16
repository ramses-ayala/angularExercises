import { Component, inject } from "@angular/core";
import { IProduct } from "../../interfaces/product.interface";
import { CartService } from "../../services/cart-service/cart-service.service";


@Component ({
    selector: 'product-list-component',
    templateUrl: './product-list-component.component.html'
})

export class ProductListComponent {
    readonly products: IProduct[] = [
        { id: 1, name: 'Laptop', price: 999, quantity: 0 },
        { id: 2, name: 'Mouse', price: 29, quantity: 0 },
        { id: 3, name: 'Keyboard', price: 79, quantity: 0 }
    ];
    public cartService = inject(CartService);
}