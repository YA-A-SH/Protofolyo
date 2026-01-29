import { lazy, Suspense } from "react";
import "./App.css";
import Loader from "./Project/Else/Loader";
const AllConverter = lazy(() => import("./Project/Else/AllConverter"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <AllConverter />
      </Suspense>
    </>
  );
}

export default App;
