/**
 * MSX SDK
 * MSX SDK client.
 *
 * The version of the OpenAPI document: 1.0.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SmartAccountUserRole model module.
 * @module model/SmartAccountUserRole
 * @version 1.0.9
 */
class SmartAccountUserRole {
    /**
     * Constructs a new <code>SmartAccountUserRole</code>.
     * @alias module:model/SmartAccountUserRole
     */
    constructor() { 
        
        SmartAccountUserRole.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SmartAccountUserRole</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SmartAccountUserRole} obj Optional instance to populate.
     * @return {module:model/SmartAccountUserRole} The populated <code>SmartAccountUserRole</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartAccountUserRole();

            if (data.hasOwnProperty('roleName')) {
                obj['roleName'] = ApiClient.convertToType(data['roleName'], 'String');
            }
            if (data.hasOwnProperty('virtualAccountId')) {
                obj['virtualAccountId'] = ApiClient.convertToType(data['virtualAccountId'], 'Number');
            }
            if (data.hasOwnProperty('virtualAccountName')) {
                obj['virtualAccountName'] = ApiClient.convertToType(data['virtualAccountName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} roleName
 */
SmartAccountUserRole.prototype['roleName'] = undefined;

/**
 * Virtual Account identifier
 * @member {Number} virtualAccountId
 */
SmartAccountUserRole.prototype['virtualAccountId'] = undefined;

/**
 * Virtual Account Name
 * @member {String} virtualAccountName
 */
SmartAccountUserRole.prototype['virtualAccountName'] = undefined;






export default SmartAccountUserRole;

