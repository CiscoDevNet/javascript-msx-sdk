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
import ServiceUILink from './ServiceUILink';

/**
 * The ServiceUIConfig model module.
 * @module model/ServiceUIConfig
 * @version 1.0.10
 */
class ServiceUIConfig {
    /**
     * Constructs a new <code>ServiceUIConfig</code>.
     * @alias module:model/ServiceUIConfig
     */
    constructor() { 
        
        ServiceUIConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceUIConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceUIConfig} obj Optional instance to populate.
     * @return {module:model/ServiceUIConfig} The populated <code>ServiceUIConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceUIConfig();

            if (data.hasOwnProperty('bannerImage')) {
                obj['bannerImage'] = ApiClient.convertToType(data['bannerImage'], 'String');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], [ServiceUILink]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} bannerImage
 */
ServiceUIConfig.prototype['bannerImage'] = undefined;

/**
 * @member {Array.<module:model/ServiceUILink>} links
 */
ServiceUIConfig.prototype['links'] = undefined;






export default ServiceUIConfig;

