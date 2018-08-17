import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  items = [];
  
  constructor(private dataservice : DataService){
    
  }


  ngOnInit(){
  this.items = dataservice.category;
    console.log(this.items);
  }

}
