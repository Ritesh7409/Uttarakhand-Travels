import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { Destination} from './destination';
import {DestinationServiceService } from './destination-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public des=[];
  error:{};
  constructor( private destinationServiceService:DestinationServiceService,private route:ActivatedRoute,private router:Router ) { }

  ngOnInit() {

    this.destinationServiceService.get_des().subscribe(
      (data:Destination[])=>this.des=data,
      error=>this.error=error
      
    );
   // console.log(this.des);

  }

}
