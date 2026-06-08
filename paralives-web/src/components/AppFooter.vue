<template>
  <footer class="site-footer">
    <div class="footer-scallop" aria-hidden="true"></div>
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="brand-sticker">
            <img
              src="/images/logo.png"
              alt="Paralives Guide"
              width="40"
              height="40"
            />
            <span>Paralives Guide</span>
          </div>
          <p>
            A player guide for Paralives on Steam Early Access — wiki topics, walkthroughs, cheat
            commands, Workshop mods, and a Melino town map in one place.
          </p>
        </div>

        <nav class="footer-nav" aria-label="Footer navigation">
          <div class="footer-col col-explore">
            <h3>Explore</h3>
            <ul>
              <li><RouterLink to="/guides">Guides</RouterLink></li>
              <li><RouterLink to="/wiki">Wiki</RouterLink></li>
              <li><RouterLink to="/build">Build</RouterLink></li>
              <li><RouterLink to="/map">Map</RouterLink></li>
            </ul>
          </div>
          <div class="footer-col col-resources">
            <h3>Resources</h3>
            <ul>
              <li><RouterLink to="/cheats">Cheats</RouterLink></li>
              <li><RouterLink to="/mods">Mods</RouterLink></li>
              <li><RouterLink to="/how-to-play">How to Play</RouterLink></li>
              <li><RouterLink to="/updates">Updates</RouterLink></li>
            </ul>
          </div>
          <div class="footer-col col-legal">
            <h3>Legal</h3>
            <ul>
              <li><RouterLink to="/legal/privacy-policy">Privacy Policy</RouterLink></li>
              <li><RouterLink to="/legal/terms-of-service">Terms of Service</RouterLink></li>
              <li><RouterLink to="/legal/copyright">Copyright</RouterLink></li>
              <li><RouterLink to="/legal/about-us">About Us</RouterLink></li>
              <li><RouterLink to="/legal/contact-us">Contact Us</RouterLink></li>
            </ul>
          </div>
        </nav>
      </div>

      <div class="footer-bottom">
        <div class="footer-copyright">
          <p>&copy; {{ year }} Paralives Guide. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.site-footer {
  position: relative;
  margin-top: 5rem;
  padding: 4rem 0 2rem;
  background: linear-gradient(165deg, #8ed49a 0%, #6db87a 45%, #5aa868 100%);
  color: #fff;
  border-top: 3px solid var(--color-outline);
}

.footer-scallop {
  position: absolute;
  top: -18px;
  left: 0;
  right: 0;
  height: 20px;
  background: radial-gradient(circle at 20px 0, var(--color-cream) 18px, transparent 19px);
  background-size: 40px 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: 1.1fr 2fr;
  gap: 3rem;
  padding-bottom: 2.5rem;
  border-bottom: 2px dashed rgba(255, 255, 255, 0.35);
}

.brand-sticker {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.65rem 1.1rem;
  background: var(--color-sunny);
  border: 3px solid var(--color-outline);
  border-radius: 16px;
  box-shadow: 4px 4px 0 var(--color-outline);
  margin-bottom: 1.25rem;
  transform: rotate(-2deg);
}

.brand-sticker span {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--color-outline);
}

.brand-sticker img {
  border-radius: 8px;
  border: 2px solid var(--color-outline);
}

.footer-brand p {
  font-size: 0.92rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.92);
  max-width: 380px;
}

.footer-nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.footer-col {
  padding: 1.25rem;
  border-radius: 18px;
  border: 2.5px solid rgba(255, 255, 255, 0.45);
  background: rgba(255, 255, 255, 0.12);
}

.col-explore {
  background: rgba(184, 228, 249, 0.25);
}
.col-resources {
  background: rgba(255, 213, 107, 0.22);
}
.col-legal {
  background: rgba(255, 255, 255, 0.16);
}

.footer-col h3 {
  font-size: 1rem;
  color: #fff;
  margin-bottom: 0.85rem;
  text-shadow: 1px 1px 0 rgba(58, 79, 72, 0.2);
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-col li {
  margin-bottom: 0.45rem;
}

.footer-col a {
  color: #fff;
  text-decoration: none;
  font-size: 0.92rem;
  font-weight: 600;
  cursor: pointer;
  opacity: 0.92;
}

.footer-col a:hover {
  color: var(--color-sunny);
  opacity: 1;
  text-decoration: underline;
}

.footer-bottom {
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.8);
}

.footer-meta {
  margin: 0;
}

.footer-copyright {
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.28);
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.footer-copyright p {
  margin: 0;
  line-height: 1.55;
}

.footer-copyright a {
  color: #fff;
  font-weight: 600;
  text-decoration: none;
}

.footer-copyright a:hover {
  color: var(--color-sunny);
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .footer-nav {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-nav {
    grid-template-columns: 1fr;
  }
}
</style>
