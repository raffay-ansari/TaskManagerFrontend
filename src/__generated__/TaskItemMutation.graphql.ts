/**
 * @generated SignedSource<<a7c13fd7abd00ac7d712e85e3e67fb08>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type TaskStatus = "COMPLETED" | "IN_PROGRESS" | "PENDING" | "%future added value";
export type TaskItemMutation$variables = {
  id: number;
  status: TaskStatus;
};
export type TaskItemMutation$data = {
  readonly updateTaskStatus: {
    readonly id: number;
    readonly status: TaskStatus;
  } | null | undefined;
};
export type TaskItemMutation = {
  response: TaskItemMutation$data;
  variables: TaskItemMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "status"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "status",
        "variableName": "status"
      }
    ],
    "concreteType": "TaskItem",
    "kind": "LinkedField",
    "name": "updateTaskStatus",
    "plural": false,
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
        "name": "status",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TaskItemMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TaskItemMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3fb243d199fcde85ab7d956983b80089",
    "id": null,
    "metadata": {},
    "name": "TaskItemMutation",
    "operationKind": "mutation",
    "text": "mutation TaskItemMutation(\n  $id: Int!\n  $status: TaskStatus!\n) {\n  updateTaskStatus(id: $id, status: $status) {\n    id\n    status\n  }\n}\n"
  }
};
})();

(node as any).hash = "1d65cc3ee9a5b5d1abe983bab104b3a9";

export default node;
