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

import http = require("http");
import request = require("request");
import fs = require('fs');
import { Configuration } from "./internal/configuration";
import { ObjectSerializer } from "./internal/objectSerializer";
import { addQueryParameterToUrl, invokeApiMethod } from "./internal/requestHelper";
import * as model from "./model/model";

export * from "./model/model";

/**
 * Library for communicating with the Aspose.Words Cloud API
 */
export class DiagramFileApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    /**
     * @param appSID App SID.
     * @param appKey App key.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean) {
        this.configuration = new Configuration(appSID, appKey, baseUrl, debugMode);
    }

    /**
     * Read document info or export.
     * @param requestObj contains request parameters
     */
    public async diagramFileGetDiagram(requestObj: model.DiagramFile_GetDiagramRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling diagramFileGetDiagram.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/diagram/{name}"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling diagramFileGetDiagram.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Convert document and save result to storage.
     * @param requestObj contains request parameters
     */
    public async diagramFilePostSaveAs(requestObj: model.DiagramFile_PostSaveAsRequest): Promise<{response: http.ClientResponse, body: model.SaveResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling diagramFilePostSaveAs.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/diagram/{name}/SaveAs"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling diagramFilePostSaveAs.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "newfilename", requestObj.newfilename);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isOverwrite", requestObj.isOverwrite);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.format == null) ? null : ObjectSerializer.serialize(requestObj.format, requestObj.format.constructor.name === "Object" ? "FileFormatRequest" : requestObj.format.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SaveResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Create new diagram and save result to storage.
     * @param requestObj contains request parameters
     */
    public async diagramFilePutCreate(requestObj: model.DiagramFile_PutCreateRequest): Promise<{response: http.ClientResponse, body: model.SaaSposeResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling diagramFilePutCreate.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/diagram/{name}"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling diagramFilePutCreate.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isOverwrite", requestObj.isOverwrite);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Upload file and save result to storage.
     * @param requestObj contains request parameters
     */
    public async diagramFilePutUpload(requestObj: model.DiagramFile_PutUploadRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling diagramFilePutUpload.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/diagram/{name}/upload"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling diagramFilePutUpload.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isOverwrite", requestObj.isOverwrite);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storage", requestObj.storage);
        var postData=fs.readFileSync(requestObj.localFilePath).toString("utf-8");
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body:postData

        };
        var path=require('path');
        var localFileName=path.basename(requestObj.localFilePath);
        //console.log(localFileName);
        requestOptions.headers={};
        requestOptions.headers['Content-Type'] = 'multipart/form-data';
        requestOptions.headers["Content-Disposition"] = "form-data; filename=\"" +localFileName + "\"";

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SaaSposeResponse");
        return Promise.resolve({body: result, response});
    }

}
/**
 * Library for communicating with the Aspose.Words Cloud API
 */
export class OAuthApi {
    /**
     * API configuration
     */
    public configuration: Configuration;

    /**
     * @param appSID App SID.
     * @param appKey App key.
     * @param baseUrl Base api Url.
     * @param debugMode A value indicating whether debug mode. In debug mode all requests and responses are logged to console.
     */
    constructor(appSID: string, appKey: string, baseUrl?: string, debugMode?: boolean) {
        this.configuration = new Configuration(appSID, appKey, baseUrl, debugMode);
    }

    /**
     * Get Access token
     * @param requestObj contains request parameters
     */
    public async oAuthPost(requestObj: model.OAuth_PostRequest): Promise<{response: http.ClientResponse, body: model.AccessTokenResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling oAuthPost.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/oauth2/token";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.grantType' is not null or undefined
        if (requestObj.grantType === null || requestObj.grantType === undefined) {
            throw new Error('Required parameter "requestObj.grantType" was null or undefined when calling oAuthPost.');
        }

        // verify required parameter 'requestObj.clientId' is not null or undefined
        if (requestObj.clientId === null || requestObj.clientId === undefined) {
            throw new Error('Required parameter "requestObj.clientId" was null or undefined when calling oAuthPost.');
        }

        // verify required parameter 'requestObj.clientSecret' is not null or undefined
        if (requestObj.clientSecret === null || requestObj.clientSecret === undefined) {
            throw new Error('Required parameter "requestObj.clientSecret" was null or undefined when calling oAuthPost.');
        }
        
        if (requestObj.grantType !== undefined) {
            formParams.grant_type = ObjectSerializer.serialize(requestObj.grantType, "string");
        }

        if (requestObj.clientId !== undefined) {
            formParams.client_id = ObjectSerializer.serialize(requestObj.clientId, "string");
        }

        if (requestObj.clientSecret !== undefined) {
            formParams.client_secret = ObjectSerializer.serialize(requestObj.clientSecret, "string");
        }

        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "AccessTokenResponse");
        return Promise.resolve({body: result, response});
    }

}
