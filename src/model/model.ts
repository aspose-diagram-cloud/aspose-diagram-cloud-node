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
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
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
        }];

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

/**
 * Class for disc space information.
 */
export class DiscUsage {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "usedSize",
            baseName: "UsedSize",
            type: "number",
        },
        {
            name: "totalSize",
            baseName: "TotalSize",
            type: "number",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DiscUsage.attributeTypeMap;
    }

    /**
     * Application used disc space.
     */
    public usedSize: number;

    /**
     * Total disc space.
     */
    public totalSize: number;

    public constructor(init?: Partial<DiscUsage>) {

        Object.assign(this, init);
    }
}

/**
 * The error details
 */
export class ErrorDetails {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "requestId",
            baseName: "RequestId",
            type: "string",
        },
        {
            name: "date",
            baseName: "Date",
            type: "Date",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ErrorDetails.attributeTypeMap;
    }

    /**
     * The request id
     */
    public requestId: string;

    /**
     * Date
     */
    public date: Date;

    public constructor(init?: Partial<ErrorDetails>) {

        Object.assign(this, init);
    }
}

/**
 * File versions FileVersion.
 */
export class FileVersions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "value",
            baseName: "Value",
            type: "Array<FileVersion>",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FileVersions.attributeTypeMap;
    }

    /**
     * File versions FileVersion.
     */
    public value: Array<FileVersion>;

    public constructor(init?: Partial<FileVersions>) {

        Object.assign(this, init);
    }
}

/**
 * Files list
 */
export class FilesList {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "value",
            baseName: "Value",
            type: "Array<StorageFile>",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesList.attributeTypeMap;
    }

    /**
     * Files and folders contained by folder StorageFile.
     */
    public value: Array<StorageFile>;

    public constructor(init?: Partial<FilesList>) {

        Object.assign(this, init);
    }
}

/**
 * File upload result
 */
export class FilesUploadResult {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "uploaded",
            baseName: "Uploaded",
            type: "Array<string>",
        },
        {
            name: "errors",
            baseName: "Errors",
            type: "Array<Error>",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return FilesUploadResult.attributeTypeMap;
    }

    /**
     * List of uploaded file names
     */
    public uploaded: Array<string>;

    /**
     * List of errors.
     */
    public errors: Array<Error>;

    public constructor(init?: Partial<FilesUploadResult>) {

        Object.assign(this, init);
    }
}

/**
 * Error
 */
export class ModelError {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "code",
            baseName: "Code",
            type: "string",
        },
        {
            name: "message",
            baseName: "Message",
            type: "string",
        },
        {
            name: "description",
            baseName: "Description",
            type: "string",
        },
        {
            name: "innerError",
            baseName: "InnerError",
            type: "ErrorDetails",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }

    /**
     * Code             
     */
    public code: string;

    /**
     * Message             
     */
    public message: string;

    /**
     * Description             
     */
    public description: string;

    /**
     * Inner Error             
     */
    public innerError: ErrorDetails;

    public constructor(init?: Partial<ModelError>) {

        Object.assign(this, init);
    }
}

/**
 * Object exists
 */
export class ObjectExist {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "exists",
            baseName: "Exists",
            type: "boolean",
        },
        {
            name: "isFolder",
            baseName: "IsFolder",
            type: "boolean",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ObjectExist.attributeTypeMap;
    }

    /**
     * Indicates that the file or folder exists.
     */
    public exists: boolean;

    /**
     * True if it is a folder, false if it is a file.
     */
    public isFolder: boolean;

    public constructor(init?: Partial<ObjectExist>) {

        Object.assign(this, init);
    }
}

