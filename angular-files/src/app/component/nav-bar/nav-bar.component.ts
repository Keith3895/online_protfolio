import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  cd_headerStatus = false;
  
  list=['Home','Projects','Blog','About','contact'];
  cd_selectedStatus = [];
  current=0;
  constructor() { }

  ngOnInit() {
    this.cd_selectedStatus = this.list.map(el=>{
      return false;
    });
    this.cd_selectedStatus[this.current] = true;
  }
  calculate(){
    // console.log(this.cd_selectedStatus);
    let tempVal = this.current *200;
    return tempVal+'px';
  }
  select(i){
    // this.current = i;
    if(this.current != i){
      this.cd_selectedStatus[this.current] = false;
      this.current = i;
      this.cd_selectedStatus[this.current] = true;
    }else{
      this.cd_selectedStatus[this.current] = true;
    }
  }
}
