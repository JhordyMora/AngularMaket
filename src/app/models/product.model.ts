export interface Category{
    id: string;
    name: string;
}
export interface product{
    id: string,
    title: string,
    price: number,
    description: string,
    images: string[],
    category: Category;
}