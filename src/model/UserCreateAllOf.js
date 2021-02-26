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
 * The UserCreateAllOf model module.
 * @module model/UserCreateAllOf
 * @version 3.10.0
 */
class UserCreateAllOf {
    /**
     * Constructs a new <code>UserCreateAllOf</code>.
     * @alias module:model/UserCreateAllOf
     * @param password {String} 
     */
    constructor(password) { 
        
        UserCreateAllOf.initialize(this, password);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, password) { 
        obj['password'] = password;
    }

    /**
     * Constructs a <code>UserCreateAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserCreateAllOf} obj Optional instance to populate.
     * @return {module:model/UserCreateAllOf} The populated <code>UserCreateAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserCreateAllOf();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} username
 */
UserCreateAllOf.prototype['username'] = undefined;

/**
 * @member {String} password
 */
UserCreateAllOf.prototype['password'] = undefined;






export default UserCreateAllOf;
