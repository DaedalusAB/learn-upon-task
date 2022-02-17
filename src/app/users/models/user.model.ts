//  I will only use some fields, and ignore others for now
export interface User {
    id: number;
    created_at: Date;
    email: string;
    first_name: string;
    last_name: string;
    user_type: UserType;
    enabled: boolean;
    //  TODO maybe add more fields later :shrug:
}

//  May be incomplete
export enum UserType {
    Manager = 'manager',
    Instructor = 'instructor',
    Admin = 'admin',
    Learner = 'learner',
}