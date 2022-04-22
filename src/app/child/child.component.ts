import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent {

  constructor(private service: CommunicationService) { }

  @Input() mensaje: string = "";

  @Output() emisor = new EventEmitter<string>();
  mensajeEmitido: string = "child using output event";

  servicioHijo() {
    this.emisor.emit(this.service.enviarAlPadre());
  }

  outputPadre() {
    this.emisor.emit(this.mensajeEmitido);
  }

  observableHijo() {
    this.service.sendFromChild()
    .subscribe( mensajeHijo => {
      this.emisor.emit(mensajeHijo);
    })
  }
}
