/**
 * @generated SignedSource<<f700246f34573b9a55593e4c52a4efd4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type TaskStatus = "COMPLETED" | "IN_PROGRESS" | "PENDING" | "%future added value";
export type CreateTaskFormMutation$variables = {
  description: string;
  title: string;
};
export type CreateTaskFormMutation$data = {
  readonly createTask: {
    readonly description: string;
    readonly id: number;
    readonly status: TaskStatus;
    readonly title: string;
  };
};
export type CreateTaskFormMutation = {
  response: CreateTaskFormMutation$data;
  variables: CreateTaskFormMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "description"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "description",
        "variableName": "description"
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
      }
    ],
    "concreteType": "TaskItem",
    "kind": "LinkedField",
    "name": "createTask",
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
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateTaskFormMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateTaskFormMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "c21dc86f9a63a035678533abe6a280cf",
    "id": null,
    "metadata": {},
    "name": "CreateTaskFormMutation",
    "operationKind": "mutation",
    "text": "mutation CreateTaskFormMutation(\n  $title: String!\n  $description: String!\n) {\n  createTask(title: $title, description: $description) {\n    id\n    title\n    description\n    status\n  }\n}\n"
  }
};
})();

(node as any).hash = "f03c0f99567295b04d553a675a6b5072";

export default node;
