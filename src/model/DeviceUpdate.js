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
import DeviceBilling from './DeviceBilling';

/**
 * The DeviceUpdate model module.
 * @module model/DeviceUpdate
 * @version 3.10.0
 */
class DeviceUpdate {
    /**
     * Constructs a new <code>DeviceUpdate</code>.
     * @alias module:model/DeviceUpdate
     * @param name {String} 
     * @param model {String} 
     * @param type {String} 
     * @param serialKey {String} 
     * @param version {String} 
     * @param managed {Boolean} 
     */
    constructor(name, model, type, serialKey, version, managed) { 
        
        DeviceUpdate.initialize(this, name, model, type, serialKey, version, managed);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, model, type, serialKey, version, managed) { 
        obj['name'] = name;
        obj['model'] = model;
        obj['type'] = type;
        obj['serialKey'] = serialKey;
        obj['version'] = version;
        obj['managed'] = managed || false;
    }

    /**
     * Constructs a <code>DeviceUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceUpdate} obj Optional instance to populate.
     * @return {module:model/DeviceUpdate} The populated <code>DeviceUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceUpdate();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('model')) {
                obj['model'] = ApiClient.convertToType(data['model'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('subType')) {
                obj['subType'] = ApiClient.convertToType(data['subType'], 'String');
            }
            if (data.hasOwnProperty('serviceType')) {
                obj['serviceType'] = ApiClient.convertToType(data['serviceType'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], {'String': 'String'});
            }
            if (data.hasOwnProperty('serialKey')) {
                obj['serialKey'] = ApiClient.convertToType(data['serialKey'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('managed')) {
                obj['managed'] = ApiClient.convertToType(data['managed'], 'Boolean');
            }
            if (data.hasOwnProperty('onboardType')) {
                obj['onboardType'] = ApiClient.convertToType(data['onboardType'], 'String');
            }
            if (data.hasOwnProperty('onboardInformation')) {
                obj['onboardInformation'] = ApiClient.convertToType(data['onboardInformation'], {'String': 'String'});
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], {'String': 'String'});
            }
            if (data.hasOwnProperty('billing')) {
                obj['billing'] = DeviceBilling.constructFromObject(data['billing']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
DeviceUpdate.prototype['name'] = undefined;

/**
 * @member {String} model
 */
DeviceUpdate.prototype['model'] = undefined;

/**
 * @member {String} type
 */
DeviceUpdate.prototype['type'] = undefined;

/**
 * @member {String} subType
 */
DeviceUpdate.prototype['subType'] = undefined;

/**
 * @member {String} serviceType
 */
DeviceUpdate.prototype['serviceType'] = undefined;

/**
 * @member {Object.<String, String>} tags
 */
DeviceUpdate.prototype['tags'] = undefined;

/**
 * @member {String} serialKey
 */
DeviceUpdate.prototype['serialKey'] = undefined;

/**
 * @member {String} version
 */
DeviceUpdate.prototype['version'] = undefined;

/**
 * @member {Boolean} managed
 * @default false
 */
DeviceUpdate.prototype['managed'] = false;

/**
 * @member {String} onboardType
 */
DeviceUpdate.prototype['onboardType'] = undefined;

/**
 * @member {Object.<String, String>} onboardInformation
 */
DeviceUpdate.prototype['onboardInformation'] = undefined;

/**
 * @member {Object.<String, String>} attributes
 */
DeviceUpdate.prototype['attributes'] = undefined;

/**
 * @member {module:model/DeviceBilling} billing
 */
DeviceUpdate.prototype['billing'] = undefined;






export default DeviceUpdate;

