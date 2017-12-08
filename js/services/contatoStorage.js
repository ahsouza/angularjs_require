/*global define*/
'use strict';

/**
 * Services that persists and retrieves TODOs from localStorage.
 */
 
define([
	'angular'
], function (angular) {
	var moduleName = 'ContatoStorageModule';
	angular
		.module(moduleName, [])
		.factory('contatoStorage', function () {
			var STORAGE_ID = 'contatos-angularjs-requirejs';

			return {
				get: function () {
					return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
				},

				put: function (contatos) {
					localStorage.setItem(STORAGE_ID, JSON.stringify(contatos));
				}
			};
		});
	return moduleName;
});
