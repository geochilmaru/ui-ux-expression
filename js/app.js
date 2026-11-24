/**
 * UI-UX & Motion Cheat Sheet - Exact Video Frame Recreation Engine
 * Reproduces the live animation movement of all 48 cards from "코드깎는노인" videos
 */

document.addEventListener('DOMContentLoaded', () => {
  // State
  let currentTab = 'ui'; // 'ui' | 'motion'
  let searchQuery = '';
  let videoCategoryFilter = 'all';
  let animationsPaused = false;

  // DOM Elements
  const tabBtnUi = document.getElementById('tabBtnUi');
  const tabBtnMotion = document.getElementById('tabBtnMotion');
  const tabBtnVideo = document.getElementById('tabBtnVideo');
  const boardContainer = document.getElementById('boardContainer');
  const searchInput = document.getElementById('searchInput');
  const btnToggleAnim = document.getElementById('btnToggleAnim');
  const formulaBanner = document.getElementById('formulaBanner');
  
  // Drawer Elements
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const detailDrawer = document.getElementById('detailDrawer');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawerCatBadge = document.getElementById('drawerCatBadge');
  const drawerNumBadge = document.getElementById('drawerNumBadge');
  const drawerTitle = document.getElementById('drawerTitle');
  const drawerSubtitle = document.getElementById('drawerSubtitle');
  const drawerDesc = document.getElementById('drawerDesc');
  const drawerPrompt = document.getElementById('drawerPrompt');
  const btnCopyPrompt = document.getElementById('btnCopyPrompt');
  const toastNotice = document.getElementById('toastNotice');

  // Tab Switching
  function switchTab(tabKey) {
    currentTab = tabKey;
    tabBtnUi.classList.toggle('active', tabKey === 'ui');
    tabBtnMotion.classList.toggle('active', tabKey === 'motion');
    if (tabBtnVideo) tabBtnVideo.classList.toggle('active', tabKey === 'video');
    renderFormulaBanner();
    renderBoard();
  }

  tabBtnUi.addEventListener('click', () => switchTab('ui'));
  tabBtnMotion.addEventListener('click', () => switchTab('motion'));
  if (tabBtnVideo) tabBtnVideo.addEventListener('click', () => switchTab('video'));

  // Search Filter
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    renderBoard();
  });

  // Toggle Animations
  btnToggleAnim.addEventListener('click', () => {
    animationsPaused = !animationsPaused;
    document.body.classList.toggle('pause-animations', animationsPaused);
    btnToggleAnim.innerHTML = animationsPaused 
      ? '<span>▶</span> 재생' 
      : '<span>⏸</span> 일시정지';
  });

  // Render Formula Banner
  function renderFormulaBanner() {
    const data = CHEAT_SHEET_DATA[currentTab];
    const f = data.formula;
    formulaBanner.innerHTML = `
      <div class="formula-content">
        <span class="formula-tag">${f.tag}</span>
        <span class="formula-rule"><mark>${f.text}</mark></span>
      </div>
      <div class="formula-example">
        <span>예시:</span>
        <code>"${f.example}"</code>
      </div>
    `;
  }

  // Exact Visual Mockup HTML for each card
  function getPreviewHtml(item, tab) {
    if (tab === 'ui') {
      switch (item.id) {
        case 'hero-section':
          return `
            <div class="mock-hero">
              <div class="mock-hero-left">
                <div class="mock-bar-title"></div>
                <div class="mock-bar-sub"></div>
                <div class="mock-btn-cta"></div>
              </div>
              <div class="mock-hero-right">
                <div class="mock-grid-box"></div>
                <div class="mock-grid-box"></div>
                <div class="mock-grid-box"></div>
                <div class="mock-grid-box"></div>
                <div class="mock-grid-box"></div>
                <div class="mock-grid-box"></div>
              </div>
              <div class="mock-hero-cursor">▲</div>
            </div>
          `;
        case 'responsive-layout':
          return `
            <div class="mock-resp-frame">
              <div class="mock-resp-top">
                <div class="mock-bar-sub" style="width: 50%;"></div>
                <div class="mock-resp-dot"></div>
              </div>
              <div class="mock-resp-grid">
                <div class="mock-resp-card"></div>
                <div class="mock-resp-card"></div>
              </div>
            </div>
          `;
        case 'card-layout':
          return `
            <div class="mock-cards-row">
              <div class="mock-mini-card c-card-1">
                <div class="mock-card-badge badge-c1"></div>
                <div class="mock-card-line"></div>
              </div>
              <div class="mock-mini-card c-card-2">
                <div class="mock-card-badge badge-c2"></div>
                <div class="mock-card-line"></div>
              </div>
              <div class="mock-mini-card c-card-3">
                <div class="mock-card-badge badge-c3"></div>
                <div class="mock-card-line"></div>
              </div>
            </div>
          `;
        case 'bento-grid':
          return `
            <div class="mock-bento">
              <div class="bento-1"><div class="bento-wave"></div></div>
              <div class="bento-2"></div>
              <div class="bento-3"></div>
            </div>
          `;
        case 'sidebar-layout':
          return `
            <div class="mock-sidebar-layout">
              <div class="mock-sb-bar">
                <div class="mock-sb-icon sb-i1"></div>
                <div class="mock-sb-icon sb-i2"></div>
                <div class="mock-sb-icon sb-i3"></div>
              </div>
              <div class="mock-sb-main">
                <div class="mock-sb-line"></div>
                <div class="mock-sb-line" style="width: 65%;"></div>
                <div class="mock-sb-line" style="width: 80%;"></div>
              </div>
            </div>
          `;
        case 'sticky-header':
          return `
            <div class="mock-sticky">
              <div class="mock-sticky-nav">
                <div class="mock-sticky-dot"></div>
                <div class="mock-sticky-dot"></div>
              </div>
              <div class="mock-sticky-content">
                <div class="mock-sb-line"></div>
                <div class="mock-sb-line" style="width: 70%;"></div>
                <div class="mock-sb-line" style="width: 85%;"></div>
                <div class="mock-sb-line"></div>
                <div class="mock-sb-line" style="width: 60%;"></div>
              </div>
            </div>
          `;
        case 'split-layout':
          return `
            <div class="mock-split">
              <div class="mock-split-left"></div>
              <div class="mock-split-right">
                <div class="mock-sb-line"></div>
                <div class="mock-sb-line" style="width: 60%;"></div>
                <div class="mock-sb-line" style="width: 80%;"></div>
              </div>
            </div>
          `;
        case 'tabs':
          return `
            <div class="mock-tabs">
              <div class="mock-tab-heads">
                <div class="mock-tab-item"></div>
                <div class="mock-tab-item"></div>
                <div class="mock-tab-item"></div>
                <div class="mock-tab-slider"></div>
              </div>
              <div class="mock-tab-body">
                <div class="mock-tab-cta"></div>
              </div>
            </div>
          `;
        case 'accordion':
          return `
            <div class="mock-accordion">
              <div class="mock-acc-item"><span>소개</span><span class="acc-chevron">∨</span></div>
              <div class="mock-acc-item acc-dynamic">
                <div style="display:flex; flex-direction:column; gap:2px; width:75%;">
                  <span>주요 특징 (열림)</span>
                  <div class="mock-sb-line" style="width:90%; height:2px;"></div>
                </div>
                <span class="acc-chevron">∧</span>
              </div>
              <div class="mock-acc-item"><span>요금</span><span class="acc-chevron">∨</span></div>
            </div>
          `;
        case 'modal-dialog':
          return `
            <div class="mock-modal-overlay">
              <div class="mock-modal-box">
                <div class="mock-sb-line" style="width: 65%;"></div>
                <div class="mock-modal-btn"></div>
              </div>
            </div>
          `;
        case 'drawer':
          return `
            <div class="mock-drawer-container">
              <div class="mock-drawer-panel">
                <div class="mock-drawer-toggle"></div>
                <div class="mock-drawer-toggle" style="background:#cbd5e1;"></div>
                <div class="mock-drawer-toggle"></div>
              </div>
            </div>
          `;
        case 'dropdown':
          return `
            <div class="mock-dropdown">
              <div class="mock-dd-trigger">
                <span>정렬 방식</span>
                <span>▾</span>
              </div>
              <div class="mock-dd-menu">
                <div class="mock-dd-item"></div>
                <div class="mock-dd-item" style="width: 75%;"></div>
              </div>
            </div>
          `;
        case 'tooltip':
          return `
            <div class="mock-tooltip-box">
              <div class="mock-tip-bubble">안내 툴팁</div>
              <div class="mock-tip-target">?</div>
            </div>
          `;
        case 'toast-snackbar':
          return `
            <div class="mock-toast-container">
              <div class="mock-toast-pill">
                <span style="color:#10b981;">✓</span> 저장되었습니다
              </div>
            </div>
          `;
        case 'carousel':
          return `
            <div class="mock-carousel">
              <span class="mock-car-arrow">‹</span>
              <div class="mock-car-cards">
                <div class="mock-car-card"></div>
                <div class="mock-car-card active"></div>
                <div class="mock-car-card"></div>
              </div>
              <span class="mock-car-arrow">›</span>
            </div>
          `;
        case 'skeleton-loading':
          return `
            <div class="mock-skeleton">
              <div class="mock-skel-avatar"></div>
              <div class="mock-skel-lines">
                <div class="mock-skel-line" style="width: 88%;"></div>
                <div class="mock-skel-line" style="width: 58%;"></div>
              </div>
            </div>
          `;
        case 'hover-effect':
          return `
            <div class="mock-hover-group">
              <div class="mock-hov-btn hov-p1">Hover</div>
              <div class="mock-hov-btn hov-p2">Normal</div>
            </div>
          `;
        case 'scroll-reveal':
          return `
            <div class="mock-reveal-box">
              <div class="mock-rev-item rev-1"></div>
              <div class="mock-rev-item rev-2"></div>
            </div>
          `;
        case 'stagger-animation':
          return `
            <div class="mock-stagger">
              <div class="mock-stag-row">
                <div class="mock-stag-bar stag-1"></div>
                <div class="mock-stag-bar stag-2"></div>
                <div class="mock-stag-bar stag-3"></div>
                <div class="mock-stag-bar stag-4"></div>
              </div>
              <div style="font-size:7px; color:var(--text-dim); text-align:center;">0.1s 순차 딜레이</div>
            </div>
          `;
        case 'smooth-transition':
          return `
            <div class="mock-smooth-switch">
              <div class="mock-toggle-track">
                <div class="mock-toggle-thumb"></div>
              </div>
              <svg class="mock-bezier-curve" viewBox="0 0 50 12">
                <path d="M 0 10 C 20 10, 30 2, 50 2" stroke="#6366f1" stroke-width="2.5" fill="none"/>
              </svg>
            </div>
          `;
        case 'glassmorphism':
          return `
            <div class="mock-glass-container">
              <div class="mock-glass-orb"></div>
              <div class="mock-glass-card">
                <div class="mock-glass-line"></div>
                <div class="mock-glass-line" style="width: 45%;"></div>
              </div>
            </div>
          `;
        case 'parallax-scrolling':
          return `
            <div class="mock-parallax">
              <div class="para-moon"></div>
              <div class="para-horizon"></div>
              <div class="para-text"></div>
            </div>
          `;
        case 'scroll-snap':
          return `
            <div class="mock-snap">
              <div style="width: 50%; height: 4px; background: rgba(255,255,255,0.7); border-radius: 2px;"></div>
              <div class="mock-snap-dots">
                <div class="snap-dot"></div>
                <div class="snap-dot active"></div>
                <div class="snap-dot"></div>
              </div>
            </div>
          `;
        case 'micro-interaction':
          return `
            <div class="mock-heart-btn" title="Click heart!">
              ❤️
            </div>
          `;
        default:
          return `<div style="font-size: 10px; color: var(--text-dim);">UI</div>`;
      }
    } else if (tab === 'motion') {
      // Motion Tab (24 terms)
      switch (item.id) {
        case 'fade':
          return `
            <div class="motion-fade-card">
              <div class="fade-line-dark"></div>
              <div class="fade-badge-purple"></div>
            </div>
          `;
        case 'slide':
          return `
            <div class="motion-slide-track">
              <div class="motion-slide-pill"></div>
            </div>
          `;
        case 'scale':
          return `
            <div class="motion-scale-box">
              <div class="scale-cart-icon">🛒</div>
              <div class="scale-badge">3</div>
            </div>
          `;
        case 'easing':
          return `
            <div class="motion-easing-box">
              <div class="easing-track"><div class="ease-bar-cyan"></div></div>
              <div class="easing-track"><div class="ease-bar-purple"></div></div>
            </div>
          `;
        case 'spring':
          return `
            <div class="motion-spring-box">
              <div class="spring-dashed-line"></div>
              <div class="spring-pill">→</div>
            </div>
          `;
        case 'bounce':
          return `
            <div class="motion-bounce-box">
              <div class="bounce-circle">✓</div>
              <div class="bounce-ground"></div>
            </div>
          `;
        case 'duration-delay':
          return `
            <div class="motion-dur-del">
              <div class="dur-fast"></div>
              <div class="dur-slow"></div>
              <div class="dur-timeline-guide"></div>
            </div>
          `;
        case 'loop':
          return `
            <div class="motion-loop-card">
              <div class="loop-bar-blue"></div>
              <div class="loop-bar-green"></div>
            </div>
          `;
        case 'typewriter':
          return `
            <div class="typewriter-text">
              <span id="twTarget">할 일 정리</span><span class="tw-cursor"></span>
            </div>
          `;
        case 'text-scramble':
          return `
            <div class="scramble-text" id="scrambleTarget" data-text="빈틈없는 보안">
              빈틈없는 보안
            </div>
          `;
        case 'split-text':
          return `
            <div class="split-char-box">
              <span class="split-char" style="animation-delay: 0.1s;">흩</span>
              <span class="split-char" style="animation-delay: 0.22s;">어</span>
              <span class="split-char" style="animation-delay: 0.34s;">진</span>
              <span class="split-char" style="animation-delay: 0.46s;">&nbsp;</span>
              <span class="split-char" style="animation-delay: 0.58s;">일</span>
              <span class="split-char" style="animation-delay: 0.70s;">을</span>
            </div>
          `;
        case 'count-up':
          return `
            <div class="count-up-box">
              <div class="count-label">함께 쓰는 팀</div>
              <div class="count-val" id="countValTarget">11,755+</div>
            </div>
          `;
        case 'line-drawing':
          return `
            <svg class="line-draw-svg" viewBox="0 0 160 52">
              <path class="line-draw-path" d="M 10 40 Q 40 10, 80 30 T 150 15" />
              <circle class="line-draw-dot" cx="150" cy="15" r="4.5" />
            </svg>
          `;
        case 'morphing':
          return `
            <div class="morph-icon-box" title="Morphing Hamburger to Close">
              <div class="morph-bar-1"></div>
              <div class="morph-bar-2"></div>
              <div class="morph-bar-3"></div>
            </div>
          `;
        case 'marquee':
          return `
            <div class="marquee-wrapper">
              <div class="marquee-track">
                <span class="marquee-item">● HANUL</span>
                <span class="marquee-item">● mokri</span>
                <span class="marquee-item">● STUDIO</span>
                <span class="marquee-item">● HANUL</span>
                <span class="marquee-item">● mokri</span>
              </div>
            </div>
          `;
        case 'motion-path':
          return `
            <div class="motion-path-box">
              <div class="path-arc"></div>
              <div class="path-cart"></div>
            </div>
          `;
        case 'page-transition':
          return `
            <div class="page-trans-screen">
              <div class="page-trans-overlay"></div>
            </div>
          `;
        case 'shared-element':
          return `
            <div class="shared-elem-box">
              <div class="shared-thumb"></div>
              <div class="shared-content">
                <div class="mock-sb-line" style="width: 75%;"></div>
                <div class="mock-sb-line" style="width: 45%;"></div>
              </div>
            </div>
          `;
        case 'pin-scrollytelling':
          return `
            <div class="pin-scrolly-box">
              <div class="pin-card-num" id="pinNum">3</div>
              <div class="pin-progress-track">
                <div class="pin-progress-bar"></div>
              </div>
            </div>
          `;
        case 'horizontal-scroll':
          return `
            <div class="h-scroll-box">
              <div class="h-mouse-icon"><div class="h-mouse-wheel"></div></div>
              <div class="h-cards-stream">
                <div class="h-card-slide hc-1"></div>
                <div class="h-card-slide hc-2"></div>
                <div class="h-card-slide hc-1"></div>
              </div>
            </div>
          `;
        case 'magnetic-button':
          return `
            <div class="mag-btn-wrapper">
              <div class="mag-dashed-ring"></div>
              <button class="mag-button">시작하기</button>
            </div>
          `;
        case 'custom-cursor':
          return `
            <div class="custom-cursor-demo">
              <div class="cursor-target-btn">보기</div>
              <div class="cursor-dot"></div>
            </div>
          `;
        case '3d-tilt':
          return `
            <div class="tilt-card-demo" id="demoTiltCard">
              <div class="tilt-glare"></div>
              <div class="tilt-price">9,900원</div>
              <div class="tilt-bar"></div>
            </div>
          `;
        case 'confetti':
          return `
            <div class="confetti-demo-box">
              <canvas class="confetti-particles" width="120" height="48"></canvas>
              <div class="confetti-pill">
                <span style="color:#10b981;">✓</span> 결제 완료
              </div>
            </div>
          `;
        default:
          return `<div style="font-size: 10px; color: var(--text-dim);">Motion</div>`;
      }

    } else if (tab === 'video') {
      switch (item.id) {
        case 'dolly-in':
          return `
            <div class="v-preview v-dolly-in">
              <div class="v-cam-grid"></div>
              <div class="v-char-orange"></div>
            </div>
          `;
        case 'zoom-in':
          return `
            <div class="v-preview v-zoom-in">
              <div class="v-bg-trees"></div>
              <div class="v-char-orange"></div>
              <div class="v-viewfinder"></div>
            </div>
          `;
        case 'pan-tilt':
          return `
            <div class="v-preview v-pan-tilt">
              <div class="v-pan-world">
                <div class="v-houses"></div>
                <div class="v-hills"></div>
                <div class="v-sky"><div class="v-sun"></div></div>
              </div>
            </div>
          `;
        case 'tracking-shot':
          return `
            <div class="v-preview v-tracking">
              <div class="v-track-bg"></div>
              <div class="v-track-ground"></div>
              <div class="v-char-orange walking"></div>
            </div>
          `;
        case 'crane-shot':
          return `
            <div class="v-preview v-crane">
              <div class="v-crane-world">
                <div class="v-char-orange small"></div>
                <div class="v-village"></div>
              </div>
            </div>
          `;
        case 'dolly-zoom':
          return `
            <div class="v-preview v-dolly-zoom">
              <div class="v-dz-bg"></div>
              <div class="v-char-orange static"></div>
            </div>
          `;
        case 'arc-shot':
          return `
            <div class="v-preview v-arc">
              <div class="v-arc-orbit">
                <div class="v-char-orange"></div>
                <div class="v-arc-cam">🎥</div>
              </div>
            </div>
          `;
        case 'crash-zoom':
          return `
            <div class="v-preview v-crash-zoom">
              <div class="v-char-orange"></div>
              <div class="v-zoom-lines"></div>
            </div>
          `;
        case 'handheld':
          return `
            <div class="v-preview v-handheld">
              <div class="v-char-orange"></div>
              <div class="v-rec-dot">● REC</div>
            </div>
          `;
        case 'high-angle':
          return `
            <div class="v-preview v-high-angle">
              <div class="v-playground-top">
                <div class="v-char-orange tiny"></div>
                <div class="v-swing-shadow"></div>
              </div>
            </div>
          `;
        case 'low-angle':
          return `
            <div class="v-preview v-low-angle">
              <div class="v-low-horizon"></div>
              <div class="v-char-orange giant"></div>
            </div>
          `;
        case 'birds-eye-view':
          return `
            <div class="v-preview v-birds-eye">
              <div class="v-topdown-map">
                <div class="v-char-orange-top"></div>
                <div class="v-top-trees"></div>
                <div class="v-top-roads"></div>
              </div>
            </div>
          `;
        case 'dutch-angle':
          return `
            <div class="v-preview v-dutch-angle">
              <div class="v-canted-frame">
                <div class="v-swing-empty"></div>
                <div class="v-char-orange"></div>
              </div>
            </div>
          `;
        case 'extreme-close-up':
          return `
            <div class="v-preview v-extreme-cu">
              <div class="v-macro-eye">
                <div class="v-pupil"></div>
                <div class="v-teardrop"></div>
              </div>
            </div>
          `;
        case 'pov-shot':
          return `
            <div class="v-preview v-pov">
              <div class="v-pov-swing-ropes"></div>
              <div class="v-pov-landscape"></div>
            </div>
          `;
        case 'jump-cut':
          return `
            <div class="v-preview v-jump-cut">
              <div class="v-jump-char"></div>
              <div class="v-cut-indicator">✂️ JUMP</div>
            </div>
          `;
        case 'dissolve':
          return `
            <div class="v-preview v-dissolve">
              <div class="v-scene-day"></div>
              <div class="v-scene-sunset"></div>
            </div>
          `;
        case 'wipe':
          return `
            <div class="v-preview v-wipe">
              <div class="v-wipe-scene1"></div>
              <div class="v-wipe-scene2"></div>
              <div class="v-wipe-bar"></div>
            </div>
          `;
        case 'match-cut':
          return `
            <div class="v-preview v-match-cut">
              <div class="v-match-moon"></div>
              <div class="v-match-char"></div>
            </div>
          `;
        case 'whip-pan':
          return `
            <div class="v-preview v-whip-pan">
              <div class="v-whip-scene-a"></div>
              <div class="v-whip-blur"></div>
              <div class="v-whip-scene-b"></div>
            </div>
          `;
        case 'smash-cut':
          return `
            <div class="v-preview v-smash-cut">
              <div class="v-quiet-night">💤</div>
              <div class="v-loud-alarm">⏰ 쾅!</div>
            </div>
          `;
        case 'iris':
          return `
            <div class="v-preview v-iris">
              <div class="v-iris-mask"></div>
              <div class="v-char-orange"></div>
            </div>
          `;
        case 'fade-out':
          return `
            <div class="v-preview v-fade-out">
              <div class="v-fade-scene"></div>
              <div class="v-fade-curtain"></div>
            </div>
          `;
        case 'montage':
          return `
            <div class="v-preview v-montage">
              <div class="v-montage-strip">
                <div class="v-m-clip clip-1">🛹 연습</div>
                <div class="v-m-clip clip-2">💪 땀방울</div>
                <div class="v-m-clip clip-3">🏆 성공</div>
              </div>
            </div>
          `;
        case 'cross-cutting':
          return `
            <div class="v-preview v-cross-cutting">
              <div class="v-cross-box left"><div class="v-running-char">🏃 달리기</div></div>
              <div class="v-cross-box right"><div class="v-speeding-train">🚆 기차</div></div>
            </div>
          `;
        case 'split-screen':
          return `
            <div class="v-preview v-split-screen">
              <div class="v-split-left"><div class="v-station">🚉 기차역</div></div>
              <div class="v-split-line"></div>
              <div class="v-split-right"><div class="v-beach">🌊 바다방</div></div>
            </div>
          `;
        case 'insert-shot':
          return `
            <div class="v-preview v-insert-shot">
              <div class="v-insert-bg"></div>
              <div class="v-insert-overlay">
                <div class="v-pocket-watch">🕒 5:00</div>
              </div>
            </div>
          `;
        case 'flashback':
          return `
            <div class="v-preview v-flashback">
              <div class="v-flash-memory"><div class="v-char-young">🌱 어린시절</div></div>
              <div class="v-flash-burn"></div>
            </div>
          `;
        case 'slow-motion':
          return `
            <div class="v-preview v-slow-motion">
              <div class="v-fountain-drop"></div>
              <div class="v-water-ripple"></div>
            </div>
          `;
        case 'timelapse':
          return `
            <div class="v-preview v-timelapse">
              <div class="v-tl-sky"></div>
              <div class="v-tl-sun"></div>
              <div class="v-tl-stars"></div>
            </div>
          `;
        case 'speed-ramp':
          return `
            <div class="v-preview v-speed-ramp">
              <div class="v-ramp-char"></div>
              <div class="v-ramp-indicator">1x ➔ 0.1x ➔ 4x</div>
            </div>
          `;
        case 'freeze-frame':
          return `
            <div class="v-preview v-freeze-frame">
              <div class="v-freeze-char"></div>
              <div class="v-name-tag">🍊 바이브 코더</div>
            </div>
          `;
        case 'reverse':
          return `
            <div class="v-preview v-reverse">
              <div class="v-pot-shards">
                <div class="shard s1"></div>
                <div class="shard s2"></div>
                <div class="shard s3"></div>
              </div>
              <div class="v-rev-badge">⏪ REVERSE</div>
            </div>
          `;
        case 'hyperlapse':
          return `
            <div class="v-preview v-hyperlapse">
              <div class="v-hyper-tunnel">
                <div class="v-lamp l1"></div>
                <div class="v-lamp l2"></div>
                <div class="v-lamp l3"></div>
              </div>
            </div>
          `;
        case 'bullet-time':
          return `
            <div class="v-preview v-bullet-time">
              <div class="v-bt-char-frozen"></div>
              <div class="v-bt-camera-ring">
                <div class="v-bt-cam">🎥</div>
              </div>
            </div>
          `;
        case 'stop-motion':
          return `
            <div class="v-preview v-stop-motion">
              <div class="v-toy-block b1"></div>
              <div class="v-toy-block b2"></div>
              <div class="v-toy-block b3"></div>
            </div>
          `;
        case 'rack-focus':
          return `
            <div class="v-preview v-rack-focus">
              <div class="v-rf-flower">🌸</div>
              <div class="v-rf-char">🍊</div>
            </div>
          `;
        case 'lens-flare':
          return `
            <div class="v-preview v-lens-flare">
              <div class="v-flare-sun"></div>
              <div class="v-flare-ring r1"></div>
              <div class="v-flare-ring r2"></div>
              <div class="v-flare-beam"></div>
            </div>
          `;
        case 'camera-shake':
          return `
            <div class="v-preview v-camera-shake">
              <div class="v-heavy-weight">💣</div>
              <div class="v-ground-crack"></div>
            </div>
          `;
        case 'motion-blur':
          return `
            <div class="v-preview v-motion-blur">
              <div class="v-blur-train">
                <div class="v-streak s1"></div>
                <div class="v-streak s2"></div>
              </div>
            </div>
          `;
        case 'color-grading':
          return `
            <div class="v-preview v-color-grading">
              <div class="v-cg-split">
                <div class="v-cg-raw">RAW</div>
                <div class="v-cg-lut">TEAL & ORANGE</div>
              </div>
            </div>
          `;
        case 'letterbox':
          return `
            <div class="v-preview v-letterbox">
              <div class="v-lb-bar top"></div>
              <div class="v-lb-scene">2.39 : 1 SCOPE</div>
              <div class="v-lb-bar bottom"></div>
            </div>
          `;
        case 'bokeh':
          return `
            <div class="v-preview v-bokeh">
              <div class="v-bokeh-orbs">
                <div class="bo-1"></div>
                <div class="bo-2"></div>
                <div class="bo-3"></div>
                <div class="bo-4"></div>
              </div>
              <div class="v-char-silhouette"></div>
            </div>
          `;
        case 'tilt-shift':
          return `
            <div class="v-preview v-tilt-shift">
              <div class="v-ts-blur-top"></div>
              <div class="v-ts-focus-strip">
                <div class="v-mini-car">🚗</div>
                <div class="v-mini-bus">🚌</div>
              </div>
              <div class="v-ts-blur-bottom"></div>
            </div>
          `;
        case 'fisheye-lens':
          return `
            <div class="v-preview v-fisheye">
              <div class="v-fe-circle">
                <div class="v-fe-grid"></div>
                <div class="v-char-orange fe-bulge"></div>
              </div>
            </div>
          `;
        case 'god-rays':
          return `
            <div class="v-preview v-god-rays">
              <div class="v-tree-canopy"></div>
              <div class="v-light-shafts">
                <div class="beam b1"></div>
                <div class="beam b2"></div>
                <div class="beam b3"></div>
              </div>
              <div class="v-char-orange"></div>
            </div>
          `;
        case 'selective-color':
          return `
            <div class="v-preview v-selective-color">
              <div class="v-sc-crowd-mono">
                <span class="mono-char">👤</span>
                <span class="mono-char">👤</span>
              </div>
              <div class="v-char-orange vivid">🍊</div>
            </div>
          `;
        case 'day-for-night':
          return `
            <div class="v-preview v-day-for-night">
              <div class="v-dfn-layer">
                <div class="v-dfn-moon">🌕</div>
                <div class="v-char-orange blue-tint"></div>
              </div>
            </div>
          `;
        case 'film-grain':
          return `
            <div class="v-preview v-film-grain">
              <div class="v-vintage-scene"><div class="v-char-orange"></div></div>
              <div class="v-grain-overlay"></div>
              <div class="v-film-scratch"></div>
            </div>
          `;
        case 'one-take':
          return `
            <div class="v-preview v-one-take">
              <div class="v-one-take-track">
                <div class="room room-1">🏠 집</div>
                <div class="room room-2">🚪 골목</div>
                <div class="room room-3">🏛️ 광장</div>
              </div>
            </div>
          `;
        default:
          return `<div style="font-size: 10px; color: var(--color-gold);">🎬 50 Video</div>`;
      }
    }
  }

  // Render Cheatsheet Board
  function renderBoard() {
    const data = CHEAT_SHEET_DATA[currentTab];
    const isVideo = currentTab === 'video';

    let html = `
      <div class="cheatsheet-board">
        <div class="board-header">
          <div class="board-title-group">
            <h2>${data.title}</h2>
            <span class="board-subtitle">${data.subtitle}</span>
          </div>
          <div class="channel-logo-box">
            <span class="corner-mark corner-tl"></span>
            <span class="corner-mark corner-tr"></span>
            <span class="corner-mark corner-bl"></span>
            <span class="corner-mark corner-br"></span>
            <span class="channel-logo-text">${data.channel}</span>
          </div>
        </div>
    `;

    // Category Filter Bar for Video Cheatsheet (7 parts)
    if (isVideo) {
      html += `
        <div class="video-category-filter" role="tablist" aria-label="영상 기법 파트 선택">
          <button type="button" class="v-pill-btn ${videoCategoryFilter === 'all' ? 'active' : ''}" data-part="all">전체보기 (50)</button>
          <button type="button" class="v-pill-btn ${videoCategoryFilter === 'part1' ? 'active' : ''}" data-part="part1">1부 카메라 무빙 (9)</button>
          <button type="button" class="v-pill-btn ${videoCategoryFilter === 'part2' ? 'active' : ''}" data-part="part2">2부 앵글과 숏 (6)</button>
          <button type="button" class="v-pill-btn ${videoCategoryFilter === 'part3' ? 'active' : ''}" data-part="part3">3부 장면 전환 (8)</button>
          <button type="button" class="v-pill-btn ${videoCategoryFilter === 'part4' ? 'active' : ''}" data-part="part4">4부 편집 기법 (5)</button>
          <button type="button" class="v-pill-btn ${videoCategoryFilter === 'part5' ? 'active' : ''}" data-part="part5">5부 시간 (8)</button>
          <button type="button" class="v-pill-btn ${videoCategoryFilter === 'part6' ? 'active' : ''}" data-part="part6">6부 렌즈·빛·색 (6)</button>
          <button type="button" class="v-pill-btn ${videoCategoryFilter === 'part7' ? 'active' : ''}" data-part="part7">7부 특수 렌즈와 룩 (8)</button>
        </div>
        <div class="board-grid-video">
      `;
    } else {
      html += `
        <div class="board-grid-3col">
      `;
    }

    data.sections.forEach(section => {
      // If video and filtered by category, skip non-matching sections
      if (isVideo && videoCategoryFilter !== 'all' && section.id !== videoCategoryFilter) {
        return;
      }

      const filteredItems = section.items.filter(item => {
        if (!searchQuery) return true;
        return (
          item.title.toLowerCase().includes(searchQuery) ||
          item.sub.toLowerCase().includes(searchQuery) ||
          item.desc.toLowerCase().includes(searchQuery) ||
          (item.num && item.num.includes(searchQuery))
        );
      });

      if (filteredItems.length === 0 && searchQuery) return;

      let gridClass = 'motion-grid-2x4';
      if (currentTab === 'ui') {
        if (section.id === 'layout') gridClass = 'layout-grid';
        else if (section.id === 'component') gridClass = 'component-grid';
        else if (section.id === 'effect') gridClass = 'effect-grid';
      } else if (isVideo) {
        gridClass = 'video-cards-grid';
      }

      const blockClass = isVideo ? 'video-section-block' : 'sheet-column';

      html += `
        <div class="${blockClass}" id="col-${section.id}">
          <div class="column-header">
            <h3 class="col-title">${section.title}</h3>
            <span class="col-en">${section.enTitle}</span>
          </div>
          <div class="${gridClass}">
      `;

      filteredItems.forEach(item => {
        const previewHtml = getPreviewHtml(item, currentTab);
        const heroClass = (currentTab === 'ui' && item.id === 'hero-section') ? 'card-hero' : '';
        const filmCardClass = isVideo ? 'film-card' : '';
        const numHtml = item.num ? `<span class="card-num">${item.num}${isVideo ? ' ▶' : ''}</span>` : '';
        const sprocketsTop = isVideo ? '<div class="film-sprockets top"></div>' : '';
        const sprocketsBottom = isVideo ? '<div class="film-sprockets bottom"></div>' : '';

        html += `
          <div class="sheet-card ${heroClass} ${filmCardClass}" data-item-id="${item.id}" data-tab="${currentTab}">
            ${sprocketsTop}
            <div class="card-copy-hint">클릭하여 프롬프트 복사</div>
            <div class="card-preview">
              ${previewHtml}
            </div>
            ${sprocketsBottom}
            <div class="card-info">
              <div class="card-title-row">
                <span class="card-title">${item.title}</span>
                ${numHtml}
              </div>
              <div class="card-sub">${item.sub}</div>
            </div>
          </div>
        `;
      });

      html += `
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    boardContainer.innerHTML = html;

    // Attach category filter button listeners for video tab
    if (isVideo) {
      const filterBtns = boardContainer.querySelectorAll('.v-pill-btn');
      filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          videoCategoryFilter = e.currentTarget.dataset.part;
          renderBoard();
        });
      });
    }

    attachCardListeners();
    initDynamicLiveSimulations();
  }

  // Card Listeners (Drawer)
  function attachCardListeners() {
    const cards = boardContainer.querySelectorAll('.sheet-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const itemId = card.dataset.itemId;
        const tabKey = card.dataset.tab;
        openDrawer(itemId, tabKey);
      });
    });
  }

  function openDrawer(itemId, tabKey) {
    const data = CHEAT_SHEET_DATA[tabKey];
    let foundItem = null;
    let foundSection = null;

    for (const sec of data.sections) {
      const it = sec.items.find(x => x.id === itemId);
      if (it) {
        foundItem = it;
        foundSection = sec;
        break;
      }
    }

    if (!foundItem) return;

    drawerCatBadge.textContent = foundSection.title;
    drawerNumBadge.textContent = foundItem.num ? `No. ${foundItem.num}` : '';
    drawerTitle.textContent = foundItem.title;
    drawerSubtitle.textContent = foundItem.sub;
    drawerDesc.textContent = foundItem.desc;
    drawerPrompt.textContent = foundItem.prompt;

    detailDrawer.classList.add('active');
    drawerBackdrop.classList.add('active');
  }

  function closeDrawer() {
    detailDrawer.classList.remove('active');
    drawerBackdrop.classList.remove('active');
  }

  drawerCloseBtn.addEventListener('click', closeDrawer);
  drawerBackdrop.addEventListener('click', closeDrawer);

  btnCopyPrompt.addEventListener('click', () => {
    const textToCopy = drawerPrompt.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast('✓ AI 프롬프트가 클립보드에 복사되었습니다!');
    }).catch(err => {
      console.error('Copy failed', err);
    });
  });

  function showToast(msg) {
    toastNotice.textContent = msg;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 2500);
  }

  // Live Dynamic Simulations (Typewriter, Scramble, Count-up, Confetti, Tilt)
  function initDynamicLiveSimulations() {
    // 1. Exact Typewriter Loop: "할 일 정리"
    const twEl = document.getElementById('twTarget');
    if (twEl) {
      const fullText = "할 일 정리";
      let charIdx = 0;
      let isDeleting = false;
      const typeStep = () => {
        if (animationsPaused) return setTimeout(typeStep, 300);
        if (!isDeleting) {
          twEl.textContent = fullText.slice(0, charIdx + 1);
          charIdx++;
          if (charIdx === fullText.length) {
            isDeleting = true;
            setTimeout(typeStep, 1800); // pause at end
            return;
          }
          setTimeout(typeStep, 150);
        } else {
          twEl.textContent = fullText.slice(0, charIdx - 1);
          charIdx--;
          if (charIdx === 0) {
            isDeleting = false;
            setTimeout(typeStep, 600);
            return;
          }
          setTimeout(typeStep, 90);
        }
      };
      typeStep();
    }

    // 2. Exact Text Scramble Loop: "빈틈없는 보안"
    const scrambleEl = document.getElementById('scrambleTarget');
    if (scrambleEl) {
      const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/0123456789';
      const target = "빈틈없는 보안";
      const runScramble = () => {
        if (animationsPaused) return;
        let iteration = 0;
        const interval = setInterval(() => {
          scrambleEl.innerText = target
            .split('')
            .map((char, index) => {
              if (index < iteration) return target[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');

          if (iteration >= target.length) {
            clearInterval(interval);
          }
          iteration += 1 / 3;
        }, 40);
      };
      runScramble();
      setInterval(runScramble, 4000);
    }

    // 3. Exact Count-up Loop: 0 -> 11,755+
    const countEl = document.getElementById('countValTarget');
    if (countEl) {
      const maxVal = 11755;
      const runCount = () => {
        if (animationsPaused) return;
        const duration = 1600;
        const startTime = performance.now();
        const update = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // easeOutExpo
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const current = Math.floor(easeProgress * maxVal);
          countEl.textContent = current.toLocaleString() + '+';
          if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
      };
      runCount();
      setInterval(runCount, 4000);
    }

    // 4. Pin Scrollytelling Number step: 1 -> 2 -> 3
    const pinNumEl = document.getElementById('pinNum');
    if (pinNumEl) {
      let num = 1;
      setInterval(() => {
        if (animationsPaused) return;
        num = (num % 3) + 1;
        pinNumEl.textContent = num;
      }, 1200);
    }

    // 5. Confetti Canvas Particle Explosion
    const confettiCanvas = document.querySelector('.confetti-particles');
    if (confettiCanvas) {
      const ctx = confettiCanvas.getContext('2d');
      const colors = ['#f59e0b', '#ec4899', '#6366f1', '#10b981', '#06b6d4', '#fbbf24'];
      let particles = [];

      const spawnConfetti = () => {
        particles = [];
        for (let i = 0; i < 40; i++) {
          particles.push({
            x: confettiCanvas.width / 2 + (Math.random() - 0.5) * 20,
            y: 35,
            w: Math.random() * 4 + 2,
            h: Math.random() * 6 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 4.5,
            vy: -(Math.random() * 3 + 2),
            gravity: 0.12,
            rot: Math.random() * 360,
            vRot: (Math.random() - 0.5) * 15,
            opacity: 1
          });
        }
      };

      spawnConfetti();
      setInterval(() => {
        if (!animationsPaused) spawnConfetti();
      }, 3500);

      const renderConfetti = () => {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        particles.forEach(p => {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rot * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.opacity;
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
          ctx.restore();

          p.x += p.vx;
          p.y += p.vy;
          p.vy += p.gravity;
          p.rot += p.vRot;
          p.opacity -= 0.008;
          if (p.opacity < 0) p.opacity = 0;
        });
        requestAnimationFrame(renderConfetti);
      };
      renderConfetti();
    }
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

  // Init
  switchTab('ui');
});
