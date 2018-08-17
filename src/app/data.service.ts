import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

   fruit = [
    {
        "name":"Apple",
        "category":"Fruit",
        "price":100,
        "quantity":0,

    },
    {
        "name":"Mango",
        "category":"Fruit",
        "price":50,
        "quantity":0,

    },
    {
        "name":"Banana",
        "category":"Fruit",
        "price":30,
        "quantity":0,

    },
    {
        "name":"Papaya",
        "category":"Fruit",
        "price":35,
        "quantity":0,

    },
    {
        "name":"Grapes",
        "category":"Fruit",
        "price":45,
        "quantity":0,

    },
    {
        "name":"Pomegranate",
        "category":"Fruit",
        "price":50,
        "quantity":0,

    },
    {
        "name":"Plum",
        "category":"Fruit",
        "price":30,
        "quantity":0,

    },
    {
        "name":"Cherry",
        "category":"Fruit",
        "price":35,
        "quantity":0,

    },
    {
        "name":"Guava",
        "category":"Fruit",
        "price":40,
        "quantity":0,

    },
    {
        "name":"Melon",
        "category":"Fruit",
        "price":50,
        "quantity":0,

    },
];

 vegetables = [
    {
        "name":"Ladyfinger",
        "category":"Vegetable",
        "price":100,
        "quantity":0,

    },
    {
        "name":"Potato",
        "category":"Vegetable",
        "price":50,
        "quantity":0,

    },
    {
        "name":"Tomato",
        "category":"Vegetable",
        "price":30,
        "quantity":0,

    },
    {
        "name":"Onion",
        "category":"Vegetable",
        "price":35,
        "quantity":0,

    },
    {
        "name":"Garlic",
        "category":"Vegetable",
        "price":45,
        "quantity":0,

    },
    {
        "name":"Ginger",
        "category":"Vegetable",
        "price":50,
        "quantity":0,

    },
    {
        "name":"Cauliflower",
        "category":"Vegetable",
        "price":30,
        "quantity":0,

    },
    {
        "name":"Lettuce",
        "category":"Vegetable",
        "price":35,
        "quantity":0,

    },
    {
        "name":"Brocolli",
        "category":"Vegetable",
        "price":40,
        "quantity":0,

    },
    {
        "name":"Capsicum",
        "category":"Vegetable",
        "price":50,
        "quantity":0,

    },
];

    category ;

    setCategory(cate : String){
        if(cate == 'fruit')
           { this.category = this.fruit; 
            //console.log(cate);     
        }
        else
        if(cate == 'vegetables')
           { this.category = this.vegetables; 
            //console.log(cate);
        }
    }

    getCategory(){
        return this.category.slice();     //here slice() will return the copy of array.
    }

}
