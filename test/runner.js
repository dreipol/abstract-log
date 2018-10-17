const chai = require('chai');
// const chaiSpies = require('chai-spies');
chai.use(require('chai-spies'));

global.chai = chai;

describe('abstract-log', () => {
    require('./abstract-log.spec');
});
