// Модуль
var PortfApp = angular.module("PortfApp", ['smoothScroll', 'ngCookies'])
// Контроллер
.controller("MainCtrl", ['$scope', 'smoothScroll','$http', '$timeout', '$cookies', 'cookieService', function($scope, smoothScroll, $http, $timeout, $cookies, cookieService){
    
    //CHANGING OF TEXT IN SERVICES BLOCK
    $scope.textVal = 1;

    $scope.changeText = function(val){
        $scope.textVal = val;
    }

    //FORM VALIDATION
    $scope.nameRegex = /^[a-zA-Z ]+$/; 
    $scope.mailRegex = /^[a-zA-Z0-9_@.]+$/; 
    $scope.messageRegex = /^.{0,19}$/;

    $scope.$watch('myForm', function(myForm) {
        if(myForm) { 
            $scope.myForm.name = $cookies.get('name_coockie');
            $scope.myForm.mail = $cookies.get('mail_coockie');
        }
        else {
            alert('oops!!!');
        }        
    });

    //IMAGE FILTER
    $scope.category = 'All';

    $scope.items = [ 
                    { category: "All", path: 'images/portfolio/2.png' },
                    { category: "All", path: 'images/portfolio/3.png' },
                    { category: "All", path: 'images/portfolio/2.png' },
                    { category: "All", path: 'images/portfolio/3.png' },
                    { category: "All", path: 'images/portfolio/2.png' },
                    { category: "All", path: 'images/portfolio/3.png' },
                    { category: "All", path: 'images/portfolio/1.png' },
                    { category: "All", path: 'images/portfolio/4.png' },
                    { category: "All", path: 'images/portfolio/1.png' },
                    { category: "All", path: 'images/portfolio/4.png' },
                    { category: "All", path: 'images/portfolio/1.png' },
                    { category: "All", path: 'images/portfolio/4.png' },

                    { category: "Web", path: 'images/portfolio/2.png' },
                    { category: "Web", path: 'images/portfolio/2.png' },
                    { category: "Web", path: 'images/portfolio/2.png' },
                    { category: "Web", path: 'images/portfolio/2.png' },
                    { category: "Photography", path: 'images/portfolio/3.png' },
                    { category: "Photography", path: 'images/portfolio/3.png' },
                    { category: "Photography", path: 'images/portfolio/3.png' },
                    { category: "Photography", path: 'images/portfolio/3.png' },
                    { category: "Graphic design", path: 'images/portfolio/4.png' },
                    { category: "Graphic design", path: 'images/portfolio/4.png' },
                    { category: "Graphic design", path: 'images/portfolio/4.png' },
                    { category: "Graphic design", path: 'images/portfolio/4.png' },

                    { category: "Web", path: 'images/portfolio/2.png' },
                    { category: "Web", path: 'images/portfolio/2.png' },
                    { category: "Web", path: 'images/portfolio/2.png' },
                    { category: "Web", path: 'images/portfolio/2.png' },
                    { category: "Web", path: 'images/portfolio/2.png' },
                    { category: "Web", path: 'images/portfolio/2.png' },
                    { category: "Web", path: 'images/portfolio/2.png' },
                    { category: "Web", path: 'images/portfolio/2.png' }, 

                    
                    { category: "Photography", path: 'images/portfolio/3.png' },
                    { category: "Photography", path: 'images/portfolio/3.png' },
                    { category: "Photography", path: 'images/portfolio/3.png' },
                    { category: "Photography", path: 'images/portfolio/3.png' },
                    { category: "Photography", path: 'images/portfolio/3.png' },
                    { category: "Photography", path: 'images/portfolio/3.png' },
                    { category: "Photography", path: 'images/portfolio/3.png' },
                    { category: "Photography", path: 'images/portfolio/3.png' },
    
                    { category: "Graphic design", path: 'images/portfolio/4.png' },
                    { category: "Graphic design", path: 'images/portfolio/4.png' },
                    { category: "Graphic design", path: 'images/portfolio/4.png' },
                    { category: "Graphic design", path: 'images/portfolio/4.png' },
                    { category: "Graphic design", path: 'images/portfolio/4.png' },
                    { category: "Graphic design", path: 'images/portfolio/4.png' },
                    { category: "Graphic design", path: 'images/portfolio/4.png' },
                    { category: "Graphic design", path: 'images/portfolio/4.png' }
                ];

    $scope.catChanger = function(cat){
        $scope.category = cat;
    }

    $scope.vis = false;


    //STATISTIC BLOCK
    var projects = 3054;
    var clicks = 7234873;
    var mails = 4670;
    var jokes = 939;
    var stat_values = document.querySelectorAll('.sta h2');
    var targ_elem = document.getElementById('lol');
    //console.log(stat_values);
    var startYBot = targ_elem.getBoundingClientRect().bottom + window.pageYOffset+400;
    var scrolled1 = false;

    function tick(from, to, duration) {
        if (from > to) {
            this.innerHTML = to;
            return;
        } else{
            var step;
            var delta = 1;

            if(to > 100) delta = 3;
            if(to > 1000) delta = 10;
            if (to > 1000000) delta = 11111;

            step =  duration / (to - from);
            this.innerHTML = from;

            $timeout(tick.bind(this, from + delta, to, duration - step), step);
        }
    }

    window.onscroll = function () {
        //console.log(scrolled1);
    
        //STATISTICS SCROLL
            
        var cH = document.documentElement.clientHeight;
        var pageY = window.pageYOffset;

        if(cH + pageY > startYBot && !scrolled1){
            tick.bind(stat_values[0])(0, projects, 3000);
            tick.bind(stat_values[1])(0, clicks, 3000);
            tick.bind(stat_values[2])(0, mails, 3000);
            tick.bind(stat_values[3])(0, jokes, 3000);
            scrolled1 = true;
        }
    }

    //DATA FOR CUSTOM DIRECTIVE
    $scope.team = [ 
                { source: "images/john1.png", class: "col-sm-2 col-sm-offset-2 col-xs-4 col-xs-offset-2"},
                { source: "images/john2.png", class: "col-sm-2 col-sm-offset-0 col-xs-4"},
                { source: "images/john3.png", class: "col-sm-2 col-sm-offset-0 col-xs-4 col-xs-offset-2"},
                { source: "images/john4.png", class: "col-sm-2 col-sm-offset-0 col-xs-4"}
              ];

    //NEWS BLOCK
    $scope.sendRequest1 = (function () {
                
                var promise = $http.get("data.json");

                promise.then(fulfilled, rejected);
            })();


                function fulfilled(response) {

                    //console.log("Status: " + response.status); // status - статус код полученный от сервера
                    //console.log("Type: " + response.headers("content-type")); // headers - метод для чтения заголовков ответа
                    //console.log("Length: " + response.headers("content-length"));

                    $scope.news = response.data; // data - данные запроса
                }

                function rejected(error) {
                    alert('Error status: ' + error.status + '\n' + 'Error status text: '+ error.statusText);
                    //console.error(error.status);
                    //console.error(error.statusText);
                }

    $scope.sortFunc = function (item) {
                //return +(item.date.split('/')[0]); 
                var dat = item.date.split('/');
                return new Date( +dat[2], +dat[0], +dat[1]);
            }

    $scope.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //COOCKIES
    $scope.makeCookie = function () {
        cookieService($scope.myForm.name, $scope.myForm.mail, $scope.output);
    }

}])

