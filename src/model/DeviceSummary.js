/**
 * MSX SDK
 * MSX SDK client.
 *
 * The version of the OpenAPI document: 1.0.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DeviceSummary model module.
 * @module model/DeviceSummary
 * @version 1.0.10
 */
class DeviceSummary {
    /**
     * Constructs a new <code>DeviceSummary</code>.
     * @alias module:model/DeviceSummary
     */
    constructor() { 
        
        DeviceSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeviceSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceSummary} obj Optional instance to populate.
     * @return {module:model/DeviceSummary} The populated <code>DeviceSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceSummary();

            if (data.hasOwnProperty('deviceId')) {
                obj['deviceId'] = ApiClient.convertToType(data['deviceId'], 'String');
            }
            if (data.hasOwnProperty('serviceId')) {
                obj['serviceId'] = ApiClient.convertToType(data['serviceId'], 'String');
            }
            if (data.hasOwnProperty('serviceType')) {
                obj['serviceType'] = ApiClient.convertToType(data['serviceType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} deviceId
 */
DeviceSummary.prototype['deviceId'] = undefined;

/**
 * @member {String} serviceId
 */
DeviceSummary.prototype['serviceId'] = undefined;

/**
 * @member {String} serviceType
 */
DeviceSummary.prototype['serviceType'] = undefined;






export default DeviceSummary;

