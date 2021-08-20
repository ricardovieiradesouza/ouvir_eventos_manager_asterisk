const app = require ('express')();
const http = require ('http').createServer(app);
const asterikManager = require ('asterisk-manager');

let ami = asterikManager(5038, '127.0.0.1', 'admin', 'admin');


ami.on("peerstatus", async(evt) => {
    console.log(JSON.stringify(evt));
})


http.listen(5000, function() {
    console.log("App rodando na porta 5000")
})
