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
import DeviceAllOf from './DeviceAllOf';
import DeviceComplianceState from './DeviceComplianceState';
import DeviceCreate from './DeviceCreate';
import DeviceVulnerabilityState from './DeviceVulnerabilityState';

/**
 * The Device model module.
 * @module model/Device
 * @version 1.0.8
 */
class Device {
    /**
     * Constructs a new <code>Device</code>.
     * @alias module:model/Device
     * @implements module:model/DeviceAllOf
     * @implements module:model/DeviceCreate
     * @param tenantId {String} 
     * @param managed {Boolean} 
     * @param onboardType {String} 
     * @param name {String} 
     * @param model {String} 
     * @param type {String} 
     */
    constructor(tenantId, managed, onboardType, name, model, type) { 
        DeviceAllOf.initialize(this);DeviceCreate.initialize(this, tenantId, managed, onboardType, name, model, type);
        Device.initialize(this, tenantId, managed, onboardType, name, model, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tenantId, managed, onboardType, name, model, type) { 
        obj['tenantId'] = tenantId;
        obj['managed'] = managed || false;
        obj['onboardType'] = onboardType;
        obj['name'] = name;
        obj['model'] = model;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>Device</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Device} obj Optional instance to populate.
     * @return {module:model/Device} The populated <code>Device</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Device();
            DeviceAllOf.constructFromObject(data, obj);
            DeviceCreate.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('providerId')) {
                obj['providerId'] = ApiClient.convertToType(data['providerId'], 'String');
            }
            if (data.hasOwnProperty('vulnerabilityState')) {
                obj['vulnerabilityState'] = DeviceVulnerabilityState.constructFromObject(data['vulnerabilityState']);
            }
            if (data.hasOwnProperty('createdOn')) {
                obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Date');
            }
            if (data.hasOwnProperty('modifiedOn')) {
                obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'Date');
            }
            if (data.hasOwnProperty('serviceInstanceId')) {
                obj['serviceInstanceId'] = ApiClient.convertToType(data['serviceInstanceId'], 'String');
            }
            if (data.hasOwnProperty('subscriptionId')) {
                obj['subscriptionId'] = ApiClient.convertToType(data['subscriptionId'], 'String');
            }
            if (data.hasOwnProperty('tenantId')) {
                obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
            }
            if (data.hasOwnProperty('serviceType')) {
                obj['serviceType'] = ApiClient.convertToType(data['serviceType'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], {'String': 'String'});
            }
            if (data.hasOwnProperty('managed')) {
                obj['managed'] = ApiClient.convertToType(data['managed'], 'Boolean');
            }
            if (data.hasOwnProperty('onboardType')) {
                obj['onboardType'] = ApiClient.convertToType(data['onboardType'], 'String');
            }
            if (data.hasOwnProperty('onboardInformation')) {
                obj['onboardInformation'] = ApiClient.convertToType(data['onboardInformation'], {'String': Object});
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], {'String': Object});
            }
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
            if (data.hasOwnProperty('serialKey')) {
                obj['serialKey'] = ApiClient.convertToType(data['serialKey'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('complianceState')) {
                obj['complianceState'] = DeviceComplianceState.constructFromObject(data['complianceState']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Device.prototype['id'] = undefined;

/**
 * @member {String} userId
 */
Device.prototype['userId'] = undefined;

/**
 * @member {String} providerId
 */
Device.prototype['providerId'] = undefined;

/**
 * @member {module:model/DeviceVulnerabilityState} vulnerabilityState
 */
Device.prototype['vulnerabilityState'] = undefined;

/**
 * @member {Date} createdOn
 */
Device.prototype['createdOn'] = undefined;

/**
 * @member {Date} modifiedOn
 */
Device.prototype['modifiedOn'] = undefined;

/**
 * @member {String} serviceInstanceId
 */
Device.prototype['serviceInstanceId'] = undefined;

/**
 * @member {String} subscriptionId
 */
Device.prototype['subscriptionId'] = undefined;

/**
 * @member {String} tenantId
 */
Device.prototype['tenantId'] = undefined;

/**
 * @member {String} serviceType
 */
Device.prototype['serviceType'] = undefined;

/**
 * @member {Object.<String, String>} tags
 */
Device.prototype['tags'] = undefined;

/**
 * @member {Boolean} managed
 * @default false
 */
Device.prototype['managed'] = false;

/**
 * @member {String} onboardType
 */
Device.prototype['onboardType'] = undefined;

/**
 * @member {Object.<String, Object>} onboardInformation
 */
Device.prototype['onboardInformation'] = undefined;

/**
 * @member {Object.<String, Object>} attributes
 */
Device.prototype['attributes'] = undefined;

/**
 * @member {String} name
 */
Device.prototype['name'] = undefined;

/**
 * @member {String} model
 */
Device.prototype['model'] = undefined;

/**
 * @member {String} type
 */
Device.prototype['type'] = undefined;

/**
 * @member {String} subType
 */
Device.prototype['subType'] = undefined;

/**
 * @member {String} serialKey
 */
Device.prototype['serialKey'] = undefined;

/**
 * @member {String} version
 */
Device.prototype['version'] = undefined;

/**
 * @member {module:model/DeviceComplianceState} complianceState
 */
Device.prototype['complianceState'] = undefined;


// Implement DeviceAllOf interface:
/**
 * @member {String} id
 */
DeviceAllOf.prototype['id'] = undefined;
/**
 * @member {String} userId
 */
DeviceAllOf.prototype['userId'] = undefined;
/**
 * @member {String} providerId
 */
DeviceAllOf.prototype['providerId'] = undefined;
/**
 * @member {module:model/DeviceVulnerabilityState} vulnerabilityState
 */
DeviceAllOf.prototype['vulnerabilityState'] = undefined;
/**
 * @member {Date} createdOn
 */
DeviceAllOf.prototype['createdOn'] = undefined;
/**
 * @member {Date} modifiedOn
 */
DeviceAllOf.prototype['modifiedOn'] = undefined;
// Implement DeviceCreate interface:
/**
 * @member {String} serviceInstanceId
 */
DeviceCreate.prototype['serviceInstanceId'] = undefined;
/**
 * @member {String} subscriptionId
 */
DeviceCreate.prototype['subscriptionId'] = undefined;
/**
 * @member {String} tenantId
 */
DeviceCreate.prototype['tenantId'] = undefined;
/**
 * @member {String} serviceType
 */
DeviceCreate.prototype['serviceType'] = undefined;
/**
 * @member {Object.<String, String>} tags
 */
DeviceCreate.prototype['tags'] = undefined;
/**
 * @member {Boolean} managed
 * @default false
 */
DeviceCreate.prototype['managed'] = false;
/**
 * @member {String} onboardType
 */
DeviceCreate.prototype['onboardType'] = undefined;
/**
 * @member {Object.<String, Object>} onboardInformation
 */
DeviceCreate.prototype['onboardInformation'] = undefined;
/**
 * @member {Object.<String, Object>} attributes
 */
DeviceCreate.prototype['attributes'] = undefined;
/**
 * @member {String} name
 */
DeviceCreate.prototype['name'] = undefined;
/**
 * @member {String} model
 */
DeviceCreate.prototype['model'] = undefined;
/**
 * @member {String} type
 */
DeviceCreate.prototype['type'] = undefined;
/**
 * @member {String} subType
 */
DeviceCreate.prototype['subType'] = undefined;
/**
 * @member {String} serialKey
 */
DeviceCreate.prototype['serialKey'] = undefined;
/**
 * @member {String} version
 */
DeviceCreate.prototype['version'] = undefined;
/**
 * @member {module:model/DeviceComplianceState} complianceState
 */
DeviceCreate.prototype['complianceState'] = undefined;




export default Device;

