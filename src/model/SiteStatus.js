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
 * The SiteStatus model module.
 * @module model/SiteStatus
 * @version 1.0.8
 */
class SiteStatus {
    /**
     * Constructs a new <code>SiteStatus</code>.
     * @alias module:model/SiteStatus
     * @param type {String} 
     * @param name {String} 
     * @param value {String} 
     * @param severity {String} 
     * @param lastUpdatedMessage {String} 
     */
    constructor(type, name, value, severity, lastUpdatedMessage) { 
        
        SiteStatus.initialize(this, type, name, value, severity, lastUpdatedMessage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, name, value, severity, lastUpdatedMessage) { 
        obj['type'] = type || 'unknown';
        obj['name'] = name || 'unknown';
        obj['value'] = value || 'unknown';
        obj['severity'] = severity;
        obj['lastUpdatedMessage'] = lastUpdatedMessage;
    }

    /**
     * Constructs a <code>SiteStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SiteStatus} obj Optional instance to populate.
     * @return {module:model/SiteStatus} The populated <code>SiteStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SiteStatus();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('severity')) {
                obj['severity'] = ApiClient.convertToType(data['severity'], 'String');
            }
            if (data.hasOwnProperty('lastUpdated')) {
                obj['lastUpdated'] = ApiClient.convertToType(data['lastUpdated'], 'Date');
            }
            if (data.hasOwnProperty('lastUpdatedMessage')) {
                obj['lastUpdatedMessage'] = ApiClient.convertToType(data['lastUpdatedMessage'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 * @default 'unknown'
 */
SiteStatus.prototype['type'] = 'unknown';

/**
 * @member {String} name
 * @default 'unknown'
 */
SiteStatus.prototype['name'] = 'unknown';

/**
 * @member {String} value
 * @default 'unknown'
 */
SiteStatus.prototype['value'] = 'unknown';

/**
 * @member {String} severity
 */
SiteStatus.prototype['severity'] = undefined;

/**
 * @member {Date} lastUpdated
 */
SiteStatus.prototype['lastUpdated'] = undefined;

/**
 * @member {String} lastUpdatedMessage
 */
SiteStatus.prototype['lastUpdatedMessage'] = undefined;






export default SiteStatus;

