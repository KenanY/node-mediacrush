var mediacrush = require('../');
var test = require('tape');

test('getInfo', function(t) {
  t.plan(1);
  mediacrush.getInfo('kmopZLGFVRYs', function(error, data) {
    t.deepEqual(data, require('./fixtures/getInfo.json'));
  });
});

test('uploadURL', function(t) {
  t.plan(1);
  mediacrush.uploadURL('https://i.imgur.com/Wv1GVBM.jpg', function(error, data) {
    t.deepEqual(data, require('./fixtures/uploadURL.json'));
  });
});