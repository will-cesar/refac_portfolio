import { Component, OnInit } from '@angular/core';

import { SharedService } from '../../shared.service';

@Component({
  selector: 'primary-section',
  templateUrl: './primary-section.component.html',
  styleUrls: ['./primary-section.component.scss']
})
export class PrimarySectionComponent implements OnInit {

  constructor(
    public readonly sharedService: SharedService
  ) { }

  ngOnInit(): void {
  }
}
