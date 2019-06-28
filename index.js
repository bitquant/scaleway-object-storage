var S3 = require('amazon-s3');

function ObjectStorage(config) {
    config.domain = 'scw.cloud'
    S3.call(this, config)
}

ObjectStorage.prototype = Object.create(S3.prototype);
ObjectStorage.prototype.constructor = ObjectStorage;

module.exports = ObjectStorage;
