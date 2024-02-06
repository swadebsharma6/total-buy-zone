import { Outlet } from "react-router-dom";


const App = () => {
  return (
    <div className="w-full mx-auto">
      <Outlet/>
    </div>
  );
};

export default App;