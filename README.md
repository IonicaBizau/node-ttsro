# ttsro [![Support this project][donate-now]][paypal-donations]

A Romanian text to speech service wrapper for NodeJS.

## Installation

```sh
$ npm i --save ttsro
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

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2013#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md