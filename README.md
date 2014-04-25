# node-mediacrush

MediaCrush API wrapper.

## Example

``` javascript
var mediacrush = require('mediacrush');

mediacrush.getInfo('kmopZLGFVRYs', function(error, data) {
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

### mediacrush.uploadURL(hashes, callback)

Takes an _Array_ of MediaCrush `hashes` and groups them into an album on
MediaCrush. Calls `callback(error, response)` when response returns.

### mediacrush.getInfo(hash, callback)

Gets information on _String_ or _Array_ `hash` from MediaCrush and calls
`callback(error, response)`.

### mediacrush.uploadURL(url, callback)

Uploads the image found at _String_ `url` to MediaCrush and calls
`callback(error, response)`.