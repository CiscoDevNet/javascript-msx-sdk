/**
 * KAKAPO - MSX SDK
 * MSX Platform SDK
 *
 * The version of the OpenAPI document: 3.10.0
 * Contact: somecontact@cisco.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AccessToken from './model/AccessToken';
import CatalogAssignment from './model/CatalogAssignment';
import Device from './model/Device';
import DeviceAllOf from './model/DeviceAllOf';
import DeviceBilling from './model/DeviceBilling';
import DeviceCreate from './model/DeviceCreate';
import DeviceCreateAllOf from './model/DeviceCreateAllOf';
import DeviceSummary from './model/DeviceSummary';
import DeviceTemplate from './model/DeviceTemplate';
import DeviceTemplateAccess from './model/DeviceTemplateAccess';
import DeviceTemplateAccessResponse from './model/DeviceTemplateAccessResponse';
import DeviceTemplateAllOf from './model/DeviceTemplateAllOf';
import DeviceTemplateAttachRequest from './model/DeviceTemplateAttachRequest';
import DeviceTemplateCreate from './model/DeviceTemplateCreate';
import DeviceTemplateDetails from './model/DeviceTemplateDetails';
import DeviceTemplateHistory from './model/DeviceTemplateHistory';
import DeviceTemplateUpdateDetails from './model/DeviceTemplateUpdateDetails';
import DeviceTemplateUpdateRequest from './model/DeviceTemplateUpdateRequest';
import DeviceUpdate from './model/DeviceUpdate';
import DevicesPage from './model/DevicesPage';
import DevicesPageAllOf from './model/DevicesPageAllOf';
import Error from './model/Error';
import LegacyAbsoluteConfig from './model/LegacyAbsoluteConfig';
import LegacyAddress from './model/LegacyAddress';
import LegacyNsoResponseTypes from './model/LegacyNsoResponseTypes';
import LegacyRelativeConfig from './model/LegacyRelativeConfig';
import LegacyScheduleConfig from './model/LegacyScheduleConfig';
import LegacyServiceOrder from './model/LegacyServiceOrder';
import LegacyServiceOrderDetail from './model/LegacyServiceOrderDetail';
import LegacyServiceOrderResponse from './model/LegacyServiceOrderResponse';
import LegacySite from './model/LegacySite';
import LegacySiteDevice from './model/LegacySiteDevice';
import LegacySiteDeviceOnboard from './model/LegacySiteDeviceOnboard';
import LegacySubscriptionDetail from './model/LegacySubscriptionDetail';
import NSOConfigDataXPath from './model/NSOConfigDataXPath';
import NameValue from './model/NameValue';
import Offer from './model/Offer';
import OfferAllOf from './model/OfferAllOf';
import OfferCreate from './model/OfferCreate';
import OfferUpdate from './model/OfferUpdate';
import OffersPage from './model/OffersPage';
import OffersPageAllOf from './model/OffersPageAllOf';
import PageHeader from './model/PageHeader';
import Product from './model/Product';
import ProductAllOf from './model/ProductAllOf';
import ProductCreate from './model/ProductCreate';
import ProductUpdate from './model/ProductUpdate';
import ProductsPage from './model/ProductsPage';
import ProductsPageAllOf from './model/ProductsPageAllOf';
import ResourceHealth from './model/ResourceHealth';
import ResourceStatus from './model/ResourceStatus';
import ResourceType from './model/ResourceType';
import Role from './model/Role';
import Service from './model/Service';
import ServiceElement from './model/ServiceElement';
import ServiceElementPrice from './model/ServiceElementPrice';
import ServiceUIConfig from './model/ServiceUIConfig';
import ServiceUILink from './model/ServiceUILink';
import ServicesPage from './model/ServicesPage';
import ServicesPageAllOf from './model/ServicesPageAllOf';
import Site from './model/Site';
import SiteAddress from './model/SiteAddress';
import SiteContact from './model/SiteContact';
import SiteCreate from './model/SiteCreate';
import SiteCreateAllOf from './model/SiteCreateAllOf';
import SiteLocation from './model/SiteLocation';
import SiteStatus from './model/SiteStatus';
import SiteUpdate from './model/SiteUpdate';
import SitesPage from './model/SitesPage';
import SitesPageAllOf from './model/SitesPageAllOf';
import StartWorkflowResponse from './model/StartWorkflowResponse';
import TemplateParameterValidator from './model/TemplateParameterValidator';
import Tenant from './model/Tenant';
import TenantAllOf from './model/TenantAllOf';
import TenantCreate from './model/TenantCreate';
import TenantUpdate from './model/TenantUpdate';
import TenantsPage from './model/TenantsPage';
import TenantsPageAllOf from './model/TenantsPageAllOf';
import UpdatePassword from './model/UpdatePassword';
import User from './model/User';
import UserAllOf from './model/UserAllOf';
import UserCreate from './model/UserCreate';
import UserCreateAllOf from './model/UserCreateAllOf';
import UserUpdate from './model/UserUpdate';
import UsersPage from './model/UsersPage';
import UsersPageAllOf from './model/UsersPageAllOf';
import ValidateWorkflowResponse from './model/ValidateWorkflowResponse';
import Workflow from './model/Workflow';
import WorkflowAccessMeta from './model/WorkflowAccessMeta';
import WorkflowAccessMetaType from './model/WorkflowAccessMetaType';
import WorkflowAction from './model/WorkflowAction';
import WorkflowActionBlock from './model/WorkflowActionBlock';
import WorkflowAllOf from './model/WorkflowAllOf';
import WorkflowCategory from './model/WorkflowCategory';
import WorkflowCategoryAllOf from './model/WorkflowCategoryAllOf';
import WorkflowCategoryCreate from './model/WorkflowCategoryCreate';
import WorkflowCategoryUpdate from './model/WorkflowCategoryUpdate';
import WorkflowDefAccessMeta from './model/WorkflowDefAccessMeta';
import WorkflowEvent from './model/WorkflowEvent';
import WorkflowEventAllOf from './model/WorkflowEventAllOf';
import WorkflowEventCreate from './model/WorkflowEventCreate';
import WorkflowEventUpdate from './model/WorkflowEventUpdate';
import WorkflowFooter from './model/WorkflowFooter';
import WorkflowInstance from './model/WorkflowInstance';
import WorkflowInstanceAllOf from './model/WorkflowInstanceAllOf';
import WorkflowInstanceDeleteResponse from './model/WorkflowInstanceDeleteResponse';
import WorkflowMapping from './model/WorkflowMapping';
import WorkflowMetadata from './model/WorkflowMetadata';
import WorkflowMetadataGitInfo from './model/WorkflowMetadataGitInfo';
import WorkflowSchema from './model/WorkflowSchema';
import WorkflowSchemaAllOf from './model/WorkflowSchemaAllOf';
import WorkflowSchemaByTypeResponse from './model/WorkflowSchemaByTypeResponse';
import WorkflowStartConfig from './model/WorkflowStartConfig';
import WorkflowTarget from './model/WorkflowTarget';
import WorkflowTargetAllOf from './model/WorkflowTargetAllOf';
import WorkflowTargetCreate from './model/WorkflowTargetCreate';
import WorkflowTargetUpdate from './model/WorkflowTargetUpdate';
import WorkflowVariable from './model/WorkflowVariable';
import WorkflowVariableAllOf from './model/WorkflowVariableAllOf';
import DeviceTemplatesApi from './api/DeviceTemplatesApi';
import DevicesApi from './api/DevicesApi';
import HealthApi from './api/HealthApi';
import OffersApi from './api/OffersApi';
import ProductsApi from './api/ProductsApi';
import RolesApi from './api/RolesApi';
import SecurityApi from './api/SecurityApi';
import ServicesApi from './api/ServicesApi';
import SitesApi from './api/SitesApi';
import TenantsApi from './api/TenantsApi';
import UsersApi from './api/UsersApi';
import WorkflowCategoriesApi from './api/WorkflowCategoriesApi';
import WorkflowEventsApi from './api/WorkflowEventsApi';
import WorkflowInstancesApi from './api/WorkflowInstancesApi';
import WorkflowSchemasApi from './api/WorkflowSchemasApi';
import WorkflowTargetsApi from './api/WorkflowTargetsApi';
import WorkflowsApi from './api/WorkflowsApi';


/**
* MSX_Platform_SDK.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var JavascriptMsxSdk = require('index'); // See note below*.
* var xxxSvc = new JavascriptMsxSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new JavascriptMsxSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new JavascriptMsxSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new JavascriptMsxSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 3.10.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AccessToken model constructor.
     * @property {module:model/AccessToken}
     */
    AccessToken,

    /**
     * The CatalogAssignment model constructor.
     * @property {module:model/CatalogAssignment}
     */
    CatalogAssignment,

    /**
     * The Device model constructor.
     * @property {module:model/Device}
     */
    Device,

    /**
     * The DeviceAllOf model constructor.
     * @property {module:model/DeviceAllOf}
     */
    DeviceAllOf,

    /**
     * The DeviceBilling model constructor.
     * @property {module:model/DeviceBilling}
     */
    DeviceBilling,

    /**
     * The DeviceCreate model constructor.
     * @property {module:model/DeviceCreate}
     */
    DeviceCreate,

    /**
     * The DeviceCreateAllOf model constructor.
     * @property {module:model/DeviceCreateAllOf}
     */
    DeviceCreateAllOf,

    /**
     * The DeviceSummary model constructor.
     * @property {module:model/DeviceSummary}
     */
    DeviceSummary,

    /**
     * The DeviceTemplate model constructor.
     * @property {module:model/DeviceTemplate}
     */
    DeviceTemplate,

    /**
     * The DeviceTemplateAccess model constructor.
     * @property {module:model/DeviceTemplateAccess}
     */
    DeviceTemplateAccess,

    /**
     * The DeviceTemplateAccessResponse model constructor.
     * @property {module:model/DeviceTemplateAccessResponse}
     */
    DeviceTemplateAccessResponse,

    /**
     * The DeviceTemplateAllOf model constructor.
     * @property {module:model/DeviceTemplateAllOf}
     */
    DeviceTemplateAllOf,

    /**
     * The DeviceTemplateAttachRequest model constructor.
     * @property {module:model/DeviceTemplateAttachRequest}
     */
    DeviceTemplateAttachRequest,

    /**
     * The DeviceTemplateCreate model constructor.
     * @property {module:model/DeviceTemplateCreate}
     */
    DeviceTemplateCreate,

    /**
     * The DeviceTemplateDetails model constructor.
     * @property {module:model/DeviceTemplateDetails}
     */
    DeviceTemplateDetails,

    /**
     * The DeviceTemplateHistory model constructor.
     * @property {module:model/DeviceTemplateHistory}
     */
    DeviceTemplateHistory,

    /**
     * The DeviceTemplateUpdateDetails model constructor.
     * @property {module:model/DeviceTemplateUpdateDetails}
     */
    DeviceTemplateUpdateDetails,

    /**
     * The DeviceTemplateUpdateRequest model constructor.
     * @property {module:model/DeviceTemplateUpdateRequest}
     */
    DeviceTemplateUpdateRequest,

    /**
     * The DeviceUpdate model constructor.
     * @property {module:model/DeviceUpdate}
     */
    DeviceUpdate,

    /**
     * The DevicesPage model constructor.
     * @property {module:model/DevicesPage}
     */
    DevicesPage,

    /**
     * The DevicesPageAllOf model constructor.
     * @property {module:model/DevicesPageAllOf}
     */
    DevicesPageAllOf,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The LegacyAbsoluteConfig model constructor.
     * @property {module:model/LegacyAbsoluteConfig}
     */
    LegacyAbsoluteConfig,

    /**
     * The LegacyAddress model constructor.
     * @property {module:model/LegacyAddress}
     */
    LegacyAddress,

    /**
     * The LegacyNsoResponseTypes model constructor.
     * @property {module:model/LegacyNsoResponseTypes}
     */
    LegacyNsoResponseTypes,

    /**
     * The LegacyRelativeConfig model constructor.
     * @property {module:model/LegacyRelativeConfig}
     */
    LegacyRelativeConfig,

    /**
     * The LegacyScheduleConfig model constructor.
     * @property {module:model/LegacyScheduleConfig}
     */
    LegacyScheduleConfig,

    /**
     * The LegacyServiceOrder model constructor.
     * @property {module:model/LegacyServiceOrder}
     */
    LegacyServiceOrder,

    /**
     * The LegacyServiceOrderDetail model constructor.
     * @property {module:model/LegacyServiceOrderDetail}
     */
    LegacyServiceOrderDetail,

    /**
     * The LegacyServiceOrderResponse model constructor.
     * @property {module:model/LegacyServiceOrderResponse}
     */
    LegacyServiceOrderResponse,

    /**
     * The LegacySite model constructor.
     * @property {module:model/LegacySite}
     */
    LegacySite,

    /**
     * The LegacySiteDevice model constructor.
     * @property {module:model/LegacySiteDevice}
     */
    LegacySiteDevice,

    /**
     * The LegacySiteDeviceOnboard model constructor.
     * @property {module:model/LegacySiteDeviceOnboard}
     */
    LegacySiteDeviceOnboard,

    /**
     * The LegacySubscriptionDetail model constructor.
     * @property {module:model/LegacySubscriptionDetail}
     */
    LegacySubscriptionDetail,

    /**
     * The NSOConfigDataXPath model constructor.
     * @property {module:model/NSOConfigDataXPath}
     */
    NSOConfigDataXPath,

    /**
     * The NameValue model constructor.
     * @property {module:model/NameValue}
     */
    NameValue,

    /**
     * The Offer model constructor.
     * @property {module:model/Offer}
     */
    Offer,

    /**
     * The OfferAllOf model constructor.
     * @property {module:model/OfferAllOf}
     */
    OfferAllOf,

    /**
     * The OfferCreate model constructor.
     * @property {module:model/OfferCreate}
     */
    OfferCreate,

    /**
     * The OfferUpdate model constructor.
     * @property {module:model/OfferUpdate}
     */
    OfferUpdate,

    /**
     * The OffersPage model constructor.
     * @property {module:model/OffersPage}
     */
    OffersPage,

    /**
     * The OffersPageAllOf model constructor.
     * @property {module:model/OffersPageAllOf}
     */
    OffersPageAllOf,

    /**
     * The PageHeader model constructor.
     * @property {module:model/PageHeader}
     */
    PageHeader,

    /**
     * The Product model constructor.
     * @property {module:model/Product}
     */
    Product,

    /**
     * The ProductAllOf model constructor.
     * @property {module:model/ProductAllOf}
     */
    ProductAllOf,

    /**
     * The ProductCreate model constructor.
     * @property {module:model/ProductCreate}
     */
    ProductCreate,

    /**
     * The ProductUpdate model constructor.
     * @property {module:model/ProductUpdate}
     */
    ProductUpdate,

    /**
     * The ProductsPage model constructor.
     * @property {module:model/ProductsPage}
     */
    ProductsPage,

    /**
     * The ProductsPageAllOf model constructor.
     * @property {module:model/ProductsPageAllOf}
     */
    ProductsPageAllOf,

    /**
     * The ResourceHealth model constructor.
     * @property {module:model/ResourceHealth}
     */
    ResourceHealth,

    /**
     * The ResourceStatus model constructor.
     * @property {module:model/ResourceStatus}
     */
    ResourceStatus,

    /**
     * The ResourceType model constructor.
     * @property {module:model/ResourceType}
     */
    ResourceType,

    /**
     * The Role model constructor.
     * @property {module:model/Role}
     */
    Role,

    /**
     * The Service model constructor.
     * @property {module:model/Service}
     */
    Service,

    /**
     * The ServiceElement model constructor.
     * @property {module:model/ServiceElement}
     */
    ServiceElement,

    /**
     * The ServiceElementPrice model constructor.
     * @property {module:model/ServiceElementPrice}
     */
    ServiceElementPrice,

    /**
     * The ServiceUIConfig model constructor.
     * @property {module:model/ServiceUIConfig}
     */
    ServiceUIConfig,

    /**
     * The ServiceUILink model constructor.
     * @property {module:model/ServiceUILink}
     */
    ServiceUILink,

    /**
     * The ServicesPage model constructor.
     * @property {module:model/ServicesPage}
     */
    ServicesPage,

    /**
     * The ServicesPageAllOf model constructor.
     * @property {module:model/ServicesPageAllOf}
     */
    ServicesPageAllOf,

    /**
     * The Site model constructor.
     * @property {module:model/Site}
     */
    Site,

    /**
     * The SiteAddress model constructor.
     * @property {module:model/SiteAddress}
     */
    SiteAddress,

    /**
     * The SiteContact model constructor.
     * @property {module:model/SiteContact}
     */
    SiteContact,

    /**
     * The SiteCreate model constructor.
     * @property {module:model/SiteCreate}
     */
    SiteCreate,

    /**
     * The SiteCreateAllOf model constructor.
     * @property {module:model/SiteCreateAllOf}
     */
    SiteCreateAllOf,

    /**
     * The SiteLocation model constructor.
     * @property {module:model/SiteLocation}
     */
    SiteLocation,

    /**
     * The SiteStatus model constructor.
     * @property {module:model/SiteStatus}
     */
    SiteStatus,

    /**
     * The SiteUpdate model constructor.
     * @property {module:model/SiteUpdate}
     */
    SiteUpdate,

    /**
     * The SitesPage model constructor.
     * @property {module:model/SitesPage}
     */
    SitesPage,

    /**
     * The SitesPageAllOf model constructor.
     * @property {module:model/SitesPageAllOf}
     */
    SitesPageAllOf,

    /**
     * The StartWorkflowResponse model constructor.
     * @property {module:model/StartWorkflowResponse}
     */
    StartWorkflowResponse,

    /**
     * The TemplateParameterValidator model constructor.
     * @property {module:model/TemplateParameterValidator}
     */
    TemplateParameterValidator,

    /**
     * The Tenant model constructor.
     * @property {module:model/Tenant}
     */
    Tenant,

    /**
     * The TenantAllOf model constructor.
     * @property {module:model/TenantAllOf}
     */
    TenantAllOf,

    /**
     * The TenantCreate model constructor.
     * @property {module:model/TenantCreate}
     */
    TenantCreate,

    /**
     * The TenantUpdate model constructor.
     * @property {module:model/TenantUpdate}
     */
    TenantUpdate,

    /**
     * The TenantsPage model constructor.
     * @property {module:model/TenantsPage}
     */
    TenantsPage,

    /**
     * The TenantsPageAllOf model constructor.
     * @property {module:model/TenantsPageAllOf}
     */
    TenantsPageAllOf,

    /**
     * The UpdatePassword model constructor.
     * @property {module:model/UpdatePassword}
     */
    UpdatePassword,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The UserAllOf model constructor.
     * @property {module:model/UserAllOf}
     */
    UserAllOf,

    /**
     * The UserCreate model constructor.
     * @property {module:model/UserCreate}
     */
    UserCreate,

    /**
     * The UserCreateAllOf model constructor.
     * @property {module:model/UserCreateAllOf}
     */
    UserCreateAllOf,

    /**
     * The UserUpdate model constructor.
     * @property {module:model/UserUpdate}
     */
    UserUpdate,

    /**
     * The UsersPage model constructor.
     * @property {module:model/UsersPage}
     */
    UsersPage,

    /**
     * The UsersPageAllOf model constructor.
     * @property {module:model/UsersPageAllOf}
     */
    UsersPageAllOf,

    /**
     * The ValidateWorkflowResponse model constructor.
     * @property {module:model/ValidateWorkflowResponse}
     */
    ValidateWorkflowResponse,

    /**
     * The Workflow model constructor.
     * @property {module:model/Workflow}
     */
    Workflow,

    /**
     * The WorkflowAccessMeta model constructor.
     * @property {module:model/WorkflowAccessMeta}
     */
    WorkflowAccessMeta,

    /**
     * The WorkflowAccessMetaType model constructor.
     * @property {module:model/WorkflowAccessMetaType}
     */
    WorkflowAccessMetaType,

    /**
     * The WorkflowAction model constructor.
     * @property {module:model/WorkflowAction}
     */
    WorkflowAction,

    /**
     * The WorkflowActionBlock model constructor.
     * @property {module:model/WorkflowActionBlock}
     */
    WorkflowActionBlock,

    /**
     * The WorkflowAllOf model constructor.
     * @property {module:model/WorkflowAllOf}
     */
    WorkflowAllOf,

    /**
     * The WorkflowCategory model constructor.
     * @property {module:model/WorkflowCategory}
     */
    WorkflowCategory,

    /**
     * The WorkflowCategoryAllOf model constructor.
     * @property {module:model/WorkflowCategoryAllOf}
     */
    WorkflowCategoryAllOf,

    /**
     * The WorkflowCategoryCreate model constructor.
     * @property {module:model/WorkflowCategoryCreate}
     */
    WorkflowCategoryCreate,

    /**
     * The WorkflowCategoryUpdate model constructor.
     * @property {module:model/WorkflowCategoryUpdate}
     */
    WorkflowCategoryUpdate,

    /**
     * The WorkflowDefAccessMeta model constructor.
     * @property {module:model/WorkflowDefAccessMeta}
     */
    WorkflowDefAccessMeta,

    /**
     * The WorkflowEvent model constructor.
     * @property {module:model/WorkflowEvent}
     */
    WorkflowEvent,

    /**
     * The WorkflowEventAllOf model constructor.
     * @property {module:model/WorkflowEventAllOf}
     */
    WorkflowEventAllOf,

    /**
     * The WorkflowEventCreate model constructor.
     * @property {module:model/WorkflowEventCreate}
     */
    WorkflowEventCreate,

    /**
     * The WorkflowEventUpdate model constructor.
     * @property {module:model/WorkflowEventUpdate}
     */
    WorkflowEventUpdate,

    /**
     * The WorkflowFooter model constructor.
     * @property {module:model/WorkflowFooter}
     */
    WorkflowFooter,

    /**
     * The WorkflowInstance model constructor.
     * @property {module:model/WorkflowInstance}
     */
    WorkflowInstance,

    /**
     * The WorkflowInstanceAllOf model constructor.
     * @property {module:model/WorkflowInstanceAllOf}
     */
    WorkflowInstanceAllOf,

    /**
     * The WorkflowInstanceDeleteResponse model constructor.
     * @property {module:model/WorkflowInstanceDeleteResponse}
     */
    WorkflowInstanceDeleteResponse,

    /**
     * The WorkflowMapping model constructor.
     * @property {module:model/WorkflowMapping}
     */
    WorkflowMapping,

    /**
     * The WorkflowMetadata model constructor.
     * @property {module:model/WorkflowMetadata}
     */
    WorkflowMetadata,

    /**
     * The WorkflowMetadataGitInfo model constructor.
     * @property {module:model/WorkflowMetadataGitInfo}
     */
    WorkflowMetadataGitInfo,

    /**
     * The WorkflowSchema model constructor.
     * @property {module:model/WorkflowSchema}
     */
    WorkflowSchema,

    /**
     * The WorkflowSchemaAllOf model constructor.
     * @property {module:model/WorkflowSchemaAllOf}
     */
    WorkflowSchemaAllOf,

    /**
     * The WorkflowSchemaByTypeResponse model constructor.
     * @property {module:model/WorkflowSchemaByTypeResponse}
     */
    WorkflowSchemaByTypeResponse,

    /**
     * The WorkflowStartConfig model constructor.
     * @property {module:model/WorkflowStartConfig}
     */
    WorkflowStartConfig,

    /**
     * The WorkflowTarget model constructor.
     * @property {module:model/WorkflowTarget}
     */
    WorkflowTarget,

    /**
     * The WorkflowTargetAllOf model constructor.
     * @property {module:model/WorkflowTargetAllOf}
     */
    WorkflowTargetAllOf,

    /**
     * The WorkflowTargetCreate model constructor.
     * @property {module:model/WorkflowTargetCreate}
     */
    WorkflowTargetCreate,

    /**
     * The WorkflowTargetUpdate model constructor.
     * @property {module:model/WorkflowTargetUpdate}
     */
    WorkflowTargetUpdate,

    /**
     * The WorkflowVariable model constructor.
     * @property {module:model/WorkflowVariable}
     */
    WorkflowVariable,

    /**
     * The WorkflowVariableAllOf model constructor.
     * @property {module:model/WorkflowVariableAllOf}
     */
    WorkflowVariableAllOf,

    /**
    * The DeviceTemplatesApi service constructor.
    * @property {module:api/DeviceTemplatesApi}
    */
    DeviceTemplatesApi,

    /**
    * The DevicesApi service constructor.
    * @property {module:api/DevicesApi}
    */
    DevicesApi,

    /**
    * The HealthApi service constructor.
    * @property {module:api/HealthApi}
    */
    HealthApi,

    /**
    * The OffersApi service constructor.
    * @property {module:api/OffersApi}
    */
    OffersApi,

    /**
    * The ProductsApi service constructor.
    * @property {module:api/ProductsApi}
    */
    ProductsApi,

    /**
    * The RolesApi service constructor.
    * @property {module:api/RolesApi}
    */
    RolesApi,

    /**
    * The SecurityApi service constructor.
    * @property {module:api/SecurityApi}
    */
    SecurityApi,

    /**
    * The ServicesApi service constructor.
    * @property {module:api/ServicesApi}
    */
    ServicesApi,

    /**
    * The SitesApi service constructor.
    * @property {module:api/SitesApi}
    */
    SitesApi,

    /**
    * The TenantsApi service constructor.
    * @property {module:api/TenantsApi}
    */
    TenantsApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi,

    /**
    * The WorkflowCategoriesApi service constructor.
    * @property {module:api/WorkflowCategoriesApi}
    */
    WorkflowCategoriesApi,

    /**
    * The WorkflowEventsApi service constructor.
    * @property {module:api/WorkflowEventsApi}
    */
    WorkflowEventsApi,

    /**
    * The WorkflowInstancesApi service constructor.
    * @property {module:api/WorkflowInstancesApi}
    */
    WorkflowInstancesApi,

    /**
    * The WorkflowSchemasApi service constructor.
    * @property {module:api/WorkflowSchemasApi}
    */
    WorkflowSchemasApi,

    /**
    * The WorkflowTargetsApi service constructor.
    * @property {module:api/WorkflowTargetsApi}
    */
    WorkflowTargetsApi,

    /**
    * The WorkflowsApi service constructor.
    * @property {module:api/WorkflowsApi}
    */
    WorkflowsApi
};
