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
import WorkflowVariable from './WorkflowVariable';

/**
 * The WorkflowStartConfig model module.
 * @module model/WorkflowStartConfig
 * @version 1.0.10
 */
class WorkflowStartConfig {
    /**
     * Constructs a new <code>WorkflowStartConfig</code>.
     * @alias module:model/WorkflowStartConfig
     */
    constructor() { 
        
        WorkflowStartConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowStartConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowStartConfig} obj Optional instance to populate.
     * @return {module:model/WorkflowStartConfig} The populated <code>WorkflowStartConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowStartConfig();

            if (data.hasOwnProperty('input_variables')) {
                obj['input_variables'] = ApiClient.convertToType(data['input_variables'], [WorkflowVariable]);
            }
            if (data.hasOwnProperty('type_of_target_needed')) {
                obj['type_of_target_needed'] = ApiClient.convertToType(data['type_of_target_needed'], 'String');
            }
            if (data.hasOwnProperty('target_id')) {
                obj['target_id'] = ApiClient.convertToType(data['target_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/WorkflowVariable>} input_variables
 */
WorkflowStartConfig.prototype['input_variables'] = undefined;

/**
 * @member {String} type_of_target_needed
 */
WorkflowStartConfig.prototype['type_of_target_needed'] = undefined;

/**
 * @member {String} target_id
 */
WorkflowStartConfig.prototype['target_id'] = undefined;






export default WorkflowStartConfig;