export class PageSize {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "paperSizeFormat",
            baseName: "PaperSizeFormat",
            type: "PageSize.PaperSizeFormatEnum",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PageSize.attributeTypeMap;
    }

    public paperSizeFormat: PageSize.PaperSizeFormatEnum;

    public constructor(init?: Partial<PageSize>) {

        Object.assign(this, init);
    }
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PageSize {
    export enum PaperSizeFormatEnum {
        Custom = 'Custom' as any,
        A0 = 'A0' as any,
        A1 = 'A1' as any,
        A2 = 'A2' as any,
        A3 = 'A3' as any,
        A4 = 'A4' as any,
        A5 = 'A5' as any,
        A6 = 'A6' as any,
        A7 = 'A7' as any,
        B0 = 'B0' as any,
        B1 = 'B1' as any,
        B2 = 'B2' as any,
        B3 = 'B3' as any,
        B4 = 'B4' as any,
        B5 = 'B5' as any,
        B6 = 'B6' as any,
        B7 = 'B7' as any,
        C0 = 'C0' as any,
        C1 = 'C1' as any,
        C2 = 'C2' as any,
        C3 = 'C3' as any,
        C4 = 'C4' as any,
        C5 = 'C5' as any,
        C6 = 'C6' as any,
        C7 = 'C7' as any,
        Letter = 'Letter' as any,
        Legal = 'Legal' as any,
        Legal13 = 'Legal13' as any,
        Tabloid = 'Tabloid' as any,
        Executive = 'Executive' as any,
        DL = 'DL' as any,
        COM9 = 'COM9' as any,
        COM10 = 'COM10' as any,
        Monarch = 'Monarch' as any,
    }
}
// tslint:enable:quotemark
export class PdfDigitalSignatureDetails {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "signatureDate",
            baseName: "SignatureDate",
            type: "Date",
        },
        {
            name: "reason",
            baseName: "Reason",
            type: "string",
        },
        {
            name: "location",
            baseName: "Location",
            type: "string",
        },
        {
            name: "hashAlgorithm",
            baseName: "HashAlgorithm",
            type: "PdfDigitalSignatureDetails.HashAlgorithmEnum",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PdfDigitalSignatureDetails.attributeTypeMap;
    }

    public signatureDate: Date;

    public reason: string;

    public location: string;

    public hashAlgorithm: PdfDigitalSignatureDetails.HashAlgorithmEnum;

    public constructor(init?: Partial<PdfDigitalSignatureDetails>) {

        Object.assign(this, init);
    }
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PdfDigitalSignatureDetails {
    export enum HashAlgorithmEnum {
        Sha1 = 'Sha1' as any,
        Sha256 = 'Sha256' as any,
        Sha384 = 'Sha384' as any,
        Sha512 = 'Sha512' as any,
        Md5 = 'Md5' as any,
    }
}
// tslint:enable:quotemark
export class PdfEncryptionDetails {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "permissions",
            baseName: "Permissions",
            type: "PdfEncryptionDetails.PermissionsEnum",
        },
        {
            name: "encryptionAlgorithm",
            baseName: "EncryptionAlgorithm",
            type: "PdfEncryptionDetails.EncryptionAlgorithmEnum",
        },
        {
            name: "userPassword",
            baseName: "UserPassword",
            type: "string",
        },
        {
            name: "ownerPassword",
            baseName: "OwnerPassword",
            type: "string",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PdfEncryptionDetails.attributeTypeMap;
    }

    public permissions: PdfEncryptionDetails.PermissionsEnum;

    public encryptionAlgorithm: PdfEncryptionDetails.EncryptionAlgorithmEnum;

    public userPassword: string;

    public ownerPassword: string;

    public constructor(init?: Partial<PdfEncryptionDetails>) {

        Object.assign(this, init);
    }
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PdfEncryptionDetails {
    export enum PermissionsEnum {
        DisallowAll = 'DisallowAll' as any,
        Printing = 'Printing' as any,
        ModifyContents = 'ModifyContents' as any,
        ContentCopy = 'ContentCopy' as any,
        ModifyAnnotations = 'ModifyAnnotations' as any,
        FillIn = 'FillIn' as any,
        ContentCopyForAccessibility = 'ContentCopyForAccessibility' as any,
        DocumentAssembly = 'DocumentAssembly' as any,
        HighResolutionPrinting = 'HighResolutionPrinting' as any,
        AllowAll = 'AllowAll' as any,
    }
    export enum EncryptionAlgorithmEnum {
        _40 = 'RC4_40' as any,
        _128 = 'RC4_128' as any,
    }
}
// tslint:enable:quotemark
export class PointF {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "isEmpty",
            baseName: "IsEmpty",
            type: "boolean",
        },
        {
            name: "x",
            baseName: "X",
            type: "number",
        },
        {
            name: "y",
            baseName: "Y",
            type: "number",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PointF.attributeTypeMap;
    }

    public isEmpty: boolean;

    public x: number;

    public y: number;

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

export class RectangleF {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "location",
            baseName: "Location",
            type: "PointF",
        },
        {
            name: "size",
            baseName: "Size",
            type: "string",
        },
        {
            name: "x",
            baseName: "X",
            type: "number",
        },
        {
            name: "y",
            baseName: "Y",
            type: "number",
        },
        {
            name: "width",
            baseName: "Width",
            type: "number",
        },
        {
            name: "height",
            baseName: "Height",
            type: "number",
        },
        {
            name: "left",
            baseName: "Left",
            type: "number",
        },
        {
            name: "top",
            baseName: "Top",
            type: "number",
        },
        {
            name: "right",
            baseName: "Right",
            type: "number",
        },
        {
            name: "bottom",
            baseName: "Bottom",
            type: "number",
        },
        {
            name: "isEmpty",
            baseName: "IsEmpty",
            type: "boolean",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return RectangleF.attributeTypeMap;
    }

    public location: PointF;

    public size: string;

    public x: number;

    public y: number;

    public width: number;

    public height: number;

    public left: number;

    public top: number;

    public right: number;

    public bottom: number;

    public isEmpty: boolean;

    public constructor(init?: Partial<RectangleF>) {

        Object.assign(this, init);
    }
}

export class SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SaaSposeResponse.attributeTypeMap;
    }

    public constructor(init?: Partial<SaaSposeResponse>) {

        Object.assign(this, init);
    }
}

export class SaveOptionsModel {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "saveFormat",
            baseName: "SaveFormat",
            type: "SaveOptionsModel.SaveFormatEnum",
        },
        {
            name: "defaultFont",
            baseName: "DefaultFont",
            type: "string",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SaveOptionsModel.attributeTypeMap;
    }

    public saveFormat: SaveOptionsModel.SaveFormatEnum;

    public defaultFont: string;

    public constructor(init?: Partial<SaveOptionsModel>) {

        Object.assign(this, init);
    }
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace SaveOptionsModel {
    export enum SaveFormatEnum {
        VDX = 'VDX' as any,
        VSX = 'VSX' as any,
        VTX = 'VTX' as any,
        TIFF = 'TIFF' as any,
        PNG = 'PNG' as any,
        BMP = 'BMP' as any,
        EMF = 'EMF' as any,
        JPEG = 'JPEG' as any,
        PDF = 'PDF' as any,
        XPS = 'XPS' as any,
        GIF = 'GIF' as any,
        HTML = 'HTML' as any,
        SVG = 'SVG' as any,
        SWF = 'SWF' as any,
        XAML = 'XAML' as any,
        VSDX = 'VSDX' as any,
        VSTX = 'VSTX' as any,
        VSSX = 'VSSX' as any,
        VSDM = 'VSDM' as any,
        VSSM = 'VSSM' as any,
        VSTM = 'VSTM' as any,
    }
}
// tslint:enable:quotemark
export class SaveOptionsRequest {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "fileName",
            baseName: "FileName",
            type: "string",
        },
        {
            name: "folder",
            baseName: "Folder",
            type: "string",
        },
        {
            name: "saveOptions",
            baseName: "SaveOptions",
            type: "SaveOptionsModel",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return SaveOptionsRequest.attributeTypeMap;
    }

    public fileName: string;

    public folder: string;

    public saveOptions: SaveOptionsModel;

    public constructor(init?: Partial<SaveOptionsRequest>) {

        Object.assign(this, init);
    }
}

