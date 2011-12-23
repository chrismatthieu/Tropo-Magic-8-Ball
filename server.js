var http = require('http');
var tropowebapi = require('tropo-webapi');

// http://en.wikipedia.org/wiki/Magic_8-ball
var answers = [
"It is certain",
"It is decidedly so",
"Without a doubt",
"Yes – definitely",
"You may rely on it",
"As I see it, yes",
"Most likely",
"Outlook good",
"Signs point to yes",
"Yes",
"Reply hazy, try again",
"Ask again later",
"Better not tell you now",
"Cannot predict now",
"Concentrate and ask again",
"Don't count on it",
"My reply is no",
"My sources say no",
"Outlook not so good",
"Very doubtful"
];


http.createServer(function (req, res) {

	// Create a new instance of the TropoWebAPI object.
	var tropo = new tropowebapi.TropoWebAPI(); 	
	var answer = answers[Math.floor(Math.random()*answers.length)];
	
	tropo.say("Welcome to the tropo node J S magic 8 ball.");

	var say = new Say("Ask your question now after the beep.");
    var choices = new Choices(null, null, "#");

    // Action classes can be passed as parameters to TropoWebAPI class methods.
    // use the record method https://www.tropo.com/docs/webapi/record.htm
    tropo.record(3, false, null, choices, audio/wav, 5, 60, null, null, "recording", null, say, 5, null, "http://example.com/tropo", null, null);
	
	
    tropo.say(answer);

	tropo.say("Please call back to play again!");

    res.writeHead(200, {'Content-Type': 'application/json'}); 
    res.end(tropowebapi.TropoJSON(tropo));

}).listen(13188);
