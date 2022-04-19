


var git = angular.module('data', []);

// git.run(function ($rootScope) {

// });

git.controller('controller1', ($scope) => {

        $scope.userprofile = './We4ponx-Crysis-3-Crysis-3-1.ico';
        $scope.username = 'Chintan_patel';
        $scope.userlink = 'https://chintu2011.github.io/shopping_card/';
        $scope.globalArray = [];

        // main.js

        // GET request using fetch()
        fetch("https://api.github.com/users/ganeshgfx/repos")

                // Converting received data to JSON
                .then(response => response.json())
                .then(json => {


                        // // Create a variable to store HTML
                        let li = `<tr>
                                        <th>Name</th>
                                        <th>description</th>
                                        <th>language</th><br>
                                        <th>id</th>
                                </tr>`;

                        // Loop through each data and add a table row
                        json.forEach(user => {
                                li += `<tr>
                                	<td>${user.name} </td>
                                	<td>${user.description}</td>	
                                        <td>${user.language}</td>
                                        <td>${user.id}</td>	
                                </tr>`;
                                // var obj = {
                                //         name: user.name,
                                //         description: user.description,
                                //         language: user.language
                                // };
                                // $scope.globalArray.push(obj);
                        });

                        console.log("in ");

                        // var obj = {
                        //         name: $scope.name,
                        //         description: $scope.description,
                        //         language: $scope.language
                        // };
                        // $scope.globalArray.push(obj);

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