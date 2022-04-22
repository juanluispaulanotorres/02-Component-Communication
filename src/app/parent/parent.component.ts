import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent {

  constructor(private service: CommunicationService) { }

  mensaje: string = "";
  mensajeAlHijo: string = "";


  servicioPadre() {
    this.mensajeAlHijo = this.service.enviarAlHijo();
  }

  inputPadre() {
    this.mensajeAlHijo = 'parent using input property';
  }

  observablePadre() {
     this.service.sendFromPadre()
    .subscribe( mensajePadre => {
      this.mensajeAlHijo = mensajePadre;
    })
  }

  recibido(mensaje: string) {
    this.mensaje = mensaje;
  }

}
