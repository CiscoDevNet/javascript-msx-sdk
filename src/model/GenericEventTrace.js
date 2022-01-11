/**
 * MSX SDK
 * MSX SDK client.
 *
 * The version of the OpenAPI document: 1.0.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GenericEventTrace model module.
 * @module model/GenericEventTrace
 * @version 1.0.9
 */
class GenericEventTrace {
    /**
     * Constructs a new <code>GenericEventTrace</code>.
     * @alias module:model/GenericEventTrace
     */
    constructor() { 
        
        GenericEventTrace.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GenericEventTrace</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenericEventTrace} obj Optional instance to populate.
     * @return {module:model/GenericEventTrace} The populated <code>GenericEventTrace</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GenericEventTrace();

            if (data.hasOwnProperty('traceId')) {
                obj['traceId'] = ApiClient.convertToType(data['traceId'], 'String');
            }
            if (data.hasOwnProperty('spanId')) {
                obj['spanId'] = ApiClient.convertToType(data['spanId'], 'String');
            }
            if (data.hasOwnProperty('parentId')) {
                obj['parentId'] = ApiClient.convertToType(data['parentId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} traceId
 */
GenericEventTrace.prototype['traceId'] = undefined;

/**
 * @member {String} spanId
 */
GenericEventTrace.prototype['spanId'] = undefined;

/**
 * @member {String} parentId
 */
GenericEventTrace.prototype['parentId'] = undefined;






export default GenericEventTrace;

