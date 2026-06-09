const phases = {
  p1: {
    title: 'Phase 1 — Social assessment',
    color: '#0C447C', border: '#85B7EB', bg: '#f0f7ff',
    body: '<p>This is where planning <strong>always begins</strong>. Before identifying the health problem, planners ask the community: <em>What matters to you? What quality-of-life issues are you experiencing?</em></p><p>Tools used: community surveys, focus groups, town hall meetings, interviews.</p><p><strong>Why start here?</strong> Health programs that ignore what the community actually cares about rarely get adopted. If residents do not see the program as relevant to their lives, they will not participate.</p><p><strong>Mesa Verde example:</strong> Community members said their biggest concerns for teens were stress, social media pressure, and a lack of after-school activities — not vaping specifically. That community voice shapes everything that follows.</p>'
  },
  p2: {
    title: 'Phase 2 — Epidemiological assessment',
    color: '#0C447C', border: '#85B7EB', bg: '#f0f7ff',
    body: '<p>Now planners add <strong>data</strong>: what is the specific health problem, and how widespread is it? This phase uses statistics — disease rates, hospital records, survey data — to pinpoint the priority health problem.</p><p>The goal is to connect the community\'s quality-of-life concerns (Phase 1) to a measurable health issue.</p><p><strong>Mesa Verde example:</strong> Nurses report nearly 1 in 3 students mentions vaping; 68% of parents do not know e-cigarettes contain nicotine. These numbers confirm vaping as the priority problem linked to the teen health concerns from Phase 1.</p>'
  },
  p3: {
    title: 'Phase 3 — Behavioral &amp; environmental assessment',
    color: '#633806', border: '#FAC775', bg: '#fffbf0',
    body: '<p>This phase asks: <strong>What specific behaviors and environmental conditions are causing or worsening the problem?</strong></p><p><strong>Behavioral factors</strong> are things individuals do — like sharing vape devices, vaping in bathrooms, or choosing to vape to manage stress.</p><p><strong>Environmental factors</strong> are conditions outside the individual — like the lack of a written school vaping policy, or the absence of any youth cessation programs in the county.</p><p>Distinguishing behavior from environment matters because they require completely different interventions. You cannot fix an absent policy by educating a teenager.</p>'
  },
  p4: {
    title: 'Phase 4 — Educational &amp; ecological assessment: The P·E·R factors',
    color: '#712B13', border: '#F0997B', bg: '#fff5f0',
    body: "<p>This is the most analytical phase of PRECEDE. It asks: <strong>WHY are those behaviors happening?</strong> The answer comes in three types of factors — and each one requires a completely different type of intervention.</p><div class='per-grid'><div class='per-card' style='background:#E6F1FB;border-color:#85B7EB'><strong style='color:#0C447C'>Predisposing</strong><span style='color:#185FA5'>Knowledge, beliefs, attitudes, and self-efficacy that come BEFORE a behavior. What does the person think or feel that leads them to act this way?</span><br><em style='color:#185FA5'>Mesa Verde: Teens believe 'everyone does it' and do not know vaping is harmful.</em></div><div class='per-card' style='background:#E1F5EE;border-color:#5DCAA5'><strong style='color:#085041'>Enabling</strong><span style='color:#0F6E56'>Structural resources, access to services, and skills (or barriers) that allow or block a behavior — regardless of what someone believes.</span><br><em style='color:#0F6E56'>Mesa Verde: No youth cessation clinic; nearest help is 45 min away.</em></div><div class='per-card' style='background:#FAEEDA;border-color:#FAC775'><strong style='color:#633806'>Reinforcing</strong><span style='color:#854F0B'>Social rewards, peer reactions, and feedback from others that keep a behavior going after it has started.</span><br><em style='color:#854F0B'>Mesa Verde: Friends think it\'s 'uncool' to refuse; device-sharing normalizes vaping.</em></div></div>"
  },
  p5: {
    title: 'Phase 5 — Implementation',
    color: '#085041', border: '#5DCAA5', bg: '#f0fdf6',
    body: '<p>This is where the program actually launches. The intervention is designed based on the PER factor analysis from Phase 4 — each strategy should target a specific predisposing, enabling, or reinforcing factor.</p><p>For your assignment, you will not implement a real program — but you will <strong>design</strong> what one would look like: who delivers it, where, to whom, and which PER factor it targets.</p>'
  },
  p6: {
    title: 'Phase 6 — Process evaluation',
    color: '#27500A', border: '#97C459', bg: '#f4fce8',
    body: '<p>Process evaluation asks: <strong>Did we do what we planned?</strong> It does NOT measure whether the health problem improved — it measures fidelity to the plan.</p><p>Examples: How many sessions were held? How many participants attended each week? Were trained facilitators delivering the content as designed?</p><p>This matters because if impact evaluation shows no change, you first need to know whether the program was even delivered correctly before concluding it did not work.</p>'
  },
  p7: {
    title: 'Phase 7 — Impact evaluation',
    color: '#3C3489', border: '#AFA9EC', bg: '#f5f4ff',
    body: '<p>Impact evaluation asks: <strong>Did the PER factors change?</strong> This is the middle step between running the program and measuring the health outcome.</p><p>If your program targeted a predisposing factor (like teen knowledge about nicotine), impact evaluation measures whether knowledge actually changed. If it targeted an enabling factor (like access to a cessation program), it measures whether access improved.</p><p>Impact changes can appear before vaping rates drop — they are the early signal that the program is working.</p>'
  },
  p8: {
    title: 'Phase 8 — Outcome evaluation',
    color: '#4B1528', border: '#ED93B1', bg: '#fff0f5',
    body: '<p>Outcome evaluation asks the hardest question: <strong>Did the health problem actually improve?</strong> For Mesa Verde, this means: did teen vaping rates decrease?</p><p>Outcome changes often take years to appear and are influenced by many factors outside your program. That is why all three evaluation phases matter — if your process and impact evaluations were positive but your outcome did not change, something is still going wrong between behavior change and the health outcome.</p>'
  }
};

