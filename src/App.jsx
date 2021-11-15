import { useState } from "react";
import { Provider } from "react-redux";
import generateStore from "./redux/store";

import Filter from "./components/Filter";
import Form from "./components/Form";
import Grid from "./components/Grid";

function App() {
  const [filterForName, setFilterForName] = useState("");
  const store = generateStore();
  return (
    <Provider store={store}>
      <div className="container mt-4 w-50">
        <h1 className="text-center mb-5">Sistema de Posts</h1>
        <Filter setFilterForName={setFilterForName} />
        <Grid filterForName={filterForName} />
        <Form />
      </div>
    </Provider>
  );
}

export default App;
