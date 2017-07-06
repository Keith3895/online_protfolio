var projects=[{
	Title: "",
	Image: "",
	Description:"",
	link:""
}];


var projects=[{
	Title: "Pheno-Bot Read up",
	Image: "./img/project_pheno.jpg",
	Description:"A static website which was created to have the information on how to build a Chatbot in one place. The information that was recorded on the website was taken from the different documentations of the framworks that were used to make the bot.",
	link:"Pheno-Bot"
},
{
	Title: "Grad Bunker",
	Image: "./img/mkb.jpg",
	Description:"This was a project <thought of > by Mohan(MKB) as his final year project. GradBunker is a dynamic web application that capacitates "
		+"disparate activities and functionalities of an organisation"
		+"that are inclined towards improving the ease of access of dejectedly demanded information."
		+"GradBunker provides rarefied modules such as the placement module, "
		+"library module, result module etc."
		+"The preeminent objective of GradBunker is to slash down the amount of "
		+"human effort, time consumption and paper work involved in carrying out "
		+"the above mentioned activities without automation or computarization. ",
	link:"Grad-bunker"
},
{
	Title: "Sureify test",
	Image: "./img/sureify.jpg",
	Description:"This was a website developed for a compitition hosted by the website: hackerearth.com. The problem statment for this compitition was : 'Develop frontend for a music streaming service along with a player for said service. This website was made funtional using AngularJS 1.x. The styleing and the markup were written from scratch.'",
	link:"sureify"
},
{
	Title: "Phenobot: A Chatbot for Event Management using Bot Framework and LUIS.",
	Image: "./img/chat1.jpg",
	Description:"This project was developed as a final year project submitions along with my team of ****** . The chatbot was created to respond to particular commands and questions related to event Management, particularly related to the website festmamu.tk. The bot was beveloped on NodeJS, using the bot framework and LUIS as its NLP.",
	link:"Pheno_bot"
},
{
	Title: "Resume-old: www.keithfranklin.xyz",
	Image: "./img/keith.jpg",
	Description:"This website was developed when I was Still in college. The websites intended perpuse was to be my Resume. the website was developed on NodeJS for the backend. In the frontend the bootstrap framework for CSS was used. Along with jQuery, chartJS and WaypointJS as the other javascript framework.",
	link:"Resume"
},
{
	Title: "Receipt Printing Java appication",
	Image: "./img/1.jpg",
	Description:"A JAVA application which reads all the account informations from a excel file and prints the corresponding receipts.",
	link:"Resume"
},
{
	Title: "FestMaMu ",
	Image: "./img/festmamu.jpg",
	Description:"A dynamic website for a event service aggrigator. The project is still under development. It was built with NodeJS for the server-side scripting. API's and SDK's like PassportJS, AWS-mullter, Node-mailer, mongoose etc. were used.",
	link:"Pheno-Bot"
}
];


for(i in projects){
	var Parallax='<div class="bg__foo"></div><div class="bg__bar"><h1 class="title">'+projects[i].Title+'</h1><div class="row"><div class="col-md-offset-1 col-md-3 col-xs-6"><img src="'+projects[i].Image+'" class="img-responsive image"></div><div class="col-md-offset-1 col-md-6"><p class="Project_description">'+projects[i].Description+'</p></div><div class="col-md-offset-8 col-md-3 col-xs-10 col-xs-offset-2"><a href="/blog/'+projects[i].link+'" class="readMore  link_class">Read More</a><a href="/demo/'+projects[i].link+'" class="demo link_class">Demo </a><a href="https://github.com/Keith3895/'+projects[i].link+'" class="code link link_class"> Code link</a></div></div></div>';
	$('.prallax').append(Parallax);
}
// $('.prallax').append('<div class="bg__foo_full">foo</div>');


$( document ).ready(function() {      
    var is_mobile = false;

    if( $('#mob').css('display')=='none') {
        is_mobile = true;       
    }

    // now i can use is_mobile to run javascript conditionally

    if (is_mobile == true) {
        //Conditional script here
        $('img').parent().css({'float':'right'});
        

        
    }
 });