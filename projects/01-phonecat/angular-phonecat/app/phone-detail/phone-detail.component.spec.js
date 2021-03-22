describe('phoneDetail', () => {

  // Load the module that contains the `phoneDetail` component before each test
  beforeEach(module('phoneDetail'))

  describe('PhoneDetailController', () => {
    let $httpBackend, ctrl;

    beforeEach(inject(($componentController, _$httpBackend_, $routeParams) => {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/xyz.json').respond({name: 'phone xyz'});

      $routeParams.phoneId = 'xyz';

      ctrl = $componentController('phoneDetail');
    }));

    it('should feth the details', () => {
      expect(ctrl.phone).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.phone).toEqual({name: 'phone xyz'});
    })
  });
})