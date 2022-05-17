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
 * The IncidentCancel model module.
 * @module model/IncidentCancel
 * @version 1.0.10
 */
class IncidentCancel {
    /**
     * Constructs a new <code>IncidentCancel</code>.
     * @alias module:model/IncidentCancel
     * @param tenant {String} 
     */
    constructor(tenant) { 
        
        IncidentCancel.initialize(this, tenant);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tenant) { 
        obj['tenant'] = tenant;
    }

    /**
     * Constructs a <code>IncidentCancel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IncidentCancel} obj Optional instance to populate.
     * @return {module:model/IncidentCancel} The populated <code>IncidentCancel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IncidentCancel();

            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('tenant')) {
                obj['tenant'] = ApiClient.convertToType(data['tenant'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} notes
 */
IncidentCancel.prototype['notes'] = undefined;

/**
 * @member {String} tenant
 */
IncidentCancel.prototype['tenant'] = undefined;






export default IncidentCancel;

