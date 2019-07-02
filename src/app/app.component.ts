import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice3';

  mensaje:string= "hello"; 

  rMessage($event){
    this.mensaje = $event;
  }

}
