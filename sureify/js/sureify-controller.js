var app = angular.module('coke-player',['ngRoute','indexedDB']);
var sug=["asdfasdf","seewewewe"];
app.config(function ($indexedDBProvider,$routeProvider) {
	$indexedDBProvider
		      .connection('myIndexedDB')
		      .upgradeDatabase(3, function(event, db, tx){
		        var objStore = db.createObjectStore('favsa', {keyPath: 'song'});
		    //     for(ch in str)
		        	// objStore.createIndex('song_idx', 'song', {unique: false});
		    })
		    .upgradeDatabase(4, function(event, db, tx){
		        var objStore = db.createObjectStore('download', {keyPath: 'song'});
		    //     for(ch in str)
		        	// objStore.createIndex('song_idx', 'song', {unique: false});
		    });
	// roter==============================
	$routeProvider
	.when('/',{
		templateUrl : './views/list.html'
	})
	.when('/Profile',{
		templateUrl: './views/activity.html'
	})
	.otherwise({
		template: "haven't made any thing for this route"
	});
});
app.controller('main', ['$scope', '$filter','$http','$rootScope','$indexedDB',  function ($scope, $filter,$http,$rootScope,$indexedDB) {
	$scope.down = function(){
		// console.log(as)
		for(i in $rootScope.asd )
        {
        	console.log($rootScope.asd[i].url +" == "+ music.src );
        	if($rootScope.asd[i].url == music.src ){
        		console.log($rootScope.asd[i]);
        		$indexedDB.openStore('download', function(store){
        			console.log($rootScope.asd[i]);
			  		store.insert($rootScope.asd[i])
			  	      .then(function(e){
			  	      	console.log(e);
			  	      });
			  	      store.getAll().then(function(song) {  
				    		console.log(song);
				    	});
			  	});
			  	break;
			}
        }	
	}
}]);
app.controller('list', ['$scope', '$filter','$http','$rootScope','$indexedDB',  function ($scope, $filter,$http,$rootScope,$indexedDB) {
    

    $scope.data = [];
    $http.get('http://starlord.hackerearth.com/sureify/cokestudio')
  	.success(function(response){
  		console.log(response[0]);
  		$scope.data =  response;	
  		$rootScope.asd = $scope.data;
  	});



  	$scope.playNow = function(str){
  		music.src=str;
  		document.getElementById('download').href=str;
  		pButton.click();
  		var favButton = document.getElementById('favButton'); // play button
  		if (favButton.classList.contains('like')) {
  			favButton.classList.remove('like');
  			favButton.classList.add('dislike');
  		}
  		$rootScope.asd = $scope.data;
  	}

    $scope.currentPage = 0;
    $scope.pageSize = 6;
    // $scope.data = [];
    $scope.q = '';
    // for(i in ){
    // 	$scope.data.push(i);
    // }
    $scope.getData = function () {
      // https://docs.angularjs.org/api/ng/filter/filter
      return $filter('filter')($scope.data, $scope.q)
    }
    
    $scope.numberOfPages=function(){
        return Math.ceil($scope.getData().length/$scope.pageSize);                
    }
    $scope.down = function(as){
		console.log(as);
		for(i in $rootScope.asd )
        {
        	console.log($rootScope.asd[i].url +" == "+ as );
        	if($rootScope.asd[i].url == as ){
        		console.log($rootScope.asd[i]);
        		$indexedDB.openStore('download', function(store){
        			console.log($rootScope.asd[i]);
			  		store.insert($rootScope.asd[i])
			  	      .then(function(e){
			  	      	console.log(e);
			  	      });
			  	      store.getAll().then(function(song) {  
				    		console.log(song);
				    	});
			  	});
			  	break;
			}
        }	
	}


}]);

//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});


app.controller('player', ['$scope', '$filter','$http','$rootScope','$indexedDB',  function ($scope, $filter,$http,$rootScope,$indexedDB) {


 $scope.down = function(as){
		for(i in $rootScope.asd )
        {
        	console.log($rootScope.asd[i].url +" == "+ music.src );
        	if($rootScope.asd[i].url == music.src ){
        		console.log($rootScope.asd[i]);
        		$indexedDB.openStore('download', function(store){
        			console.log($rootScope.asd[i]);
			  		store.insert($rootScope.asd[i])
			  	      .then(function(e){
			  	      	console.log(e);
			  	      });
			  	      store.getAll().then(function(song) {  
				    		console.log(song);
				    	});
			  	});
			  	break;
			}
        }	
	}



var favButton = document.getElementById('favButton'); // play button
favButton.addEventListener("click", like);
function like() {
    // start music
    if (favButton.classList.contains('like')) {
        // remove play, add pause
        favButton.className = "";
        favButton.className = "dislike";
        for(i in $rootScope.asd )
        {
        	console.log($rootScope.asd[i].url +" == "+ music.src );
        	if($rootScope.asd[i].url == music.src ){
        		console.log($rootScope.asd[i]);
        		$indexedDB.openStore('favsa', function(store){
        			console.log($rootScope.asd[i]);
			  		store.delete($rootScope.asd[i].song).then(function(){
				        // do something
				      });
			  	      store.getAll().then(function(song) {  
				    		console.log(song);
				    	});
			  	});
			  	break;
			}
        }
 

    } else { // pause music
        // remove pause, add play
        favButton.className = "";
        favButton.className = "like";
        for(i in $rootScope.asd )
        {
        	console.log($rootScope.asd[i].url +" == "+ music.src );
        	if($rootScope.asd[i].url == music.src ){
        		console.log($rootScope.asd[i]);
        		$indexedDB.openStore('favsa', function(store){
        			console.log($rootScope.asd[i]);
			  		store.insert($rootScope.asd[i])
			  	      .then(function(e){
			  	      	console.log(e);
			  	      });
			  	      store.getAll().then(function(song) {  
				    		console.log(song);
				    	});
			  	});
			  	break;
			}
        }
        // $rootScope.dataStored = {song: music.src} 
        
    }
    
}

}]);
app.controller('activity', ['$scope', '$filter','$http','$rootScope','$indexedDB',  function ($scope, $filter,$http,$rootScope,$indexedDB) {

	$scope.down = function(as){
		for(i in $rootScope.asd )
        {
        	console.log($rootScope.asd[i].url +" == "+ music.src );
        	if($rootScope.asd[i].url == music.src ){
        		console.log($rootScope.asd[i]);
        		$indexedDB.openStore('download', function(store){
        			console.log($rootScope.asd[i]);
			  		store.insert($rootScope.asd[i])
			  	      .then(function(e){
			  	      	console.log(e);
			  	      });
			  	      store.getAll().then(function(song) {  
				    		console.log(song);
				    	});
			  	});
			  	break;
			}
        }	
	}

	$scope.data=[];
	$indexedDB.openStore('favsa', function(store){
    	store.getAll().then(function(song) {  
    		console.log(song);
    		$scope.data= song;
    	});
  	});

  	$scope.data1=[];
	$indexedDB.openStore('download', function(store){
    	store.getAll().then(function(song) {  
    		console.log(song);
    		$scope.data1= song;
    	});
  	});
  	$scope.playNow = function(str){
  		music.src=str;
  		document.getElementById('download').href=str;
  		pButton.click();
  		var favButton = document.getElementById('favButton'); // play button
  		if (favButton.classList.contains('like')) {
  			favButton.classList.remove('like');
  			favButton.classList.add('dislike');
  		}
  		$rootScope.asd = $scope.data;
  	}
}]);