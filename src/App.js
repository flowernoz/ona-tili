import Router from "./Routes";
import useScrollToTop from "./hooks/scrollToTop";

function App() {
  const scrollToTop = useScrollToTop();

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      {scrollToTop}
      <div className="max-w-screen-xl mx-auto">
        <Router />
      </div>
    </div>
  );
}

export default App;
