/**
 * @generated SignedSource<<af3c649a92f47e48adb6e08872f10acf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TaskStatus = "COMPLETED" | "IN_PROGRESS" | "PENDING" | "%future added value";
export type TaskListQuery$variables = Record<PropertyKey, never>;
export type TaskListQuery$data = {
  readonly allTasks: ReadonlyArray<{
    readonly description: string;
    readonly id: number;
    readonly status: TaskStatus;
    readonly title: string;
  }>;
};
export type TaskListQuery = {
  response: TaskListQuery$data;
  variables: TaskListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "order",
        "value": [
          {
            "id": "DESC"
          }
        ]
      }
    ],
    "concreteType": "TaskItem",
    "kind": "LinkedField",
    "name": "allTasks",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "status",
        "storageKey": null
      }
    ],
    "storageKey": "allTasks(order:[{\"id\":\"DESC\"}])"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TaskListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TaskListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "304231e9abf43df7de09bb64898ff090",
    "id": null,
    "metadata": {},
    "name": "TaskListQuery",
    "operationKind": "query",
    "text": "query TaskListQuery {\n  allTasks(order: [{id: DESC}]) {\n    id\n    title\n    description\n    status\n  }\n}\n"
  }
};
})();

(node as any).hash = "49c31c7fda71b2647664c39835b2bd99";

export default node;
