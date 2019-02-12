// For complete examples and data files, please go to https://github.com/aspose-diagram-cloud/aspose-diagram-cloud-node

const { DiagramFileApi, DiagramFile_PutCreateRequest } = require("asposediagramcloud");

var AppSid = "" // Get App Key and App SID from https://dashboard.aspose.cloud/
var AppKey = "" // Get App Key and App SID from https://dashboard.aspose.cloud/

diagramFileApi = new DiagramFileApi(AppSid, AppKey);

var req = new DiagramFile_PutCreateRequest();
req.name = "file_create_node.vdx";
req.isOverwrite = true;

diagramFileApi.diagramFilePutCreate(req).then((result) => {
    console.log('API Response:', result);
}).catch(function(err) {
    // Deal with an error
    console.log('Error:', err);
});