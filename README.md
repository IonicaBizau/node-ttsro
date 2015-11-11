# ttsro [![Support this project][donate-now]][paypal-donations]

A Romanian text to speech service wrapper for NodeJS.

## Installation

```sh
$ npm i ttsro
```

## Example

```js
// Dependencies
var TTSRo = require("ttsro");

// Call the TTSRo function
TTSRo("Salutare lume!", function (err, mp3Link) {
    console.log(err || mp3Link);
});
```

## Documentation

### `TTSRo(message, callback)`
Converts the text to speech using the phobos.ro service.

#### Params
- **String** `message`: The text to convert to speech.
- **Function** `callback`: The callback function. It will be called with an error and the mp3 link.

#### Return
- **TTSRo** The TTSRo function.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2013

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md