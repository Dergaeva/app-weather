import { Component, OnInit} from '@angular/core';
import { HttpService} from './service/http.service';
import { Weather } from './weather';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent implements OnInit {

  indicators: Weather[]=[];

  constructor(private httpService: HttpService){}

  ngOnInit(){
    this.httpService.postData().subscribe(data => this.indicators=data)

  };
}
