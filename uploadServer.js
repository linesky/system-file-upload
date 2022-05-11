var start=0
var fs = require("fs"); 
var nt = require("net");
var ddatas=""
var srv=nt.createServer();
srv.on("connection",Connection);

srv.listen(8080,function(){
	console.log("uploads system server")
});

function Connection(connection){
	ddatas="";
	var iip=connection.remoteAddress;
	sss=start.toString();
	setTimeout(function(){
		connection.destroy();
	},8000);
connection.on('data',onData);
connection.on('close',onClose);
connection.on('error',onError);
	function onData(data){
		vv=data.toString();
		ddatas=ddatas+vv
	}
	function onClose(){
		fs.writeFile ( sss,ddatas , function  ( err ){
			if (err) console.log(err);
		});
		console.log(iip+": " + sss);
		start=start+1;
		connection.destroy();
	}
	function onError(data){
		console.log(data);
	}



}
