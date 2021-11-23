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
 * The ManageChangeRequestPending model module.
 * @module model/ManageChangeRequestPending
 * @version 1.0.8
 */
class ManageChangeRequestPending {
    /**
     * Constructs a new <code>ManageChangeRequestPending</code>.
     * @alias module:model/ManageChangeRequestPending
     */
    constructor() { 
        
        ManageChangeRequestPending.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ManageChangeRequestPending</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ManageChangeRequestPending} obj Optional instance to populate.
     * @return {module:model/ManageChangeRequestPending} The populated <code>ManageChangeRequestPending</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ManageChangeRequestPending();

            if (data.hasOwnProperty('changeRequestId')) {
                obj['changeRequestId'] = ApiClient.convertToType(data['changeRequestId'], 'String');
            }
            if (data.hasOwnProperty('changeRequestUrl')) {
                obj['changeRequestUrl'] = ApiClient.convertToType(data['changeRequestUrl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} changeRequestId
 */
ManageChangeRequestPending.prototype['changeRequestId'] = undefined;

/**
 * @member {String} changeRequestUrl
 */
ManageChangeRequestPending.prototype['changeRequestUrl'] = undefined;






export default ManageChangeRequestPending;
