App.loaders = {
	waitForElement : function (item, callback, timeEnd) {

	 	(function(item, callback, timeEnd){

			timeEnd = timeEnd || 10000;

			function retorno () {

			 	if ( typeof item === 'string' ) {
					return $(item).length;
			 	} else {
					return item();
			 	}     
				 
			}


			var interval = setInterval(function () {

				if ( retorno() ) {

			 		clearInterval(interval);
			 		clearTimeout(timeout);

			 		if ( typeof callback === 'function' ) {

						callback();

			 		}

				}

		 	}, 200),
		 	timeout = setTimeout(function(){

				clearInterval(interval);
				clearTimeout(timeout);

		 	}, timeEnd);

	 	}(item, callback, timeEnd));

	},
	waitjQuery: function(idTeste, callback, int_timeout){
		var idTeste = idTeste || '';
		var interval = setInterval(function(){
			if (window.jQuery) {
					clearInterval(interval);
					clearTimeout(timeout);
					
					callback();
			};
		},50);

		var timeout = setTimeout(function(){
			clearInterval(interval);
			CRO_API.sendError('[PMWEB]:Error load jQuery');
			console.error('[PMWEB]:Error load jQuery in teste', idTeste);
		}, int_timeout || 10000);
	}
};