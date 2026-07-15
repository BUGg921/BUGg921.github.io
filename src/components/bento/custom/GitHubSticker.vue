<template>
  <ShadowCard class="github-shell !p-[5px]">
    <a
      href="https://github.com/BUGg921"
      target="_blank"
      rel="noreferrer"
      aria-label="访问 BUGg921 的 GitHub"
      class="github-card pointer-events-auto h-full w-full"
    >
      <div class="topline">
        <span>GITHUB / PROFILE</span>
        <span class="status"><i /> ONLINE</span>
      </div>

      <div class="brand-row">
        <span class="logo-wrap" aria-hidden="true">
          <span class="i-carbon-logo-github logo" />
        </span>
        <div class="brand-copy">
          <strong>GitHub</strong>
          <small>CODE · NOTES · LAB</small>
        </div>
      </div>

      <div class="profile-row">
        <span>@BUGg921</span>
        <span class="visit">
          访问主页
          <span class="i-carbon-arrow-up-right arrow" aria-hidden="true" />
        </span>
      </div>
    </a>
  </ShadowCard>
</template>

<style scoped>
.github-shell {
  height: 100%;
  width: 100%;
}

.github-card {
  position: relative;
  isolation: isolate;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #30363d;
  border-radius: 6px;
  background: linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
    #0d1117;
  background-size: 18px 18px;
  color: #e6edf3;
  padding: clamp(12px, 2vw, 18px);
  text-decoration: none;
  transition:
    background-color 180ms ease,
    border-color 180ms ease;
}

.github-card::before {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: url('/noise-light.png') repeat;
  content: '';
  opacity: 0.065;
  pointer-events: none;
}

.github-card::after {
  position: absolute;
  inset: 7px;
  z-index: -1;
  border: 1px dashed rgba(139, 148, 158, 0.16);
  border-radius: 3px;
  content: '';
  pointer-events: none;
}

.github-card:hover {
  border-color: #6e7681;
  background-color: #111820;
}

.topline,
.brand-row,
.profile-row,
.status,
.visit {
  display: flex;
  align-items: center;
}

.topline,
.profile-row {
  position: relative;
  z-index: 1;
  justify-content: space-between;
  gap: 12px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: clamp(8px, 1vw, 11px);
  font-weight: 700;
  letter-spacing: 0.08em;
}

.topline {
  color: #8b949e;
}

.status {
  gap: 6px;
  color: #a7f3d0;
}

.status i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #3fb950;
  box-shadow: 0 0 8px rgba(63, 185, 80, 0.5);
}

.brand-row {
  position: relative;
  z-index: 1;
  gap: clamp(10px, 1.8vw, 16px);
}

.logo-wrap {
  display: grid;
  width: clamp(38px, 4.5vw, 52px);
  height: clamp(38px, 4.5vw, 52px);
  flex: none;
  place-items: center;
  border: 1px solid #6e7681;
  border-radius: 10px;
  background: #161b22;
  color: #f0f6fc;
  box-shadow: 3px 3px 0 #010409;
}

.logo {
  width: 58%;
  height: 58%;
}

.brand-copy {
  display: flex;
  min-width: 0;
  flex-direction: column;
}

.brand-copy strong {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: clamp(26px, 4vw, 44px);
  font-weight: 900;
  letter-spacing: -0.065em;
  line-height: 0.9;
}

.brand-copy small {
  margin-top: 7px;
  color: #8b949e;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: clamp(7px, 0.9vw, 10px);
  font-weight: 700;
  letter-spacing: 0.13em;
  white-space: nowrap;
}

.profile-row {
  border-top: 1px solid rgba(139, 148, 158, 0.2);
  color: #8b949e;
  padding-top: clamp(8px, 1.2vw, 12px);
  letter-spacing: 0.02em;
}

.visit {
  gap: 5px;
  color: #e6edf3;
  white-space: nowrap;
}

.arrow {
  width: 1.15em;
  height: 1.15em;
  transition: transform 180ms ease;
}

.github-card:hover .arrow {
  transform: translate(3px, -3px);
}

@media (max-width: 520px) {
  .github-card {
    padding: 12px;
  }

  .brand-copy small,
  .topline > span:first-child {
    display: none;
  }

  .topline {
    justify-content: flex-end;
  }

  .visit {
    font-size: 0;
  }

  .arrow {
    width: 16px;
    height: 16px;
  }
}
</style>
