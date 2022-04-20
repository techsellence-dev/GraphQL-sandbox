// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { AbhiTable } = initSchema(schema);

export {
  AbhiTable
};