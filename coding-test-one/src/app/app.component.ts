

import { Component, OnInit } from '@angular/core';
import { TitleService } from './service/title.service';
import { Title } from './model/title.model';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  public titles: Title[]=[];
  form= this.fb.group({
    title:[''],
    firstName:[''],
    secondName:['', Validators.required],
    termsAccepted:[''],
  });
  public errorClass: string | undefined;
  constructor(private titleService: TitleService, private fb: FormBuilder) { }

  ngOnInit() {
    this.titleService.getTitles().subscribe((response) => {
      this.titles = response.filter((r)=> r.name != "!").sort((a ,b)=> a.name.localeCompare(b.name));
    });
  }

  onSubmit():void{
    let result = this.form.value;
    if(this.form.status == 'VALID'){
      console.log("result form:", result);
    }
    
  }

}
