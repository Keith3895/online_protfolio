import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [{
    Title: "Pheno-Bot Read up",
    Image: "/assets/project_pheno.jpg",
    Description: "A static website which was created to have the information on how to build a Chatbot in one place. The information that was recorded on the website was taken from the different documentations of the framworks that were used to make the bot.",
    link: "Pheno-Bot",
    link_a: "/demo/Pheno-Bot"
  },
  {
    Title: "Grad Bunker",
    Image: "/assets/mkb.jpg",
    Description: "This was a project <thought of > by Mohan(MKB) as his final year project. GradBunker is a dynamic web application that capacitates "
      + "disparate activities and functionalities of an organisation"
      + "that are inclined towards improving the ease of access of dejectedly demanded information."
      + "GradBunker provides rarefied modules such as the placement module, "
      + "library module, result module etc."
      + "The preeminent objective of GradBunker is to slash down the amount of "
      + "human effort, time consumption and paper work involved in carrying out "
      + "the above mentioned activities without automation or computarization. ",
    link: "Grad-bunker",
    link_a: "https://intense-tor-77138.herokuapp.com/"
  },
  {
    Title: "Grad Bunker App",
    Image: "/assets/mkbApp.jpg",
    Description: "This was an App developed on top of the pre-exsistng data models of the GradBunker website. The application was developed using the Ionic Framework. ",
    link: "gradbunkerApp",
    link_a: "/demo"
  },
  {
    Title: "Sureify test",
    Image: "/assets/sureify.jpg",
    Description: "This was a website developed for a compitition hosted by the website: hackerearth.com. The problem statment for this compitition was : 'Develop frontend for a music streaming service along with a player for said service. This website was made funtional using AngularJS 1.x. The styleing and the markup were written from scratch.'",
    link: "sureify",
    link_a: "/demo/sureify"
  },
  {
    Title: "Phenobot: A Chatbot for Event Management using Bot Framework and LUIS.",
    Image: "/assets/chat1.jpg",
    Description: "This project was developed as a final year project submitions along with my team. The chatbot was created to respond to particular commands and questions related to event Management, particularly related to the website festmamu.tk. The bot was beveloped on NodeJS, using the bot framework and LUIS as its NLP.",
    link: "Pheno_bot",
    link_a: "Pheno-Bot"
  },
  {
    Title: "Resume-old: www.keithfranklin.xyz",
    Image: "/assets/keith.jpg",
    Description: "This website was developed when I was Still in college. The websites intended perpuse was to be my Resume. the website was developed on NodeJS for the backend. In the frontend the bootstrap framework for CSS was used. Along with jQuery, chartJS and WaypointJS as the other javascript framework.",
    link: "Resume",
    link_a: "https://immense-basin-20434.herokuapp.com/"
  },
  {
    Title: "Receipt Printing Java appication",
    Image: "/assets/1.jpg",
    Description: "A JAVA application which reads all the account informations from a excel file and prints the corresponding receipts.",
    link: "Resume",
    link_a: "Pheno-Bot"
  },
  {
    Title: "FestMaMu ",
    Image: "/assets/festmamu.jpg",
    Description: "A dynamic website for a event service aggrigator. The project is still under development. It was built with NodeJS for the server-side scripting. API's and SDK's like PassportJS, AWS-mullter, Node-mailer, mongoose etc. were used.",
    link: "festmamu",
    link_a: "http://www.festmamu.tk/"
  }
  ];
  constructor() { }

  ngOnInit() {
  }

}
