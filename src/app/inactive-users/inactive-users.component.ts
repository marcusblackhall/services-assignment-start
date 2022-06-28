import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CountService } from '../services/count.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{

  users:string[] = [];

  constructor(private userService:UserService){

  }
  ngOnInit(): void {
    console.log(this.userService.getInActiveUsers());    
    this.users = this.userService.getInActiveUsers();
    
    
  }
  onSetToActive(id: number) {
    this.userService.makeUserActive(id);
   

  
  }
}
