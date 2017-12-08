/*global require*/
'use strict';

require([
	'angular'
], function (angular) {
	require([
		'controllers/contato', 
		'directives/contatoFocus', 
		'directives/contatoEscape',
		'services/contatoStorage'
	], function (contatoCtrl, contatoFocusDir, contatoEscapeDir, contatoStorageSrv) {
		angular
			.module('contatomvc', [contatoFocusDir, contatoEscapeDir, contatoStorageSrv])
			.controller('ContatoController', contatoCtrl);
		angular.bootstrap(document, ['contatomvc']);			
	});	
});
