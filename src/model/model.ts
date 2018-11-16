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

export class AccessTokenResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "expires",
            baseName: ".expires",
            type: "string",
        },        
        {
            name: "accessToken",
            baseName: "access_token",
            type: "string",
        },        
        {
            name: "issued",
            baseName: ".issued",
            type: "string",
        },        
        {
            name: "clientRefreshTokenLifeTimeInMinutes",
            baseName: "clientRefreshTokenLifeTimeInMinutes",
            type: "string",
        },        
        {
            name: "expiresIn",
            baseName: "expires_in",
            type: "number",
        },        
        {
            name: "tokenType",
            baseName: "token_type",
            type: "string",
        },        
        {
            name: "clientId",
            baseName: "client_id",
            type: "string",
        },        
        {
            name: "refreshToken",
            baseName: "refresh_token",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return AccessTokenResponse.attributeTypeMap;
    }

    public expires: string;
    
    public accessToken: string;
    
    public issued: string;
    
    public clientRefreshTokenLifeTimeInMinutes: string;
    
    public expiresIn: number;
    
    public tokenType: string;
    
    public clientId: string;
    
    public refreshToken: string;
    
    public constructor(init?: Partial<AccessTokenResponse>) {
        
        Object.assign(this, init);
    }        
}

export class DiagramModel {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "fileName",
            baseName: "FileName",
            type: "string",
        },        
        {
            name: "pages",
            baseName: "Pages",
            type: "Array<PageModel>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DiagramModel.attributeTypeMap;
    }

    public fileName: string;
    
    public pages: Array<PageModel>;
    
    public constructor(init?: Partial<DiagramModel>) {
        
        Object.assign(this, init);
    }        
}

export class FileFormatRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "format",
            baseName: "Format",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FileFormatRequest.attributeTypeMap;
    }

    public format: string;
    
    public constructor(init?: Partial<FileFormatRequest>) {
        
        Object.assign(this, init);
    }        
}

export class Link {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "href",
            baseName: "Href",
            type: "string",
        },        
        {
            name: "type",
            baseName: "Type",
            type: "string",
        },        
        {
            name: "rel",
            baseName: "Rel",
            type: "string",
        },        
        {
            name: "title",
            baseName: "Title",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return Link.attributeTypeMap;
    }

    public href: string;
    
    public type: string;
    
    public rel: string;
    
    public title: string;
    
    public constructor(init?: Partial<Link>) {
        
        Object.assign(this, init);
    }        
}

export class PageModel {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "pageName",
            baseName: "PageName",
            type: "string",
        },        
        {
            name: "sharps",
            baseName: "Sharps",
            type: "Array<SharpModel>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PageModel.attributeTypeMap;
    }

    public pageName: string;
    
    public sharps: Array<SharpModel>;
    
    public constructor(init?: Partial<PageModel>) {
        
        Object.assign(this, init);
    }        
}

export class SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "status",
            baseName: "Status",
            type: "string",
        },        
        {
            name: "code",
            baseName: "Code",
            type: "number",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SaaSposeResponse.attributeTypeMap;
    }

    public status: string;
    
    public code: number;
    
    public constructor(init?: Partial<SaaSposeResponse>) {
        
        Object.assign(this, init);
    }        
}

export class SaveResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "sourceDocument",
            baseName: "SourceDocument",
            type: "Link",
        },        
        {
            name: "destDocument",
            baseName: "DestDocument",
            type: "Link",
        },        
        {
            name: "additionalItems",
            baseName: "AdditionalItems",
            type: "Array<Link>",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SaveResult.attributeTypeMap;
    }

    public sourceDocument: Link;
    
    public destDocument: Link;
    
    public additionalItems: Array<Link>;
    
    public constructor(init?: Partial<SaveResult>) {
        
        Object.assign(this, init);
    }        
}

export class SharpModel {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "name",
            baseName: "Name",
            type: "string",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SharpModel.attributeTypeMap;
    }

    public name: string;
    
    public constructor(init?: Partial<SharpModel>) {
        
        Object.assign(this, init);
    }        
}

export class DiagramResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "diagramModel",
            baseName: "diagramModel",
            type: "DiagramModel",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DiagramResponse.attributeTypeMap);
    }

    public diagramModel: DiagramModel;
    
    public constructor(init?: Partial<DiagramResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

export class SaveResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            name: "saveResult",
            baseName: "SaveResult",
            type: "SaveResult",
        }    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SaveResponse.attributeTypeMap);
    }

    public saveResult: SaveResult;
    
    public constructor(init?: Partial<SaveResponse>) {
        super(init);
        Object.assign(this, init);
    }        
}

const enumsMap = {
};

const typeMap = {
            AccessTokenResponse,
            DiagramModel,
            FileFormatRequest,
            Link,
            PageModel,
            SaaSposeResponse,
            SaveResult,
            SharpModel,
            DiagramResponse,
            SaveResponse,
};

export {enumsMap, typeMap};

/**
 * Request model for DiagramFile_GetDiagram operation.
 */
export class DiagramFile_GetDiagramRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The exported file format.
     */
    public format: string;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<DiagramFile_GetDiagramRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DiagramFile_PostSaveAs operation.
 */
export class DiagramFile_PostSaveAsRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * Save format.
     */
    public format: FileFormatRequest;

    /**
     * The new file name.
     */
    public newfilename: string;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * If true overwrite the same name file.The default value is false.
     */
    public isOverwrite: boolean;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<DiagramFile_PostSaveAsRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DiagramFile_PutCreate operation.
 */
export class DiagramFile_PutCreateRequest {
    /**
     * The new document name.
     */
    public name: string;

    /**
     * The new document folder.
     */
    public folder: string;

    /**
     * If true overwrite the same name file.The default value is false.
     */
    public isOverwrite: boolean;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<DiagramFile_PutCreateRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for DiagramFile_PutUpload operation.
 */
export class DiagramFile_PutUploadRequest {

    /**
     * The local file path.
     */
    public localFilePath: string;


    /**
     * The document name.
     */
    public name: string;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * If true overwrite the same name file.The default value is false.
     */
    public isOverwrite: boolean;

    /**
     * storage name.
     */
    public storage: string;
    
    public constructor(init?: Partial<DiagramFile_PutUploadRequest>) {        
        Object.assign(this, init);
    } 
}

/**
 * Request model for OAuth_Post operation.
 */
export class OAuth_PostRequest {
    /**
     * Grant Type
     */
    public grantType: string;

    /**
     * App SID
     */
    public clientId: string;

    /**
     * App Key
     */
    public clientSecret: string;
    
    public constructor(init?: Partial<OAuth_PostRequest>) {        
        Object.assign(this, init);
    } 
}
