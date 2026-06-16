/**
 * 指南数据 — 玩家视角撰写；seo 字段供详情页 TDK 使用
 * categories 取值须与 guideCategories 一致，供列表页筛选
 */
export const guideCategories = [
  'Beginner',
  'Build',
  'Live Mode',
  'Early Access',
  'Basics',
]

const guidesData = [
  {
    id: 1,
    title: 'Paralives Performance Guide — Fix Lag, Stutter & Low FPS',
    description:
      'What we try when Paralives stutters in Live Mode — graphics presets, resolution, overlays, session restarts, and when to wait for patches instead of blaming your PC.',
    categories: ['Early Access', 'Live Mode', 'Basics'],
    author: 'Paralives Fan Guide Team',
    publishDate: '2026-05-26',
    imageUrl: '/images/guides/guide01.webp',
    imageAlt: 'Paralives Live Mode view — performance tuning for Steam Early Access',
    seo: {
      title: 'Paralives Performance Guide — Lag & FPS Fixes for EA',
      description:
        'Paralives lagging or stuttering on Steam EA? Player-tested graphics presets, V-Sync checks, resolution tweaks, overlay tips, and when performance needs a patch — not a new GPU.',
      keywords:
        'Paralives lag fix, Paralives stuttering, Paralives low FPS, Paralives performance, Paralives best settings, Paralives crashing, Early Access, Steam',
    },
    isHome: true,
    addressBar: 'paralives-lag-fix-performance-optimization',
    detailsHtml: `
      <p class="guide-lead">
        <a href="/updates">Steam Early Access</a> landed with a creative
        <a href="/guides/paralives-build-mode-beginner-building-guide">Build Mode</a> players love — and Live Mode
        performance that still frustrates plenty of mid-range and even high-end PCs. We wrote this after our own
        stuttery evenings in <a href="/map">Melino</a>, not as a promise that every step fixes every rig.
      </p>
      <p>
        Treat the checklist below as a troubleshooting order: settings first, system hygiene second, patience with patches
        third. If a hotfix changes options in your client, trust what you see in-game over any fan write-up.
      </p>
      <p>
        <img src="/images/guides/guide01-01.webp" alt="Paralives neighborhood view where camera movement can hitch in EA" width="50%">
      </p>

      <h2>What players actually complain about</h2>
      <p>
        Forum threads and our group chat repeat the same pain points — often on hardware that meets the public
        recommended specs. Typical reports:
      </p>
      <ol>
        <li>Hitches when panning or rotating the camera, especially over lots with height changes.</li>
        <li>FPS dips in busy neighborhood views with multiple buildings and <a href="/wiki/parafolks">Parafolks</a> on screen.</li>
        <li>Smooth start that degrades after an hour or two in the same session.</li>
        <li>Slow loads when entering Live Mode or resuming a household save.</li>
        <li>Occasional freezes, crashes, or lost progress before autosave kicks in.</li>
        <li>Live Mode feeling heavier than <a href="/how-to-play">Paramaker</a> or Build even on the same machine.</li>
      </ol>
      <p>
        Some of that is settings you can test today; some is optimization work only a patch can fix. Knowing which bucket
        you are in saves hours of driver reinstalls.
      </p>

      <h2>In-game settings worth trying first</h2>
      <h3>1. Start on Medium quality</h3>
      <p>
        Medium is our default recommendation for new saves: it keeps Melino readable while cutting shader and shadow load
        during camera sweeps. Ultra looks great in screenshots; it is not where we leave daily play until performance
        patches land.
      </p>
      <h3>2. Experiment with V-Sync / vertical refresh</h3>
      <p>
        Uneven frame pacing sometimes eases when vertical sync is off — and sometimes gets worse with screen tearing.
        Toggle it, walk one in-game block, rotate the camera, then decide. There is no universal winner across monitors.
      </p>
      <h3>3. Drop resolution before gutting every slider</h3>
      <p>
        If Medium still struggles, lower display resolution one step before slamming every quality option to Low. You
        often keep acceptable textures while gaining FPS back for Live Mode chores.
      </p>
      <h3>4. Zoom in when the neighborhood view chokes</h3>
      <p>
        Wide lot overviews with elevation and multiple structures are a common stutter trigger in EA. When movement feels
        sticky, follow the active household closely and avoid rapid 360° camera spins until you are indoors or on flat
        terrain.
      </p>

      <h2>Before you launch Paralives</h2>
      <h3>Close hungry background apps</h3>
      <p>
        Browsers with dozens of tabs, capture software, secondary launchers, and streaming tools all compete for RAM and
        GPU time. We close them before a long Live Mode session the same way we would for any new EA title.
      </p>
      <h3>Test with overlays disabled</h3>
      <p>
        Steam Overlay, Discord overlay, GPU recorders, and frame overlays are not confirmed Paralives bugs — but they are
        worth disabling for one test session when freezes appear random. Re-enable only what you miss.
      </p>
      <h3>Update GPU drivers — once</h3>
      <p>
        A current stable NVIDIA, AMD, or Intel driver removes avoidable rendering glitches. It will not rewrite
        under-optimized game systems, so do not loop driver installs if Medium settings already failed.
      </p>
      <h3>Restart after long play</h3>
      <p>
        Several of us notice gradual stutter that clears after save-and-quit. Not elegant, not permanent — but useful
        when you planned a three-hour building binge and performance slides after the second hour.
      </p>

      <h2>Quick troubleshooting map</h2>
      <table>
        <thead>
          <tr><th>Symptom</th><th>Try this</th><th>Why it might help</th></tr>
        </thead>
        <tbody>
          <tr>
            <th>General lag / low FPS</th>
            <td>Medium preset, fewer background apps</td>
            <td>Lowers render and CPU contention without flattening the whole scene.</td>
          </tr>
          <tr>
            <th>Camera stutter outdoors</th>
            <td>Lower resolution, V-Sync test, zoom closer</td>
            <td>Reduces pixels drawn and avoids wide elevated shots.</td>
          </tr>
          <tr>
            <th>Worse over time</th>
            <td>Save, quit, relaunch</td>
            <td>Temporary relief some sessions report in EA builds.</td>
          </tr>
          <tr>
            <th>Random freezes</th>
            <td>Disable overlays, close capture tools</td>
            <td>Rules out hook conflicts unrelated to Melino logic.</td>
          </tr>
          <tr>
            <th>Crashes / lost progress</th>
            <td>Save often, note build version when reporting</td>
            <td>Limits damage and helps future patches reproduce the issue.</td>
          </tr>
        </tbody>
      </table>

      <h2>When settings are not enough</h2>
      <p>
        If Medium, resolution tweaks, and a clean Windows session still leave Live Mode unpleasant, the bottleneck may be
        the EA build itself. We have seen stutter reports from strong gaming PCs — that is a signal to watch
        <a href="/updates">update notes</a> instead of buying new hardware immediately.
      </p>
      <p>
        Practical habits until optimization improves: shorter sessions, frequent saves, a test household for experiments,
        and holding off on a legacy save you cannot afford to lose. Builders focused on
        <a href="/build">Build Mode</a> or <a href="/mods">Workshop decor</a> may still enjoy the client; live-sim
        grinders may prefer to patch-watch through our <a href="/updates">roadmap page</a>.
      </p>

      <h2>Performance FAQ</h2>
      <h3>Why is Paralives lagging on a decent PC?</h3>
      <p>
        Early Access ships features before final optimization. Camera movement, populated lots, loading, and long sessions
        all show up in player reports across varied hardware.
      </p>
      <h3>What settings should I try first?</h3>
      <p>
        Medium graphics, one resolution step down if needed, a V-Sync on/off test, and a reboot of background apps
        before blaming the install.
      </p>
      <h3>Can high-end rigs still stutter?</h3>
      <p>
        Yes. That usually means waiting for developer performance work, not another GPU.
      </p>
      <h3>Does restarting the game help?</h3>
      <p>
        Sometimes, for session-length slowdown. It is a workaround, not a fix.
      </p>
      <h3>Should I wait for patches?</h3>
      <p>
        If Live Mode is the main draw and feels unplayable, monitoring updates is reasonable. If you mostly build or
        decorate, the current EA client may still be worth your time with Medium settings.
      </p>

      <h2>Bottom line</h2>
      <p>
        Our order of operations: Medium preset → resolution → V-Sync test → close overlays → restart long sessions →
        save constantly. None of that replaces official optimization, but it is what we actually run before rage-quitting
        a promising household.
      </p>
      <p>
        Re-checked against our installed EA client: May 26, 2026. Your results will differ by hardware and the next
        hotfix — verify options in your own settings menu after every patch.
      </p>
    `,
  },

  {
    id: 2,
    title: 'Paralives Build Mode Guide — Your First Home on a Budget',
    description:
      'How we draft a starter lot in Build Mode — straight walls first, door placement rules, meter costs, terrain habits, and mistakes that burn Paradimes before Live Mode begins.',
    categories: ['Beginner', 'Build', 'Early Access'],
    author: 'Paralives Fan Guide Team',
    publishDate: '2026-05-27',
    imageUrl: '/images/guides/guide02.webp',
    imageAlt: 'Split-level Paralives home layout — save platforms for after the basics work',
    seo: {
      title: 'Paralives Build Guide — First Home Tips for Steam EA',
      description:
        'Build your first Paralives home without costly mistakes: walls, platforms, terrain meters, curved-wall limits, undo habits, and a low-regret workflow for EA saves.',
      keywords:
        'Paralives Build Mode guide, Paralives building tips, Paralives first house, curved walls, platforms, Paradimes, build costs, Early Access',
    },
    addressBar: 'paralives-build-mode-beginner-building-guide',
    isHome: true,
    detailsHtml: `
      <p class="guide-lead">
        Build Mode is where Paralives hooks lot-builders — but your first household does not need a split-level showpiece
        on day one. We use this workflow on fresh saves: functional shell, tested doors, essential objects, then style.
        Tool deep-dives live on the <a href="/wiki/build-tools">Build tools wiki</a> and our
        <a href="/build">Build Mode page</a>.
      </p>
      <p>
        Split levels look great in community screenshots. They are also one of the fastest ways to drain early
        <a href="/wiki/careers/economy">Paradimes</a> — platforms meter far higher than plain walls. In our current EA
        build the rough structure rates we track are <strong>$1 / m²</strong> for walls, <strong>$5 / m²</strong> for terrain sculpting, and
        <strong>$25 / m²</strong> for platforms. Undo and redo are your friends; use them freely while learning.
      </p>

      <h2>Function first, Pinterest second</h2>
      <p>
        The house that survives week one is small, legible, and easy to furnish — not the one with three half-floors and
        a curved glass atrium you cannot place a door into. Platforms, terrain sculpts, and duplicate floors are real
        tools; they belong after the ground floor works in <a href="/how-to-play">Live Mode</a>.
      </p>
      <ol>
        <li><strong>Own the lot</strong> — build only inside property you control; items and walls must stay on your land.</li>
        <li><strong>Grid on, straight walls</strong> — sketch a compact rectangle before curves or fences.</li>
        <li><strong>Essential rooms only</strong> — sleep, hygiene, and food prep beat decorative wings on a starter budget.</li>
        <li><strong>Openings on straight walls</strong> — doors and windows still refuse curved segments in our EA client.</li>
        <li><strong>Paint after sizing</strong> — room-wide finishes first, accent walls once dimensions feel right.</li>
        <li><strong>Terrain last</strong> — gentle paths beat reshaping the whole yard before the footprint is final.</li>
      </ol>

      <h2>Tool families beginners should recognize</h2>
      <p>You do not need every toolbar icon for night one, but knowing categories prevents expensive experiments:</p>
      <ul>
        <li><strong>Shell tools</strong> — straight and curved walls, half-walls, separators, fences, and fence swap modes.</li>
        <li><strong>Surface paint</strong> — wall, floor, ceiling, and roof finishes without moving room boundaries.</li>
        <li><strong>Terrain</strong> — raise, lower, smooth, flatten, terrain paint, and water sculpting around the lot.</li>
        <li><strong>Edit shortcuts</strong> — pipette, sledgehammer, undo/redo, duplicate item, duplicate floor, swatches.</li>
        <li><strong>Alignment</strong> — grid toggle and wall-snapped 1×1 m guides for square rooms.</li>
        <li><strong>Polish later</strong> — molding, wall height/thickness, platform height, flips, and advanced transforms.</li>
      </ul>

      <h2>Structural costs before you click</h2>
      <p>
        Furniture has its own price tags, but meter costs explain why an ambitious shell can leave no cash for beds or
        stoves. Full economy context: <a href="/wiki/careers/economy">Economy wiki</a>.
      </p>
      <table>
        <thead>
          <tr><th>Structure</th><th>Meter rate we track</th><th>Good first use</th><th>Risk</th></tr>
        </thead>
        <tbody>
          <tr>
            <th>Walls</th>
            <td>$1 / m²</td>
            <td>Draft the working floor plan.</td>
            <td>Oversized empty rooms still need furnishing.</td>
          </tr>
          <tr>
            <th>Terrain</th>
            <td>$5 / m²</td>
            <td>Small path or gentle grade fix.</td>
            <td>Wide sculpts cost money before they help daily routines.</td>
          </tr>
          <tr>
            <th>Platforms</th>
            <td>$25 / m²</td>
            <td>Split levels after basics work.</td>
            <td>Hero architecture on day one can empty the wallet.</td>
          </tr>
        </tbody>
      </table>

      <h2>Placement rules that catch new builders</h2>
      <table>
        <thead>
          <tr><th>Situation</th><th>What the game does</th><th>Workaround</th></tr>
        </thead>
        <tbody>
          <tr>
            <th>Doors/windows on curved walls</th>
            <td>Placement blocked in our EA build.</td>
            <td>Keep a straight wall segment for every opening.</td>
          </tr>
          <tr>
            <th>Doors/windows on fences</th>
            <td>Not supported — use walls or gates.</td>
            <td>Swap fence sections to wall where entry is needed.</td>
          </tr>
          <tr>
            <th>Building off-lot</th>
            <td>Structures and items must stay inside owned land.</td>
            <td>Walk the lot edge before designing around the perimeter.</td>
          </tr>
          <tr>
            <th>Mismatched wall heights</th>
            <td>Clusters at different heights may refuse to connect.</td>
            <td>Normalize height, then join segments.</td>
          </tr>
          <tr>
            <th>Lowering walls under platforms</th>
            <td>Blocked once platform height is set.</td>
            <td>Finalize enclosing walls before raising platforms.</td>
          </tr>
          <tr>
            <th>Duplicate floor / platform broke</th>
            <td>Affordability warnings appear if funds are short.</td>
            <td>Finish and furnish the ground floor before stacking up.</td>
          </tr>
        </tbody>
      </table>

      <h2>Low-regret first-home workflow</h2>
      <ol>
        <li>Enter Build on an owned lot; mark front door and path first.</li>
        <li>Enable grid; draw a small straight-wall rectangle.</li>
        <li>Divide sleep, bath, and kitchen zones — skip trophy rooms.</li>
        <li>Place doors and windows before showcase curves.</li>
        <li>Drop beds, toilet, fridge, and a place to eat; test paths mentally.</li>
        <li>Switch to Live Mode briefly — catch blocked routes early.</li>
        <li>Return for paint, swatches, molding, and outdoor tidy-up.</li>
        <li>Add platforms, extra floors, and big terrain only after bills still look survivable.</li>
        <li>Sell or sledgehammer mistakes instead of building around them.</li>
      </ol>

      <h2>Mistakes we see on fresh saves</h2>
      <ul>
        <li><strong>Split-level before basics</strong> — platforms at $25/m² eat starter Paradimes.</li>
        <li><strong>Curved walls for every exterior face</strong> — then nowhere legal to hang a door.</li>
        <li><strong>Terrain sculpt before footprint</strong> — paid rework when the house moves.</li>
        <li><strong>Ignoring lot lines</strong> — edge decorations that cannot stay placed.</li>
        <li><strong>Mixing wall heights mid-connection</strong> — fix height before merging segments.</li>
        <li><strong>Skipping undo</strong> — the toolbar exists; experiments should be reversible.</li>
        <li><strong>Zero repair reserve</strong> — objects can burn; keep cash for replacements.</li>
        <li><strong>Decor before routing</strong> — pretty rooms that block the fridge still fail week one.</li>
      </ul>

      <h2>Keep building your household</h2>
      <ul>
        <li><a href="/how-to-play">How to Play</a> — Paramaker → Build → Live order and first-evening goals.</li>
        <li><a href="/wiki/careers/economy">Economy wiki</a> — starting funds, bills, and shopping pressure.</li>
        <li><a href="/wiki/careers/occupations">Jobs by workplace</a> — income to fund later renovations.</li>
        <li><a href="/guides/paralives-lag-fix-performance-optimization">Performance guide</a> — if big lots hitch when you orbit the camera.</li>
        <li><a href="/wiki/build-tools">Build tools wiki</a> — curved walls, color wheel, pools roadmap notes.</li>
      </ul>

      <h2>Build Mode FAQ</h2>
      <h3>What should I build first?</h3>
      <p>
        A small straight-wall home that supports sleep, hygiene, and food. Style, platforms, and drama come after Live
        Mode confirms the layout works.
      </p>
      <h3>Can doors go on curved walls?</h3>
      <p>
        Not in our current EA client — reserve straight segments for every opening.
      </p>
      <h3>Why are platforms risky early?</h3>
      <p>
        At $25/m² versus $1/m² for walls, split-level hero shots are a luxury build, not a starter template.
      </p>
      <h3>Can I undo experiments?</h3>
      <p>
        Yes — undo, redo, sell, and sledgehammer are there so you can learn without living inside every mistake.
      </p>

      <p>
        Updated May 27, 2026 from our EA saves. Meter rates and placement rules can change — skim
        <a href="/updates">Updates</a> after patches before committing Paradimes to a dream home.
      </p>
    `,
  },
]

export default guidesData
export const guides = guidesData
