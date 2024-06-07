import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Api } from './interfaz/api';
import { ServiciosService } from './recursos/servicios.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  providers: [ServiciosService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Deber';
  api: Api[] = [];
  constructor(private recursosService: ServiciosService) {
    recursosService.obtenerDatos().subscribe((respuesta:any) => {
      this.api = respuesta.data;
      console.log(this.api);
    })
  }
}
