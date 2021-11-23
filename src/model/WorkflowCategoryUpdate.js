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

/**
 * The WorkflowCategoryUpdate model module.
 * @module model/WorkflowCategoryUpdate
 * @version 1.0.8
 */
class WorkflowCategoryUpdate {
    /**
     * Constructs a new <code>WorkflowCategoryUpdate</code>.
     * @alias module:model/WorkflowCategoryUpdate
     * @param name {String} 
     * @param title {String} 
     * @param description {String} 
     * @param schemaId {String} 
     */
    constructor(name, title, description, schemaId) { 
        
        WorkflowCategoryUpdate.initialize(this, name, title, description, schemaId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, title, description, schemaId) { 
        obj['name'] = name;
        obj['title'] = title;
        obj['description'] = description;
        obj['schema_id'] = schemaId;
    }

    /**
     * Constructs a <code>WorkflowCategoryUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowCategoryUpdate} obj Optional instance to populate.
     * @return {module:model/WorkflowCategoryUpdate} The populated <code>WorkflowCategoryUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowCategoryUpdate();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('schema_id')) {
                obj['schema_id'] = ApiClient.convertToType(data['schema_id'], 'String');
            }
            if (data.hasOwnProperty('unique_name')) {
                obj['unique_name'] = ApiClient.convertToType(data['unique_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
WorkflowCategoryUpdate.prototype['name'] = undefined;

/**
 * @member {String} title
 */
WorkflowCategoryUpdate.prototype['title'] = undefined;

/**
 * @member {String} description
 */
WorkflowCategoryUpdate.prototype['description'] = undefined;

/**
 * @member {String} schema_id
 */
WorkflowCategoryUpdate.prototype['schema_id'] = undefined;

/**
 * @member {String} unique_name
 */
WorkflowCategoryUpdate.prototype['unique_name'] = undefined;






export default WorkflowCategoryUpdate;

