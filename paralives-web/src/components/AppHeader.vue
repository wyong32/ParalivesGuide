<template>
  <header class="site-header">
    <div class="header-wave" aria-hidden="true"></div>
    <div class="container">
      <div class="header-content">
        <RouterLink to="/" class="logo" aria-label="Paralives Guide Home">
          <span class="logo-badge">
            <img
              src="/images/logo.webp"
              alt="Paralives Guide logo"
              width="40"
              height="40"
            />
          </span>
          <span class="logo-text">
            <span class="logo-title">Paralives</span>
            <span class="logo-sub">Guide</span>
          </span>
        </RouterLink>

        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="menuOpen"
          aria-controls="main-nav"
          @click="menuOpen = !menuOpen"
        >
          <span class="menu-bar"></span>
          <span class="menu-bar"></span>
          <span class="menu-bar"></span>
          <span class="sr-only">Toggle navigation</span>
        </button>

        <nav id="main-nav" class="main-nav" :class="{ open: menuOpen }">
          <RouterLink to="/" class="nav-pill nav-home" @click="closeMenu">Home</RouterLink>
          <RouterLink to="/guides" class="nav-pill nav-guides" @click="closeMenu">Guides</RouterLink>
          <RouterLink to="/wiki" class="nav-pill nav-wiki" @click="closeMenu">Wiki</RouterLink>
          <RouterLink to="/build" class="nav-pill nav-build" @click="closeMenu">Build</RouterLink>
          <RouterLink to="/cheats" class="nav-pill nav-cheats" @click="closeMenu">Cheats</RouterLink>
          <RouterLink to="/mods" class="nav-pill nav-mods" @click="closeMenu">Mods</RouterLink>
          <RouterLink to="/map" class="nav-pill nav-map" @click="closeMenu">Map</RouterLink>
          <RouterLink to="/how-to-play" class="nav-cta" @click="closeMenu">How to Play</RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 253, 249, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 3px solid var(--color-outline);
  box-shadow: 0 6px 0 rgba(58, 79, 72, 0.08);
}

.header-wave {
  height: 6px;
  background: repeating-linear-gradient(
    90deg,
    var(--color-sunny) 0 20px,
    var(--color-coral) 20px 40px,
    var(--color-mint) 40px 60px,
    var(--color-lavender) 60px 80px,
    var(--color-sky) 80px 100px
  );
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  min-height: 4.5rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  text-decoration: none;
  color: var(--color-text);
  flex-shrink: 0;
}

.logo:hover {
  color: var(--color-text);
}

.logo-badge {
  display: flex;
  padding: 6px;
  background: var(--color-peach);
  border: 3px solid var(--color-outline);
  border-radius: 16px;
  box-shadow: 3px 3px 0 var(--color-outline);
  transform: rotate(-4deg);
  transition: transform 0.25s ease;
}

.logo:hover .logo-badge {
  transform: rotate(0deg) scale(1.05);
}

.logo-badge img {
  border-radius: 10px;
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.logo-title {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--color-grass);
}

.logo-sub {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-coral);
  margin-top: 2px;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 0.6rem;
  background: var(--color-sunny);
  border: 3px solid var(--color-outline);
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 3px 3px 0 var(--color-outline);
}

.menu-bar {
  display: block;
  width: 22px;
  height: 3px;
  background: var(--color-outline);
  border-radius: 3px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  flex-wrap: wrap;
}

.nav-pill,
.nav-cta {
  font-family: var(--font-display);
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  border: 2.5px solid transparent;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.nav-pill {
  color: var(--color-text);
  background: transparent;
}

.nav-pill:hover,
.nav-pill.router-link-active {
  transform: translateY(-2px);
  border-color: var(--color-outline);
  box-shadow: 3px 3px 0 var(--color-outline);
}

.nav-home:hover,
.nav-home.router-link-active {
  background: var(--color-sky);
}
.nav-guides:hover,
.nav-guides.router-link-active {
  background: var(--color-lavender);
}
.nav-wiki:hover,
.nav-wiki.router-link-active {
  background: var(--color-mint);
}
.nav-build:hover,
.nav-build.router-link-active {
  background: var(--color-peach);
}
.nav-cheats:hover,
.nav-cheats.router-link-active {
  background: var(--color-sunny);
}
.nav-mods:hover,
.nav-mods.router-link-active {
  background: var(--color-berry);
  color: #fff;
}
.nav-map:hover,
.nav-map.router-link-active {
  background: var(--color-grass);
  color: #fff;
}

.nav-cta {
  margin-left: 0.35rem;
  background: var(--color-coral);
  color: #fff;
  border-color: var(--color-outline);
  box-shadow: 4px 4px 0 var(--color-outline);
}

.nav-cta:hover,
.nav-cta.router-link-active {
  background: #ff7a52;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 6px 6px 0 var(--color-outline);
}

@media (max-width: 1024px) {
  .menu-toggle {
    display: flex;
  }

  .main-nav {
    position: absolute;
    top: calc(100% + 6px);
    left: 1rem;
    right: 1rem;
    flex-direction: column;
    align-items: stretch;
    background: var(--color-white);
    padding: 1rem;
    border: 3px solid var(--color-outline);
    border-radius: 20px;
    box-shadow: 6px 8px 0 var(--color-outline);
    display: none;
    gap: 0.4rem;
  }

  .main-nav.open {
    display: flex;
  }

  .nav-pill,
  .nav-cta {
    text-align: center;
    padding: 0.7rem 1rem;
  }

  .nav-cta {
    margin-left: 0;
    margin-top: 0.25rem;
  }

  .site-header .container {
    position: relative;
  }
}
</style>
