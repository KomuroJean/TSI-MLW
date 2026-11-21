'use strict';

/** Acessibilidade: menu móvel e navegação por teclado. */
const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');

function closeMenu() {
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', 'Abrir menu de navegação');
  primaryNav?.classList.remove('is-open');
  document.body.classList.remove('menu-open');
}

menuToggle?.addEventListener('click', () => {
  const opening = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(opening));
  menuToggle.setAttribute('aria-label', opening ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
  primaryNav.classList.toggle('is-open', opening);
  document.body.classList.toggle('menu-open', opening);
});

primaryNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth > 820) closeMenu(); });

/** Busca no corpo docente por nome (acentos não interferem) e filtro por titulação. */
const facultyCards = [...document.querySelectorAll('.faculty-card')];
const facultySearch = document.querySelector('#faculty-search');
const facultyCount = document.querySelector('#faculty-count');
const facultyEmpty = document.querySelector('#faculty-empty');
const facultyMore = document.querySelector('#faculty-more');
const degreeButtons = [...document.querySelectorAll('[data-degree].filter-button')];
let activeDegree = 'all';
let expanded = false;
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');

function filterFaculty() {
  const query = normalize(facultySearch.value.trim());
  const filtering = Boolean(query) || activeDegree !== 'all';
  const matching = facultyCards.filter(card =>
    (activeDegree === 'all' || card.dataset.degree === activeDegree) &&
    normalize(card.dataset.search).includes(query)
  );
  facultyCards.forEach(card => {
    const inResults = matching.includes(card);
    const withinLimit = filtering || expanded || matching.indexOf(card) < 6;
    card.hidden = !inResults || !withinLimit;
  });
  facultyCount.textContent = `${matching.length} ${matching.length === 1 ? 'docente encontrado' : 'docentes encontrados'}`;
  facultyEmpty.hidden = matching.length !== 0;
  facultyMore.hidden = filtering || matching.length <= 6;
  facultyMore.innerHTML = expanded ? 'Mostrar menos <span aria-hidden="true">↑</span>' : 'Mostrar todos os docentes <span aria-hidden="true">↓</span>';
}

facultySearch?.addEventListener('input', filterFaculty);
degreeButtons.forEach(button => button.addEventListener('click', () => {
  activeDegree = button.dataset.degree;
  degreeButtons.forEach(item => {
    const selected = item === button;
    item.classList.toggle('is-active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  filterFaculty();
}));
facultyMore?.addEventListener('click', () => { expanded = !expanded; filterFaculty(); });
if (facultyCards.length) filterFaculty();

/** Busca local de documentos: mostra apenas categorias com correspondência. */
const docSearch = document.querySelector('#doc-search');
const docGroups = [...document.querySelectorAll('[data-doc-category]')];
const docCount = document.querySelector('#doc-count');
const docsEmpty = document.querySelector('#docs-empty');
const totalDocs = docGroups.reduce((count, group) => count + group.querySelectorAll('li').length, 0);
function searchDocs() {
  const query = normalize(docSearch.value.trim());
  let visible = 0;
  docGroups.forEach((group, index) => {
    let groupCount = 0;
    group.querySelectorAll('li').forEach(item => {
      const matches = normalize(item.textContent).includes(query);
      item.hidden = !matches;
      if (matches) groupCount++;
    });
    group.hidden = groupCount === 0;
    const count = group.querySelector('.doc-category-count');
    if (count) count.textContent = `${groupCount} ${groupCount === 1 ? 'documento' : 'documentos'}`;
    if (query) group.open = groupCount > 0;
    else group.open = index === 0;
    visible += groupCount;
  });
  docCount.textContent = query ? `${visible} de ${totalDocs} documentos` : `${totalDocs} documentos no acervo`;
  docsEmpty.hidden = visible !== 0;
}
docSearch?.addEventListener('input', searchDocs);
if (docGroups.length) searchDocs();

/** Destaque discreto da seção atual na navegação. */
const internalLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
if ('IntersectionObserver' in window && internalLinks.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        internalLinks.forEach(link => link.classList.toggle('is-current', link.hash === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: '-25% 0px -58% 0px', threshold: 0 });
  internalLinks.forEach(link => { const target = document.querySelector(link.hash); if (target) observer.observe(target); });
}
