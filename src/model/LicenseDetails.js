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
 * The LicenseDetails model module.
 * @module model/LicenseDetails
 * @version 1.0.8
 */
class LicenseDetails {
    /**
     * Constructs a new <code>LicenseDetails</code>.
     * @alias module:model/LicenseDetails
     */
    constructor() { 
        
        LicenseDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LicenseDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LicenseDetails} obj Optional instance to populate.
     * @return {module:model/LicenseDetails} The populated <code>LicenseDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LicenseDetails();

            if (data.hasOwnProperty('licenseType')) {
                obj['licenseType'] = ApiClient.convertToType(data['licenseType'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'String');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'String');
            }
            if (data.hasOwnProperty('subscriptionId')) {
                obj['subscriptionId'] = ApiClient.convertToType(data['subscriptionId'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Type of license - TERM or DEMO or PERPETUAL
 * @member {String} licenseType
 */
LicenseDetails.prototype['licenseType'] = undefined;

/**
 * Number of reserved licenses
 * @member {Number} quantity
 */
LicenseDetails.prototype['quantity'] = undefined;

/**
 * License usage start date in yyyy-mm-dd format
 * @member {String} startDate
 */
LicenseDetails.prototype['startDate'] = undefined;

/**
 * License usage expiration date in yyyy-mm-dd format
 * @member {String} endDate
 */
LicenseDetails.prototype['endDate'] = undefined;

/**
 * Subscription refence id
 * @member {String} subscriptionId
 */
LicenseDetails.prototype['subscriptionId'] = undefined;

/**
 * Licencse usage status
 * @member {String} status
 */
LicenseDetails.prototype['status'] = undefined;






export default LicenseDetails;

