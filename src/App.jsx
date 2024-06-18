import Faq from "./components/FAQ";

function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-indigo-500 to-blue-600">
      <div className="p-4">
        <Faq />
        <h1 className="m-4 font-semibold">I am below the accordian menu!</h1>
      </div>
    </div>
  );
}

export default App;
