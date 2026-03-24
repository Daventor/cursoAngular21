import { Component } from '@angular/core';

@Component({
  selector: 'app-class-flow',
  imports: [],
  templateUrl: './class-flow.html',
  styleUrl: './class-flow.css',
})
export class ClassFlow {
  name = 'David';

  listProducts = [
    {
      id: 1,
      name: 'Ordenador',
      price: '1200€'
    },
    {
      id: 2,
      name: 'Impresora',
      price: '250€'
    },
    {
      id: 3,
      name: 'Ratón',
      price: '12€'
    }
  ]

  emptyList = [];

  role = 'user';

  /**
  
  x = (x++, x)

   */
}
