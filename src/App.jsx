import {Route,Routes} from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import PostsPage from "./pages/PostsPage.jsx";
import PostDetailPage from "./pages/PostDetailPage.jsx";
import useGoogleAnalytics from "./hooks/ga4/useGoogleAnalytics.jsx";

function App() {
    useGoogleAnalytics();

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path={'/'} element={<HomePage />}/>

                {/* /posts 전체 목록 페이지 */}
                <Route path={'/posts'} element={<PostsPage />} />

                {/* /posts/* 상세 페이지 */}
                <Route path={'/posts/*'} element={<PostDetailPage />} />
            </Route>

        </Routes>
    );
}

export default App;
