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
 * The BillingEventAllOf model module.
 * @module model/BillingEventAllOf
 * @version 1.0.10
 */
class BillingEventAllOf {
    /**
     * Constructs a new <code>BillingEventAllOf</code>.
     * @alias module:model/BillingEventAllOf
     */
    constructor() { 
        
        BillingEventAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BillingEventAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingEventAllOf} obj Optional instance to populate.
     * @return {module:model/BillingEventAllOf} The populated <code>BillingEventAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingEventAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('modifiedOn')) {
                obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
BillingEventAllOf.prototype['id'] = undefined;

/**
 * @member {Date} modifiedOn
 */
BillingEventAllOf.prototype['modifiedOn'] = undefined;






export default BillingEventAllOf;

