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
import DeviceSummary from './DeviceSummary';
import SiteAddress from './SiteAddress';
import SiteContact from './SiteContact';
import SiteLocation from './SiteLocation';
import SiteStatus from './SiteStatus';

/**
 * The Site model module.
 * @module model/Site
 * @version 1.0.10
 */
class Site {
    /**
     * Constructs a new <code>Site</code>.
     * @alias module:model/Site
     */
    constructor() { 
        
        Site.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Site</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Site} obj Optional instance to populate.
     * @return {module:model/Site} The populated <code>Site</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Site();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
            if (data.hasOwnProperty('parentId')) {
                obj['parentId'] = ApiClient.convertToType(data['parentId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = SiteAddress.constructFromObject(data['address']);
            }
            if (data.hasOwnProperty('contact')) {
                obj['contact'] = SiteContact.constructFromObject(data['contact']);
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
            if (data.hasOwnProperty('devices')) {
                obj['devices'] = ApiClient.convertToType(data['devices'], [DeviceSummary]);
            }
            if (data.hasOwnProperty('serviceIds')) {
                obj['serviceIds'] = ApiClient.convertToType(data['serviceIds'], ['String']);
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = SiteLocation.constructFromObject(data['location']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = SiteStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Date');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
            }
            if (data.hasOwnProperty('modifiedOn')) {
                obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'Date');
            }
            if (data.hasOwnProperty('modifiedBy')) {
                obj['modifiedBy'] = ApiClient.convertToType(data['modifiedBy'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Site.prototype['id'] = undefined;

/**
 * @member {String} tenantId
 */
Site.prototype['tenantId'] = undefined;

/**
 * @member {String} parentId
 */
Site.prototype['parentId'] = undefined;

/**
 * @member {String} name
 */
Site.prototype['name'] = undefined;

/**
 * @member {String} type
 */
Site.prototype['type'] = undefined;

/**
 * @member {String} description
 */
Site.prototype['description'] = undefined;

/**
 * @member {module:model/SiteAddress} address
 */
Site.prototype['address'] = undefined;

/**
 * @member {module:model/SiteContact} contact
 */
Site.prototype['contact'] = undefined;

/**
 * @member {String} image
 */
Site.prototype['image'] = undefined;

/**
 * @member {String} managingControlPlaneId
 */
Site.prototype['managingControlPlaneId'] = undefined;

/**
 * @member {Object.<String, String>} attributes
 */
Site.prototype['attributes'] = undefined;

/**
 * @member {Array.<module:model/DeviceSummary>} devices
 */
Site.prototype['devices'] = undefined;

/**
 * @member {Array.<String>} serviceIds
 */
Site.prototype['serviceIds'] = undefined;

/**
 * @member {module:model/SiteLocation} location
 */
Site.prototype['location'] = undefined;

/**
 * @member {module:model/SiteStatus} status
 */
Site.prototype['status'] = undefined;

/**
 * @member {Date} createdOn
 */
Site.prototype['createdOn'] = undefined;

/**
 * @member {String} createdBy
 */
Site.prototype['createdBy'] = undefined;

/**
 * @member {Date} modifiedOn
 */
Site.prototype['modifiedOn'] = undefined;

/**
 * @member {String} modifiedBy
 */
Site.prototype['modifiedBy'] = undefined;






export default Site;

