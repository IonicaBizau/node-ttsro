Node Text to Speech
===================

Text to speech Node project

## Romanian
`ro` function from Speech will convert a text to audio message:
 - first parameter: the text that you want to convert
 - callback (err, mp3Link)
 
`mp3Link` is the url of mp3 that represents the audio message.

### Example:

```js
var Speech = require("./speech");

Speech.ro(message, function (err, mp3Link) {
  console.log(err, mp3Link);
});
```