/**
 * Storage exists
 */
export class StorageExist {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "exists",
            baseName: "Exists",
            type: "boolean",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageExist.attributeTypeMap;
    }

    /**
     * Shows that the storage exists.             
     */
    public exists: boolean;

    public constructor(init?: Partial<StorageExist>) {

        Object.assign(this, init);
    }
}

/**
 * File or folder information
 */
export class StorageFile {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },
        {
            name: "isFolder",
            baseName: "IsFolder",
            type: "boolean",
        },
        {
            name: "modifiedDate",
            baseName: "ModifiedDate",
            type: "Date",
        },
        {
            name: "size",
            baseName: "Size",
            type: "number",
        },
        {
            name: "path",
            baseName: "Path",
            type: "string",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return StorageFile.attributeTypeMap;
    }

    /**
     * File or folder name.
     */
    public name: string;

    /**
     * True if it is a folder.
     */
    public isFolder: boolean;

    /**
     * File or folder last modified DateTime.
     */
    public modifiedDate: Date;

    /**
     * File or folder size.
     */
    public size: number;

    /**
     * File or folder path.
     */
    public path: string;

    public constructor(init?: Partial<StorageFile>) {

        Object.assign(this, init);
    }
}

export class CreateNewResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "created",
            baseName: "Created",
            type: "string",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CreateNewResponse.attributeTypeMap);
    }

    public created: string;

    public constructor(init?: Partial<CreateNewResponse>) {
        super(init);
        Object.assign(this, init);
    }
}

export class DiagramSaveOptions extends SaveOptionsModel {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "autoFitPageToDrawingContent",
            baseName: "AutoFitPageToDrawingContent",
            type: "boolean",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DiagramSaveOptions.attributeTypeMap);
    }

    public autoFitPageToDrawingContent: boolean;

    public constructor(init?: Partial<DiagramSaveOptions>) {
        super(init);
        Object.assign(this, init);
    }
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace DiagramSaveOptions {
}
// tslint:enable:quotemark
/**
 * File Version
 */
export class FileVersion extends StorageFile {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "versionId",
            baseName: "VersionId",
            type: "string",
        },
        {
            name: "isLatest",
            baseName: "IsLatest",
            type: "boolean",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(FileVersion.attributeTypeMap);
    }

    /**
     * File Version ID.
     */
    public versionId: string;

    /**
     * Specifies whether the file is (true) or is not (false) the latest version of an file.
     */
    public isLatest: boolean;

    public constructor(init?: Partial<FileVersion>) {
        super(init);
        Object.assign(this, init);
    }
}

export class ModifyResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "isSuccess",
            baseName: "IsSuccess",
            type: "boolean",
        },
        {
            name: "message",
            baseName: "Message",
            type: "string",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ModifyResponse.attributeTypeMap);
    }

    public isSuccess: boolean;

    public message: string;

    public constructor(init?: Partial<ModifyResponse>) {
        super(init);
        Object.assign(this, init);
    }
}

export class RenderingSaveOptions extends SaveOptionsModel {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "area",
            baseName: "Area",
            type: "RectangleF",
        },
        {
            name: "exportGuideShapes",
            baseName: "ExportGuideShapes",
            type: "boolean",
        },
        {
            name: "pageSize",
            baseName: "PageSize",
            type: "PageSize",
        },
        {
            name: "isExportComments",
            baseName: "IsExportComments",
            type: "boolean",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(RenderingSaveOptions.attributeTypeMap);
    }

    public area: RectangleF;

    public exportGuideShapes: boolean;

    public pageSize: PageSize;

    public isExportComments: boolean;

    public constructor(init?: Partial<RenderingSaveOptions>) {
        super(init);
        Object.assign(this, init);
    }
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace RenderingSaveOptions {
}
// tslint:enable:quotemark
export class SWFSaveOptions extends SaveOptionsModel {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "pageCount",
            baseName: "PageCount",
            type: "number",
        },
        {
            name: "viewerIncluded",
            baseName: "ViewerIncluded",
            type: "boolean",
        },
        {
            name: "pageIndex",
            baseName: "PageIndex",
            type: "number",
        },
        {
            name: "saveForegroundPagesOnly",
            baseName: "SaveForegroundPagesOnly",
            type: "boolean",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SWFSaveOptions.attributeTypeMap);
    }

    public pageCount: number;

    public viewerIncluded: boolean;

    public pageIndex: number;

    public saveForegroundPagesOnly: boolean;

    public constructor(init?: Partial<SWFSaveOptions>) {
        super(init);
        Object.assign(this, init);
    }
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace SWFSaveOptions {
}
// tslint:enable:quotemark
export class SaveAsResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "sourceFile",
            baseName: "SourceFile",
            type: "string",
        },
        {
            name: "savedFile",
            baseName: "SavedFile",
            type: "string",
        },
        {
            name: "additionals",
            baseName: "Additionals",
            type: "Array<string>",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SaveAsResponse.attributeTypeMap);
    }

    public sourceFile: string;

    public savedFile: string;

    public additionals: Array<string>;

    public constructor(init?: Partial<SaveAsResponse>) {
        super(init);
        Object.assign(this, init);
    }
}

