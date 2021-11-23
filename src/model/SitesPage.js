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
import PageHeader from './PageHeader';
import Site from './Site';
import SitesPageAllOf from './SitesPageAllOf';

/**
 * The SitesPage model module.
 * @module model/SitesPage
 * @version 1.0.8
 */
class SitesPage {
    /**
     * Constructs a new <code>SitesPage</code>.
     * @alias module:model/SitesPage
     * @implements module:model/PageHeader
     * @implements module:model/SitesPageAllOf
     */
    constructor() { 
        PageHeader.initialize(this);SitesPageAllOf.initialize(this);
        SitesPage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SitesPage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SitesPage} obj Optional instance to populate.
     * @return {module:model/SitesPage} The populated <code>SitesPage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SitesPage();
            PageHeader.constructFromObject(data, obj);
            SitesPageAllOf.constructFromObject(data, obj);

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
                obj['contents'] = ApiClient.convertToType(data['contents'], [Site]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} page
 */
SitesPage.prototype['page'] = undefined;

/**
 * @member {Number} pageSize
 */
SitesPage.prototype['pageSize'] = undefined;

/**
 * @member {Number} totalItems
 */
SitesPage.prototype['totalItems'] = undefined;

/**
 * @member {Boolean} hasNext
 */
SitesPage.prototype['hasNext'] = undefined;

/**
 * @member {Boolean} hasPrevious
 */
SitesPage.prototype['hasPrevious'] = undefined;

/**
 * @member {String} sortBy
 */
SitesPage.prototype['sortBy'] = undefined;

/**
 * @member {module:model/SitesPage.SortOrderEnum} sortOrder
 */
SitesPage.prototype['sortOrder'] = undefined;

/**
 * @member {Array.<module:model/Site>} contents
 */
SitesPage.prototype['contents'] = undefined;


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
// Implement SitesPageAllOf interface:
/**
 * @member {Array.<module:model/Site>} contents
 */
SitesPageAllOf.prototype['contents'] = undefined;



/**
 * Allowed values for the <code>sortOrder</code> property.
 * @enum {String}
 * @readonly
 */
SitesPage['SortOrderEnum'] = {

    /**
     * value: "asc"
     * @const
     */
    "asc": "asc",

    /**
     * value: "desc"
     * @const
     */
    "desc": "desc",

    /**
     * value: "null"
     * @const
     */
    "null": "null"
};



export default SitesPage;

