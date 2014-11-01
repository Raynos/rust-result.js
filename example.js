var fs = require('fs');
var Result = require('./');


// If you want async just get a promise or something.
var readFile = function (path, encoding) {
  try {
    return Result.Ok(fs.readFileSync(path, encoding))
  }
  catch (ex) {
    return Result.Err(ex)
  }
}

var result = readFile(__filename);
var v, err;

if (Result.Ok(result) !== undefined) {
  v = Result.Ok(result);
  console.log('got ' + v.length + ' bytes')
}
else if (Result.Err(result) !== undefined) {
  err = Result.Err(result);
  console.error('oops!', err.message)
}

result = readFile(__filename + 'I do not exist')
if (Result.Ok(result) !== undefined) {
  v = Result.Ok(result)
  console.log('got ' + v.length + ' bytes')
}
else if (Result.Err(result) !== undefined) {
  err = Result.Err(result)
  console.error('oops!', err.message)
}
