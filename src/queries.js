/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAbhiTable = /* GraphQL */ `
  query GetAbhiTable($id: ID!) {
    getAbhiTable(id: $id) {
      id
      name
      password
      address
      Pincode
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listAbhiTables = /* GraphQL */ `
  query ListAbhiTables(
    $filter: ModelAbhiTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAbhiTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        password
        address
        Pincode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAbhiTables = /* GraphQL */ `
  query SyncAbhiTables(
    $filter: ModelAbhiTableFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAbhiTables(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        password
        address
        Pincode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
