/**
 * MSX SDK
 * MSX SDK client.
 *
 * The version of the OpenAPI document: 1.0.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import WorkflowDefAccessMeta from './WorkflowDefAccessMeta';
import WorkflowFooter from './WorkflowFooter';
import WorkflowTargetAllOf from './WorkflowTargetAllOf';

/**
 * The WorkflowTarget model module.
 * @module model/WorkflowTarget
 * @version 1.0.5
 */
class WorkflowTarget {
    /**
     * Constructs a new <code>WorkflowTarget</code>.
     * @alias module:model/WorkflowTarget
     * @implements module:model/WorkflowTargetAllOf
     * @implements module:model/WorkflowFooter
     */
    constructor() { 
        WorkflowTargetAllOf.initialize(this);WorkflowFooter.initialize(this);
        WorkflowTarget.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowTarget} obj Optional instance to populate.
     * @return {module:model/WorkflowTarget} The populated <code>WorkflowTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowTarget();
            WorkflowTargetAllOf.constructFromObject(data, obj);
            WorkflowFooter.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('created_on')) {
                obj['created_on'] = ApiClient.convertToType(data['created_on'], 'String');
            }
            if (data.hasOwnProperty('created_by')) {
                obj['created_by'] = ApiClient.convertToType(data['created_by'], 'String');
            }
            if (data.hasOwnProperty('updated_on')) {
                obj['updated_on'] = ApiClient.convertToType(data['updated_on'], 'String');
            }
            if (data.hasOwnProperty('updated_by')) {
                obj['updated_by'] = ApiClient.convertToType(data['updated_by'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('unique_name')) {
                obj['unique_name'] = ApiClient.convertToType(data['unique_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
WorkflowTarget.prototype['id'] = undefined;

/**
 * @member {String} schema_id
 */
WorkflowTarget.prototype['schema_id'] = undefined;

/**
 * @member {String} adapter_id
 */
WorkflowTarget.prototype['adapter_id'] = undefined;

/**
 * @member {String} name
 */
WorkflowTarget.prototype['name'] = undefined;

/**
 * @member {String} title
 */
WorkflowTarget.prototype['title'] = undefined;

/**
 * @member {String} type
 */
WorkflowTarget.prototype['type'] = undefined;

/**
 * @member {String} base_type
 */
WorkflowTarget.prototype['base_type'] = undefined;

/**
 * @member {Object.<String, Object>} properties
 */
WorkflowTarget.prototype['properties'] = undefined;

/**
 * @member {Boolean} valid
 */
WorkflowTarget.prototype['valid'] = undefined;

/**
 * @member {module:model/WorkflowDefAccessMeta} def_access_meta
 */
WorkflowTarget.prototype['def_access_meta'] = undefined;

/**
 * @member {String} created_on
 */
WorkflowTarget.prototype['created_on'] = undefined;

/**
 * @member {String} created_by
 */
WorkflowTarget.prototype['created_by'] = undefined;

/**
 * @member {String} updated_on
 */
WorkflowTarget.prototype['updated_on'] = undefined;

/**
 * @member {String} updated_by
 */
WorkflowTarget.prototype['updated_by'] = undefined;

/**
 * @member {String} owner
 */
WorkflowTarget.prototype['owner'] = undefined;

/**
 * @member {String} unique_name
 */
WorkflowTarget.prototype['unique_name'] = undefined;


// Implement WorkflowTargetAllOf interface:
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
// Implement WorkflowFooter interface:
/**
 * @member {String} created_on
 */
WorkflowFooter.prototype['created_on'] = undefined;
/**
 * @member {String} created_by
 */
WorkflowFooter.prototype['created_by'] = undefined;
/**
 * @member {String} updated_on
 */
WorkflowFooter.prototype['updated_on'] = undefined;
/**
 * @member {String} updated_by
 */
WorkflowFooter.prototype['updated_by'] = undefined;
/**
 * @member {String} owner
 */
WorkflowFooter.prototype['owner'] = undefined;
/**
 * @member {String} unique_name
 */
WorkflowFooter.prototype['unique_name'] = undefined;




export default WorkflowTarget;

