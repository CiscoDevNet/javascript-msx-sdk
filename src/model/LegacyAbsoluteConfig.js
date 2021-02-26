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
 * The LegacyAbsoluteConfig model module.
 * @module model/LegacyAbsoluteConfig
 * @version 3.10.0
 */
class LegacyAbsoluteConfig {
    /**
     * Constructs a new <code>LegacyAbsoluteConfig</code>.
     * @alias module:model/LegacyAbsoluteConfig
     */
    constructor() { 
        
        LegacyAbsoluteConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LegacyAbsoluteConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LegacyAbsoluteConfig} obj Optional instance to populate.
     * @return {module:model/LegacyAbsoluteConfig} The populated <code>LegacyAbsoluteConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LegacyAbsoluteConfig();

            if (data.hasOwnProperty('dateTime')) {
                obj['dateTime'] = ApiClient.convertToType(data['dateTime'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} dateTime
 */
LegacyAbsoluteConfig.prototype['dateTime'] = undefined;






export default LegacyAbsoluteConfig;

