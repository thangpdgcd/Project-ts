import "./App.css";
import Homepage from "./pages/Homepage";
import Header from "./layouts/Hearder";
function App() {
  return (
    <>
      <div className="container">
        {/* header */}
        <Header />
        {/* homepage */}
        <Homepage />
        {/* Createapp */}

        {/* footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
