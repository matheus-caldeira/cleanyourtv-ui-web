"use strict";

const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];

const APPS = [
  ["Netflix", "com.netflix.ninja"],
  ["YouTube", "com.google.android.youtube.tv"],
  ["Prime Video", "com.amazon.amazonvideo.livingroom"],
  ["Disney+", "com.disney.disneyplus"],
  ["Max", "com.wbd.stream"],
  ["Apple TV", "com.apple.atve.androidtv.appletv"],
  ["Globoplay", "com.globo.globotv"],
  ["Paramount+", "com.cbs.ott"],
  ["Hulu", "com.hulu.livingroomplus"],
  ["Peacock", "com.peacocktv.peacockandroid"],
  ["Crunchyroll", "com.crunchyroll.crunchyroid"],
  ["Spotify", "com.spotify.tv.android"],
  ["Plex", "com.plexapp.android"],
  ["Kodi", "org.xbmc.kodi"],
  ["YouTube Kids", "com.google.android.youtube.tvkids"],
  ["Twitch", "tv.twitch.android.app"],
];

const SPECIAL_ACTIONS = [
  ["", "act.own"],
  ["home", "act.home"],
  ["tmdb:explore", "act.explore"],
  ["tmdb:watchlist", "act.watchlist"],
  ["live", "act.live"],
  ["settings", "act.settings"],
];

const REGIONS = ["US", "BR", "GB", "CA", "MX", "AR", "CO", "CL", "PE", "UY", "PT", "ES", "FR", "DE", "IT", "NL", "BE",
  "CH", "AT", "IE", "SE", "NO", "DK", "FI", "PL", "CZ", "RO", "HU", "GR", "TR", "UA", "RU", "IL", "AE", "SA", "EG", "ZA",
  "IN", "ID", "PH", "TH", "VN", "MY", "SG", "TW", "HK", "JP", "KR", "AU", "NZ"];

const REFERENCE_ROWS = [
  ["tmdb_key", "string", "TMDB API key or read access token. The picks, Explore and the TMDB sign-in need it. Can also be typed on the TV under TMDB account.", "Chave da API ou token de leitura do TMDB. Os destaques, o Explorar e o login do TMDB precisam dela. Também pode ser digitada na TV, em Conta TMDB."],
  ["tmdb_region", "\"auto\" | \"BR\" | \"US\" …", "Which titles are on which streaming app. auto is the TV's country.", "Quais títulos estão em qual app de streaming. auto é o país da TV."],
  ["language", "auto | pt | en | es | de | ru | fr | tr", "auto follows the TV.", "auto segue a TV."],
  ["shelf", "[packages]", "The apps on the home screen, in order.", "Os apps da tela inicial, em ordem."],
  ["dock_apps", "[packages]", "CleanYourTV's name for shelf, read when shelf is absent, so a theme's config.json works.", "O nome do CleanYourTV para shelf, lido quando shelf não existe: o config.json de um tema funciona."],
  ["hidden_apps", "[packages]", "Apps never shown.", "Apps que nunca aparecem."],
  ["city", "{ name, latitude, longitude }", "The weather and the sunset that turns the theme dark. Without a city there is no weather.", "O clima e o pôr do sol que escurece o tema. Sem cidade não há clima."],
  ["theme", "auto | light | dark", "auto is dark from sunset to sunrise.", "auto fica escuro do pôr ao nascer do sol."],
  ["temperature", "auto | C | F", "", ""],
  ["clock", "auto | 24h | 12h", "", ""],
  ["screensaver", "photos | aurora", "", ""],
  ["weather", "true | false", "The weather widget.", "O widget do clima."],
  ["show_crypto", "true | false", "The quotes widget (Binance).", "O widget de cotações (Binance)."],
  ["currency", "USD | BRL | EUR | TRY …", "The quotes' currency.", "A moeda das cotações."],
  ["buttons", "{ \"s395\": action, \"k4062\": action }", "A remote button by scancode (s) or keycode (k).", "Um botão do controle por scancode (s) ou keycode (k)."],
  ["app_keys", "[\"scan:395:com.app\", \"4062:com.app\"]", "CleanYourTV's form of buttons; long presses (hold:) are skipped.", "A forma do CleanYourTV para buttons; pressionar e segurar (hold:) é ignorado."],
  ["remote", "a remote.json", "Which buttons are the TV's own and which can be changed.", "Quais botões são da TV e quais podem ser trocados."],
  ["providers", "{ \"283\": \"com.app\" }", "A TMDB streaming provider id to the app that opens its titles, or \"off\".", "O id de um provedor do TMDB para o app que abre os títulos dele, ou \"off\"."],
  ["show_all_providers", "true | false", "Explore shows every provider of the region, not only the installed apps'.", "O Explorar mostra todos os provedores da região, não só os dos apps instalados."],
  ["app_tiles", "{ \"com.app\": { logo, color } }", "A tile for an app without a banner: an https:// logo or a pushed PNG, and a #RRGGBB colour.", "Um card para um app sem banner: um logo https:// ou um PNG enviado, e uma cor #RRGGBB."],
];

