'use strict';

// AngularJS E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('PhoneCat Application', function() {
  describe('phoneList', function(){


    beforeEach(function(){
      browser.get('index.html');
    })

    // it('should filter the phone list as a user types into the search box', function() {
    //   let phoneList = element.all(by.repeater('phone in $ctrl.phones'));
    //   let query = element(by.model('$ctrl.query'));

    //   expect(phoneList.count()).toBe(3);

    //   query.sendKeys('nexus');
    //   expect(phoneList.count()).toBe(1);

    //   query.clear();
    //   query.sendKeys('motorola');
    //   expect(phoneList.count()).toBe(2)

    // })


    // it('should be possivle to control phone order via the drop-down menu', function(){
    //   let queryField = element(by.model('$ctrl.query'));
    //   let orderSelect = element(by.model('$ctrl.orderProp'));
    //   let nameOption = orderSelect.element(by.css('option[value="name"]'));
    //   let phoneNameColumn = element.all(by.repeater('phone in $ctrl.phones').column('phone.name'));


    //   function getNames() {
    //     return phoneNameColumn.map(function(elem){
    //       return elem.getText();
    //     })
    //   }

    //   queryField.sendKeys('table');

    //   expect(getNames()).toEqual([
    //     'Motorola XOOM\u2122 with Wi-Fi',
    //     'MOTOROLA XOOM\u2122'
    //   ])

    //   nameOption.click();

    //   expect(getNames()).toEqual([
    //     'MOTOROLA XOOM\u2122',
    //     'Motorola XOOM\u2122 with Wi-Fi'
    //   ])


    // })

    // it('should render phone specific links', function() {
    //   var query = element(by.model('$ctrl.query'));
    //   query.sendKeys('nexus');
    
    //   element.all(by.css('.phones li a')).first().click();
    //   expect(browser.getCurrentUrl()).toContain('index.html#!/phones/nexus-s');
    // });

    it('should redirect `index.html` to `index.html#!/phones', function() {
      browser.get('index.html');
      expect(browser.getCurrentUrl()).toContain('index.html#!/phones');
    });

    describe('View: Phone list', function() {

      beforeEach(function() {
        browser.get('index.html#!/phones');
      });
    
    })

    // describe('View: Phone details', function() {

    //   beforeEach(function() {
    //     browser.get('index.html#!/phones/nexus-s');
    //   });
    
    //   it('should display placeholder page with `phoneId`', function() {
    //     expect(element(by.binding('$ctrl.phoneId')).getText()).toBe('nexus-s');
    //   });
    
    // });

    describe('View: Phone detail', function() {

      beforeEach(function() {
        browser.get('index.html#!/phones/nexus-s');
      });
    
      it('should display the `nexus-s` page', function() {
        expect(element(by.binding('$ctrl.phone.name')).getText()).toBe('Nexus S');
      });
    
    });
    

  })
})