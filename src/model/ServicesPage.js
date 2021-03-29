/**
 * KAKAPO - MSX SDK
 * MSX Platform SDK
 *
 * The version of the OpenAPI document: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import PageHeader from './PageHeader';
import Service from './Service';
import ServicesPageAllOf from './ServicesPageAllOf';

/**
 * The ServicesPage model module.
 * @module model/ServicesPage
 * @version 1.0.1
 */
class ServicesPage {
    /**
     * Constructs a new <code>ServicesPage</code>.
     * @alias module:model/ServicesPage
     * @implements module:model/PageHeader
     * @implements module:model/ServicesPageAllOf
     */
    constructor() { 
        PageHeader.initialize(this);ServicesPageAllOf.initialize(this);
        ServicesPage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServicesPage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServicesPage} obj Optional instance to populate.
     * @return {module:model/ServicesPage} The populated <code>ServicesPage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServicesPage();
            PageHeader.constructFromObject(data, obj);
            ServicesPageAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'Number');
            }
            if (data.hasOwnProperty('pageSize')) {
                obj['pageSize'] = ApiClient.convertToType(data['pageSize'], 'Number');
            }
            if (data.hasOwnProperty('totalItems')) {
                obj['totalItems'] = ApiClient.convertToType(data['totalItems'], 'Number');
            }
            if (data.hasOwnProperty('hasNext')) {
                obj['hasNext'] = ApiClient.convertToType(data['hasNext'], 'Boolean');
            }
            if (data.hasOwnProperty('hasPrevious')) {
                obj['hasPrevious'] = ApiClient.convertToType(data['hasPrevious'], 'Boolean');
            }
            if (data.hasOwnProperty('sortBy')) {
                obj['sortBy'] = ApiClient.convertToType(data['sortBy'], 'String');
            }
            if (data.hasOwnProperty('sortOrder')) {
                obj['sortOrder'] = ApiClient.convertToType(data['sortOrder'], 'String');
            }
            if (data.hasOwnProperty('contents')) {
                obj['contents'] = ApiClient.convertToType(data['contents'], [Service]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} page
 */
ServicesPage.prototype['page'] = undefined;

/**
 * @member {Number} pageSize
 */
ServicesPage.prototype['pageSize'] = undefined;

/**
 * @member {Number} totalItems
 */
ServicesPage.prototype['totalItems'] = undefined;

/**
 * @member {Boolean} hasNext
 */
ServicesPage.prototype['hasNext'] = undefined;

/**
 * @member {Boolean} hasPrevious
 */
ServicesPage.prototype['hasPrevious'] = undefined;

/**
 * @member {String} sortBy
 */
ServicesPage.prototype['sortBy'] = undefined;

/**
 * @member {module:model/ServicesPage.SortOrderEnum} sortOrder
 */
ServicesPage.prototype['sortOrder'] = undefined;

/**
 * @member {Array.<module:model/Service>} contents
 */
ServicesPage.prototype['contents'] = undefined;


// Implement PageHeader interface:
/**
 * @member {Number} page
 */
PageHeader.prototype['page'] = undefined;
/**
 * @member {Number} pageSize
 */
PageHeader.prototype['pageSize'] = undefined;
/**
 * @member {Number} totalItems
 */
PageHeader.prototype['totalItems'] = undefined;
/**
 * @member {Boolean} hasNext
 */
PageHeader.prototype['hasNext'] = undefined;
/**
 * @member {Boolean} hasPrevious
 */
PageHeader.prototype['hasPrevious'] = undefined;
/**
 * @member {String} sortBy
 */
PageHeader.prototype['sortBy'] = undefined;
/**
 * @member {module:model/PageHeader.SortOrderEnum} sortOrder
 */
PageHeader.prototype['sortOrder'] = undefined;
// Implement ServicesPageAllOf interface:
/**
 * @member {Array.<module:model/Service>} contents
 */
ServicesPageAllOf.prototype['contents'] = undefined;



/**
 * Allowed values for the <code>sortOrder</code> property.
 * @enum {String}
 * @readonly
 */
ServicesPage['SortOrderEnum'] = {

    /**
     * value: "asc"
     * @const
     */
    "asc": "asc",

    /**
     * value: "desc"
     * @const
     */
    "desc": "desc"
};



export default ServicesPage;