const PAGE_IN_PORTUGUESE = {
  "nav.features": "Recursos", "nav.install": "Instalar", "nav.configure": "Configurar", "nav.reference": "config.json",
  "hero.kicker": "Android TV · Google TV · código aberto",
  "hero.h1": "Uma tela inicial calma, no estilo da Apple TV, para a sua Android TV.",
  "hero.lede": 'Feita sobre o <a href="https://github.com/Gathin23/cleanyourtv">CleanYourTV</a>, que tira da TV o que veio de fábrica, com o visual do <a href="https://github.com/simbasjungles/free-my-tv">Free My TV</a>. Navegue por filmes e séries com o TMDB, veja onde cada um passa e abra direto no app.',
  "hero.download": "Baixar o APK", "hero.configure": "Montar o seu config.json", "hero.source": "Código no GitHub",
  "hero.alt": "A tela inicial: relógio e clima, destaques dos seus apps de streaming e a prateleira de apps",
  "tag.one": "Um APK para todas as TVs", "tag.android": "Android 9+", "tag.noads": "Sem anúncios, sem telemetria",
  "features.kicker": "O que vem", "features.h2": "Seus apps, os destaques deles e mais nada.",
  "features.lede": "O CleanYourTV tira o que a fábrica colocou na TV. Este fork acrescenta uma tela inicial e o Explorar, um catálogo de filmes e séries dos apps que você tem.",
  "f1.h": "Tela inicial",
  "f1.list": "<li><b>Para você</b>: destaques do TMDB nos seus serviços, com as abas Explorar, Filmes e Séries.</li><li>Uma prateleira com os logos oficiais; segure OK num app para movê-lo ou trocar o card.</li><li>Clima da sua cidade, um tema que escurece no pôr do sol, descanso de tela com fotos ou relógio.</li>",
  "f2.h": "Explorar",
  "f2.list": "<li>Banners, top 10 do dia, catálogos de Filmes, Séries, Infantil e Anime.</li><li>Busca e categorias com um só filtro; páginas de título com elenco, temporadas e trailers.</li><li><b>Assistir em…</b> abre o próprio título na Netflix, Disney+, Prime Video, Max ou Apple TV.</li>",
  "f3.h": "Controle e configuração",
  "f3.list": "<li>Os botões de app do controle abrem qualquer app, uma entrada HDMI, o Explorar ou a sua lista.</li><li>Um <code>config.json</code> por TV: chave do TMDB, cidade, prateleira e botões, enviados pelo ADB.</li><li>Nada de ADB ligado depois, nada de rede além do TMDB, Wikidata e o clima.</li>",
  "g.explore": "Explorar, com o logo do título sobre a imagem.", "g.menu": "O menu lateral: busca, sua lista, catálogos, uma página por serviço.",
  "g.top10": "Top 10 do dia.", "g.filters": "Um só filtro para busca e categorias.", "g.title": "A página do título: onde passa, elenco, temporadas.", "g.anime": "O catálogo de Anime.",
  "install.kicker": "Instalar", "install.h2": "Um APK. Dois jeitos de colocá-lo na TV.",
  "install.lede": "Nada da sua TV vai dentro do APK. Instale e depois passe as configurações desta TV num config.json, ou ajuste tudo na própria TV.",
  "install.prep": '<h3>Antes de tudo: ligue a depuração na TV</h3><p class="dim">Configurações → Preferências do dispositivo → Sobre → aperte OK em <b>Build</b> sete vezes → volte → Opções do desenvolvedor → <b>Depuração USB</b> ligada (e <b>Depuração de rede</b>, se houver). Anote o IP da TV em Rede. Para tirar também o lixo de fábrica, siga antes o <a href="https://github.com/Gathin23/cleanyourtv#quick-start">Quick start do CleanYourTV</a>: a tela inicial funciona com ou sem ele.</p>',
  "apk.pill": "Mais simples", "apk.h": "A partir do APK de release",
  "apk.lede": "Sem JDK, sem Android SDK, sem compilar. Basta o platform-tools do Android (adb).",
  "apk.s1": 'Baixe o <b>CleanYourTV-UI-&lt;versão&gt;.apk</b> na <a href="https://github.com/matheus-caldeira/cleanyourtv-ui/releases/latest">última release</a> e confira com o <code>.sha256</code> dele.',
  "apk.s2": "Instale e torne-o a <b>Home</b>. Aceite “Permitir depuração USB?” na TV da primeira vez. O launcher original da TV continua instalado.",
  "apk.s3": 'Monte o <a href="#configure">config.json</a> desta TV aqui embaixo e envie:',
  "apk.s3b": "Ou pule o arquivo: Ajustes → Ajustes do Início na TV, e Conta TMDB para digitar a chave.",
  "apk.s4": "Opcional: o descanso de tela e os botões de app do controle dentro de qualquer app. A segunda linha substitui outros serviços de acessibilidade: confira antes com <code>settings get secure enabled_accessibility_services</code>.",
  "apk.s4b": "No Android 11 o descanso de tela é o <code>.ScreensaverAlone</code>.",
  "apk.s5": "Desligue a <b>Depuração de rede</b> na TV quando terminar: a porta 5555 não tem criptografia.",
  "clone.pill": "Para quem mexe", "clone.h": "A partir do clone",
  "clone.lede": "Os scripts trazem as proteções do CleanYourTV: conferem o Android antes, iniciam a Home nova antes de mexer na antiga e desfazem a troca se a Home não pegar.",
  "clone.s1": "Clone o repositório e prepare o Python das ferramentas:",
  "clone.s2": 'Salve o <a href="#configure">config.json</a> desta TV na pasta e compile e instale de uma vez:',
  "clone.s2b": "Ou instale o APK de release com as mesmas proteções, sem compilar: acrescente <code>APK=~/Downloads/CleanYourTV-UI-1.1.0.apk</code>.",
  "clone.s3": "Mude as configurações depois, sem reinstalar:",
  "clone.s4": "Para compilar o APK de release você mesmo: <code>RELEASE=1 launcher-ui/build.sh</code>. Um build pessoal (sem <code>RELEASE</code>) também lê o <code>launcher-ui/config.properties</code> como valores iniciais.",
  "install.note": "<b>Vai trocar entre o APK de release e o seu próprio build?</b> Eles são assinados com chaves diferentes: desinstale antes com <code>adb uninstall io.cleanyourtv.ui</code>, o que também apaga os ajustes feitos na TV. Para voltar à tela inicial da TV: <code>adb shell cmd package set-home-activity --user 0 &lt;pacote&gt;/&lt;activity&gt;</code>, ou desfaça tudo com o <code>tools/restore.sh</code> do CleanYourTV.",
  "gen.kicker": "config.json", "gen.h2": "Monte o config.json desta TV.",
  "gen.lede": "Preencha o que quiser; o que ficar vazio mantém o padrão da TV. Tudo fica no seu navegador: nada é enviado, exceto a busca de cidade, que consulta o Open-Meteo.",
  "gen.tmdb": "TMDB", "gen.key": "Chave da API ou token de leitura",
  "gen.keyHint": 'Grátis em <a href="https://www.themoviedb.org/settings/api">themoviedb.org → Configurações → API</a>. Os destaques e o Explorar precisam dela. Guarde este arquivo só para você: ele leva a sua chave.',
  "gen.region": "Região do streaming", "gen.language": "Idioma",
  "gen.city": "Cidade e clima", "gen.find": "Buscar", "gen.cityName": "Nome no card", "gen.lat": "Latitude", "gen.lon": "Longitude",
  "gen.temp": "Temperatura", "gen.weather": "Widget do clima",
  "gen.look": "Visual", "gen.theme": "Tema", "gen.clock": "Relógio", "gen.saver": "Descanso de tela",
  "gen.crypto": "Widget de cotações", "gen.currency": "Moeda",
  "gen.apps": "Apps", "gen.shelfHint": "A prateleira, em ordem. Toque para incluir ou tirar; um pacote por linha abaixo para qualquer outro app.",
  "gen.shelf": "Prateleira (um pacote por linha)", "gen.hidden": "Apps escondidos (um pacote por linha)",
  "gen.remote": "Botões do controle", "gen.model": "O controle da sua TV",
  "gen.modelHint": "Dos arquivos <code>examples/&lt;modelo&gt;/remote.json</code> do repositório. O seu não está lá? Mapeie com <code>tools/tv.py 'getevent -lt'</code> e mande um pull request.",
  "gen.copy": "Copiar", "gen.download": "Baixar", "gen.push": "Enviar", "gen.clone": "Clone", "gen.ip": "O IP da TV",
  "opt.unset": "— padrão da TV —", "opt.auto": "Seguir a TV", "opt.on": "Ligado", "opt.off": "Desligado",
  "opt.sunset": "Escuro após o pôr do sol", "opt.light": "Claro", "opt.dark": "Escuro", "opt.photos": "Fotos dos destaques", "opt.aurora": "Relógio e aurora",
  "ref.kicker": "Referência", "ref.h2": "Todas as chaves do config.json.",
  "ref.lede": "Cada arquivo novo é aplicado uma vez, na próxima vez que a Home abre, como se as escolhas fossem feitas na TV. O que se muda na TV depois vale até o próximo envio. Um valor que o app não aceita é ignorado, nunca adivinhado.",
  "ref.key": "Chave", "ref.value": "Valor", "ref.notes": "Notas",
  "ref.actions": 'A ação de um botão é um pacote, <code>input:&lt;id da entrada&gt;</code>, <code>live</code>, <code>settings</code>, <code>home</code>, <code>tmdb:explore</code>, <code>tmdb:watchlist</code>, ou <code>""</code> para o que o botão fazia antes. A referência completa está em <a href="https://github.com/matheus-caldeira/cleanyourtv-ui/blob/main/launcher-ui/README.md#configjson">launcher-ui/README.md</a>.',
  "foot.credits": 'Feito sobre o <a href="https://github.com/Gathin23/cleanyourtv">CleanYourTV</a>, do Gathin, e o <a href="https://github.com/simbasjungles/free-my-tv">Free My TV</a>, ambos MIT. O CleanYourTV UI também é MIT: <a href="https://github.com/matheus-caldeira/cleanyourtv-ui">matheus-caldeira/cleanyourtv-ui</a>.',
  "foot.tmdb": "Este produto usa a API do TMDB, sem endosso ou certificação do TMDB. Ids dos serviços do Wikidata. Clima por Open-Meteo.com (CC BY 4.0). Netflix, YouTube, Prime Video, Disney+, Apple TV, Max e os outros nomes pertencem aos donos; este projeto não tem vínculo com nenhum deles.",
  "foot.contact": 'Dúvidas e problemas: <a href="https://github.com/matheus-caldeira/cleanyourtv-ui/issues">issues</a>.',
};

