import { ApolloProvider } from "@apollo/client";
import { Provider, defaultTheme } from "@adobe/react-spectrum";
import { client } from "./apollo-client";
import TaskManager from "./components/TaskManager";

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider theme={defaultTheme}>
        <TaskManager />
      </Provider>
    </ApolloProvider>
  );
}

export default App;
