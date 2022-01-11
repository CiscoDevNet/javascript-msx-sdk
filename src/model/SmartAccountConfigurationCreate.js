/**
 * MSX SDK
 * MSX SDK client.
 *
 * The version of the OpenAPI document: 1.0.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import SmartAccountConfigurationUpdate from './SmartAccountConfigurationUpdate';

/**
 * The SmartAccountConfigurationCreate model module.
 * @module model/SmartAccountConfigurationCreate
 * @version 1.0.9
 */
class SmartAccountConfigurationCreate {
    /**
     * Constructs a new <code>SmartAccountConfigurationCreate</code>.
     * @alias module:model/SmartAccountConfigurationCreate
     * @implements module:model/SmartAccountConfigurationUpdate
     */
    constructor() { 
        SmartAccountConfigurationUpdate.initialize(this);
        SmartAccountConfigurationCreate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SmartAccountConfigurationCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SmartAccountConfigurationCreate} obj Optional instance to populate.
     * @return {module:model/SmartAccountConfigurationCreate} The populated <code>SmartAccountConfigurationCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmartAccountConfigurationCreate();
            SmartAccountConfigurationUpdate.constructFromObject(data, obj);

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
SmartAccountConfigurationCreate.prototype['baseAuthUrl'] = undefined;

/**
 * @member {String} baseSmartUrl
 */
SmartAccountConfigurationCreate.prototype['baseSmartUrl'] = undefined;

/**
 * @member {String} contentType
 */
SmartAccountConfigurationCreate.prototype['contentType'] = undefined;

/**
 * @member {String} grantType
 */
SmartAccountConfigurationCreate.prototype['grantType'] = undefined;

/**
 * @member {String} clientId
 */
SmartAccountConfigurationCreate.prototype['clientId'] = undefined;

/**
 * @member {String} clientSecret
 */
SmartAccountConfigurationCreate.prototype['clientSecret'] = undefined;


// Implement SmartAccountConfigurationUpdate interface:
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




export default SmartAccountConfigurationCreate;

