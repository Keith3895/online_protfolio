import { Component, OnInit } from '@angular/core';
import { ScrollToModule } from 'ng2-scroll-to-el';

@Component({
  selector: 'app-project-cude',
  templateUrl: './project-cude.component.html',
  styleUrls: ['./project-cude.component.css']
})
export class ProjectCudeComponent implements OnInit {
  rG = [
    { 
      status: false,
      description: "readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors" ,
      title:"pProject Title"
    },
    { 
      status: false,
      description: "test12" ,
      title:""
    },
    { 
      status: false,
      description: "" ,
      title:""
    },
    { 
      status: false,
      description: "" ,
      title:""
    },
    { 
      status: false,
      description: "" ,
      title:""
    },
    { 
      status: false,
      description: "" ,
      title:""
    }];
  curr = 0;
  interval;
  constructor() { }

  ngOnInit() {
    this.intervalSet();
    
  }
  changeCube(i){  
    clearInterval(this.interval);
    this.rG[this.curr].status = false;
    this.rG[i].status = true;
    this.curr = i;
    this.intervalSet();
  }
  intervalSet(){
    this.interval=setInterval(() => {
      let temp = Math.floor(Math.random() * 6);
      this.changeCube(temp);  
    }, 2000);
  }
}
