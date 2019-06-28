# scaleway-object-storage
Read and write objects to Scaleway Object Storage using fetch()

## Install
```
$ npm install scaleway-object-storage
```

## Usage
```javascript
var ObjectStorage = require('scaleway-object-storage')
global.fetch = require('node-fetch')

var objectStorage = new ObjectStorage({
    accessKey: '<private accessKey>',
    secretKey: '<private secretKey>',
    region: 'nl-ams'
});

(async function() {
    try {

        let bucket = 'testbucket';
        let key = '/a/test/file.txt';
        let body = 'test file contents';

        let putResponse = await objectStorage.putObject({bucket, key, body})

        console.log(`put status: ${putResponse.status}`)
        console.log(`put response body: '${await putResponse.text()}'`)

        let getResponse = await objectStorage.getObject({bucket, key});

        console.log(`get status: ${getResponse.status}`)
        console.log(`get response body: '${await getResponse.text()}'`)

        let delResponse = await objectStorage.deleteObject({bucket, key});

        console.log(`del status: ${delResponse.status}`)
        console.log(`del response body: '${await delResponse.text()}'`)
    }
    catch (ex) {
        console.log(ex)
    }
}());
```

## License
MIT license; see [LICENSE](./LICENSE).
