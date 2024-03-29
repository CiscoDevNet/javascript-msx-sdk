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
import WorkflowFooter from './WorkflowFooter';
import WorkflowInstanceAllOf from './WorkflowInstanceAllOf';
import WorkflowVariable from './WorkflowVariable';

/**
 * The WorkflowInstance model module.
 * @module model/WorkflowInstance
 * @version 1.0.10
 */
class WorkflowInstance {
    /**
     * Constructs a new <code>WorkflowInstance</code>.
     * @alias module:model/WorkflowInstance
     * @implements module:model/WorkflowInstanceAllOf
     * @implements module:model/WorkflowFooter
     */
    constructor() { 
        WorkflowInstanceAllOf.initialize(this);WorkflowFooter.initialize(this);
        WorkflowInstance.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowInstance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowInstance} obj Optional instance to populate.
     * @return {module:model/WorkflowInstance} The populated <code>WorkflowInstance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowInstance();
            WorkflowInstanceAllOf.constructFromObject(data, obj);
            WorkflowFooter.constructFromObject(data, obj);

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
WorkflowInstance.prototype['id'] = undefined;

/**
 * @member {String} definition_id
 */
WorkflowInstance.prototype['definition_id'] = undefined;

/**
 * @member {String} name
 */
WorkflowInstance.prototype['name'] = undefined;

/**
 * @member {String} schema_id
 */
WorkflowInstance.prototype['schema_id'] = undefined;

/**
 * @member {String} version
 */
WorkflowInstance.prototype['version'] = undefined;

/**
 * @member {String} type
 */
WorkflowInstance.prototype['type'] = undefined;

/**
 * @member {String} base_type
 */
WorkflowInstance.prototype['base_type'] = undefined;

/**
 * @member {Object.<String, Object>} properties
 */
WorkflowInstance.prototype['properties'] = undefined;

/**
 * @member {Array.<module:model/WorkflowAction>} actions
 */
WorkflowInstance.prototype['actions'] = undefined;

/**
 * @member {Array.<module:model/WorkflowVariable>} variables
 */
WorkflowInstance.prototype['variables'] = undefined;

/**
 * @member {Object.<String, Object>} status
 */
WorkflowInstance.prototype['status'] = undefined;

/**
 * @member {String} started_on
 */
WorkflowInstance.prototype['started_on'] = undefined;

/**
 * @member {String} ended_on
 */
WorkflowInstance.prototype['ended_on'] = undefined;

/**
 * @member {String} created_on
 */
WorkflowInstance.prototype['created_on'] = undefined;

/**
 * @member {String} created_by
 */
WorkflowInstance.prototype['created_by'] = undefined;

/**
 * @member {String} updated_on
 */
WorkflowInstance.prototype['updated_on'] = undefined;

/**
 * @member {String} updated_by
 */
WorkflowInstance.prototype['updated_by'] = undefined;

/**
 * @member {String} owner
 */
WorkflowInstance.prototype['owner'] = undefined;

/**
 * @member {String} unique_name
 */
WorkflowInstance.prototype['unique_name'] = undefined;


// Implement WorkflowInstanceAllOf interface:
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




export default WorkflowInstance;

