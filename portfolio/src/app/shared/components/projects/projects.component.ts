import { Component, OnInit } from '@angular/core';

import { IProject } from '../../models/projects.model';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: IProject[] = [
    { imgUrl: '../../../../assets/imgs/jpeg/site-unidas.JPG', imgAlt: 'site-unidas.jpg', name: 'Unidas', link: 'https://www.unidas.com.br' },
    { imgUrl: '../../../../assets/imgs/jpeg/unidas-livre.JPG', imgAlt: 'unidas-livre.jpg', name: 'Unidas Livre', link: 'https://livre.unidas.com.br' },
    { imgUrl: '../../../../assets/imgs/jpeg/loopster.JPG', imgAlt: 'loopster.jpg', name: 'Loopster', link: 'https://loopster.com.br' },
    { imgUrl: '../../../../assets/imgs/jpeg/vegmag.JPG', imgAlt: 'loopster.jpg', name: 'VegMag', link: 'https://vegmag.com.br' },
    { imgUrl: '../../../../assets/imgs/jpeg/ausnutria.JPG', imgAlt: 'ausnutria.jpg', name: 'Ausnutria', link: 'https://www.ausnutria.com.br' },
    { imgUrl: '../../../../assets/imgs/jpeg/frontrow.JPG', imgAlt: 'frontrow.jpg', name: 'Front Row', link: 'https://frontrow.com.br' },
    { imgUrl: '../../../../assets/imgs/jpeg/zissou.JPG', imgAlt: 'zissou.jpg', name: 'Zissou', link: 'https://www.zissou.com.br' },
    { imgUrl: '../../../../assets/imgs/jpeg/mofficer.JPG', imgAlt: 'mofficer.jpg', name: 'M.Officer', link: 'https://mofficer.com.br' },
    { imgUrl: '../../../../assets/imgs/jpeg/thelemonator.JPG', imgAlt: 'thelemonator.jpg', name: 'The Lemonator', link: 'http://thelemonator.com.br/site' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