const SCRIPT_TEXT = {
  en: {
    "act.own": "The TV's own", "act.home": "Home screen", "act.explore": "Explore", "act.watchlist": "My watchlist (TMDB)",
    "act.live": "Live TV", "act.settings": "TV settings", "act.default": "Remote's default", "act.custom": "Another app or input…",
    "remote.none": "— No remote.json (keep the TV's) —", "remote.custom": "Package or input:… id",
    "region.auto": "The TV's country (auto)", "region.unset": "— TV's default —",
    "city.searching": "Searching…", "city.none": "No city with that name.", "city.error": "Couldn't search now.",
    "copy": "Copy", "copied": "Copied", "warn.pkg": "Not a package name, left out: ", "warn.key": "The TMDB key has characters a key never has.",
    "warn.latlon": "Latitude and longitude go together.",
    "cmd.apk": "# With adb (Android platform-tools), in the folder where config.json was saved:",
    "cmd.clone": "# In your clone of cleanyourtv-ui, with config.json saved there:",
    "cmd.empty": "# Fill in something on the left first.",
  },
  pt: {
    "act.own": "Padrão da TV", "act.home": "Tela inicial", "act.explore": "Explorar", "act.watchlist": "Minha lista (TMDB)",
    "act.live": "TV ao vivo", "act.settings": "Configurações da TV", "act.default": "Padrão do controle", "act.custom": "Outro app ou entrada…",
    "remote.none": "— Sem remote.json (manter o da TV) —", "remote.custom": "Pacote ou id input:…",
    "region.auto": "O país da TV (auto)", "region.unset": "— padrão da TV —",
    "city.searching": "Procurando…", "city.none": "Nenhuma cidade com esse nome.", "city.error": "Não deu para buscar agora.",
    "copy": "Copiar", "copied": "Copiado", "warn.pkg": "Não é um nome de pacote, ficou de fora: ", "warn.key": "A chave do TMDB tem caracteres que uma chave nunca tem.",
    "warn.latlon": "Latitude e longitude vão juntas.",
    "cmd.apk": "# Com o adb (platform-tools do Android), na pasta onde o config.json foi salvo:",
    "cmd.clone": "# No seu clone do cleanyourtv-ui, com o config.json salvo lá:",
    "cmd.empty": "# Preencha algo à esquerda primeiro.",
  },
};

