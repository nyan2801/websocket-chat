var connection = new WebSocket(【通信を行うURL】);

//通信が接続された場合
connection.onopen = function(e) {
	ver id = Math.random().toString(36).slice(-8);

};
 
//エラーが発生した場合
connection.onerror = function(error) { };
 

  
//通信が切断された場合
connection.onclose = function() { };

//通信を切断するメソッド
connection.close();

btn.addEventListener('keypress', function(e) {
	if (e.keyCode === 13) {
		var text = document.getElementById('text');
		connection.send(id,text.value);
	}  
		return false;

})

//メッセージを受け取った場合
connection.onmessage = function(e) {
	$("#chat-text").append(<div class="text">);
	if(id === e.msgid){
	document.getElementById("col").style.color = "green";
	console.log(e.data);
};