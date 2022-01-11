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
import DeviceTemplateAccess from './DeviceTemplateAccess';
import TemplateParameterValidator from './TemplateParameterValidator';

/**
 * The DeviceTemplate model module.
 * @module model/DeviceTemplate
 * @version 1.0.9
 */
class DeviceTemplate {
    /**
     * Constructs a new <code>DeviceTemplate</code>.
     * @alias module:model/DeviceTemplate
     */
    constructor() { 
        
        DeviceTemplate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeviceTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceTemplate} obj Optional instance to populate.
     * @return {module:model/DeviceTemplate} The populated <code>DeviceTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceTemplate();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('isLatestVersion')) {
                obj['isLatestVersion'] = ApiClient.convertToType(data['isLatestVersion'], 'Boolean');
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
 * @member {String} id
 */
DeviceTemplate.prototype['id'] = undefined;

/**
 * @member {String} userId
 */
DeviceTemplate.prototype['userId'] = undefined;

/**
 * @member {Date} createdOn
 */
DeviceTemplate.prototype['createdOn'] = undefined;

/**
 * @member {String} name
 */
DeviceTemplate.prototype['name'] = undefined;

/**
 * @member {String} description
 */
DeviceTemplate.prototype['description'] = undefined;

/**
 * @member {String} version
 */
DeviceTemplate.prototype['version'] = undefined;

/**
 * @member {Boolean} isLatestVersion
 */
DeviceTemplate.prototype['isLatestVersion'] = undefined;

/**
 * @member {String} serviceType
 */
DeviceTemplate.prototype['serviceType'] = undefined;

/**
 * @member {Array.<String>} deviceModels
 */
DeviceTemplate.prototype['deviceModels'] = undefined;

/**
 * @member {String} configContent
 */
DeviceTemplate.prototype['configContent'] = undefined;

/**
 * @member {String} resourceProvider
 */
DeviceTemplate.prototype['resourceProvider'] = undefined;

/**
 * @member {String} templateStandard
 */
DeviceTemplate.prototype['templateStandard'] = undefined;

/**
 * @member {module:model/DeviceTemplateAccess} tenantAccess
 */
DeviceTemplate.prototype['tenantAccess'] = undefined;

/**
 * @member {Array.<module:model/TemplateParameterValidator>} templateParameterValidators
 */
DeviceTemplate.prototype['templateParameterValidators'] = undefined;

/**
 * @member {Array.<String>} tags
 */
DeviceTemplate.prototype['tags'] = undefined;






export default DeviceTemplate;

