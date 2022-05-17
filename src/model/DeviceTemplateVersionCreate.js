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
import TemplateParameterValidator from './TemplateParameterValidator';

/**
 * The DeviceTemplateVersionCreate model module.
 * @module model/DeviceTemplateVersionCreate
 * @version 1.0.10
 */
class DeviceTemplateVersionCreate {
    /**
     * Constructs a new <code>DeviceTemplateVersionCreate</code>.
     * @alias module:model/DeviceTemplateVersionCreate
     * @param name {String} 
     * @param configContent {String} 
     */
    constructor(name, configContent) { 
        
        DeviceTemplateVersionCreate.initialize(this, name, configContent);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, configContent) { 
        obj['name'] = name;
        obj['configContent'] = configContent;
    }

    /**
     * Constructs a <code>DeviceTemplateVersionCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceTemplateVersionCreate} obj Optional instance to populate.
     * @return {module:model/DeviceTemplateVersionCreate} The populated <code>DeviceTemplateVersionCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceTemplateVersionCreate();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('configContent')) {
                obj['configContent'] = ApiClient.convertToType(data['configContent'], 'String');
            }
            if (data.hasOwnProperty('templateParameterValidators')) {
                obj['templateParameterValidators'] = ApiClient.convertToType(data['templateParameterValidators'], [TemplateParameterValidator]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
DeviceTemplateVersionCreate.prototype['name'] = undefined;

/**
 * @member {String} configContent
 */
DeviceTemplateVersionCreate.prototype['configContent'] = undefined;

/**
 * @member {Array.<module:model/TemplateParameterValidator>} templateParameterValidators
 */
DeviceTemplateVersionCreate.prototype['templateParameterValidators'] = undefined;






export default DeviceTemplateVersionCreate;

