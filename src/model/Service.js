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
import ServiceAllOf from './ServiceAllOf';
import ServiceUpdate from './ServiceUpdate';

/**
 * The Service model module.
 * @module model/Service
 * @version 1.0.5
 */
class Service {
    /**
     * Constructs a new <code>Service</code>.
     * @alias module:model/Service
     * @implements module:model/ServiceAllOf
     * @implements module:model/ServiceUpdate
     */
    constructor() { 
        ServiceAllOf.initialize(this);ServiceUpdate.initialize(this);
        Service.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Service</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Service} obj Optional instance to populate.
     * @return {module:model/Service} The populated <code>Service</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Service();
            ServiceAllOf.constructFromObject(data, obj);
            ServiceUpdate.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], {'String': Object});
            }
            if (data.hasOwnProperty('definitionAttributes')) {
                obj['definitionAttributes'] = ApiClient.convertToType(data['definitionAttributes'], {'String': Object});
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], {'String': Object});
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Service.prototype['id'] = undefined;

/**
 * @member {String} providerId
 */
Service.prototype['providerId'] = undefined;

/**
 * @member {String} tenantId
 */
Service.prototype['tenantId'] = undefined;

/**
 * @member {String} userId
 */
Service.prototype['userId'] = undefined;

/**
 * @member {String} subscriptionId
 */
Service.prototype['subscriptionId'] = undefined;

/**
 * @member {Date} createdOn
 */
Service.prototype['createdOn'] = undefined;

/**
 * @member {Date} modifiedOn
 */
Service.prototype['modifiedOn'] = undefined;

/**
 * @member {Date} provisionedOn
 */
Service.prototype['provisionedOn'] = undefined;

/**
 * @member {Object.<String, Object>} status
 */
Service.prototype['status'] = undefined;

/**
 * @member {Object.<String, Object>} definitionAttributes
 */
Service.prototype['definitionAttributes'] = undefined;

/**
 * @member {Object.<String, Object>} attributes
 */
Service.prototype['attributes'] = undefined;


// Implement ServiceAllOf interface:
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
// Implement ServiceUpdate interface:
/**
 * @member {Object.<String, Object>} status
 */
ServiceUpdate.prototype['status'] = undefined;
/**
 * @member {Object.<String, Object>} definitionAttributes
 */
ServiceUpdate.prototype['definitionAttributes'] = undefined;
/**
 * @member {Object.<String, Object>} attributes
 */
ServiceUpdate.prototype['attributes'] = undefined;




export default Service;