const DEFAULT_IP = "192.168.1.50";
const PACKAGE_NAME = /^[A-Za-z][A-Za-z0-9_]*(\.[A-Za-z][A-Za-z0-9_]*)+$/;
const TMDB_KEY_SHAPE = /^[A-Za-z0-9._-]{20,1024}$/;
const FORM_FIELDS_KEPT = ["tmdb_region", "language", "city_name", "latitude", "longitude", "temperature", "weather", "theme",
  "clock", "screensaver", "show_crypto", "currency", "shelf", "hidden_apps", "remote", "ip"];

let lang = "en";
let json = "{}";

const t = (key) => SCRIPT_TEXT[lang][key] ?? SCRIPT_TEXT.en[key] ?? key;
const field = (id) => $("#" + id);
const value = (id) => field(id).value.trim();
const listOf = (id) => field(id).value.split(/[\n,]+/).map((s) => s.trim()).filter(Boolean);
const tvIp = () => value("ip") || DEFAULT_IP;
const remotes = () => window.REMOTES || {};

const browserStorage = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { return; } },
};

function translateElements(attribute, read, write, dictionaryKey) {
  for (const el of $$(`[${attribute}]`)) {
    const englishKey = "en" + dictionaryKey;
    if (el.dataset[englishKey] === undefined) el.dataset[englishKey] = read(el);
    const portuguese = PAGE_IN_PORTUGUESE[el.getAttribute(attribute)];
    write(el, lang === "pt" && portuguese ? portuguese : el.dataset[englishKey]);
  }
}

