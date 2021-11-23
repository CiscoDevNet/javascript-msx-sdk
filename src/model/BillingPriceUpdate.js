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
 * The BillingPriceUpdate model module.
 * @module model/BillingPriceUpdate
 * @version 1.0.8
 */
class BillingPriceUpdate {
    /**
     * Constructs a new <code>BillingPriceUpdate</code>.
     * @alias module:model/BillingPriceUpdate
     * @param name {String} 
     * @param type {String} 
     * @param price {Number} 
     * @param tenantId {String} 
     */
    constructor(name, type, price, tenantId) { 
        
        BillingPriceUpdate.initialize(this, name, type, price, tenantId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, type, price, tenantId) { 
        obj['name'] = name;
        obj['type'] = type;
        obj['price'] = price;
        obj['tenantId'] = tenantId;
    }

    /**
     * Constructs a <code>BillingPriceUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingPriceUpdate} obj Optional instance to populate.
     * @return {module:model/BillingPriceUpdate} The populated <code>BillingPriceUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingPriceUpdate();

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
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('billingPeriod')) {
                obj['billingPeriod'] = ApiClient.convertToType(data['billingPeriod'], 'Number');
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = ApiClient.convertToType(data['service'], 'String');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
BillingPriceUpdate.prototype['name'] = undefined;

/**
 * @member {String} description
 */
BillingPriceUpdate.prototype['description'] = undefined;

/**
 * @member {String} type
 */
BillingPriceUpdate.prototype['type'] = undefined;

/**
 * @member {String} subtype
 */
BillingPriceUpdate.prototype['subtype'] = undefined;

/**
 * @member {String} source
 */
BillingPriceUpdate.prototype['source'] = undefined;

/**
 * @member {Number} price
 */
BillingPriceUpdate.prototype['price'] = undefined;

/**
 * @member {Number} billingPeriod
 */
BillingPriceUpdate.prototype['billingPeriod'] = undefined;

/**
 * @member {String} service
 */
BillingPriceUpdate.prototype['service'] = undefined;

/**
 * @member {String} tenantId
 */
BillingPriceUpdate.prototype['tenantId'] = undefined;






export default BillingPriceUpdate;

