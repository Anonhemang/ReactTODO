import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddCont from "./component/AddCont";
import Index from "./component/Index";
import Edit from "./component/Edit";
import View from "./component/View";
import Completed from "./component/Completed";
import Incomplete from "./component/Incomplete";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Index" element={<Index />} />
        <Route path="/" element={<AddCont />} />
        <Route path="/Completed" element={<Completed />} />
        <Route path="/Incompleted" element={<Incomplete />} />
        <Route path="/Edit/:id" element={<Edit />} />
        <Route path="/View/:id" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
