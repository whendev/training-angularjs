


angular.module('phoneDetail').component('phoneDetail', {
  templateUrl: 'phone-detail/phone-detail.template.html',
  controller: [
    'Phone',
    '$routeParams',
    function PhoneDetailController(Phone, $routeParams){
      let self = this;

      self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone){
        self.setImage(phone.images[0]);
      })

      self.setImage = (imgUrl) => {
        self.mainImageUrl = imgUrl;
      }

      // $http.get(`phones/${$routeParams.phoneId}.json`).then((response)=>{
      //   self.phone = response.data;
      //   self.setImage(self.phone.images[0]);
      // })
    }
  ]
})
