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
import NSOConfigDataXPath from './NSOConfigDataXPath';
import ProductAllOf from './ProductAllOf';
import ProductCreate from './ProductCreate';
import ServiceElement from './ServiceElement';
import ServiceSLMUIConfig from './ServiceSLMUIConfig';
import ServiceUIConfig from './ServiceUIConfig';

/**
 * The Product model module.
 * @module model/Product
 * @version 1.0.10
 */
class Product {
    /**
     * Constructs a new <code>Product</code>.
     * @alias module:model/Product
     * @implements module:model/ProductAllOf
     * @implements module:model/ProductCreate
     * @param name {String} 
     * @param label {String} 
     * @param version {Number} 
     * @param description {String} 
     * @param image {String} 
     */
    constructor(name, label, version, description, image) { 
        ProductAllOf.initialize(this);ProductCreate.initialize(this, name, label, version, description, image);
        Product.initialize(this, name, label, version, description, image);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, label, version, description, image) { 
        obj['name'] = name;
        obj['label'] = label;
        obj['version'] = version;
        obj['description'] = description;
        obj['image'] = image;
    }

    /**
     * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Product} obj Optional instance to populate.
     * @return {module:model/Product} The populated <code>Product</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Product();
            ProductAllOf.constructFromObject(data, obj);
            ProductCreate.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('multipleInstanceAllowed')) {
                obj['multipleInstanceAllowed'] = ApiClient.convertToType(data['multipleInstanceAllowed'], 'Boolean');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'String');
            }
            if (data.hasOwnProperty('displayOrder')) {
                obj['displayOrder'] = ApiClient.convertToType(data['displayOrder'], 'Number');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('orderLimit')) {
                obj['orderLimit'] = ApiClient.convertToType(data['orderLimit'], 'Number');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], [ServiceElement]);
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [ServiceElement]);
            }
            if (data.hasOwnProperty('configuration')) {
                obj['configuration'] = ApiClient.convertToType(data['configuration'], {'String': 'String'});
            }
            if (data.hasOwnProperty('isResource')) {
                obj['isResource'] = ApiClient.convertToType(data['isResource'], 'Boolean');
            }
            if (data.hasOwnProperty('hasChildren')) {
                obj['hasChildren'] = ApiClient.convertToType(data['hasChildren'], 'Boolean');
            }
            if (data.hasOwnProperty('parentId')) {
                obj['parentId'] = ApiClient.convertToType(data['parentId'], 'String');
            }
            if (data.hasOwnProperty('serviceExtensions')) {
                obj['serviceExtensions'] = ApiClient.convertToType(data['serviceExtensions'], [NSOConfigDataXPath]);
            }
            if (data.hasOwnProperty('serviceConfigQueryRootXPaths')) {
                obj['serviceConfigQueryRootXPaths'] = ApiClient.convertToType(data['serviceConfigQueryRootXPaths'], ['String']);
            }
            if (data.hasOwnProperty('uiConfig')) {
                obj['uiConfig'] = ServiceUIConfig.constructFromObject(data['uiConfig']);
            }
            if (data.hasOwnProperty('slmUiConfig')) {
                obj['slmUiConfig'] = ServiceSLMUIConfig.constructFromObject(data['slmUiConfig']);
            }
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
Product.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Product.prototype['name'] = undefined;

/**
 * @member {String} label
 */
Product.prototype['label'] = undefined;

/**
 * @member {Number} version
 */
Product.prototype['version'] = undefined;

/**
 * @member {String} description
 */
Product.prototype['description'] = undefined;

/**
 * @member {String} image
 */
Product.prototype['image'] = undefined;

/**
 * @member {Boolean} multipleInstanceAllowed
 */
Product.prototype['multipleInstanceAllowed'] = undefined;

/**
 * @member {String} price
 */
Product.prototype['price'] = undefined;

/**
 * @member {Number} displayOrder
 */
Product.prototype['displayOrder'] = undefined;

/**
 * @member {Boolean} active
 */
Product.prototype['active'] = undefined;

/**
 * @member {Number} orderLimit
 */
Product.prototype['orderLimit'] = undefined;

/**
 * @member {Array.<module:model/ServiceElement>} options
 */
Product.prototype['options'] = undefined;

/**
 * @member {Array.<module:model/ServiceElement>} properties
 */
Product.prototype['properties'] = undefined;

/**
 * @member {Object.<String, String>} configuration
 */
Product.prototype['configuration'] = undefined;

/**
 * @member {Boolean} isResource
 */
Product.prototype['isResource'] = undefined;

/**
 * @member {Boolean} hasChildren
 */
Product.prototype['hasChildren'] = undefined;

/**
 * @member {String} parentId
 */
Product.prototype['parentId'] = undefined;

/**
 * @member {Array.<module:model/NSOConfigDataXPath>} serviceExtensions
 */
Product.prototype['serviceExtensions'] = undefined;

/**
 * @member {Array.<String>} serviceConfigQueryRootXPaths
 */
Product.prototype['serviceConfigQueryRootXPaths'] = undefined;

/**
 * @member {module:model/ServiceUIConfig} uiConfig
 */
Product.prototype['uiConfig'] = undefined;

/**
 * @member {module:model/ServiceSLMUIConfig} slmUiConfig
 */
Product.prototype['slmUiConfig'] = undefined;

/**
 * @member {String} externalId
 */
Product.prototype['externalId'] = undefined;

/**
 * @member {Array.<String>} tags
 */
Product.prototype['tags'] = undefined;


// Implement ProductAllOf interface:
/**
 * @member {String} id
 */
ProductAllOf.prototype['id'] = undefined;
// Implement ProductCreate interface:
/**
 * @member {String} name
 */
ProductCreate.prototype['name'] = undefined;
/**
 * @member {String} label
 */
ProductCreate.prototype['label'] = undefined;
/**
 * @member {Number} version
 */
ProductCreate.prototype['version'] = undefined;
/**
 * @member {String} description
 */
ProductCreate.prototype['description'] = undefined;
/**
 * @member {String} image
 */
ProductCreate.prototype['image'] = undefined;
/**
 * @member {Boolean} multipleInstanceAllowed
 */
ProductCreate.prototype['multipleInstanceAllowed'] = undefined;
/**
 * @member {String} price
 */
ProductCreate.prototype['price'] = undefined;
/**
 * @member {Number} displayOrder
 */
ProductCreate.prototype['displayOrder'] = undefined;
/**
 * @member {Boolean} active
 */
ProductCreate.prototype['active'] = undefined;
/**
 * @member {Number} orderLimit
 */
ProductCreate.prototype['orderLimit'] = undefined;
/**
 * @member {Array.<module:model/ServiceElement>} options
 */
ProductCreate.prototype['options'] = undefined;
/**
 * @member {Array.<module:model/ServiceElement>} properties
 */
ProductCreate.prototype['properties'] = undefined;
/**
 * @member {Object.<String, String>} configuration
 */
ProductCreate.prototype['configuration'] = undefined;
/**
 * @member {Boolean} isResource
 */
ProductCreate.prototype['isResource'] = undefined;
/**
 * @member {Boolean} hasChildren
 */
ProductCreate.prototype['hasChildren'] = undefined;
/**
 * @member {String} parentId
 */
ProductCreate.prototype['parentId'] = undefined;
/**
 * @member {Array.<module:model/NSOConfigDataXPath>} serviceExtensions
 */
ProductCreate.prototype['serviceExtensions'] = undefined;
/**
 * @member {Array.<String>} serviceConfigQueryRootXPaths
 */
ProductCreate.prototype['serviceConfigQueryRootXPaths'] = undefined;
/**
 * @member {module:model/ServiceUIConfig} uiConfig
 */
ProductCreate.prototype['uiConfig'] = undefined;
/**
 * @member {module:model/ServiceSLMUIConfig} slmUiConfig
 */
ProductCreate.prototype['slmUiConfig'] = undefined;
/**
 * @member {String} externalId
 */
ProductCreate.prototype['externalId'] = undefined;
/**
 * @member {Array.<String>} tags
 */
ProductCreate.prototype['tags'] = undefined;




export default Product;

