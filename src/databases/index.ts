import config from 'config';
import { dbConfig } from '@interfaces/db.interface';

const { host, port, database }: dbConfig = config.get('dbConfig');

export const dbConnection = {
  // url: `mongodb://${host}:${port}/${database}`,
  // I used online cloud Mongo, If you are testing in local, please comment below and uncomment above line.
  url: `mongodb+srv://admin:admin@cluster0.sgilc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
