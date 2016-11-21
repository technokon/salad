/**
 * Created by iakoupov on 2016-11-21.
 */

var services = angular.module('services',[]);

services.factory('saladService', [function () {
    
    function getSalads() {
        return [
            {
                title: 'Greeks',
                cost: 2.99
            },
            {
                title: 'Cesar',
                cost: 3.99
            },
            {
                title: 'Mango',
                cost: 5.99
            }
        ]
    }
    
    return {
        getSalads: getSalads
    }
}]);