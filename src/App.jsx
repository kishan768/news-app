import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import NewsItem from "./components/NewsItem";

function App() {
  console.log("app-render");
  return (
    <>
      <NavBar />

      <NewsItem />
    </>
  );
}

export default App;
