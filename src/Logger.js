const ApolloClient = require('apollo-boost').default;
const uuidv4 = require('uuid/v4');
const { LOG_MUTATION } = require('./query/index');

class Logger {
  constructor(endpoint) {
    this.sessionId = uuidv4();
    this.client = new ApolloClient({
      uri: endpoint || '',
    });
  }

  log(id, type, stack, meta) {
    this.client.mutate({
      mutation: LOG_MUTATION,
      variables: {
        input: {
          targetId: id || this.sessionId,
          type,
          stack,
          meta,
        },
      },
    })
      .then(() => {
        console.log(`Log Captured ${stack}`);
      })
      .catch(() => console.error('Can not capture Log'));
  }
}

module.exports = Logger;
