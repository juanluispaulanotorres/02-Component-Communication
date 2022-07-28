import { Component, OnInit } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
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

  // servicioPadre() {
  //   this.mensajeAlHijo = this.service.enviarAlHijo();
  // }

  // inputPadre() {
  //   this.mensajeAlHijo = 'parent using input property';
  // }

  observablePadre() {
    this.service.sendSubject().subscribe(mensaje => {
      this.mensajeAlHijo = mensaje;
    }) 

    this.service.sendSubject().next("PARENT USING SUBJECT");
  }

  recibido(mensaje: string) {
    this.mensaje = mensaje;
  }

}
