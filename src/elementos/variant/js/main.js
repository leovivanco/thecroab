/* ==========================================================================
	 Test
 	========================================================================== */

// Componente que estrutura a aplicação
var idTeste = 'Teste_Name';
App.init = function() {
	try {
		// CRO_API.setTest(idTeste);
		// CRO_API.setVersion('Versão');
		//Inicializar
		dom.addCss(css);
		document.querySelector('html').classList.add('className');
		

	} catch (err) {
		// var urlPage = location.href;
		// CRO_API.sendError('Todos elementos necessários não foram encontrados \n URL:'+urlPage);
		console.error('[ERROR] ' + err.message);
	}
};

// Aguarda carregamento do jQuery para iniciar o teste
App.loaders.waitjQuery(idTeste, function (){
	App.init();
});

