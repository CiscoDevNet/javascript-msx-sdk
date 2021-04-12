/**
 * KAKAPO - MSX SDK
 * MSX Platform SDK
 *
 * The version of the OpenAPI document: 1.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import LegacySiteDeviceOnboard from './LegacySiteDeviceOnboard';

/**
 * The LegacySiteDevice model module.
 * @module model/LegacySiteDevice
 * @version 1.0.2
 */
class LegacySiteDevice {
    /**
     * Constructs a new <code>LegacySiteDevice</code>.
     * @alias module:model/LegacySiteDevice
     * @param name {String} 
     */
    constructor(name) { 
        
        LegacySiteDevice.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>LegacySiteDevice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LegacySiteDevice} obj Optional instance to populate.
     * @return {module:model/LegacySiteDevice} The populated <code>LegacySiteDevice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LegacySiteDevice();

            if (data.hasOwnProperty('deviceId')) {
                obj['deviceId'] = ApiClient.convertToType(data['deviceId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('model')) {
                obj['model'] = ApiClient.convertToType(data['model'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('deviceAttributes')) {
                obj['deviceAttributes'] = ApiClient.convertToType(data['deviceAttributes'], {'String': Object});
            }
            if (data.hasOwnProperty('deviceOnboarding')) {
                obj['deviceOnboarding'] = LegacySiteDeviceOnboard.constructFromObject(data['deviceOnboarding']);
            }
            if (data.hasOwnProperty('delete')) {
                obj['delete'] = ApiClient.convertToType(data['delete'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} deviceId
 */
LegacySiteDevice.prototype['deviceId'] = undefined;

/**
 * @member {String} name
 */
LegacySiteDevice.prototype['name'] = undefined;

/**
 * @member {String} model
 */
LegacySiteDevice.prototype['model'] = undefined;

/**
 * @member {String} type
 */
LegacySiteDevice.prototype['type'] = undefined;

/**
 * @member {Object.<String, Object>} deviceAttributes
 */
LegacySiteDevice.prototype['deviceAttributes'] = undefined;

/**
 * @member {module:model/LegacySiteDeviceOnboard} deviceOnboarding
 */
LegacySiteDevice.prototype['deviceOnboarding'] = undefined;

/**
 * @member {Boolean} delete
 */
LegacySiteDevice.prototype['delete'] = undefined;






export default LegacySiteDevice;

