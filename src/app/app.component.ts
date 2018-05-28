import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
data:any;
  constructor(private http:HttpClient){
    let repsonseData:any;
    //https://api.myjson.com/bins/yutzd   -Works fine 
    //assets/sidebar.json                 -Not working
    this.http.get('assets/data/sidebar.json').subscribe(res=>{
repsonseData=res;
    },erro=>{
console.log('error occured.');
    },()=>{
      this.data=repsonseData;
    })
  }
}

