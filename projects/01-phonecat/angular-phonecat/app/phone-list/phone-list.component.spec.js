'use strict';

describe('phoneList', function(){
  
  beforeEach(module('phoneList'));


  describe('controller', function() {
    let $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_){
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/phones.json').respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      ctrl = $componentController('phoneList');
    }))

    it('should create a `phones` property with 2 phones fetched with `$http`', function() {
      expect(ctrl.phones).toBeUndefined();
    
      $httpBackend.flush();
      expect(ctrl.phones).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('age');
    });

  });


  // describe('PhoneListController', function() {

  //   let ctrl;

  //   beforeEach(inject(function($componentController){
  //     ctrl = $componentController('phoneList');
  //   }));

  //   it('should create a `phones` model with 3 phones', inject(function($componentController){
  //     let ctrl = $componentController('phoneList');

  //     expect(ctrl.phones.length).toBe(3);
  //   }))

  //   it('should set a default value for the `orderProp` model', function() {
  //     expect(ctrl.orderProp).toBe('age');
  //   });
  // })

})