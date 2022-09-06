import { useState } from "react";
import "./App.css";
import RegistrationForm from "./components/Forms/Registration";
import RegisteratioDetails from "./components/RegisteratioDetails";
import Screen from "./Screen";
import { _Form } from "./types/forms.type";

function App() {
  const [entry, setEntry] = useState<_Form | null>(null);
  const clearEntry = () => {
    setEntry(null);
  };
  return (
    <div className="App">
      <Screen>
        <RegistrationForm setEntry={setEntry} />
        <RegisteratioDetails onClear={clearEntry} entry={entry} />
      </Screen>
    </div>
  );
}

export default App;