function applyLanguage(next) {
  lang = next === "pt" ? "pt" : "en";
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  translateElements("data-i18n", (el) => el.textContent, (el, s) => { el.textContent = s; }, "Text");
  translateElements("data-i18n-html", (el) => el.innerHTML, (el, s) => { el.innerHTML = s; }, "Html");
  translateElements("data-i18n-alt", (el) => el.alt, (el, s) => { el.alt = s; }, "Alt");
  for (const b of $$(".lang button")) b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  for (const b of $$(".code .copy")) b.textContent = t("copy");
  browserStorage.set("cyt-ui-lang", lang);
  fillRegions();
  fillRemotes();
  renderButtons();
  renderReference();
  update();
}

function fillRegions() {
  const select = field("tmdb_region");
  const kept = select.value;
  const names = typeof Intl.DisplayNames === "function" ? new Intl.DisplayNames([lang === "pt" ? "pt-BR" : "en"], { type: "region" }) : null;
  const regionName = (code) => (names ? names.of(code) : code);
  select.innerHTML = "";
  select.append(new Option(t("region.unset"), ""), new Option(t("region.auto"), "auto"));
  for (const code of [...REGIONS].sort((a, b) => regionName(a).localeCompare(regionName(b)))) {
    select.append(new Option(`${regionName(code)} (${code})`, code));
  }
  select.value = kept;
}

