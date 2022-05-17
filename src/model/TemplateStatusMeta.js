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
import TemplateStatus from './TemplateStatus';

/**
 * The TemplateStatusMeta model module.
 * @module model/TemplateStatusMeta
 * @version 1.0.10
 */
class TemplateStatusMeta {
    /**
     * Constructs a new <code>TemplateStatusMeta</code>.
     * @alias module:model/TemplateStatusMeta
     */
    constructor() { 
        
        TemplateStatusMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TemplateStatusMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateStatusMeta} obj Optional instance to populate.
     * @return {module:model/TemplateStatusMeta} The populated <code>TemplateStatusMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateStatusMeta();

            if (data.hasOwnProperty('status')) {
                obj['status'] = TemplateStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('statusDetails')) {
                obj['statusDetails'] = ApiClient.convertToType(data['statusDetails'], 'String');
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Date');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
            }
            if (data.hasOwnProperty('modifiedOn')) {
                obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'Date');
            }
            if (data.hasOwnProperty('modifiedBy')) {
                obj['modifiedBy'] = ApiClient.convertToType(data['modifiedBy'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TemplateStatus} status
 */
TemplateStatusMeta.prototype['status'] = undefined;

/**
 * @member {String} statusDetails
 */
TemplateStatusMeta.prototype['statusDetails'] = undefined;

/**
 * @member {Date} createdOn
 */
TemplateStatusMeta.prototype['createdOn'] = undefined;

/**
 * @member {String} createdBy
 */
TemplateStatusMeta.prototype['createdBy'] = undefined;

/**
 * @member {Date} modifiedOn
 */
TemplateStatusMeta.prototype['modifiedOn'] = undefined;

/**
 * @member {String} modifiedBy
 */
TemplateStatusMeta.prototype['modifiedBy'] = undefined;






export default TemplateStatusMeta;

