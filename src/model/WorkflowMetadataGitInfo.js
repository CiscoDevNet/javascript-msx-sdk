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
 * The WorkflowMetadataGitInfo model module.
 * @module model/WorkflowMetadataGitInfo
 * @version 1.0.10
 */
class WorkflowMetadataGitInfo {
    /**
     * Constructs a new <code>WorkflowMetadataGitInfo</code>.
     * @alias module:model/WorkflowMetadataGitInfo
     */
    constructor() { 
        
        WorkflowMetadataGitInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowMetadataGitInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowMetadataGitInfo} obj Optional instance to populate.
     * @return {module:model/WorkflowMetadataGitInfo} The populated <code>WorkflowMetadataGitInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowMetadataGitInfo();

            if (data.hasOwnProperty('target_id')) {
                obj['target_id'] = ApiClient.convertToType(data['target_id'], 'String');
            }
            if (data.hasOwnProperty('commit_hash')) {
                obj['commit_hash'] = ApiClient.convertToType(data['commit_hash'], 'String');
            }
            if (data.hasOwnProperty('committed_by')) {
                obj['committed_by'] = ApiClient.convertToType(data['committed_by'], 'String');
            }
            if (data.hasOwnProperty('commited_on')) {
                obj['commited_on'] = ApiClient.convertToType(data['commited_on'], 'String');
            }
            if (data.hasOwnProperty('committed_on')) {
                obj['committed_on'] = ApiClient.convertToType(data['committed_on'], 'String');
            }
            if (data.hasOwnProperty('commit_message')) {
                obj['commit_message'] = ApiClient.convertToType(data['commit_message'], 'String');
            }
            if (data.hasOwnProperty('file_name')) {
                obj['file_name'] = ApiClient.convertToType(data['file_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} target_id
 */
WorkflowMetadataGitInfo.prototype['target_id'] = undefined;

/**
 * @member {String} commit_hash
 */
WorkflowMetadataGitInfo.prototype['commit_hash'] = undefined;

/**
 * @member {String} committed_by
 */
WorkflowMetadataGitInfo.prototype['committed_by'] = undefined;

/**
 * @member {String} commited_on
 */
WorkflowMetadataGitInfo.prototype['commited_on'] = undefined;

/**
 * @member {String} committed_on
 */
WorkflowMetadataGitInfo.prototype['committed_on'] = undefined;

/**
 * @member {String} commit_message
 */
WorkflowMetadataGitInfo.prototype['commit_message'] = undefined;

/**
 * @member {String} file_name
 */
WorkflowMetadataGitInfo.prototype['file_name'] = undefined;






export default WorkflowMetadataGitInfo;

