(function(){
    'use strict';
    
    angular.module('LunchCheck',[])

    .controller('LunchCheckController', LunchCheckController);
        /*var items = $scope.lunchItems;
        $scope.checkItemCount = function(){
        console.log($scope.lunchItems);
        };
    });*/
    
   LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController($scope){
        
        $scope.checkItemCount = function (){
            var cnt=0;
        var items=$scope.lunchItems;
        console.log(items);
        if(items === undefined ){
            $scope.a="red";
            $scope.msg = "PLease enter data first!!!";
        }
       else{
           
           var listOfItems = items.split(',');
            console.log(listOfItems);
            if(listOfItems.length == 1 && listOfItems[0] == ""){
                $scope.a="red";
                 $scope.msg = "PLease enter data first!!!";
              
            }
           
            
            else{
                
                for(var i=0; i < listOfItems.length ;i++)
                {
                    switch(listOfItems[i]){
                        case "": break;
                        case " ": break;
                        default: cnt++;
                    }
                }
              
                if(cnt <= 3){
                    $scope.msg = "Enjoy!";
                }
                if(cnt > 3){
                    $scope.msg = "Too much!";
                }
                $scope.a="green";
            }
       }
    };
  };
})();



























