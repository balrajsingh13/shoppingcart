import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataservice : DataService) { }

  ngOnInit() {
  }

  // this.dataservice.onSelect(category: String).subscribe{
  //   (response)=>{  
  //         console.log(response);
  //     //this.dataservice.onSelect(category)
  //     }
  // }

  items = [];

  selectCategory(categ : String){

    this.dataservice.setCategory(categ);

      // this.items =  this.dataservice.getCategory();
    // console.log(this.items);

    // this.items.forEach(element => {
    //   console.log(element.name);
    // });
    
  }



}
