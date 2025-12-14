import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

    return (
        <main className="container not-found-container">
            <div className="not-found-watermark">
                404
            </div>
            <h2 className="not-found-title">
                글을 찾을 수 없습니다
            </h2>
            <p className="not-found-text">
                요청하신 페이지가 삭제되었거나 잘못된 경로입니다.<br />
                다른 글을 찾아보시거나 이전 페이지로 돌아가주세요.
            </p>
            <button
                onClick={() => navigate('/')}
                className="not-found-button"
            >
                메인으로 가기
            </button>
        </main>
    );
}

export default NotFound;
