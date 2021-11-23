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
import TemplateAssignment from './TemplateAssignment';
import TemplateAssignmentResponseAllOf from './TemplateAssignmentResponseAllOf';
import TemplateStatus from './TemplateStatus';

/**
 * The TemplateAssignmentResponse model module.
 * @module model/TemplateAssignmentResponse
 * @version 1.0.8
 */
class TemplateAssignmentResponse {
    /**
     * Constructs a new <code>TemplateAssignmentResponse</code>.
     * @alias module:model/TemplateAssignmentResponse
     * @implements module:model/TemplateAssignment
     * @implements module:model/TemplateAssignmentResponseAllOf
     */
    constructor() { 
        TemplateAssignment.initialize(this);TemplateAssignmentResponseAllOf.initialize(this);
        TemplateAssignmentResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TemplateAssignmentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateAssignmentResponse} obj Optional instance to populate.
     * @return {module:model/TemplateAssignmentResponse} The populated <code>TemplateAssignmentResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateAssignmentResponse();
            TemplateAssignment.constructFromObject(data, obj);
            TemplateAssignmentResponseAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('responseStatus')) {
                obj['responseStatus'] = ApiClient.convertToType(data['responseStatus'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
TemplateAssignmentResponse.prototype['id'] = undefined;

/**
 * @member {String} templateId
 */
TemplateAssignmentResponse.prototype['templateId'] = undefined;

/**
 * @member {String} templateName
 */
TemplateAssignmentResponse.prototype['templateName'] = undefined;

/**
 * @member {String} tenantId
 */
TemplateAssignmentResponse.prototype['tenantId'] = undefined;

/**
 * @member {String} assignedTenantId
 */
TemplateAssignmentResponse.prototype['assignedTenantId'] = undefined;

/**
 * @member {Boolean} inheritable
 */
TemplateAssignmentResponse.prototype['inheritable'] = undefined;

/**
 * @member {module:model/TemplateStatus} status
 */
TemplateAssignmentResponse.prototype['status'] = undefined;

/**
 * @member {String} statusDetails
 */
TemplateAssignmentResponse.prototype['statusDetails'] = undefined;

/**
 * @member {Date} createdOn
 */
TemplateAssignmentResponse.prototype['createdOn'] = undefined;

/**
 * @member {String} createdBy
 */
TemplateAssignmentResponse.prototype['createdBy'] = undefined;

/**
 * @member {Date} modifiedOn
 */
TemplateAssignmentResponse.prototype['modifiedOn'] = undefined;

/**
 * @member {String} modifiedBy
 */
TemplateAssignmentResponse.prototype['modifiedBy'] = undefined;

/**
 * @member {module:model/TemplateAssignmentResponse.ResponseStatusEnum} responseStatus
 */
TemplateAssignmentResponse.prototype['responseStatus'] = undefined;


// Implement TemplateAssignment interface:
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
// Implement TemplateAssignmentResponseAllOf interface:
/**
 * @member {module:model/TemplateAssignmentResponseAllOf.ResponseStatusEnum} responseStatus
 */
TemplateAssignmentResponseAllOf.prototype['responseStatus'] = undefined;



/**
 * Allowed values for the <code>responseStatus</code> property.
 * @enum {String}
 * @readonly
 */
TemplateAssignmentResponse['ResponseStatusEnum'] = {

    /**
     * value: "NEW"
     * @const
     */
    "NEW": "NEW",

    /**
     * value: "OK"
     * @const
     */
    "OK": "OK",

    /**
     * value: "CONFLICT"
     * @const
     */
    "CONFLICT": "CONFLICT",

    /**
     * value: "UNASSIGNED"
     * @const
     */
    "UNASSIGNED": "UNASSIGNED",

    /**
     * value: "ERROR"
     * @const
     */
    "ERROR": "ERROR"
};



export default TemplateAssignmentResponse;

