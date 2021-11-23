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

/**
 * The DeviceTemplateAccessResponse model module.
 * @module model/DeviceTemplateAccessResponse
 * @version 1.0.8
 */
class DeviceTemplateAccessResponse {
    /**
     * Constructs a new <code>DeviceTemplateAccessResponse</code>.
     * @alias module:model/DeviceTemplateAccessResponse
     */
    constructor() { 
        
        DeviceTemplateAccessResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeviceTemplateAccessResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceTemplateAccessResponse} obj Optional instance to populate.
     * @return {module:model/DeviceTemplateAccessResponse} The populated <code>DeviceTemplateAccessResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceTemplateAccessResponse();

            if (data.hasOwnProperty('failureListOfTenants')) {
                obj['failureListOfTenants'] = ApiClient.convertToType(data['failureListOfTenants'], ['String']);
            }
            if (data.hasOwnProperty('global')) {
                obj['global'] = ApiClient.convertToType(data['global'], 'Boolean');
            }
            if (data.hasOwnProperty('successListOfTenants')) {
                obj['successListOfTenants'] = ApiClient.convertToType(data['successListOfTenants'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} failureListOfTenants
 */
DeviceTemplateAccessResponse.prototype['failureListOfTenants'] = undefined;

/**
 * @member {Boolean} global
 */
DeviceTemplateAccessResponse.prototype['global'] = undefined;

/**
 * @member {Array.<String>} successListOfTenants
 */
DeviceTemplateAccessResponse.prototype['successListOfTenants'] = undefined;






export default DeviceTemplateAccessResponse;

