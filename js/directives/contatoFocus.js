'use strict'

define([
	'angular'
], function (angular) {
	var moduleName = 'ContatoFocusDirective';
	angular
		.module(moduleName, [])
		.directive('contatoFocus', ['$timeout', function ($timeout) {
			return function (scope, elem, attrs) {
				scope.$watch(attrs.contatoFocus, function (newval) {
					if (newval) {
						$timeout(function () {
							elem[0].focus()
						}, 0, false)
					}
				})
			}
		}])
	return moduleName
})
