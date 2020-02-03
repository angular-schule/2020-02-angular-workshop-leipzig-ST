export * from './bar';

export class Customer {
    
    constructor(public id: number) {}

    fooBar() {
        setTimeout(() => {
            console.log('Die ID ist', this.id);
        }, 2000);
    }
}

export const foo = 5;