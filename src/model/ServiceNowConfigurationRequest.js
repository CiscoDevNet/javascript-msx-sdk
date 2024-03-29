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
 * The ServiceNowConfigurationRequest model module.
 * @module model/ServiceNowConfigurationRequest
 * @version 1.0.10
 */
class ServiceNowConfigurationRequest {
    /**
     * Constructs a new <code>ServiceNowConfigurationRequest</code>.
     * @alias module:model/ServiceNowConfigurationRequest
     */
    constructor() { 
        
        ServiceNowConfigurationRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceNowConfigurationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceNowConfigurationRequest} obj Optional instance to populate.
     * @return {module:model/ServiceNowConfigurationRequest} The populated <code>ServiceNowConfigurationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceNowConfigurationRequest();

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






export default ServiceNowConfigurationRequest;

