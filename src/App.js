// src/App.js
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import GlobalStyle from "./styles/GlobalStyle"; // ✅ 추가

function App() {
  return (
    <>
      <GlobalStyle /> {/* ✅ 전역 스타일 적용 */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
