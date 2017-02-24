var shelljs = require('shelljs/shell');

// Install `wp-cli` latest release
shelljs.exec('curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar');
shelljs.exec('mv wp-cli.phar wp-cli');
