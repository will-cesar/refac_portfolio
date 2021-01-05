import { Component, OnInit } from '@angular/core';

import { SharedService } from '../../shared.service';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor(
    public readonly sharedService: SharedService
  ) { }

  ngOnInit(): void {
  }

}
