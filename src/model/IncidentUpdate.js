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

/**
 * The IncidentUpdate model module.
 * @module model/IncidentUpdate
 * @version 1.0.10
 */
class IncidentUpdate {
    /**
     * Constructs a new <code>IncidentUpdate</code>.
     * @alias module:model/IncidentUpdate
     * @param description {String} 
     */
    constructor(description) { 
        
        IncidentUpdate.initialize(this, description);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description) { 
        obj['description'] = description;
    }

    /**
     * Constructs a <code>IncidentUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IncidentUpdate} obj Optional instance to populate.
     * @return {module:model/IncidentUpdate} The populated <code>IncidentUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IncidentUpdate();

            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], {'String': Object});
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('impact')) {
                obj['impact'] = ApiClient.convertToType(data['impact'], 'String');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'String');
            }
            if (data.hasOwnProperty('severity')) {
                obj['severity'] = ApiClient.convertToType(data['severity'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('subcategory')) {
                obj['subcategory'] = ApiClient.convertToType(data['subcategory'], 'String');
            }
            if (data.hasOwnProperty('tenant')) {
                obj['tenant'] = ApiClient.convertToType(data['tenant'], 'String');
            }
            if (data.hasOwnProperty('urgency')) {
                obj['urgency'] = ApiClient.convertToType(data['urgency'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, Object>} attributes
 */
IncidentUpdate.prototype['attributes'] = undefined;

/**
 * inquiry|software|hardware|network|database
 * @member {String} category
 * @default 'inquiry'
 */
IncidentUpdate.prototype['category'] = 'inquiry';

/**
 * @member {String} description
 */
IncidentUpdate.prototype['description'] = undefined;

/**
 * @member {module:model/IncidentUpdate.ImpactEnum} impact
 * @default 'Low'
 */
IncidentUpdate.prototype['impact'] = 'Low';

/**
 * @member {module:model/IncidentUpdate.PriorityEnum} priority
 * @default 'Planning'
 */
IncidentUpdate.prototype['priority'] = 'Planning';

/**
 * @member {module:model/IncidentUpdate.SeverityEnum} severity
 * @default 'Low'
 */
IncidentUpdate.prototype['severity'] = 'Low';

/**
 * @member {module:model/IncidentUpdate.StateEnum} state
 * @default 'New'
 */
IncidentUpdate.prototype['state'] = 'New';

/**
 * @member {String} subcategory
 */
IncidentUpdate.prototype['subcategory'] = undefined;

/**
 * @member {String} tenant
 */
IncidentUpdate.prototype['tenant'] = undefined;

/**
 * @member {module:model/IncidentUpdate.UrgencyEnum} urgency
 * @default 'Low'
 */
IncidentUpdate.prototype['urgency'] = 'Low';





/**
 * Allowed values for the <code>impact</code> property.
 * @enum {String}
 * @readonly
 */
IncidentUpdate['ImpactEnum'] = {

    /**
     * value: "High"
     * @const
     */
    "High": "High",

    /**
     * value: "Medium"
     * @const
     */
    "Medium": "Medium",

    /**
     * value: "Low"
     * @const
     */
    "Low": "Low"
};


/**
 * Allowed values for the <code>priority</code> property.
 * @enum {String}
 * @readonly
 */
IncidentUpdate['PriorityEnum'] = {

    /**
     * value: "Critical"
     * @const
     */
    "Critical": "Critical",

    /**
     * value: "Low"
     * @const
     */
    "Low": "Low",

    /**
     * value: "High"
     * @const
     */
    "High": "High",

    /**
     * value: "Moderate"
     * @const
     */
    "Moderate": "Moderate",

    /**
     * value: "Planning"
     * @const
     */
    "Planning": "Planning"
};


/**
 * Allowed values for the <code>severity</code> property.
 * @enum {String}
 * @readonly
 */
IncidentUpdate['SeverityEnum'] = {

    /**
     * value: "High"
     * @const
     */
    "High": "High",

    /**
     * value: "Medium"
     * @const
     */
    "Medium": "Medium",

    /**
     * value: "Low"
     * @const
     */
    "Low": "Low"
};


/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
IncidentUpdate['StateEnum'] = {

    /**
     * value: "New"
     * @const
     */
    "New": "New",

    /**
     * value: "InProgress"
     * @const
     */
    "InProgress": "InProgress",

    /**
     * value: "OnHold"
     * @const
     */
    "OnHold": "OnHold",

    /**
     * value: "Resolved"
     * @const
     */
    "Resolved": "Resolved",

    /**
     * value: "Close"
     * @const
     */
    "Close": "Close",

    /**
     * value: "Canceled"
     * @const
     */
    "Canceled": "Canceled"
};


/**
 * Allowed values for the <code>urgency</code> property.
 * @enum {String}
 * @readonly
 */
IncidentUpdate['UrgencyEnum'] = {

    /**
     * value: "High"
     * @const
     */
    "High": "High",

    /**
     * value: "Medium"
     * @const
     */
    "Medium": "Medium",

    /**
     * value: "Low"
     * @const
     */
    "Low": "Low"
};



export default IncidentUpdate;

