/*
* MIT License

* Copyright (c) 2018 Aspose Pty Ltd

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

import { expect } from "chai";
import "mocha";

import * as model from "../src/model/model";
import * as api from "../src/api";
import * as BaseTest from "./TestBase";

var fs = require('fs');
const localPath = "testData/";
const testFile = "FileUpload.vdx";
const storageTestFOLDER = "SDKTests/NodeJs"
const diagramApi = BaseTest.initializeDiagramApi();
//const diagramApi = new api.DiagramApi("","","");


describe('ConvertTest', function () {
  const storageApi = BaseTest.initializeStorageApi();
  it('Upload Test File successfully', function () {
    var file = fs.createReadStream(localPath + testFile);
    var req = new model.UploadFileRequest();
    req.path = storageTestFOLDER;
    req.file = file;
    return storageApi.diagramStorageFilePathPut(req).then((result) => {
      console.log(result.body);
      expect(result.body.uploaded).not.to.be.null;
      expect(result.body.uploaded).not.to.be.undefined;
      expect(result.body.uploaded).not.to.be.equal("");
    });
  });
})

describe("Create", function () {
  it('Create successfully', function () {
    var req = new model.CreateNewRequest();
    req.name = "file_create.vdx";
    req.isOverwrite = true;
    req.folder = storageTestFOLDER;
    return diagramApi.diagramNamePut(req)
      .then((result) => {
        console.log(result.body);
        expect(result.body.created).not.to.be.null;
        expect(result.body.created).not.to.be.undefined;
        expect(result.body.created).not.to.be.equal("");
      });
  });
});

describe("DownloadWithFormat", function () {
  it('DownloadWithFormat successfully', function () {
    var req = new model.DownloadFileWithFormatRequest;
    req.name = testFile;
    req.format = "pdf";
    req.folder = storageTestFOLDER;
    return diagramApi.diagramNameGet(req)
      .then((result) => {
        expect(result.body.length).greaterThan(0);
      });
  });
});

describe("ConvertTest", function () {
  it('ConvertTest successfully', function () {
    var req = new model.ConvertDocumentRequest();
    req.sourceFilename = testFile;
    req.name = "Convert.pdf";
    req.file = fs.createReadStream(localPath + testFile);
    return diagramApi.diagramNameConvertPut(req)
      .then((result) => {
        expect(result.body.length).greaterThan(0);
      });
  });
});


describe("SaveAs", function () {
  it('SaveAs successfully', function () {
    var req = new model.SaveAsRequest();
    req.name = testFile;
    req.isOverwrite = true;
    req.folder = storageTestFOLDER;
    var saveOptions = new model.SaveOptionsRequest();
    saveOptions.fileName = "FileSaveAs.pdf";
    saveOptions.folder = storageTestFOLDER;
    req.saveOptionsRequest = saveOptions;

    return diagramApi.diagramNameSaveAsPost(req)
      .then((result) => {
        console.log(result.body);
        expect(result.body.savedFile).not.to.be.null;
        expect(result.body.savedFile).not.to.be.undefined;
        expect(result.body.savedFile).not.to.be.equal("");
      });
  });
});


describe("SaveAsPDF", function () {
  it('SaveAsPDF successfully', function () {
    var req = new model.SaveAsRequest();
    req.name = testFile;
    req.isOverwrite = true;
    req.folder = storageTestFOLDER;
    var saveOptionsRequest = new model.SaveOptionsRequest();
    saveOptionsRequest.fileName = "FileSaveAs.pdf";
    saveOptionsRequest.folder = storageTestFOLDER;

    var saveOptions = new model.PdfSaveOptions();
    saveOptions.isExportComments = true;
    saveOptions.jpegQuality = 100;
    saveOptionsRequest.saveOptions = saveOptions;
    req.saveOptionsRequest = saveOptionsRequest;

    return diagramApi.diagramNameSaveAsPost(req)
      .then((result) => {
        console.log(result.body);
        expect(result.body.savedFile).not.to.be.null;
        expect(result.body.savedFile).not.to.be.undefined;
        expect(result.body.savedFile).not.to.be.equal("");
      });
  });
});


describe("SaveAsPNG", function () {
  it('SaveAsPNG successfully', function () {
    var req = new model.SaveAsRequest();
    req.name = testFile;
    req.isOverwrite = true;
    req.folder = storageTestFOLDER;
    var saveOptionsRequest = new model.SaveOptionsRequest();
    saveOptionsRequest.fileName = "FileSaveAs.png";
    saveOptionsRequest.folder = storageTestFOLDER;

    var saveOptions = new model.ImageSaveOptions();
    saveOptions.isExportComments = true;
    saveOptions.jpegQuality = 100;
    saveOptionsRequest.saveOptions = saveOptions;
    req.saveOptionsRequest = saveOptionsRequest;

    return diagramApi.diagramNameSaveAsPost(req)
      .then((result) => {
        console.log(result.body);
        expect(result.body.savedFile).not.to.be.null;
        expect(result.body.savedFile).not.to.be.undefined;
        expect(result.body.savedFile).not.to.be.equal("");
      });
  });
});

describe("SaveAsBMP", function () {
  it('SaveAsBMP successfully', function () {
    var req = new model.SaveAsRequest();
    req.name = testFile;
    req.isOverwrite = true;
    req.folder = storageTestFOLDER;
    var saveOptionsRequest = new model.SaveOptionsRequest();
    saveOptionsRequest.fileName = "FileSaveAs.bmp";
    saveOptionsRequest.folder = storageTestFOLDER;

    var saveOptions = new model.ImageSaveOptions();
    saveOptions.isExportComments = true;
    saveOptions.jpegQuality = 50;
    saveOptionsRequest.saveOptions = saveOptions;
    req.saveOptionsRequest = saveOptionsRequest;

    return diagramApi.diagramNameSaveAsPost(req)
      .then((result) => {
        console.log(result.body);
        expect(result.body.savedFile).not.to.be.null;
        expect(result.body.savedFile).not.to.be.undefined;
        expect(result.body.savedFile).not.to.be.equal("");
      });
  });
});

describe("SaveAsVSSX", function () {
  it('SaveAsVSSX successfully', function () {
    var req = new model.SaveAsRequest();
    req.name = testFile;
    req.isOverwrite = true;
    req.folder = storageTestFOLDER;
    var saveOptionsRequest = new model.SaveOptionsRequest();
    saveOptionsRequest.fileName = "FileSaveAs.vssx";
    saveOptionsRequest.folder = storageTestFOLDER;

    var saveOptions = new model.DiagramSaveOptions();
    saveOptions.defaultFont = "Times New Roman";
    saveOptionsRequest.saveOptions = saveOptions;
    req.saveOptionsRequest = saveOptionsRequest;

    return diagramApi.diagramNameSaveAsPost(req)
      .then((result) => {
        console.log(result.body);
        expect(result.body.savedFile).not.to.be.null;
        expect(result.body.savedFile).not.to.be.undefined;
        expect(result.body.savedFile).not.to.be.equal("");
      });
  });
});

describe("SaveAsVSTM", function () {
  it('SaveAsVSTM successfully', function () {
    var req = new model.SaveAsRequest();
    req.name = testFile;
    req.isOverwrite = true;
    req.folder = storageTestFOLDER;
    var saveOptionsRequest = new model.SaveOptionsRequest();
    saveOptionsRequest.fileName = "FileSaveAs.vstm";
    saveOptionsRequest.folder = storageTestFOLDER;

    var saveOptions = new model.DiagramSaveOptions();
    saveOptions.defaultFont = "Times New Roman";
    saveOptionsRequest.saveOptions = saveOptions;
    req.saveOptionsRequest = saveOptionsRequest;

    return diagramApi.diagramNameSaveAsPost(req)
      .then((result) => {
        console.log(result.body);
        expect(result.body.savedFile).not.to.be.null;
        expect(result.body.savedFile).not.to.be.undefined;
        expect(result.body.savedFile).not.to.be.equal("");
      });
  });
});

describe("SaveAsSVG", function () {
  it('SaveAsSVG successfully', function () {
    var req = new model.SaveAsRequest();
    req.name = testFile;
    req.isOverwrite = true;
    req.folder = storageTestFOLDER;
    var saveOptionsRequest = new model.SaveOptionsRequest();
    saveOptionsRequest.fileName = "FileSaveAs.svg";
    saveOptionsRequest.folder = storageTestFOLDER;

    var saveOptions = new model.SVGSaveOptions();
    saveOptions.isExportComments = true;
    saveOptions.quality = 100;
    saveOptionsRequest.saveOptions = saveOptions;
    req.saveOptionsRequest = saveOptionsRequest;

    return diagramApi.diagramNameSaveAsPost(req)
      .then((result) => {
        console.log(result.body);
        expect(result.body.savedFile).not.to.be.null;
        expect(result.body.savedFile).not.to.be.undefined;
        expect(result.body.savedFile).not.to.be.equal("");
      });
  });
});

describe("SaveAsSWF", function () {
  it('SaveAsSWF successfully', function () {
    var req = new model.SaveAsRequest();
    req.name = testFile;
    req.isOverwrite = true;
    req.folder = storageTestFOLDER;
    var saveOptionsRequest = new model.SaveOptionsRequest();
    saveOptionsRequest.fileName = "FileSaveAs.swf";
    saveOptionsRequest.folder = storageTestFOLDER;

    var saveOptions = new model.SWFSaveOptions();
    saveOptions.saveForegroundPagesOnly = true;
    saveOptionsRequest.saveOptions = saveOptions;
    req.saveOptionsRequest = saveOptionsRequest;

    return diagramApi.diagramNameSaveAsPost(req)
      .then((result) => {
        console.log(result.body);
        expect(result.body.savedFile).not.to.be.null;
        expect(result.body.savedFile).not.to.be.undefined;
        expect(result.body.savedFile).not.to.be.equal("");
      });
  });
});

describe("SaveAsHTML", function () {
  it('SaveAsHTML successfully', function () {
    var req = new model.SaveAsRequest();
    req.name = testFile;
    req.isOverwrite = true;
    req.folder = storageTestFOLDER;
    var saveOptionsRequest = new model.SaveOptionsRequest();
    saveOptionsRequest.fileName = "FileSaveAs.html";
    saveOptionsRequest.folder = storageTestFOLDER;

    var saveOptions = new model.HTMLSaveOptions();
    saveOptions.isExportComments = true;
    saveOptions.title = "Save HTML Test";
    saveOptionsRequest.saveOptions = saveOptions;
    req.saveOptionsRequest = saveOptionsRequest;

    return diagramApi.diagramNameSaveAsPost(req)
      .then((result) => {
        console.log(result.body);
        expect(result.body.savedFile).not.to.be.null;
        expect(result.body.savedFile).not.to.be.undefined;
        expect(result.body.savedFile).not.to.be.equal("");
        expect(result.body.additionals.length).greaterThan(0);
      });
  });
});

describe("SaveAsXPS", function () {
  it('SaveAsXPS successfully', function () {
    var req = new model.SaveAsRequest();
    req.name = testFile;
    req.isOverwrite = true;
    req.folder = storageTestFOLDER;
    var saveOptionsRequest = new model.SaveOptionsRequest();
    saveOptionsRequest.fileName = "FileSaveAs.xps";
    saveOptionsRequest.folder = storageTestFOLDER;

    var saveOptions = new model.XPSSaveOptions();
    saveOptions.saveForegroundPagesOnly = true;
    saveOptionsRequest.saveOptions = saveOptions;
    req.saveOptionsRequest = saveOptionsRequest;

    return diagramApi.diagramNameSaveAsPost(req)
      .then((result) => {
        console.log(result.body);
        expect(result.body.savedFile).not.to.be.null;
        expect(result.body.savedFile).not.to.be.undefined;
        expect(result.body.savedFile).not.to.be.equal("");
      });
  });
});