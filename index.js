const BaseClient = require('./src/BaseClient');
const client = new BaseClient({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
  intents: 32767,
  disableMentions: 'everyone',
});

client.setup();