/**
 * MSX SDK
 * MSX SDK client.
 *
 * The version of the OpenAPI document: 1.0.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import WorkflowAccessMetaType from './WorkflowAccessMetaType';

/**
 * The WorkflowAccessMeta model module.
 * @module model/WorkflowAccessMeta
 * @version 1.0.9
 */
class WorkflowAccessMeta {
    /**
     * Constructs a new <code>WorkflowAccessMeta</code>.
     * @alias module:model/WorkflowAccessMeta
     */
    constructor() { 
        
        WorkflowAccessMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowAccessMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowAccessMeta} obj Optional instance to populate.
     * @return {module:model/WorkflowAccessMeta} The populated <code>WorkflowAccessMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowAccessMeta();

            if (data.hasOwnProperty('adapter')) {
                obj['adapter'] = WorkflowAccessMetaType.constructFromObject(data['adapter']);
            }
            if (data.hasOwnProperty('runtime_users')) {
                obj['runtime_users'] = ApiClient.convertToType(data['runtime_users'], [WorkflowAccessMetaType]);
            }
            if (data.hasOwnProperty('targets')) {
                obj['targets'] = ApiClient.convertToType(data['targets'], [WorkflowAccessMetaType]);
            }
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
 * @member {module:model/WorkflowAccessMetaType} adapter
 */
WorkflowAccessMeta.prototype['adapter'] = undefined;

/**
 * @member {Array.<module:model/WorkflowAccessMetaType>} runtime_users
 */
WorkflowAccessMeta.prototype['runtime_users'] = undefined;

/**
 * @member {Array.<module:model/WorkflowAccessMetaType>} targets
 */
WorkflowAccessMeta.prototype['targets'] = undefined;

/**
 * @member {Boolean} is_integration
 */
WorkflowAccessMeta.prototype['is_integration'] = undefined;

/**
 * @member {Boolean} is_internal
 */
WorkflowAccessMeta.prototype['is_internal'] = undefined;






export default WorkflowAccessMeta;