function buildSvg() {
  return `
<svg class="model-svg" viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arr" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
      <path d="M0,0 L0,6 L7,3 z" fill="#888"/>
    </marker>
  </defs>

  <rect x="8" y="8" width="340" height="205" rx="10" fill="none" stroke="#85B7EB" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="178" y="24" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#185FA5">PRECEDE — diagnose &amp; plan</text>

  <rect x="356" y="8" width="336" height="205" rx="10" fill="none" stroke="#5DCAA5" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="524" y="24" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#0F6E56">PROCEED — implement &amp; evaluate</text>

  <g class="phase-box" onclick="showPhase('p1')">
    <rect x="18" y="38" width="76" height="158" rx="6" fill="#E6F1FB" stroke="#85B7EB" stroke-width="1.5"/>
    <text x="56" y="82" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#0C447C">Phase 1</text>
    <text x="56" y="97" text-anchor="middle" font-family="Arial" font-size="10" fill="#185FA5">Social</text>
    <text x="56" y="110" text-anchor="middle" font-family="Arial" font-size="10" fill="#185FA5">Assessment</text>
    <text x="56" y="155" text-anchor="middle" font-family="Arial" font-size="9" fill="#185FA5">click to learn</text>
  </g>

  <g class="phase-box" onclick="showPhase('p2')">
    <rect x="102" y="38" width="76" height="158" rx="6" fill="#E6F1FB" stroke="#85B7EB" stroke-width="1.5"/>
    <text x="140" y="82" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#0C447C">Phase 2</text>
    <text x="140" y="97" text-anchor="middle" font-family="Arial" font-size="10" fill="#185FA5">Epidemiological</text>
    <text x="140" y="110" text-anchor="middle" font-family="Arial" font-size="10" fill="#185FA5">Assessment</text>
    <text x="140" y="155" text-anchor="middle" font-family="Arial" font-size="9" fill="#185FA5">click to learn</text>
  </g>

  <g class="phase-box" onclick="showPhase('p3')">
    <rect x="186" y="38" width="76" height="158" rx="6" fill="#FAEEDA" stroke="#FAC775" stroke-width="1.5"/>
    <text x="224" y="75" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#633806">Phase 3</text>
    <text x="224" y="90" text-anchor="middle" font-family="Arial" font-size="10" fill="#854F0B">Behavioral &amp;</text>
    <text x="224" y="103" text-anchor="middle" font-family="Arial" font-size="10" fill="#854F0B">Environmental</text>
    <text x="224" y="116" text-anchor="middle" font-family="Arial" font-size="10" fill="#854F0B">Assessment</text>
    <text x="224" y="155" text-anchor="middle" font-family="Arial" font-size="9" fill="#854F0B">click to learn</text>
  </g>

  <g class="phase-box" onclick="showPhase('p4')">
    <rect x="270" y="38" width="76" height="158" rx="6" fill="#FAECE7" stroke="#F0997B" stroke-width="1.5"/>
    <text x="308" y="75" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#712B13">Phase 4</text>
    <text x="308" y="90" text-anchor="middle" font-family="Arial" font-size="10" fill="#993C1D">Educational &amp;</text>
    <text x="308" y="103" text-anchor="middle" font-family="Arial" font-size="10" fill="#993C1D">Ecological</text>
    <text x="308" y="116" text-anchor="middle" font-family="Arial" font-size="10" fill="#993C1D">Assessment</text>
    <text x="308" y="140" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold" fill="#993C1D">P · E · R</text>
    <text x="308" y="157" text-anchor="middle" font-family="Arial" font-size="9" fill="#993C1D">click to learn</text>
  </g>

  <line x1="94" y1="117" x2="102" y2="117" stroke="#888" stroke-width="1.2" marker-end="url(#arr)"/>
  <line x1="178" y1="117" x2="186" y2="117" stroke="#888" stroke-width="1.2" marker-end="url(#arr)"/>
  <line x1="262" y1="117" x2="270" y2="117" stroke="#888" stroke-width="1.2" marker-end="url(#arr)"/>
  <line x1="346" y1="117" x2="356" y2="117" stroke="#888" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr)"/>

  <g class="phase-box" onclick="showPhase('p5')">
    <rect x="366" y="38" width="74" height="158" rx="6" fill="#E1F5EE" stroke="#5DCAA5" stroke-width="1.5"/>
    <text x="403" y="82" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#085041">Phase 5</text>
    <text x="403" y="97" text-anchor="middle" font-family="Arial" font-size="10" fill="#0F6E56">Implement-</text>
    <text x="403" y="110" text-anchor="middle" font-family="Arial" font-size="10" fill="#0F6E56">ation</text>
    <text x="403" y="155" text-anchor="middle" font-family="Arial" font-size="9" fill="#0F6E56">click to learn</text>
  </g>

  <g class="phase-box" onclick="showPhase('p6')">
    <rect x="448" y="38" width="74" height="158" rx="6" fill="#EAF3DE" stroke="#97C459" stroke-width="1.5"/>
    <text x="485" y="82" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#27500A">Phase 6</text>
    <text x="485" y="97" text-anchor="middle" font-family="Arial" font-size="10" fill="#3B6D11">Process</text>
    <text x="485" y="110" text-anchor="middle" font-family="Arial" font-size="10" fill="#3B6D11">Evaluation</text>
    <text x="485" y="155" text-anchor="middle" font-family="Arial" font-size="9" fill="#3B6D11">click to learn</text>
  </g>

  <g class="phase-box" onclick="showPhase('p7')">
    <rect x="530" y="38" width="74" height="158" rx="6" fill="#EEEDFE" stroke="#AFA9EC" stroke-width="1.5"/>
    <text x="567" y="82" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#3C3489">Phase 7</text>
    <text x="567" y="97" text-anchor="middle" font-family="Arial" font-size="10" fill="#534AB7">Impact</text>
    <text x="567" y="110" text-anchor="middle" font-family="Arial" font-size="10" fill="#534AB7">Evaluation</text>
    <text x="567" y="155" text-anchor="middle" font-family="Arial" font-size="9" fill="#534AB7">click to learn</text>
  </g>

  <g class="phase-box" onclick="showPhase('p8')">
    <rect x="612" y="38" width="72" height="158" rx="6" fill="#FBEAF0" stroke="#ED93B1" stroke-width="1.5"/>
    <text x="648" y="82" text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="#4B1528">Phase 8</text>
    <text x="648" y="97" text-anchor="middle" font-family="Arial" font-size="10" fill="#72243E">Outcome</text>
    <text x="648" y="110" text-anchor="middle" font-family="Arial" font-size="10" fill="#72243E">Evaluation</text>
    <text x="648" y="155" text-anchor="middle" font-family="Arial" font-size="9" fill="#72243E">click to learn</text>
  </g>

  <line x1="440" y1="117" x2="448" y2="117" stroke="#888" stroke-width="1.2" marker-end="url(#arr)"/>
  <line x1="522" y1="117" x2="530" y2="117" stroke="#888" stroke-width="1.2" marker-end="url(#arr)"/>
  <line x1="604" y1="117" x2="612" y2="117" stroke="#888" stroke-width="1.2" marker-end="url(#arr)"/>
</svg>`;
}

