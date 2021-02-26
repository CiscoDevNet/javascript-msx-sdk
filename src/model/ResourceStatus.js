/**
 * KAKAPO - MSX SDK
 * MSX Platform SDK
 *
 * The version of the OpenAPI document: 3.10.0
 * Contact: somecontact@cisco.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class ResourceStatus.
* @enum {}
* @readonly
*/
export default class ResourceStatus {
    
        /**
         * value: "up"
         * @const
         */
        "up" = "up";

    
        /**
         * value: "down"
         * @const
         */
        "down" = "down";

    
        /**
         * value: "unknown"
         * @const
         */
        "unknown" = "unknown";

    

    /**
    * Returns a <code>ResourceStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ResourceStatus} The enum <code>ResourceStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
