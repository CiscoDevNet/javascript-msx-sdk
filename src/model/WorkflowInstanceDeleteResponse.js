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

/**
 * The WorkflowInstanceDeleteResponse model module.
 * @module model/WorkflowInstanceDeleteResponse
 * @version 1.0.5
 */
class WorkflowInstanceDeleteResponse {
    /**
     * Constructs a new <code>WorkflowInstanceDeleteResponse</code>.
     * @alias module:model/WorkflowInstanceDeleteResponse
     */
    constructor() { 
        
        WorkflowInstanceDeleteResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowInstanceDeleteResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowInstanceDeleteResponse} obj Optional instance to populate.
     * @return {module:model/WorkflowInstanceDeleteResponse} The populated <code>WorkflowInstanceDeleteResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowInstanceDeleteResponse();

            if (data.hasOwnProperty('deleted_child_workflow_instance_ids')) {
                obj['deleted_child_workflow_instance_ids'] = ApiClient.convertToType(data['deleted_child_workflow_instance_ids'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} deleted_child_workflow_instance_ids
 */
WorkflowInstanceDeleteResponse.prototype['deleted_child_workflow_instance_ids'] = undefined;






export default WorkflowInstanceDeleteResponse;

