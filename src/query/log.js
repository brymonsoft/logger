const gql = require('graphql-tag');

const LOG_MUTATION = gql`
  mutation log($input: ErrorInput!){
    log(input: $input){
      targetId
      type
      stack
      meta
    }
  }
`;

module.exports = { LOG_MUTATION };
