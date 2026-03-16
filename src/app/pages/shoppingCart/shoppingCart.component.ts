import { Component } from "@angular/core";
import { ProductListComponent } from "../../components/product-list-component/product-list-component.component";
import { CartSummaryComponent } from "../../components/cart-summary-component.component/cart-summary-component.component";

@Component({
    selector: 'shopping-cart',
    imports: [ProductListComponent, CartSummaryComponent],
    templateUrl: './shoppingCart.component.html'
})

export class ShoppingCartComponent {}