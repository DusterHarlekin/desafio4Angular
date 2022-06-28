import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css'],
})
export class DescripcionComponent implements OnInit {

  id:any;
  producto:any;
  productos = [
    {
      nombre: "Tapa Radiador Toyota Fortuner 4runner Meru Prado Sin Empaque",
      id: "000",
      precio: 16,
      rating: 4,
      opiniones: 20,
      precioBs: 88.16,
      disponibles: 39,
      lugar:"Mun. Libertador (Sur), Distrito Capital",
      vendidos: 40,
      color: "",
      tipoEnvio: "Envio con costo",
      imagenUrl: ["https://http2.mlstatic.com/D_Q_NP_875831-MLV40146165480_122019-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_781189-MLV44388093865_122020-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_695576-MLV44388112365_122020-O.webp"]
    },
    {
      nombre: "Micrófono Balita Lavalier Cable 1,5m Tipo C Lightning 3.5 Mm",
      id: "001",
      precio: 5,
      rating: 3,
      opiniones: 11,
      precioBs: 27.55,
      disponibles: 469,
      lugar:"Mun. Libertador (Noreste), Distrito Capital",
      vendidos: 31,
      color: "Negro",
      tipoEnvio: "Envio gratis",
      imagenUrl: ["https://http2.mlstatic.com/D_Q_NP_846877-MLV48963549686_012022-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_727627-MLV50192394684_062022-O.webp"]
    },
    {
      nombre: "Equipo Sonido Carro Usb Auxiliar Bluetooth Usb Mp3",
      id: "002",
      precio: 25,
      rating: 4,
      opiniones: 5,
      precioBs: 137.75,
      disponibles: 141,
      lugar:"Mun. Chacao (sur), Distrito Capital",
      vendidos: 9,
      color: "",
      tipoEnvio: "Envio gratis",
      imagenUrl: ["https://http2.mlstatic.com/D_Q_NP_737843-MLV49911834407_052022-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_814839-MLV49911764850_052022-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_631996-MLV49794884000_042022-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_921921-MLV49794887982_042022-O.webp"]
    },
    {
      nombre: "Bajo 10  700w Powerbass",
      id: "003",
      precio: 49,
      rating: 5,
      opiniones: 1,
      precioBs: 468.35,
      disponibles: 3,
      lugar:"Valencia (Valencia), Carabobo",
      vendidos: 2,
      color: "",
      tipoEnvio: "Envio con costo",
      imagenUrl: ["https://http2.mlstatic.com/D_Q_NP_687612-MLV32619103141_102019-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_990212-MLV43866402132_102020-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_826149-MLV43866402131_102020-O.webp"]
    },
    {
      nombre: "Alfombras Weathertech Luv Dmax 2006-up Negras 1ra 2da Fila",
      id: "004",
      precio: 220,
      rating: 4,
      opiniones: 5,
      precioBs: 1212.20,
      disponibles: 1,
      lugar:"Barquisimeto, Lara",
      vendidos: 7,
      color: "",
      tipoEnvio: "Envio gratis",
      imagenUrl: ["https://http2.mlstatic.com/D_Q_NP_172021-MLV20698661429_052016-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_946618-MLV26973078149_032018-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_669503-MLV26973062950_032018-O.webp"]
    },

  ];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.producto = this.getProduct(this.productos);
  }

  getProduct(products: any[]):any{
    for (const p of products) {
      if(p.id == this.id)
        return p;
    }
  }

}
