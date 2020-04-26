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

const fileName = "drawingTest.vsdx";
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

describe("DrawLine", function () {
    it('DrawLine successfully', function () {
        var req = new model.PutDrawLineRequest();
        req.name = fileName;
        req.folder = storageTestFOLDER;
        req.pageName = "Page-0"

        var drawData = new model.LineData();
        drawData.pinX = 1;
        drawData.pinY = 2;
        drawData.width = 1;
        drawData.height = 1;

        let points: Array<model.PointF> = [new model.PointF(0, 0), new model.PointF(0, 1)];
        drawData.points = points;

        drawData.text = "test draw line";
        var shapeStyleData = new model.ShapeStyleData();
        shapeStyleData.backGroundColor = "#FF0000";
        var textStyleData = new model.TextStyleData();
        textStyleData.fontSize = 0.25;
        textStyleData.fontName = "Times New Roman";
        drawData.shapeStyleData = shapeStyleData;
        drawData.textStyleData = textStyleData;

        req.lineData = drawData;
        return diagramApi.diagramNamePagesPageNameDrawLinePut(req)
            .then((result) => {
                expect(result.body.isSuccess).be.true;
            });
    });
});

describe("DrawEllipse", function () {
    it('DrawEllipse successfully', function () {
        var req = new model.PutDrawEllipseRequest();
        req.name = fileName;
        req.folder = storageTestFOLDER;
        req.pageName = "Page-0"

        var drawData = new model.EllipseData();
        drawData.pinX = 5;
        drawData.pinY = 5;
        drawData.width = 1;
        drawData.height = 1;

        drawData.text = "test draw ellipse";
        var shapeStyleData = new model.ShapeStyleData();
        shapeStyleData.backGroundColor = "#FF0000";
        var textStyleData = new model.TextStyleData();
        textStyleData.fontSize = 0.25;
        textStyleData.fontName = "Times New Roman";
        drawData.shapeStyleData = shapeStyleData;
        drawData.textStyleData = textStyleData;

        req.ellipseData = drawData;

        return diagramApi.diagramNamePagesPageNameDrawEllipsePut(req)
            .then((result) => {
                expect(result.body.isSuccess).be.true;
            });
    });
});

describe("DrawPolyline", function () {
    it('DrawPolyline successfully', function () {
        var req = new model.PutDrawPolylineRequest();
        req.name = fileName;
        req.folder = storageTestFOLDER;
        req.pageName = "Page-0"

        var drawData = new model.LineData();
        drawData.pinX = 3;
        drawData.pinY = 3;
        drawData.width = 1;
        drawData.height = 1;


        let points: Array<model.PointF> = [new model.PointF(0, 0), new model.PointF(0, 1), new model.PointF(1, 1), new model.PointF(1, 0)];
        drawData.points = points;

        drawData.text = "test draw poly line";
        var shapeStyleData = new model.ShapeStyleData();
        shapeStyleData.backGroundColor = "#FF0000";
        var textStyleData = new model.TextStyleData();
        textStyleData.fontSize = 0.25;
        textStyleData.fontName = "Times New Roman";
        drawData.shapeStyleData = shapeStyleData;
        drawData.textStyleData = textStyleData;

        req.polylineData = drawData;

        return diagramApi.diagramNamePagesPageNameDrawPolylinePut(req)
            .then((result) => {
                expect(result.body.isSuccess).be.true;
            });
    });
});

