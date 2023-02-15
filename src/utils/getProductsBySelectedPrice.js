export const getProductsBySelectedPrice = ( product, price) => {

    if (price.includes("450") && product.price > 450) {
        return product;

    } else if (price.includes("251-450") && (product.price >= 251 && product.price <= 450)) {
        return product
    } else if (price.includes("0-250") && (product.price > 0 && product.price <= 250)) {
        return product
    } else return

}