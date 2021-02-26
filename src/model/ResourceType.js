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
* Enum class ResourceType.
* @enum {}
* @readonly
*/
export default class ResourceType {
    
        /**
         * value: "service"
         * @const
         */
        "service" = "service";

    
        /**
         * value: "device"
         * @const
         */
        "device" = "device";

    

    /**
    * Returns a <code>ResourceType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ResourceType} The enum <code>ResourceType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
