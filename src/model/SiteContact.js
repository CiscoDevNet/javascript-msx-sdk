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
 * The SiteContact model module.
 * @module model/SiteContact
 * @version 1.0.10
 */
class SiteContact {
    /**
     * Constructs a new <code>SiteContact</code>.
     * @alias module:model/SiteContact
     * @param name {String} 
     * @param phone {String} 
     */
    constructor(name, phone) { 
        
        SiteContact.initialize(this, name, phone);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, phone) { 
        obj['name'] = name;
        obj['phone'] = phone;
    }

    /**
     * Constructs a <code>SiteContact</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SiteContact} obj Optional instance to populate.
     * @return {module:model/SiteContact} The populated <code>SiteContact</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SiteContact();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
SiteContact.prototype['name'] = undefined;

/**
 * @member {String} phone
 */
SiteContact.prototype['phone'] = undefined;

/**
 * @member {String} email
 */
SiteContact.prototype['email'] = undefined;






export default SiteContact;

