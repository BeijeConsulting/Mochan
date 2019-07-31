import { Component, OnInit } from '@angular/core';
import OlMap from 'ol/Map';
import OlXYZ from 'ol/source/XYZ';
import OlTileLayer from 'ol/layer/Tile';
import OlView from 'ol/View';
import { fromLonLat } from 'ol/proj';
import { Input } from '@angular/core'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
@Input() latitude
@Input() longitude 

  constructor() { }

  map: OlMap;
  source: OlXYZ;
  layer: OlTileLayer;
  view: OlView;



  ngOnInit() {
    this.source = new OlXYZ({
      url: 'http://tile.osm.org/{z}/{x}/{y}.png'
    });

    this.layer = new OlTileLayer({
      source: this.source
    });

    this.latitude = parseFloat(this.latitude)
    this.longitude = parseFloat(this.longitude)

    this.view = new OlView({
      center: fromLonLat([this.latitude, this.longitude]),
      zoom: 4
    });

    this.map = new OlMap({
      target: 'map',
      layers: [this.layer],
      view: this.view
    });
  }
}




