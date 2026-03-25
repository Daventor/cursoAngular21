interface ProductModel{
    name: string;
    description: string;
}

export interface ThingFormModel{
    email: string;
    name: string;
    checkName: boolean;
    age: number;
    minClientsQty: number,
    clientsQty: number;
    password: string;
    confirmPassword: string;
    remarks: string;
    phone: string;
    zip: string;
    products: ProductModel[];
    website: string;
    username: string;
    anotherUrl: string;
    checkDelay: boolean,
    delay: number
}