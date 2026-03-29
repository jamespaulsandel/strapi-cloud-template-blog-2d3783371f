// src/api/page/controllers/page.ts
import { factories } from '@strapi/strapi';

const PAGE_POPULATE = {
  Body: {
    on: {
      'cms-content.hero': {
        populate: { Availability: true, Image: true }
      },
      'cms-content.organization': {
        populate: '*'
      },
      'cms-content.address': {
        populate: '*'
      },
      'cms-content.list': {
        populate: '*'
      },
      'cms-content.common-fields': {
        populate: '*'
      },
      'cms-content.availability': {
        populate: '*'
      },
    }
  }
};

export default factories.createCoreController('api::page.page', ({ strapi }) => ({
  async find(ctx) {
    ctx.query.populate = PAGE_POPULATE;
    return super.find(ctx);
  },
  async findOne(ctx) {
    ctx.query.populate = PAGE_POPULATE;
    return super.findOne(ctx);
  },
}));