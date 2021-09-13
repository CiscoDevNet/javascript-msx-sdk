/**
 * MSX SDK
 * MSX SDK client.
 *
 * The version of the OpenAPI document: 1.0.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UpdatePassword model module.
 * @module model/UpdatePassword
 * @version 1.0.5
 */
class UpdatePassword {
    /**
     * Constructs a new <code>UpdatePassword</code>.
     * @alias module:model/UpdatePassword
     * @param username {String} 
     * @param newPassword {String} 
     */
    constructor(username, newPassword) { 
        
        UpdatePassword.initialize(this, username, newPassword);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, username, newPassword) { 
        obj['username'] = username;
        obj['newPassword'] = newPassword;
    }

    /**
     * Constructs a <code>UpdatePassword</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdatePassword} obj Optional instance to populate.
     * @return {module:model/UpdatePassword} The populated <code>UpdatePassword</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdatePassword();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('oldPassword')) {
                obj['oldPassword'] = ApiClient.convertToType(data['oldPassword'], 'String');
            }
            if (data.hasOwnProperty('newPassword')) {
                obj['newPassword'] = ApiClient.convertToType(data['newPassword'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} username
 */
UpdatePassword.prototype['username'] = undefined;

/**
 * @member {String} oldPassword
 */
UpdatePassword.prototype['oldPassword'] = undefined;

/**
 * @member {String} newPassword
 */
UpdatePassword.prototype['newPassword'] = undefined;






export default UpdatePassword;

