(() => {
  "use strict";
  const data = window.FORMAL_SCIENCES_CURRICULUM;
  const byId = new Map(data.concepts.map((item) => [item.id, item]));
  const subfieldById = new Map(data.subfields.map((item) => [item.id, item]));
  const areaById = new Map(data.areas.map((item) => [item.id, item]));
  const workById = new Map(data.works.map((item) => [item.id, item]));
  const incoming = new Map();
  const parallel = new Map();
  const outgoing = new Map();
  let selectedArea = data.areas[0].id;
  let selectedConcept = null;

  data.concepts.forEach((concept) => {
    incoming.set(concept.id, concept.required || []);
    parallel.set(concept.id, concept.parallel || []);
    (concept.required || []).forEach((id) => {
      if (!outgoing.has(id)) outgoing.set(id, []);
      outgoing.get(id).push(concept.id);
    });
  });

  const $ = (id) => document.getElementById(id);
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[char]));

  function areaConcepts(areaId) {
    const subfieldIds = new Set(data.subfields.filter((item) => item.area === areaId).map((item) => item.id));
    return data.concepts.filter((item) => subfieldIds.has(item.subfield));
  }

  function renderAreas() {
    $("areaList").innerHTML = data.areas.map((area) => {
      const count = areaConcepts(area.id).length;
      return `<button class="area-button${area.id === selectedArea ? " active" : ""}" data-area="${esc(area.id)}" style="--area:${esc(area.color)}">
        <i class="area-swatch"></i><span class="area-name">${esc(area.title)}</span><span class="area-count">${count}</span>
      </button>`;
    }).join("");
    document.querySelectorAll("[data-area]").forEach((button) => {
      button.addEventListener("click", () => {
        selectedArea = button.dataset.area;
        renderAreas();
        renderTree();
      });
    });
  }

  function renderTree() {
    const area = areaById.get(selectedArea);
    const subfields = data.subfields.filter((item) => item.area === selectedArea);
    const conceptCount = areaConcepts(selectedArea).length;
    $("areaKind").textContent = area.kind || "Formal-science area";
    $("areaTitle").textContent = area.title;
    $("areaDescription").textContent = area.description;
    $("areaStats").innerHTML = `<span class="stat-chip">${subfields.length} subfields</span><span class="stat-chip">${conceptCount} concepts</span>`;
    $("subfieldTree").style.setProperty("--area", area.color);
    $("subfieldTree").innerHTML = subfields.map((subfield, index) => {
      const concepts = data.concepts.filter((item) => item.subfield === subfield.id);
      return `<details class="subfield" ${index < 2 ? "open" : ""}>
        <summary><span class="subfield-title">${esc(subfield.title)}</span><span class="subfield-meta">${concepts.length} concepts · ${esc(subfield.level)}</span></summary>
        <p class="subfield-description">${esc(subfield.description)}</p>
        <div class="concept-grid">
          ${concepts.map((concept) => `<button class="concept-button${selectedConcept === concept.id ? " selected" : ""}" data-concept="${esc(concept.id)}" style="--area:${esc(area.color)}">
            <strong>${esc(concept.title)}</strong><small>${(concept.required || []).length} sequential · ${(concept.parallel || []).length} parallel</small>
          </button>`).join("")}
        </div>
      </details>`;
    }).join("");
    bindConceptButtons();
  }

  function relationButtons(ids, emptyText) {
    if (!ids.length) return `<span class="relation-empty">${esc(emptyText)}</span>`;
    return ids.map((id) => {
      const concept = byId.get(id);
      return concept ? `<button class="relation-button" data-concept="${esc(id)}">${esc(concept.title)}</button>` : "";
    }).join("");
  }

  function orderedRequired(id) {
    const seen = new Set();
    const order = [];
    const visit = (current) => {
      for (const parent of incoming.get(current) || []) {
        if (seen.has(parent)) continue;
        visit(parent);
        seen.add(parent);
        order.push(parent);
      }
    };
    visit(id);
    return order;
  }

  function renderWorks(concept) {
    return concept.readings.map((reading, index) => {
      const work = workById.get(reading.work);
      if (!work) return "";
      const query = encodeURIComponent(`"${work.title}" "${work.author}"`);
      return `<details class="work-card" ${index === 0 ? "open" : ""}>
        <summary>
          <span><span class="work-title">${esc(work.title)}</span><span class="work-author">${esc(work.author)} · ${esc(work.edition)} · ${esc(work.year)}</span></span>
          <span class="work-role">${esc(reading.role)}</span>
        </summary>
        <div class="work-body">
          <p><strong>Read:</strong> ${esc(reading.locator)}</p>
          <p><strong>Purpose:</strong> ${esc(reading.purpose)}</p>
          <div class="work-links">
            ${work.url ? `<a href="${esc(work.url)}" target="_blank" rel="noopener">Official or legal source</a>` : ""}
            <a href="https://books.google.com/books?q=${query}" target="_blank" rel="noopener">Google Books</a>
            <a href="https://search.worldcat.org/search?q=${query}" target="_blank" rel="noopener">WorldCat</a>
          </div>
        </div>
      </details>`;
    }).join("");
  }

  function selectConcept(id) {
    const concept = byId.get(id);
    if (!concept) return;
    selectedConcept = id;
    const subfield = subfieldById.get(concept.subfield);
    const area = areaById.get(subfield.area);
    selectedArea = area.id;
    renderAreas();
    renderTree();
    $("detailEmpty").hidden = true;
    $("detailContent").hidden = false;
    $("detailArea").textContent = `${area.title} · ${subfield.title}`;
    $("detailTitle").textContent = concept.title;
    $("detailSummary").textContent = concept.summary;
    $("detailBadges").innerHTML = `<span class="badge">${esc(subfield.level)}</span><span class="badge">${concept.readings.length} located works</span><span class="badge">${(concept.required || []).length} required</span>`;
    $("requiredList").innerHTML = relationButtons(orderedRequired(id), "Entry concept for this path");
    $("parallelList").innerHTML = relationButtons(parallel.get(id) || [], "No parallel preparation recorded");
    $("nextList").innerHTML = relationButtons(outgoing.get(id) || [], "No direct successor recorded");
    $("workCount").textContent = `${concept.readings.length} works`;
    $("bibliographyList").innerHTML = renderWorks(concept);
    $("detailPanel").classList.add("open");
    bindConceptButtons();
  }

  function bindConceptButtons() {
    document.querySelectorAll("[data-concept]").forEach((button) => {
      button.onclick = () => selectConcept(button.dataset.concept);
    });
  }

  function search(query) {
    const value = query.trim().toLowerCase();
    if (!value) {
      $("searchResults").hidden = true;
      $("subfieldTree").hidden = false;
      return;
    }
    const results = data.concepts.filter((concept) => {
      const subfield = subfieldById.get(concept.subfield);
      const area = areaById.get(subfield.area);
      const works = concept.readings.map((reading) => workById.get(reading.work)).filter(Boolean);
      return [concept.title, concept.summary, subfield.title, area.title, ...works.flatMap((work) => [work.title, work.author])]
        .join(" ").toLowerCase().includes(value);
    }).slice(0, 80);
    $("subfieldTree").hidden = true;
    $("searchResults").hidden = false;
    $("searchResults").innerHTML = results.length ? results.map((concept) => {
      const subfield = subfieldById.get(concept.subfield);
      const area = areaById.get(subfield.area);
      return `<button class="search-result" data-concept="${esc(concept.id)}"><span><strong>${esc(concept.title)}</strong><span>${esc(area.title)} · ${esc(subfield.title)}</span></span><span>${concept.readings.length} works</span></button>`;
    }).join("") : `<p class="relation-empty">No matching concepts or works.</p>`;
    bindConceptButtons();
  }

  function audit() {
    const ids = new Set(data.concepts.map((item) => item.id));
    const workIds = new Set(data.works.map((item) => item.id));
    const duplicateIds = data.concepts.length - ids.size;
    const unresolvedPrereqs = data.concepts.flatMap((item) => [...(item.required || []), ...(item.parallel || [])]).filter((id) => !ids.has(id)).length + (data.unresolvedReferences || []).length;
    const conceptsWithoutWorks = data.concepts.filter((item) => !item.readings?.length).length;
    const invalidReadings = data.concepts.flatMap((item) => item.readings || []).filter((item) => !workIds.has(item.work) || !item.locator || !item.role || !item.purpose).length;
    const incompleteWorks = data.works.filter((item) => !item.author || !item.title || !item.edition || !item.year).length;
    let cycles = 0;
    const visiting = new Set();
    const visited = new Set();
    const visit = (id) => {
      if (visiting.has(id)) { cycles += 1; return; }
      if (visited.has(id)) return;
      visiting.add(id);
      for (const parent of incoming.get(id) || []) visit(parent);
      visiting.delete(id);
      visited.add(id);
    };
    data.concepts.forEach((item) => visit(item.id));
    const checks = [
      ["Exactly 14 declared areas", data.areas.length === 14, data.areas.length],
      ["Unique concept identifiers", duplicateIds === 0, duplicateIds],
      ["Resolved prerequisite identifiers", unresolvedPrereqs === 0, unresolvedPrereqs],
      ["Acyclic sequential prerequisite graph", cycles === 0, cycles],
      ["Every concept has located readings", conceptsWithoutWorks === 0, conceptsWithoutWorks],
      ["Every reading has work, locator, role, and purpose", invalidReadings === 0, invalidReadings],
      ["Every work identifies edition and year", incompleteWorks === 0, incompleteWorks],
    ];
    $("auditMetrics").innerHTML = [
      [data.areas.length, "areas"], [data.subfields.length, "subfields"], [data.concepts.length, "concepts"],
      [data.concepts.reduce((sum, item) => sum + item.readings.length, 0), "located readings"],
    ].map(([value, label]) => `<div class="audit-metric"><strong>${value}</strong><span>${label}</span></div>`).join("");
    $("coverageStatement").textContent = data.coverageStatement;
    $("auditChecks").innerHTML = checks.map(([label, pass, value]) => `<div class="audit-check ${pass ? "pass" : "fail"}"><span>${esc(label)}</span><strong>${pass ? "Pass" : `Fail: ${value}`}</strong></div>`).join("");
    return { generatedAt: new Date().toISOString(), metrics: { areas: data.areas.length, subfields: data.subfields.length, concepts: data.concepts.length }, checks: checks.map(([name, pass, value]) => ({ name, pass, value })) };
  }

  $("searchInput").addEventListener("input", (event) => search(event.target.value));
  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && document.activeElement !== $("searchInput")) {
      event.preventDefault();
      $("searchInput").focus();
    }
  });
  $("closeDetail").addEventListener("click", () => $("detailPanel").classList.remove("open"));
  $("auditButton").addEventListener("click", () => {
    audit();
    $("auditDialog").showModal();
  });
  $("downloadAudit").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify({ curriculum: data, audit: audit() }, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "formal-sciences-audit.json";
    link.click();
    URL.revokeObjectURL(link.href);
  });

  renderAreas();
  renderTree();
})();
