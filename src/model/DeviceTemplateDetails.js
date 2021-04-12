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
import NameValue from './NameValue';

/**
 * The DeviceTemplateDetails model module.
 * @module model/DeviceTemplateDetails
 * @version 1.0.2
 */
class DeviceTemplateDetails {
    /**
     * Constructs a new <code>DeviceTemplateDetails</code>.
     * @alias module:model/DeviceTemplateDetails
     */
    constructor() { 
        
        DeviceTemplateDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeviceTemplateDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceTemplateDetails} obj Optional instance to populate.
     * @return {module:model/DeviceTemplateDetails} The populated <code>DeviceTemplateDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceTemplateDetails();

            if (data.hasOwnProperty('templateId')) {
                obj['templateId'] = ApiClient.convertToType(data['templateId'], 'String');
            }
            if (data.hasOwnProperty('templateParams')) {
                obj['templateParams'] = ApiClient.convertToType(data['templateParams'], [NameValue]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} templateId
 */
DeviceTemplateDetails.prototype['templateId'] = undefined;

/**
 * @member {Array.<module:model/NameValue>} templateParams
 */
DeviceTemplateDetails.prototype['templateParams'] = undefined;






export default DeviceTemplateDetails;

