import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title: string = 'William Cesar - Portfólio';

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      { name: 'keywords', content: 'Portfólio, Website, Web, Site, Front-End, Dev' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'William Cesar' },
      { name: 'creator', content: 'William Cesar' },
      { name: 'date', content: '01-2021', scheme: 'MM-YYYY' },
      { name: 'description', content: 'William Cesar - Desenvolvedor Front-End' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'William Cesar - Desenvolvedor Front-End' },
      { property: 'og:image', content: '../assets/imgs/jpeg/bg-pc.jpeg' },
      { property: 'og:description', content: 'William Cesar - Desenvolvedor Front-End - Portfólio' },
      { property: 'og:url', content: 'https://refac-portfolio.netlify.app/' },
      { httpEquiv: 'content-language', content: 'pt-br' },
      { charset: 'UTF-8' },
    ]);
  }
}
