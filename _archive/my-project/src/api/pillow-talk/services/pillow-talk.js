'use strict';

/**
 * pillow-talk service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pillow-talk.pillow-talk');
