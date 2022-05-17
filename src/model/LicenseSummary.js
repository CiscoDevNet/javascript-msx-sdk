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
import LicenseDetails from './LicenseDetails';

/**
 * The LicenseSummary model module.
 * @module model/LicenseSummary
 * @version 1.0.10
 */
class LicenseSummary {
    /**
     * Constructs a new <code>LicenseSummary</code>.
     * @alias module:model/LicenseSummary
     */
    constructor() { 
        
        LicenseSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LicenseSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LicenseSummary} obj Optional instance to populate.
     * @return {module:model/LicenseSummary} The populated <code>LicenseSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LicenseSummary();

            if (data.hasOwnProperty('entitled')) {
                obj['entitled'] = ApiClient.convertToType(data['entitled'], 'Number');
            }
            if (data.hasOwnProperty('inuse')) {
                obj['inuse'] = ApiClient.convertToType(data['inuse'], 'Number');
            }
            if (data.hasOwnProperty('reserved')) {
                obj['reserved'] = ApiClient.convertToType(data['reserved'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('enforced')) {
                obj['enforced'] = ApiClient.convertToType(data['enforced'], 'Boolean');
            }
            if (data.hasOwnProperty('licenseDetails')) {
                obj['licenseDetails'] = ApiClient.convertToType(data['licenseDetails'], [LicenseDetails]);
            }
        }
        return obj;
    }


}

/**
 * Total entitled quantity for the license
 * @member {Number} entitled
 */
LicenseSummary.prototype['entitled'] = undefined;

/**
 * Total consumed quantity for the device
 * @member {Number} inuse
 */
LicenseSummary.prototype['inuse'] = undefined;

/**
 * Reserved quantity (if any)
 * @member {Number} reserved
 */
LicenseSummary.prototype['reserved'] = undefined;

/**
 * Current compliance status for the license
 * @member {String} status
 */
LicenseSummary.prototype['status'] = undefined;

/**
 * User friendly display name for the license
 * @member {String} name
 */
LicenseSummary.prototype['name'] = undefined;

/**
 * Identifies if the tag is for an enforced license or not
 * @member {Boolean} enforced
 */
LicenseSummary.prototype['enforced'] = undefined;

/**
 * @member {Array.<module:model/LicenseDetails>} licenseDetails
 */
LicenseSummary.prototype['licenseDetails'] = undefined;






export default LicenseSummary;

