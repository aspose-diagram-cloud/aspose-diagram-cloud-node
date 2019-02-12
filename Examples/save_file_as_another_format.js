// For complete examples and data files, please go to https://github.com/aspose-diagram-cloud/aspose-diagram-cloud-node

const { DiagramFileApi, DiagramFile_PostSaveAsRequest, FileFormatRequest } = require("asposediagramcloud");

var AppSid = "" // Get App Key and App SID from https://dashboard.aspose.cloud/
var AppKey = "" // Get App Key and App SID from https://dashboard.aspose.cloud/

diagramFileApi = new DiagramFileApi(AppSid, AppKey);

var StorageApi = require("asposestoragecloud")
var config = {'appSid':AppSid, 'apiKey':AppKey};
var storageApi = new StorageApi(config);

var fileName = '123.vsd';
var data_path = '../testData/';

storageApi.PutCreate(fileName, versionId=null, storage=null, file= data_path + fileName , function(responseMessage) {
	console.log('status:', responseMessage.status);
	console.log('body:', responseMessage.body);
});

var req = new DiagramFile_PostSaveAsRequest();
var format = new FileFormatRequest();
format.format = "pdf";
req.name = fileName;
req.isOverwrite = true;
req.newfilename = "file_saveas_1.pdf";
req.format = format;

diagramFileApi.diagramFilePostSaveAs(req).then((result) => {
    console.log('API Response:', result);
}).catch(function(err) {
    // Deal with an error
    console.log('Error:', err);
});