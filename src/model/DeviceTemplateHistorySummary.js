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
 * The DeviceTemplateHistorySummary model module.
 * @module model/DeviceTemplateHistorySummary
 * @version 1.0.9
 */
class DeviceTemplateHistorySummary {
    /**
     * Constructs a new <code>DeviceTemplateHistorySummary</code>.
     * @alias module:model/DeviceTemplateHistorySummary
     */
    constructor() { 
        
        DeviceTemplateHistorySummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeviceTemplateHistorySummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceTemplateHistorySummary} obj Optional instance to populate.
     * @return {module:model/DeviceTemplateHistorySummary} The populated <code>DeviceTemplateHistorySummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceTemplateHistorySummary();

            if (data.hasOwnProperty('deviceId')) {
                obj['deviceId'] = ApiClient.convertToType(data['deviceId'], 'String');
            }
            if (data.hasOwnProperty('httpStatus')) {
                obj['httpStatus'] = ApiClient.convertToType(data['httpStatus'], 'String');
            }
            if (data.hasOwnProperty('deviceTemplateHistoryUrl')) {
                obj['deviceTemplateHistoryUrl'] = ApiClient.convertToType(data['deviceTemplateHistoryUrl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} deviceId
 */
DeviceTemplateHistorySummary.prototype['deviceId'] = undefined;

/**
 * @member {String} httpStatus
 */
DeviceTemplateHistorySummary.prototype['httpStatus'] = undefined;

/**
 * @member {String} deviceTemplateHistoryUrl
 */
DeviceTemplateHistorySummary.prototype['deviceTemplateHistoryUrl'] = undefined;






export default DeviceTemplateHistorySummary;

