var projects=[{
	Title: "",
	Image: "",
	Description:"",
	link:""
}];


var projects=[{
	Title: "Pheno-Bot Read up",
	Image: "./img/project_pheno.jpg",
	Description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	link:"Pheno-Bot"
},
{
	Title: "Grad Bunker",
	Image: "./img/mkb.jpg",
	Description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	link:"Grad-bunker"
},
{
	Title: "Sureify test",
	Image: "./img/sureify.jpg",
	Description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	link:"Grad-bunker"
}
];
for(i in projects){
	var Parallax='<div class="bg__foo"></div><div class="bg__bar"><h1 class="title">'+projects[i].Title+'</h1><div class="row"><div class="col-md-offset-1 col-md-3 col-xs-6"><img src="'+projects[i].Image+'" class="img-responsive image"></div><div class="col-md-offset-1 col-md-6"><p class="Project_description">'+projects[i].Description+'</p></div><div class="col-md-offset-8 col-md-3 col-xs-10 col-xs-offset-2"><a href="/blog/'+projects[i].link+'" class="readMore  link_class">Read More</a><a href="/demo/'+projects[i].link+'" class="demo link_class">Demo </a><a href="https://github/Jeith3895/'+projects[i].link+'" class="code link link_class"> Code link</a></div></div></div>';
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