//COOCKIES SERVICE
.factory('cookieService', function ($cookies) {

                return function (nameVal, mailVal, output) {
                    //console.log(nameVal);

                    var now = new Date(),
                    exp = new Date(now.getFullYear(), now.getMonth() +1, now.getDate());

                    console.log(exp);

                    $cookies.put('name_coockie', nameVal, { expires: exp });
                    $cookies.put('mail_coockie', mailVal, { expires: exp });

                };
})

//CUSTOM DIRECTIVE
.directive('teamMem', function($compile){
            return function (scope, element, attributes) {

                    var v1, vi2, vis3, visi4 = false;
                    

                    var persons = scope.team;
                    var container = angular.element('<div class="row" id="teammates"></div>');

                    for (i = 0; i < persons.length; i++) {
                        var cont = angular.element('<div class="'+persons[i].class+'"></div>');
                       
                        cont.append(angular.element('<img class="img-responsive" src="'+persons[i].source+'">'));
                        cont.append(angular.element('<span>Integer consectetur ligula in sagittis accumsan. In ullamcorper volutpat maximus.</span><br>'));

                        cont.append(angular.element($compile('<a><img class="img-fluid" src="images/fa.fw.png" ng-show="v'+(i+1)+'" ng-mouseleave="v'+(i+1)+' = false"><img class="img-fluid" src="images/f.fw.png" ng-show="!v'+(i+1)+'" ng-mouseover="v'+(i+1)+' = true"></a><a>')(scope)));
                        cont.append(angular.element($compile('<a><img class="img-fluid" src="images/tw.fw.png" ng-show="vi'+(i+2)+'" ng-mouseleave="vi'+(i+2)+' = false"><img class="img-fluid" src="images/t.fw.png" ng-show="!vi'+(i+2)+'" ng-mouseover="vi'+(i+2)+' = true"></a><a>')(scope)));
                        cont.append(angular.element($compile('<a><img class="img-fluid" src="images/go.fw.png" ng-show="vis'+(i+3)+'" ng-mouseleave="vis'+(i+3)+' = false"><img class="img-fluid" src="images/g.fw.png" ng-show="!vis'+(i+3)+'" ng-mouseover="vis'+(i+3)+' = true"></a><a>')(scope)));
                        cont.append(angular.element($compile('<a><img class="img-fluid" src="images/dr.fw.png" ng-show="visi'+(i+4)+'" ng-mouseleave="visi'+(i+4)+' = false"><img class="img-fluid" src="images/d.fw.png" ng-show="!visi'+(i+4)+'" ng-mouseover="visi'+(i+4)+' = true"></a><a>')(scope)));

                        container.append(cont);
                    }
                    element.append(container);
                }
} )


//IMAGE FILTER
.filter('skipItems', function () {
        
            return function (arr, cat) {
                var newarr =[];
                
                if (cat == 'all'){

                    for (var i = 0; i < 12; i++) {
                        newarr.push(arr[i]); 
                    }
                    return newarr;
                }

                for (i = 0; i < arr.length; i++) {
                   
                    if (arr[i].category == cat) {
                       newarr.push(arr[i]); 
                    }
                }
                return newarr; 
            }
})
