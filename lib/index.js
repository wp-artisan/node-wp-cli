var shelljs = require('shelljs/shell');
var _ = require('lodash');

var wp = `php ${__dirname}/../wp-cli`;

module.exports = {
  call: function(cmd, args, cb) {
    if (!cmd) {
      cb({
        name: 'Error',
        message: 'Invalid command!'
      }, null);
      return;
    }
    
    if (args && (typeof args !== 'object')) {
      cb({
        name: 'Error',
        message: 'Invalid options!'
      }, null);
      return;      
    }

    var options = [];
    _.forEach(args, function(val, key) {
      if (val) {
        var opt;
        if (typeof val === 'boolean') {
          opt = `--${key}`;
        } else {
          opt = `--${key}=${val}`;
        }

        options.push(opt);
      }
    });

    var command = (options.length > 0) ?
      `${wp} ${cmd} ${options.join(' ')}` :
      `${wp} ${cmd}`;

    // execute the command
    shelljs.exec(command, { silent: true }, function(errCode, stdOut, stdErr) {
      if (errCode !== 0 && stdErr) {
        cb({
          name: 'Error',
          code: errCode,
          message: stdErr

        }, null);
        return;
      }

      cb(null, {
        message: stdOut
      });
    });
  }
};
