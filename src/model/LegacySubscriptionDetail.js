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
import LegacySite from './LegacySite';

/**
 * The LegacySubscriptionDetail model module.
 * @module model/LegacySubscriptionDetail
 * @version 1.0.10
 */
class LegacySubscriptionDetail {
    /**
     * Constructs a new <code>LegacySubscriptionDetail</code>.
     * @alias module:model/LegacySubscriptionDetail
     */
    constructor() { 
        
        LegacySubscriptionDetail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LegacySubscriptionDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LegacySubscriptionDetail} obj Optional instance to populate.
     * @return {module:model/LegacySubscriptionDetail} The populated <code>LegacySubscriptionDetail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LegacySubscriptionDetail();

            if (data.hasOwnProperty('siteCount')) {
                obj['siteCount'] = ApiClient.convertToType(data['siteCount'], Object);
            }
            if (data.hasOwnProperty('sites')) {
                obj['sites'] = ApiClient.convertToType(data['sites'], [LegacySite]);
            }
            if (data.hasOwnProperty('offerSelection')) {
                obj['offerSelection'] = ApiClient.convertToType(data['offerSelection'], {'String': Object});
            }
            if (data.hasOwnProperty('serviceInstanceDetail')) {
                obj['serviceInstanceDetail'] = ApiClient.convertToType(data['serviceInstanceDetail'], {'String': Object});
            }
            if (data.hasOwnProperty('priceDetail')) {
                obj['priceDetail'] = ApiClient.convertToType(data['priceDetail'], {'String': Object});
            }
            if (data.hasOwnProperty('dealerCode')) {
                obj['dealerCode'] = ApiClient.convertToType(data['dealerCode'], 'String');
            }
            if (data.hasOwnProperty('pricePlanId')) {
                obj['pricePlanId'] = ApiClient.convertToType(data['pricePlanId'], 'String');
            }
            if (data.hasOwnProperty('termsAndConditionId')) {
                obj['termsAndConditionId'] = ApiClient.convertToType(data['termsAndConditionId'], 'String');
            }
            if (data.hasOwnProperty('configuration')) {
                obj['configuration'] = ApiClient.convertToType(data['configuration'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * @member {Object} siteCount
 */
LegacySubscriptionDetail.prototype['siteCount'] = undefined;

/**
 * @member {Array.<module:model/LegacySite>} sites
 */
LegacySubscriptionDetail.prototype['sites'] = undefined;

/**
 * @member {Object.<String, Object>} offerSelection
 */
LegacySubscriptionDetail.prototype['offerSelection'] = undefined;

/**
 * @member {Object.<String, Object>} serviceInstanceDetail
 */
LegacySubscriptionDetail.prototype['serviceInstanceDetail'] = undefined;

/**
 * @member {Object.<String, Object>} priceDetail
 */
LegacySubscriptionDetail.prototype['priceDetail'] = undefined;

/**
 * @member {String} dealerCode
 */
LegacySubscriptionDetail.prototype['dealerCode'] = undefined;

/**
 * @member {String} pricePlanId
 */
LegacySubscriptionDetail.prototype['pricePlanId'] = undefined;

/**
 * @member {String} termsAndConditionId
 */
LegacySubscriptionDetail.prototype['termsAndConditionId'] = undefined;

/**
 * @member {Object.<String, String>} configuration
 */
LegacySubscriptionDetail.prototype['configuration'] = undefined;






export default LegacySubscriptionDetail;

