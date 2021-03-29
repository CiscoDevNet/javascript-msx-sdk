/**
 * KAKAPO - MSX SDK
 * MSX Platform SDK
 *
 * The version of the OpenAPI document: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SiteAddress model module.
 * @module model/SiteAddress
 * @version 1.0.1
 */
class SiteAddress {
    /**
     * Constructs a new <code>SiteAddress</code>.
     * @alias module:model/SiteAddress
     */
    constructor() { 
        
        SiteAddress.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SiteAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SiteAddress} obj Optional instance to populate.
     * @return {module:model/SiteAddress} The populated <code>SiteAddress</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SiteAddress();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = ApiClient.convertToType(data['company'], 'String');
            }
            if (data.hasOwnProperty('formattedAddress')) {
                obj['formattedAddress'] = ApiClient.convertToType(data['formattedAddress'], 'String');
            }
            if (data.hasOwnProperty('address1')) {
                obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
            }
            if (data.hasOwnProperty('address2')) {
                obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('postCode')) {
                obj['postCode'] = ApiClient.convertToType(data['postCode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
SiteAddress.prototype['name'] = undefined;

/**
 * @member {String} company
 */
SiteAddress.prototype['company'] = undefined;

/**
 * @member {String} formattedAddress
 */
SiteAddress.prototype['formattedAddress'] = undefined;

/**
 * @member {String} address1
 */
SiteAddress.prototype['address1'] = undefined;

/**
 * @member {String} address2
 */
SiteAddress.prototype['address2'] = undefined;

/**
 * @member {String} city
 */
SiteAddress.prototype['city'] = undefined;

/**
 * @member {String} state
 */
SiteAddress.prototype['state'] = undefined;

/**
 * @member {String} country
 */
SiteAddress.prototype['country'] = undefined;

/**
 * @member {String} postCode
 */
SiteAddress.prototype['postCode'] = undefined;






export default SiteAddress;

