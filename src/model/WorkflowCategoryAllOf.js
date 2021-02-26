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

/**
 * The WorkflowCategoryAllOf model module.
 * @module model/WorkflowCategoryAllOf
 * @version 3.10.0
 */
class WorkflowCategoryAllOf {
    /**
     * Constructs a new <code>WorkflowCategoryAllOf</code>.
     * @alias module:model/WorkflowCategoryAllOf
     */
    constructor() { 
        
        WorkflowCategoryAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowCategoryAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowCategoryAllOf} obj Optional instance to populate.
     * @return {module:model/WorkflowCategoryAllOf} The populated <code>WorkflowCategoryAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowCategoryAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('schema_id')) {
                obj['schema_id'] = ApiClient.convertToType(data['schema_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('base_type')) {
                obj['base_type'] = ApiClient.convertToType(data['base_type'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('category_type')) {
                obj['category_type'] = ApiClient.convertToType(data['category_type'], 'String');
            }
            if (data.hasOwnProperty('object_type')) {
                obj['object_type'] = ApiClient.convertToType(data['object_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
WorkflowCategoryAllOf.prototype['id'] = undefined;

/**
 * @member {String} schema_id
 */
WorkflowCategoryAllOf.prototype['schema_id'] = undefined;

/**
 * @member {String} name
 */
WorkflowCategoryAllOf.prototype['name'] = undefined;

/**
 * @member {String} title
 */
WorkflowCategoryAllOf.prototype['title'] = undefined;

/**
 * @member {String} type
 */
WorkflowCategoryAllOf.prototype['type'] = undefined;

/**
 * @member {String} base_type
 */
WorkflowCategoryAllOf.prototype['base_type'] = undefined;

/**
 * @member {String} description
 */
WorkflowCategoryAllOf.prototype['description'] = undefined;

/**
 * @member {String} category_type
 */
WorkflowCategoryAllOf.prototype['category_type'] = undefined;

/**
 * @member {String} object_type
 */
WorkflowCategoryAllOf.prototype['object_type'] = undefined;






export default WorkflowCategoryAllOf;

