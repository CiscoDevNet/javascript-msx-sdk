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
 * The LegacyNsoResponseTypes model module.
 * @module model/LegacyNsoResponseTypes
 * @version 1.0.8
 */
class LegacyNsoResponseTypes {
    /**
     * Constructs a new <code>LegacyNsoResponseTypes</code>.
     * @alias module:model/LegacyNsoResponseTypes
     */
    constructor() { 
        
        LegacyNsoResponseTypes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LegacyNsoResponseTypes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LegacyNsoResponseTypes} obj Optional instance to populate.
     * @return {module:model/LegacyNsoResponseTypes} The populated <code>LegacyNsoResponseTypes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LegacyNsoResponseTypes();

            if (data.hasOwnProperty('createOperation')) {
                obj['createOperation'] = ApiClient.convertToType(data['createOperation'], 'String');
            }
            if (data.hasOwnProperty('updateOperation')) {
                obj['updateOperation'] = ApiClient.convertToType(data['updateOperation'], 'String');
            }
            if (data.hasOwnProperty('deleteOperation')) {
                obj['deleteOperation'] = ApiClient.convertToType(data['deleteOperation'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} createOperation
 */
LegacyNsoResponseTypes.prototype['createOperation'] = undefined;

/**
 * @member {String} updateOperation
 */
LegacyNsoResponseTypes.prototype['updateOperation'] = undefined;

/**
 * @member {String} deleteOperation
 */
LegacyNsoResponseTypes.prototype['deleteOperation'] = undefined;






export default LegacyNsoResponseTypes;

