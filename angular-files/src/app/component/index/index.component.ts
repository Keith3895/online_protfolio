import { Component, OnInit } from '@angular/core';
// import * as TagCanvas from 'cloud';
declare var TagCanvas: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  languages = ['Angular','Python','Haskel','Node.JS','HTML','CSS','JavaScript','JQuery','Angular 1.x','R','ChartJS','WordPress','Node','Bootstrap','Ionic','Java','BotBuilder','Passport','TypeScript','jBPM','git'];
  constructor() { }
  ngAfterViewInit(){
    try { 
      console.log("here");
      var options = { 
        textColour: 'red', 
        textHeight: 25, 
        outlineMethod: 'colour', 
        outlineColour: '#ffffee', 
        outlineOffset: 0, 
        depth: 0.97, 
        minBrightness: 0.2,
        maxSpeed:.04,
        shape: 'sphere',
        shuffleTags: true,
        zoomMin:.7,
        txtOpt:true,
        txtScale:1,
        textFont: 'Oswald',
        shadowBlur: 0,
        clickToFront:.9,
        lock:'xy',
        wheelZoom: false,
        animTiming: 'Smooth'
      };
      TagCanvas.Start('myCanvas','',options); 
      TagCanvas.SetSpeed('myCanvas', [-0.440, 0.360]);
    } catch(e) 
    { // something went wrong, hide the canvas container 
      document.getElementById('myCanvasContainer').style.display = 'none'; 
    } 
  }
  ngOnInit() {
    
  }

}