export class UploadResponse extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "uploaded",
            baseName: "Uploaded",
            type: "string",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(UploadResponse.attributeTypeMap);
    }

    public uploaded: string;

    public constructor(init?: Partial<UploadResponse>) {
        super(init);
        Object.assign(this, init);
    }
}

export class XAMLSaveOptions extends SaveOptionsModel {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "pageCount",
            baseName: "PageCount",
            type: "number",
        },
        {
            name: "pageIndex",
            baseName: "PageIndex",
            type: "number",
        },
        {
            name: "saveForegroundPagesOnly",
            baseName: "SaveForegroundPagesOnly",
            type: "boolean",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(XAMLSaveOptions.attributeTypeMap);
    }

    public pageCount: number;

    public pageIndex: number;

    public saveForegroundPagesOnly: boolean;

    public constructor(init?: Partial<XAMLSaveOptions>) {
        super(init);
        Object.assign(this, init);
    }
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace XAMLSaveOptions {
}
// tslint:enable:quotemark
export class XPSSaveOptions extends SaveOptionsModel {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "pageCount",
            baseName: "PageCount",
            type: "number",
        },
        {
            name: "exportHiddenPage",
            baseName: "ExportHiddenPage",
            type: "boolean",
        },
        {
            name: "pageIndex",
            baseName: "PageIndex",
            type: "number",
        },
        {
            name: "saveForegroundPagesOnly",
            baseName: "SaveForegroundPagesOnly",
            type: "boolean",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(XPSSaveOptions.attributeTypeMap);
    }

    public pageCount: number;

    public exportHiddenPage: boolean;

    public pageIndex: number;

    public saveForegroundPagesOnly: boolean;

    public constructor(init?: Partial<XPSSaveOptions>) {
        super(init);
        Object.assign(this, init);
    }
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace XPSSaveOptions {
}
// tslint:enable:quotemark
export class HTMLSaveOptions extends RenderingSaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "pageCount",
            baseName: "PageCount",
            type: "number",
        },
        {
            name: "saveToolBar",
            baseName: "SaveToolBar",
            type: "boolean",
        },
        {
            name: "exportHiddenPage",
            baseName: "ExportHiddenPage",
            type: "boolean",
        },
        {
            name: "pageIndex",
            baseName: "PageIndex",
            type: "number",
        },
        {
            name: "saveForegroundPagesOnly",
            baseName: "SaveForegroundPagesOnly",
            type: "boolean",
        },
        {
            name: "title",
            baseName: "Title",
            type: "string",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(HTMLSaveOptions.attributeTypeMap);
    }

    public pageCount: number;

    public saveToolBar: boolean;

    public exportHiddenPage: boolean;

    public pageIndex: number;

    public saveForegroundPagesOnly: boolean;

    public title: string;

    public constructor(init?: Partial<HTMLSaveOptions>) {
        super(init);
        Object.assign(this, init);
    }
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace HTMLSaveOptions {
}
// tslint:enable:quotemark
export class ImageSaveOptions extends RenderingSaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "imageBrightness",
            baseName: "ImageBrightness",
            type: "number",
        },
        {
            name: "imageContrast",
            baseName: "ImageContrast",
            type: "number",
        },
        {
            name: "jpegQuality",
            baseName: "JpegQuality",
            type: "number",
        },
        {
            name: "pageCount",
            baseName: "PageCount",
            type: "number",
        },
        {
            name: "resolution",
            baseName: "Resolution",
            type: "number",
        },
        {
            name: "scale",
            baseName: "Scale",
            type: "number",
        },
        {
            name: "tiffCompression",
            baseName: "TiffCompression",
            type: "ImageSaveOptions.TiffCompressionEnum",
        },
        {
            name: "exportHiddenPage",
            baseName: "ExportHiddenPage",
            type: "boolean",
        },
        {
            name: "imageColorMode",
            baseName: "ImageColorMode",
            type: "ImageSaveOptions.ImageColorModeEnum",
        },
        {
            name: "pageIndex",
            baseName: "PageIndex",
            type: "number",
        },
        {
            name: "saveForegroundPagesOnly",
            baseName: "SaveForegroundPagesOnly",
            type: "boolean",
        },
        {
            name: "sameAsPdfConversionArea",
            baseName: "SameAsPdfConversionArea",
            type: "boolean",
        },
        {
            name: "pixelOffsetMode",
            baseName: "PixelOffsetMode",
            type: "ImageSaveOptions.PixelOffsetModeEnum",
        },
        {
            name: "smoothingMode",
            baseName: "SmoothingMode",
            type: "ImageSaveOptions.SmoothingModeEnum",
        },
        {
            name: "compositingQuality",
            baseName: "CompositingQuality",
            type: "ImageSaveOptions.CompositingQualityEnum",
        },
        {
            name: "interpolationMode",
            baseName: "InterpolationMode",
            type: "ImageSaveOptions.InterpolationModeEnum",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ImageSaveOptions.attributeTypeMap);
    }

    public imageBrightness: number;

    public imageContrast: number;

    public jpegQuality: number;

    public pageCount: number;

    public resolution: number;

    public scale: number;

    public tiffCompression: ImageSaveOptions.TiffCompressionEnum;

    public exportHiddenPage: boolean;

    public imageColorMode: ImageSaveOptions.ImageColorModeEnum;

    public pageIndex: number;

    public saveForegroundPagesOnly: boolean;

    public sameAsPdfConversionArea: boolean;

    public pixelOffsetMode: ImageSaveOptions.PixelOffsetModeEnum;

    public smoothingMode: ImageSaveOptions.SmoothingModeEnum;

    public compositingQuality: ImageSaveOptions.CompositingQualityEnum;

    public interpolationMode: ImageSaveOptions.InterpolationModeEnum;

    public constructor(init?: Partial<ImageSaveOptions>) {
        super(init);
        Object.assign(this, init);
    }
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace ImageSaveOptions {
    export enum TiffCompressionEnum {
        None = 'None' as any,
        Rle = 'Rle' as any,
        Ccitt3 = 'Ccitt3' as any,
        Ccitt4 = 'Ccitt4' as any,
        Lzw = 'Lzw' as any,
    }
    export enum ImageColorModeEnum {
        None = 'None' as any,
        Grayscale = 'Grayscale' as any,
        BlackAndWhite = 'BlackAndWhite' as any,
    }
    export enum PixelOffsetModeEnum {
        Default = 'Default' as any,
        HighSpeed = 'HighSpeed' as any,
        HighQuality = 'HighQuality' as any,
        None = 'None' as any,
        Half = 'Half' as any,
        Invalid = 'Invalid' as any,
    }
    export enum SmoothingModeEnum {
        Default = 'Default' as any,
        HighSpeed = 'HighSpeed' as any,
        HighQuality = 'HighQuality' as any,
        None = 'None' as any,
        AntiAlias = 'AntiAlias' as any,
        Invalid = 'Invalid' as any,
    }
    export enum CompositingQualityEnum {
        Default = 'Default' as any,
        HighSpeed = 'HighSpeed' as any,
        HighQuality = 'HighQuality' as any,
        GammaCorrected = 'GammaCorrected' as any,
        AssumeLinear = 'AssumeLinear' as any,
        Invalid = 'Invalid' as any,
    }
    export enum InterpolationModeEnum {
        Default = 'Default' as any,
        Low = 'Low' as any,
        High = 'High' as any,
        Bilinear = 'Bilinear' as any,
        Bicubic = 'Bicubic' as any,
        NearestNeighbor = 'NearestNeighbor' as any,
        HighQualityBilinear = 'HighQualityBilinear' as any,
        HighQualityBicubic = 'HighQualityBicubic' as any,
        Invalid = 'Invalid' as any,
    }
}
// tslint:enable:quotemark
export class PdfSaveOptions extends RenderingSaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "horizontalResolution",
            baseName: "HorizontalResolution",
            type: "number",
        },
        {
            name: "verticalResolution",
            baseName: "VerticalResolution",
            type: "number",
        },
        {
            name: "pageCount",
            baseName: "PageCount",
            type: "number",
        },
        {
            name: "jpegQuality",
            baseName: "JpegQuality",
            type: "number",
        },
        {
            name: "exportHiddenPage",
            baseName: "ExportHiddenPage",
            type: "boolean",
        },
        {
            name: "pageIndex",
            baseName: "PageIndex",
            type: "number",
        },
        {
            name: "saveForegroundPagesOnly",
            baseName: "SaveForegroundPagesOnly",
            type: "boolean",
        },
        {
            name: "compliance",
            baseName: "Compliance",
            type: "PdfSaveOptions.ComplianceEnum",
        },
        {
            name: "encryptionDetails",
            baseName: "EncryptionDetails",
            type: "PdfEncryptionDetails",
        },
        {
            name: "textCompression",
            baseName: "TextCompression",
            type: "PdfSaveOptions.TextCompressionEnum",
        },
        {
            name: "splitMultiPages",
            baseName: "SplitMultiPages",
            type: "boolean",
        },
        {
            name: "digitalSignatureDetails",
            baseName: "DigitalSignatureDetails",
            type: "PdfDigitalSignatureDetails",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PdfSaveOptions.attributeTypeMap);
    }

    public horizontalResolution: number;

    public verticalResolution: number;

    public pageCount: number;

    public jpegQuality: number;

    public exportHiddenPage: boolean;

    public pageIndex: number;

    public saveForegroundPagesOnly: boolean;

    public compliance: PdfSaveOptions.ComplianceEnum;

    public encryptionDetails: PdfEncryptionDetails;

    public textCompression: PdfSaveOptions.TextCompressionEnum;

    public splitMultiPages: boolean;

    public digitalSignatureDetails: PdfDigitalSignatureDetails;

    public constructor(init?: Partial<PdfSaveOptions>) {
        super(init);
        Object.assign(this, init);
    }
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace PdfSaveOptions {
    export enum ComplianceEnum {
        Pdf15 = 'Pdf15' as any,
        PdfA1a = 'PdfA1a' as any,
        PdfA1b = 'PdfA1b' as any,
    }
    export enum TextCompressionEnum {
        None = 'None' as any,
        Flate = 'Flate' as any,
    }
}
// tslint:enable:quotemark
export class SVGSaveOptions extends RenderingSaveOptions {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "exportHiddenPage",
            baseName: "ExportHiddenPage",
            type: "boolean",
        },
        {
            name: "quality",
            baseName: "Quality",
            type: "number",
        },
        {
            name: "pageIndex",
            baseName: "PageIndex",
            type: "number",
        },
        {
            name: "sVGFitToViewPort",
            baseName: "SVGFitToViewPort",
            type: "boolean",
        },
        {
            name: "exportElementAsRectTag",
            baseName: "ExportElementAsRectTag",
            type: "boolean",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SVGSaveOptions.attributeTypeMap);
    }

    public exportHiddenPage: boolean;

    public quality: number;

    public pageIndex: number;

    public sVGFitToViewPort: boolean;

    public exportElementAsRectTag: boolean;

    public constructor(init?: Partial<SVGSaveOptions>) {
        super(init);
        Object.assign(this, init);
    }
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace SVGSaveOptions {
}
// tslint:enable:quotemark
const enumsMap = {
    "PageSize.PaperSizeFormatEnum": PageSize.PaperSizeFormatEnum,
    "PdfDigitalSignatureDetails.HashAlgorithmEnum": PdfDigitalSignatureDetails.HashAlgorithmEnum,
    "PdfEncryptionDetails.PermissionsEnum": PdfEncryptionDetails.PermissionsEnum,
    "PdfEncryptionDetails.EncryptionAlgorithmEnum": PdfEncryptionDetails.EncryptionAlgorithmEnum,
    "SaveOptionsModel.SaveFormatEnum": SaveOptionsModel.SaveFormatEnum,
    "ImageSaveOptions.TiffCompressionEnum": ImageSaveOptions.TiffCompressionEnum,
    "ImageSaveOptions.ImageColorModeEnum": ImageSaveOptions.ImageColorModeEnum,
    "ImageSaveOptions.PixelOffsetModeEnum": ImageSaveOptions.PixelOffsetModeEnum,
    "ImageSaveOptions.SmoothingModeEnum": ImageSaveOptions.SmoothingModeEnum,
    "ImageSaveOptions.CompositingQualityEnum": ImageSaveOptions.CompositingQualityEnum,
    "ImageSaveOptions.InterpolationModeEnum": ImageSaveOptions.InterpolationModeEnum,
    "PdfSaveOptions.ComplianceEnum": PdfSaveOptions.ComplianceEnum,
    "PdfSaveOptions.TextCompressionEnum": PdfSaveOptions.TextCompressionEnum,
};

