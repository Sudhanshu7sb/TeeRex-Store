import { getProductsBySelectedPrice } from "../utils/getProductsBySelectedPrice";



export const getProductsByColor = (products, color) => {

    return (products?.filter(product => color.length > 0 ? color.includes(product.color) : products))
}


export const getProductsByGender = (products, gender) => {

    return (products?.filter(product => gender.length > 0 ? gender.includes(product.gender) : products))
}

export const getProductsByType = (products, type) => {

    return (products?.filter(product => type.length > 0 ? type.includes(product.type) : products))
}


export const getProductsByPrice = (products, price) => {

    return (products?.filter(product => price.length > 0 ? getProductsBySelectedPrice(product, price) : products))

};

export const searchedProducts = (products, searchText) => {
    return (products?.filter((prod) => prod.name.toLowerCase().includes(searchText) || prod.type.toLowerCase().includes(searchText) || prod.color.toLowerCase().includes(searchText)))
}
