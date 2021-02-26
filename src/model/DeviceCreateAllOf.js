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
 * The DeviceCreateAllOf model module.
 * @module model/DeviceCreateAllOf
 * @version 3.10.0
 */
class DeviceCreateAllOf {
    /**
     * Constructs a new <code>DeviceCreateAllOf</code>.
     * @alias module:model/DeviceCreateAllOf
     * @param tenantId {String} 
     */
    constructor(tenantId) { 
        
        DeviceCreateAllOf.initialize(this, tenantId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tenantId) { 
        obj['tenantId'] = tenantId;
    }

    /**
     * Constructs a <code>DeviceCreateAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceCreateAllOf} obj Optional instance to populate.
     * @return {module:model/DeviceCreateAllOf} The populated <code>DeviceCreateAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceCreateAllOf();

            if (data.hasOwnProperty('serviceId')) {
                obj['serviceId'] = ApiClient.convertToType(data['serviceId'], 'String');
            }
            if (data.hasOwnProperty('subscriptionId')) {
                obj['subscriptionId'] = ApiClient.convertToType(data['subscriptionId'], 'String');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} serviceId
 */
DeviceCreateAllOf.prototype['serviceId'] = undefined;

/**
 * @member {String} subscriptionId
 */
DeviceCreateAllOf.prototype['subscriptionId'] = undefined;

/**
 * @member {String} tenantId
 */
DeviceCreateAllOf.prototype['tenantId'] = undefined;






export default DeviceCreateAllOf;

