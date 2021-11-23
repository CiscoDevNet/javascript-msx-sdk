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
import VulnerabilitiesRegistrationPageAllOf from './VulnerabilitiesRegistrationPageAllOf';
import VulnerabilityRegistration from './VulnerabilityRegistration';

/**
 * The VulnerabilitiesRegistrationPage model module.
 * @module model/VulnerabilitiesRegistrationPage
 * @version 1.0.8
 */
class VulnerabilitiesRegistrationPage {
    /**
     * Constructs a new <code>VulnerabilitiesRegistrationPage</code>.
     * @alias module:model/VulnerabilitiesRegistrationPage
     * @implements module:model/PageHeader
     * @implements module:model/VulnerabilitiesRegistrationPageAllOf
     */
    constructor() { 
        PageHeader.initialize(this);VulnerabilitiesRegistrationPageAllOf.initialize(this);
        VulnerabilitiesRegistrationPage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VulnerabilitiesRegistrationPage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VulnerabilitiesRegistrationPage} obj Optional instance to populate.
     * @return {module:model/VulnerabilitiesRegistrationPage} The populated <code>VulnerabilitiesRegistrationPage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VulnerabilitiesRegistrationPage();
            PageHeader.constructFromObject(data, obj);
            VulnerabilitiesRegistrationPageAllOf.constructFromObject(data, obj);

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
                obj['contents'] = ApiClient.convertToType(data['contents'], [VulnerabilityRegistration]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} page
 */
VulnerabilitiesRegistrationPage.prototype['page'] = undefined;

/**
 * @member {Number} pageSize
 */
VulnerabilitiesRegistrationPage.prototype['pageSize'] = undefined;

/**
 * @member {Number} totalItems
 */
VulnerabilitiesRegistrationPage.prototype['totalItems'] = undefined;

/**
 * @member {Boolean} hasNext
 */
VulnerabilitiesRegistrationPage.prototype['hasNext'] = undefined;

/**
 * @member {Boolean} hasPrevious
 */
VulnerabilitiesRegistrationPage.prototype['hasPrevious'] = undefined;

/**
 * @member {String} sortBy
 */
VulnerabilitiesRegistrationPage.prototype['sortBy'] = undefined;

/**
 * @member {module:model/VulnerabilitiesRegistrationPage.SortOrderEnum} sortOrder
 */
VulnerabilitiesRegistrationPage.prototype['sortOrder'] = undefined;

/**
 * @member {Array.<module:model/VulnerabilityRegistration>} contents
 */
VulnerabilitiesRegistrationPage.prototype['contents'] = undefined;


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
// Implement VulnerabilitiesRegistrationPageAllOf interface:
/**
 * @member {Array.<module:model/VulnerabilityRegistration>} contents
 */
VulnerabilitiesRegistrationPageAllOf.prototype['contents'] = undefined;



/**
 * Allowed values for the <code>sortOrder</code> property.
 * @enum {String}
 * @readonly
 */
VulnerabilitiesRegistrationPage['SortOrderEnum'] = {

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



export default VulnerabilitiesRegistrationPage;

