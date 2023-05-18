import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import { CliServiceService } from '../../services/cli-service.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit  {
  tableau!:{titre : string, code : string, description : string}[];
  constructor(private cliService : CliServiceService){}

  ngOnInit(): void {
    this.cliService.getTable();
    this.tableau = this.cliService.getTable();

  }
   scrollToTab() {
    const tabElement = document.getElementById('tab');
    tabElement?.scrollIntoView({ behavior: 'smooth' });
  }




}
