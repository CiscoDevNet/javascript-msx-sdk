/**
 * MSX SDK
 * MSX SDK client.
 *
 * The version of the OpenAPI document: 1.0.8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UserUpdate model module.
 * @module model/UserUpdate
 * @version 1.0.8
 */
class UserUpdate {
    /**
     * Constructs a new <code>UserUpdate</code>.
     * @alias module:model/UserUpdate
     * @param lastName {String} 
     * @param email {String} 
     * @param passwordPolicyName {String} 
     */
    constructor(lastName, email, passwordPolicyName) { 
        
        UserUpdate.initialize(this, lastName, email, passwordPolicyName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, lastName, email, passwordPolicyName) { 
        obj['lastName'] = lastName;
        obj['email'] = email;
        obj['passwordPolicyName'] = passwordPolicyName;
    }

    /**
     * Constructs a <code>UserUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserUpdate} obj Optional instance to populate.
     * @return {module:model/UserUpdate} The populated <code>UserUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserUpdate();

            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('roleIds')) {
                obj['roleIds'] = ApiClient.convertToType(data['roleIds'], ['String']);
            }
            if (data.hasOwnProperty('tenantIds')) {
                obj['tenantIds'] = ApiClient.convertToType(data['tenantIds'], ['String']);
            }
            if (data.hasOwnProperty('passwordPolicyName')) {
                obj['passwordPolicyName'] = ApiClient.convertToType(data['passwordPolicyName'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} firstName
 */
UserUpdate.prototype['firstName'] = undefined;

/**
 * @member {String} lastName
 */
UserUpdate.prototype['lastName'] = undefined;

/**
 * @member {String} email
 */
UserUpdate.prototype['email'] = undefined;

/**
 * @member {Array.<String>} roleIds
 */
UserUpdate.prototype['roleIds'] = undefined;

/**
 * @member {Array.<String>} tenantIds
 */
UserUpdate.prototype['tenantIds'] = undefined;

/**
 * @member {String} passwordPolicyName
 */
UserUpdate.prototype['passwordPolicyName'] = undefined;

/**
 * @member {String} locale
 */
UserUpdate.prototype['locale'] = undefined;






export default UserUpdate;

