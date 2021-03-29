/**
 * KAKAPO - MSX SDK
 * MSX Platform SDK
 *
 * The version of the OpenAPI document: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ServiceUILink model module.
 * @module model/ServiceUILink
 * @version 1.0.1
 */
class ServiceUILink {
    /**
     * Constructs a new <code>ServiceUILink</code>.
     * @alias module:model/ServiceUILink
     */
    constructor() { 
        
        ServiceUILink.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceUILink</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceUILink} obj Optional instance to populate.
     * @return {module:model/ServiceUILink} The populated <code>ServiceUILink</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceUILink();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 */
ServiceUILink.prototype['type'] = undefined;

/**
 * @member {String} label
 */
ServiceUILink.prototype['label'] = undefined;

/**
 * @member {String} address
 */
ServiceUILink.prototype['address'] = undefined;

/**
 * @member {String} target
 */
ServiceUILink.prototype['target'] = undefined;






export default ServiceUILink;

