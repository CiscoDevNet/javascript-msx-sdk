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
import TenantCreateAllOf from './TenantCreateAllOf';
import TenantUpdate from './TenantUpdate';

/**
 * The TenantCreate model module.
 * @module model/TenantCreate
 * @version 1.0.10
 */
class TenantCreate {
    /**
     * Constructs a new <code>TenantCreate</code>.
     * @alias module:model/TenantCreate
     * @implements module:model/TenantCreateAllOf
     * @implements module:model/TenantUpdate
     * @param name {String} 
     */
    constructor(name) { 
        TenantCreateAllOf.initialize(this);TenantUpdate.initialize(this, name);
        TenantCreate.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>TenantCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TenantCreate} obj Optional instance to populate.
     * @return {module:model/TenantCreate} The populated <code>TenantCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TenantCreate();
            TenantCreateAllOf.constructFromObject(data, obj);
            TenantUpdate.constructFromObject(data, obj);

            if (data.hasOwnProperty('parentId')) {
                obj['parentId'] = ApiClient.convertToType(data['parentId'], 'String');
            }
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} parentId
 */
TenantCreate.prototype['parentId'] = undefined;

/**
 * @member {String} externalId
 */
TenantCreate.prototype['externalId'] = undefined;

/**
 * @member {String} name
 */
TenantCreate.prototype['name'] = undefined;

/**
 * @member {String} description
 */
TenantCreate.prototype['description'] = undefined;

/**
 * @member {String} url
 */
TenantCreate.prototype['url'] = undefined;

/**
 * @member {String} image
 */
TenantCreate.prototype['image'] = undefined;

/**
 * @member {String} email
 */
TenantCreate.prototype['email'] = undefined;


// Implement TenantCreateAllOf interface:
/**
 * @member {String} parentId
 */
TenantCreateAllOf.prototype['parentId'] = undefined;
/**
 * @member {String} externalId
 */
TenantCreateAllOf.prototype['externalId'] = undefined;
// Implement TenantUpdate interface:
/**
 * @member {String} name
 */
TenantUpdate.prototype['name'] = undefined;
/**
 * @member {String} description
 */
TenantUpdate.prototype['description'] = undefined;
/**
 * @member {String} url
 */
TenantUpdate.prototype['url'] = undefined;
/**
 * @member {String} image
 */
TenantUpdate.prototype['image'] = undefined;
/**
 * @member {String} email
 */
TenantUpdate.prototype['email'] = undefined;




export default TenantCreate;

