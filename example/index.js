// Dependencies
var TTSRo = require("../lib");

// Call the TTSRo function
TTSRo("Salutare lume!", function (err, mp3Link) {
    console.log(err || mp3Link);
});
