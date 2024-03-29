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
import WorkflowAction from './WorkflowAction';
import WorkflowMetadata from './WorkflowMetadata';
import WorkflowVariable from './WorkflowVariable';

/**
 * The WorkflowAllOf model module.
 * @module model/WorkflowAllOf
 * @version 1.0.10
 */
class WorkflowAllOf {
    /**
     * Constructs a new <code>WorkflowAllOf</code>.
     * @alias module:model/WorkflowAllOf
     */
    constructor() { 
        
        WorkflowAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowAllOf} obj Optional instance to populate.
     * @return {module:model/WorkflowAllOf} The populated <code>WorkflowAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowAllOf();

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
            if (data.hasOwnProperty('object_type')) {
                obj['object_type'] = ApiClient.convertToType(data['object_type'], 'String');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], {'String': Object});
            }
            if (data.hasOwnProperty('valid')) {
                obj['valid'] = ApiClient.convertToType(data['valid'], 'Boolean');
            }
            if (data.hasOwnProperty('workflow_valid')) {
                obj['workflow_valid'] = ApiClient.convertToType(data['workflow_valid'], 'Boolean');
            }
            if (data.hasOwnProperty('categories')) {
                obj['categories'] = ApiClient.convertToType(data['categories'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = WorkflowMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], {'String': Object});
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], ['String']);
            }
            if (data.hasOwnProperty('variables')) {
                obj['variables'] = ApiClient.convertToType(data['variables'], [WorkflowVariable]);
            }
            if (data.hasOwnProperty('actions')) {
                obj['actions'] = ApiClient.convertToType(data['actions'], [WorkflowAction]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
WorkflowAllOf.prototype['id'] = undefined;

/**
 * @member {String} schema_id
 */
WorkflowAllOf.prototype['schema_id'] = undefined;

/**
 * @member {String} name
 */
WorkflowAllOf.prototype['name'] = undefined;

/**
 * @member {String} title
 */
WorkflowAllOf.prototype['title'] = undefined;

/**
 * @member {String} type
 */
WorkflowAllOf.prototype['type'] = undefined;

/**
 * @member {String} base_type
 */
WorkflowAllOf.prototype['base_type'] = undefined;

/**
 * @member {String} object_type
 */
WorkflowAllOf.prototype['object_type'] = undefined;

/**
 * @member {Object.<String, Object>} properties
 */
WorkflowAllOf.prototype['properties'] = undefined;

/**
 * @member {Boolean} valid
 */
WorkflowAllOf.prototype['valid'] = undefined;

/**
 * @member {Boolean} workflow_valid
 */
WorkflowAllOf.prototype['workflow_valid'] = undefined;

/**
 * @member {Array.<String>} categories
 */
WorkflowAllOf.prototype['categories'] = undefined;

/**
 * @member {module:model/WorkflowMetadata} metadata
 */
WorkflowAllOf.prototype['metadata'] = undefined;

/**
 * @member {Object.<String, Object>} status
 */
WorkflowAllOf.prototype['status'] = undefined;

/**
 * @member {Array.<String>} permissions
 */
WorkflowAllOf.prototype['permissions'] = undefined;

/**
 * @member {Array.<module:model/WorkflowVariable>} variables
 */
WorkflowAllOf.prototype['variables'] = undefined;

/**
 * @member {Array.<module:model/WorkflowAction>} actions
 */
WorkflowAllOf.prototype['actions'] = undefined;






export default WorkflowAllOf;

