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
* Enum class SmartAccountType.
* @enum {}
* @readonly
*/
export default class SmartAccountType {
    
        /**
         * value: "CUSTOMER"
         * @const
         */
        "CUSTOMER" = "CUSTOMER";

    
        /**
         * value: "HOLDING"
         * @const
         */
        "HOLDING" = "HOLDING";

    

    /**
    * Returns a <code>SmartAccountType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/SmartAccountType} The enum <code>SmartAccountType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

