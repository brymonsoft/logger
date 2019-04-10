##Logger Instance


## Installation

```sh
npm i @brymonsoft/logger
```


## Simple Use

Just create `Logger` instance

```js
const endpoint = 'any endpoint with http/https'
const Logger = require('Logger');

const loggerEntity = new Logger(endpoint);
```
For log any messages you can call `log` method with params:
```js
loggerEntity.log(TARGET_ID, TYPE, STACK, META)
```

Where:

| Param   |      Type      |  Required | Description |
|----------|:-------------:|------:|------:|
| TARGET_ID |  String | true | identifier of something that you add a log message about  |
| TYPE |    String   | true | type of the log message, e.g. `http`, `bot`, `qraphQl`, `my-custom-type1` |
| META | Any |    false | any custom data that should be with log message |
| STACK | String |    false | stack trace of the error |

