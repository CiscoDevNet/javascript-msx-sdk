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
 * The BillingEventUpdate model module.
 * @module model/BillingEventUpdate
 * @version 1.0.10
 */
class BillingEventUpdate {
    /**
     * Constructs a new <code>BillingEventUpdate</code>.
     * @alias module:model/BillingEventUpdate
     */
    constructor() { 
        
        BillingEventUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BillingEventUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingEventUpdate} obj Optional instance to populate.
     * @return {module:model/BillingEventUpdate} The populated <code>BillingEventUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingEventUpdate();

            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('subtype')) {
                obj['subtype'] = ApiClient.convertToType(data['subtype'], 'String');
            }
            if (data.hasOwnProperty('severity')) {
                obj['severity'] = ApiClient.convertToType(data['severity'], 'String');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], {'String': Object});
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} createdOn
 */
BillingEventUpdate.prototype['createdOn'] = undefined;

/**
 * @member {String} name
 */
BillingEventUpdate.prototype['name'] = undefined;

/**
 * @member {String} description
 */
BillingEventUpdate.prototype['description'] = undefined;

/**
 * @member {String} type
 */
BillingEventUpdate.prototype['type'] = undefined;

/**
 * @member {String} subtype
 */
BillingEventUpdate.prototype['subtype'] = undefined;

/**
 * @member {String} severity
 */
BillingEventUpdate.prototype['severity'] = undefined;

/**
 * @member {String} action
 */
BillingEventUpdate.prototype['action'] = undefined;

/**
 * @member {Object.<String, Object>} details
 */
BillingEventUpdate.prototype['details'] = undefined;

/**
 * @member {Number} price
 */
BillingEventUpdate.prototype['price'] = undefined;

/**
 * @member {String} tenantId
 */
BillingEventUpdate.prototype['tenantId'] = undefined;






export default BillingEventUpdate;

