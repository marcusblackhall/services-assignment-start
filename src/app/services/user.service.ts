import { EventEmitter, Injectable } from "@angular/core";
import { CountService } from "./count.service";

/**
 * service to make user active or inactive
 */
@Injectable()
export class UserService {

    activeUsers :string[] = ['Max', 'Anna'];
    inactiveUsers :string[] = ['Chris', 'Manu'];

    constructor(private cntService:CountService){

    }
    

    makeUserActive(id:number){
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.cntService.incrementInactive();       
    }

   

    makeUserInactive(id:number){
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.cntService.incrementActive();


    }


    getActiveUsers(){
        return this.activeUsers;
    }

    getInActiveUsers(){
        return this.inactiveUsers;
    }


}