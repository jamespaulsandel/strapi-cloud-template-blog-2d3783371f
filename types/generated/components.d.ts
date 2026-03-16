import type { Schema, Struct } from '@strapi/strapi';

export interface CmsContentAddress extends Struct.ComponentSchema {
  collectionName: 'components_cms_content_addresses';
  info: {
    displayName: 'Address';
  };
  attributes: {
    City: Schema.Attribute.String;
    Remote: Schema.Attribute.Boolean;
    State: Schema.Attribute.String;
    Street: Schema.Attribute.String;
    Unit: Schema.Attribute.String;
    ZipCode: Schema.Attribute.Integer;
  };
}

export interface CmsContentCommonFields extends Struct.ComponentSchema {
  collectionName: 'components_cms_content_common_fields';
  info: {
    displayName: 'Common Fields';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CmsContentList extends Struct.ComponentSchema {
  collectionName: 'components_cms_content_lists';
  info: {
    displayName: 'List';
    icon: 'bulletList';
  };
  attributes: {
    Item: Schema.Attribute.Text;
  };
}

export interface CmsContentOrganization extends Struct.ComponentSchema {
  collectionName: 'components_cms_content_organizations';
  info: {
    displayName: 'Organization';
    icon: 'house';
  };
  attributes: {
    Common: Schema.Attribute.Component<'cms-content.common-fields', false>;
    Locations: Schema.Attribute.Component<'cms-content.address', true>;
    Phone: Schema.Attribute.BigInteger;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cms-content.address': CmsContentAddress;
      'cms-content.common-fields': CmsContentCommonFields;
      'cms-content.list': CmsContentList;
      'cms-content.organization': CmsContentOrganization;
    }
  }
}
