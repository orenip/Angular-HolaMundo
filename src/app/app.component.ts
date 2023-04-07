import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HolaMundo';
  usuario= '@orenip';

/*Esta función se ejecutará cuando en el hijo (saludo Component) se pulse un botón*/
recibirMensajedelHijo(evento: string){
  alert(evento);
}

}
