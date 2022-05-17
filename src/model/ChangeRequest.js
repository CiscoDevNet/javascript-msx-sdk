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
import ChangeRequestAllOf from './ChangeRequestAllOf';
import ChangeRequestUpdate from './ChangeRequestUpdate';

/**
 * The ChangeRequest model module.
 * @module model/ChangeRequest
 * @version 1.0.10
 */
class ChangeRequest {
    /**
     * Constructs a new <code>ChangeRequest</code>.
     * @alias module:model/ChangeRequest
     * @implements module:model/ChangeRequestAllOf
     * @implements module:model/ChangeRequestUpdate
     */
    constructor() { 
        ChangeRequestAllOf.initialize(this);ChangeRequestUpdate.initialize(this);
        ChangeRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChangeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChangeRequest} obj Optional instance to populate.
     * @return {module:model/ChangeRequest} The populated <code>ChangeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChangeRequest();
            ChangeRequestAllOf.constructFromObject(data, obj);
            ChangeRequestUpdate.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], {'String': Object});
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ChangeRequest.prototype['id'] = undefined;

/**
 * @member {String} externalId
 */
ChangeRequest.prototype['externalId'] = undefined;

/**
 * @member {String} name
 */
ChangeRequest.prototype['name'] = undefined;

/**
 * @member {String} description
 */
ChangeRequest.prototype['description'] = undefined;

/**
 * @member {Object.<String, Object>} attributes
 */
ChangeRequest.prototype['attributes'] = undefined;

/**
 * @member {String} tenantId
 */
ChangeRequest.prototype['tenantId'] = undefined;


// Implement ChangeRequestAllOf interface:
/**
 * @member {String} id
 */
ChangeRequestAllOf.prototype['id'] = undefined;
/**
 * @member {String} externalId
 */
ChangeRequestAllOf.prototype['externalId'] = undefined;
// Implement ChangeRequestUpdate interface:
/**
 * @member {String} name
 */
ChangeRequestUpdate.prototype['name'] = undefined;
/**
 * @member {String} description
 */
ChangeRequestUpdate.prototype['description'] = undefined;
/**
 * @member {Object.<String, Object>} attributes
 */
ChangeRequestUpdate.prototype['attributes'] = undefined;
/**
 * @member {String} tenantId
 */
ChangeRequestUpdate.prototype['tenantId'] = undefined;




export default ChangeRequest;

