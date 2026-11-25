// Homepage behaviour: mobile menu, directory filter, city filter, «Ви тут» mark after anchor jumps.
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const desktop = window.matchMedia("(min-width: 1024px)");

/* Mobile menu (<details>): close after a link is chosen or on Escape */
const menu = document.querySelector<HTMLDetailsElement>(".menu");
menu?.addEventListener("click", (e) => {
  const a = (e.target as HTMLElement).closest("a");
  if (a) menu.open = false;
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menu?.open) {
    menu.open = false;
    menu.querySelector("summary")?.focus();
  }
});

/* Directory groups: all open on desktop, accordions on phones */
const groups = [...document.querySelectorAll<HTMLDetailsElement>("[data-group]")];
const syncGroups = () => groups.forEach((g, i) => (g.open = desktop.matches || i === 0));
syncGroups();
desktop.addEventListener("change", syncGroups);
groups.forEach((g) => g.querySelector("summary")?.addEventListener("click", (e) => { if (desktop.matches) e.preventDefault(); }));

/* Directory filter */
const input = document.querySelector<HTMLInputElement>("#dir-q");
const count = document.querySelector<HTMLElement>("#dir-count");
const empty = document.querySelector<HTMLElement>(".dir__empty");
const norm = (s: string) => s.toLowerCase().replace(/[’'`ʼ]/g, "").trim();
input?.addEventListener("input", () => {
  const q = norm(input.value);
  let hits = 0;
  groups.forEach((g) => {
    const title = norm(g.querySelector("h3")?.textContent ?? "");
    const items = [...g.querySelectorAll<HTMLElement>("[data-item]")];
    const titleHit = q !== "" && title.includes(q);
    let groupHits = 0;
    items.forEach((li) => {
      const hit = q === "" || titleHit || norm(li.textContent ?? "").includes(q);
      li.classList.toggle("is-off", !hit);
      li.classList.toggle("is-hit", q !== "" && hit);
      if (hit) groupHits++;
    });
    g.classList.toggle("is-gone", groupHits === 0);
    if (q !== "" && groupHits > 0) g.open = true;
    else if (q === "") g.open = desktop.matches || g === groups[0];
    hits += q === "" ? 0 : groupHits;
  });
  if (count) count.textContent = q === "" ? "Показано всі напрями" : hits ? `Знайдено: ${hits}` : "Нічого не знайдено";
  if (empty) empty.hidden = q === "" || hits > 0;
});

/* City filter for addresses */
const cityBtns = [...document.querySelectorAll<HTMLButtonElement>(".addr__filter button")];
const cityItems = [...document.querySelectorAll<HTMLElement>(".addr__card, .coast__stop")];
cityBtns.forEach((b) =>
  b.addEventListener("click", () => {
    const city = b.dataset.city;
    cityBtns.forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    cityItems.forEach((el) => el.classList.toggle("is-dim", city !== "all" && el.dataset.city !== city));
  }),
);

/* «Ви тут»: a green mark under the heading of the section we arrived at */
let hereTimer = 0;
const markHere = (id: string) => {
  const target = document.getElementById(id);
  if (!target || !target.querySelector(".sec-title")) return;
  document.querySelectorAll(".is-here").forEach((el) => el.classList.remove("is-here"));
  window.clearTimeout(hereTimer);
  const show = () => {
    target.classList.add("is-here");
    hereTimer = window.setTimeout(() => target.classList.remove("is-here"), 1900);
  };
  window.setTimeout(show, reduce ? 0 : 450);
};
document.addEventListener("click", (e) => {
  const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
  if (a && a.hash.length > 1) markHere(a.hash.slice(1));
});
