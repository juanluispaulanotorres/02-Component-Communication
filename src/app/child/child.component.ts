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

  // servicioHijo() {
  //   this.emisor.emit(this.service.enviarAlPadre());
  // }

  // outputHijo() {
  //   this.emisor.emit("child using output event");
  // }

  observableHijo() {
    this.service.sendSubject()
    .subscribe( mensaje => {
      this.emisor.emit(mensaje);
    })

    this.service.sendSubject().next("CHILD USING SUBJECT");
  }
}
