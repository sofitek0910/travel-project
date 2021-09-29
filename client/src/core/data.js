const axios = require('axios').default;

let serviceHelpers = {};

serviceHelpers.register = function(userData) {
    console.log("users", userData);
    
    axios.post('http://localhost:5000/api/v1/auth/register', userData)
    .then(function (response) {
        console.log(response);
        return response;
    })
    .catch(function (error) {
        console.log(error);
    });
};

export { serviceHelpers };