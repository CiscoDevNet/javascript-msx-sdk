/**
 * MSX SDK
 * MSX SDK client.
 *
 * The version of the OpenAPI document: 1.0.8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The WorkflowDefAccessMeta model module.
 * @module model/WorkflowDefAccessMeta
 * @version 1.0.8
 */
class WorkflowDefAccessMeta {
    /**
     * Constructs a new <code>WorkflowDefAccessMeta</code>.
     * @alias module:model/WorkflowDefAccessMeta
     */
    constructor() { 
        
        WorkflowDefAccessMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowDefAccessMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowDefAccessMeta} obj Optional instance to populate.
     * @return {module:model/WorkflowDefAccessMeta} The populated <code>WorkflowDefAccessMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowDefAccessMeta();

            if (data.hasOwnProperty('is_integration')) {
                obj['is_integration'] = ApiClient.convertToType(data['is_integration'], 'Boolean');
            }
            if (data.hasOwnProperty('is_internal')) {
                obj['is_internal'] = ApiClient.convertToType(data['is_internal'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} is_integration
 */
WorkflowDefAccessMeta.prototype['is_integration'] = undefined;

/**
 * @member {Boolean} is_internal
 */
WorkflowDefAccessMeta.prototype['is_internal'] = undefined;






export default WorkflowDefAccessMeta;

