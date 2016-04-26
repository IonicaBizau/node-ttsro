
# ttsro [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/ttsro.svg)](https://www.npmjs.com/package/ttsro) [![Downloads](https://img.shields.io/npm/dt/ttsro.svg)](https://www.npmjs.com/package/ttsro) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A Romanian text to speech service wrapper for NodeJS.

## :cloud: Installation

```sh
$ npm i --save ttsro
```


## :clipboard: Example



```js
// Dependencies
var TTSRo = require("ttsro");

// Call the TTSRo function
TTSRo("Salutare lume!", function (err, mp3Link) {
    console.log(err || mp3Link);
});
```

## :memo: Documentation


### `TTSRo(message, callback)`
Converts the text to speech using the phobos.ro service.

#### Params
- **String** `message`: The text to convert to speech.
- **Function** `callback`: The callback function. It will be called with an error and the mp3 link.

#### Return
- **TTSRo** The TTSRo function.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2013#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
