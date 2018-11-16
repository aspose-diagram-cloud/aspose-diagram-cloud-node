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
import * as BaseTest from "./baseTest";

const localPath = "../testData/";

describe('DiagramFileTest', function () {
  this.timeout(20000);
  describe('DiagramFileGetDiagramTest', function () {
    it('Get File successfully', function () {
      const diagramFileApi = BaseTest.initializeDiagramFileApi();
      const storageApi = BaseTest.initializeStorageApi();
      const filename = "file_get_1.vdx";
      return new Promise((resolve) => {
        storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
          expect(responseMessage.status).to.equal("OK");
          resolve();
        });
      })
        .then(() => {
          var req = new model.DiagramFile_GetDiagramRequest();
          req.folder = "Temp";
          req.format = "pdf";
          req.name = filename;

          return diagramFileApi.diagramFileGetDiagram(req)
            .then((result) => {
              expect(result.response.statusCode).to.equal(200);
            });
        });
    });
  });
  describe('DiagramFilePostSaveAsTest', function () {
    it('save as file successfully', function () {
      const diagramFileApi = BaseTest.initializeDiagramFileApi();
      var req = new model.DiagramFile_PostSaveAsRequest();
      var format = new model.FileFormatRequest();
      format.format = "pdf";
      req.name = "file_get_1.vdx";
      req.isOverwrite = true;
      req.folder = "Temp";
      req.newfilename = "file_saveas_1.pdf";
      req.format = format;
      return diagramFileApi.diagramFilePostSaveAs(req)
        .then((result) => {
          expect(result.body.code).to.equal(200);
          expect(result.response.statusCode).to.equal(200);
        });
    });
  });
  describe('DiagramFilePutCreateTest', function () {
    it('create new file successfully', function () {
      const diagramFileApi = BaseTest.initializeDiagramFileApi();
      var req = new model.DiagramFile_PutCreateRequest();
      req.name = "file_create_node.vdx";
      req.isOverwrite = true;
      req.folder = "Temp";
      return diagramFileApi.diagramFilePutCreate(req)
        .then((result) => {
          expect(result.body.code).to.equal(200);
          expect(result.response.statusCode).to.equal(200);
        });
    });
  });
  describe('UploadTest', function () {
    it('upload file with storageApi successfully', function () {
      const storageApi = BaseTest.initializeStorageApi();
      const filename = "node_upload.vsd";
      return storageApi.PutCreate("Temp/" + filename, null, null, localPath + filename, (responseMessage) => {
        expect(responseMessage.status).to.equal("OK");
      });
    });
  });
});
