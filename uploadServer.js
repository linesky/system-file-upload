var start=0
var fs = require("fs"); 
var nt = require("net");

var srv=nt.createServer();
srv.on("connection",Connection);

srv.listen(8080,function(){
	console.log("uploads system server")
});

function Connection(connection){
	var d = Date();
	console.log(d);
connection.on('data',onData);
connection.on('close',onClose);
connection.on('error',onError);
	function onData(data){
		start=start+1;
		sss=start.toString();
		var v="";
		console.log("--------");
		vv=data.toString();
		fs.writeFile ( sss,vv , function  ( err ){
			if (err) console.log(err);
				connection.end("file saved as : " +sss);
		});
		
	}
	function onClose(){
		var d = Date();
		console.log(d);
	}
	function onError(data){
		console.log(data);
	}



}
