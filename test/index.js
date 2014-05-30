var mediacrush = require('../');
var test = require('tape');
var has = require('lodash.has');

test('createAlbum', function(t) {
  t.plan(1);
  mediacrush.createAlbum(['kmopZLGFVRYs', '9j3rsdvImAhb'], function(error, data) {
    t.ok(has(data, 'hash'));
  });
});

test('getInfo', function(t) {
  t.plan(1);
  mediacrush.getInfo('kmopZLGFVRYs', function(error, data) {
    t.deepEqual(data, require('./fixtures/getInfo.json'));
  });
});

test('urlInfo', function(t) {
  t.plan(1);
  mediacrush.urlInfo(['https://i.imgur.com/rctIj1M.jpg',
                     'http://does.not/exist.gif'], function(error, data) {
    t.deepEqual(data, require('./fixtures/urlInfo.json'));
  });
});

test('uploadURL', function(t) {
  t.plan(1);
  mediacrush.uploadURL('https://i.imgur.com/Wv1GVBM.jpg', function(error, data) {
    t.deepEqual(data, require('./fixtures/uploadURL.json'));
  });
});