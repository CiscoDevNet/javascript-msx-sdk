/**
 * MSX SDK
 * MSX SDK client.
 *
 * The version of the OpenAPI document: 1.0.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import NameValue from './NameValue';
import OfferAllOf from './OfferAllOf';
import OfferCreate from './OfferCreate';

/**
 * The Offer model module.
 * @module model/Offer
 * @version 1.0.9
 */
class Offer {
    /**
     * Constructs a new <code>Offer</code>.
     * @alias module:model/Offer
     * @implements module:model/OfferAllOf
     * @implements module:model/OfferCreate
     * @param name {String} 
     * @param label {String} 
     * @param description {String} 
     * @param productId {String} 
     * @param version {Number} 
     * @param displayOrder {Number} 
     */
    constructor(name, label, description, productId, version, displayOrder) { 
        OfferAllOf.initialize(this);OfferCreate.initialize(this, name, label, description, productId, version, displayOrder);
        Offer.initialize(this, name, label, description, productId, version, displayOrder);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, label, description, productId, version, displayOrder) { 
        obj['name'] = name;
        obj['label'] = label;
        obj['description'] = description;
        obj['productId'] = productId;
        obj['version'] = version;
        obj['displayOrder'] = displayOrder;
    }

    /**
     * Constructs a <code>Offer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Offer} obj Optional instance to populate.
     * @return {module:model/Offer} The populated <code>Offer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Offer();
            OfferAllOf.constructFromObject(data, obj);
            OfferCreate.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
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
 * @member {String} id
 */
Offer.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Offer.prototype['name'] = undefined;

/**
 * @member {String} label
 */
Offer.prototype['label'] = undefined;

/**
 * @member {String} description
 */
Offer.prototype['description'] = undefined;

/**
 * @member {String} productId
 */
Offer.prototype['productId'] = undefined;

/**
 * @member {Number} version
 */
Offer.prototype['version'] = undefined;

/**
 * @member {Number} displayOrder
 */
Offer.prototype['displayOrder'] = undefined;

/**
 * @member {String} image
 */
Offer.prototype['image'] = undefined;

/**
 * @member {String} price
 */
Offer.prototype['price'] = undefined;

/**
 * @member {String} type
 */
Offer.prototype['type'] = undefined;

/**
 * @member {Array.<String>} supportedProperties
 */
Offer.prototype['supportedProperties'] = undefined;

/**
 * @member {Array.<module:model/NameValue>} supportedOptions
 */
Offer.prototype['supportedOptions'] = undefined;

/**
 * @member {Object.<String, Object>} approvals
 */
Offer.prototype['approvals'] = undefined;


// Implement OfferAllOf interface:
/**
 * @member {String} id
 */
OfferAllOf.prototype['id'] = undefined;
// Implement OfferCreate interface:
/**
 * @member {String} name
 */
OfferCreate.prototype['name'] = undefined;
/**
 * @member {String} label
 */
OfferCreate.prototype['label'] = undefined;
/**
 * @member {String} description
 */
OfferCreate.prototype['description'] = undefined;
/**
 * @member {String} productId
 */
OfferCreate.prototype['productId'] = undefined;
/**
 * @member {Number} version
 */
OfferCreate.prototype['version'] = undefined;
/**
 * @member {Number} displayOrder
 */
OfferCreate.prototype['displayOrder'] = undefined;
/**
 * @member {String} image
 */
OfferCreate.prototype['image'] = undefined;
/**
 * @member {String} price
 */
OfferCreate.prototype['price'] = undefined;
/**
 * @member {String} type
 */
OfferCreate.prototype['type'] = undefined;
/**
 * @member {Array.<String>} supportedProperties
 */
OfferCreate.prototype['supportedProperties'] = undefined;
/**
 * @member {Array.<module:model/NameValue>} supportedOptions
 */
OfferCreate.prototype['supportedOptions'] = undefined;
/**
 * @member {Object.<String, Object>} approvals
 */
OfferCreate.prototype['approvals'] = undefined;




export default Offer;

