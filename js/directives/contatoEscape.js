'use strict'

define([
	'angular'
], function (angular) {
	var moduleName = 'ContatoEscapeDirective'
	angular
		.module(moduleName, [])
		.directive('contatoEscape', function () {
			var ESCAPE_KEY = 27

			return function (scope, elem, attrs) {
				elem.bind('keydown', function (event) {
					if (event.keyCode === ESCAPE_KEY) {
						scope.$apply(attrs.contatoEscape)
					}
				})

				scope.$on('$destroy', function () {
					elem.unbind('keydown')
				})
			}
		})
	return moduleName
})
