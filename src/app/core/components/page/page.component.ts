import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CliServiceService } from '../../services/cli-service.service';
import { TranslationPipe } from '../../pipe/translation.pipe';
import { HttpClient } from '@angular/common/http';
import { LocalizedTablePipe } from '../../pipe/localized-table.service';
import { ComponentCommunicationService } from '../../services/component-communication-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  tableau!: { title: string, code: string, description: string }[];
  tableauOriginal!: { title: string, code: string, description: string }[];
  title!: { title: string, texte: string[] }[];
  jsonData!: any;
  lang = localStorage.getItem('lang');
  isSectionVisible = false;
  filtre="";

  @ViewChild('tab') tabElement!: ElementRef;

  constructor(
    private cliService: CliServiceService,
    private http: HttpClient,
    private componentCommunicationService: ComponentCommunicationService,
    private activatedRoute : ActivatedRoute
  ) {
    this.componentCommunicationService.componentInit$.subscribe(() => {
      this.onInitFromHeader();
    });
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang');
    this.initializeData();

}

  initializeData(): void {
    let sujet = this.activatedRoute.snapshot.url[0].path;
    this.http.get(`../../assets/textes/${sujet}.json`).subscribe(data => {
      this.jsonData = data;
      this.tableau = this.jsonData.table[this.lang || 'fr'];
      this.tableauOriginal = this.jsonData.table[this.lang || 'fr'];

    });
  }

  scrollToTab(): void {
    const tabElement = document.getElementById('tab');
    tabElement?.scrollIntoView({ behavior: 'smooth' });
  }

  onInitFromHeader(): void {
    this.lang = localStorage.getItem('lang');
    this.initializeData();
  }
  trierTableau() {
    this.tableau = this.tableauOriginal.filter(item => {
      // Vérifie si le titre de l'élément contient la valeur de filtre
      return item.title.toLowerCase().includes(this.filtre.toLowerCase());
    });
  }

}
