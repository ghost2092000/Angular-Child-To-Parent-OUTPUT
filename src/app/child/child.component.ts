import { Component, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.mEvent.emit(this.mensaje)

  }

  mensaje:string= 'Hola Mundo!' + 9;

  @Output() mEvent = new EventEmitter<string>();

  






}
