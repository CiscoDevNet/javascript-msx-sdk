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
import SiteAddress from './SiteAddress';
import SiteContact from './SiteContact';
import SiteLocation from './SiteLocation';

/**
 * The SiteUpdate model module.
 * @module model/SiteUpdate
 * @version 1.0.10
 */
class SiteUpdate {
    /**
     * Constructs a new <code>SiteUpdate</code>.
     * @alias module:model/SiteUpdate
     * @param name {String} 
     */
    constructor(name) { 
        
        SiteUpdate.initialize(this, name);
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
     * Constructs a <code>SiteUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SiteUpdate} obj Optional instance to populate.
     * @return {module:model/SiteUpdate} The populated <code>SiteUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SiteUpdate();

            if (data.hasOwnProperty('parentId')) {
                obj['parentId'] = ApiClient.convertToType(data['parentId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = SiteAddress.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('contact')) {
                obj['contact'] = SiteContact.constructFromObject(data['contact']);
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = SiteLocation.constructFromObject(data['location']);
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('managingControlPlaneId')) {
                obj['managingControlPlaneId'] = ApiClient.convertToType(data['managingControlPlaneId'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * @member {String} parentId
 */
SiteUpdate.prototype['parentId'] = undefined;

/**
 * @member {String} name
 */
SiteUpdate.prototype['name'] = undefined;

/**
 * @member {String} description
 */
SiteUpdate.prototype['description'] = undefined;

/**
 * @member {String} type
 */
SiteUpdate.prototype['type'] = undefined;

/**
 * @member {module:model/SiteAddress} address
 */
SiteUpdate.prototype['address'] = undefined;

/**
 * @member {module:model/SiteContact} contact
 */
SiteUpdate.prototype['contact'] = undefined;

/**
 * @member {module:model/SiteLocation} location
 */
SiteUpdate.prototype['location'] = undefined;

/**
 * @member {String} image
 */
SiteUpdate.prototype['image'] = undefined;

/**
 * @member {String} managingControlPlaneId
 */
SiteUpdate.prototype['managingControlPlaneId'] = undefined;

/**
 * @member {Object.<String, String>} attributes
 */
SiteUpdate.prototype['attributes'] = undefined;






export default SiteUpdate;

