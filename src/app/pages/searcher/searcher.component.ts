import { Component, computed, signal } from "@angular/core";

interface IProduct {
    id: number,
    name: string,
    category: string,
    price: number,
    rating: number
}

@Component({
    selector: 'searcher',
    templateUrl: './searcher.component.html'
})

export class Searcher {
    readonly products: IProduct[] = [
        { id: 1, name: 'Laptop Pro', category: 'computers', price: 999, rating: 4.5 },
        { id: 2, name: 'Laptop Air', category: 'computers', price: 699, rating: 3.8 },
        { id: 3, name: 'Mechanical Keyboard', category: 'accessories', price: 79, rating: 4.2 },
        { id: 4, name: 'Wireless Mouse', category: 'accessories', price: 29, rating: 3.5 },
        { id: 5, name: 'Monitor 4K', category: 'monitors', price: 399, rating: 4.8 },
        { id: 6, name: 'Monitor HD', category: 'monitors', price: 199, rating: 4.0 },
        { id: 7, name: 'Headphones Pro', category: 'accessories', price: 149, rating: 4.6 },
        { id: 8, name: 'Webcam HD', category: 'accessories', price: 89, rating: 3.9 },
    ];

    searchTerm = signal("");
    selectedCategory = signal("");
    sortBy = signal("");

    filteredProducts = computed(() => {
        return this.products.filter(product => product.name.toLowerCase().includes(this.searchTerm().toLowerCase()))
        .filter(product => !this.selectedCategory() || product.category === this.selectedCategory())
        .sort((a, b) => 
            this.sortBy() === 'price' ? a.price - b.price 
            : this.sortBy() === 'rating' ? a.rating - b.rating 
            : 0
        );
    });
    totalFilteredResults = computed(() => this.filteredProducts().length)
}