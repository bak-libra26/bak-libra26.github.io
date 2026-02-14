import {Route, Routes} from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import PostUtil from "./utils/post-util.js";
import PostsPage from "./pages/PostsPage.jsx";
import PostDetailPage from "./pages/PostDetailPage.jsx";

function App() {

  return (
      <Routes>
          <Route element={<Layout />}>
              <Route path="/" element={<HomePage />}/>

              {/* /posts 전체 목록 페이지 */}
              <Route path="/posts" element={<PostsPage />} />

              {/* /posts/슬러그 상세 페이지 */}
              <Route path="/posts/:slug" element={<PostDetailPage />} />
          </Route>

      </Routes>

  );
}

export default App;
