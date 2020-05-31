import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  ngOnInit(): void {
    var map = L.map('map', {
      center: [40, 0],
      zoom: 3
    });

    var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>'
    }).addTo(map);

    let newControl = L.Control.extend({
      onAdd: () => {
        var img: any = L.DomUtil.create('img');

        img.src = '../assets/images/LeafletLogo.png';
        img.style.width = '200px';

        return img;
      },

      onRemove: () => {
        // Nothing to do here
      }
    });

    const waterMark = (opts: { position: L.ControlPosition }) => { return new newControl(opts) };
    waterMark({ position: 'bottomleft' }).addTo(map);

  }
}