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
 * The WorkflowVariableAllOf model module.
 * @module model/WorkflowVariableAllOf
 * @version 1.0.10
 */
class WorkflowVariableAllOf {
    /**
     * Constructs a new <code>WorkflowVariableAllOf</code>.
     * @alias module:model/WorkflowVariableAllOf
     */
    constructor() { 
        
        WorkflowVariableAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowVariableAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowVariableAllOf} obj Optional instance to populate.
     * @return {module:model/WorkflowVariableAllOf} The populated <code>WorkflowVariableAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowVariableAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('base_type')) {
                obj['base_type'] = ApiClient.convertToType(data['base_type'], 'String');
            }
            if (data.hasOwnProperty('schema_id')) {
                obj['schema_id'] = ApiClient.convertToType(data['schema_id'], 'String');
            }
            if (data.hasOwnProperty('object_type')) {
                obj['object_type'] = ApiClient.convertToType(data['object_type'], 'String');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], {'String': Object});
            }
            if (data.hasOwnProperty('data_type')) {
                obj['data_type'] = ApiClient.convertToType(data['data_type'], 'String');
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
WorkflowVariableAllOf.prototype['id'] = undefined;

/**
 * @member {String} type
 */
WorkflowVariableAllOf.prototype['type'] = undefined;

/**
 * @member {String} base_type
 */
WorkflowVariableAllOf.prototype['base_type'] = undefined;

/**
 * @member {String} schema_id
 */
WorkflowVariableAllOf.prototype['schema_id'] = undefined;

/**
 * @member {String} object_type
 */
WorkflowVariableAllOf.prototype['object_type'] = undefined;

/**
 * @member {Object.<String, Object>} properties
 */
WorkflowVariableAllOf.prototype['properties'] = undefined;

/**
 * @member {String} data_type
 */
WorkflowVariableAllOf.prototype['data_type'] = undefined;

/**
 * @member {String} scope
 */
WorkflowVariableAllOf.prototype['scope'] = undefined;






export default WorkflowVariableAllOf;

