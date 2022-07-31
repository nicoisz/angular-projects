

import { Component, OnInit } from '@angular/core';
import { TitleService } from './service/title.service';
import { Title } from './model/title.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  public titles: Title[]=[];
  form= this.fb.group({
    title:[''],
    firstName:[''],
    secondName:[''],
    termsAccepted:[''],
  });
  
  constructor(private titleService: TitleService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.titleService.getTitles().subscribe((response) => {
      this.titles = response.filter((r)=> r.name != "!").sort((a ,b)=> a.name.localeCompare(b.name));
    })

    
    
  }

  onSubmit():void{
    let result = this.form.value;
    console.log("result form:", result);
  }

}