const typeMap = {
    AccessTokenResponse,
    DiscUsage,
    ErrorDetails,
    FileVersions,
    FilesList,
    FilesUploadResult,
    ModelError,
    ObjectExist,
    PageSize,
    PdfDigitalSignatureDetails,
    PdfEncryptionDetails,
    PointF,
    RectangleF,
    SaaSposeResponse,
    SaveOptionsModel,
    SaveOptionsRequest,
    StorageExist,
    StorageFile,
    CreateNewResponse,
    DiagramSaveOptions,
    FileVersion,
    ModifyResponse,
    RenderingSaveOptions,
    SWFSaveOptions,
    SaveAsResponse,
    UploadResponse,
    XAMLSaveOptions,
    XPSSaveOptions,
    HTMLSaveOptions,
    ImageSaveOptions,
    PdfSaveOptions,
    SVGSaveOptions,
};

export { enumsMap, typeMap };

/**
 * Request model for ConvertDocument operation.
 */
export class ConvertDocumentRequest {
    /**
     * Download document name.
     */
    public name: string;

    /**
     * File to upload
     */
    public file: Buffer;

    /**
     * Source document name.
     */
    public sourceFilename: string;

    public constructor(init?: Partial<ConvertDocumentRequest>) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DownloadFileWithFormat operation.
 */
export class DownloadFileWithFormatRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The destination format.
     */
    public format: string;

