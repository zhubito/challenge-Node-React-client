import { Provider } from "react-redux";
import generateStore from "./redux/store";

import Filter from "./components/Filter";
import Form from "./components/Form";
import Grid from "./components/Grid";

function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <div className="container mt-4 w-50">
        <h1 className="text-center mb-5">Sistema de Posts</h1>
        <Filter />
        <Grid />
        <Form />
      </div>
    </Provider>
  );
}

export default App;
