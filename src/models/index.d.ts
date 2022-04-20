import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AbhiTableMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class AbhiTable {
  readonly id: string;
  readonly name?: string | null;
  readonly password?: string | null;
  readonly address?: string | null;
  readonly Pincode?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<AbhiTable, AbhiTableMetaData>);
  static copyOf(source: AbhiTable, mutator: (draft: MutableModel<AbhiTable, AbhiTableMetaData>) => MutableModel<AbhiTable, AbhiTableMetaData> | void): AbhiTable;
}