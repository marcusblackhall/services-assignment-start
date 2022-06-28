import { OnInit } from "@angular/core";
import { UserService } from "./user.service";


export class CountService {

    cntInactive: number = 0;
    cntActive: number = 0;

    constructor(){
    }

    incrementInactive(){
        this.cntInactive = this.cntInactive + 1;
        console.log("no. active now " + this.cntInactive);
    }

    incrementActive(){
        this.cntInactive = this.cntInactive + 1;
        console.log("no. active now " + this.cntInactive);
    }

    getInactive() {
        return this.cntInactive   ;
    }

    getActive() {
        return this.cntActive;
    }

  
}