function fillRemotes() {
  const select = field("remote");
  const kept = select.value;
  select.innerHTML = "";
  select.append(new Option(t("remote.none"), ""));
  for (const [folder, remote] of Object.entries(remotes())) select.append(new Option(`${remote.remote || folder} · ${folder}`, folder));
  select.value = kept;
}

function buttonId(button) {
  if (button.scan !== undefined) return "s" + button.scan;
  if (button.key !== undefined) return "k" + button.key;
  return null;
}

function actionLabel(action) {
  const special = SPECIAL_ACTIONS.find(([v]) => v === action);
  if (special) return t(special[1]);
  const app = APPS.find(([, pkg]) => pkg === action);
  return app ? app[0] : action;
}

function buttonChoices(box) {
  return Object.fromEntries($$("select[data-button]", box).map((s) => {
    const custom = $(`input[data-button="${s.dataset.button}"]`, box);
    return [s.dataset.button, [s.value, custom ? custom.value : ""]];
  }));
}

function buttonRow(button, id, previous) {
  const row = document.createElement("div");
  row.className = "btn-row";
  const name = document.createElement("div");
  name.className = "name";
  name.textContent = button.name;
  const detail = document.createElement("small");
  detail.textContent = `${id} · ${button.label || ""}`;
  name.append(detail);

  const select = document.createElement("select");
  select.dataset.button = id;
  select.setAttribute("aria-label", button.name);
  select.append(new Option(`${t("act.default")}: ${actionLabel(button.default || "")}`, "__default"));
  for (const [v, k] of SPECIAL_ACTIONS) select.append(new Option(t(k), v));
  for (const [label, pkg] of APPS) select.append(new Option(label, pkg));
  select.append(new Option(t("act.custom"), "__custom"));

  const custom = document.createElement("input");
  custom.type = "text";
  custom.dataset.button = id;
  custom.placeholder = t("remote.custom");
  custom.spellcheck = false;
  select.value = previous ? previous[0] : "__default";
  custom.value = previous ? previous[1] : "";
  custom.hidden = select.value !== "__custom";
  select.addEventListener("change", () => { custom.hidden = select.value !== "__custom"; update(); });
  custom.addEventListener("input", update);

  const pick = document.createElement("div");
  pick.append(select, custom);
  row.append(name, pick);
  return row;
}

function renderButtons() {
  const box = field("buttons");
  const remote = remotes()[value("remote")];
  const previous = buttonChoices(box);
  box.innerHTML = "";
  field("remote_note").textContent = remote ? remote.device || "" : "";
  if (!remote) return;
  for (const button of remote.buttons || []) {
    const id = buttonId(button);
    if (button.kind === "configurable" && id) box.append(buttonRow(button, id, previous[id]));
  }
}

