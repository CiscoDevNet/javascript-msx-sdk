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
import DeviceTemplateDetails from './DeviceTemplateDetails';

/**
 * The DeviceTemplateBatchAttachRequest model module.
 * @module model/DeviceTemplateBatchAttachRequest
 * @version 1.0.8
 */
class DeviceTemplateBatchAttachRequest {
    /**
     * Constructs a new <code>DeviceTemplateBatchAttachRequest</code>.
     * @alias module:model/DeviceTemplateBatchAttachRequest
     */
    constructor() { 
        
        DeviceTemplateBatchAttachRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeviceTemplateBatchAttachRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceTemplateBatchAttachRequest} obj Optional instance to populate.
     * @return {module:model/DeviceTemplateBatchAttachRequest} The populated <code>DeviceTemplateBatchAttachRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceTemplateBatchAttachRequest();

            if (data.hasOwnProperty('deviceIds')) {
                obj['deviceIds'] = ApiClient.convertToType(data['deviceIds'], ['String']);
            }
            if (data.hasOwnProperty('templateDetails')) {
                obj['templateDetails'] = ApiClient.convertToType(data['templateDetails'], [DeviceTemplateDetails]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} deviceIds
 */
DeviceTemplateBatchAttachRequest.prototype['deviceIds'] = undefined;

/**
 * @member {Array.<module:model/DeviceTemplateDetails>} templateDetails
 */
DeviceTemplateBatchAttachRequest.prototype['templateDetails'] = undefined;






export default DeviceTemplateBatchAttachRequest;

