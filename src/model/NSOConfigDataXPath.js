/**
 * KAKAPO - MSX SDK
 * MSX Platform SDK
 *
 * The version of the OpenAPI document: 1.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The NSOConfigDataXPath model module.
 * @module model/NSOConfigDataXPath
 * @version 1.0.2
 */
class NSOConfigDataXPath {
    /**
     * Constructs a new <code>NSOConfigDataXPath</code>.
     * @alias module:model/NSOConfigDataXPath
     * @param serviceInstanceXPath {String} 
     */
    constructor(serviceInstanceXPath) { 
        
        NSOConfigDataXPath.initialize(this, serviceInstanceXPath);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, serviceInstanceXPath) { 
        obj['serviceInstanceXPath'] = serviceInstanceXPath;
    }

    /**
     * Constructs a <code>NSOConfigDataXPath</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NSOConfigDataXPath} obj Optional instance to populate.
     * @return {module:model/NSOConfigDataXPath} The populated <code>NSOConfigDataXPath</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NSOConfigDataXPath();

            if (data.hasOwnProperty('serviceInstanceXPath')) {
                obj['serviceInstanceXPath'] = ApiClient.convertToType(data['serviceInstanceXPath'], 'String');
            }
            if (data.hasOwnProperty('serviceType')) {
                obj['serviceType'] = ApiClient.convertToType(data['serviceType'], 'String');
            }
            if (data.hasOwnProperty('possibleXPathLocations')) {
                obj['possibleXPathLocations'] = ApiClient.convertToType(data['possibleXPathLocations'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} serviceInstanceXPath
 */
NSOConfigDataXPath.prototype['serviceInstanceXPath'] = undefined;

/**
 * @member {String} serviceType
 */
NSOConfigDataXPath.prototype['serviceType'] = undefined;

/**
 * @member {Array.<String>} possibleXPathLocations
 */
NSOConfigDataXPath.prototype['possibleXPathLocations'] = undefined;






export default NSOConfigDataXPath;

