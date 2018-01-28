import { Component, OnInit } from '@angular/core';
import {Router}  from '@angular/router';
import {PubSubService} from '../../service/pub-sub/pub-sub.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  navVis;
  constructor(private router: Router,
  private pubsub:PubSubService) { }

  ngOnInit() {
    this.pubsub.$sub('navTrigger').subscribe(res=>{
      this.navVis = res;
    });
  }
  currRoute(){
    return " #212635 !important";
  }

}
