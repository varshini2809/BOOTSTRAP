var http=require("http");

var server= http.createServer(function(request,response)
	{
        if(request.url=="/")
        {
        response.writeHead(200,{"Content-Type":"text/html"});
		response.write("<h1>Hello World</h1>");	
		response.write("<html><body> <h1>Hello World</h1>This is home Page! URL was: "+request.url+"</body></html>");
        }
        else if(request.url=="/student")
        {
        response.writeHead(200,{"Content-Type":"text/html"});
	response.write("<h1>Hello World student</h1>");	
        response.end("<html><body>This is Student Page! URL was: "+request.url+"</body></html>");
        }
        else if(request.url=="/admin")
        {
        response.writeHead(200,{"Content-Type":"text/html"});
	response.write("<h1>Hello World admin</h1>");	
        response.end("<html><body>This is admin Page! URL was: "+request.url+"</body></html>");
        }
        else
        {
            response.end("Invalid Request");
        }
	});
	
server.listen(8000);

console.log("Server running");