    /**
     * Original document folder.
     */
    public folder: string;

    public constructor(init?: Partial<DownloadFileWithFormatRequest>) {
        Object.assign(this, init);
    }
}

/**
 * Request model for CreateNew operation.
 */
export class CreateNewRequest {
    /**
     * The document name.
     */
    public name: string;

    /**
     * The document folder.
     */
    public folder: string;

    /**
     * If true overwrite the same name file.The default value is false 
     */
    public isOverwrite: boolean;

    public constructor(init?: Partial<CreateNewRequest>) {
        Object.assign(this, init);
    }
}

/**
 * Request model for SaveAs operation.
 */
export class SaveAsRequest {
    /**
     * Original document name.
     */
    public name: string;

    /**
     * Save options.
     */
    public saveOptionsRequest: SaveOptionsRequest;

    /**
     * Original document folder.
     */
    public folder: string;

    /**
     * If true overwrite the same name file.The default value is false 
     */
    public isOverwrite: boolean;

    public constructor(init?: Partial<SaveAsRequest>) {
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

/**
 * Request model for GetDiscUsage operation.
 */
export class GetDiscUsageRequest {
    /**
     * Storage name
     */
    public storageName: string;

    public constructor(init?: Partial<GetDiscUsageRequest>) {
        Object.assign(this, init);
    }
}

/**
 * Request model for ObjectExists operation.
 */
export class ObjectExistsRequest {
    /**
     * File or folder path e.g. '/file.ext' or '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID
     */
    public versionId: string;

    public constructor(init?: Partial<ObjectExistsRequest>) {
        Object.assign(this, init);
    }
}

/**
 * Request model for CopyFile operation.
 */
export class CopyFileRequest {
    /**
     * Source file path e.g. '/folder/file.ext'
     */
    public srcPath: string;

    /**
     * Destination file path
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    /**
     * File version ID to copy
     */
    public versionId: string;

    public constructor(init?: Partial<CopyFileRequest>) {
        Object.assign(this, init);
    }
}

/**
 * Request model for MoveFile operation.
 */
export class MoveFileRequest {
    /**
     * Source file path e.g. '/src.ext'
     */
    public srcPath: string;

    /**
     * Destination file path e.g. '/dest.ext'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    /**
     * File version ID to move
     */
    public versionId: string;

    public constructor(init?: Partial<MoveFileRequest>) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteFile operation.
 */
export class DeleteFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to delete
     */
    public versionId: string;

    public constructor(init?: Partial<DeleteFileRequest>) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DownloadFile operation.
 */
export class DownloadFileRequest {
    /**
     * File path e.g. '/folder/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * File version ID to download
     */
    public versionId: string;

    public constructor(init?: Partial<DownloadFileRequest>) {
        Object.assign(this, init);
    }
}

/**
 * Request model for UploadFile operation.
 */
export class UploadFileRequest {
    /**
     * Path where to upload including filename and extension e.g. /file.ext or /Folder 1/file.ext             If the content is multipart and path does not contains the file name it tries to get them from filename parameter             from Content-Disposition header.             
     */
    public path: string;

    /**
     * File to upload
     */
    public file: Buffer;

    /**
     * Storage name
     */
    public storageName: string;

    public constructor(init?: Partial<UploadFileRequest>) {
        Object.assign(this, init);
    }
}

/**
 * Request model for CopyFolder operation.
 */
export class CopyFolderRequest {
    /**
     * Source folder path e.g. '/src'
     */
    public srcPath: string;

    /**
     * Destination folder path e.g. '/dst'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    public constructor(init?: Partial<CopyFolderRequest>) {
        Object.assign(this, init);
    }
}

/**
 * Request model for MoveFolder operation.
 */
export class MoveFolderRequest {
    /**
     * Folder path to move e.g. '/folder'
     */
    public srcPath: string;

    /**
     * Destination folder path to move to e.g '/dst'
     */
    public destPath: string;

    /**
     * Source storage name
     */
    public srcStorageName: string;

    /**
     * Destination storage name
     */
    public destStorageName: string;

    public constructor(init?: Partial<MoveFolderRequest>) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeleteFolder operation.
 */
export class DeleteFolderRequest {
    /**
     * Folder path e.g. '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    /**
     * Enable to delete folders, subfolders and files
     */
    public recursive: boolean;

    public constructor(init?: Partial<DeleteFolderRequest>) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetFilesList operation.
 */
export class GetFilesListRequest {
    /**
     * Folder path e.g. '/folder'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    public constructor(init?: Partial<GetFilesListRequest>) {
        Object.assign(this, init);
    }
}

/**
 * Request model for CreateFolder operation.
 */
export class CreateFolderRequest {
    /**
     * Folder path to create e.g. 'folder_1/folder_2/'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    public constructor(init?: Partial<CreateFolderRequest>) {
        Object.assign(this, init);
    }
}

/**
 * Request model for StorageExists operation.
 */
export class StorageExistsRequest {
    /**
     * Storage name
     */
    public storageName: string;

    public constructor(init?: Partial<StorageExistsRequest>) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetFileVersions operation.
 */
export class GetFileVersionsRequest {
    /**
     * File path e.g. '/file.ext'
     */
    public path: string;

    /**
     * Storage name
     */
    public storageName: string;

    public constructor(init?: Partial<GetFileVersionsRequest>) {
        Object.assign(this, init);
    }
}

/**
 * Request model for PutNewPage operation.
 */
export class PutNewPageRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * New page name.
     */
    public pageName: string;

    /**
     * Document folder.
     */
    public folder: string;

    public constructor(init?: Partial<PutNewPageRequest>) {
        Object.assign(this, init);
    }
}

/**
 * Request model for GetPages operation.
 */
export class GetPagesRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Document folder.
     */
    public folder: string;

    public constructor(init?: Partial<GetPagesRequest>) {
        Object.assign(this, init);
    }
}

/**
 * Request model for DeletePage operation.
 */
export class DeletePageRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The page name for delete.
     */
    public pageName: string;

    /**
     * Document folder.
     */
    public folder: string;

    public constructor(init?: Partial<DeletePageRequest>) {
        Object.assign(this, init);
    }
}

/**
 * Request model for PostPageSetup operation.
 */
export class PostPageSetupRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * The page name for setting.
     */
    public pageName: string;

    /**
     * Page setting info.
     */
    public pageSetting: PageSetting;

    /**
     * Document folder.
     */
    public folder: string;

    public constructor(init?: Partial<PostPageSetupRequest>) {
        Object.assign(this, init);
    }
}


export class ApiResponseOfListOfPageData extends SaaSposeResponse {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "model",
            baseName: "Model",
            type: "Array<PageData>",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ApiResponseOfListOfPageData.attributeTypeMap);
    }

    public model: Array<PageData>;

    public constructor(init?: Partial<ApiResponseOfListOfPageData>) {
        super(init);
        Object.assign(this, init);
    }
}

/**
 * Shape style setting
 */
export class ShapeStyleData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "backGroundColor",
            baseName: "BackGroundColor",
            type: "string",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ShapeStyleData.attributeTypeMap;
    }

    /**
     * the background color of shape,like '#000000'
     */
    public backGroundColor: string;

    public constructor(init?: Partial<ShapeStyleData>) {

        Object.assign(this, init);
    }
}

/**
 * Text style
 */
export class TextStyleData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "color",
            baseName: "Color",
            type: "string",
        },
        {
            name: "style",
            baseName: "Style",
            type: "TextStyleData.StyleEnum",
        },
        {
            name: "fontName",
            baseName: "FontName",
            type: "string",
        },
        {
            name: "fontSize",
            baseName: "FontSize",
            type: "number",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return TextStyleData.attributeTypeMap;
    }

    public color: string;

    public style: TextStyleData.StyleEnum;

    public fontName: string;

    public fontSize: number;

    public constructor(init?: Partial<TextStyleData>) {

        Object.assign(this, init);
    }
}

