let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "sprinkles", price: 1.00},
    {product: "Bubble Gum", price: .50},
    {product: "Baba Dudu", price: 6.00},
    {product: "Bobo", price: 3.06},
    {product: "Milo Cube", price: 4.79},
    {product: "Pongila", price: 10.00},
    {product: "Sugar rolls", price: 2.00},
    // TODO:
    //
    ];

let products289 = searchProductsByPriceExact(products, 2.89);
let productsless = searchProductsByPriceLessOrEqual(products, 2.89);
console.log(products);
console.log("only 2.89");
console.log(products289);
console.log("less or equal");
console.log(productsless);



function searchProductsByPriceExact(products ,price){
    let productsMatchimg = [];
    let productNum = products.length;
    for(let i= 0 ; i < productNum; i++){
        if (products[i].price ==price){
            productsMatchimg.push(products[i]);
        }

    }
    return productsMatchimg

}

function searchProductsByPriceLessOrEqual(procuts, price) {
    let productsMatchimg = [];
    let productNum = products.length;
    for(let i= 0 ; i < productNum; i++){
        if (products[i].price <= price){
            productsMatchimg.push(products[i]);
        }

    }
    return productsMatchimg
 
}