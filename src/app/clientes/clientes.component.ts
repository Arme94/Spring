import { ClienteService } from './cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];  
  constructor(private clienteservice: ClienteService) { }

  ngOnInit(): void {
    this.clienteservice.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }

}
