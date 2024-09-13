
import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})
export class ApiUserDataService {
    
    getApiUsers() {
        return [
            {
                user: 'User 01',
                email: 'profesor1@colegio.com',
                password: '12345',
                rol: 'profesor'
            },
            {
                user: 'User 02',
                email: 'alumno1@colegio.com',
                password: '12345',
                rol: 'alumno'
            },
            {
                user: 'User 03',
                email: 'profesor2@colegio.com',
                password: '123',
                rol: 'profesor'
            },
            {
                user: 'User 04',
                email: 'alumno2@colegio.com',
                password: '123',
                rol: 'alumno'
            },
            {
                user: 'User 05',
                email: 'asd',
                password: 'asd',
                rol: 'profesor'
            }
        ];
    }
    
}