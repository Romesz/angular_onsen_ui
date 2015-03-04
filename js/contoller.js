var module = ons.bootstrap('my-app', ['onsen']);

module.controller('PageController', function($scope) {
  
  $scope.alert = function() {
    ons.notification.alert({message: 'An alert msg!'});
  }

  $scope.dummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius pellentesque lacus. Donec ac gravida nisl, sed varius ante. Donec et enim sit amet ligula pharetra posuere. Nullam eleifend felis at erat consequat suscipit. Sed tristique vel tortor quis pretium. Donec ut mollis ligula, pulvinar luctus risus. Fusce rhoncus vel leo vitae molestie. Praesent quis tortor id ex fermentum pharetra. Duis eu erat eget eros pellentesque mattis. Cras at risus non risus congue malesuada. Ut porta, dolor eget fringilla aliquam, felis metus tincidunt arcu, eu tempor turpis dui vitae lorem. Etiam sodales leo non nulla rutrum, id consectetur mauris pretium. Nulla id venenatis ante. Nunc fermentum justo felis, lacinia faucibus dolor interdum eget. Sed sodales sed dui eu suscipit.'; 
});