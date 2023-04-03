export interface Category{
    id: string;
    name: string;
}
export interface product{
    id: number,
    title: string,
    price: number,
    description: string,
    images: string[],
    category: Category;
}