# greeting-time

> Get a greeting by the time of day

## Install

```sh
$ npm install greeting-time
```

## Usage

```js
const greetingTime = require("greeting-time");

greetingTime(new Date()); // Good morning, Good afternoon, or Good evening
```

## Notes

- "Morning" is from 5am until noon
- "Afternoon" is from noon until 5pm
- "Evening" is from 5pm until 5am

> I didn't include "Night" because "Good night" doesn't feel like a greeting. It conveys more of a farewell, which isn't the intent of the `greeting-time` module.

## License

MIT © [Elijah Manor](https://elijahmanor.com)
