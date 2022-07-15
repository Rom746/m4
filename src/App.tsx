import { BrowserRouter, Route, Routes } from "react-router-dom";
import Empty from "./components/Empty";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Empty title='content' />} />
        <Route path="/type" element={<Empty title='type' />} />
        <Route path="/product" element={<Empty title='product' />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
