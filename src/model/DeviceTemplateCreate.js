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
import DeviceTemplateAccess from './DeviceTemplateAccess';
import TemplateParameterValidator from './TemplateParameterValidator';

/**
 * The DeviceTemplateCreate model module.
 * @module model/DeviceTemplateCreate
 * @version 1.0.10
 */
class DeviceTemplateCreate {
    /**
     * Constructs a new <code>DeviceTemplateCreate</code>.
     * @alias module:model/DeviceTemplateCreate
     * @param name {String} 
     * @param serviceType {String} 
     * @param configContent {String} 
     * @param resourceProvider {String} 
     */
    constructor(name, serviceType, configContent, resourceProvider) { 
        
        DeviceTemplateCreate.initialize(this, name, serviceType, configContent, resourceProvider);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, serviceType, configContent, resourceProvider) { 
        obj['name'] = name;
        obj['serviceType'] = serviceType;
        obj['configContent'] = configContent;
        obj['resourceProvider'] = resourceProvider;
    }

    /**
     * Constructs a <code>DeviceTemplateCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceTemplateCreate} obj Optional instance to populate.
     * @return {module:model/DeviceTemplateCreate} The populated <code>DeviceTemplateCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceTemplateCreate();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('serviceType')) {
                obj['serviceType'] = ApiClient.convertToType(data['serviceType'], 'String');
            }
            if (data.hasOwnProperty('deviceModels')) {
                obj['deviceModels'] = ApiClient.convertToType(data['deviceModels'], ['String']);
            }
            if (data.hasOwnProperty('configContent')) {
                obj['configContent'] = ApiClient.convertToType(data['configContent'], 'String');
            }
            if (data.hasOwnProperty('resourceProvider')) {
                obj['resourceProvider'] = ApiClient.convertToType(data['resourceProvider'], 'String');
            }
            if (data.hasOwnProperty('templateStandard')) {
                obj['templateStandard'] = ApiClient.convertToType(data['templateStandard'], 'String');
            }
            if (data.hasOwnProperty('tenantAccess')) {
                obj['tenantAccess'] = DeviceTemplateAccess.constructFromObject(data['tenantAccess']);
            }
            if (data.hasOwnProperty('templateParameterValidators')) {
                obj['templateParameterValidators'] = ApiClient.convertToType(data['templateParameterValidators'], [TemplateParameterValidator]);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
DeviceTemplateCreate.prototype['name'] = undefined;

/**
 * @member {String} description
 */
DeviceTemplateCreate.prototype['description'] = undefined;

/**
 * @member {String} version
 */
DeviceTemplateCreate.prototype['version'] = undefined;

/**
 * @member {String} serviceType
 */
DeviceTemplateCreate.prototype['serviceType'] = undefined;

/**
 * @member {Array.<String>} deviceModels
 */
DeviceTemplateCreate.prototype['deviceModels'] = undefined;

/**
 * @member {String} configContent
 */
DeviceTemplateCreate.prototype['configContent'] = undefined;

/**
 * @member {String} resourceProvider
 */
DeviceTemplateCreate.prototype['resourceProvider'] = undefined;

/**
 * @member {String} templateStandard
 */
DeviceTemplateCreate.prototype['templateStandard'] = undefined;

/**
 * @member {module:model/DeviceTemplateAccess} tenantAccess
 */
DeviceTemplateCreate.prototype['tenantAccess'] = undefined;

/**
 * @member {Array.<module:model/TemplateParameterValidator>} templateParameterValidators
 */
DeviceTemplateCreate.prototype['templateParameterValidators'] = undefined;

/**
 * @member {Array.<String>} tags
 */
DeviceTemplateCreate.prototype['tags'] = undefined;






export default DeviceTemplateCreate;

