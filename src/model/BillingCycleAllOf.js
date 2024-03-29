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
 * The BillingCycleAllOf model module.
 * @module model/BillingCycleAllOf
 * @version 1.0.10
 */
class BillingCycleAllOf {
    /**
     * Constructs a new <code>BillingCycleAllOf</code>.
     * @alias module:model/BillingCycleAllOf
     */
    constructor() { 
        
        BillingCycleAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BillingCycleAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingCycleAllOf} obj Optional instance to populate.
     * @return {module:model/BillingCycleAllOf} The populated <code>BillingCycleAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingCycleAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('eventId')) {
                obj['eventId'] = ApiClient.convertToType(data['eventId'], 'String');
            }
            if (data.hasOwnProperty('lastBilledOn')) {
                obj['lastBilledOn'] = ApiClient.convertToType(data['lastBilledOn'], 'Date');
            }
            if (data.hasOwnProperty('nextBilledOn')) {
                obj['nextBilledOn'] = ApiClient.convertToType(data['nextBilledOn'], 'Date');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
BillingCycleAllOf.prototype['id'] = undefined;

/**
 * @member {String} eventId
 */
BillingCycleAllOf.prototype['eventId'] = undefined;

/**
 * @member {Date} lastBilledOn
 */
BillingCycleAllOf.prototype['lastBilledOn'] = undefined;

/**
 * @member {Date} nextBilledOn
 */
BillingCycleAllOf.prototype['nextBilledOn'] = undefined;

/**
 * @member {String} tenantId
 */
BillingCycleAllOf.prototype['tenantId'] = undefined;






export default BillingCycleAllOf;

