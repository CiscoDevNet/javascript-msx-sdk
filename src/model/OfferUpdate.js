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
import NameValue from './NameValue';

/**
 * The OfferUpdate model module.
 * @module model/OfferUpdate
 * @version 1.0.10
 */
class OfferUpdate {
    /**
     * Constructs a new <code>OfferUpdate</code>.
     * @alias module:model/OfferUpdate
     * @param name {String} 
     * @param label {String} 
     * @param description {String} 
     * @param productId {String} 
     * @param version {Number} 
     */
    constructor(name, label, description, productId, version) { 
        
        OfferUpdate.initialize(this, name, label, description, productId, version);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, label, description, productId, version) { 
        obj['name'] = name;
        obj['label'] = label;
        obj['description'] = description;
        obj['productId'] = productId;
        obj['version'] = version;
    }

    /**
     * Constructs a <code>OfferUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OfferUpdate} obj Optional instance to populate.
     * @return {module:model/OfferUpdate} The populated <code>OfferUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OfferUpdate();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('displayOrder')) {
                obj['displayOrder'] = ApiClient.convertToType(data['displayOrder'], 'Number');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('supportedProperties')) {
                obj['supportedProperties'] = ApiClient.convertToType(data['supportedProperties'], ['String']);
            }
            if (data.hasOwnProperty('supportedOptions')) {
                obj['supportedOptions'] = ApiClient.convertToType(data['supportedOptions'], [NameValue]);
            }
            if (data.hasOwnProperty('approvals')) {
                obj['approvals'] = ApiClient.convertToType(data['approvals'], {'String': Object});
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
OfferUpdate.prototype['name'] = undefined;

/**
 * @member {String} label
 */
OfferUpdate.prototype['label'] = undefined;

/**
 * @member {String} description
 */
OfferUpdate.prototype['description'] = undefined;

/**
 * @member {String} productId
 */
OfferUpdate.prototype['productId'] = undefined;

/**
 * @member {Number} version
 */
OfferUpdate.prototype['version'] = undefined;

/**
 * @member {Number} displayOrder
 */
OfferUpdate.prototype['displayOrder'] = undefined;

/**
 * @member {String} image
 */
OfferUpdate.prototype['image'] = undefined;

/**
 * @member {String} price
 */
OfferUpdate.prototype['price'] = undefined;

/**
 * @member {String} type
 */
OfferUpdate.prototype['type'] = undefined;

/**
 * @member {Array.<String>} supportedProperties
 */
OfferUpdate.prototype['supportedProperties'] = undefined;

/**
 * @member {Array.<module:model/NameValue>} supportedOptions
 */
OfferUpdate.prototype['supportedOptions'] = undefined;

/**
 * @member {Object.<String, Object>} approvals
 */
OfferUpdate.prototype['approvals'] = undefined;






export default OfferUpdate;

