import ContentBody from "./components/ContentBody";
import Header from "./components/Header";
import SlideBar from "./components/SlideBar";

function App() {
  return (
    <div className="w-11/12 md:w-3/4 lg:w-3/5 xl:w-2/4 2xl:w-2/5 mx-auto">
      <Header/>
      <div className="bg-sub-white pb-12 rounded-2xl w-full">
        <ContentBody/>
        <SlideBar/>
      </div>
    </div>
  );
}

export default App;
