import "./App.css";
import Header from "./component/Header/Header";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
