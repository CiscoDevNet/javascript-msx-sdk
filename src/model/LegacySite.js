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
import LegacyAddress from './LegacyAddress';
import LegacySiteDevice from './LegacySiteDevice';

/**
 * The LegacySite model module.
 * @module model/LegacySite
 * @version 1.0.10
 */
class LegacySite {
    /**
     * Constructs a new <code>LegacySite</code>.
     * @alias module:model/LegacySite
     * @param siteId {String} 
     * @param siteName {String} 
     * @param address {module:model/LegacyAddress} 
     */
    constructor(siteId, siteName, address) { 
        
        LegacySite.initialize(this, siteId, siteName, address);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, siteId, siteName, address) { 
        obj['siteId'] = siteId;
        obj['siteName'] = siteName;
        obj['address'] = address;
    }

    /**
     * Constructs a <code>LegacySite</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LegacySite} obj Optional instance to populate.
     * @return {module:model/LegacySite} The populated <code>LegacySite</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LegacySite();

            if (data.hasOwnProperty('siteId')) {
                obj['siteId'] = ApiClient.convertToType(data['siteId'], 'String');
            }
            if (data.hasOwnProperty('siteName')) {
                obj['siteName'] = ApiClient.convertToType(data['siteName'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = LegacyAddress.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('devices')) {
                obj['devices'] = ApiClient.convertToType(data['devices'], [LegacySiteDevice]);
            }
            if (data.hasOwnProperty('siteAttributes')) {
                obj['siteAttributes'] = ApiClient.convertToType(data['siteAttributes'], {'String': Object});
            }
            if (data.hasOwnProperty('delete')) {
                obj['delete'] = ApiClient.convertToType(data['delete'], 'Boolean');
            }
            if (data.hasOwnProperty('operationalStatus')) {
                obj['operationalStatus'] = ApiClient.convertToType(data['operationalStatus'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} siteId
 */
LegacySite.prototype['siteId'] = undefined;

/**
 * @member {String} siteName
 */
LegacySite.prototype['siteName'] = undefined;

/**
 * @member {String} displayName
 */
LegacySite.prototype['displayName'] = undefined;

/**
 * @member {module:model/LegacyAddress} address
 */
LegacySite.prototype['address'] = undefined;

/**
 * @member {Array.<module:model/LegacySiteDevice>} devices
 */
LegacySite.prototype['devices'] = undefined;

/**
 * @member {Object.<String, Object>} siteAttributes
 */
LegacySite.prototype['siteAttributes'] = undefined;

/**
 * @member {Boolean} delete
 */
LegacySite.prototype['delete'] = undefined;

/**
 * @member {String} operationalStatus
 */
LegacySite.prototype['operationalStatus'] = undefined;






export default LegacySite;

