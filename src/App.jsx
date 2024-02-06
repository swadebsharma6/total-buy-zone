import { Outlet } from "react-router-dom";
import Header from "./components/shared/Header";


const App = () => {
  return (
    <div className="w-full mx-auto">
      <Header/>
      <Outlet/>
    </div>
  );
};

export default App;