import { Component, OnInit } from "@angular/core";
import { RapidapiService } from "src/app/servise/rapidapi.service";

@Component({
  selector: "app-rapidapi",
  templateUrl: "./rapidapi.component.html",
  styleUrls: ["./rapidapi.component.css"],
})
export class RapidapiComponent implements OnInit {

  news = [];
  quotes = [];
  matches = [];
  typeMatches;
  seriesMatches;


  // Inject the rapid api service
  constructor(private rapidApiService: RapidapiService) {}

 
  ngOnInit() {           
    this.rapidApiService.getDataYahooFinance().subscribe((res) => {
      this.news = res.news;
      // console.log('news Array: --> ',this.news);
      this.quotes = res.quotes;
      // console.log('quotes Array: --> ',this.quotes);
      // console.log('getting data from rapid API ', res);
    });


    //    this.rapidApiService.getCricBuzData().subscribe((res: any) => {
    //    this.matches = res;
    //    console.log("getting data from getCricBuzData API ", this.matches);
    //    this.typeMatches = res.typeMatches;
    //    console.log('TypeMatches', this.typeMatches);
    //    for (const m in this.typeMatches) {
    //     this.typeMatches = m.seriesMatches
          
    //     }
    //    }
    //   this.seriesMatches = this.typeMatches.seriesMatches;
    //   console.log('seriesMatches', this.seriesMatches);
      
    // });
  }
}
