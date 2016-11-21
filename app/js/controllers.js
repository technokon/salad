/**
 * Created by iakoupov on 2016-11-21.
 */


var controllers = angular.module('controllers',[]);

controllers.controller('saladController', SaladController);

SaladController.$inject = ['saladService'];

function SaladController(saladService) {
    
    var vm = this
    
    vm.title = 'Salads on today\'s spceial'
    
    vm.salads = saladService.getSalads()
    
}