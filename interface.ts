interface Product {
    id:number
    name:string
    unitPrice:number
}

function save(product:Product):void {
    console.log(`${product.name} saved!`)
}

save({id:1, name:"Laptop", unitPrice:17000})