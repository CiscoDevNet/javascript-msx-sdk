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
import Incident from './Incident';

/**
 * The IncidentsPageAllOf model module.
 * @module model/IncidentsPageAllOf
 * @version 1.0.8
 */
class IncidentsPageAllOf {
    /**
     * Constructs a new <code>IncidentsPageAllOf</code>.
     * @alias module:model/IncidentsPageAllOf
     */
    constructor() { 
        
        IncidentsPageAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IncidentsPageAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IncidentsPageAllOf} obj Optional instance to populate.
     * @return {module:model/IncidentsPageAllOf} The populated <code>IncidentsPageAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IncidentsPageAllOf();

            if (data.hasOwnProperty('contents')) {
                obj['contents'] = ApiClient.convertToType(data['contents'], [Incident]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Incident>} contents
 */
IncidentsPageAllOf.prototype['contents'] = undefined;






export default IncidentsPageAllOf;

