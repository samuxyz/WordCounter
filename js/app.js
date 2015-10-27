(function(){
	var app = angular.module('counter', []);
	app.controller('AlignController', function(){
		
		var align = "text-left";
		var characters = 0;
		var words = 0;
		
		this.getCharacters = function(){
			return characters;
		}
		this.getWords = function(){
			return words;
		}
		this.setAlign = function(value){
			align = value;
		}
		this.setClass = function(){
			return align;
		}
		//this.cancelText = function(){
			//$('#textarea').empty();
		//}
		$('#b').on("click", function(){
			$('#textarea').empty();
		});
		this.count = function(){
			
			characters = $('#textarea').val().length;
			var wordsArray = $('#textarea').val().split(' ');
			words = wordsArray.length;
		}
	});
	
})();