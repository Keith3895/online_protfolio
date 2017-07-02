


var profiles = [
{
	Link:" https://www.facebook.com/keith.franklin1",
	site:"facebook",
	name:"Keith Franklin"
},
{
	Link:"#",
	site:"skype",
	name:"Keith Franklin"
},
{
	Link:"https://github.com/Keith3895",
	site:"github",
	name:"Keith3895"
},
{
	Link:"https://www.linkedin.com/in/keith-franklin-04b57379/",
	site:"linkedin",
	name:"Keith Franklin"
},
{
	Link:"https://angel.co/keith-franklin-jathanna",
	site:"angellist",
	name:"Keith Franklin Jathanna"
},
{
	Link:"http://steamcommunity.com/id/keithfranklin/",
	site:"steam",
	name:"keithfranklin"
}];

for(i in profiles){
	var icons = '<a href="'+profiles[i].Link+'"><div class="circle-button"><i class="fa fa-'+profiles[i].site+'" aria-hidden="true"></i></div><div class="circle-text">&nbsp;'+profiles[i].name+'&nbsp;</div></a>';
	$('#lists').append(icons);
}

$('#rotate-key').on('click',function(){
	$('#card').toggleClass('flipped');
});