function renderShelfChips() {
  const box = field("shelf_chips");
  const onShelf = new Set(listOf("shelf"));
  box.innerHTML = "";
  for (const [label, pkg] of APPS) {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.textContent = label;
    chip.title = pkg;
    chip.setAttribute("aria-pressed", String(onShelf.has(pkg)));
    chip.addEventListener("click", () => {
      const shelf = listOf("shelf");
      const at = shelf.indexOf(pkg);
      if (at >= 0) shelf.splice(at, 1); else shelf.push(pkg);
      field("shelf").value = shelf.join("\n");
      renderShelfChips();
      update();
    });
    box.append(chip);
  }
}

function renderReference() {
  const body = field("ref_rows");
  body.innerHTML = "";
  for (const [key, shape, english, portuguese] of REFERENCE_ROWS) {
    const row = document.createElement("tr");
    for (const [text, isCode] of [[key, true], [shape, true], [lang === "pt" ? portuguese : english, false]]) {
      const cell = document.createElement("td");
      if (isCode) {
        const code = document.createElement("code");
        code.textContent = text;
        cell.append(code);
      } else {
        cell.textContent = text;
      }
      row.append(cell);
    }
    body.append(row);
  }
}

function chosenButtons() {
  const buttons = {};
  for (const select of $$("#buttons select[data-button]")) {
    if (select.value === "__default") continue;
    const isCustom = select.value === "__custom";
    const action = isCustom ? $(`#buttons input[data-button="${select.dataset.button}"]`).value.trim() : select.value;
    if (isCustom && !action) continue;
    buttons[select.dataset.button] = action;
  }
  return buttons;
}

function buildConfig() {
  const config = {};
  const warnings = [];
  const flag = (id) => (value(id) === "" ? undefined : value(id) === "true");

  const key = value("tmdb_key");
  if (key) {
    config.tmdb_key = key;
    if (!TMDB_KEY_SHAPE.test(key)) warnings.push(t("warn.key"));
  }
  if (value("tmdb_region")) config.tmdb_region = value("tmdb_region");
  if (value("language")) config.language = value("language");

  const latitude = value("latitude"), longitude = value("longitude");
  if (latitude && longitude) config.city = { name: value("city_name"), latitude: Number(latitude), longitude: Number(longitude) };
  else if (latitude || longitude) warnings.push(t("warn.latlon"));

  for (const id of ["temperature", "theme", "clock", "screensaver", "currency"]) if (value(id)) config[id] = value(id);
  for (const id of ["weather", "show_crypto"]) if (flag(id) !== undefined) config[id] = flag(id);

  for (const id of ["shelf", "hidden_apps"]) {
    const all = listOf(id);
    for (const bad of all.filter((p) => !PACKAGE_NAME.test(p))) warnings.push(t("warn.pkg") + bad);
    const good = all.filter((p) => PACKAGE_NAME.test(p));
    if (good.length) config[id] = good;
  }

  const remote = remotes()[value("remote")];
  if (remote) {
    config.remote = remote;
    const buttons = chosenButtons();
    if (Object.keys(buttons).length) config.buttons = buttons;
  }
  return { config, warnings };
}

function pushCommands(isEmpty) {
  if (isEmpty) return t("cmd.empty");
  const route = $(".seg button[aria-pressed='true']").dataset.route;
  if (route === "clone") return `${t("cmd.clone")}\nTV_HOST=${tvIp()} launcher-ui/config.sh config.json`;
  return [
    t("cmd.apk"),
    `adb connect ${tvIp()}`,
    "adb push config.json /data/local/tmp/cyt-ui-config.json",
    "adb shell 'content write --uri content://io.cleanyourtv.ui.config/config.json < /data/local/tmp/cyt-ui-config.json && rm /data/local/tmp/cyt-ui-config.json'",
    "adb shell input keyevent KEYCODE_HOME",
  ].join("\n");
}

