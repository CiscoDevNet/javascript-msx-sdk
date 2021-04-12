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
import WorkflowAction from './WorkflowAction';
import WorkflowVariable from './WorkflowVariable';

/**
 * The WorkflowInstanceAllOf model module.
 * @module model/WorkflowInstanceAllOf
 * @version 1.0.2
 */
class WorkflowInstanceAllOf {
    /**
     * Constructs a new <code>WorkflowInstanceAllOf</code>.
     * @alias module:model/WorkflowInstanceAllOf
     */
    constructor() { 
        
        WorkflowInstanceAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowInstanceAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowInstanceAllOf} obj Optional instance to populate.
     * @return {module:model/WorkflowInstanceAllOf} The populated <code>WorkflowInstanceAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowInstanceAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('definition_id')) {
                obj['definition_id'] = ApiClient.convertToType(data['definition_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('schema_id')) {
                obj['schema_id'] = ApiClient.convertToType(data['schema_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('base_type')) {
                obj['base_type'] = ApiClient.convertToType(data['base_type'], 'String');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], {'String': Object});
            }
            if (data.hasOwnProperty('actions')) {
                obj['actions'] = ApiClient.convertToType(data['actions'], [WorkflowAction]);
            }
            if (data.hasOwnProperty('variables')) {
                obj['variables'] = ApiClient.convertToType(data['variables'], [WorkflowVariable]);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], {'String': Object});
            }
            if (data.hasOwnProperty('started_on')) {
                obj['started_on'] = ApiClient.convertToType(data['started_on'], 'String');
            }
            if (data.hasOwnProperty('ended_on')) {
                obj['ended_on'] = ApiClient.convertToType(data['ended_on'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
WorkflowInstanceAllOf.prototype['id'] = undefined;

/**
 * @member {String} definition_id
 */
WorkflowInstanceAllOf.prototype['definition_id'] = undefined;

/**
 * @member {String} name
 */
WorkflowInstanceAllOf.prototype['name'] = undefined;

/**
 * @member {String} schema_id
 */
WorkflowInstanceAllOf.prototype['schema_id'] = undefined;

/**
 * @member {String} version
 */
WorkflowInstanceAllOf.prototype['version'] = undefined;

/**
 * @member {String} type
 */
WorkflowInstanceAllOf.prototype['type'] = undefined;

/**
 * @member {String} base_type
 */
WorkflowInstanceAllOf.prototype['base_type'] = undefined;

/**
 * @member {Object.<String, Object>} properties
 */
WorkflowInstanceAllOf.prototype['properties'] = undefined;

/**
 * @member {Array.<module:model/WorkflowAction>} actions
 */
WorkflowInstanceAllOf.prototype['actions'] = undefined;

/**
 * @member {Array.<module:model/WorkflowVariable>} variables
 */
WorkflowInstanceAllOf.prototype['variables'] = undefined;

/**
 * @member {Object.<String, Object>} status
 */
WorkflowInstanceAllOf.prototype['status'] = undefined;

/**
 * @member {String} started_on
 */
WorkflowInstanceAllOf.prototype['started_on'] = undefined;

/**
 * @member {String} ended_on
 */
WorkflowInstanceAllOf.prototype['ended_on'] = undefined;






export default WorkflowInstanceAllOf;

