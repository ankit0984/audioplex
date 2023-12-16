'use strict';

/**
 * audioplex service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::audioplex.audioplex');
