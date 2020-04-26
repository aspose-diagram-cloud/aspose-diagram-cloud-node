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
import * as BaseTest from "./TestBase";

const fileName = "pageTest.vsdx";
const diagramApi = BaseTest.initializeDiagramApi();
const storageTestFOLDER = "SDKTests/NodeJs"

describe('Create', function () {
    it('Create Empty File successfully', function () {
        var req = new model.CreateNewRequest();
        req.name = fileName;
        req.isOverwrite = true;
        req.folder = storageTestFOLDER;
        return diagramApi.diagramNamePut(req).then((result) => {
            expect(result.body.created).not.to.be.null;
            expect(result.body.created).not.to.be.undefined;
            expect(result.body.created).not.to.be.equal("");
        });
    });
})

describe("PutNewPage", function () {
    it('Put NewPage successfully', function () {
        var req = new model.PutNewPageRequest();
        req.name = fileName;
        req.folder = storageTestFOLDER;
        req.pageName = "newPage"
        return diagramApi.diagramNamePagesAddNewPut(req)
            .then((result) => {
                expect(result.body.isSuccess).be.true;
            });
    });
});

describe("GetPages", function () {
    it('GetPages successfully', function () {
        var req = new model.GetPagesRequest();
        req.name = fileName;
        req.folder = storageTestFOLDER;
        return diagramApi.diagramNamePagesGet(req)
            .then((result) => {
                expect(result.body.Model.length).greaterThan(0);
            });
    });
});

describe("PutNewPage", function () {
    it('Put NewPage successfully', function () {
        var req = new model.PostPageSetupRequest();
        req.name = fileName;
        req.folder = storageTestFOLDER;
        req.pageName = "Page-0";
        var pageSetting = new model.PageSetting();
        pageSetting.pageHeight=2;
        pageSetting.pageWidth=2;
        req.pageSetting = pageSetting;
        
        return diagramApi.diagramNamePagesPageSetupPost(req)
            .then((result) => {
                expect(result.body.isSuccess).be.true;
            });
    });
});