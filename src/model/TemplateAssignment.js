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
import TemplateAssignmentAllOf from './TemplateAssignmentAllOf';
import TemplateStatus from './TemplateStatus';
import TemplateStatusMeta from './TemplateStatusMeta';

/**
 * The TemplateAssignment model module.
 * @module model/TemplateAssignment
 * @version 1.0.10
 */
class TemplateAssignment {
    /**
     * Constructs a new <code>TemplateAssignment</code>.
     * @alias module:model/TemplateAssignment
     * @implements module:model/TemplateAssignmentAllOf
     * @implements module:model/TemplateStatusMeta
     */
    constructor() { 
        TemplateAssignmentAllOf.initialize(this);TemplateStatusMeta.initialize(this);
        TemplateAssignment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TemplateAssignment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateAssignment} obj Optional instance to populate.
     * @return {module:model/TemplateAssignment} The populated <code>TemplateAssignment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateAssignment();
            TemplateAssignmentAllOf.constructFromObject(data, obj);
            TemplateStatusMeta.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('templateId')) {
                obj['templateId'] = ApiClient.convertToType(data['templateId'], 'String');
            }
            if (data.hasOwnProperty('templateName')) {
                obj['templateName'] = ApiClient.convertToType(data['templateName'], 'String');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
            if (data.hasOwnProperty('assignedTenantId')) {
                obj['assignedTenantId'] = ApiClient.convertToType(data['assignedTenantId'], 'String');
            }
            if (data.hasOwnProperty('inheritable')) {
                obj['inheritable'] = ApiClient.convertToType(data['inheritable'], 'Boolean');
            }
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
 * @member {String} id
 */
TemplateAssignment.prototype['id'] = undefined;

/**
 * @member {String} templateId
 */
TemplateAssignment.prototype['templateId'] = undefined;

/**
 * @member {String} templateName
 */
TemplateAssignment.prototype['templateName'] = undefined;

/**
 * @member {String} tenantId
 */
TemplateAssignment.prototype['tenantId'] = undefined;

/**
 * @member {String} assignedTenantId
 */
TemplateAssignment.prototype['assignedTenantId'] = undefined;

/**
 * @member {Boolean} inheritable
 */
TemplateAssignment.prototype['inheritable'] = undefined;

/**
 * @member {module:model/TemplateStatus} status
 */
TemplateAssignment.prototype['status'] = undefined;

/**
 * @member {String} statusDetails
 */
TemplateAssignment.prototype['statusDetails'] = undefined;

/**
 * @member {Date} createdOn
 */
TemplateAssignment.prototype['createdOn'] = undefined;

/**
 * @member {String} createdBy
 */
TemplateAssignment.prototype['createdBy'] = undefined;

/**
 * @member {Date} modifiedOn
 */
TemplateAssignment.prototype['modifiedOn'] = undefined;

/**
 * @member {String} modifiedBy
 */
TemplateAssignment.prototype['modifiedBy'] = undefined;


// Implement TemplateAssignmentAllOf interface:
/**
 * @member {String} id
 */
TemplateAssignmentAllOf.prototype['id'] = undefined;
/**
 * @member {String} templateId
 */
TemplateAssignmentAllOf.prototype['templateId'] = undefined;
/**
 * @member {String} templateName
 */
TemplateAssignmentAllOf.prototype['templateName'] = undefined;
/**
 * @member {String} tenantId
 */
TemplateAssignmentAllOf.prototype['tenantId'] = undefined;
/**
 * @member {String} assignedTenantId
 */
TemplateAssignmentAllOf.prototype['assignedTenantId'] = undefined;
/**
 * @member {Boolean} inheritable
 */
TemplateAssignmentAllOf.prototype['inheritable'] = undefined;
// Implement TemplateStatusMeta interface:
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




export default TemplateAssignment;

