/**
 * var http = require('http');
http.createServer(function(req,res) {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Olá mundo!'); /** algo parecido com um console.log 
}).listen(3000);
console.log('Servidor iniciado em localhost:3000. Ctrl+C para encerrar…');
 */

/**
 * var http = require('http');
http.createServer(function(req,res) {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h2> Olá mundo!</h2>'); // retornando uma tag válid html 
}).listen(3000);
console.log('Servidor iniciado em localhost:3000. Ctrl+C para encerrar…');
 */

var http = require('http');

var server = http.createServer();

server.on('request', function(req,res) {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('<h2> Outro Olá Mundo, só que diferente! </h2>');
});

server.listen(3000);

console.log('Servidor iniciado em localhost:3000. Ctrl+C para encerrar…');