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

import request = require("request");
import http = require("http");
import { Configuration } from "./internal/configuration";
import { ObjectSerializer } from "./internal/objectSerializer";
import { addQueryParameterToUrl, invokeApiMethod } from "./internal/requestHelper";
import * as model from "./model/model";


/**
 * Library for communicating with the Aspose.Diagram Cloud API
 */
export class DiagramApi {
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
     * Converts document from the request's content to the specified format.
     * @param requestObj contains request parameters
     */
    public async diagramNameConvertPut(requestObj: model.ConvertDocumentRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling diagramNameConvertPut.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/diagram/{name}/convert"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling diagramNameConvertPut.');
        }

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling diagramNameConvertPut.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "sourceFilename", requestObj.sourceFilename);
        if (requestObj.file !== undefined) {
            formParams.File = requestObj.file;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "Buffer");
        return Promise.resolve({body: result, response});
    }

    /**
     * Exports the document into the specified format.
     * @param requestObj contains request parameters
     */
    public async diagramNameGet(requestObj: model.DownloadFileWithFormatRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling diagramNameGet.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/diagram/{name}"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling diagramNameGet.');
        }

        // verify required parameter 'requestObj.format' is not null or undefined
        if (requestObj.format === null || requestObj.format === undefined) {
            throw new Error('Required parameter "requestObj.format" was null or undefined when calling diagramNameGet.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "format", requestObj.format);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
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
     * Create Empty file into the specified format.
     * @param requestObj contains request parameters
     */
    public async diagramNamePut(requestObj: model.CreateNewRequest): Promise<{response: http.ClientResponse, body: model.CreateNewResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling diagramNamePut.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/diagram/{name}"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling diagramNamePut.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isOverwrite", requestObj.isOverwrite);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "CreateNewResponse");
        return Promise.resolve({body: result, response});
    }

    /**
     * Converts document to destination format with detailed settings and saves result to storage.
     * @param requestObj contains request parameters
     */
    public async diagramNameSaveAsPost(requestObj: model.SaveAsRequest): Promise<{response: http.ClientResponse, body: model.SaveAsResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling diagramNameSaveAsPost.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/diagram/{name}/saveAs"
            .replace("{" + "name" + "}", String(requestObj.name));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.name' is not null or undefined
        if (requestObj.name === null || requestObj.name === undefined) {
            throw new Error('Required parameter "requestObj.name" was null or undefined when calling diagramNameSaveAsPost.');
        }

        // verify required parameter 'requestObj.saveOptionsRequest' is not null or undefined
        if (requestObj.saveOptionsRequest === null || requestObj.saveOptionsRequest === undefined) {
            throw new Error('Required parameter "requestObj.saveOptionsRequest" was null or undefined when calling diagramNameSaveAsPost.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "folder", requestObj.folder);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "isOverwrite", requestObj.isOverwrite);
        const requestOptions: request.Options = {
            method: "POST",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
            body: (requestObj.saveOptionsRequest == null) ? null : ObjectSerializer.serialize(requestObj.saveOptionsRequest, requestObj.saveOptionsRequest.constructor.name === "Object" ? "SaveOptionsRequest" : requestObj.saveOptionsRequest.constructor.name),
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "SaveAsResponse");
        return Promise.resolve({body: result, response});
    }

}
/**
 * Library for communicating with the Aspose.Diagram Cloud API
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
    public async connectTokenPost(requestObj: model.OAuth_PostRequest): Promise<{response: http.ClientResponse, body: model.AccessTokenResponse}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling connectTokenPost.');
        }

        const localVarPath = this.configuration.getAuthApiBaseUrl() + "/connect/token";
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.grantType' is not null or undefined
        if (requestObj.grantType === null || requestObj.grantType === undefined) {
            throw new Error('Required parameter "requestObj.grantType" was null or undefined when calling connectTokenPost.');
        }

        // verify required parameter 'requestObj.clientId' is not null or undefined
        if (requestObj.clientId === null || requestObj.clientId === undefined) {
            throw new Error('Required parameter "requestObj.clientId" was null or undefined when calling connectTokenPost.');
        }

        // verify required parameter 'requestObj.clientSecret' is not null or undefined
        if (requestObj.clientSecret === null || requestObj.clientSecret === undefined) {
            throw new Error('Required parameter "requestObj.clientSecret" was null or undefined when calling connectTokenPost.');
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
/**
 * Library for communicating with the Aspose.Diagram Cloud API
 */
export class StorageApi {
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
     * Get disc usage
     * @param requestObj contains request parameters
     */
    public async diagramStorageDiscGet(requestObj: model.GetDiscUsageRequest): Promise<{response: http.ClientResponse, body: model.DiscUsage}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling diagramStorageDiscGet.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/diagram/storage/disc";
        const queryParameters: any = {};
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "DiscUsage");
        return Promise.resolve({body: result, response});
    }

    /**
     * Check if file or folder exists
     * @param requestObj contains request parameters
     */
    public async diagramStorageExistPathGet(requestObj: model.ObjectExistsRequest): Promise<{response: http.ClientResponse, body: model.ObjectExist}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling diagramStorageExistPathGet.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/diagram/storage/exist/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling diagramStorageExistPathGet.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "ObjectExist");
        return Promise.resolve({body: result, response});
    }

    /**
     * Copy file
     * @param requestObj contains request parameters
     */
    public async diagramStorageFileCopySrcPathPut(requestObj: model.CopyFileRequest): Promise<{response: http.ClientResponse,  body?: any; }> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling diagramStorageFileCopySrcPathPut.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/diagram/storage/file/copy/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling diagramStorageFileCopySrcPathPut.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling diagramStorageFileCopySrcPathPut.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "");
        return Promise.resolve({body: result, response});
    }

    /**
     * Move file
     * @param requestObj contains request parameters
     */
    public async diagramStorageFileMoveSrcPathPut(requestObj: model.MoveFileRequest): Promise<{response: http.ClientResponse,  body?: any; }> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling diagramStorageFileMoveSrcPathPut.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/diagram/storage/file/move/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling diagramStorageFileMoveSrcPathPut.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling diagramStorageFileMoveSrcPathPut.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete file
     * @param requestObj contains request parameters
     */
    public async diagramStorageFilePathDelete(requestObj: model.DeleteFileRequest): Promise<{response: http.ClientResponse,  body?: any; }> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling diagramStorageFilePathDelete.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/diagram/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling diagramStorageFilePathDelete.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "");
        return Promise.resolve({body: result, response});
    }

    /**
     * Download file
     * @param requestObj contains request parameters
     */
    public async diagramStorageFilePathGet(requestObj: model.DownloadFileRequest): Promise<{response: http.ClientResponse, body: Buffer}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling diagramStorageFilePathGet.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/diagram/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling diagramStorageFilePathGet.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "versionId", requestObj.versionId);
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
     * Upload file
     * @param requestObj contains request parameters
     */
    public async diagramStorageFilePathPut(requestObj: model.UploadFileRequest): Promise<{response: http.ClientResponse, body: model.FilesUploadResult}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling diagramStorageFilePathPut.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/diagram/storage/file/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};
        const formParams: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling diagramStorageFilePathPut.');
        }

        // verify required parameter 'requestObj.file' is not null or undefined
        if (requestObj.file === null || requestObj.file === undefined) {
            throw new Error('Required parameter "requestObj.file" was null or undefined when calling diagramStorageFilePathPut.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        if (requestObj.file !== undefined) {
            formParams.File = requestObj.file;
        }

        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        (requestOptions as any).formData = formParams;        
        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesUploadResult");
        return Promise.resolve({body: result, response});
    }

    /**
     * Copy folder
     * @param requestObj contains request parameters
     */
    public async diagramStorageFolderCopySrcPathPut(requestObj: model.CopyFolderRequest): Promise<{response: http.ClientResponse,  body?: any; }> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling diagramStorageFolderCopySrcPathPut.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/diagram/storage/folder/copy/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling diagramStorageFolderCopySrcPathPut.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling diagramStorageFolderCopySrcPathPut.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "");
        return Promise.resolve({body: result, response});
    }

    /**
     * Move folder
     * @param requestObj contains request parameters
     */
    public async diagramStorageFolderMoveSrcPathPut(requestObj: model.MoveFolderRequest): Promise<{response: http.ClientResponse,  body?: any; }> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling diagramStorageFolderMoveSrcPathPut.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/diagram/storage/folder/move/{srcPath}"
            .replace("{" + "srcPath" + "}", String(requestObj.srcPath));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.srcPath' is not null or undefined
        if (requestObj.srcPath === null || requestObj.srcPath === undefined) {
            throw new Error('Required parameter "requestObj.srcPath" was null or undefined when calling diagramStorageFolderMoveSrcPathPut.');
        }

        // verify required parameter 'requestObj.destPath' is not null or undefined
        if (requestObj.destPath === null || requestObj.destPath === undefined) {
            throw new Error('Required parameter "requestObj.destPath" was null or undefined when calling diagramStorageFolderMoveSrcPathPut.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destPath", requestObj.destPath);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "srcStorageName", requestObj.srcStorageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "destStorageName", requestObj.destStorageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "");
        return Promise.resolve({body: result, response});
    }

    /**
     * Delete folder
     * @param requestObj contains request parameters
     */
    public async diagramStorageFolderPathDelete(requestObj: model.DeleteFolderRequest): Promise<{response: http.ClientResponse,  body?: any; }> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling diagramStorageFolderPathDelete.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/diagram/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling diagramStorageFolderPathDelete.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "recursive", requestObj.recursive);
        const requestOptions: request.Options = {
            method: "DELETE",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get all files and folders within a folder
     * @param requestObj contains request parameters
     */
    public async diagramStorageFolderPathGet(requestObj: model.GetFilesListRequest): Promise<{response: http.ClientResponse, body: model.FilesList}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling diagramStorageFolderPathGet.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/diagram/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling diagramStorageFolderPathGet.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FilesList");
        return Promise.resolve({body: result, response});
    }

    /**
     * Create the folder
     * @param requestObj contains request parameters
     */
    public async diagramStorageFolderPathPut(requestObj: model.CreateFolderRequest): Promise<{response: http.ClientResponse,  body?: any; }> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling diagramStorageFolderPathPut.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/diagram/storage/folder/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling diagramStorageFolderPathPut.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "PUT",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "");
        return Promise.resolve({body: result, response});
    }

    /**
     * Check if storage exists
     * @param requestObj contains request parameters
     */
    public async diagramStorageStorageNameExistGet(requestObj: model.StorageExistsRequest): Promise<{response: http.ClientResponse, body: model.StorageExist}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling diagramStorageStorageNameExistGet.');
        }

        const localVarPath = this.configuration.getApiBaseUrl() + "/diagram/storage/{storageName}/exist"
            .replace("{" + "storageName" + "}", String(requestObj.storageName));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.storageName' is not null or undefined
        if (requestObj.storageName === null || requestObj.storageName === undefined) {
            throw new Error('Required parameter "requestObj.storageName" was null or undefined when calling diagramStorageStorageNameExistGet.');
        }
        
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "StorageExist");
        return Promise.resolve({body: result, response});
    }

    /**
     * Get file versions
     * @param requestObj contains request parameters
     */
    public async diagramStorageVersionPathGet(requestObj: model.GetFileVersionsRequest): Promise<{response: http.ClientResponse, body: model.FileVersions}> {
        if (requestObj === null || requestObj === undefined) {
            throw new Error('Required parameter "requestObj" was null or undefined when calling diagramStorageVersionPathGet.');
        }

        let localVarPath = this.configuration.getApiBaseUrl() + "/diagram/storage/version/{path}"
            .replace("{" + "path" + "}", String(requestObj.path));
        const queryParameters: any = {};

        // verify required parameter 'requestObj.path' is not null or undefined
        if (requestObj.path === null || requestObj.path === undefined) {
            throw new Error('Required parameter "requestObj.path" was null or undefined when calling diagramStorageVersionPathGet.');
        }
        
        localVarPath = addQueryParameterToUrl(localVarPath, queryParameters, "storageName", requestObj.storageName);
        const requestOptions: request.Options = {
            method: "GET",
            qs: queryParameters,
            uri: localVarPath,
            json: true,
        };

        const response = await invokeApiMethod(requestOptions, this.configuration);
        const result =  ObjectSerializer.deserialize(response.body, "FileVersions");
        return Promise.resolve({body: result, response});
    }

}
