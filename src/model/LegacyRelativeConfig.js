/**
 * KAKAPO - MSX SDK
 * MSX Platform SDK
 *
 * The version of the OpenAPI document: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The LegacyRelativeConfig model module.
 * @module model/LegacyRelativeConfig
 * @version 1.0.1
 */
class LegacyRelativeConfig {
    /**
     * Constructs a new <code>LegacyRelativeConfig</code>.
     * @alias module:model/LegacyRelativeConfig
     */
    constructor() { 
        
        LegacyRelativeConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LegacyRelativeConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LegacyRelativeConfig} obj Optional instance to populate.
     * @return {module:model/LegacyRelativeConfig} The populated <code>LegacyRelativeConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LegacyRelativeConfig();

            if (data.hasOwnProperty('scheduleIn')) {
                obj['scheduleIn'] = ApiClient.convertToType(data['scheduleIn'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} scheduleIn
 */
LegacyRelativeConfig.prototype['scheduleIn'] = undefined;






export default LegacyRelativeConfig;

