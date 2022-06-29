const convict = require('convict');
const { url } = require('convict-format-with-validator');

const schema = {
    app: {
        port: {
            doc: 'The port to bind.',
            format: 'port',
            default: 4578,
            env: 'PORT',
        }
    },
    node_env: {
        doc: "The application environment.",
        format: ["dev", "prod", "test"],
        default: "dev",
        env: "NODE_ENV"
      },
    db: {
        url: {
            default: "mongodb://localhost/vLmNa",
            env: "DB_URL"
          },
    }
}

convict.addFormat(url);
const config = convict(schema).validate({ allowed: "strict" });
module.exports = { config };