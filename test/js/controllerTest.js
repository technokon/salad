/**
 * Created by iakoupov on 2016-11-21.
 */


describe('testing salads controller', function () {

    beforeEach(module('services'));
    beforeEach(module('controllers'));
    
    var $controller;
    
    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_
    }));
    
    describe('test salad service', function () {
        
        it('we have salads today', function () {
            
            var saladController = $controller('saladController');
            
            var salads = saladController.salads;
            
            console.log(salads);
            
            expect(salads.length).toBeGreaterThan(1);
            
        })
        
    })
    
})