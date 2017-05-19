var appX = angular.module('mainApp',[]);

var api_key = 'AIzaSyBGiV6RzyhH_wd8i8Tta4RIuvDoZ_a7VQU';

var cx = '006904221468637411825:5puag5ixszi';

appX.controller('app',function($scope,$http,$compile){

	$scope.searchButton = function() {

			$http.get('https://www.googleapis.com/customsearch/v1?key='+api_key+'&cx='+cx+'&q='+$scope.search).then(function(response){
				
				var object = [];
				var object1 = [];
			

				object = response.data;
				object1 = object.items;
		
				
				for(var i = 0 ; i < object1.length ; i++){

				angular.element(document.getElementById('urls')).append($compile('<li><a href ="' + object1[i].link + '">' + object1[i].link + '</a></li>')($scope));
				} 
			
			});
		};
});		