function showPhase(id) {
  const ph = phases[id];
  const panel = document.getElementById('detail-panel');
  if (!ph || !panel) return;
  panel.style.display = 'block';
  panel.style.borderColor = ph.border;
  panel.style.background = ph.bg;
  panel.innerHTML = `<h3 style="color:${ph.color}">${ph.title}</h3>${ph.body}`;
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function renderNav(links = []) {
  if (!links.length) return '';
  return `<div class="nav-stack">${links.map((link) => `<a class="nav-link${link.active ? ' is-active' : ''}" href="${link.href}">${link.label}</a>`).join('')}</div>`;
}

function renderSummary(config) {
  const focusItems = (config.focusItems || []).map((item) => `<li>${item}</li>`).join('');
  return `
    <aside class="summary-card">
      <p class="eyebrow">${config.summaryKicker || 'Route focus'}</p>
      <h2>${config.summaryTitle || config.title}</h2>
      <p>${config.summaryText || config.intro || ''}</p>
      ${focusItems ? `<ul class="summary-list">${focusItems}</ul>` : ''}
    </aside>`;
}

function renderPage() {
  const config = window.PAGE_CONFIG || {};
  const title = config.title || 'PRECEDE-PROCEED Interactive Model';
  document.title = title;

  document.body.innerHTML = `
    <main class="app-shell">
      <header class="hero">
        <div>
          <p class="eyebrow">${config.kicker || 'Interactive route'}</p>
          <h1>${title}</h1>
          <p class="hero-text">${config.intro || 'Explore the PRECEDE-PROCEED model through the clickable diagram below.'}</p>
          <div class="route-meta">
            <span class="route-chip">${config.routeLabel || 'Static GitHub Pages route'}</span>
            ${config.phaseSpan ? `<span class="route-chip">${config.phaseSpan}</span>` : ''}
          </div>
        </div>
        ${renderNav(config.links)}
      </header>

      <section class="content-grid">
        ${renderSummary(config)}
        <section class="model-card">
          <p class="model-note">Click any phase to learn what it involves and how it connects to the Mesa Verde vaping scenario.</p>
          ${buildSvg()}
          <p class="hint">Click any phase box above to see its definition and example.</p>
          <div id="detail-panel"></div>
        </section>
      </section>
    </main>`;

  window.showPhase = showPhase;
  if (config.defaultPhase) {
    showPhase(config.defaultPhase);
  }
}

window.addEventListener('DOMContentLoaded', renderPage);