/**
 * KAKAPO - MSX SDK
 * MSX Platform SDK
 *
 * The version of the OpenAPI document: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import WorkflowDefAccessMeta from './WorkflowDefAccessMeta';

/**
 * The WorkflowTargetAllOf model module.
 * @module model/WorkflowTargetAllOf
 * @version 1.0.1
 */
class WorkflowTargetAllOf {
    /**
     * Constructs a new <code>WorkflowTargetAllOf</code>.
     * @alias module:model/WorkflowTargetAllOf
     */
    constructor() { 
        
        WorkflowTargetAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowTargetAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowTargetAllOf} obj Optional instance to populate.
     * @return {module:model/WorkflowTargetAllOf} The populated <code>WorkflowTargetAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowTargetAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('schema_id')) {
                obj['schema_id'] = ApiClient.convertToType(data['schema_id'], 'String');
            }
            if (data.hasOwnProperty('adapter_id')) {
                obj['adapter_id'] = ApiClient.convertToType(data['adapter_id'], 'String');
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
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], {'String': Object});
            }
            if (data.hasOwnProperty('valid')) {
                obj['valid'] = ApiClient.convertToType(data['valid'], 'Boolean');
            }
            if (data.hasOwnProperty('def_access_meta')) {
                obj['def_access_meta'] = WorkflowDefAccessMeta.constructFromObject(data['def_access_meta']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
WorkflowTargetAllOf.prototype['id'] = undefined;

/**
 * @member {String} schema_id
 */
WorkflowTargetAllOf.prototype['schema_id'] = undefined;

/**
 * @member {String} adapter_id
 */
WorkflowTargetAllOf.prototype['adapter_id'] = undefined;

/**
 * @member {String} name
 */
WorkflowTargetAllOf.prototype['name'] = undefined;

/**
 * @member {String} title
 */
WorkflowTargetAllOf.prototype['title'] = undefined;

/**
 * @member {String} type
 */
WorkflowTargetAllOf.prototype['type'] = undefined;

/**
 * @member {String} base_type
 */
WorkflowTargetAllOf.prototype['base_type'] = undefined;

/**
 * @member {Object.<String, Object>} properties
 */
WorkflowTargetAllOf.prototype['properties'] = undefined;

/**
 * @member {Boolean} valid
 */
WorkflowTargetAllOf.prototype['valid'] = undefined;

/**
 * @member {module:model/WorkflowDefAccessMeta} def_access_meta
 */
WorkflowTargetAllOf.prototype['def_access_meta'] = undefined;






export default WorkflowTargetAllOf;

