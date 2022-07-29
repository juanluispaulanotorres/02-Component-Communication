import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnDestroy {

  constructor(private service: CommunicationService) { }

  private subject = new Subject<string>();

  mensaje: string = "";
  mensajeAlHijo: string = "";

  servicioPadre() {
    this.service.enviarAlHijo().subscribe(mensaje => {
      this.mensajeAlHijo = mensaje;
    });

    this.service.enviarAlHijo().next("parent using service");

  }

  inputPadre() {
    this.mensajeAlHijo = 'parent using input property';
  }

  observablePadre() {

    this.subject.subscribe(mensaje => {
      this.mensajeAlHijo = mensaje;
    });

    this.subject.next("parent using subject");
  }

  recibido(mensaje: string) {
    this.mensaje = mensaje;
  }

  ngOnDestroy(): void {
    this.subject.complete();
    this.subject.unsubscribe();
  }

}
