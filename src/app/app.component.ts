import { Component, OnInit } from '@angular/core';
import { CountService } from './services/count.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
 
  

  constructor(private cntService:CountService){
  }

 
  ngOnInit(): void {
   
  }

 
}
