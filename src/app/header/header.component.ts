import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  busqueda: string = "";
  productos = [
    {
      nombre: "Tapa Radiador Toyota Fortuner 4runner Meru Prado Sin Empaque",
      id: "000",
      precio: 16,
      tipoEnvio: "Envio con costo",
      imagenUrl: "https://http2.mlstatic.com/D_Q_NP_875831-MLV40146165480_122019-AB.webp"
    },
    {
      nombre: "Micrófono Balita Lavalier Cable 1,5m Tipo C Lightning 3.5 Mm",
      id: "001",
      precio: 5,
      tipoEnvio: "Envio gratis",
      imagenUrl: "https://http2.mlstatic.com/D_Q_NP_846877-MLV48963549686_012022-AB.webp"
    },
    {
      nombre: "Equipo Sonido Carro Usb Auxiliar Bluetooth Usb Mp3",
      id: "002",
      precio: 25,
      tipoEnvio: "Envio gratis",
      imagenUrl: "https://http2.mlstatic.com/D_Q_NP_737843-MLV49911834407_052022-AB.webp"
    },
    {
      nombre: "Bajo 10  700w Powerbass",
      id: "003",
      precio: 49,
      tipoEnvio: "Envio con costo",
      imagenUrl: "https://http2.mlstatic.com/D_Q_NP_687612-MLV32619103141_102019-AB.webp"
    },
    {
      nombre: "Alfombras Weathertech Luv Dmax 2006-up Negras 1ra 2da Fila",
      id: "004",
      precio: 220,
      tipoEnvio: "Envio gratis",
      imagenUrl: "https://http2.mlstatic.com/D_Q_NP_172021-MLV20698661429_052016-AB.webp"
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
