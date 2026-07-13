export const siteTemplate = `
  <div class="site-shell" :class="{ 'theme-dark': darkMode, 'menu-open': menuOpen }">
    <a class="skip-link" href="#main">跳到主要内容</a>

    <header class="floating-header">
      <a class="identity" href="#home" aria-label="回到首页" @click="closeMenu">
        <span class="identity-avatar">B</span>
        <span class="identity-copy">
          <strong>BUGg921</strong>
          <small>个人实验室</small>
        </span>
      </a>

      <nav id="site-navigation" class="pill-nav" aria-label="主导航">
        <a href="#home" @click="closeMenu">首页</a>
        <a href="#tools" @click="closeMenu">工具</a>
        <a href="#notes" @click="closeMenu">文章</a>
        <a href="#about" @click="closeMenu">关于</a>
      </nav>

      <div class="header-actions">
        <button
          class="theme-toggle"
          type="button"
          aria-label="切换明暗主题"
          :aria-pressed="String(darkMode)"
          @click="toggleTheme"
        >
          <span class="theme-icon theme-icon-sun" aria-hidden="true">☀</span>
          <span class="theme-icon theme-icon-moon" aria-hidden="true">☾</span>
        </button>
        <button
          class="menu-toggle"
          type="button"
          aria-label="打开或关闭导航"
          aria-controls="site-navigation"
          :aria-expanded="String(menuOpen)"
          @click="menuOpen = !menuOpen"
        ><span></span><span></span></button>
      </div>
    </header>

    <main id="main" class="page-wrap">
      <section id="home" class="bento-grid" aria-label="个人主页卡片">
        <article class="bento-card hero-card">
          <div class="hero-noise" aria-hidden="true"></div>
          <p class="card-overline"><span class="status-dot"></span> ONLINE · 个人主页持续施工中</p>
          <div class="hero-content">
            <p class="hello-pill">HELLO, WORLD!</p>
            <h1>你好，我是<br /><em>BUGg921</em>。</h1>
            <p>我喜欢把技术、想法和日常的小麻烦，变成真正能被使用的网页与工具。</p>
          </div>
          <div class="hero-footer">
            <a href="#tools">逛逛我的实验室 <span aria-hidden="true">→</span></a>
            <span>Vue 3 · Build in public</span>
          </div>
          <div class="hero-orbit" aria-hidden="true">
            <span class="orbit-ring"></span>
            <span class="orbit-core">B</span>
            <i></i><i></i><i></i>
          </div>
        </article>

        <article class="bento-card clock-card">
          <div class="card-topline"><span>NOW</span><span class="mini-dot"></span></div>
          <div class="clock" v-text="currentTime">--:--</div>
          <p v-text="dateLabel">北京时间</p>
          <div class="clock-track" aria-hidden="true"><span></span></div>
        </article>

        <a class="bento-card github-card" href="https://github.com/BUGg921" target="_blank" rel="noreferrer">
          <div class="card-topline"><span>GITHUB</span><span aria-hidden="true">↗</span></div>
          <div class="github-mark" aria-hidden="true">⌘</div>
          <div><strong>@BUGg921</strong><p>代码、实验与持续更新</p></div>
        </a>

        <article class="bento-card stack-card">
          <div class="card-topline"><span>MY STACK</span><span>04</span></div>
          <div class="stack-list" aria-label="技术栈">
            <span>Vue 3</span><span>TypeScript</span><span>Java</span><span>AI</span>
          </div>
          <p>保持简单，做一点有用的东西。</p>
        </article>

        <article class="bento-card playground-card">
          <div class="playground-scene" aria-hidden="true">
            <span class="cloud cloud-one"></span>
            <span class="cloud cloud-two"></span>
            <span class="hill hill-back"></span>
            <span class="hill hill-front"></span>
            <span class="tiny-window">⌂</span>
          </div>
          <div class="playground-caption"><span>PLAYGROUND</span><strong>让网页有一点生命力</strong></div>
        </article>

        <article id="tools" class="bento-card tools-card">
          <div class="card-topline"><span>TOOLS / 未来的工具箱</span><span>01</span></div>
          <div class="tools-intro">
            <h2>把重复工作，<br />变成一次点击。</h2>
            <p>这里会陆续放入我自己也愿意每天使用的小工具。</p>
          </div>
          <div class="tool-shelf">
            <div class="tool-chip"><i>Aa</i><span><b>文本整理箱</b><small>构想中</small></span></div>
            <div class="tool-chip"><i>⌁</i><span><b>灵感计时器</b><small>计划中</small></span></div>
            <div class="tool-chip"><i>#</i><span><b>开发速查册</b><small>收集中</small></span></div>
          </div>
        </article>

        <article id="notes" class="bento-card notes-card">
          <div class="card-topline"><span>NOTES / 最近想写</span><span>BLOG SOON</span></div>
          <div class="notes-heading">
            <h2>写下来，<br />才真正属于自己。</h2>
            <span class="scribble" aria-hidden="true">✎</span>
          </div>
          <div class="note-list">
            <div class="note-item"><span>01</span><div><small>数字花园</small><strong>为什么我要重新拥有个人网站</strong></div><i>↗</i></div>
            <div class="note-item"><span>02</span><div><small>独立开发</small><strong>从“好麻烦”开始做一个工具</strong></div><i>↗</i></div>
            <div class="note-item"><span>03</span><div><small>学习系统</small><strong>让解决问题的过程可以复用</strong></div><i>↗</i></div>
          </div>
        </article>

        <article class="bento-card memo-card">
          <span class="tape" aria-hidden="true"></span>
          <p>Make it small.<br />Make it useful.<br /><strong>Keep shipping.</strong></p>
          <small>给自己的备忘录</small>
        </article>

        <article class="bento-card build-card">
          <div class="terminal-dots" aria-hidden="true"><i></i><i></i><i></i></div>
          <code><span>const</span> idea = curiosity<br /><span>await</span> build(idea)<br /><b>✓ shipped</b></code>
          <div class="build-footer"><span>BUILD LOG</span><span>2026</span></div>
        </article>

        <article id="about" class="bento-card about-card">
          <div class="about-stamp" aria-hidden="true">ABOUT<br />ME</div>
          <div class="about-copy">
            <span>关于这个网站</span>
            <h2>一块跟着我一起成长的数字空间。</h2>
            <p>现在它是一张主页；以后会慢慢长出工具、文章、项目档案，以及更多没有预先计划的分支。</p>
          </div>
          <div class="about-principles"><span>先做出来</span><span>保持简单</span><span>持续更新</span></div>
        </article>

        <a class="bento-card contact-card" href="https://github.com/BUGg921" target="_blank" rel="noreferrer">
          <span>LET'S CONNECT</span>
          <h2>来 GitHub<br />找我玩。</h2>
          <div class="contact-arrow" aria-hidden="true">↗</div>
          <small>github.com/BUGg921</small>
        </a>
      </section>
    </main>

    <footer class="site-footer">
      <div><strong>BUGg921</strong><span>© 2026 · 持续建设中</span></div>
      <p>视觉灵感来自 <a href="https://github.com/6owen/arvin" target="_blank" rel="noreferrer">Arvin</a></p>
      <a href="#home">回到顶部 ↑</a>
    </footer>
  </div>
`;
