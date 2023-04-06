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
    taxes?: number,
}
export interface ProductDTO extends Omit<product, "id"|"category">{
    categoryId: number;
}

export interface UpdateDTO extends Partial<ProductDTO>{}