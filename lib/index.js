var shelljs = require('shelljs/shell');
var wp = `php ${__dirname}/../../wp-cli`;

module.exports = {
  core: {
    download: function(path, locale, version='latest', force=false) {
      shelljs.exec(
        `${wp} core download --path=${path} --locale --version --force`,
        {
          silent: true
        },
        function(code, stdout, stderr) {
          if (code === 0 && stderr) {
            console.log(code, stderr);
          }

          console.log('Program output:', stdout);
        }
      );      
    }
  }
};
