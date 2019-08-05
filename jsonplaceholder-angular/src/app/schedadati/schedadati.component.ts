import {Component, Input, OnInit} from '@angular/core';
import { Location } from '@angular/common';

import { User} from '../interfaces/user';
import { CallService} from '../call.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-schedadati',
  templateUrl: './schedadati.component.html',
  styleUrls: ['./schedadati.component.css']
})
export class SchedadatiComponent implements OnInit {
  @Input() user: User;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private callService: CallService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getInformations();
    console.log(this.router.url)
  }
  getInformations(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.callService.getInformations(id)
      .subscribe(dato => this.user = dato);
  }

}
