/**
 * KAKAPO - MSX SDK
 * MSX Platform SDK
 *
 * The version of the OpenAPI document: 1.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The WorkflowEventUpdate model module.
 * @module model/WorkflowEventUpdate
 * @version 1.0.2
 */
class WorkflowEventUpdate {
    /**
     * Constructs a new <code>WorkflowEventUpdate</code>.
     * @alias module:model/WorkflowEventUpdate
     * @param title {String} 
     * @param targetId {String} 
     * @param schemaId {String} 
     * @param properties {Object.<String, Object>} 
     */
    constructor(title, targetId, schemaId, properties) { 
        
        WorkflowEventUpdate.initialize(this, title, targetId, schemaId, properties);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title, targetId, schemaId, properties) { 
        obj['title'] = title;
        obj['target_id'] = targetId;
        obj['schema_id'] = schemaId;
        obj['properties'] = properties;
    }

    /**
     * Constructs a <code>WorkflowEventUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowEventUpdate} obj Optional instance to populate.
     * @return {module:model/WorkflowEventUpdate} The populated <code>WorkflowEventUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowEventUpdate();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('target_id')) {
                obj['target_id'] = ApiClient.convertToType(data['target_id'], 'String');
            }
            if (data.hasOwnProperty('schema_id')) {
                obj['schema_id'] = ApiClient.convertToType(data['schema_id'], 'String');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], {'String': Object});
            }
        }
        return obj;
    }


}

/**
 * @member {String} title
 */
WorkflowEventUpdate.prototype['title'] = undefined;

/**
 * @member {String} description
 */
WorkflowEventUpdate.prototype['description'] = undefined;

/**
 * @member {String} target_id
 */
WorkflowEventUpdate.prototype['target_id'] = undefined;

/**
 * @member {String} schema_id
 */
WorkflowEventUpdate.prototype['schema_id'] = undefined;

/**
 * @member {Object.<String, Object>} properties
 */
WorkflowEventUpdate.prototype['properties'] = undefined;






export default WorkflowEventUpdate;

