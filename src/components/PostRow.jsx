/**
 * @file PostRow - 게시글 목록에서 개별 게시글 한 줄을 렌더링하는 컴포넌트
 *
 * 터미널의 `ls -l` 출력을 모방한 UI로, 파일 퍼미션·작성자·카테고리·읽기 시간·날짜·제목을 표시한다.
 * React.memo로 메모이제이션되어 불필요한 재렌더링을 방지한다.
 */
import { memo } from 'react';
import { Link } from 'react-router-dom';
import HrefUtil from '../utils/href-util.js';
import DateUtil from '../utils/date-util.js';
import '../styles/components/post-row.css';

/**
 * 게시글 행 컴포넌트 (메모이제이션 적용)
 * @param {Object} props
 * @param {Object} props.post - 게시글 데이터 객체
 * @param {string[]} props.post.categories - 게시글이 속한 카테고리 배열 (마지막 요소가 가장 구체적인 카테고리)
 * @param {string} props.post.createdDate - 게시글 작성일
 * @param {string} props.post.path - 게시글 고유 경로
 * @param {number} props.post.readingTime - 예상 읽기 시간 (분)
 * @param {string} props.post.title - 게시글 제목
 * @param {string} [props.post.summary] - 게시글 요약 (선택적)
 * @param {string[]} props.post.tags - 태그 배열
 * @returns {JSX.Element} 터미널 스타일의 게시글 행
 */
const PostRow = memo(({ post }) => {
  /** 가장 하위(구체적인) 카테고리 추출 */
  const lastCategory = post.categories[post.categories.length - 1];
  /** ls 명령어 형식으로 날짜 포맷팅 */
  const date = DateUtil.formatLs(post.createdDate);

  return (
    <Link className="post-row" to={HrefUtil.getPostDetailHref({ path: post.path })}>
      <span className="pr-perm">-rw-r--r--</span>
      <span className="pr-owner">junghun</span>
      <span className="pr-cat">{lastCategory}</span>
      <span className="pr-size">{post.readingTime}min</span>
      <span className="pr-date">{date}</span>
      <div className="pr-title-cell">
        <span className="pr-title">{post.title}</span>
        {post.summary && <p className="pr-summary">{post.summary}</p>}
        {post.tags.length > 0 && (
          <div className="pr-tags">
            {post.tags.map((tag, i) => (
              <span key={tag} className={`tag${i === 0 ? ' tag--primary' : ''}`}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
});
PostRow.displayName = 'PostRow';

export default PostRow;
