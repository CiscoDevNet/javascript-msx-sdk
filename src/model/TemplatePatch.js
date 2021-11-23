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
import TemplateStatus from './TemplateStatus';

/**
 * The TemplatePatch model module.
 * @module model/TemplatePatch
 * @version 1.0.8
 */
class TemplatePatch {
    /**
     * Constructs a new <code>TemplatePatch</code>.
     * @alias module:model/TemplatePatch
     */
    constructor() { 
        
        TemplatePatch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TemplatePatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplatePatch} obj Optional instance to populate.
     * @return {module:model/TemplatePatch} The populated <code>TemplatePatch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplatePatch();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('serviceType')) {
                obj['serviceType'] = ApiClient.convertToType(data['serviceType'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('subtype')) {
                obj['subtype'] = ApiClient.convertToType(data['subtype'], 'String');
            }
            if (data.hasOwnProperty('configuration')) {
                obj['configuration'] = ApiClient.convertToType(data['configuration'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], {'String': 'String'});
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = TemplateStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('statusDetails')) {
                obj['statusDetails'] = ApiClient.convertToType(data['statusDetails'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
TemplatePatch.prototype['name'] = undefined;

/**
 * @member {String} description
 */
TemplatePatch.prototype['description'] = undefined;

/**
 * @member {String} serviceType
 */
TemplatePatch.prototype['serviceType'] = undefined;

/**
 * @member {String} type
 */
TemplatePatch.prototype['type'] = undefined;

/**
 * @member {String} subtype
 */
TemplatePatch.prototype['subtype'] = undefined;

/**
 * @member {String} configuration
 */
TemplatePatch.prototype['configuration'] = undefined;

/**
 * @member {Object.<String, String>} attributes
 */
TemplatePatch.prototype['attributes'] = undefined;

/**
 * @member {Array.<String>} tags
 */
TemplatePatch.prototype['tags'] = undefined;

/**
 * @member {String} notes
 */
TemplatePatch.prototype['notes'] = undefined;

/**
 * @member {module:model/TemplateStatus} status
 */
TemplatePatch.prototype['status'] = undefined;

/**
 * @member {String} statusDetails
 */
TemplatePatch.prototype['statusDetails'] = undefined;






export default TemplatePatch;
