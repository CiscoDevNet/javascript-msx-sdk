/**
 * KAKAPO - MSX SDK
 * MSX Platform SDK
 *
 * The version of the OpenAPI document: 3.10.0
 * Contact: somecontact@cisco.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DeviceTemplateAccess from './DeviceTemplateAccess';
import DeviceTemplateAllOf from './DeviceTemplateAllOf';
import DeviceTemplateCreate from './DeviceTemplateCreate';
import TemplateParameterValidator from './TemplateParameterValidator';

/**
 * The DeviceTemplate model module.
 * @module model/DeviceTemplate
 * @version 3.10.0
 */
class DeviceTemplate {
    /**
     * Constructs a new <code>DeviceTemplate</code>.
     * @alias module:model/DeviceTemplate
     * @implements module:model/DeviceTemplateCreate
     * @implements module:model/DeviceTemplateAllOf
     * @param name {String} 
     * @param serviceType {String} 
     * @param configContent {String} 
     * @param resourceProvider {String} 
     */
    constructor(name, serviceType, configContent, resourceProvider) { 
        DeviceTemplateCreate.initialize(this, name, serviceType, configContent, resourceProvider);DeviceTemplateAllOf.initialize(this);
        DeviceTemplate.initialize(this, name, serviceType, configContent, resourceProvider);
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
     * Constructs a <code>DeviceTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceTemplate} obj Optional instance to populate.
     * @return {module:model/DeviceTemplate} The populated <code>DeviceTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceTemplate();
            DeviceTemplateCreate.constructFromObject(data, obj);
            DeviceTemplateAllOf.constructFromObject(data, obj);

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
                obj['tenantAccess'] = ApiClient.convertToType(data['tenantAccess'], DeviceTemplateAccess);
            }
            if (data.hasOwnProperty('templateParameterValidators')) {
                obj['templateParameterValidators'] = ApiClient.convertToType(data['templateParameterValidators'], [TemplateParameterValidator]);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Date');
            }
        }
        return obj;
    }


}

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


// Implement DeviceTemplateCreate interface:
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
// Implement DeviceTemplateAllOf interface:
/**
 * @member {String} id
 */
DeviceTemplateAllOf.prototype['id'] = undefined;
/**
 * @member {String} userId
 */
DeviceTemplateAllOf.prototype['userId'] = undefined;
/**
 * @member {Date} createdOn
 */
DeviceTemplateAllOf.prototype['createdOn'] = undefined;




export default DeviceTemplate;
