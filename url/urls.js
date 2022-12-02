
const url = require('url')

const myURL = url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
 
const urlPath = myURL.pathname;
const urlHash = myURL.hash;
const urlHost = myURL.host;
const urlHostName = myURL.hostname;
const urlHref = myURL.href;
const urlPassword = myURL.password
const urlSearch = myURL.search;

console.log('URL Href : ',urlHref);
console.log('URL Hostname : ',urlHostName)
console.log('URL Host : ',urlHost);
console.log('URL Path : ',urlPath);
console.log('URL Hash : ',urlHash);
console.log('URL Password : ',urlPassword);
console.log('URL Search : ',urlSearch);
