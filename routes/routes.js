module.exports = function(server) {
    //About route
    server.route({
        method: 'GET',
        path: '/calculator/about',
        handler: function (request, res) {
    
            var data = {
                message: 'Welcome to our Calculator Service'
            };
    
            return data;
        }
    });

    //Add route
    server.route({
        method: 'GET',
        path: '/calculator/add/{num1}/{num2}',
        handler: function (req, res) {

            const num1 = parseInt(req.params.num1);
            const num2 = parseInt(req.params.num2);

            var data = {
                answer: num1 + num2
            };
    
            return data;
        }
    });
}
