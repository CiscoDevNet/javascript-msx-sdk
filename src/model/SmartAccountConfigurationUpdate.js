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
 * The SmartAccountConfigurationUpdate model module.
 * @module model/SmartAccountConfigurationUpdate
 * @version 1.0.10
 */
class SmartAccountConfigurationUpdate {
    /**
     * Constructs a new <code>SmartAccountConfigurationUpdate</code>.
     * @alias module:model/SmartAccountConfigurationUpdate
     */
    constructor() { 
        
        SmartAccountConfigurationUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SmartAccountConfigurationUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SmartAccountConfigurationUpdate} obj Optional instance to populate.
     * @return {module:model/SmartAccountConfigurationUpdate} The populated <code>SmartAccountConfigurationUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartAccountConfigurationUpdate();

            if (data.hasOwnProperty('baseAuthUrl')) {
                obj['baseAuthUrl'] = ApiClient.convertToType(data['baseAuthUrl'], 'String');
            }
            if (data.hasOwnProperty('baseSmartUrl')) {
                obj['baseSmartUrl'] = ApiClient.convertToType(data['baseSmartUrl'], 'String');
            }
            if (data.hasOwnProperty('contentType')) {
                obj['contentType'] = ApiClient.convertToType(data['contentType'], 'String');
            }
            if (data.hasOwnProperty('grantType')) {
                obj['grantType'] = ApiClient.convertToType(data['grantType'], 'String');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'String');
            }
            if (data.hasOwnProperty('clientSecret')) {
                obj['clientSecret'] = ApiClient.convertToType(data['clientSecret'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} baseAuthUrl
 */
SmartAccountConfigurationUpdate.prototype['baseAuthUrl'] = undefined;

/**
 * @member {String} baseSmartUrl
 */
SmartAccountConfigurationUpdate.prototype['baseSmartUrl'] = undefined;

/**
 * @member {String} contentType
 */
SmartAccountConfigurationUpdate.prototype['contentType'] = undefined;

/**
 * @member {String} grantType
 */
SmartAccountConfigurationUpdate.prototype['grantType'] = undefined;

/**
 * @member {String} clientId
 */
SmartAccountConfigurationUpdate.prototype['clientId'] = undefined;

/**
 * @member {String} clientSecret
 */
SmartAccountConfigurationUpdate.prototype['clientSecret'] = undefined;






export default SmartAccountConfigurationUpdate;

