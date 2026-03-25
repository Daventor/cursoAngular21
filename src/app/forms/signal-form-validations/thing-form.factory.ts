import { ThingFormModel } from "./thing-form.model";

export function createThingFormModel(data?: Partial<ThingFormModel>): ThingFormModel{

    return {
        email: '',
        name: '',
        checkName: false,
        age: 0,
        minClientsQty: 2,
        clientsQty: 0,
        password: '',
        confirmPassword: '',
        remarks: '',
        phone: '',
        zip:'',
        products: [],
        website: '',
        username: '',
        anotherUrl: '',
        checkDelay: false,
        delay: 0,
        ...data
    }

}