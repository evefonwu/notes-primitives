import "./App.css";
import DemoLabel from "./components/DemoLabel";
import DemoPopover from "./components/DemoPopover";

function App() {
  return (
    <div className="flex flex-col gap-10 px-10">
      <div className="flex flex-col gap-2 bg-amber-200 py-3">
        <DemoLabel />
      </div>
      <DemoPopover />
    </div>
  );
}

export default App;
