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
import WorkflowAccessMeta from './WorkflowAccessMeta';
import WorkflowFooter from './WorkflowFooter';
import WorkflowSchemaAllOf from './WorkflowSchemaAllOf';

/**
 * The WorkflowSchema model module.
 * @module model/WorkflowSchema
 * @version 1.0.8
 */
class WorkflowSchema {
    /**
     * Constructs a new <code>WorkflowSchema</code>.
     * @alias module:model/WorkflowSchema
     * @implements module:model/WorkflowSchemaAllOf
     * @implements module:model/WorkflowFooter
     */
    constructor() { 
        WorkflowSchemaAllOf.initialize(this);WorkflowFooter.initialize(this);
        WorkflowSchema.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowSchema} obj Optional instance to populate.
     * @return {module:model/WorkflowSchema} The populated <code>WorkflowSchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowSchema();
            WorkflowSchemaAllOf.constructFromObject(data, obj);
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
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('base_type')) {
                obj['base_type'] = ApiClient.convertToType(data['base_type'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('invisible')) {
                obj['invisible'] = ApiClient.convertToType(data['invisible'], 'Boolean');
            }
            if (data.hasOwnProperty('inherits')) {
                obj['inherits'] = ApiClient.convertToType(data['inherits'], 'String');
            }
            if (data.hasOwnProperty('access_meta')) {
                obj['access_meta'] = WorkflowAccessMeta.constructFromObject(data['access_meta']);
            }
            if (data.hasOwnProperty('variable_schema')) {
                obj['variable_schema'] = ApiClient.convertToType(data['variable_schema'], {'String': Object});
            }
            if (data.hasOwnProperty('property_schema')) {
                obj['property_schema'] = ApiClient.convertToType(data['property_schema'], {'String': Object});
            }
            if (data.hasOwnProperty('output_schema')) {
                obj['output_schema'] = ApiClient.convertToType(data['output_schema'], {'String': Object});
            }
            if (data.hasOwnProperty('view_config')) {
                obj['view_config'] = ApiClient.convertToType(data['view_config'], {'String': Object});
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], {'String': Object});
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
WorkflowSchema.prototype['id'] = undefined;

/**
 * @member {String} schema_id
 */
WorkflowSchema.prototype['schema_id'] = undefined;

/**
 * @member {String} name
 */
WorkflowSchema.prototype['name'] = undefined;

/**
 * @member {String} title
 */
WorkflowSchema.prototype['title'] = undefined;

/**
 * @member {String} description
 */
WorkflowSchema.prototype['description'] = undefined;

/**
 * @member {String} type
 */
WorkflowSchema.prototype['type'] = undefined;

/**
 * @member {String} base_type
 */
WorkflowSchema.prototype['base_type'] = undefined;

/**
 * @member {String} version
 */
WorkflowSchema.prototype['version'] = undefined;

/**
 * @member {Boolean} invisible
 */
WorkflowSchema.prototype['invisible'] = undefined;

/**
 * @member {String} inherits
 */
WorkflowSchema.prototype['inherits'] = undefined;

/**
 * @member {module:model/WorkflowAccessMeta} access_meta
 */
WorkflowSchema.prototype['access_meta'] = undefined;

/**
 * @member {Object.<String, Object>} variable_schema
 */
WorkflowSchema.prototype['variable_schema'] = undefined;

/**
 * @member {Object.<String, Object>} property_schema
 */
WorkflowSchema.prototype['property_schema'] = undefined;

/**
 * @member {Object.<String, Object>} output_schema
 */
WorkflowSchema.prototype['output_schema'] = undefined;

/**
 * @member {Object.<String, Object>} view_config
 */
WorkflowSchema.prototype['view_config'] = undefined;

/**
 * @member {Object.<String, Object>} attributes
 */
WorkflowSchema.prototype['attributes'] = undefined;

/**
 * @member {String} created_on
 */
WorkflowSchema.prototype['created_on'] = undefined;

/**
 * @member {String} created_by
 */
WorkflowSchema.prototype['created_by'] = undefined;

/**
 * @member {String} updated_on
 */
WorkflowSchema.prototype['updated_on'] = undefined;

/**
 * @member {String} updated_by
 */
WorkflowSchema.prototype['updated_by'] = undefined;

/**
 * @member {String} owner
 */
WorkflowSchema.prototype['owner'] = undefined;

/**
 * @member {String} unique_name
 */
WorkflowSchema.prototype['unique_name'] = undefined;


// Implement WorkflowSchemaAllOf interface:
/**
 * @member {String} id
 */
WorkflowSchemaAllOf.prototype['id'] = undefined;
/**
 * @member {String} schema_id
 */
WorkflowSchemaAllOf.prototype['schema_id'] = undefined;
/**
 * @member {String} name
 */
WorkflowSchemaAllOf.prototype['name'] = undefined;
/**
 * @member {String} title
 */
WorkflowSchemaAllOf.prototype['title'] = undefined;
/**
 * @member {String} description
 */
WorkflowSchemaAllOf.prototype['description'] = undefined;
/**
 * @member {String} type
 */
WorkflowSchemaAllOf.prototype['type'] = undefined;
/**
 * @member {String} base_type
 */
WorkflowSchemaAllOf.prototype['base_type'] = undefined;
/**
 * @member {String} version
 */
WorkflowSchemaAllOf.prototype['version'] = undefined;
/**
 * @member {Boolean} invisible
 */
WorkflowSchemaAllOf.prototype['invisible'] = undefined;
/**
 * @member {String} inherits
 */
WorkflowSchemaAllOf.prototype['inherits'] = undefined;
/**
 * @member {module:model/WorkflowAccessMeta} access_meta
 */
WorkflowSchemaAllOf.prototype['access_meta'] = undefined;
/**
 * @member {Object.<String, Object>} variable_schema
 */
WorkflowSchemaAllOf.prototype['variable_schema'] = undefined;
/**
 * @member {Object.<String, Object>} property_schema
 */
WorkflowSchemaAllOf.prototype['property_schema'] = undefined;
/**
 * @member {Object.<String, Object>} output_schema
 */
WorkflowSchemaAllOf.prototype['output_schema'] = undefined;
/**
 * @member {Object.<String, Object>} view_config
 */
WorkflowSchemaAllOf.prototype['view_config'] = undefined;
/**
 * @member {Object.<String, Object>} attributes
 */
WorkflowSchemaAllOf.prototype['attributes'] = undefined;
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




export default WorkflowSchema;

