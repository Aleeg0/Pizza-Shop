export interface IPizza {
    id: number,
    title: string,
    imgURL: string,
    description: string,
    types: string[],
    sizes: number[],
    price: number[],
    category: number,
    rating: number
}