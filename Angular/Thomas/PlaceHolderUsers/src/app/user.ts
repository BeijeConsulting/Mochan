import { address } from './address'
import { company } from './company';

export class user {
    id: number;
    name: string;
    username: string;
    email: string;
    address: address;
    phone: string;
    website: string;
    company: company;
}