var Request = require("request");

/**
 * TTSRo
 * Converts the text to speech using the phobos.ro service.
 *
 * @name TTSRo
 * @function
 * @param {String} message The text to convert to speech.
 * @param {Function} callback The callback function. It will be called with an error and the mp3 link.
 * @return {TTSRo} The TTSRo function.
 */
var TTSRo = module.exports = function (message, callback) {
    if (!message) { return callback(new Error("No message provided.")); }
    Request({
        url: "http://www.phobos.ro/demos/tts/vorbeste.html",
        method: "POST",
        form: {
            textul: message,
            vorbeste: "vorbeşte/speak",
            hh: parseInt(new Date().getTime() / 1000)
        }
    }, function (err, res, body) {
        if (err) { return callback(err); }
        var id = (body.match(/<a target="phbttsgen" .*>(.*)<\/a>/) || [])[1];
        if (!id) {
            return callback(new Error("Failed to get the mp3 link."));
        }
        callback(null, "http://www.phobos.ro/demos/tts/images/wavgeneratedonline/" + id);
    });

    return TTSRo;
};
