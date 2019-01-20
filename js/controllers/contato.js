'use strict'

define([
	'angular'
], function (angular) {
	return ['$scope', '$location', 'contatoStorage', 'filterFilter',
		function ($scope, $location, contatoStorage, filterFilter) {
			var contatos = $scope.contatos = contatoStorage.get()

			$scope.novoContato = ''
			$scope.editarContato = null

			$scope.$watch('contatos', function () {
				$scope.remainingCount = filterFilter(contatos, { completed: false }).length
				$scope.doneCount = contatos.length - $scope.remainingCount
				$scope.allChecked = !$scope.remainingCount
				contatoStorage.put(contatos)
			}, true)

			if ($location.path() === '') {
				$location.path('/')
			}
			$scope.location = $location
			$scope.$watch('location.path()', function (path) {
				$scope.statusFilter = (path === '/active') ?
					{ completed: false } : (path === '/completed') ?
					{ completed: true } : null
			})
			$scope.addContato = function () {
				var novoContato = $scope.novoContato.trim()
				if (!novoContato.length) {
					return
				}
				contatos.push({
					nome: novoContato,
					completed: false
				})
				$scope.novoContato = ''
			}
			$scope.editContato = function (contato) {
				$scope.editedContato = contato
				$scope.originalContato = angular.copy(contato)
			}
			$scope.doneEditing = function (contato) {
				$scope.editedContato = null
				contato.title = contato.title.trim()

				if (!contato.title) {
					$scope.removeContato(contato)
				}
			}
			$scope.revertEditing = function (contato) {
				contatos[contatos.indexOf(contato)] = $scope.originalContato
				$scope.doneEditing($scope.originalContato)
			}
			$scope.removeContato = function (contato) {
				contatos.splice(contatos.indexOf(contato), 1)
			}
			$scope.clearDoneContatos = function () {
				$scope.contatos = contatos = contatos.filter(function (val) {
					return !val.completed
				})
			}
			$scope.markAll = function (done) {
				contatos.forEach(function (contato) {
					contato.completed = done
				})
			}
		}
	]
})