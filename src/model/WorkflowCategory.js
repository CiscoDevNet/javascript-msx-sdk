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
import WorkflowCategoryAllOf from './WorkflowCategoryAllOf';
import WorkflowFooter from './WorkflowFooter';

/**
 * The WorkflowCategory model module.
 * @module model/WorkflowCategory
 * @version 3.10.0
 */
class WorkflowCategory {
    /**
     * Constructs a new <code>WorkflowCategory</code>.
     * @alias module:model/WorkflowCategory
     * @implements module:model/WorkflowCategoryAllOf
     * @implements module:model/WorkflowFooter
     */
    constructor() { 
        WorkflowCategoryAllOf.initialize(this);WorkflowFooter.initialize(this);
        WorkflowCategory.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowCategory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowCategory} obj Optional instance to populate.
     * @return {module:model/WorkflowCategory} The populated <code>WorkflowCategory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowCategory();
            WorkflowCategoryAllOf.constructFromObject(data, obj);
            WorkflowFooter.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('schema_id')) {
                obj['schema_id'] = ApiClient.convertToType(data['schema_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('base_type')) {
                obj['base_type'] = ApiClient.convertToType(data['base_type'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('category_type')) {
                obj['category_type'] = ApiClient.convertToType(data['category_type'], 'String');
            }
            if (data.hasOwnProperty('object_type')) {
                obj['object_type'] = ApiClient.convertToType(data['object_type'], 'String');
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
WorkflowCategory.prototype['id'] = undefined;

/**
 * @member {String} schema_id
 */
WorkflowCategory.prototype['schema_id'] = undefined;

/**
 * @member {String} name
 */
WorkflowCategory.prototype['name'] = undefined;

/**
 * @member {String} title
 */
WorkflowCategory.prototype['title'] = undefined;

/**
 * @member {String} type
 */
WorkflowCategory.prototype['type'] = undefined;

/**
 * @member {String} base_type
 */
WorkflowCategory.prototype['base_type'] = undefined;

/**
 * @member {String} description
 */
WorkflowCategory.prototype['description'] = undefined;

/**
 * @member {String} category_type
 */
WorkflowCategory.prototype['category_type'] = undefined;

/**
 * @member {String} object_type
 */
WorkflowCategory.prototype['object_type'] = undefined;

/**
 * @member {String} created_on
 */
WorkflowCategory.prototype['created_on'] = undefined;

/**
 * @member {String} created_by
 */
WorkflowCategory.prototype['created_by'] = undefined;

/**
 * @member {String} updated_on
 */
WorkflowCategory.prototype['updated_on'] = undefined;

/**
 * @member {String} updated_by
 */
WorkflowCategory.prototype['updated_by'] = undefined;

/**
 * @member {String} owner
 */
WorkflowCategory.prototype['owner'] = undefined;

/**
 * @member {String} unique_name
 */
WorkflowCategory.prototype['unique_name'] = undefined;


// Implement WorkflowCategoryAllOf interface:
/**
 * @member {String} id
 */
WorkflowCategoryAllOf.prototype['id'] = undefined;
/**
 * @member {String} schema_id
 */
WorkflowCategoryAllOf.prototype['schema_id'] = undefined;
/**
 * @member {String} name
 */
WorkflowCategoryAllOf.prototype['name'] = undefined;
/**
 * @member {String} title
 */
WorkflowCategoryAllOf.prototype['title'] = undefined;
/**
 * @member {String} type
 */
WorkflowCategoryAllOf.prototype['type'] = undefined;
/**
 * @member {String} base_type
 */
WorkflowCategoryAllOf.prototype['base_type'] = undefined;
/**
 * @member {String} description
 */
WorkflowCategoryAllOf.prototype['description'] = undefined;
/**
 * @member {String} category_type
 */
WorkflowCategoryAllOf.prototype['category_type'] = undefined;
/**
 * @member {String} object_type
 */
WorkflowCategoryAllOf.prototype['object_type'] = undefined;
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




export default WorkflowCategory;

