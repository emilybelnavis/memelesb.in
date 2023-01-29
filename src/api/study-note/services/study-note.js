'use strict';

/**
 * study-note service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::study-note.study-note');
