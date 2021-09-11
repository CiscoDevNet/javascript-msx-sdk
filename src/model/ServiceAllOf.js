/**
 * MSX SDK
 * MSX SDK client.
 *
 * The version of the OpenAPI document: 1.0.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ServiceAllOf model module.
 * @module model/ServiceAllOf
 * @version 1.0.5
 */
class ServiceAllOf {
    /**
     * Constructs a new <code>ServiceAllOf</code>.
     * @alias module:model/ServiceAllOf
     */
    constructor() { 
        
        ServiceAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceAllOf} obj Optional instance to populate.
     * @return {module:model/ServiceAllOf} The populated <code>ServiceAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('providerId')) {
                obj['providerId'] = ApiClient.convertToType(data['providerId'], 'String');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('subscriptionId')) {
                obj['subscriptionId'] = ApiClient.convertToType(data['subscriptionId'], 'String');
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Date');
            }
            if (data.hasOwnProperty('modifiedOn')) {
                obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'Date');
            }
            if (data.hasOwnProperty('provisionedOn')) {
                obj['provisionedOn'] = ApiClient.convertToType(data['provisionedOn'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ServiceAllOf.prototype['id'] = undefined;

/**
 * @member {String} providerId
 */
ServiceAllOf.prototype['providerId'] = undefined;

/**
 * @member {String} tenantId
 */
ServiceAllOf.prototype['tenantId'] = undefined;

/**
 * @member {String} userId
 */
ServiceAllOf.prototype['userId'] = undefined;

/**
 * @member {String} subscriptionId
 */
ServiceAllOf.prototype['subscriptionId'] = undefined;

/**
 * @member {Date} createdOn
 */
ServiceAllOf.prototype['createdOn'] = undefined;

/**
 * @member {Date} modifiedOn
 */
ServiceAllOf.prototype['modifiedOn'] = undefined;

/**
 * @member {Date} provisionedOn
 */
ServiceAllOf.prototype['provisionedOn'] = undefined;






export default ServiceAllOf;

