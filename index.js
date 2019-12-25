import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import schema from './lib/graphql';

const uri = 'mongodb://localhost:27017/football';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', () => {
  console.log('error connect to database');
}).once('open', () => {
  console.log('connected to database');
});

const app = express();

app.get('/', (req, res, next) => {
  res.send('Hello GraphQL');
});

app.use('/graphql', graphqlHTTP(() => ({
  schema,
  graphiql: true,
  pretty: true
})));

const PORT = 3000;

app.listen(PORT, () => {
  console.log('GraphQL server running on port '+PORT);
});