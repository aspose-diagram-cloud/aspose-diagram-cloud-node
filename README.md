![](https://img.shields.io/badge/api-v3.0-lightgrey) ![npm](https://img.shields.io/npm/v/asposediagramcloud) ![node-current](https://img.shields.io/node/v/asposediagramcloud) ![npm bundle size](https://img.shields.io/bundlephobia/min/asposediagramcloud) [![GitHub license](https://img.shields.io/github/license/aspose-diagram-cloud/aspose-Diagram-cloud-node)](https://github.com/aspose-diagram-cloud/aspose-Diagram-cloud-node/blob/master/LICENSE)

# Node.js Cloud REST API for Visio Processing

[Aspose.Diagram Cloud SDK for Node.js](https://products.aspose.cloud/diagram/nodejs) helps you develop Visio file manipulation applications with the help of Aspose.Diagram REST API. It allows your applications to work with Microsoft Visio Object Model in order to create the diagrams from scratch or convert diagrams to popular formats including PDF, HTML, images and other Visio formats.

## Visio Processing Features

- [Convert diagrams](https://docs.aspose.cloud/diagram/convert-diagram-file-to-another-format/) to 20+ different file formats.
- Retrieve document information of a Visio diagram.
- Programmatically create a new Microsoft Visio diagram file.
- Convert Visio flow-charts to other supported formats.
- Upload your business-oriented Visio diagrams to cloud storage.
- Export Visio files to raster images, fixed-layout, and HTML formats.

Please refer to [Developer's Guide](https://docs.aspose.cloud/diagram/developer-guide/) to see what else you can achieve.
## Read & Write Visio File Formats

**Microsoft Visio:** VSDX, VSX, VTX, VDX, VSSX, VSTX, VSDM, VSSM, VSTM

## Save Visio Diagrams As

**Fixed Layout:** PDF, XPS
**Images:** JPEG, PNG, BMP, TIFF, SVG, EMF
**Web:** HTML
**Other:** XAML, SWF

## Read Visio Formats

**Microsoft Visio:** VDW, VSD, VSS, VST

## New Features in Version 20.3

Added support to draw following objects on a page:
- Polyline
- Line
- Ellipse

Added support to:
- Set page setting  
- Add new empty page
- Get pages info

For the detailed notes, please visit [Aspose.Diagram Cloud 20.3 Release Notes](https://docs.aspose.cloud/diagram/aspose-diagram-cloud-20-3-release-notes/).

## Integrated Storage API

- Upload, download, copy, move and delete files, including versions handling (if you are using Cloud storage that supports this feature - true by default).
- Create, copy, move and delete folders.
- Copy and move files and folders across separate storages in scope of a single operation.
- Check if certain file, folder or storage exists.

## Getting Started with Aspose.Diagram Cloud SDK for Node.js

Firstly, create an account at [Aspose for Cloud](https://dashboard.aspose.cloud/applications) to get your application information. Now execute `npm install aspose-diagram-cloud-node --save` from the command line to install Aspose.Diagram Cloud SDK for Node.js via NPM.

## Create a Diagram File in the Cloud via Node.js

```js
const { DiagramFileApi, DiagramFile_PutCreateRequest } = require("asposediagramcloud");

var AppSid = ""
var AppKey = ""

diagramFileApi = new DiagramFileApi(AppSid, AppKey);

var req = new DiagramFile_PutCreateRequest();
req.name = "output.vdx";
req.isOverwrite = true;

diagramFileApi.diagramFilePutCreate(req).then((result) => {
    console.log('API Response:', result);
}).catch(function(err) {
    // deal with error
    console.log('Error:', err);
});
```

## Convert Visio to PDF in the Cloud via Node.js

```js
const { DiagramFileApi, DiagramFile_PostSaveAsRequest, FileFormatRequest } = require("asposediagramcloud");

var AppSid = ""
var AppKey = ""

diagramFileApi = new DiagramFileApi(AppSid, AppKey);

var StorageApi = require("asposestoragecloud")
var config = {'appSid':AppSid, 'apiKey':AppKey};
var storageApi = new StorageApi(config);

var fileName = 'template.vsd';
var data_path = '../your path/';

storageApi.PutCreate(fileName, versionId=null, storage=null, file= data_path + fileName , function(responseMessage) {
	console.log('status:', responseMessage.status);
	console.log('body:', responseMessage.body);
});

var req = new DiagramFile_PostSaveAsRequest();
var format = new FileFormatRequest();
format.format = "pdf";
req.name = fileName;
req.isOverwrite = true;
req.newfilename = "output.pdf";
req.format = format;

diagramFileApi.diagramFilePostSaveAs(req).then((result) => {
    console.log('API Response:', result);
}).catch(function(err) {
    // deal with error
    console.log('Error:', err);
});
```

## Aspose.Diagram Cloud SDKs in Popular Languages

| .NET | Java | PHP | Python | Ruby | Node.js | Android | Perl | Swift |
|---|---|---|---|---|---|---|---|---|
| [GitHub](https://github.com/aspose-diagram-cloud/aspose-diagram-cloud-dotnet) | [GitHub](https://github.com/aspose-diagram-cloud/aspose-diagram-cloud-java) | [GitHub](https://github.com/aspose-diagram-cloud/aspose-diagram-cloud-php) | [GitHub](https://github.com/aspose-diagram-cloud/aspose-diagram-cloud-python) | [GitHub](https://github.com/aspose-diagram-cloud/aspose-diagram-cloud-ruby)  | [GitHub](https://github.com/aspose-diagram-cloud/aspose-diagram-cloud-node) | [GitHub](https://github.com/aspose-diagram-cloud/aspose-diagram-cloud-android) | [GitHub](https://github.com/aspose-diagram-cloud/aspose-diagram-cloud-perl) | [GitHub](https://github.com/aspose-diagram-cloud/aspose-diagram-cloud-swift) |
| [NuGet](https://www.nuget.org/packages/Aspose.Diagram-Cloud/) | [Maven](https://repository.aspose.cloud/webapp/#/artifacts/browse/tree/General/repo/com/aspose/aspose-diagram-cloud) | [Composer](https://packagist.org/packages/aspose/diagram-sdk-php) | [PIP](https://pypi.org/project/asposediagramcloud/) | [GEM](https://rubygems.org/gems/aspose_diagram_cloud)  | [NPM](https://www.npmjs.com/package/asposediagramcloud) | [Maven](https://repository.aspose.cloud/webapp/#/artifacts/browse/tree/General/repo/com/aspose/aspose-diagram-cloud-android) |  [CPAN](https://metacpan.org/release/AsposeDiagramCloud-DiagramApi) | [POD](https://cocoapods.org/pods/AsposeDiagramCloud) |

[Home](https://www.aspose.cloud) | [Product Page](https://products.aspose.cloud/diagram/nodejs) | [Documentation](https://docs.aspose.cloud/diagram/) | [Live Demo](https://products.aspose.app/diagram/family) | [API Reference](https://apireference.aspose.cloud/diagram/) | [Code Samples](https://github.com/aspose-diagram-cloud/aspose-diagram-cloud-node) | [Blog](https://blog.aspose.cloud/category/diagram/) | [Free Support](https://forum.aspose.cloud/c/diagram) | [Free Trial](https://dashboard.aspose.cloud/)
