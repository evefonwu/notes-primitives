import "./App.css";
import DialogDemo from "./components/DialogDemo";
import LabelDemo from "./components/LabelDemo";
import PopoverDemo from "./components/PopoverDemo";
import TabsDemo from "./components/TabDemo";
import ToastDemoSimple from "./components/ToastDemoSimple";

function App() {
  return (
    <div className="flex flex-col gap-10 px-10 py-10">
      <div className="flex">
        <TabsDemo />
      </div>

      <div className="flex">
        <ToastDemoSimple />
      </div>

      <div className="flex">
        <DialogDemo />
      </div>

      <div className="flex flex-col gap-1 py-3 w-60">
        <LabelDemo />
      </div>

      <div className="flex">
        <PopoverDemo />
      </div>
    </div>
  );
}

export default App;
