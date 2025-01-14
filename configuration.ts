/* tslint:disable */
/* eslint-disable */
/*
7shifts API

7shifts is a team management software designed for restaurants. We help managers and operators spend less time and effort scheduling their staff, reduce their monthly labor costs and improve team communication. The result is simplified team management, one shift at a time.

7shifts also offers free mobile apps (iOS and Android) allowing managers and employees to have everything at their fingertips.

Start your free trial or request a demo at www.7shifts.com.

The version of the OpenAPI document: 2023-05-01
Contact: api-support@7shifts.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/


type ApiKey =
  | string
  | ((keyParamName: string) => string)
  | ((keyParamName: string) => Promise<string>)
  | { [apiKeyName: string]: string | undefined };

export interface ConfigurationParameters {
    cookieAuth?: string;
    marketingApiKeyAuth?: string;

    basePath?: string;
    baseOptions?: any;
    oauthTokenUrl?: string;
    oauthClientId?: string;
    oauthClientSecret?: string;
    userAgent?: string;
    formDataCtor?: new () => any;
}

export class Configuration {
    /**
     * parameter for apiKey security
     * @param name security name
     * @memberof Configuration
     */
    apiKey?: ApiKey;
    /**
     * parameter for basic security
     *
     * @type {string}
     * @memberof Configuration
     */
    username?: string;
    /**
     * token url for OAuth2 Application flow
     */
    oauthTokenUrl?: string;
    /**
     * client id for OAuth2 Application flow
     */
    oauthClientId?: string;
    /**
     * client secret for OAuth2 Application flow
     */
    oauthClientSecret?: string;
    /**
     * parameter for basic security
     *
     * @type {string}
     * @memberof Configuration
     */
    password?: string;
    /**
     * parameter for oauth2 security
     * @param name security name
     * @param scopes oauth2 scope
     * @memberof Configuration
     */
    accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string) | ((name?: string, scopes?: string[]) => Promise<string>);
    /**
     * override base path
     *
     * @type {string}
     * @memberof Configuration
     */
    basePath?: string;
    /**
     * base options for axios calls
     *
     * @type {any}
     * @memberof Configuration
     */
    baseOptions?: any;
    /**
     * The FormData constructor that will be used to create multipart form data
     * requests. You can inject this here so that execution environments that
     * do not support the FormData class can still run the generated client.
     *
     * @type {new () => FormData}
     */
    formDataCtor?: new () => any;
    /**
     * Default User-Agent header
     */
    userAgent: string;

    constructor(param: ConfigurationParameters = {}) {

        
        if (this.apiKey === undefined) {
            this.apiKey = {}
            if (param.cookieAuth !== undefined)
                this.apiKey["cookieAuth"] = param.cookieAuth
            if (param.marketingApiKeyAuth !== undefined)
                this.apiKey["marketingApiKeyAuth"] = param.marketingApiKeyAuth
        }
        
        this.basePath = param.basePath;
        this.baseOptions = param.baseOptions ?? {};
        this.userAgent = param.userAgent === undefined ? "Konfig/2023-05-01/typescript" : param.userAgent;
        this.oauthTokenUrl = param.oauthTokenUrl;
        this.oauthClientId = param.oauthClientId;
        this.oauthClientSecret = param.oauthClientSecret;
        this.formDataCtor = param.formDataCtor;
    }

    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    public isJsonMime(mime: string): boolean {
        const jsonMime: RegExp = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    }
}
