/**
 * KAKAPO - MSX SDK
 * MSX Platform SDK
 *
 * The version of the OpenAPI document: 3.10.0
 * Contact: somecontact@cisco.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The WorkflowAccessMetaType model module.
 * @module model/WorkflowAccessMetaType
 * @version 3.10.0
 */
class WorkflowAccessMetaType {
    /**
     * Constructs a new <code>WorkflowAccessMetaType</code>.
     * @alias module:model/WorkflowAccessMetaType
     */
    constructor() { 
        
        WorkflowAccessMetaType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowAccessMetaType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowAccessMetaType} obj Optional instance to populate.
     * @return {module:model/WorkflowAccessMetaType} The populated <code>WorkflowAccessMetaType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowAccessMetaType();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
WorkflowAccessMetaType.prototype['id'] = undefined;

/**
 * @member {String} type
 */
WorkflowAccessMetaType.prototype['type'] = undefined;

/**
 * @member {String} version
 */
WorkflowAccessMetaType.prototype['version'] = undefined;






export default WorkflowAccessMetaType;

