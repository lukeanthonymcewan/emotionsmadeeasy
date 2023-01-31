'use strict';

/**
 * honest-dating service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::honest-dating.honest-dating');
