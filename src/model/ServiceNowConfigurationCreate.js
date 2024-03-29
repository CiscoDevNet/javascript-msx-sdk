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
import ServiceNowConfigurationRequest from './ServiceNowConfigurationRequest';

/**
 * The ServiceNowConfigurationCreate model module.
 * @module model/ServiceNowConfigurationCreate
 * @version 1.0.10
 */
class ServiceNowConfigurationCreate {
    /**
     * Constructs a new <code>ServiceNowConfigurationCreate</code>.
     * @alias module:model/ServiceNowConfigurationCreate
     * @implements module:model/ServiceNowConfigurationRequest
     */
    constructor() { 
        ServiceNowConfigurationRequest.initialize(this);
        ServiceNowConfigurationCreate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceNowConfigurationCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceNowConfigurationCreate} obj Optional instance to populate.
     * @return {module:model/ServiceNowConfigurationCreate} The populated <code>ServiceNowConfigurationCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceNowConfigurationCreate();
            ServiceNowConfigurationRequest.constructFromObject(data, obj);

            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'String');
            }
            if (data.hasOwnProperty('clientSecret')) {
                obj['clientSecret'] = ApiClient.convertToType(data['clientSecret'], 'String');
            }
            if (data.hasOwnProperty('criticalEvent')) {
                obj['criticalEvent'] = ApiClient.convertToType(data['criticalEvent'], 'Boolean');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('userName')) {
                obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
            if (data.hasOwnProperty('proxy')) {
                obj['proxy'] = ApiClient.convertToType(data['proxy'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} clientId
 */
ServiceNowConfigurationCreate.prototype['clientId'] = undefined;

/**
 * @member {String} clientSecret
 */
ServiceNowConfigurationCreate.prototype['clientSecret'] = undefined;

/**
 * @member {Boolean} criticalEvent
 */
ServiceNowConfigurationCreate.prototype['criticalEvent'] = undefined;

/**
 * @member {String} domain
 */
ServiceNowConfigurationCreate.prototype['domain'] = undefined;

/**
 * @member {String} password
 */
ServiceNowConfigurationCreate.prototype['password'] = undefined;

/**
 * @member {String} userName
 */
ServiceNowConfigurationCreate.prototype['userName'] = undefined;

/**
 * @member {String} tenantId
 */
ServiceNowConfigurationCreate.prototype['tenantId'] = undefined;

/**
 * @member {String} proxy
 */
ServiceNowConfigurationCreate.prototype['proxy'] = undefined;


// Implement ServiceNowConfigurationRequest interface:
/**
 * @member {String} clientId
 */
ServiceNowConfigurationRequest.prototype['clientId'] = undefined;
/**
 * @member {String} clientSecret
 */
ServiceNowConfigurationRequest.prototype['clientSecret'] = undefined;
/**
 * @member {Boolean} criticalEvent
 */
ServiceNowConfigurationRequest.prototype['criticalEvent'] = undefined;
/**
 * @member {String} domain
 */
ServiceNowConfigurationRequest.prototype['domain'] = undefined;
/**
 * @member {String} password
 */
ServiceNowConfigurationRequest.prototype['password'] = undefined;
/**
 * @member {String} userName
 */
ServiceNowConfigurationRequest.prototype['userName'] = undefined;
/**
 * @member {String} tenantId
 */
ServiceNowConfigurationRequest.prototype['tenantId'] = undefined;
/**
 * @member {String} proxy
 */
ServiceNowConfigurationRequest.prototype['proxy'] = undefined;




export default ServiceNowConfigurationCreate;