function update() {
  const { config, warnings } = buildConfig();
  json = JSON.stringify(config, null, 2);
  field("json").textContent = json;
  field("warnings").textContent = warnings.join(" ");
  field("commands").textContent = pushCommands(Object.keys(config).length === 0);
  for (const span of $$("[data-ip]")) span.textContent = tvIp();
  saveForm();
}

function saveForm() {
  const kept = Object.fromEntries(FORM_FIELDS_KEPT.map((id) => [id, field(id).value]));
  kept.buttons = buttonChoices(field("buttons"));
  browserStorage.set("cyt-ui-form", JSON.stringify(kept));
}

function restoreForm() {
  let kept = null;
  try { kept = JSON.parse(browserStorage.get("cyt-ui-form") || "null"); } catch { kept = null; }
  if (!kept) return;
  for (const id of FORM_FIELDS_KEPT) if (typeof kept[id] === "string") field(id).value = kept[id];
  renderButtons();
  for (const [id, [choice, custom]] of Object.entries(kept.buttons || {})) {
    const select = $(`#buttons select[data-button="${id}"]`);
    const input = $(`#buttons input[data-button="${id}"]`);
    if (!select) continue;
    select.value = choice;
    input.value = custom || "";
    input.hidden = select.value !== "__custom";
  }
}

function cityChoice(city, box) {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "chip";
  b.textContent = [city.name, city.admin1, city.country].filter(Boolean).join(", ");
  b.addEventListener("click", () => {
    field("city_name").value = city.name;
    field("latitude").value = Number(city.latitude.toFixed(4));
    field("longitude").value = Number(city.longitude.toFixed(4));
    box.innerHTML = "";
    update();
  });
  return b;
}

async function findCity() {
  const query = value("city_q");
  const box = field("cities");
  if (!query) return;
  box.textContent = t("city.searching");
  try {
    const url = `https://geocoding-api.open-meteo.com/v1/search?count=5&format=json&language=${lang}&name=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(String(response.status));
    const found = (await response.json()).results || [];
    box.innerHTML = "";
    if (!found.length) box.textContent = t("city.none");
    for (const city of found) box.append(cityChoice(city, box));
  } catch {
    box.textContent = t("city.error");
  }
}

async function copyText(text, button) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    document.body.append(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }
  const label = button.textContent;
  button.textContent = t("copied");
  setTimeout(() => { button.textContent = label; }, 1400);
}

function addCopyButtons() {
  for (const block of $$(".code")) {
    const pre = $("pre", block);
    const b = document.createElement("button");
    b.type = "button";
    b.className = "copy";
    b.textContent = t("copy");
    b.addEventListener("click", () => copyText(pre.textContent, b));
    block.append(b);
  }
}

function downloadConfig() {
  const url = URL.createObjectURL(new Blob([json + "\n"], { type: "application/json" }));
  const link = Object.assign(document.createElement("a"), { href: url, download: "config.json" });
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function chooseRoute(chosen) {
  for (const b of $$(".seg button")) b.setAttribute("aria-pressed", String(b === chosen));
  update();
}

document.addEventListener("DOMContentLoaded", () => {
  addCopyButtons();
  fillRegions();
  fillRemotes();
  restoreForm();
  field("gen").addEventListener("input", (e) => {
    if (e.target.id === "shelf") renderShelfChips();
    if (e.target.id !== "remote") update();
  });
  field("ip").addEventListener("input", update);
  field("remote").addEventListener("change", () => { renderButtons(); update(); });
  field("city_find").addEventListener("click", findCity);
  field("city_q").addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); findCity(); } });
  field("copy_json").addEventListener("click", (e) => copyText(json + "\n", e.currentTarget));
  field("download").addEventListener("click", downloadConfig);
  for (const b of $$(".seg button")) b.addEventListener("click", () => chooseRoute(b));
  for (const b of $$(".lang button")) b.addEventListener("click", () => applyLanguage(b.dataset.lang));
  renderShelfChips();
  const savedLanguage = browserStorage.get("cyt-ui-lang");
  applyLanguage(savedLanguage || ((navigator.language || "").toLowerCase().startsWith("pt") ? "pt" : "en"));
});
