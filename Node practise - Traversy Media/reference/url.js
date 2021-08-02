const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// Serialized URL
console.log(myUrl.href);

// Host (root domain)
console.log(myUrl.host);

// Host name (does not get port)
console.log(myUrl.hostname);

// PAthname
console.log(myUrl.pathname);

// Serilized query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

// Loop through the param
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
