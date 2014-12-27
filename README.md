TTSRo
=====
A Romanian text to speech service wrapper for NodeJS.

## Installation

```sh
$ npm install ttsro
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
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
