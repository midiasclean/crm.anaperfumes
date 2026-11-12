/* =========================================================
   Ana Perfumes · CRM para perfumaria
   Dados salvos no navegador (localStorage). Sem dependências.
   ========================================================= */
(function () {
  'use strict';

  /* ---------------- Ícones ---------------- */
  const S = (p, extra = '') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" ${extra}>${p}</svg>`;
  const I = {
    menu: S('<path d="M3 6h18M3 12h18M3 18h18"/>'),
    back: S('<path d="M15 5l-7 7 7 7"/>', 'stroke-width="2.2"'),
    plusCircle: S('<rect x="2" y="2" width="20" height="20" rx="7" fill="#5a2650" stroke="none"/><path d="M12 7.5v9M7.5 12h9" stroke="#fff" stroke-width="2"/>'),
    plus: S('<path d="M12 5v14M5 12h14"/>', 'stroke-width="2.2"'),
    grid: S('<rect x="3.5" y="3.5" width="7" height="7" rx="2"/><rect x="13.5" y="3.5" width="7" height="7" rx="2"/><rect x="3.5" y="13.5" width="7" height="7" rx="2"/><rect x="13.5" y="13.5" width="7" height="7" rx="2"/>'),
    search: S('<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>', 'stroke-width="2"'),
    filter: S('<path d="M3 6h18M6 12h12M9 18h6"/>'),
    users: S('<circle cx="12" cy="6.5" r="2.5"/><circle cx="5.5" cy="9" r="2"/><circle cx="18.5" cy="9" r="2"/><path d="M8 20v-5a4 4 0 0 1 8 0v5M2 20v-3.5A3 3 0 0 1 5.5 13.5c.8 0 1.5.3 2 .7M22 20v-3.5a3 3 0 0 0-3.5-3c-.8 0-1.5.3-2 .7M2 20h20"/>'),
    box: S('<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10M7.5 4.5l9 5"/>'),
    tools: S('<path d="M14.7 6.3a4 4 0 0 1 5-5l-2.6 2.6.9 2.1 2.1.9L22.7 4.3a4 4 0 0 1-5 5L8.5 18.5a2.1 2.1 0 0 1-3-3z"/><path d="M4 2l3 3v2H5L2 4zM13 15l6 6a1.4 1.4 0 0 0 2-2l-6-6"/>'),
    chart: S('<rect x="3" y="12" width="3" height="9"/><rect x="8.5" y="9" width="3" height="12"/><rect x="14" y="13" width="3" height="8"/><rect x="19" y="10" width="2.5" height="11"/><path d="M4.5 7l5-3 5 4 6-4"/><circle cx="4.5" cy="7" r="1"/><circle cx="9.5" cy="4" r="1"/><circle cx="14.5" cy="8" r="1"/><circle cx="20.5" cy="4" r="1"/>'),
    help: S('<circle cx="12" cy="12" r="10"/><path d="M9.5 9a2.5 2.5 0 0 1 5 .5c0 1.7-2.5 2-2.5 3.5"/><circle cx="12" cy="17" r=".6" fill="currentColor"/>'),
    settings: S('<path d="M3 6h18M3 12h18M3 18h18"/><circle cx="8" cy="6" r="2" fill="currentColor"/><circle cx="15" cy="12" r="2" fill="currentColor"/><circle cx="10" cy="18" r="2" fill="currentColor"/>'),
    heart: S('<circle cx="12" cy="12" r="11" fill="currentColor" stroke="none"/><path d="M12 17s-5-3-5-6.3A2.7 2.7 0 0 1 12 9.3a2.7 2.7 0 0 1 5 1.4C17 14 12 17 12 17z" fill="#fff" stroke="none"/>'),
    chev: S('<path d="M9 5l7 7-7 7"/>', 'stroke-width="2"'),
    calendar: S('<rect x="3" y="4.5" width="18" height="17" rx="2"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4"/><text x="12" y="19" font-size="7.5" text-anchor="middle" fill="currentColor" stroke="none" font-family="Roboto,Arial">31</text>'),
    money: S('<path d="M8 2.5h6l-1.5 3h-3z"/><path d="M9.5 5.5C5 8 3 12 3 15.5 3 19 5.5 21 9 21h3"/><path d="M12.5 5.5c2 1.1 3.5 2.6 4.4 4.3"/><path d="M8.8 11.5c0-.8.8-1.4 1.7-1.4s1.6.5 1.7 1.2M8.8 15.5c.1.8.8 1.3 1.7 1.3s1.7-.6 1.7-1.4-.8-1.2-1.7-1.4-1.7-.6-1.7-1.4M10.5 8.8v1.3M10.5 16.8v1.3"/><rect x="14" y="12" width="7.5" height="2.6" rx=".5"/><rect x="14" y="14.6" width="7.5" height="2.6" rx=".5"/><rect x="14" y="17.2" width="7.5" height="2.6" rx=".5"/><rect x="14" y="19.8" width="7.5" height="1.6" rx=".5"/>'),
    orders: S('<rect x="5" y="2.5" width="14" height="19" rx="2" fill="currentColor" stroke="none" opacity=".85"/><path d="M8.5 8h7M8.5 11.5h7M8.5 15h7M8.5 18h4" stroke="#fff"/>'),
    ordersLine: S('<rect x="5" y="2.5" width="14" height="19" rx="1.5"/><path d="M8 6.5l1 1 2-2M13 6.5h3M8 11h8M8 14h8M8 17h5"/>'),
    dash: S('<path d="M3 21h18"/><rect x="4" y="12" width="3" height="8"/><rect x="10.5" y="9" width="3" height="11"/><rect x="17" y="12" width="3" height="8"/><path d="M5.5 7.5L9 4.5l3.5 3 3.5-3 3 2.5"/><circle cx="5.5" cy="7.5" r="1"/><circle cx="9" cy="4.5" r="1"/><circle cx="12.5" cy="7.5" r="1"/><circle cx="16" cy="4.5" r="1"/><circle cx="19" cy="7" r="1"/>'),
    trash: S('<path d="M4 7h16M10 11v6M14 11v6M5 7l1 13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1l1-13M9 7V4h6v3"/>'),
    edit: S('<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>'),
    phone: S('<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2"/>'),
    whats: S('<path d="M3 21l1.6-4.7A9 9 0 1 1 8 19.6z"/><path d="M8.5 9c0 3 3 6.5 6.5 6.5l1.5-1.6-2-1.2-1 .9c-1-.4-2.6-2-3-3l.9-1-1.2-2z"/>'),
    print: S('<path d="M6 9V3h12v6M6 18H4a1 1 0 0 1-1-1v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1h-2"/><rect x="6" y="14" width="12" height="7"/>'),
    check: S('<path d="M5 12.5l4.5 4.5L19 7.5"/>', 'stroke-width="2.2"'),
    wallet: S('<path d="M3 7.5V19a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H5a2 2 0 0 1-2-2 2 2 0 0 1 2-2h11v4"/><path d="M21 12h-4a2 2 0 0 0 0 4h4"/><circle cx="17.5" cy="14" r=".6" fill="currentColor"/>'),
    dollar: S('<circle cx="12" cy="12" r="10"/><path d="M15 8.5c-.4-1-1.6-1.7-3-1.7-1.8 0-3 .9-3 2.2 0 3 6 1.6 6 4.8 0 1.3-1.3 2.4-3.1 2.4-1.5 0-2.7-.7-3.1-1.8M12 5v2M12 17v2"/>'),
    contact: S('<rect x="4" y="2.5" width="14" height="19" rx="2"/><circle cx="11" cy="10" r="2.6"/><path d="M6.5 17.5a4.5 4.5 0 0 1 9 0M20 6v2M20 11v2M20 16v2"/>'),
    close: S('<path d="M6 6l12 12M18 6L6 18"/>', 'stroke-width="2"'),
    more: S('<circle cx="5" cy="12" r="1.3" fill="currentColor"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/><circle cx="19" cy="12" r="1.3" fill="currentColor"/>'),
    perfume: S('<rect x="9.5" y="2.5" width="5" height="3" rx=".5"/><path d="M10.5 5.5v2M13.5 5.5v2"/><rect x="5" y="7.5" width="14" height="14" rx="3"/><path d="M8 12.5h8"/>'),
    gift: S('<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v9h14v-9M12 8v13M12 8c-2-3-6-4-6-1.5S12 8 12 8zm0 0c2-3 6-4 6-1.5S12 8 12 8z"/>'),
    event: S('<rect x="3" y="4.5" width="18" height="17" rx="2"/><path d="M3 9.5h18M8 2.5v4M16 2.5v4M12 13v5M9.5 15.5h5"/>'),
    download: S('<path d="M12 3v12M7 10l5 5 5-5M4 20h16"/>'),
    upload: S('<path d="M12 15V3M7 8l5-5 5 5M4 20h16"/>'),
    cake: S('<path d="M4 21h16v-7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zM4 16c2 1.5 4 1.5 5.3 0 1.4 1.5 4 1.5 5.4 0 1.3 1.5 3.3 1.5 5.3 0M12 12V8M12 5.5c.8-.8.8-1.7 0-2.8-.8 1.1-.8 2 0 2.8z"/>'),
    truck: S('<path d="M2 6h12v10H2zM14 9h4l3 3.5V16h-7"/><circle cx="6" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>'),
  };
  const EMPTY_ART = `<svg viewBox="0 0 160 160" fill="none"><circle cx="80" cy="84" r="66" fill="#f3e8ef"/><circle cx="80" cy="84" r="48" fill="#faf6f0"/><rect x="68" y="24" width="24" height="16" rx="4" fill="#d8b46e"/><rect x="72" y="38" width="16" height="12" fill="#b88a3e"/><rect x="44" y="50" width="72" height="84" rx="22" fill="#fff" stroke="#5a2650" stroke-width="4"/><path d="M56 104c10 8 38 8 48 0v10a14 14 0 0 1-14 14H70a14 14 0 0 1-14-14z" fill="#f3e8ef"/><rect x="62" y="74" width="36" height="20" rx="6" fill="#f8efdc" stroke="#b88a3e" stroke-width="2"/><path d="M128 36l3 7 7 3-7 3-3 7-3-7-7-3 7-3zM30 58l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#d8b46e"/></svg>`;

  /* ---------------- Utilitários ---------------- */
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const num = (v) => { const n = parseFloat(String(v ?? '').replace(',', '.')); return isFinite(n) ? n : 0; };
  const BRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  const money = (v) => BRL.format(num(v));
  const pad = (n) => String(n).padStart(2, '0');
  const iso = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const today = () => iso(new Date());
  const parseDate = (s) => { const [y, m, d] = String(s).split('-').map(Number); return new Date(y, (m || 1) - 1, d || 1); };
  const fmtDate = (s) => (s ? parseDate(s).toLocaleDateString('pt-BR') : '—');
  const fmtShort = (s) => (s ? parseDate(s).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }).replace('.', '') : '');
  const daysAgo = (n) => { const d = new Date(); d.setDate(d.getDate() - n); return iso(d); };
  const monthKey = (s) => String(s).slice(0, 7);
  const monthLabel = (key) => { const [y, m] = key.split('-').map(Number); const s = new Date(y, m - 1, 1).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }); return s[0].toUpperCase() + s.slice(1); };
  const addMonth = (key, n) => { const [y, m] = key.split('-').map(Number); const d = new Date(y, m - 1 + n, 1); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}`; };
  const initials = (name) => (String(name || '?').trim().split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('') || '?');
  const norm = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const onlyDigits = (s) => String(s || '').replace(/\D/g, '');
  const waLink = (phone, text) => { let d = onlyDigits(phone); if (d && d.length <= 11) d = '55' + d; return `https://wa.me/${d}?text=${encodeURIComponent(text)}`; };

  /* ---------------- Banco de dados ---------------- */
  const KEY = 'anaperfumes_crm_v1';
  const blank = () => ({
    empresa: { nome: 'Ana Perfumes', email: '', telefone: '', documento: '', endereco: '', pix: '' },
    seq: 1,
    clientes: [],
    produtos: [],
    servicos: [
      { id: uid(), nome: 'Embalagem para presente', preco: 10, descricao: 'Caixa, laço e cartão personalizado' },
      { id: uid(), nome: 'Gravação personalizada no frasco', preco: 35, descricao: 'Nome ou frase gravada' },
      { id: uid(), nome: 'Entrega / Motoboy', preco: 15, descricao: 'Entrega na cidade' },
    ],
    pedidos: [],
    lancamentos: [],
    eventos: [],
  });
  let db;
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) { db = Object.assign(blank(), JSON.parse(raw)); return; }
    } catch (e) { /* storage indisponível */ }
    db = blank();
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(db)); }
    catch (e) { toast('Não foi possível salvar no navegador'); }
  }
  const byId = (col, id) => db[col].find((x) => x.id === id);

  /* ---------------- Regras de pedidos ---------------- */
  const STATUS = { orcamento: 'Orçamento', aberto: 'Em aberto', concluido: 'Concluído', cancelado: 'Cancelado' };
  const FORMAS = ['Pix', 'Dinheiro', 'Cartão de crédito', 'Cartão de débito', 'Transferência', 'Boleto', 'Outro'];
  const CATS_DESPESA = ['Compra de mercadoria', 'Aluguel', 'Marketing', 'Embalagens', 'Frete', 'Salários', 'Impostos', 'Contas (água/luz/internet)', 'Outros'];
  const CATS_RECEITA = ['Venda avulsa', 'Serviço', 'Outros'];
  const countsStock = (st) => st === 'aberto' || st === 'concluido';
  const isSale = (p) => p.status === 'aberto' || p.status === 'concluido';
  const subtotal = (p) => p.itens.reduce((s, i) => s + num(i.qtd) * num(i.preco), 0);
  const total = (p) => Math.max(0, subtotal(p) - num(p.desconto) + num(p.frete));
  const pago = (p) => (p.pagamentos || []).reduce((s, x) => s + num(x.valor), 0);
  const restante = (p) => Math.max(0, total(p) - pago(p));
  const custo = (p) => p.itens.reduce((s, i) => { if (i.tipo !== 'produto') return s; const pr = byId('produtos', i.refId); return s + num(i.qtd) * num(pr ? pr.custo : 0); }, 0);
  const clienteNome = (id) => { const c = byId('clientes', id); return c ? c.nome : 'Consumidor final'; };

  function applyStock(p, sign) {
    p.itens.forEach((i) => {
      if (i.tipo !== 'produto') return;
      const pr = byId('produtos', i.refId);
      if (pr) pr.estoque = num(pr.estoque) - sign * num(i.qtd);
    });
  }
  // Mantém o estoque coerente ao salvar/alterar status/excluir
  function syncStock(oldP, newP) {
    if (oldP && oldP.stockApplied) applyStock(oldP, -1);
    if (newP) {
      newP.stockApplied = countsStock(newP.status);
      if (newP.stockApplied) applyStock(newP, 1);
    }
  }

  /* ---------------- Estado de interface ---------------- */
  const ui = {
    pedTab: 'ultimos', pedSearch: '', pedSort: 'data', pedPag: 'todos',
    relPeriodo: 'mes', finMes: today().slice(0, 7), agMes: today().slice(0, 7), agDia: today(),
  };
  let draft = null;

  /* ---------------- Toast / Modal ---------------- */
  let toastT;
  function toast(msg) {
    const t = $('#toast'); t.textContent = msg; t.classList.add('show');
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2400);
  }
  function openModal(html, after) {
    const m = $('#modal'); const sh = $('.sheet', m);
    sh.innerHTML = `<div class="grab"></div>${html}`;
    m.classList.add('show'); m.setAttribute('aria-hidden', 'false');
    $$('[data-close]', sh).forEach((b) => b.addEventListener('click', closeModal));
    if (after) after(sh);
    const f = $('input:not([type=hidden]):not([type=checkbox]), select, textarea', sh);
    if (f && window.innerWidth >= 600) setTimeout(() => f.focus(), 50);
  }
  function closeModal() { const m = $('#modal'); m.classList.remove('show'); m.setAttribute('aria-hidden', 'true'); }
  $('#modal').addEventListener('click', (e) => { if (e.target.id === 'modal') closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeModal(); closeDrawer(); } });
  function confirmBox(msg, onYes, yesLabel = 'Excluir') {
    openModal(`<h3>Confirmar</h3><p style="line-height:1.5;margin-bottom:20px">${msg}</p>
      <div class="btn-row"><button class="btn ghost" data-close>Cancelar</button><button class="btn" id="yes">${yesLabel}</button></div>`,
    (sh) => $('#yes', sh).addEventListener('click', () => { closeModal(); onYes(); }));
  }
  const formData = (form) => Object.fromEntries(new FormData(form).entries());

  /* ---------------- Drawer ---------------- */
  function renderDrawer(route) {
    const e = db.empresa;
    const it = (href, icon, label, key, tag = '') => `<a class="drawer-item ${route === key ? 'active' : ''}" href="${href}">${I[icon]}<span>${label}</span>${tag}</a>`;
    $('#drawer').innerHTML = `
      <a class="drawer-profile" href="#/config">
        <div class="avatar">${esc(initials(e.nome))}</div>
        <div class="info"><b>${esc(e.nome || 'Sua Empresa')}</b><small>${esc(e.email || 'Toque para configurar')}</small></div>
        <span>${I.chev}</span>
      </a>
      <div class="drawer-group drawer-desktop-only">
        ${it('#/dashboard', 'dash', 'Painel', 'dashboard')}
        ${it('#/pedidos', 'ordersLine', 'Pedidos', 'pedidos')}
        ${it('#/agenda', 'calendar', 'Agenda', 'agenda')}
        ${it('#/financas', 'money', 'Finanças', 'financas')}
      </div>
      <div class="drawer-group">
        ${it('#/clientes', 'users', 'Clientes', 'clientes')}
        ${it('#/produtos', 'perfume', 'Produtos', 'produtos')}
        ${it('#/servicos', 'tools', 'Serviços', 'servicos')}
      </div>
      <div class="drawer-group">${it('#/relatorios', 'chart', 'Relatórios', 'relatorios')}</div>
      <div class="drawer-group">
        ${it('#/ajuda', 'help', 'Ajuda e Suporte', 'ajuda')}
        ${it('#/config', 'settings', 'Configurações', 'config')}
      </div>
      <div class="drawer-foot">
        <div class="plan"><span class="badge-pink">Todos os recursos liberados</span>
          <p>Seus dados ficam salvos neste aparelho. Faça backups com frequência.</p></div>
        <a href="#/config">Fazer backup ${I.chev}</a>
      </div>`;
    $$('#drawer a').forEach((a) => a.addEventListener('click', closeDrawer));
  }
  const openDrawer = () => { $('#drawer').classList.add('open'); $('#scrim').classList.add('show'); };
  function closeDrawer() { $('#drawer').classList.remove('open'); $('#scrim').classList.remove('show'); }
  $('#scrim').addEventListener('click', closeDrawer);

  /* ---------------- Bottom nav / FAB ---------------- */
  const navItems = { dashboard: ['dash', 'Início'], pedidos: ['ordersLine', 'Pedidos'], agenda: ['calendar', 'Agenda'], financas: ['money', 'Finanças'] };
  $$('#bottomnav a').forEach((a) => { const [ic, lb] = navItems[a.dataset.tab]; a.innerHTML = `${I[ic]}<span>${lb}</span>`; });
  $('#navMore').innerHTML = `${I.grid}<span>Mais</span>`;
  $('#navMore').addEventListener('click', openDrawer);
  $('#fab').innerHTML = `${I.plus}<span class="fab-label">Novo registro</span>`;
  $('#fab').addEventListener('click', () => {
    openModal(`<h3>Adicionar <button data-close>${I.close}</button></h3>
      <div class="action-list">
        <a href="#/pedido-editar/novo">${I.ordersLine} Novo pedido / venda</a>
        <a href="#/pedido-editar/novo?status=orcamento">${I.dollar} Novo orçamento</a>
        <a href="#/cliente-editar/novo">${I.users} Novo cliente</a>
        <a href="#/produto-editar/novo">${I.perfume} Novo perfume / produto</a>
        <button data-act="lanc">${I.wallet} Nova receita ou despesa</button>
        <button data-act="evento">${I.event} Novo compromisso na agenda</button>
      </div>`, (sh) => {
      $$('a', sh).forEach((a) => a.addEventListener('click', closeModal));
      $('[data-act=lanc]', sh).addEventListener('click', () => lancamentoModal());
      $('[data-act=evento]', sh).addEventListener('click', () => eventoModal(null, ui.agDia));
    });
  });

  /* ---------------- Componentes ---------------- */
  const emptyState = (title, text, btn, small = '') => `
    <div class="empty"><div class="art">${EMPTY_ART}</div><h3>${title}</h3><p>${text}</p>
    ${small ? `<p class="small">${small}</p>` : ''}${btn || ''}</div>`;
  const searchBox = (ph, val = '', filter = '') => `<div class="searchrow"><label class="search">${I.search}<input id="q" type="search" placeholder="${ph}" value="${esc(val)}" autocomplete="off"></label>${filter}</div>`;
  function barChart(data) {
    const max = Math.max(1, ...data.map((d) => d.value));
    return `<div class="bars">${data.map((d) => `<div class="bar" title="${esc(d.label)}: ${money(d.value)}"><i style="height:${Math.max(1, (d.value / max) * 100)}%">${d.value ? `<span>${d.value >= 1000 ? (d.value / 1000).toFixed(1).replace('.', ',') + 'k' : Math.round(d.value)}</span>` : ''}</i><em>${esc(d.label)}</em></div>`).join('')}</div>`;
  }
  function hbars(rows, fmt = money) {
    if (!rows.length) return '<p class="muted">Sem dados no período.</p>';
    const max = Math.max(1, ...rows.map((r) => r.value));
    return rows.map((r) => `<div class="hbar"><div class="lbl"><span>${esc(r.label)}</span><span><b>${fmt(r.value)}</b>${r.extra ? ` <small class="muted">${r.extra}</small>` : ''}</span></div><div class="track"><div class="fill" style="width:${(r.value / max) * 100}%"></div></div></div>`).join('');
  }
  const kpi = (label, value, cls = '') => `<div class="kpi ${cls}"><small>${label}</small><b>${value}</b></div>`;
  const statusChip = (st) => `<span class="chip ${st}">${STATUS[st] || st}</span>`;
  function pedidoRow(p) {
    const r = restante(p);
    const pay = p.status === 'cancelado' || p.status === 'orcamento' ? '' : r <= 0.004 ? '<span class="chip ok">Pago</span>' : `<span class="chip gray">Falta ${money(r)}</span>`;
    return `<a class="row" href="#/pedido/${p.id}">
      <div class="avatar ${p.status === 'orcamento' ? 'blue' : ''}">${esc(initials(clienteNome(p.clienteId)))}</div>
      <div class="grow"><div class="t">#${p.numero} · ${esc(clienteNome(p.clienteId))}</div>
        <div class="s">${fmtDate(p.data)} · ${p.itens.length} ${p.itens.length === 1 ? 'item' : 'itens'}</div>
        <div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap">${statusChip(p.status)} ${pay}</div></div>
      <div class="r"><b>${money(total(p))}</b></div></a>`;
  }
  const PERIODOS = { hoje: 'Hoje', 7: '7 dias', 30: '30 dias', mes: 'Este mês', ano: 'Este ano', tudo: 'Tudo' };
  function inPeriod(dateStr, per = ui.relPeriodo) {
    if (!dateStr) return false;
    const t = today();
    switch (per) {
      case 'hoje': return dateStr === t;
      case '7': return dateStr >= daysAgo(6) && dateStr <= t;
      case '30': return dateStr >= daysAgo(29) && dateStr <= t;
      case 'mes': return monthKey(dateStr) === monthKey(t);
      case 'ano': return dateStr.slice(0, 4) === t.slice(0, 4);
      default: return true;
    }
  }
  const periodSeg = () => `<div class="seg" id="perseg" style="margin-bottom:14px">${Object.entries(PERIODOS).map(([k, v]) => `<button data-p="${k}" class="${ui.relPeriodo === k ? 'on' : ''}">${v}</button>`).join('')}</div>`;
  function bindPeriod() { $$('#perseg button').forEach((b) => b.addEventListener('click', () => { ui.relPeriodo = b.dataset.p; render(); })); }

  /* =========================================================
     TELAS
     ========================================================= */

  /* ---------- Pedidos ---------- */
  function viewPedidos() {
    const tabs = { ultimos: 'Últimos', d30: '30 dias', d60: '60 dias', concluidos: 'Concluídos' };
    const more = { orcamentos: 'Orçamentos', abertos: 'Em aberto', receber: 'A receber', cancelados: 'Cancelados', todos: 'Todos' };
    const isMore = !!more[ui.pedTab];
    return {
      title: 'Pedidos', main: true,
      html: `${searchBox('Buscar na lista', ui.pedSearch, `<button class="filter-btn ${ui.pedSort !== 'data' || ui.pedPag !== 'todos' ? 'on' : ''}" id="fbtn" aria-label="Filtros">${I.filter}</button>`)}
        <div class="tabs">${Object.entries(tabs).map(([k, v]) => `<button class="tab ${ui.pedTab === k ? 'active' : ''}" data-t="${k}">${v}</button>`).join('')}
        <button class="tab ${isMore ? 'active' : ''}" id="moreTab">${isMore ? more[ui.pedTab] : I.more}</button></div>
        <div id="list"></div>`,
      after() {
        const draw = () => {
          const q = norm(ui.pedSearch);
          let list = db.pedidos.slice();
          switch (ui.pedTab) {
            case 'd30': list = list.filter((p) => p.data >= daysAgo(30)); break;
            case 'd60': list = list.filter((p) => p.data >= daysAgo(60)); break;
            case 'concluidos': list = list.filter((p) => p.status === 'concluido'); break;
            case 'orcamentos': list = list.filter((p) => p.status === 'orcamento'); break;
            case 'abertos': list = list.filter((p) => p.status === 'aberto'); break;
            case 'cancelados': list = list.filter((p) => p.status === 'cancelado'); break;
            case 'receber': list = list.filter((p) => isSale(p) && restante(p) > 0.004); break;
            case 'ultimos': list = list.filter((p) => p.status !== 'cancelado'); break;
          }
          if (ui.pedPag === 'pagos') list = list.filter((p) => isSale(p) && restante(p) <= 0.004);
          if (ui.pedPag === 'pendentes') list = list.filter((p) => isSale(p) && restante(p) > 0.004);
          if (q) list = list.filter((p) => norm(`${p.numero} ${clienteNome(p.clienteId)} ${p.itens.map((i) => i.nome).join(' ')} ${p.obs}`).includes(q));
          const sorts = {
            data: (a, b) => (b.data + b.numero.toString().padStart(6, '0')).localeCompare(a.data + a.numero.toString().padStart(6, '0')),
            valor: (a, b) => total(b) - total(a),
            cliente: (a, b) => clienteNome(a.clienteId).localeCompare(clienteNome(b.clienteId)),
          };
          list.sort(sorts[ui.pedSort]);
          if (ui.pedTab === 'ultimos') list = list.slice(0, 50);
          const el = $('#list');
          if (!db.pedidos.length) {
            el.innerHTML = emptyState('Nenhum Pedido', 'Crie pedidos para registrar uma intenção<br>de venda de perfumes ou prestação de serviço.', '<br><a class="btn" href="#/pedido-editar/novo">Criar primeiro pedido</a>', 'Com Pedidos, você cria Orçamentos, Recibos,<br>faz controle de Pagamentos e Estoque.');
          } else if (!list.length) {
            el.innerHTML = emptyState('Nada por aqui', 'Nenhum pedido encontrado para este filtro.');
          } else {
            const tot = list.filter(isSale).reduce((s, p) => s + total(p), 0);
            el.innerHTML = `<div class="section-title"><span>${list.length} pedido(s)</span><span>${money(tot)}</span></div><div class="list">${list.map(pedidoRow).join('')}</div>`;
          }
        };
        draw();
        $('#q').addEventListener('input', (e) => { ui.pedSearch = e.target.value; draw(); });
        $$('.tab[data-t]').forEach((b) => b.addEventListener('click', () => { ui.pedTab = b.dataset.t; render(); }));
        $('#moreTab').addEventListener('click', () => openModal(`<h3>Mais filtros <button data-close>${I.close}</button></h3>
          <div class="action-list">${Object.entries(more).map(([k, v]) => `<button data-k="${k}">${ui.pedTab === k ? I.check : I.ordersLine} ${v}</button>`).join('')}</div>`,
        (sh) => $$('[data-k]', sh).forEach((b) => b.addEventListener('click', () => { ui.pedTab = b.dataset.k; closeModal(); render(); }))));
        $('#fbtn').addEventListener('click', () => openModal(`<h3>Ordenar e filtrar <button data-close>${I.close}</button></h3>
          <div class="form"><div class="field"><label>Ordenar por</label><div class="seg" id="s1">${[['data', 'Data'], ['valor', 'Valor'], ['cliente', 'Cliente']].map(([k, v]) => `<button data-v="${k}" class="${ui.pedSort === k ? 'on' : ''}">${v}</button>`).join('')}</div></div>
          <div class="field"><label>Pagamento</label><div class="seg" id="s2">${[['todos', 'Todos'], ['pagos', 'Pagos'], ['pendentes', 'Pendentes']].map(([k, v]) => `<button data-v="${k}" class="${ui.pedPag === k ? 'on' : ''}">${v}</button>`).join('')}</div></div>
          <div class="btn-row"><button class="btn ghost" id="clr">Limpar</button><button class="btn" data-close>Aplicar</button></div></div>`,
        (sh) => {
          $$('#s1 button', sh).forEach((b) => b.addEventListener('click', () => { ui.pedSort = b.dataset.v; $$('#s1 button', sh).forEach((x) => x.classList.toggle('on', x === b)); }));
          $$('#s2 button', sh).forEach((b) => b.addEventListener('click', () => { ui.pedPag = b.dataset.v; $$('#s2 button', sh).forEach((x) => x.classList.toggle('on', x === b)); }));
          $('#clr', sh).addEventListener('click', () => { ui.pedSort = 'data'; ui.pedPag = 'todos'; closeModal(); render(); });
          $$('[data-close]', sh).forEach((b) => b.addEventListener('click', render));
        }));
      },
    };
  }

  /* ---------- Detalhe do pedido ---------- */
  function viewPedido(id) {
    const p = byId('pedidos', id);
    if (!p) return notFound();
    const c = byId('clientes', p.clienteId);
    const r = restante(p);
    return {
      title: `Pedido #${p.numero}`, back: '#/pedidos',
      actions: [{ icon: 'edit', label: 'Editar', href: `#/pedido-editar/${p.id}` }, { icon: 'trash', label: 'Excluir', id: 'del' }],
      html: `<div class="two-col"><div>
        <div class="card">
          <div class="detail-head"><div class="avatar">${esc(initials(clienteNome(p.clienteId)))}</div>
            <div class="grow" style="flex:1;min-width:0"><h2>${esc(clienteNome(p.clienteId))}</h2>
            <div class="muted" style="font-size:14px;margin-top:4px">${c && c.telefone ? esc(c.telefone) : 'Sem telefone'}</div></div>${statusChip(p.status)}</div>
          <dl class="kv" style="margin-top:16px">
            <dt>Número</dt><dd>#${p.numero}</dd>
            <dt>Data</dt><dd>${fmtDate(p.data)}</dd>
            ${p.entrega ? `<dt>Entrega</dt><dd>${fmtDate(p.entrega)}</dd>` : ''}
            ${p.obs ? `<dt>Observações</dt><dd>${esc(p.obs)}</dd>` : ''}
          </dl>
        </div>
        <div class="section-title">Alterar situação</div>
        <div class="seg" id="stseg">${Object.entries(STATUS).map(([k, v]) => `<button data-s="${k}" class="${p.status === k ? 'on' : ''}">${v}</button>`).join('')}</div>
        <div class="section-title">Itens</div>
        <div class="card"><table class="table"><thead><tr><th>Item</th><th class="num">Qtd</th><th class="num">Total</th></tr></thead><tbody>
          ${p.itens.map((i) => `<tr><td>${esc(i.nome)}<div class="muted" style="font-size:12px">${money(i.preco)} un.</div></td><td class="num">${num(i.qtd)}</td><td class="num">${money(num(i.qtd) * num(i.preco))}</td></tr>`).join('')}
          </tbody></table>
          <div class="totals" style="margin-top:12px">
            <div class="l"><span class="muted">Subtotal</span><span>${money(subtotal(p))}</span></div>
            ${num(p.desconto) ? `<div class="l"><span class="muted">Desconto</span><span class="red-t">− ${money(p.desconto)}</span></div>` : ''}
            ${num(p.frete) ? `<div class="l"><span class="muted">Frete</span><span>${money(p.frete)}</span></div>` : ''}
            <div class="l big"><span>Total</span><span>${money(total(p))}</span></div>
          </div></div>
        </div><div>
        <div class="section-title"><span>Pagamentos</span>${p.status !== 'cancelado' && r > 0.004 ? '<button id="addPay">+ Registrar</button>' : ''}</div>
        <div class="card">
          <div class="totals">
            <div class="l"><span class="muted">Pago</span><b class="green-t">${money(pago(p))}</b></div>
            <div class="l"><span class="muted">Restante</span><b class="${r > 0.004 ? 'red-t' : 'green-t'}">${money(r)}</b></div>
          </div>
          ${(p.pagamentos || []).length ? `<div style="margin-top:12px">${p.pagamentos.map((x) => `<div class="row" style="padding:10px 0;cursor:default">
            <div class="avatar sq" style="width:36px;height:36px">${I.dollar}</div>
            <div class="grow"><div class="t">${money(x.valor)}</div><div class="s">${esc(x.forma)} · ${fmtDate(x.data)}</div></div>
            <button class="del-btn" data-delpay="${x.id}" aria-label="Excluir pagamento">${I.trash}</button></div>`).join('')}</div>` : '<p class="muted" style="margin-top:10px;font-size:14px">Nenhum pagamento registrado.</p>'}
        </div>
        <div class="section-title">Ações</div>
        <div class="grid" style="gap:10px">
          ${p.status !== 'cancelado' && r > 0.004 ? `<button class="btn green block" id="quitar">${I.check} Receber restante (${money(r)})</button>` : ''}
          <div class="btn-row">
            <button class="btn secondary" id="printBtn">${I.print} ${p.status === 'orcamento' ? 'Orçamento' : 'Recibo'}</button>
            <button class="btn secondary" id="waBtn">${I.whats} WhatsApp</button>
          </div>
          ${p.status === 'orcamento' ? `<button class="btn blue block" id="convert">${I.check} Aprovar orçamento (virar venda)</button>` : ''}
          <button class="btn ghost block" id="dup">Duplicar pedido</button>
        </div>
      </div></div>`,
      after() {
        const setStatus = (st) => {
          if (st === p.status) return;
          const old = JSON.parse(JSON.stringify(p));
          p.status = st; syncStock(old, p); save(); toast(`Pedido marcado como ${STATUS[st]}`); render();
        };
        $$('#stseg button').forEach((b) => b.addEventListener('click', () => setStatus(b.dataset.s)));
        const conv = $('#convert'); if (conv) conv.addEventListener('click', () => setStatus('aberto'));
        $('#del').addEventListener('click', () => confirmBox(`Excluir o pedido #${p.numero}? O estoque dos produtos será devolvido.`, () => {
          syncStock(p, null); db.pedidos = db.pedidos.filter((x) => x.id !== p.id); save(); toast('Pedido excluído'); location.hash = '#/pedidos';
        }));
        const ap = $('#addPay'); if (ap) ap.addEventListener('click', () => pagamentoModal(p));
        const q = $('#quitar'); if (q) q.addEventListener('click', () => pagamentoModal(p, r));
        $$('[data-delpay]').forEach((b) => b.addEventListener('click', () => confirmBox('Excluir este pagamento?', () => {
          p.pagamentos = p.pagamentos.filter((x) => x.id !== b.dataset.delpay); save(); render();
        })));
        $('#printBtn').addEventListener('click', () => printPedido(p));
        $('#waBtn').addEventListener('click', () => {
          const e = db.empresa;
          const txt = `*${e.nome || 'Ana Perfumes'}* — ${p.status === 'orcamento' ? 'Orçamento' : 'Pedido'} #${p.numero}\n` +
            `Data: ${fmtDate(p.data)}\n\n` + p.itens.map((i) => `• ${num(i.qtd)}x ${i.nome} — ${money(num(i.qtd) * num(i.preco))}`).join('\n') +
            (num(p.desconto) ? `\nDesconto: −${money(p.desconto)}` : '') + (num(p.frete) ? `\nFrete: ${money(p.frete)}` : '') +
            `\n\n*Total: ${money(total(p))}*` + (isSale(p) ? `\nPago: ${money(pago(p))}\nRestante: ${money(restante(p))}` : '') +
            (e.pix ? `\n\nChave Pix: ${e.pix}` : '') + `\n\nObrigado pela preferência! 💐`;
          window.open(waLink(c ? c.telefone : '', txt), '_blank');
        });
        $('#dup').addEventListener('click', () => {
          draft = { ...JSON.parse(JSON.stringify(p)), id: null, _for: 'novo', data: today(), pagamentos: [], stockApplied: false, entrega: '' };
          location.hash = '#/pedido-editar/novo';
        });
      },
    };
  }

  function pagamentoModal(p, valor) {
    const r = restante(p);
    openModal(`<h3>Registrar pagamento <button data-close>${I.close}</button></h3>
      <form class="form" id="pf">
        <div class="field"><label>Valor <span class="req">*</span></label><input name="valor" type="number" step="0.01" min="0.01" inputmode="decimal" required value="${(valor ?? r).toFixed(2)}"></div>
        <div class="field"><label>Forma de pagamento</label><select name="forma">${FORMAS.map((f) => `<option>${f}</option>`).join('')}</select></div>
        <div class="field"><label>Data</label><input name="data" type="date" value="${today()}" required></div>
        <p class="muted" style="font-size:13px">Restante deste pedido: ${money(r)}</p>
        <button class="btn block">Salvar pagamento</button>
      </form>`, (sh) => $('#pf', sh).addEventListener('submit', (e) => {
      e.preventDefault();
      const d = formData(e.target);
      p.pagamentos = p.pagamentos || [];
      p.pagamentos.push({ id: uid(), valor: num(d.valor), forma: d.forma, data: d.data });
      if (p.status === 'orcamento') { const old = JSON.parse(JSON.stringify(p)); p.status = 'aberto'; syncStock(old, p); }
      save(); closeModal(); toast('Pagamento registrado'); render();
    }));
  }

  function printPedido(p) {
    const e = db.empresa; const c = byId('clientes', p.clienteId);
    const orc = p.status === 'orcamento';
    $('#print').innerHTML = `
      <div class="p-head"><div><h1>${esc(e.nome || 'Ana Perfumes')}</h1>
        <div>${esc(e.documento || '')}</div><div>${esc(e.telefone || '')} ${esc(e.email || '')}</div><div>${esc(e.endereco || '')}</div></div>
        <div style="text-align:right"><h1>${orc ? 'ORÇAMENTO' : 'RECIBO'}</h1><div>Nº ${p.numero}</div><div>${fmtDate(p.data)}</div></div></div>
      <div><b>Cliente:</b> ${esc(clienteNome(p.clienteId))} ${c && c.documento ? '· ' + esc(c.documento) : ''} ${c && c.telefone ? '· ' + esc(c.telefone) : ''}</div>
      ${c && c.endereco ? `<div><b>Endereço:</b> ${esc(c.endereco)}</div>` : ''}
      <table><thead><tr><th>Descrição</th><th class="num">Qtd</th><th class="num">Unitário</th><th class="num">Total</th></tr></thead><tbody>
      ${p.itens.map((i) => `<tr><td>${esc(i.nome)}</td><td class="num">${num(i.qtd)}</td><td class="num">${money(i.preco)}</td><td class="num">${money(num(i.qtd) * num(i.preco))}</td></tr>`).join('')}
      </tbody></table>
      <div class="tot">Subtotal: ${money(subtotal(p))}<br>${num(p.desconto) ? `Desconto: −${money(p.desconto)}<br>` : ''}${num(p.frete) ? `Frete: ${money(p.frete)}<br>` : ''}
      <b style="font-size:17px">Total: ${money(total(p))}</b>${!orc ? `<br>Pago: ${money(pago(p))}<br>Restante: ${money(restante(p))}` : ''}</div>
      ${p.obs ? `<p><b>Observações:</b> ${esc(p.obs)}</p>` : ''}
      ${orc ? '<p style="font-size:12px">Orçamento válido por 7 dias.</p>' : `<p>Recebi(emos) de ${esc(clienteNome(p.clienteId))} a importância de <b>${money(pago(p))}</b> referente ao pedido nº ${p.numero}.</p>`}
      ${e.pix ? `<p>Chave Pix: ${esc(e.pix)}</p>` : ''}
      <div class="sign">${esc(e.nome || 'Ana Perfumes')}</div>`;
    document.body.classList.add('printing');
    const done = () => { document.body.classList.remove('printing'); window.removeEventListener('afterprint', done); };
    window.addEventListener('afterprint', done);
    setTimeout(() => { window.print(); setTimeout(done, 1000); }, 50);
  }

  /* ---------- Formulário do pedido ---------- */
  function viewPedidoForm(id, query) {
    const editing = id !== 'novo' ? byId('pedidos', id) : null;
    if (id !== 'novo' && !editing) return notFound();
    if (!draft || draft._for !== id) {
      draft = editing ? JSON.parse(JSON.stringify(editing)) : {
        id: null, clienteId: query.cliente || '', data: today(), status: query.status || 'aberto', entrega: '',
        itens: [], desconto: 0, frete: 0, obs: '', pagamentos: [],
      };
      draft._for = id;
    }
    const d = draft;
    return {
      title: editing ? `Editar pedido #${editing.numero}` : d.status === 'orcamento' ? 'Novo orçamento' : 'Novo pedido',
      back: editing ? `#/pedido/${editing.id}` : '#/pedidos',
      html: `<form class="form" id="pform" novalidate><div class="two-col"><div>
        <div class="card"><div class="form-grid two">
          <div class="field full"><label>Cliente</label>
            <div style="display:flex;gap:8px"><select data-f="clienteId" style="flex:1"><option value="">Consumidor final</option>
            ${db.clientes.slice().sort((a, b) => a.nome.localeCompare(b.nome)).map((c) => `<option value="${c.id}" ${c.id === d.clienteId ? 'selected' : ''}>${esc(c.nome)}</option>`).join('')}</select>
            <button type="button" class="btn secondary" id="newCli" style="flex:0 0 auto" title="Novo cliente">+</button></div></div>
          <div class="field"><label>Data do pedido</label><input type="date" data-f="data" value="${d.data}"></div>
          <div class="field"><label>Data de entrega (opcional)</label><input type="date" data-f="entrega" value="${d.entrega || ''}"></div>
          <div class="field full"><label>Situação</label><div class="seg" id="stseg">${Object.entries(STATUS).map(([k, v]) => `<button type="button" data-s="${k}" class="${d.status === k ? 'on' : ''}">${v}</button>`).join('')}</div>
          <small class="muted" style="font-size:12px">"Em aberto" e "Concluído" baixam o estoque. Orçamentos não.</small></div>
        </div></div>
        <div class="section-title"><span>Itens do pedido</span></div>
        <div class="card"><div id="itens"></div>
          <div class="btn-row" style="margin-top:12px">
            <button type="button" class="btn sm secondary" id="addProd">${I.perfume} Produto</button>
            <button type="button" class="btn sm secondary" id="addServ">${I.tools} Serviço</button>
            <button type="button" class="btn sm ghost" id="addAvulso">+ Item avulso</button>
          </div></div>
        </div><div>
        <div class="section-title">Valores</div>
        <div class="card"><div class="totals" id="totais"></div></div>
        <div class="section-title">Observações</div>
        <div class="field"><textarea data-f="obs" placeholder="Ex.: presente de aniversário, entregar após 18h...">${esc(d.obs)}</textarea></div>
        ${!editing ? `<div class="card" style="margin-top:12px"><label class="check"><input type="checkbox" id="pagoAgora"> Pagamento recebido integralmente agora</label>
          <div class="field" id="formaWrap" style="margin-top:10px;display:none"><label>Forma de pagamento</label><select id="formaPg">${FORMAS.map((f) => `<option>${f}</option>`).join('')}</select></div></div>` : ''}
        <div style="margin-top:16px"><button class="btn block" type="submit">${I.check} Salvar ${d.status === 'orcamento' ? 'orçamento' : 'pedido'}</button></div>
      </div></div></form>`,
      after() {
        const drawItens = () => {
          const el = $('#itens');
          if (!d.itens.length) { el.innerHTML = '<p class="muted" style="font-size:14px">Nenhum item adicionado. Use os botões abaixo.</p>'; drawTotals(); return; }
          el.innerHTML = d.itens.map((i, idx) => {
            const pr = i.tipo === 'produto' ? byId('produtos', i.refId) : null;
            const stockInfo = pr ? (() => {
              const already = editing && editing.stockApplied ? (editing.itens.filter((x) => x.refId === i.refId).reduce((s, x) => s + num(x.qtd), 0)) : 0;
              const avail = num(pr.estoque) + already;
              return `<small class="${num(i.qtd) > avail ? 'warn' : ''}">Estoque disponível: ${avail}${num(i.qtd) > avail ? ' — quantidade acima do estoque' : ''}</small>`;
            })() : `<small>${i.tipo === 'servico' ? 'Serviço' : 'Item avulso'}</small>`;
            return `<div class="item-row" data-i="${idx}">
              <div class="name">${i.tipo === 'avulso' ? `<input class="input" data-k="nome" value="${esc(i.nome)}" placeholder="Descrição do item">` : esc(i.nome)}${stockInfo}</div>
              <button type="button" class="del-btn" data-rm aria-label="Remover">${I.trash}</button>
              <div class="ctrls"><div class="qty"><button type="button" data-q="-1">−</button><input data-k="qtd" type="number" min="1" step="1" inputmode="numeric" value="${num(i.qtd)}"><button type="button" data-q="1">+</button></div>
                <input class="input" data-k="preco" type="number" step="0.01" min="0" inputmode="decimal" value="${num(i.preco).toFixed(2)}" aria-label="Preço unitário">
                <span class="sub">${money(num(i.qtd) * num(i.preco))}</span></div></div>`;
          }).join('');
          $$('.item-row', el).forEach((row) => {
            const it = d.itens[+row.dataset.i];
            $('[data-rm]', row).addEventListener('click', () => { d.itens.splice(+row.dataset.i, 1); drawItens(); });
            $$('[data-q]', row).forEach((b) => b.addEventListener('click', () => { it.qtd = Math.max(1, num(it.qtd) + +b.dataset.q); drawItens(); }));
            $$('input[data-k]', row).forEach((inp) => {
              inp.addEventListener('input', () => {
                it[inp.dataset.k] = inp.dataset.k === 'nome' ? inp.value : num(inp.value);
                $('.sub', row).textContent = money(num(it.qtd) * num(it.preco)); drawTotals();
              });
              if (inp.dataset.k === 'qtd') inp.addEventListener('change', () => { it.qtd = Math.max(1, Math.round(num(inp.value))); drawItens(); });
            });
          });
          drawTotals();
        };
        const drawTotals = () => {
          $('#totais').innerHTML = `
            <div class="l"><span class="muted">Subtotal</span><span>${money(subtotal(d))}</span></div>
            <div class="l"><span class="muted">Desconto (R$)</span><input class="input" id="desc" type="number" step="0.01" min="0" inputmode="decimal" value="${num(d.desconto) ? num(d.desconto).toFixed(2) : ''}" placeholder="0,00"></div>
            <div class="l"><span class="muted">Frete (R$)</span><input class="input" id="frete" type="number" step="0.01" min="0" inputmode="decimal" value="${num(d.frete) ? num(d.frete).toFixed(2) : ''}" placeholder="0,00"></div>
            <div class="l big"><span>Total</span><span id="totv">${money(total(d))}</span></div>`;
          const upd = () => { $('#totv').textContent = money(total(d)); };
          $('#desc').addEventListener('input', (e) => { d.desconto = num(e.target.value); upd(); });
          $('#frete').addEventListener('input', (e) => { d.frete = num(e.target.value); upd(); });
        };
        drawItens();
        $$('[data-f]').forEach((el) => el.addEventListener('input', () => { d[el.dataset.f] = el.value; }));
        $$('#stseg button').forEach((b) => b.addEventListener('click', () => { d.status = b.dataset.s; $$('#stseg button').forEach((x) => x.classList.toggle('on', x === b)); }));
        $('#newCli').addEventListener('click', () => clienteQuickModal((c) => { d.clienteId = c.id; render(); }));
        const pa = $('#pagoAgora'); if (pa) pa.addEventListener('change', () => { $('#formaWrap').style.display = pa.checked ? '' : 'none'; });
        const addItem = (tipo, ref) => {
          const ex = d.itens.find((i) => i.tipo === tipo && i.refId === ref.id);
          if (ex) ex.qtd = num(ex.qtd) + 1;
          else d.itens.push({ tipo, refId: ref.id, nome: tipo === 'produto' ? produtoNome(ref) : ref.nome, qtd: 1, preco: num(ref.preco) });
          drawItens(); toast(`${ref.nome} adicionado`);
        };
        $('#addProd').addEventListener('click', () => pickerModal('Adicionar produto', db.produtos, (p) => `${esc(produtoNome(p))}`, (p) => `${money(p.preco)} · estoque ${num(p.estoque)}`, (p) => addItem('produto', p), '#/produto-editar/novo', 'Cadastrar produto'));
        $('#addServ').addEventListener('click', () => pickerModal('Adicionar serviço', db.servicos, (s) => esc(s.nome), (s) => money(s.preco), (s) => addItem('servico', s), '#/servico-editar/novo', 'Cadastrar serviço'));
        $('#addAvulso').addEventListener('click', () => { d.itens.push({ tipo: 'avulso', refId: null, nome: '', qtd: 1, preco: 0 }); drawItens(); const ins = $$('#itens input[data-k=nome]'); if (ins.length) ins[ins.length - 1].focus(); });
        $('#pform').addEventListener('submit', (e) => {
          e.preventDefault();
          if (!d.itens.length) return toast('Adicione pelo menos um item');
          if (d.itens.some((i) => !String(i.nome).trim())) return toast('Preencha a descrição dos itens avulsos');
          if (!d.data) return toast('Informe a data do pedido');
          const clean = JSON.parse(JSON.stringify(d)); delete clean._for;
          if (editing) {
            syncStock(editing, clean);
            Object.assign(editing, clean);
            save(); draft = null; toast('Pedido atualizado'); location.hash = `#/pedido/${editing.id}`;
          } else {
            clean.id = uid(); clean.numero = db.seq++; clean.criadoEm = new Date().toISOString();
            if (pa && pa.checked && total(clean) > 0) {
              clean.pagamentos = [{ id: uid(), valor: total(clean), forma: $('#formaPg').value, data: clean.data }];
              if (clean.status === 'orcamento') clean.status = 'concluido';
            }
            syncStock(null, clean);
            db.pedidos.push(clean); save(); draft = null; toast('Pedido salvo'); location.hash = `#/pedido/${clean.id}`;
          }
        });
      },
    };
  }

  function pickerModal(title, items, label, sub, onPick, newHref, newLabel) {
    openModal(`<h3>${title} <button data-close>${I.close}</button></h3>
      ${items.length ? `<label class="search">${I.search}<input id="pq" type="search" placeholder="Buscar..." autocomplete="off"></label><div class="pick-list list" id="pl" style="margin-top:10px"></div>`
        : `<p class="muted" style="margin-bottom:16px">Nenhum cadastro ainda.</p>`}
      <a class="btn secondary block" style="margin-top:14px" href="${newHref}" data-close>${newLabel}</a>`, (sh) => {
      if (!items.length) return;
      const draw = (q = '') => {
        const list = items.filter((x) => norm(label(x) + ' ' + (x.marca || '') + ' ' + (x.codigo || '')).includes(norm(q)));
        $('#pl', sh).innerHTML = list.map((x) => `<div class="row" data-id="${x.id}"><div class="grow"><div class="t">${label(x)}</div><div class="s">${sub(x)}</div></div><span style="color:var(--pink)">+</span></div>`).join('') || '<p class="muted" style="padding:14px">Nada encontrado.</p>';
        $$('[data-id]', sh).forEach((r) => r.addEventListener('click', () => { onPick(items.find((x) => x.id === r.dataset.id)); closeModal(); }));
      };
      draw(); $('#pq', sh).addEventListener('input', (e) => draw(e.target.value));
    });
  }

  /* ---------- Clientes ---------- */
  const clienteStats = (cid) => {
    const ps = db.pedidos.filter((p) => p.clienteId === cid && isSale(p));
    return { n: ps.length, total: ps.reduce((s, p) => s + total(p), 0), devendo: ps.reduce((s, p) => s + restante(p), 0), ultimo: ps.map((p) => p.data).sort().pop() };
  };
  function viewClientes() {
    return {
      title: 'Clientes', back: '#/pedidos', leftTitle: true,
      actions: [{ icon: 'contact', label: 'Importar dos contatos', id: 'imp' }, { icon: 'plusCircle', label: 'Novo cliente', href: '#/cliente-editar/novo' }],
      html: db.clientes.length ? `${searchBox('Digite para buscar')}<div id="list" style="margin-top:12px"></div>`
        : `${searchBox('Digite para buscar')}${emptyState('Cadastro de Clientes', 'Você ainda não tem clientes cadastrados', '<a class="btn" href="#/cliente-editar/novo">Adicionar Cliente</a>')}`,
      after() {
        $('#imp').addEventListener('click', importContacts);
        if (!db.clientes.length) return;
        const draw = (q = '') => {
          const list = db.clientes.filter((c) => norm(`${c.nome} ${c.telefone} ${c.email} ${c.documento}`).includes(norm(q))).sort((a, b) => a.nome.localeCompare(b.nome));
          $('#list').innerHTML = list.length ? `<div class="section-title">${list.length} cliente(s)</div><div class="list">${list.map((c) => {
            const st = clienteStats(c.id);
            return `<a class="row" href="#/cliente/${c.id}"><div class="avatar">${esc(initials(c.nome))}</div>
              <div class="grow"><div class="t">${esc(c.nome)}</div><div class="s">${esc(c.telefone || c.email || 'Sem contato')}</div></div>
              <div class="r"><b>${money(st.total)}</b><small class="muted">${st.n} compra(s)</small></div></a>`;
          }).join('')}</div>` : emptyState('Nada encontrado', 'Nenhum cliente corresponde à busca.');
        };
        draw(); $('#q').addEventListener('input', (e) => draw(e.target.value));
      },
    };
  }
  async function importContacts() {
    if (!('contacts' in navigator && 'ContactsManager' in window)) {
      toast('Importação de contatos não suportada neste navegador'); return;
    }
    try {
      const list = await navigator.contacts.select(['name', 'tel', 'email'], { multiple: true });
      let n = 0;
      list.forEach((c) => {
        const nome = (c.name && c.name[0]) || ''; if (!nome) return;
        db.clientes.push({ id: uid(), nome, telefone: (c.tel && c.tel[0]) || '', email: (c.email && c.email[0]) || '', criadoEm: today() }); n++;
      });
      save(); toast(`${n} contato(s) importado(s)`); render();
    } catch (e) { /* cancelado */ }
  }
  const CLIENTE_FIELDS = (c = {}) => `
    <div class="field full"><label>Nome <span class="req">*</span></label><input name="nome" required value="${esc(c.nome)}" placeholder="Nome completo"></div>
    <div class="field"><label>Telefone / WhatsApp</label><input name="telefone" type="tel" inputmode="tel" value="${esc(c.telefone)}" placeholder="(00) 00000-0000"></div>
    <div class="field"><label>E-mail</label><input name="email" type="email" value="${esc(c.email)}"></div>`;
  function viewClienteForm(id) {
    const c = id !== 'novo' ? byId('clientes', id) : null;
    if (id !== 'novo' && !c) return notFound();
    const v = c || {};
    return {
      title: c ? 'Editar cliente' : 'Novo cliente', back: c ? `#/cliente/${c.id}` : '#/clientes',
      html: `<form class="form card" id="cf"><div class="form-grid two">
        ${CLIENTE_FIELDS(v)}
        <div class="field"><label>CPF / CNPJ</label><input name="documento" value="${esc(v.documento)}"></div>
        <div class="field"><label>Data de nascimento</label><input name="nascimento" type="date" value="${esc(v.nascimento)}"></div>
        <div class="field full"><label>Endereço</label><input name="endereco" value="${esc(v.endereco)}" placeholder="Rua, número, bairro, cidade"></div>
        <div class="field full"><label>Preferências olfativas</label><input name="preferencias" value="${esc(v.preferencias)}" placeholder="Ex.: florais, amadeirados, doces; marcas favoritas"></div>
        <div class="field full"><label>Observações</label><textarea name="obs">${esc(v.obs)}</textarea></div>
      </div><button class="btn block">${I.check} Salvar cliente</button></form>`,
      after() {
        $('#cf').addEventListener('submit', (e) => {
          e.preventDefault();
          const d = formData(e.target); d.nome = d.nome.trim();
          if (!d.nome) return toast('Informe o nome');
          if (c) Object.assign(c, d); else { d.id = uid(); d.criadoEm = today(); db.clientes.push(d); }
          save(); toast('Cliente salvo'); location.hash = `#/cliente/${c ? c.id : d.id}`;
        });
      },
    };
  }
  function clienteQuickModal(onSaved) {
    openModal(`<h3>Novo cliente <button data-close>${I.close}</button></h3><form class="form" id="qc">${CLIENTE_FIELDS()}<button class="btn block">Salvar</button></form>`,
      (sh) => $('#qc', sh).addEventListener('submit', (e) => {
        e.preventDefault(); const d = formData(e.target); d.nome = d.nome.trim();
        if (!d.nome) return toast('Informe o nome');
        d.id = uid(); d.criadoEm = today(); db.clientes.push(d); save(); closeModal(); toast('Cliente cadastrado'); onSaved(d);
      }));
  }
  function viewCliente(id) {
    const c = byId('clientes', id);
    if (!c) return notFound();
    const st = clienteStats(c.id);
    const ps = db.pedidos.filter((p) => p.clienteId === c.id).sort((a, b) => b.data.localeCompare(a.data));
    return {
      title: 'Cliente', back: '#/clientes',
      actions: [{ icon: 'edit', label: 'Editar', href: `#/cliente-editar/${c.id}` }, { icon: 'trash', label: 'Excluir', id: 'del' }],
      html: `<div class="card"><div class="detail-head"><div class="avatar">${esc(initials(c.nome))}</div>
          <div style="min-width:0"><h2>${esc(c.nome)}</h2><div class="muted" style="font-size:14px;margin-top:4px">Cliente desde ${fmtDate(c.criadoEm)}</div></div></div>
        <dl class="kv" style="margin-top:16px">
          ${c.telefone ? `<dt>Telefone</dt><dd>${esc(c.telefone)}</dd>` : ''}${c.email ? `<dt>E-mail</dt><dd>${esc(c.email)}</dd>` : ''}
          ${c.documento ? `<dt>CPF/CNPJ</dt><dd>${esc(c.documento)}</dd>` : ''}${c.nascimento ? `<dt>Aniversário</dt><dd>${fmtDate(c.nascimento)}</dd>` : ''}
          ${c.endereco ? `<dt>Endereço</dt><dd>${esc(c.endereco)}</dd>` : ''}${c.preferencias ? `<dt>Preferências</dt><dd>${esc(c.preferencias)}</dd>` : ''}
          ${c.obs ? `<dt>Obs.</dt><dd>${esc(c.obs)}</dd>` : ''}
        </dl>
        ${c.telefone ? `<div class="btn-row" style="margin-top:16px"><a class="btn secondary sm" href="tel:${esc(onlyDigits(c.telefone))}">${I.phone} Ligar</a><a class="btn secondary sm" target="_blank" rel="noopener" href="${waLink(c.telefone, `Olá ${c.nome.split(' ')[0]}! Aqui é da ${db.empresa.nome || 'Ana Perfumes'}.`)}">${I.whats} WhatsApp</a></div>` : ''}
      </div>
      <div class="kpis" style="margin-top:12px">${kpi('Total comprado', money(st.total), 'pink')}${kpi('Compras', st.n)}${kpi('Em aberto', money(st.devendo), st.devendo > 0 ? 'red' : 'green')}</div>
      <div class="section-title"><span>Histórico de pedidos</span><a href="#/pedido-editar/novo?cliente=${c.id}">+ Novo pedido</a></div>
      ${ps.length ? `<div class="list">${ps.map(pedidoRow).join('')}</div>` : '<p class="muted">Nenhum pedido para este cliente.</p>'}`,
      after() {
        $('#del').addEventListener('click', () => confirmBox(`Excluir ${esc(c.nome)}? Os pedidos serão mantidos como "Consumidor final".`, () => {
          db.clientes = db.clientes.filter((x) => x.id !== c.id);
          db.pedidos.forEach((p) => { if (p.clienteId === c.id) p.clienteId = ''; });
          save(); toast('Cliente excluído'); location.hash = '#/clientes';
        }));
      },
    };
  }

  /* ---------- Produtos ---------- */
  const produtoNome = (p) => [p.nome, p.volume ? `${p.volume}ml` : '', p.marca ? `· ${p.marca}` : ''].filter(Boolean).join(' ');
  const lowStock = (p) => num(p.estoque) <= num(p.estoqueMin);
  function viewProdutos() {
    return {
      title: 'Produtos', back: '#/pedidos',
      actions: [{ icon: 'plusCircle', label: 'Novo produto', href: '#/produto-editar/novo' }],
      html: db.produtos.length ? `${searchBox('Digite para buscar')}<div class="seg" id="catseg" style="margin:12px 0"></div><div id="list"></div>`
        : `${searchBox('Digite para buscar')}${emptyState('Catálogo de Produtos', 'Você ainda não tem produtos cadastrados', '<a class="btn" href="#/produto-editar/novo">Adicionar Produto</a>')}`,
      after() {
        if (!db.produtos.length) return;
        let cat = 'Todos', q = '';
        const cats = ['Todos', ...new Set(db.produtos.map((p) => p.categoria).filter(Boolean)), 'Estoque baixo'];
        const drawSeg = () => {
          $('#catseg').innerHTML = cats.map((c) => `<button class="${c === cat ? 'on' : ''}">${esc(c)}</button>`).join('');
          $$('#catseg button').forEach((b, i) => b.addEventListener('click', () => { cat = cats[i]; drawSeg(); draw(); }));
        };
        const draw = () => {
          let list = db.produtos.filter((p) => norm(`${p.nome} ${p.marca} ${p.codigo} ${p.familia}`).includes(norm(q)));
          if (cat === 'Estoque baixo') list = list.filter(lowStock); else if (cat !== 'Todos') list = list.filter((p) => p.categoria === cat);
          list.sort((a, b) => a.nome.localeCompare(b.nome));
          $('#list').innerHTML = list.length ? `<div class="list">${list.map((p) => `<a class="row" href="#/produto-editar/${p.id}">
            <div class="avatar sq">${I.perfume}</div>
            <div class="grow"><div class="t">${esc(p.nome)}${p.volume ? ` <span class="muted">${esc(p.volume)}ml</span>` : ''}</div>
            <div class="s">${esc([p.marca, p.categoria, p.concentracao].filter(Boolean).join(' · ') || 'Sem detalhes')}</div></div>
            <div class="r"><b>${money(p.preco)}</b><span class="chip ${lowStock(p) ? 'low' : 'ok'}">${num(p.estoque)} un.</span></div></a>`).join('')}</div>`
            : emptyState('Nada encontrado', 'Nenhum produto corresponde ao filtro.');
        };
        drawSeg(); draw();
        $('#q').addEventListener('input', (e) => { q = e.target.value; draw(); });
      },
    };
  }
  function viewProdutoForm(id) {
    const p = id !== 'novo' ? byId('produtos', id) : null;
    if (id !== 'novo' && !p) return notFound();
    const v = p || { categoria: 'Feminino', concentracao: 'Eau de Parfum', estoque: 0, estoqueMin: 2 };
    const opt = (arr, cur) => arr.map((x) => `<option ${x === cur ? 'selected' : ''}>${x}</option>`).join('');
    const vendidos = p ? db.pedidos.filter(isSale).reduce((s, o) => s + o.itens.filter((i) => i.refId === p.id).reduce((a, i) => a + num(i.qtd), 0), 0) : 0;
    return {
      title: p ? 'Editar produto' : 'Novo produto', back: '#/produtos',
      actions: p ? [{ icon: 'trash', label: 'Excluir', id: 'del' }] : [],
      html: `${p ? `<div class="kpis" style="margin-bottom:12px">${kpi('Em estoque', num(p.estoque), lowStock(p) ? 'red' : 'green')}${kpi('Vendidos', vendidos)}${kpi('Margem', num(p.preco) ? Math.round(((num(p.preco) - num(p.custo)) / num(p.preco)) * 100) + '%' : '—', 'blue')}</div>` : ''}
        <form class="form card" id="pf"><div class="form-grid two">
        <div class="field full"><label>Nome do perfume / produto <span class="req">*</span></label><input name="nome" required value="${esc(v.nome)}" placeholder="Ex.: La Vie Est Belle"></div>
        <div class="field"><label>Marca</label><input name="marca" value="${esc(v.marca)}" list="marcas"><datalist id="marcas">${[...new Set(db.produtos.map((x) => x.marca).filter(Boolean))].map((m) => `<option value="${esc(m)}">`).join('')}</datalist></div>
        <div class="field"><label>Código / SKU</label><input name="codigo" value="${esc(v.codigo)}"></div>
        <div class="field"><label>Categoria</label><select name="categoria">${opt(['Feminino', 'Masculino', 'Unissex', 'Infantil', 'Body splash', 'Hidratante', 'Kit / Presente', 'Decant', 'Outros'], v.categoria)}</select></div>
        <div class="field"><label>Concentração</label><select name="concentracao">${opt(['Eau de Parfum', 'Eau de Toilette', 'Parfum / Extrait', 'Eau de Cologne', 'Body splash', 'Não se aplica'], v.concentracao)}</select></div>
        <div class="field"><label>Volume (ml)</label><input name="volume" type="number" min="0" inputmode="numeric" value="${esc(v.volume)}"></div>
        <div class="field"><label>Família olfativa</label><input name="familia" value="${esc(v.familia)}" placeholder="Floral, amadeirado, oriental..."></div>
        <div class="field"><label>Preço de custo (R$)</label><input name="custo" type="number" step="0.01" min="0" inputmode="decimal" value="${v.custo ?? ''}"></div>
        <div class="field"><label>Preço de venda (R$) <span class="req">*</span></label><input name="preco" type="number" step="0.01" min="0" inputmode="decimal" required value="${v.preco ?? ''}"></div>
        <div class="field"><label>Quantidade em estoque</label><input name="estoque" type="number" step="1" inputmode="numeric" value="${num(v.estoque)}"></div>
        <div class="field"><label>Estoque mínimo (alerta)</label><input name="estoqueMin" type="number" step="1" min="0" inputmode="numeric" value="${num(v.estoqueMin)}"></div>
        <div class="field full"><label>Descrição / notas</label><textarea name="descricao" placeholder="Notas de topo, coração e fundo...">${esc(v.descricao)}</textarea></div>
        </div><button class="btn block">${I.check} Salvar produto</button></form>`,
      after() {
        $('#pf').addEventListener('submit', (e) => {
          e.preventDefault();
          const d = formData(e.target); d.nome = d.nome.trim();
          if (!d.nome) return toast('Informe o nome do produto');
          ['custo', 'preco', 'estoque', 'estoqueMin'].forEach((k) => (d[k] = num(d[k])));
          if (p) {
            Object.assign(p, d);
            db.pedidos.forEach((o) => o.itens.forEach((i) => { if (i.refId === p.id) i.nome = produtoNome(p); }));
          } else { d.id = uid(); db.produtos.push(d); }
          save(); toast('Produto salvo'); location.hash = '#/produtos';
        });
        const del = $('#del');
        if (del) del.addEventListener('click', () => confirmBox(`Excluir ${esc(p.nome)}? Pedidos antigos manterão o nome do item.`, () => {
          db.produtos = db.produtos.filter((x) => x.id !== p.id); save(); toast('Produto excluído'); location.hash = '#/produtos';
        }));
      },
    };
  }

  /* ---------- Serviços ---------- */
  function viewServicos() {
    return {
      title: 'Serviços', back: '#/pedidos',
      actions: [{ icon: 'plusCircle', label: 'Novo serviço', href: '#/servico-editar/novo' }],
      html: db.servicos.length ? `${searchBox('Digite para buscar')}<div id="list" style="margin-top:12px"></div>`
        : `${searchBox('Digite para buscar')}${emptyState('Catálogo de Serviços', 'Você ainda não tem serviços cadastrados', '<a class="btn" href="#/servico-editar/novo">Adicionar Serviço</a>')}`,
      after() {
        if (!db.servicos.length) return;
        const draw = (q = '') => {
          const list = db.servicos.filter((s) => norm(s.nome + ' ' + s.descricao).includes(norm(q))).sort((a, b) => a.nome.localeCompare(b.nome));
          $('#list').innerHTML = `<div class="list">${list.map((s) => `<a class="row" href="#/servico-editar/${s.id}"><div class="avatar sq">${I.gift}</div>
            <div class="grow"><div class="t">${esc(s.nome)}</div><div class="s">${esc(s.descricao || '')}</div></div><div class="r"><b>${money(s.preco)}</b></div></a>`).join('')}</div>`;
        };
        draw(); $('#q').addEventListener('input', (e) => draw(e.target.value));
      },
    };
  }
  function viewServicoForm(id) {
    const s = id !== 'novo' ? byId('servicos', id) : null;
    if (id !== 'novo' && !s) return notFound();
    const v = s || {};
    return {
      title: s ? 'Editar serviço' : 'Novo serviço', back: '#/servicos',
      actions: s ? [{ icon: 'trash', label: 'Excluir', id: 'del' }] : [],
      html: `<form class="form card" id="sf">
        <div class="field"><label>Nome do serviço <span class="req">*</span></label><input name="nome" required value="${esc(v.nome)}" placeholder="Ex.: Embalagem para presente"></div>
        <div class="field"><label>Preço (R$)</label><input name="preco" type="number" step="0.01" min="0" inputmode="decimal" value="${v.preco ?? ''}"></div>
        <div class="field"><label>Descrição</label><textarea name="descricao">${esc(v.descricao)}</textarea></div>
        <button class="btn block">${I.check} Salvar serviço</button></form>`,
      after() {
        $('#sf').addEventListener('submit', (e) => {
          e.preventDefault(); const d = formData(e.target); d.nome = d.nome.trim(); d.preco = num(d.preco);
          if (!d.nome) return toast('Informe o nome');
          if (s) Object.assign(s, d); else { d.id = uid(); db.servicos.push(d); }
          save(); toast('Serviço salvo'); location.hash = '#/servicos';
        });
        const del = $('#del');
        if (del) del.addEventListener('click', () => confirmBox(`Excluir ${esc(s.nome)}?`, () => {
          db.servicos = db.servicos.filter((x) => x.id !== s.id); save(); location.hash = '#/servicos';
        }));
      },
    };
  }

  /* ---------- Painel ---------- */
  function viewDashboard() {
    const t = today(); const mk = monthKey(t);
    const vendasMes = db.pedidos.filter((p) => isSale(p) && monthKey(p.data) === mk);
    const recebidoMes = allReceitas().filter((r) => monthKey(r.data) === mk).reduce((s, r) => s + r.valor, 0);
    const despesasMes = db.lancamentos.filter((l) => l.tipo === 'despesa' && monthKey(l.data) === mk).reduce((s, l) => s + num(l.valor), 0);
    const aReceber = db.pedidos.filter(isSale).reduce((s, p) => s + restante(p), 0);
    const hoje = db.pedidos.filter((p) => isSale(p) && p.data === t).reduce((s, p) => s + total(p), 0);
    const dias = Array.from({ length: 7 }, (_, i) => { const d = daysAgo(6 - i); return { label: parseDate(d).toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', ''), value: db.pedidos.filter((p) => isSale(p) && p.data === d).reduce((s, p) => s + total(p), 0) }; });
    const baixos = db.produtos.filter(lowStock);
    const mmdd = t.slice(5, 7);
    const aniver = db.clientes.filter((c) => c.nascimento && c.nascimento.slice(5, 7) === mmdd).sort((a, b) => a.nascimento.slice(8).localeCompare(b.nascimento.slice(8)));
    const entregas = db.pedidos.filter((p) => p.entrega && p.entrega >= t && p.status !== 'cancelado' && p.status !== 'concluido').sort((a, b) => a.entrega.localeCompare(b.entrega)).slice(0, 5);
    return {
      title: db.empresa.nome || 'Painel', main: true,
      html: `<div class="kpis">
          ${kpi('Vendas do mês', money(vendasMes.reduce((s, p) => s + total(p), 0)), 'hero')}
          ${kpi('Vendas hoje', money(hoje), 'pink')}
          ${kpi('Recebido no mês', money(recebidoMes), 'green')}
          ${kpi('Despesas do mês', money(despesasMes), 'red')}
          ${kpi('A receber', money(aReceber), 'blue')}
          ${kpi('Pedidos no mês', vendasMes.length)}
          ${kpi('Ticket médio', money(vendasMes.length ? vendasMes.reduce((s, p) => s + total(p), 0) / vendasMes.length : 0))}
        </div>
        <div class="section-title">Vendas dos últimos 7 dias</div>
        <div class="card">${barChart(dias)}</div>
        <div class="two-col">
          <div><div class="section-title"><span>Próximas entregas</span><a href="#/agenda">Agenda</a></div>
            ${entregas.length ? `<div class="list">${entregas.map((p) => `<a class="row" href="#/pedido/${p.id}"><div class="avatar sq">${I.truck}</div><div class="grow"><div class="t">#${p.numero} · ${esc(clienteNome(p.clienteId))}</div><div class="s">${fmtDate(p.entrega)}</div></div><b>${money(total(p))}</b></a>`).join('')}</div>` : '<p class="muted">Nenhuma entrega agendada.</p>'}</div>
          <div><div class="section-title"><span>Aniversariantes do mês</span></div>
            ${aniver.length ? `<div class="list">${aniver.map((c) => `<a class="row" href="#/cliente/${c.id}"><div class="avatar sq">${I.cake}</div><div class="grow"><div class="t">${esc(c.nome)}</div><div class="s">Dia ${c.nascimento.slice(8)}</div></div>${c.telefone ? `<span class="chip ok">Enviar mensagem</span>` : ''}</a>`).join('')}</div>` : '<p class="muted">Nenhum aniversariante este mês.</p>'}</div>
        </div>
        <div class="section-title"><span>Estoque baixo</span><a href="#/relatorio/estoque">Ver estoque</a></div>
        ${baixos.length ? `<div class="list">${baixos.slice(0, 6).map((p) => `<a class="row" href="#/produto-editar/${p.id}"><div class="avatar sq">${I.perfume}</div><div class="grow"><div class="t">${esc(produtoNome(p))}</div><div class="s">Mínimo: ${num(p.estoqueMin)}</div></div><span class="chip low">${num(p.estoque)} un.</span></a>`).join('')}</div>` : '<p class="muted">Tudo certo com o estoque. ✨</p>'}
        ${!db.produtos.length && !db.pedidos.length ? `<div class="card" style="margin-top:20px;text-align:center"><p style="margin-bottom:12px">Primeira vez por aqui? Carregue alguns perfumes e clientes de exemplo para conhecer o app.</p><button class="btn" id="demo">Carregar dados de exemplo</button></div>` : ''}`,
      after() { const d = $('#demo'); if (d) d.addEventListener('click', loadDemo); },
    };
  }

  /* ---------- Finanças ---------- */
  function allReceitas() {
    const r = [];
    db.pedidos.filter((p) => p.status !== 'cancelado').forEach((p) => (p.pagamentos || []).forEach((x) => r.push({
      id: x.id, tipo: 'receita', valor: num(x.valor), data: x.data, descricao: `Pedido #${p.numero} · ${clienteNome(p.clienteId)}`, categoria: x.forma, pedidoId: p.id,
    })));
    db.lancamentos.filter((l) => l.tipo === 'receita').forEach((l) => r.push({ ...l, valor: num(l.valor) }));
    return r;
  }
  const allMovs = () => [...allReceitas(), ...db.lancamentos.filter((l) => l.tipo === 'despesa').map((l) => ({ ...l, valor: num(l.valor) }))];
  function viewFinancas() {
    const mk = ui.finMes;
    const movs = allMovs().filter((m) => monthKey(m.data) === mk).sort((a, b) => b.data.localeCompare(a.data));
    const rec = movs.filter((m) => m.tipo === 'receita').reduce((s, m) => s + m.valor, 0);
    const des = movs.filter((m) => m.tipo === 'despesa').reduce((s, m) => s + m.valor, 0);
    const saldoGeral = allMovs().reduce((s, m) => s + (m.tipo === 'receita' ? m.valor : -m.valor), 0);
    return {
      title: 'Finanças', main: true,
      html: `<div class="month-switch"><button class="cal-nav" id="pm">${I.back}</button><b>${monthLabel(mk)}</b><button class="cal-nav" id="nm">${I.chev}</button></div>
        <div class="kpis">${kpi('Saldo do mês', money(rec - des), 'hero')}${kpi('Receitas', money(rec), 'green')}${kpi('Despesas', money(des), 'red')}${kpi('Saldo acumulado', money(saldoGeral), 'blue')}</div>
        <div class="btn-row" style="margin-top:14px"><button class="btn green" id="nr">+ Receita</button><button class="btn" id="nd">− Despesa</button></div>
        <div class="section-title">Movimentações</div>
        ${movs.length ? `<div class="list">${movs.map((m) => `<div class="row" data-id="${m.id}" data-ped="${m.pedidoId || ''}">
          <div class="avatar sq" style="${m.tipo === 'receita' ? 'background:var(--green-soft);color:var(--green)' : 'background:var(--red-soft);color:var(--red)'}">${m.tipo === 'receita' ? I.dollar : I.wallet}</div>
          <div class="grow"><div class="t">${esc(m.descricao)}</div><div class="s">${fmtDate(m.data)} · ${esc(m.categoria || '')}</div></div>
          <div class="r"><b class="${m.tipo === 'receita' ? 'green-t' : 'red-t'}">${m.tipo === 'receita' ? '+' : '−'} ${money(m.valor)}</b></div></div>`).join('')}</div>`
          : emptyState('Sem movimentações', 'Pagamentos de pedidos entram aqui automaticamente.<br>Registre também suas despesas.')}`,
      after() {
        $('#pm').addEventListener('click', () => { ui.finMes = addMonth(mk, -1); render(); });
        $('#nm').addEventListener('click', () => { ui.finMes = addMonth(mk, 1); render(); });
        $('#nr').addEventListener('click', () => lancamentoModal(null, 'receita'));
        $('#nd').addEventListener('click', () => lancamentoModal(null, 'despesa'));
        $$('.row[data-id]').forEach((r) => r.addEventListener('click', () => {
          if (r.dataset.ped) { location.hash = `#/pedido/${r.dataset.ped}`; return; }
          lancamentoModal(byId('lancamentos', r.dataset.id));
        }));
      },
    };
  }
  function lancamentoModal(l, tipo = 'despesa') {
    const v = l || { tipo, data: today() };
    const cats = (t) => (t === 'receita' ? CATS_RECEITA : CATS_DESPESA).map((c) => `<option ${c === v.categoria ? 'selected' : ''}>${c}</option>`).join('');
    openModal(`<h3>${l ? 'Editar lançamento' : 'Novo lançamento'} <button data-close>${I.close}</button></h3>
      <form class="form" id="lf">
        <div class="seg" id="tseg"><button type="button" data-t="receita" class="${v.tipo === 'receita' ? 'on' : ''}">Receita</button><button type="button" data-t="despesa" class="${v.tipo === 'despesa' ? 'on' : ''}">Despesa</button></div>
        <input type="hidden" name="tipo" value="${v.tipo}">
        <div class="field"><label>Descrição <span class="req">*</span></label><input name="descricao" required value="${esc(v.descricao)}" placeholder="Ex.: Compra de perfumes do fornecedor"></div>
        <div class="field"><label>Valor (R$) <span class="req">*</span></label><input name="valor" type="number" step="0.01" min="0.01" inputmode="decimal" required value="${v.valor ?? ''}"></div>
        <div class="field"><label>Data</label><input name="data" type="date" required value="${v.data}"></div>
        <div class="field"><label>Categoria</label><select name="categoria" id="catsel">${cats(v.tipo)}</select></div>
        <div class="btn-row">${l ? '<button type="button" class="btn danger" id="dl">Excluir</button>' : ''}<button class="btn">Salvar</button></div>
      </form>`, (sh) => {
      $$('#tseg button', sh).forEach((b) => b.addEventListener('click', () => {
        $$('#tseg button', sh).forEach((x) => x.classList.toggle('on', x === b));
        sh.querySelector('[name=tipo]').value = b.dataset.t; $('#catsel', sh).innerHTML = cats(b.dataset.t);
      }));
      $('#lf', sh).addEventListener('submit', (e) => {
        e.preventDefault(); const d = formData(e.target); d.valor = num(d.valor);
        if (!d.descricao.trim() || d.valor <= 0) return toast('Preencha descrição e valor');
        if (l) Object.assign(l, d); else { d.id = uid(); db.lancamentos.push(d); }
        save(); closeModal(); toast('Lançamento salvo'); ui.finMes = monthKey(d.data); render();
      });
      const dl = $('#dl', sh);
      if (dl) dl.addEventListener('click', () => { db.lancamentos = db.lancamentos.filter((x) => x.id !== l.id); save(); closeModal(); toast('Lançamento excluído'); render(); });
    });
  }

  /* ---------- Agenda ---------- */
  function agendaItens(date) {
    const out = [];
    db.eventos.filter((e) => e.data === date).forEach((e) => out.push({ k: 'e', id: e.id, hora: e.hora || '', titulo: e.titulo, sub: e.clienteId ? clienteNome(e.clienteId) : (e.obs || 'Compromisso') }));
    db.pedidos.filter((p) => p.entrega === date && p.status !== 'cancelado').forEach((p) => out.push({ k: 'p', id: p.id, hora: '', titulo: `Entrega · Pedido #${p.numero}`, sub: `${clienteNome(p.clienteId)} · ${money(total(p))}` }));
    db.clientes.filter((c) => c.nascimento && c.nascimento.slice(5) === date.slice(5)).forEach((c) => out.push({ k: 'b', id: c.id, hora: '', titulo: `Aniversário de ${c.nome}`, sub: 'Que tal enviar uma mensagem?' }));
    return out.sort((a, b) => a.hora.localeCompare(b.hora));
  }
  function viewAgenda() {
    const mk = ui.agMes; const [y, m] = mk.split('-').map(Number);
    const first = new Date(y, m - 1, 1); const start = new Date(first); start.setDate(1 - first.getDay());
    const cells = Array.from({ length: 42 }, (_, i) => { const d = new Date(start); d.setDate(start.getDate() + i); return iso(d); });
    const t = today();
    const sel = ui.agDia; const items = agendaItens(sel);
    return {
      title: 'Agenda', main: true,
      html: `<div class="two-col"><div><div class="cal-head"><button class="cal-nav" id="pm">${I.back}</button><h2>${monthLabel(mk)}</h2><button class="cal-nav" id="nm">${I.chev}</button></div>
        <div class="cal">${['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((w) => `<div class="wd">${w}</div>`).join('')}
        ${cells.map((d) => { const it = agendaItens(d); const kinds = [...new Set(it.map((x) => x.k))];
          return `<button class="d ${monthKey(d) !== mk ? 'out' : ''} ${d === t ? 'today' : ''} ${d === sel ? 'sel' : ''}" data-d="${d}">${parseDate(d).getDate()}<span class="dots">${kinds.map((k) => `<i class="${k}"></i>`).join('')}</span></button>`; }).join('')}</div>
        <div class="legend"><span><i style="background:var(--orange)"></i>Compromissos</span><span><i style="background:var(--teal)"></i>Entregas</span><span><i style="background:var(--pink)"></i>Aniversários</span></div>
        <button class="btn sm ghost" id="hoje" style="margin-top:12px">Ir para hoje</button></div>
        <div><div class="section-title"><span>${parseDate(sel).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' })}</span><button id="ne">+ Compromisso</button></div>
        ${items.length ? `<div class="list">${items.map((x) => `<div class="row" data-k="${x.k}" data-id="${x.id}">
          <div class="avatar sq">${x.k === 'e' ? I.event : x.k === 'p' ? I.truck : I.cake}</div>
          <div class="grow"><div class="t">${x.hora ? `<span class="pink-t">${x.hora}</span> · ` : ''}${esc(x.titulo)}</div><div class="s">${esc(x.sub)}</div></div><span class="chev">${I.chev}</span></div>`).join('')}</div>`
          : '<div class="card"><p class="muted">Nada agendado para este dia.</p></div>'}</div></div>`,
      after() {
        $('#pm').addEventListener('click', () => { ui.agMes = addMonth(mk, -1); render(); });
        $('#nm').addEventListener('click', () => { ui.agMes = addMonth(mk, 1); render(); });
        $('#hoje').addEventListener('click', () => { ui.agMes = monthKey(t); ui.agDia = t; render(); });
        $$('.cal .d').forEach((b) => b.addEventListener('click', () => { ui.agDia = b.dataset.d; ui.agMes = monthKey(b.dataset.d); render(); }));
        $('#ne').addEventListener('click', () => eventoModal(null, sel));
        $$('.row[data-k]').forEach((r) => r.addEventListener('click', () => {
          if (r.dataset.k === 'p') location.hash = `#/pedido/${r.dataset.id}`;
          else if (r.dataset.k === 'b') location.hash = `#/cliente/${r.dataset.id}`;
          else eventoModal(byId('eventos', r.dataset.id));
        }));
      },
    };
  }
  function eventoModal(ev, date) {
    const v = ev || { data: date || today(), hora: '' };
    openModal(`<h3>${ev ? 'Editar compromisso' : 'Novo compromisso'} <button data-close>${I.close}</button></h3>
      <form class="form" id="ef">
        <div class="field"><label>Título <span class="req">*</span></label><input name="titulo" required value="${esc(v.titulo)}" placeholder="Ex.: Visita da cliente, chegada de mercadoria"></div>
        <div class="form-grid two"><div class="field"><label>Data</label><input name="data" type="date" required value="${v.data}"></div>
        <div class="field"><label>Hora</label><input name="hora" type="time" value="${esc(v.hora)}"></div></div>
        <div class="field"><label>Cliente (opcional)</label><select name="clienteId"><option value="">—</option>${db.clientes.map((c) => `<option value="${c.id}" ${c.id === v.clienteId ? 'selected' : ''}>${esc(c.nome)}</option>`).join('')}</select></div>
        <div class="field"><label>Observações</label><textarea name="obs">${esc(v.obs)}</textarea></div>
        <div class="btn-row">${ev ? '<button type="button" class="btn danger" id="dl">Excluir</button>' : ''}<button class="btn">Salvar</button></div>
      </form>`, (sh) => {
      $('#ef', sh).addEventListener('submit', (e) => {
        e.preventDefault(); const d = formData(e.target);
        if (!d.titulo.trim()) return toast('Informe o título');
        if (ev) Object.assign(ev, d); else { d.id = uid(); db.eventos.push(d); }
        save(); closeModal(); ui.agDia = d.data; ui.agMes = monthKey(d.data); toast('Compromisso salvo');
        if (location.hash !== '#/agenda') location.hash = '#/agenda'; else render();
      });
      const dl = $('#dl', sh);
      if (dl) dl.addEventListener('click', () => { db.eventos = db.eventos.filter((x) => x.id !== ev.id); save(); closeModal(); render(); });
    });
  }

  /* ---------- Relatórios ---------- */
  const REPORTS = {
    pedidos: { icon: 'ordersLine', t: 'Pedidos', d: 'Confira a situação de todos os pedidos' },
    vendas: { icon: 'dollar', t: 'Vendas', d: 'Analise o desempenho de suas vendas' },
    servicos: { icon: 'tools', t: 'Serviços', d: 'Acompanhe seus serviços realizados' },
    pagamentos: { icon: 'money', t: 'Pagamentos', d: 'Acompanhe o andamento dos pagamentos' },
    financas: { icon: 'wallet', t: 'Finanças', d: 'Veja os detalhes de todas receitas e despesas' },
    estoque: { icon: 'box', t: 'Estoque', d: 'Confira a situação do seu inventário' },
  };
  function viewRelatorios() {
    return {
      title: 'Relatórios', back: '#/pedidos',
      html: `<div class="grid grid-2 lg-3">${Object.entries(REPORTS).map(([k, r]) => `<a class="report-card" href="#/relatorio/${k}">${I[r.icon]}<div class="txt"><b>${r.t}</b><p>${r.d}</p></div><span class="go">${I.chev}</span></a>`).join('')}</div>`,
    };
  }
  function viewRelatorio(tipo) {
    const R = REPORTS[tipo]; if (!R) return notFound();
    const ps = db.pedidos.filter((p) => inPeriod(p.data));
    const vendas = ps.filter(isSale);
    let html = '';
    const csvRows = [];
    if (tipo === 'pedidos') {
      const cnt = (st) => ps.filter((p) => p.status === st);
      html = `<div class="kpis">${kpi('Total de pedidos', ps.length, 'hero')}${Object.entries(STATUS).map(([k, v]) => kpi(v, `${cnt(k).length} <small style="display:inline;font-size:13px">${money(cnt(k).reduce((s, p) => s + total(p), 0))}</small>`)).join('')}</div>
        <div class="section-title">Pedidos no período</div>${ps.length ? `<div class="list">${ps.sort((a, b) => b.data.localeCompare(a.data)).map(pedidoRow).join('')}</div>` : '<p class="muted">Nenhum pedido.</p>'}`;
      csvRows.push(['Numero', 'Data', 'Cliente', 'Situacao', 'Total', 'Pago', 'Restante'], ...ps.map((p) => [p.numero, p.data, clienteNome(p.clienteId), STATUS[p.status], total(p).toFixed(2), pago(p).toFixed(2), restante(p).toFixed(2)]));
    } else if (tipo === 'vendas') {
      const fat = vendas.reduce((s, p) => s + total(p), 0);
      const cst = vendas.reduce((s, p) => s + custo(p), 0);
      const prod = {}; const cli = {}; const marcas = {};
      vendas.forEach((p) => {
        cli[clienteNome(p.clienteId)] = (cli[clienteNome(p.clienteId)] || 0) + total(p);
        p.itens.filter((i) => i.tipo === 'produto').forEach((i) => {
          const k = i.nome; prod[k] = prod[k] || { q: 0, v: 0 }; prod[k].q += num(i.qtd); prod[k].v += num(i.qtd) * num(i.preco);
          const pr = byId('produtos', i.refId); const mk = (pr && pr.marca) || 'Sem marca'; marcas[mk] = (marcas[mk] || 0) + num(i.qtd) * num(i.preco);
        });
      });
      const top = (o, n = 8) => Object.entries(o).map(([label, v]) => typeof v === 'number' ? { label, value: v } : { label, value: v.v, extra: `${v.q} un.` }).sort((a, b) => b.value - a.value).slice(0, n);
      const byMonth = {}; vendas.forEach((p) => (byMonth[monthKey(p.data)] = (byMonth[monthKey(p.data)] || 0) + total(p)));
      const chart = ['mes', '30', '7', 'hoje'].includes(ui.relPeriodo)
        ? (() => { const days = {}; vendas.forEach((p) => (days[p.data] = (days[p.data] || 0) + total(p))); return Object.keys(days).sort().slice(-14).map((d) => ({ label: fmtShort(d), value: days[d] })); })()
        : Object.keys(byMonth).sort().slice(-12).map((k) => ({ label: parseDate(k + '-01').toLocaleDateString('pt-BR', { month: 'short' }).replace('.', ''), value: byMonth[k] }));
      html = `<div class="kpis">${kpi('Faturamento', money(fat), 'hero')}${kpi('Nº de vendas', vendas.length)}${kpi('Ticket médio', money(vendas.length ? fat / vendas.length : 0), 'blue')}${kpi('Custo dos produtos', money(cst), 'red')}${kpi('Lucro bruto', money(fat - cst), 'green')}${kpi('Descontos dados', money(vendas.reduce((s, p) => s + num(p.desconto), 0)))}</div>
        <div class="section-title">Evolução</div><div class="card">${chart.length ? barChart(chart) : '<p class="muted">Sem vendas no período.</p>'}</div>
        <div class="two-col"><div><div class="section-title">Perfumes mais vendidos</div><div class="card">${hbars(top(prod))}</div></div>
        <div><div class="section-title">Melhores clientes</div><div class="card">${hbars(top(cli))}</div>
        <div class="section-title">Vendas por marca</div><div class="card">${hbars(top(marcas))}</div></div></div>`;
      csvRows.push(['Produto', 'Quantidade', 'Valor'], ...Object.entries(prod).map(([k, v]) => [k, v.q, v.v.toFixed(2)]));
    } else if (tipo === 'servicos') {
      const sv = {};
      vendas.forEach((p) => p.itens.filter((i) => i.tipo === 'servico').forEach((i) => { sv[i.nome] = sv[i.nome] || { q: 0, v: 0 }; sv[i.nome].q += num(i.qtd); sv[i.nome].v += num(i.qtd) * num(i.preco); }));
      const rows = Object.entries(sv).map(([label, v]) => ({ label, value: v.v, extra: `${v.q}x` })).sort((a, b) => b.value - a.value);
      html = `<div class="kpis">${kpi('Receita com serviços', money(rows.reduce((s, r) => s + r.value, 0)), 'hero')}${kpi('Serviços realizados', Object.values(sv).reduce((s, v) => s + v.q, 0))}${kpi('Tipos de serviço', rows.length)}</div>
        <div class="section-title">Por serviço</div><div class="card">${hbars(rows)}</div>`;
      csvRows.push(['Servico', 'Quantidade', 'Valor'], ...Object.entries(sv).map(([k, v]) => [k, v.q, v.v.toFixed(2)]));
    } else if (tipo === 'pagamentos') {
      const pays = []; db.pedidos.filter((p) => p.status !== 'cancelado').forEach((p) => (p.pagamentos || []).forEach((x) => { if (inPeriod(x.data)) pays.push({ ...x, p }); }));
      const formas = {}; pays.forEach((x) => (formas[x.forma] = (formas[x.forma] || 0) + num(x.valor)));
      const pend = db.pedidos.filter((p) => isSale(p) && restante(p) > 0.004).sort((a, b) => a.data.localeCompare(b.data));
      html = `<div class="kpis">${kpi('Recebido no período', money(pays.reduce((s, x) => s + num(x.valor), 0)), 'hero')}${kpi('Nº de pagamentos', pays.length)}${kpi('Total a receber', money(pend.reduce((s, p) => s + restante(p), 0)), 'red')}${kpi('Pedidos pendentes', pend.length)}</div>
        <div class="section-title">Por forma de pagamento</div><div class="card">${hbars(Object.entries(formas).map(([label, value]) => ({ label, value })).sort((a, b) => b.value - a.value))}</div>
        <div class="section-title">Pedidos com valores a receber (todos)</div>${pend.length ? `<div class="list">${pend.map(pedidoRow).join('')}</div>` : '<p class="muted">Nenhum valor pendente. 🎉</p>'}`;
      csvRows.push(['Data', 'Pedido', 'Cliente', 'Forma', 'Valor'], ...pays.map((x) => [x.data, x.p.numero, clienteNome(x.p.clienteId), x.forma, num(x.valor).toFixed(2)]));
    } else if (tipo === 'financas') {
      const movs = allMovs().filter((m) => inPeriod(m.data));
      const rec = movs.filter((m) => m.tipo === 'receita').reduce((s, m) => s + m.valor, 0);
      const des = movs.filter((m) => m.tipo === 'despesa').reduce((s, m) => s + m.valor, 0);
      const cat = {}; movs.filter((m) => m.tipo === 'despesa').forEach((m) => (cat[m.categoria || 'Outros'] = (cat[m.categoria || 'Outros'] || 0) + m.valor));
      html = `<div class="kpis">${kpi('Resultado', money(rec - des), 'hero')}${kpi('Receitas', money(rec), 'green')}${kpi('Despesas', money(des), 'red')}${kpi('Margem', rec ? Math.round(((rec - des) / rec) * 100) + '%' : '—', 'blue')}</div>
        <div class="section-title">Despesas por categoria</div><div class="card">${hbars(Object.entries(cat).map(([label, value]) => ({ label, value })).sort((a, b) => b.value - a.value))}</div>
        <div class="section-title">Movimentações</div>${movs.length ? `<div class="card"><table class="table"><thead><tr><th>Data</th><th>Descrição</th><th class="num">Valor</th></tr></thead><tbody>${movs.sort((a, b) => b.data.localeCompare(a.data)).map((m) => `<tr><td>${fmtShort(m.data)}</td><td>${esc(m.descricao)}<div class="muted" style="font-size:12px">${esc(m.categoria || '')}</div></td><td class="num ${m.tipo === 'receita' ? 'green-t' : 'red-t'}">${m.tipo === 'receita' ? '+' : '−'}${money(m.valor)}</td></tr>`).join('')}</tbody></table></div>` : '<p class="muted">Sem movimentações.</p>'}`;
      csvRows.push(['Data', 'Tipo', 'Descricao', 'Categoria', 'Valor'], ...movs.map((m) => [m.data, m.tipo, m.descricao, m.categoria || '', m.valor.toFixed(2)]));
    } else if (tipo === 'estoque') {
      const pr = db.produtos.slice().sort((a, b) => num(a.estoque) - num(b.estoque));
      const un = pr.reduce((s, p) => s + Math.max(0, num(p.estoque)), 0);
      html = `<div class="kpis">${kpi('Valor em estoque (venda)', money(pr.reduce((s, p) => s + Math.max(0, num(p.estoque)) * num(p.preco), 0)), 'hero')}${kpi('Valor em custo', money(pr.reduce((s, p) => s + Math.max(0, num(p.estoque)) * num(p.custo), 0)), 'blue')}${kpi('Unidades', un)}${kpi('Produtos', pr.length)}${kpi('Estoque baixo', pr.filter(lowStock).length, 'red')}</div>
        <div class="section-title">Inventário</div>${pr.length ? `<div class="card"><table class="table"><thead><tr><th>Produto</th><th class="num">Qtd</th><th class="num">Valor</th></tr></thead><tbody>${pr.map((p) => `<tr><td><a href="#/produto-editar/${p.id}">${esc(produtoNome(p))}</a></td><td class="num"><span class="chip ${lowStock(p) ? 'low' : 'ok'}">${num(p.estoque)}</span></td><td class="num">${money(num(p.estoque) * num(p.preco))}</td></tr>`).join('')}</tbody></table></div>` : '<p class="muted">Nenhum produto cadastrado.</p>'}`;
      csvRows.push(['Produto', 'Marca', 'Estoque', 'Minimo', 'Custo', 'Preco'], ...pr.map((p) => [p.nome, p.marca || '', num(p.estoque), num(p.estoqueMin), num(p.custo).toFixed(2), num(p.preco).toFixed(2)]));
    }
    return {
      title: R.t, back: '#/relatorios',
      actions: [{ icon: 'download', label: 'Exportar CSV', id: 'csv' }],
      html: (tipo !== 'estoque' ? periodSeg() : '') + html,
      after() {
        bindPeriod();
        $('#csv').addEventListener('click', () => {
          const csv = csvRows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(';')).join('\n');
          download(`relatorio-${tipo}-${today()}.csv`, '﻿' + csv, 'text/csv');
        });
      },
    };
  }

  /* ---------- Configurações ---------- */
  function viewConfig() {
    const e = db.empresa;
    return {
      title: 'Configurações', back: '#/pedidos',
      html: `<div class="section-title">Dados da empresa</div>
        <form class="form card" id="ef"><div class="form-grid two">
          <div class="field full"><label>Nome da empresa</label><input name="nome" value="${esc(e.nome)}"></div>
          <div class="field"><label>E-mail</label><input name="email" type="email" value="${esc(e.email)}"></div>
          <div class="field"><label>Telefone / WhatsApp</label><input name="telefone" type="tel" value="${esc(e.telefone)}"></div>
          <div class="field"><label>CNPJ / CPF</label><input name="documento" value="${esc(e.documento)}"></div>
          <div class="field"><label>Chave Pix</label><input name="pix" value="${esc(e.pix)}"></div>
          <div class="field full"><label>Endereço</label><input name="endereco" value="${esc(e.endereco)}"></div>
        </div><button class="btn block">${I.check} Salvar dados</button></form>
        <div class="section-title">Backup e dados</div>
        <div class="card"><p class="muted" style="font-size:14px;line-height:1.5;margin-bottom:14px">Os dados ficam salvos somente neste navegador. Exporte um backup regularmente e importe-o para usar em outro aparelho.</p>
          <div class="btn-row"><button class="btn secondary" id="exp">${I.download} Exportar backup</button>
          <label class="btn secondary" style="cursor:pointer">${I.upload} Importar backup<input type="file" id="imp" accept="application/json,.json" hidden></label></div>
          <div class="btn-row" style="margin-top:10px"><button class="btn ghost" id="demo">Carregar dados de exemplo</button><button class="btn danger" id="reset">Apagar todos os dados</button></div>
        </div>
        <p class="muted" style="text-align:center;font-size:12px;margin-top:20px">${db.clientes.length} clientes · ${db.produtos.length} produtos · ${db.pedidos.length} pedidos</p>`,
      after() {
        $('#ef').addEventListener('submit', (ev) => { ev.preventDefault(); Object.assign(db.empresa, formData(ev.target)); save(); toast('Dados salvos'); render(); });
        $('#exp').addEventListener('click', () => download(`backup-anaperfumes-${today()}.json`, JSON.stringify(db, null, 2), 'application/json'));
        $('#imp').addEventListener('change', (ev) => {
          const f = ev.target.files[0]; if (!f) return;
          const rd = new FileReader();
          rd.onload = () => {
            try {
              const data = JSON.parse(rd.result);
              if (!data || !Array.isArray(data.pedidos) || !Array.isArray(data.clientes)) throw new Error('inválido');
              confirmBox('Importar este backup? Os dados atuais serão substituídos.', () => { db = Object.assign(blank(), data); save(); toast('Backup importado'); render(); }, 'Importar');
            } catch (err) { toast('Arquivo de backup inválido'); }
          };
          rd.readAsText(f);
        });
        $('#demo').addEventListener('click', loadDemo);
        $('#reset').addEventListener('click', () => confirmBox('Apagar <b>todos</b> os dados deste aparelho? Esta ação não pode ser desfeita.', () => { db = blank(); save(); toast('Dados apagados'); location.hash = '#/pedidos'; render(); }, 'Apagar tudo'));
      },
    };
  }
  function download(name, content, type) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([content], { type }));
    a.download = name; document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  /* ---------- Ajuda ---------- */
  function viewAjuda() {
    const faq = [
      ['Como registro uma venda?', 'Toque no botão rosa "+" e escolha "Novo pedido / venda". Selecione o cliente, adicione os perfumes e serviços, defina a situação e salve. Se o cliente já pagou, marque "Pagamento recebido integralmente".'],
      ['Qual a diferença entre Orçamento, Em aberto e Concluído?', 'Orçamento é apenas uma proposta e não mexe no estoque. "Em aberto" é uma venda confirmada (baixa o estoque) aguardando entrega ou pagamento. "Concluído" é a venda finalizada. "Cancelado" devolve os itens ao estoque.'],
      ['Como controlo pagamentos parcelados ou fiado?', 'Abra o pedido e use "Registrar pagamento" quantas vezes precisar. O app mostra quanto já foi pago e quanto falta. Veja tudo em Relatórios › Pagamentos ou na aba "A receber" dos pedidos.'],
      ['Como emito um recibo ou orçamento?', 'Dentro do pedido toque em "Recibo" (ou "Orçamento"). Será aberta a tela de impressão, onde você pode imprimir ou salvar em PDF. Também é possível enviar o resumo pelo WhatsApp.'],
      ['O estoque é atualizado sozinho?', 'Sim. Ao salvar um pedido "Em aberto" ou "Concluído" o estoque é reduzido. Ao cancelar ou excluir, as unidades voltam. Defina o "estoque mínimo" de cada perfume para receber alertas no Painel.'],
      ['Onde ficam meus dados?', 'No próprio navegador deste aparelho. Use Configurações › Exportar backup para guardar uma cópia e Importar backup para restaurar ou usar em outro aparelho.'],
      ['Posso instalar como aplicativo?', 'Sim! No celular, abra o menu do navegador e toque em "Adicionar à tela inicial". O app abrirá em tela cheia como um aplicativo.'],
    ];
    return {
      title: 'Ajuda e Suporte', back: '#/pedidos',
      html: faq.map(([q, a]) => `<details class="faq"><summary>${q}</summary><p>${a}</p></details>`).join(''),
    };
  }

  function notFound() {
    return { title: 'Não encontrado', back: '#/pedidos', html: emptyState('Registro não encontrado', 'O item pode ter sido excluído.', '<a class="btn" href="#/pedidos">Voltar aos pedidos</a>') };
  }

  /* ---------- Dados de exemplo ---------- */
  function loadDemo() {
    const P = (nome, marca, categoria, volume, custo, preco, estoque, familia) => ({ id: uid(), nome, marca, categoria, volume, custo, preco, estoque, estoqueMin: 2, concentracao: 'Eau de Parfum', familia, codigo: '', descricao: '' });
    const prods = [
      P('La Vie Est Belle', 'Lancôme', 'Feminino', 100, 420, 689, 6, 'Floral frutado gourmand'),
      P('Sauvage', 'Dior', 'Masculino', 100, 480, 799, 4, 'Aromático fougère'),
      P('Good Girl', 'Carolina Herrera', 'Feminino', 80, 390, 649, 1, 'Oriental floral'),
      P('Malbec', 'O Boticário', 'Masculino', 100, 110, 199.9, 10, 'Amadeirado'),
      P('Egeo Dolce', 'O Boticário', 'Feminino', 90, 80, 154.9, 8, 'Gourmand'),
      P('Kaiak', 'Natura', 'Unissex', 100, 85, 159.9, 2, 'Aquático'),
    ];
    const C = (nome, telefone, nascMes, pref) => ({ id: uid(), nome, telefone, email: '', nascimento: `1990-${nascMes}-15`, preferencias: pref, criadoEm: daysAgo(90) });
    const mes = today().slice(5, 7);
    const clis = [C('Mariana Souza', '(11) 98888-1111', mes, 'Florais e doces'), C('Carlos Lima', '(11) 97777-2222', '03', 'Amadeirados'), C('Juliana Alves', '(21) 96666-3333', '08', 'Frescos e cítricos')];
    db.produtos.push(...prods); db.clientes.push(...clis);
    const mk = (ci, items, diasAtras, status, pagoTudo, forma = 'Pix') => {
      const p = { id: uid(), numero: db.seq++, clienteId: clis[ci].id, data: daysAgo(diasAtras), status, entrega: status === 'aberto' ? daysAgo(-2) : '', itens: items.map(([pi, q]) => ({ tipo: 'produto', refId: prods[pi].id, nome: produtoNome(prods[pi]), qtd: q, preco: prods[pi].preco })), desconto: 0, frete: 0, obs: '', pagamentos: [] };
      if (pagoTudo) p.pagamentos.push({ id: uid(), valor: total(p), forma, data: p.data });
      syncStock(null, p); db.pedidos.push(p);
    };
    mk(0, [[0, 1]], 0, 'concluido', true);
    mk(1, [[1, 1], [3, 1]], 2, 'concluido', true, 'Cartão de crédito');
    mk(2, [[4, 2]], 4, 'aberto', false);
    mk(0, [[2, 1]], 12, 'concluido', true, 'Dinheiro');
    mk(1, [[5, 1]], 1, 'orcamento', false);
    const s = db.servicos[0]; const lp = db.pedidos[db.pedidos.length - 3];
    lp.itens.push({ tipo: 'servico', refId: s.id, nome: s.nome, qtd: 1, preco: s.preco });
    lp.pagamentos.push({ id: uid(), valor: 100, forma: 'Pix', data: lp.data });
    db.lancamentos.push({ id: uid(), tipo: 'despesa', descricao: 'Compra de perfumes - fornecedor', valor: 1500, data: daysAgo(5), categoria: 'Compra de mercadoria' });
    db.lancamentos.push({ id: uid(), tipo: 'despesa', descricao: 'Anúncios Instagram', valor: 120, data: daysAgo(3), categoria: 'Marketing' });
    db.eventos.push({ id: uid(), titulo: 'Chegada de mercadoria', data: daysAgo(-1), hora: '10:00', clienteId: '', obs: 'Fornecedor SP' });
    save(); toast('Dados de exemplo carregados'); render();
  }

  /* =========================================================
     ROTEADOR
     ========================================================= */
  const MAIN_TABS = ['dashboard', 'pedidos', 'agenda', 'financas'];
  function parseRoute() {
    const h = location.hash.replace(/^#\/?/, '');
    const [path, qs] = h.split('?');
    const parts = path.split('/').filter(Boolean);
    return { name: parts[0] || 'pedidos', id: parts[1], query: Object.fromEntries(new URLSearchParams(qs || '')) };
  }
  function resolve(r) {
    switch (r.name) {
      case 'dashboard': return viewDashboard();
      case 'pedidos': return viewPedidos();
      case 'pedido': return viewPedido(r.id);
      case 'pedido-editar': return viewPedidoForm(r.id || 'novo', r.query);
      case 'clientes': return viewClientes();
      case 'cliente': return viewCliente(r.id);
      case 'cliente-editar': return viewClienteForm(r.id || 'novo');
      case 'produtos': return viewProdutos();
      case 'produto-editar': return viewProdutoForm(r.id || 'novo');
      case 'servicos': return viewServicos();
      case 'servico-editar': return viewServicoForm(r.id || 'novo');
      case 'agenda': return viewAgenda();
      case 'financas': return viewFinancas();
      case 'relatorios': return viewRelatorios();
      case 'relatorio': return viewRelatorio(r.id);
      case 'config': return viewConfig();
      case 'ajuda': return viewAjuda();
      default: return notFound();
    }
  }
  let lastRoute = '';
  function render() {
    const r = parseRoute();
    if (r.name !== 'pedido-editar') draft = null;
    const v = resolve(r);
    const routeKey = location.hash;
    // título e botões do topo
    $('#title').textContent = v.title;
    $('#topbar').classList.toggle('left-title', !!v.leftTitle);
    const left = $('#btnLeft');
    if (v.back) {
      left.innerHTML = I.back; left.className = 'icon-btn'; left.setAttribute('aria-label', 'Voltar');
      left.onclick = () => { location.hash = v.back; };
    } else {
      left.innerHTML = I.menu; left.className = 'icon-btn menu'; left.setAttribute('aria-label', 'Menu');
      left.onclick = openDrawer;
    }
    $('#actions').innerHTML = (v.actions || []).map((a) => a.href
      ? `<a class="icon-btn" href="${a.href}" aria-label="${a.label}" title="${a.label}">${I[a.icon]}</a>`
      : `<button class="icon-btn" id="${a.id}" aria-label="${a.label}" title="${a.label}">${I[a.icon]}</button>`).join('');
    // navegação
    const isMain = MAIN_TABS.includes(r.name);
    document.body.classList.toggle('hide-nav', !isMain);
    $('#view').classList.toggle('no-nav', !isMain);
    $$('#bottomnav a').forEach((a) => a.classList.toggle('active', a.dataset.tab === r.name));
    renderDrawer(r.name === 'relatorio' ? 'relatorios' : r.name);
    $('#view').innerHTML = v.html;
    if (v.after) v.after();
    if (routeKey !== lastRoute) window.scrollTo(0, 0);
    lastRoute = routeKey;
    document.title = `${v.title} · Ana Perfumes`;
  }

  window.addEventListener('hashchange', () => { closeModal(); render(); });
  load();
  if (!location.hash) history.replaceState(null, '', '#/pedidos');
  render();
})();
