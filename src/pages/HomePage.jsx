import { Link } from 'react-router-dom';

import PostUtil from '../utils/post-util.js';
import HrefUtil from '../utils/href-util.js';
import DateUtil from '../utils/date-util.js';
import SeoHelper from '../components/SeoHelper.jsx';

import '../styles/pages/home/home-page.css';

const HomePage = () => {
  return (
    <>
      <SeoHelper
        title="sim.junghun — backend engineer"
        description="비즈니스 문제를 코드로 풀어내는 백엔드 엔지니어입니다. 배운 것을 정리하고, 깊이 이해하기 위해 기록합니다."
        type="website"
      />
      <div className="home">
        {/* ── whoami ── */}
        <div className="prompt">
          <span className="path">~</span>
          <span className="dollar">$</span>
          <span className="cmd">whoami</span>
        </div>
        <div className="output-box">
          <h1 className="hw-name">
            sim<span className="hw-dot">.</span>junghun
          </h1>
          <p className="hw-role">Backend Engineer</p>
          <p className="hw-bio">
            비즈니스 문제를 코드로 풀어내는 백엔드 엔지니어입니다.<br />
            배운 것을 정리하고, 깊이 이해하기 위해 기록합니다.
          </p>
        </div>

        <hr className="dashed-divider" />

        {/* ── stack ── */}
        <div className="prompt">
          <span className="path">~</span>
          <span className="dollar">$</span>
          <span className="cmd">cat</span>
          <span className="args">stack.yml</span>
        </div>
        <div className="output-box">
          <div className="home__stack-row">
            <span className="label">backend:</span>
            <div className="tags">
              <span className="tag tag--primary">Spring</span>
              <span className="tag tag--primary">Java</span>
              <span className="tag">Kotlin</span>
              <span className="tag">JPA</span>
            </div>
          </div>
          <div className="home__stack-row">
            <span className="label">infra:</span>
            <div className="tags">
              <span className="tag">Docker</span>
              <span className="tag">Kubernetes</span>
              <span className="tag">Redis</span>
            </div>
          </div>
          <div className="home__stack-row">
            <span className="label">frontend:</span>
            <div className="tags">
              <span className="tag">React</span>
            </div>
          </div>
        </div>

        <hr className="dashed-divider" />

        {/* ── recent posts ── */}
        <div className="prompt">
          <span className="path">~</span>
          <span className="dollar">$</span>
          <span className="cmd">ls</span>
          <span className="args">-lt posts/</span>
          <span className="pipe">|</span>
          <span className="cmd">head</span>
          <span className="args">-5</span>
        </div>
        <div className="home__total">
          total {PostUtil.latestPosts.length} entries
        </div>
        <div className="output-box">
          {PostUtil.latestPosts.map((post) => {
            const lastCategory = post.categories[post.categories.length - 1];
            const date = DateUtil.formatLs(post.createdDate);
            return (
              <Link
                key={post.path}
                className="home__post-row"
                to={HrefUtil.getPostDetailHref({ path: post.path })}
              >
                <span className="cat">{lastCategory}</span>
                <span className="time">{post.readingTime}min</span>
                <span className="date">{date}</span>
                <span className="title">{post.title}</span>
              </Link>
            );
          })}
        </div>
        <div className="home__cd">
          <Link to="/posts">
            <span className="dollar">$</span>{' '}
            <span className="cmd">cd posts/</span>{' '}
            <span className="arrow">→</span>
          </Link>
        </div>

        <hr className="dashed-divider" />

        {/* ── links ── */}
        <div className="prompt">
          <span className="path">~</span>
          <span className="dollar">$</span>
          <span className="cmd">cat</span>
          <span className="args">links.txt</span>
        </div>
        <div className="output-box">
          <a className="home__links-row" href="https://github.com/bak-libra26" target="_blank" rel="noopener noreferrer">
            <span className="label">github</span>
            <span className="value">github.com/bak-libra26</span>
          </a>
          <a className="home__links-row" href="mailto:bak-libra26@gmail.com">
            <span className="label">email</span>
            <span className="value">bak-libra26@gmail.com</span>
          </a>
          <Link className="home__links-row" to="/about">
            <span className="label">about</span>
            <span className="value">~/about</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
