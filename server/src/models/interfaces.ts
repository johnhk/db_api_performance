export interface Phonenumbers {
    description?: null | string;
    id?:          number;
    number?:      null | string;
    users?:       null | Users;
    [property: string]: any;
}

export interface Users {
    company?:       null | string;
    emailadresses?: Emailadresses[];
    id?:            number;
    name?:          null | string;
    note?:          null | string;
    phonenumbers?:  Phonenumbers[];
    surname?:       null | string;
    [property: string]: any;
}

export interface Emailadresses {
    email?: null | string;
    id?:    number;
    users?: null | Users;
    [property: string]: any;
}
