import {DataProvider} from "./dataContex/QuizProvider";
import "./App.css";
import QuizApp from "./components/QuizApp/QuizApp";
import ThemeProvider from "./dataContex/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <DataProvider>
          <QuizApp />
        </DataProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
