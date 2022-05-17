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
import PageHeader from './PageHeader';
import User from './User';
import UsersPageAllOf from './UsersPageAllOf';

/**
 * The UsersPage model module.
 * @module model/UsersPage
 * @version 1.0.10
 */
class UsersPage {
    /**
     * Constructs a new <code>UsersPage</code>.
     * @alias module:model/UsersPage
     * @implements module:model/PageHeader
     * @implements module:model/UsersPageAllOf
     */
    constructor() { 
        PageHeader.initialize(this);UsersPageAllOf.initialize(this);
        UsersPage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UsersPage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UsersPage} obj Optional instance to populate.
     * @return {module:model/UsersPage} The populated <code>UsersPage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsersPage();
            PageHeader.constructFromObject(data, obj);
            UsersPageAllOf.constructFromObject(data, obj);

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
                obj['contents'] = ApiClient.convertToType(data['contents'], [User]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} page
 */
UsersPage.prototype['page'] = undefined;

/**
 * @member {Number} pageSize
 */
UsersPage.prototype['pageSize'] = undefined;

/**
 * @member {Number} totalItems
 */
UsersPage.prototype['totalItems'] = undefined;

/**
 * @member {Boolean} hasNext
 */
UsersPage.prototype['hasNext'] = undefined;

/**
 * @member {Boolean} hasPrevious
 */
UsersPage.prototype['hasPrevious'] = undefined;

/**
 * @member {String} sortBy
 */
UsersPage.prototype['sortBy'] = undefined;

/**
 * @member {module:model/UsersPage.SortOrderEnum} sortOrder
 */
UsersPage.prototype['sortOrder'] = undefined;

/**
 * @member {Array.<module:model/User>} contents
 */
UsersPage.prototype['contents'] = undefined;


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
// Implement UsersPageAllOf interface:
/**
 * @member {Array.<module:model/User>} contents
 */
UsersPageAllOf.prototype['contents'] = undefined;



/**
 * Allowed values for the <code>sortOrder</code> property.
 * @enum {String}
 * @readonly
 */
UsersPage['SortOrderEnum'] = {

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



export default UsersPage;

