import { Component, OnInit } from '@angular/core';
import { itemsNavbar } from '../../types/types';

@Component({
  selector: 'commons-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit{
  items?: itemsNavbar[];

  ngOnInit(): void {
    this.items = [
      {
        title: "Inicio",
        url: "#",
      },
      {
        title: "Acerca de",
        url: "#",
      },
      {
        title: "Conocimientos",
        url: "#",
      },
      {
        title: "Proyectos",
        url: "#",
      },
      {
        title: "Contacto",
        url: "#",
      },
    ];
  }
}