// tslint:disable:quotemark
// tslint:disable-next-line:no-namespace
export namespace TextStyleData {
    export enum StyleEnum {
        Bold = 'Bold' as any,
        Italic = 'Italic' as any,
        Underline = 'Underline' as any,
        SmallCaps = 'SmallCaps' as any,
        Undefined = 'Undefined' as any,
    }
}

export class DrawShapeData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "pinX",
            baseName: "PinX",
            type: "number",
        },
        {
            name: "pinY",
            baseName: "PinY",
            type: "number",
        },
        {
            name: "width",
            baseName: "Width",
            type: "number",
        },
        {
            name: "height",
            baseName: "Height",
            type: "number",
        },
        {
            name: "shapeStyleData",
            baseName: "ShapeStyleData",
            type: "ShapeStyleData",
        },
        {
            name: "text",
            baseName: "Text",
            type: "string",
        },
        {
            name: "textStyleData",
            baseName: "TextStyleData",
            type: "TextStyleData",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return DrawShapeData.attributeTypeMap;
    }

    public pinX: number;

    public pinY: number;

    public width: number;

    public height: number;

    public shapeStyleData: ShapeStyleData;

    public text: string;

    public textStyleData: TextStyleData;

    public constructor(init?: Partial<DrawShapeData>) {

        Object.assign(this, init);
    }
}

