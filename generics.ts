function value(x: number): number {
    return x;
}

let sayi = value(2);

function value2<T>(x: T): T {
    return x;
}

let sayi2 = value2<number>(20);
let sehir = value2<string>("Baku");
console.log(sehir);