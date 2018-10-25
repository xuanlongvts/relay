/**
 * @flow
 * @relayHash 64f1272d5922a27023d9d98403713a9d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type getRepoQueryVariables = {||};
export type getRepoQueryResponse = {|
  +viewer: {|
    +repositories: {|
      +edges: ?$ReadOnlyArray<?{|
        +cursor: string,
        +repository: ?{|
          +name: string,
          +issues: {|
            +totalCount: number,
            +edges: ?$ReadOnlyArray<?{|
              +node: ?{|
                +title: string,
                +bodyHTML: any,
              |}
            |}>,
          |},
        |},
      |}>,
      +pageInfo: {|
        +startCursor: ?string,
        +endCursor: ?string,
        +hasPreviousPage: boolean,
        +hasNextPage: boolean,
      |},
    |}
  |}
|};
export type getRepoQuery = {|
  variables: getRepoQueryVariables,
  response: getRepoQueryResponse,
|};
*/


/*
query getRepoQuery {
  viewer {
    repositories(first: 5) {
      edges {
        cursor
        repository: node {
          name
          issues(first: 5) {
            totalCount
            edges {
              node {
                title
                bodyHTML
                id
              }
            }
          }
          id
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasPreviousPage
        hasNextPage
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 5,
    "type": "Int"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "totalCount",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "bodyHTML",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "pageInfo",
  "storageKey": null,
  "args": null,
  "concreteType": "PageInfo",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "startCursor",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "endCursor",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hasPreviousPage",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hasNextPage",
      "args": null,
      "storageKey": null
    }
  ]
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "getRepoQuery",
  "id": null,
  "text": "query getRepoQuery {\n  viewer {\n    repositories(first: 5) {\n      edges {\n        cursor\n        repository: node {\n          name\n          issues(first: 5) {\n            totalCount\n            edges {\n              node {\n                title\n                bodyHTML\n                id\n              }\n            }\n          }\n          id\n        }\n      }\n      pageInfo {\n        startCursor\n        endCursor\n        hasPreviousPage\n        hasNextPage\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "getRepoQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "repositories",
            "storageKey": "repositories(first:5)",
            "args": v0,
            "concreteType": "RepositoryConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "RepositoryEdge",
                "plural": true,
                "selections": [
                  v1,
                  {
                    "kind": "LinkedField",
                    "alias": "repository",
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Repository",
                    "plural": false,
                    "selections": [
                      v2,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "issues",
                        "storageKey": "issues(first:5)",
                        "args": v0,
                        "concreteType": "IssueConnection",
                        "plural": false,
                        "selections": [
                          v3,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "edges",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "IssueEdge",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "node",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "Issue",
                                "plural": false,
                                "selections": [
                                  v4,
                                  v5
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              v6
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "getRepoQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "repositories",
            "storageKey": "repositories(first:5)",
            "args": v0,
            "concreteType": "RepositoryConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "RepositoryEdge",
                "plural": true,
                "selections": [
                  v1,
                  {
                    "kind": "LinkedField",
                    "alias": "repository",
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Repository",
                    "plural": false,
                    "selections": [
                      v2,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "issues",
                        "storageKey": "issues(first:5)",
                        "args": v0,
                        "concreteType": "IssueConnection",
                        "plural": false,
                        "selections": [
                          v3,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "edges",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "IssueEdge",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "node",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "Issue",
                                "plural": false,
                                "selections": [
                                  v4,
                                  v5,
                                  v7
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      v7
                    ]
                  }
                ]
              },
              v6
            ]
          },
          v7
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd40f2632462ac9a0dca44b01ad575dc6';
module.exports = node;