export class EllipseData extends DrawShapeData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
    ];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EllipseData.attributeTypeMap);
    }

    public constructor(init?: Partial<EllipseData>) {
        super(init);
        Object.assign(this, init);
    }
}

export class LineData extends DrawShapeData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "points",
            baseName: "Points",
            type: "Array<PointF>",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(LineData.attributeTypeMap);
    }

    public points: Array<PointF>;

    public constructor(init?: Partial<LineData>) {
        super(init);
        Object.assign(this, init);
    }
}

export class PolylineData extends DrawShapeData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "points",
            baseName: "Points",
            type: "Array<PointF>",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PolylineData.attributeTypeMap);
    }

    public points: Array<PointF>;

    public constructor(init?: Partial<PolylineData>) {
        super(init);
        Object.assign(this, init);
    }
}

/**
 * Request model for PutDrawEllipse operation.
 */
export class PutDrawEllipseRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Page name.
     */
    public pageName: string;

    /**
     * drawing ellipse data.
     */
    public ellipseData: EllipseData;

    /**
     * Document folder.
     */
    public folder: string;

    public constructor(init?: Partial<PutDrawEllipseRequest>) {
        Object.assign(this, init);
    }
}

/**
 * Request model for PutDrawLine operation.
 */
export class PutDrawLineRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Page name.
     */
    public pageName: string;

    /**
     * drawing line data.
     */
    public lineData: LineData;

    /**
     * Document folder.
     */
    public folder: string;

    public constructor(init?: Partial<PutDrawLineRequest>) {
        Object.assign(this, init);
    }
}

/**
 * Request model for PutDrawPolyline operation.
 */
export class PutDrawPolylineRequest {
    /**
     * Document name.
     */
    public name: string;

    /**
     * Page name.
     */
    public pageName: string;

    /**
     * drawing polyline data.
     */
    public polylineData: PolylineData;

    /**
     * Document folder.
     */
    public folder: string;

    public constructor(init?: Partial<PutDrawPolylineRequest>) {
        Object.assign(this, init);
    }
}

/**
 * page setting info
 */
export class PageSetting {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "name",
            baseName: "Name",
            type: "string",
        },
        {
            name: "nameU",
            baseName: "NameU",
            type: "string",
        },
        {
            name: "pageWidth",
            baseName: "PageWidth",
            type: "number",
        },
        {
            name: "pageHeight",
            baseName: "PageHeight",
            type: "number",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PageSetting.attributeTypeMap;
    }

    /**
     * Page Name
     */
    public name: string;

    /**
     * Page Name
     */
    public nameU: string;

    /**
     * Page Width
     */
    public pageWidth: number;

    /**
     * Page Height
     */
    public pageHeight: number;

    public constructor(init?: Partial<PageSetting>) {

        Object.assign(this, init);
    }
}


export class PageData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "iD",
            baseName: "ID",
            type: "number",
        },
        {
            name: "pageSetting",
            baseName: "PageSetting",
            type: "PageSetting",
        },
        {
            name: "shapes",
            baseName: "Shapes",
            type: "Array<ShapeData>",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return PageData.attributeTypeMap;
    }

    /**
     * Page Id
     */
    public iD: number;

    /**
     * page setting info
     */
    public pageSetting: PageSetting;

    /**
     * shape list
     */
    public shapes: Array<ShapeData>;

    public constructor(init?: Partial<PageData>) {

        Object.assign(this, init);
    }
}

export class ShapeData {

    /**
     * Attribute type map
     */
    public static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
        {
            name: "iD",
            baseName: "ID",
            type: "number",
        },
        {
            name: "pinX",
            baseName: "PinX",
            type: "number",
        },
        {
            name: "pinY",
            baseName: "PinY",
            type: "number",
        }];

    /**
     * Returns attribute type map
     */
    public static getAttributeTypeMap() {
        return ShapeData.attributeTypeMap;
    }

    public iD: number;

    public pinX: number;

    public pinY: number;

    public constructor(init?: Partial<ShapeData>) {

        Object.assign(this, init);
    }
}