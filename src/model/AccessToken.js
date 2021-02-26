/**
 * KAKAPO - MSX SDK
 * MSX Platform SDK
 *
 * The version of the OpenAPI document: 3.10.0
 * Contact: somecontact@cisco.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AccessToken model module.
 * @module model/AccessToken
 * @version 3.10.0
 */
class AccessToken {
    /**
     * Constructs a new <code>AccessToken</code>.
     * @alias module:model/AccessToken
     */
    constructor() { 
        
        AccessToken.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccessToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccessToken} obj Optional instance to populate.
     * @return {module:model/AccessToken} The populated <code>AccessToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccessToken();

            if (data.hasOwnProperty('access_token')) {
                obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
            }
            if (data.hasOwnProperty('token_type')) {
                obj['token_type'] = ApiClient.convertToType(data['token_type'], 'String');
            }
            if (data.hasOwnProperty('expires_in')) {
                obj['expires_in'] = ApiClient.convertToType(data['expires_in'], 'Number');
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('roles')) {
                obj['roles'] = ApiClient.convertToType(data['roles'], ['String']);
            }
            if (data.hasOwnProperty('id_token')) {
                obj['id_token'] = ApiClient.convertToType(data['id_token'], 'String');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} access_token
 */
AccessToken.prototype['access_token'] = undefined;

/**
 * @member {String} token_type
 */
AccessToken.prototype['token_type'] = undefined;

/**
 * @member {Number} expires_in
 */
AccessToken.prototype['expires_in'] = undefined;

/**
 * @member {String} scope
 */
AccessToken.prototype['scope'] = undefined;

/**
 * @member {String} firstName
 */
AccessToken.prototype['firstName'] = undefined;

/**
 * @member {String} lastName
 */
AccessToken.prototype['lastName'] = undefined;

/**
 * @member {Array.<String>} roles
 */
AccessToken.prototype['roles'] = undefined;

/**
 * @member {String} id_token
 */
AccessToken.prototype['id_token'] = undefined;

/**
 * @member {String} tenantId
 */
AccessToken.prototype['tenantId'] = undefined;

/**
 * @member {String} email
 */
AccessToken.prototype['email'] = undefined;

/**
 * @member {String} username
 */
AccessToken.prototype['username'] = undefined;






export default AccessToken;

