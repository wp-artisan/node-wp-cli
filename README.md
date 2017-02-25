# node-wp-cli

A nodejs wrapper for [`WP-CLI`](http://wp-cli.org/).

You just need to install this NPM package and `WP-CLI` will install automatically to your computer without doing any additional step.

## Installation

```
npm install node-wp-cli
```

## Usage

```
var wpCli = require('node-wp-cli');

wpCli.call('core download', { path: 'myWPSite' }, function(err, resp) {
    if (err) throw err;

    console.log(resp.message);
})
```

## Credits

* All the contributors of [`WP-CLI`](https://github.com/wp-cli/wp-cli)