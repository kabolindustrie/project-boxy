import Header from "./component/Header";
import Footer from "./component/Footer";
import LeftContainer from "./layouts/LeftContainer";

function App() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header/>
      <main className="flex flex-wrap justify-center items-center flex-grow
      bg-gray-100 px-10 md:flex-nowrap">
        <LeftContainer/>
        {/* <Visualization /> */}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
