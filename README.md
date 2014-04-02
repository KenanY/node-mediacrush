# node-mediacrush

Mediacrush API wrapper.

## Example

``` javascript
var mediacrush = require('mediacrush');

mediacrush.getInfo('kmopZLGFVRYs', function (error, data) {
  if (error) {
    throw error;
  }

  //=> {
  //=>   "blob_type": "image",
  //=>   "compression": 1,
  //=>   "extras": [],
  //=>   "files": [
  //=>     {
  //=>       "file": "/kmopZLGFVRYs.png",
  //=>       "type": "image/png",
  //=>       "url": "https://cdn.mediacru.sh/kmopZLGFVRYs.png"
  //=>     }
  //=>   ],
  //=>   "flags": {},
  //=>   "hash": "kmopZLGFVRYs",
  //=>   "metadata": {
  //=>     "dimensions": {
  //=>       "height": 2000,
  //=>       "width": 2000
  //=>     }
  //=>   },
  //=>   "original": "/kmopZLGFVRYs.png",
  //=>   "type": "image/png"
  //=> }
});
```

## Installation

``` bash
$ npm install mediacrush
```

## API

``` javascript
var mediacrush = require('mediacrush');
```

### mediacrush.getInfo(hash, callback)

Gets information on _String_ `hash` from Mediacrush and calls
`callback(error, response)`.

### mediacrush.uploadURL(url, callback)

Uploads the image found at _String_ `url` to Mediacrush and calls
`callback(error, response)`.