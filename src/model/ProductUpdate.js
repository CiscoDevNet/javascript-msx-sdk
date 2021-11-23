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
import NSOConfigDataXPath from './NSOConfigDataXPath';
import ServiceElement from './ServiceElement';
import ServiceSLMUIConfig from './ServiceSLMUIConfig';
import ServiceUIConfig from './ServiceUIConfig';

/**
 * The ProductUpdate model module.
 * @module model/ProductUpdate
 * @version 1.0.8
 */
class ProductUpdate {
    /**
     * Constructs a new <code>ProductUpdate</code>.
     * @alias module:model/ProductUpdate
     * @param name {String} 
     * @param label {String} 
     * @param version {Number} 
     * @param description {String} 
     * @param image {String} 
     * @param options {Array.<module:model/ServiceElement>} 
     * @param configuration {Object.<String, String>} 
     * @param isResource {Boolean} 
     * @param hasChildren {Boolean} 
     */
    constructor(name, label, version, description, image, options, configuration, isResource, hasChildren) { 
        
        ProductUpdate.initialize(this, name, label, version, description, image, options, configuration, isResource, hasChildren);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, label, version, description, image, options, configuration, isResource, hasChildren) { 
        obj['name'] = name;
        obj['label'] = label;
        obj['version'] = version;
        obj['description'] = description;
        obj['image'] = image;
        obj['options'] = options;
        obj['configuration'] = configuration;
        obj['isResource'] = isResource;
        obj['hasChildren'] = hasChildren;
    }

    /**
     * Constructs a <code>ProductUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductUpdate} obj Optional instance to populate.
     * @return {module:model/ProductUpdate} The populated <code>ProductUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductUpdate();

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
 * @member {String} name
 */
ProductUpdate.prototype['name'] = undefined;

/**
 * @member {String} label
 */
ProductUpdate.prototype['label'] = undefined;

/**
 * @member {Number} version
 */
ProductUpdate.prototype['version'] = undefined;

/**
 * @member {String} description
 */
ProductUpdate.prototype['description'] = undefined;

/**
 * @member {String} image
 */
ProductUpdate.prototype['image'] = undefined;

/**
 * @member {Boolean} multipleInstanceAllowed
 */
ProductUpdate.prototype['multipleInstanceAllowed'] = undefined;

/**
 * @member {String} price
 */
ProductUpdate.prototype['price'] = undefined;

/**
 * @member {Number} displayOrder
 */
ProductUpdate.prototype['displayOrder'] = undefined;

/**
 * @member {Boolean} active
 */
ProductUpdate.prototype['active'] = undefined;

/**
 * @member {Number} orderLimit
 */
ProductUpdate.prototype['orderLimit'] = undefined;

/**
 * @member {Array.<module:model/ServiceElement>} options
 */
ProductUpdate.prototype['options'] = undefined;

/**
 * @member {Array.<module:model/ServiceElement>} properties
 */
ProductUpdate.prototype['properties'] = undefined;

/**
 * @member {Object.<String, String>} configuration
 */
ProductUpdate.prototype['configuration'] = undefined;

/**
 * @member {Boolean} isResource
 */
ProductUpdate.prototype['isResource'] = undefined;

/**
 * @member {Boolean} hasChildren
 */
ProductUpdate.prototype['hasChildren'] = undefined;

/**
 * @member {String} parentId
 */
ProductUpdate.prototype['parentId'] = undefined;

/**
 * @member {Array.<module:model/NSOConfigDataXPath>} serviceExtensions
 */
ProductUpdate.prototype['serviceExtensions'] = undefined;

/**
 * @member {Array.<String>} serviceConfigQueryRootXPaths
 */
ProductUpdate.prototype['serviceConfigQueryRootXPaths'] = undefined;

/**
 * @member {module:model/ServiceUIConfig} uiConfig
 */
ProductUpdate.prototype['uiConfig'] = undefined;

/**
 * @member {module:model/ServiceSLMUIConfig} slmUiConfig
 */
ProductUpdate.prototype['slmUiConfig'] = undefined;

/**
 * @member {String} externalId
 */
ProductUpdate.prototype['externalId'] = undefined;

/**
 * @member {Array.<String>} tags
 */
ProductUpdate.prototype['tags'] = undefined;






export default ProductUpdate;

