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
 * The ChangeRequestSummary model module.
 * @module model/ChangeRequestSummary
 * @version 1.0.10
 */
class ChangeRequestSummary {
    /**
     * Constructs a new <code>ChangeRequestSummary</code>.
     * @alias module:model/ChangeRequestSummary
     */
    constructor() { 
        
        ChangeRequestSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChangeRequestSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChangeRequestSummary} obj Optional instance to populate.
     * @return {module:model/ChangeRequestSummary} The populated <code>ChangeRequestSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChangeRequestSummary();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], {'String': Object});
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ChangeRequestSummary.prototype['id'] = undefined;

/**
 * @member {String} externalId
 */
ChangeRequestSummary.prototype['externalId'] = undefined;

/**
 * @member {String} name
 */
ChangeRequestSummary.prototype['name'] = undefined;

/**
 * @member {String} description
 */
ChangeRequestSummary.prototype['description'] = undefined;

/**
 * @member {String} tenantId
 */
ChangeRequestSummary.prototype['tenantId'] = undefined;

/**
 * @member {Object.<String, Object>} attributes
 */
ChangeRequestSummary.prototype['attributes'] = undefined;






export default ChangeRequestSummary;

