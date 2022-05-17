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
import DeviceTemplateDetails from './DeviceTemplateDetails';

/**
 * The DeviceTemplateAttachRequest model module.
 * @module model/DeviceTemplateAttachRequest
 * @version 1.0.10
 */
class DeviceTemplateAttachRequest {
    /**
     * Constructs a new <code>DeviceTemplateAttachRequest</code>.
     * @alias module:model/DeviceTemplateAttachRequest
     */
    constructor() { 
        
        DeviceTemplateAttachRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeviceTemplateAttachRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceTemplateAttachRequest} obj Optional instance to populate.
     * @return {module:model/DeviceTemplateAttachRequest} The populated <code>DeviceTemplateAttachRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceTemplateAttachRequest();

            if (data.hasOwnProperty('templateDetails')) {
                obj['templateDetails'] = ApiClient.convertToType(data['templateDetails'], [DeviceTemplateDetails]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/DeviceTemplateDetails>} templateDetails
 */
DeviceTemplateAttachRequest.prototype['templateDetails'] = undefined;






export default DeviceTemplateAttachRequest;

