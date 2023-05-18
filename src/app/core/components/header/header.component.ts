import { Component, OnInit } from '@angular/core';
import { ComponentCommunicationService } from '../../services/component-communication-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuMobile = false;
  constructor(private componentCommunicationService: ComponentCommunicationService) { }

  ngOnInit(): void {
    localStorage.setItem('lang', "fr");
  }

  setLang(lang: string) {
    localStorage.setItem('lang', lang);
    this.componentCommunicationService.triggerComponentInit();
  }
}
