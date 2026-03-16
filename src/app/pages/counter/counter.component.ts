import { Component, computed, signal } from "@angular/core";

@Component ({
    selector: 'counter-component',
    templateUrl: './counter.component.html'
})

export class CounterComponent {
    counter = signal(0);
    isNegative = computed(() => this.counter() < 0);
    history = signal<number[]>([]);

    handleIncrement() {
        const newValue = this.counter() + 1;
        // this.counter.set(prevValue => prevValue + 1);
        this.counter.set(newValue);
        // this.history.update(prev => [...prev, newValue].slice(-5)); // this.counter()
        this.updateSignal(newValue);
    }

    handleDecrement() {
        const newValue = this.counter() - 1;
        this.counter.set(newValue);
        // this.history.update(prev => [...prev, newValue].slice(-5));
        this.updateSignal(newValue);
    }

    updateSignal(newValue: number) {
        this.history.update(prev => [...prev, newValue].slice(-5));
    }
}