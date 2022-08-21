
var git = angular.module('data', []);

git.controller('controller1', ($scope) => {

        //$scope.userprofile = './We4ponx-Crysis-3-Crysis-3-1.ico';


//         $scope.username = 'ganeshgfx';
        $scope.username = 'fireship-io';
        $scope.link = 'https://github.com/' + $scope.username;
        $scope.userlink = 'https://api.github.com/users/' + $scope.username + '/repos';
        $scope.userprofile = 'https://avatars.githubusercontent.com/u/46283609?s=200&v=4';
        $scope.globalArray = [];

        // $scope.bg_black = 'bg_black';

        // main.js

        // GET request using fetch()
        fetch($scope.userlink)

                // Converting received data to JSON
                .then(response => response.json())
                .then(json => {
                        if (json)
                                hideloader();

                        console.log(json);

                        // // Create a variable to store HTML
                        let li = ``;

                        // Loop through each data and add a table row  <h6>${user.id}</h6>
                        json.forEach(user => {
                                console.log(user);
                                $scope.url = '${user.html_url}';
                                console.log($scope.url);

                                li += `
                                <div class="col-md-6 idbox">
                                        <div class="nameid">
                                                <h4>${user.name}</h4>
                                        </div>
                                        <div class="description">
                                                ${user.description}
                                        </div>
                                        <div class="buttons">
                                                <button type="button" class="btn btn-primary">${user.language}</button>
                                        </div>
                                </div>
                                `;
                                var obj = {
                                        name: user.name,
                                        description: user.description,
                                        language: user.language
                                };
                                $scope.globalArray.push(obj);
                        });
                        function hideloader() {
                                document.getElementById('loading').style.display = 'none';
                        }

                        console.log("in ");
                        $scope.globalArray;
                        console.log($scope.globalArray);
                        // Display result
                        document.getElementById("users").innerHTML = li;
                });

        console.log($scope.globalArray);


        // $scope.userprofile = './We4ponx-Crysis-3-Crysis-3-1.ico';
        // $scope.username = 'Chintan_patel';
        // $scope.userlink = 'https://chintu2011.github.io/shopping_card/';

        // $scope.globalArray = [
        //         {
        //                 name: 'Hero',
        //                 description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam nesciunt',
        //                 language: 'html'
        //         }];

});




// angular.forEach(data, function (i, status) {
//         //console.log(i + "=" + status);
//         angular.forEach(i, function (val, key) {
//                 // console.log(key + "=" + val);
//                 if (key == 'name') {
//                         console.log(key + " = " + val);
//                         $scope.name = val;
//                 }
//                 if (key == 'language') {
//                         console.log(key + " = " + val);
//                         $scope.language = val;
//                 }
//                 if (key == 'description') {
//                         console.log(key + " = " + val);
//                         $scope.description = val;
//                 }
//         });
//         console.log(" ");

//         var obj = {
//                 name: $scope.name,
//                 description: $scope.description,
//                 language: $scope.language
//         };
//         $scope.globalArray.push(obj);

//         $scope.globalArray;
//         console.log($scope.globalArray);
