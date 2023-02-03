'use strict';

/**
 * big-talk service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::big-talk.big-talk');
