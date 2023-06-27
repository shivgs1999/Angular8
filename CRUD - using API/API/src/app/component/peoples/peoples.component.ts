import { Component, OnInit } from "@angular/core";
import { PeopleService } from "src/app/servise/people.service";

@Component({
  selector: "app-peoples",
  templateUrl: "./peoples.component.html",
  styleUrls: ["./peoples.component.css"],
})
export class PeoplesComponent implements OnInit {
  array:any[]=[];
  constructor(private apiservice:PeopleService) { }

  ngOnInit() {
    
    this.apiservice.getapi().subscribe(res =>{
         console.log(`api data`,res.results);
        this.array=res.results;
    }
    )} 
       
     }
