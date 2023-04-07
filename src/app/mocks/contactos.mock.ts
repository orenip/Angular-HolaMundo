import { IContacto } from "../models/contacto.interface"; 

//Exportar una lista simulada de Contactos

export const CONTACTOS: IContacto[]=[
    {
        id: 0,
        nombre: 'Juan',
        apellidos: 'Garcia Lopez',
        email: 'juan@imagina.com',
        edad: 35,
    },
    {
        id: 1,
        nombre: 'Pepe',
        apellidos: 'Ros Carrillo',
        email: 'pepe@imagina.com',
        edad: 48,
    },
    {
        id: 2,
        nombre: 'María',
        apellidos: 'Sandoval Ruíz',
        email: 'maria@imagina.com',
        edad: 31,
    }
]
