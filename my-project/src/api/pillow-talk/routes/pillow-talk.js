'use strict';

/**
 * pillow-talk router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::pillow-talk.pillow-talk');
