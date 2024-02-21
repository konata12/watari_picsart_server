const FormData = require('form-data');
const download = require('image-downloader');
const http = require("https");
const form = new FormData();
const fs = require('fs');

form.append('bg_blur', '0');
form.append('scale', 'fit');
form.append('image_url', 'https://cdn140.picsart.com/03328718565819952445.jpeg');
form.append('bg_image_url', 'https://cdn140.picsart.com/22183977156062232333.png');
form.append('format', 'JPG');
form.append('output_type', 'cutout');
const options = {
    "method": "POST",
    "hostname": "api.picsart.io",
    "port": null,
    "path": "/tools/1.0/removebg",
    "headers": {
        "accept": "application/json",
        "X-Picsart-API-Key": "sjsF3WYoEgqcJMpEXfHgYAGGBCnUM3Hl",
        ...form.getHeaders()
    }
};

const string = `{"status":"success","data":{"id":"d3770dc0-c7b3-408c-b8e0-3a51dd29f85d.jpg","url":"https://cdn.picsart.io/d3770dc0-c7b3-408c-b8e0-3a51dd29f85d.jpg?type=JPG&to=max&r=0"}}`
const object = JSON.parse(string)

console.log(string)
console.log(object)

// const req = http.request(options, function (res) {
//     console.log(111)
//     const chunks = [];
//     res.on("data", function (chunk) {
//         chunks.push(chunk);
//         console.log(1, chunk)
//     });
//     res.on("end", function () {
//         const body = Buffer.concat(chunks);
//         console.log(1, body)
//         console.log(2, body.toString());
//         console.log(3, JSON.parse(JSON.stringify(body.toString())))
//         const bodyObject = JSON.parse(body.toString())
//         console.log(4, bodyObject.url)

//         const downloadOptions = {
//             url: 'http://someurl.com/image.jpg',
//             dest: '/path/to/dest',               // will be saved to /path/to/dest/image.jpg
//         };

//         fs.writeFile('logo.png', body, 'binary', function (err) {
//             if (err) throw err
//             console.log('File saved.')
//         })
//     });
// })

// req.on("error", (e) => {
//     console.error(e);
// });
// form.pipe(req);