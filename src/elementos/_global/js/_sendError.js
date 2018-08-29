/* eslint-disable */

// CRO Alert API 
var CRO_API = (function () {
	var test = '';
	var version = '';
	var sendError = function(error){
		try {
			var endpoint = "https://ws-cro.pmweb.com.br/api/cro_failed_experiment"
			var params = "test=" + encodeURIComponent(test);
			params += "&version=" + encodeURIComponent(version);
			params += "&type=" + encodeURIComponent(error);
			params += "&token=" + encodeURIComponent("298d0aed4e33d8220b0c1216f6aea2022b79ad8c14");
			if (typeof navigator.userAgent !== "undefined") {
			params += "&browser=" + encodeURIComponent(navigator.userAgent)
		}
		var xhr = new XMLHttpRequest();
		xhr.open('GET', endpoint+'?'+params);
		xhr.send(null);
		} catch (e) {
			console.log("Erro no chamado à API");
		}
	};
	var setTest = function(name){
		test = name;
	};
	var setVersion = function(version_name){
		version = version_name;
	};
  return {
    sendError: sendError,
    setTest: setTest,
    setVersion: setVersion
  };
})();