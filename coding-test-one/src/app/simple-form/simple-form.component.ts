import { Component, OnInit } from '@angular/core';
import { TitleService } from '../service/title.service';
import { Title } from '../model/title.model';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})

export class SimpleFormComponent implements OnInit {

  public titles: Title[]=[];

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {

    this.titleService.getTitles().subscribe((response) => {
      this.titles = response
    })
  }

}
