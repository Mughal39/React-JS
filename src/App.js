import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
function App() {
  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "Hellllllllo1",
    },
    {
      sno: 2,
      title: "Go to the market",
      desc: "Hellllllllo2",
    },
    {
      sno: 3,
      title: "Go to the market",
      desc: "Hellllllllo3",
    },
  ];
  return (
    <>
      <Header title="My List" searchBar={false} />
      <Todos todos={todos} />
      <Footer />
    </>
  );
}

export default App;
