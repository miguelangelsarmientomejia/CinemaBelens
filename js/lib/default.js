$(document).ready(function(){
		
	var _URL = "https://api.themoviedb.org/3";
	var _imgUrl = "https://image.tmdb.org/t/p/";
	var _imgSize = "w185";

	$.fn.RequestSendApi = function(URL, METODO) {
 		$.ajax({
	            url: URL ,
	            dataType: 'jsonp',
	            success: function(data) {
	            	console.log(data);
	            	if (METODO =="person")
	            		$(this).createHtmlPerson(data);
	            	else if (METODO =="movie")
	            		$(this).createHtmlMovie(data);
				}
		});
    };

	$.fn.createHtmlMovie = function(data) {
	   $contentList = $('#contentBody');
       $contentList.html('');
       data.results.forEach(function(movie) {
	       if(movie.poster_path != null){
				var $itemContainer = $('<div class="col-sm-6 col-lg-3"></div>');
	          	$item = $('<div></div>');
	      		$item.append($('<img>').attr('src', _imgUrl+_imgSize+movie.poster_path).attr('class', 'poster').attr('itemId', movie.id));
				$item.append($('<div class="mt-2"><b>'+movie.original_title+'</b></div>'));
	    		$item.appendTo($itemContainer);
	        }
	        $('.poster').off('click').on('click',function(){
	           $(this).getItemDetailMovie($(this).attr('itemId'));
	        });
	        $contentList.append($itemContainer);
    	});
    };

    $.fn.createHtmlPerson = function(data) {
	   $contentList = $('#contentBody');
       $contentList.html('');
       data.results.forEach(function(movie) {
	       if(movie.profile_path != null){
				var $itemContainer = $('<div class="col-sm-6 col-lg-3"></div>');
	          	$item = $('<div></div>');
	      		$item.append($('<img>').attr('src', _imgUrl+_imgSize+movie.profile_path).attr('class', 'poster').attr('itemId', movie.id));
				$item.append($('<div class="mt-2"><b>'+movie.name+'</b></div>'));
	    		$item.appendTo($itemContainer);
	        }
	        $('.poster').off('click').on('click',function(){
	          $(this).getItemDetailPerson($(this).attr('itemId'));
	        });
	        $contentList.append($itemContainer);
    	});
    }; 

    $.fn.SetParamUrl = function(SearchString) {
		let _api_key = $("#api_key_cinema").val();
		let _Metodo = $("#MetodoApi").val();
		let _Accion = "/search";

		if (_Metodo !="" &&  _Metodo != undefined ){
			let _URLAPI =_URL + _Accion + "/" +_Metodo + "?api_key=" + _api_key + '&query='+SearchString
			$(this).RequestSendApi(_URLAPI, _Metodo);
		} else if (_SearchString ==""){
			$('#contentBody').html('');
		}
    }; 

	$("#search_button").click(function() {
		let _SearchString = $("#search_text").val().trim();
		if ( _SearchString !="" )
			$(this).SetParamUrl(_SearchString);
		else if (_SearchString =="")
			$('#contentBody').html('');
	});

	$("#search_text").keyup(function () {
		let _SearchString = $('#search_text').val().trim();	    
	    if (_SearchString !="" && _SearchString.length >= 3)
			$(this).SetParamUrl(_SearchString);
	    else if (_SearchString =="")
			$('#contentBody').html('');
	});

 	$.fn.getItemDetailMovie = function(itemId) {
 		 
	  		let _api_key = $("#api_key_cinema").val();

		  	$.ajax({
		  		url:_URL+"/movie/"+itemId+"?api_key=" +_api_key,
		  		dataType: 'jsonp'
		  	}).done(function(data){
		      
		      var add = $(location).attr('href');
		      console.log("history pushStae href: " + add);
		      imgSize = 'w342';
		      $content = $('#contentBody');

		      $content.html('');
		      $itemRow1 = $('<div class="row">');
		      $itemLeft = $('<div class="col-sm-4 col-md-3">');
		      $itemImg = $('<img>').attr('src', _imgUrl+_imgSize+data.poster_path).attr('class', 'img-responsive').attr('itemId', data.id);
		      $itemLeft.append($itemImg);

		      $itemRight= $('<div class="col-sm-7 col-md-8">');
		      $itemRightRow1 = $('<div class="row">');
		      $itemRightRow1.append($('<h2>'+ data.title + '</h2>'));

		      $itemRightRow2 = $('<div class="row">');
		      $itemRightRow2.append($('<div class="col-sm-2 col-md-2"><i class="fa fa-star" aria-hidden="true">   ' + data.vote_average + '/10 </i>'));
		      $itemRightRow2.append($('<div class="col-sm-2 col-md-2"><i class="fa fa-heart" aria-hidden="true">   ' + data.vote_count + ' votes </i>'));
		      $itemRightRow2.append($('<div class="col-sm-2 col-md-2">').text(data.release_date.substr(0,4)));
		      
		      $itemRightRow3 = $('<div class="row">');
		      $itemRightRow3.append($('<h4> Overview </h4>'));
		      $itemRightRow3.append($('<p></p>').text(data.overview));

		      $itemRight.append($itemRightRow1,$itemRightRow2,$itemRightRow3);

		      $itemRow1.append($itemLeft,$itemRight);		   
		      $content.append($itemRow1);

		    }).fail(function(jqxhr, textStatus, error){
		  		console.log("getItemDetailMovie ajax error: " + textStatus + ", " +error);
		  	});      
    }; 

 	$.fn.getItemDetailPerson = function(itemId) {     

	  		let _api_key = $("#api_key_cinema").val();

		  	$.ajax({
		  		url:_URL+"/person/"+itemId+"?api_key=" +_api_key,
		  		dataType: 'jsonp'
		  	}).done(function(data){
		      
		      var add = $(location).attr('href');
		      console.log("history pushStae href: " + add);
		      imgSize = 'w342';
		      $content = $('#contentBody');

		      $content.html('');
		      $itemRow1 = $('<div class="row">');
		      $itemLeft = $('<div class="col-sm-4 col-md-3">');
		      $itemImg = $('<img>').attr('src', _imgUrl+_imgSize+data.profile_path).attr('class', 'img-responsive').attr('itemId', data.id);
		      $itemLeft.append($itemImg);

		      $itemRight= $('<div class="col-sm-7 col-md-8">');
		      $itemRightRow1 = $('<div class="row">');
		      $itemRightRow1.append($('<h2>'+ data.name + '</h2>'));

		      $itemRightRow2 = $('<div class="row">');		
		      $itemRightRow2.append($('<h4> Date of birth </h4>'));      
		      $itemRightRow2.append($('<div class="col-sm-2 col-md-2"><i class="fa fa-star" aria-hidden="true">   ' + data.birthday + '</i>'));
		      
		      $itemRightRow3 = $('<div class="row">');
		      $itemRightRow3.append($('<h4> Biography </h4>'));
		      $itemRightRow3.append($('<p></p>').text(data.biography));
		 		      
		      $itemRight.append($itemRightRow1,$itemRightRow2,$itemRightRow3);
		      

		      $itemRow1.append($itemLeft,$itemRight);		   
		      $content.append($itemRow1);

		    }).fail(function(jqxhr, textStatus, error){
		  		console.log("getItemDetailPerson ajax error: " + textStatus + ", " +error);
		  	});      
    }; 

});