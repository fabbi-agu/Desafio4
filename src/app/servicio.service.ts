import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor() { }

  gethamburguesas(){
    return [
        { 
            nombre: "Cheese Kid",
            desc: "Medallón de Carne, Cheddar y Mayonesa CNB. Acompañada de Papas Fritas y Salsa Extra a eleccion.",
            precio: "$3.800,00"
        },
        { 
            nombre: "Vegeta",
            desc: "Medallón Vegetariano (Porotos negros, Tomate secos y especias, CONTIENE PRODUCTO LÁCTEO), Cheddar, Lechuga, Tomate y Mayonesa CNB. Acompañada de Papas Fritas y Salsa Extra a elección.",
            precio: "$3.900,00"
        },
        { 
            nombre: "Garlic",
            desc: "Medallon de Carne, Queso Tomme, Cheddar, Cebolla crispy, Mayo CNB y Emulsion de ajo.",
            precio: "$3.900,00"
        },
        { 
            nombre: "Huevo",
            desc: "Medallón de Carne, Applewood Bacon, Cheddar, y Huevo. Acompañada de Papas Fritas y Salsa Extra a eleccion.",
            precio: "$2.900,00"
        },
        { 
            nombre: "Nugget Burger",
            desc: "Nuggets de pollo, reducción estilo teriyaki, Cheddar, pepinillos y Salsa Big Cheese`N",
            precio: "$4.100,00"
        },
    ]
}
}

