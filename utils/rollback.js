/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-var-requires */
require('ts-node/register');

require('./db').migrator.runAsCLI();