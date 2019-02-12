// For complete examples and data files, please go to https://github.com/aspose-diagram-cloud/aspose-diagram-cloud-node

var AppSid = "" // Get App Key and App SID from https://dashboard.aspose.cloud/
var AppKey = "" // Get App Key and App SID from https://dashboard.aspose.cloud/

var StorageApi = require("asposestoragecloud")
var config = {'appSid':AppSid, 'apiKey':AppKey};
var storageApi = new StorageApi(config);

var fileName = 'file_get_1.vdx';
var data_path = '../testData/';

storageApi.PutCreate(fileName, versionId=null, storage=null, file= data_path + fileName , function(responseMessage) {
	console.log('status:', responseMessage.status);
	console.log('body:', responseMessage.body);
});