/**
 * @file AboutPage.jsx - 소개(About) 페이지
 *
 * Unix man 페이지 스타일로 구성된 자기소개 페이지이다.
 * 섹션 구조:
 *   NAME        — 이름과 직책
 *   SYNOPSIS    — 한 줄 소개
 *   DESCRIPTION — 핵심 역량 (Core Competencies)
 *   EXPERIENCE  — 경력 사항
 *   STACK       — 기술 스택
 *   EDUCATION   — 학력 및 교육 이수
 *   SEE ALSO    — 외부 링크 (GitHub, 이메일)
 *
 * 보조 컴포넌트:
 *   - Competency: 핵심 역량 항목 렌더링
 *   - StackRow: 기술 스택 행 렌더링
 *   - LinkRow: 외부 링크 행 렌더링
 *
 * @exports AboutPage
 */

import SeoHelper from '../components/SeoHelper.jsx';
import '../styles/pages/about/about-page.css';

const AboutPage = () => (
  <>
    <SeoHelper
      title="About — sim.junghun"
      description="백엔드 엔지니어 심정훈의 소개 페이지입니다."
      type="website"
    />
    <div className="about">

      {/* ── NAME ── */}
      <div className="section-gap">
        <div className="prompt">
          <span className="path">~</span>
          <span className="dollar">$</span>
          <span className="cmd">man</span>
          <span className="args">sim.junghun</span>
        </div>
        <div className="output-box">
          <div className="man-section__title">NAME</div>
          <div className="man-section__body">
            <span className="man-name">sim<span style={{ color: 'var(--green)' }}>.</span>junghun</span>{' '}
            <span className="man-role">&mdash; Backend Engineer</span>
          </div>
        </div>
      </div>

      <hr className="dashed-divider" />

      {/* ── SYNOPSIS ── */}
      <div className="section-gap">
        <div className="prompt">
          <span className="path">~/about</span>
          <span className="dollar">$</span>
          <span className="cmd">cat</span>
          <span className="args">synopsis.txt</span>
        </div>
        <div className="output-box">
          <div className="man-section__title">SYNOPSIS</div>
          <div className="man-section__body">
            <p>비즈니스 문제를 코드로 풀어내는 백엔드 엔지니어입니다.</p>
            <p>배운 것을 정리하고, 깊이 이해하기 위해 기록합니다.</p>
            <p>Spring 기반의 서버 개발을 주로 하며, 안정적이고 확장 가능한 시스템을 설계하는 것에 관심이 있습니다.</p>
          </div>
        </div>
      </div>

      <hr className="dashed-divider" />

      {/* ── DESCRIPTION ── */}
      <div className="section-gap">
        <div className="prompt">
          <span className="path">~/about</span>
          <span className="dollar">$</span>
          <span className="cmd">cat</span>
          <span className="args">core.yml</span>
        </div>
        <div className="output-box">
          <div className="man-section__title">DESCRIPTION</div>
          <div className="man-section__body">
            <div className="man-subsection-title">Core Competencies</div>
            <Competency title="Backend Engineering" desc="Spring 기반의 RESTful API 설계 및 개발. 비즈니스 로직을 견고하고 확장 가능한 구조로 구현합니다." />
            <Competency title="System Design" desc="MSA, 메시지 큐, 캐싱 등을 활용하여 확장 가능한 시스템 아키텍처를 설계합니다." />
            <Competency title="Technical Writing" desc="학습한 내용을 체계적으로 정리하고 공유하여 지식을 확산합니다." />
          </div>
        </div>
      </div>

      <hr className="dashed-divider" />

      {/* ── EXPERIENCE ── */}
      <div className="section-gap">
        <div className="prompt">
          <span className="path">~/about</span>
          <span className="dollar">$</span>
          <span className="cmd">cat</span>
          <span className="args">experience.yml</span>
        </div>
        <div className="output-box">
          <div className="man-section__title">EXPERIENCE</div>
          <div className="man-section__body">
            <div className="man-exp-item">
              <div className="man-exp-header">
                <span className="man-exp-company">스탠다드네트웍스 / 전송개발팀</span>
                <span className="man-exp-period">2023.08 ~ 2025.12</span>
              </div>
              <div className="man-exp-role">Backend Engineer</div>
              <div className="man-exp-desc">
                <div className="man-exp-bullet"><span className="marker">▸</span> Spring Boot·Spring Cloud 기반 MSA 메시지 전송 플랫폼 개발</div>
                <div className="man-exp-bullet"><span className="marker">▸</span> 이통 3사 및 중계사 연동 프로세스 설계·구현</div>
                <div className="man-exp-bullet"><span className="marker">▸</span> 운영 관리 페이지 개발 및 유지보수</div>
                <div className="man-exp-bullet"><span className="marker">▸</span> Jenkins·Nexus 기반 CI/CD 파이프라인 구축</div>
              </div>
              <div className="man-exp-stack">
                <span className="tag tag--primary">Java</span>
                <span className="tag tag--primary">Spring Boot</span>
                <span className="tag">Netty</span>
                <span className="tag">Spring WebFlux</span>
                <span className="tag">JPA</span>
                <span className="tag">MyBatis</span>
                <span className="tag">MySQL</span>
                <span className="tag">Redis</span>
                <span className="tag">RabbitMQ</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="dashed-divider" />

      {/* ── STACK ── */}
      <div className="section-gap">
        <div className="prompt">
          <span className="path">~/about</span>
          <span className="dollar">$</span>
          <span className="cmd">cat</span>
          <span className="args">stack.yml</span>
        </div>
        <div className="output-box">
          <div className="man-section__title">STACK</div>
          <div className="man-section__body">
            <StackRow label="backend:" tags={['Java', 'Spring Boot', 'Spring Security', 'Kotlin', 'JPA', 'Netty']} primary={['Java', 'Spring Boot', 'Spring Security']} />
            <StackRow label="infra:" tags={['Docker', 'Kubernetes', 'Jenkins', 'RabbitMQ', 'Redis']} />
            <StackRow label="frontend:" tags={['React', 'JavaScript', 'HTML/CSS', 'Flutter']} />
          </div>
        </div>
      </div>

      <hr className="dashed-divider" />

      {/* ── EDUCATION ── */}
      <div className="section-gap">
        <div className="prompt">
          <span className="path">~/about</span>
          <span className="dollar">$</span>
          <span className="cmd">cat</span>
          <span className="args">education.yml</span>
        </div>
        <div className="output-box">
          <div className="man-section__title">EDUCATION</div>
          <div className="man-section__body">
            <div className="man-edu-row"><span className="institution">서울사이버대학교</span><span className="status">재학중</span></div>
            <div className="man-edu-detail"><span className="degree">컴퓨터공학과</span><span className="date">2025.03 ~</span></div>

            <div className="man-edu-row"><span className="institution">한국산업인력공단</span></div>
            <div className="man-edu-detail"><span className="degree">정보기기운용기능사</span><span className="date">2025.04</span></div>

            <div className="man-edu-row"><span className="institution">KT DS</span></div>
            <div className="man-edu-detail"><span className="degree">Docker 클라우드 컨테이너 기반 아키텍처 이해와 실습</span><span className="date">2024.10</span></div>
            <div className="man-edu-detail"><span className="degree">자바를 이용한 프로그래밍 실무</span><span className="date">2024.07</span></div>

            <div className="man-edu-row"><span className="institution">멀티캠퍼스</span></div>
            <div className="man-edu-detail">
              <span className="degree">데이터 사이언스/엔지니어링 전문가 과정</span><span className="date">2021.12 ~ 2022.05</span>
              <div style={{ marginTop: '4px' }}><span className="award">▸ 최우수상</span>&nbsp;&nbsp;<span className="award">▸ 우수상</span></div>
            </div>
          </div>
        </div>
      </div>

      <hr className="dashed-divider" />

      {/* ── SEE ALSO ── */}
      <div className="section-gap">
        <div className="prompt">
          <span className="path">~/about</span>
          <span className="dollar">$</span>
          <span className="cmd">cat</span>
          <span className="args">links.txt</span>
        </div>
        <div className="output-box">
          <div className="man-section__title">SEE ALSO</div>
          <div className="man-section__body">
            <LinkRow label="github" href="https://github.com/bak-libra26" value="github.com/bak-libra26" />
            <LinkRow label="email" href="mailto:bak-libra26@gmail.com" value="bak-libra26@gmail.com" />
          </div>
        </div>
        <div className="man-footer">
          <span>sim.junghun(1)</span>
          <span>March 2026</span>
        </div>
      </div>

    </div>
  </>
);

/** Competency - 핵심 역량 항목 (제목 + 설명) */
const Competency = ({ title, desc }) => (
  <div className="man-competency">
    <div className="man-competency__title"><span className="marker">▸</span> {title}</div>
    <div className="man-competency__desc">{desc}</div>
  </div>
);

/** StackRow - 기술 스택 행 (라벨 + 태그 목록, primary 배열에 포함된 태그는 강조 표시) */
const StackRow = ({ label, tags, primary = [] }) => (
  <div className="man-stack-row">
    <span className="label">{label}</span>
    <span className="tags">
      {tags.map((t) => (
        <span key={t} className={`tag${primary.includes(t) ? ' tag--primary' : ''}`}>{t}</span>
      ))}
    </span>
  </div>
);

/** LinkRow - 외부 링크 행 (mailto:인 경우 target/rel 속성을 생략) */
const LinkRow = ({ label, href, value }) => (
  <div className="man-link-row">
    <span className="label">{label}</span>
    <a className="value" href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}>{value}</a>
  </div>
);

export default AboutPage;
