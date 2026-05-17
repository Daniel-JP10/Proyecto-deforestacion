/* === DATA === */
const ZONAS_DATA = {
    cartagena: {
        nombre: "Cartagena", tipo: "Área urbana",
        coords: { lat: 10.3997, lng: -75.5144, zoom: 13 },
        bounds: [[10.35, -75.56], [10.44, -75.47]],
        descripcion: `La expansión urbana desmedida ha consumido manglares históricos en zonas como El Pozón y la Ciénaga de la Virgen. El distrito perdió una <strong>estimada de ~2.500 hectáreas de cobertura vegetal periurbana</strong> desde el año 2000. Fuente: EPA Cartagena / GFW estimado.`,
        erosion: "~1.5 m",
        stats: { perdida: "~2.500 ha", turismo: "~3.5M", riesgo: "ALTO" },
        highlights: [
            { icon: "building-2", text: "Desarrollo hotelero en zonas de manglar" },
            { icon: "users", text: "Turismo masivo (+17% anual)" },
            { icon: "waves", text: "Erosión costera acelerada" }
        ],
        factores: [
            { tipo: "tourism", icono: "plane", titulo: "Turismo Internacional", valor: "+22% internacional", desc: "~850.000 visitantes internacionales y ~2.67M nacionales movilizados vía aérea en 2024. Fuente: Aerocivil." },
            { tipo: "hotel", icono: "hotel", titulo: "Desarrollo Hotelero", valor: "4 nuevos", desc: "Construcción en zonas de manglar. EPA Cartagena planea restaurar 40 ha de ecosistema manglar 2024-2027." },
            { tipo: "erosion", icono: "waves", titulo: "Erosión Costera", valor: "55% costa", desc: "Afectación en zonas periurbanas." },
            { tipo: "urban", icono: "circle-help", titulo: "Urbanización Informal", valor: "Sin control", desc: "Asentamientos en bordes de manglar." }
        ],
        chartData: {
            labels: ['2010', '2012', '2014', '2016', '2018', '2020', '2022', '2024'],
            cobertura: [100, 97, 94, 91, 88, 85, 82, 80],
            perdida: [0, 3, 6, 9, 12, 15, 18, 20],
            ganancia: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5]
        },
        sparkline: [100, 97, 94, 91, 88, 85, 82, 80],
        badgeType: "type-urban", badgeText: "Urbana",
        rank: 4, lossPercent: 17, lossHa: "~2.500", lossRate: "221 ha/año",
        tourismLabel: "4.8M", tourismDetail: "+17% vs 2023",
        riskClass: "high",
        pressureScores: { turismo: 9, hotelero: 8, erosion: 7, urbanizacion: 9 },
        progressBars: [
            { label: "Desarrollo hotelero", value: 85, type: "danger" },
            { label: "Presión turística", value: 92, type: "danger" },
            { label: "Conservación", value: 35, type: "conservation" }
        ]
    },
    'tierra-bomba': {
        nombre: "Tierra Bomba", tipo: "Isla costera",
        coords: { lat: 10.3500, lng: -75.5800, zoom: 13 },
        bounds: [[10.31, -75.62], [10.40, -75.54]],
        descripcion: `La isla enfrenta una crisis ambiental crítica. La erosión costera ha destruido más de <strong>250 viviendas, el puesto de salud, muelles e infraestructura eléctrica</strong>, según testimonio de líderes comunitarios a la agencia AFP (2024). El desarrollo de proyectos hoteleros de lujo en la costa agrava la destrucción de manglar.`,
        erosion: ">5 m",
        stats: { perdida: "~400 ha estimadas", turismo: "Alto", riesgo: "CRÍTICO" },
        highlights: [
            { icon: "triangle-alert", text: "+250 viviendas destruidas por erosión costera (AFP, 2024)" },
            { icon: "anchor", text: "Destrucción de manglares para hoteles" },
            { icon: "ship", text: "Presión turística en aumento" }
        ],
        factores: [
            { tipo: "tourism", icono: "plane", titulo: "Boom Turístico", valor: "+30%", desc: "Crecimiento acelerado del turismo de lujo." },
            { tipo: "hotel", icono: "hotel", titulo: "Proyectos hoteleros de lujo", valor: "2024-2026", desc: "Desarrollo de hoteles de alto impacto en zonas costeras de la isla, con denuncias de relleno de áreas de manglar." },
            { tipo: "erosion", icono: "waves", titulo: "Erosión Severa", valor: "Crítico", desc: "Pérdida drástica de línea de costa." },
            { tipo: "urban", icono: "tree-deciduous", titulo: "Deforestación", valor: "25%", desc: "Pérdida acelerada de cobertura nativa." }
        ],
        chartData: {
            labels: ['2010', '2012', '2014', '2016', '2018', '2020', '2022', '2024'],
            cobertura: [100, 96, 92, 88, 84, 80, 77, 75],
            perdida: [0, 4, 8, 12, 16, 20, 23, 25],
            ganancia: [0, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.5]
        },
        sparkline: [100, 96, 92, 88, 84, 80, 77, 75],
        badgeType: "type-island", badgeText: "Isla",
        rank: 1, featured: true, lossPercent: 25, lossHa: "~400", lossRate: "32 ha/año",
        tourismLabel: "Alto", tourismDetail: "+22% anual",
        riskClass: "critical",
        pressureScores: { turismo: 8, hotelero: 10, erosion: 10, urbanizacion: 7 },
        progressBars: [
            { label: "Desarrollo hotelero", value: 95, type: "danger" },
            { label: "Erosión costera", value: 98, type: "danger" },
            { label: "Conservación", value: 22, type: "conservation" }
        ]
    },
    boquilla: {
        nombre: "La Boquilla / Manzanillo", tipo: "Corredor costero norte",
        coords: { lat: 10.478, lng: -75.497, zoom: 13 },
        bounds: [[10.43, -75.54], [10.535, -75.455]],
        polygon: [
            [10.432, -75.530],
            [10.440, -75.520],
            [10.450, -75.510],
            [10.460, -75.500],
            [10.470, -75.492],
            [10.480, -75.483],
            [10.490, -75.476],
            [10.500, -75.472],
            [10.510, -75.467],
            [10.520, -75.462],
            [10.528, -75.458],
            [10.530, -75.463],
            [10.527, -75.472],
            [10.520, -75.479],
            [10.510, -75.484],
            [10.500, -75.488],
            [10.490, -75.493],
            [10.480, -75.499],
            [10.470, -75.506],
            [10.460, -75.514],
            [10.450, -75.521],
            [10.440, -75.526],
            [10.432, -75.530]
        ],
        descripcion: `El corredor costero La Boquilla – Manzanillo del Mar es hogar de comunidades afrodescendientes que han habitado estos manglares por más de 200 años. Frente a la presión urbanística y turística, la ANI sembró <strong>más de 40.000 plantas de mangle en 34 hectáreas</strong> como compensación ambiental (2023). Aun así, el corredor enfrenta pérdidas acumuladas. Fuente: Mintransporte / ANI.`,
        erosion: "~6 m",
        stats: { perdida: "~280 ha", turismo: "Medio", riesgo: "MEDIO" },
        highlights: [
            { icon: "users", text: "Corredor La Boquilla–Manzanillo: manglar bajo presión urbana" },
            { icon: "fish", text: "Pesca artesanal sostenible" },
            { icon: "waves", text: "ANI sembró 40.000 mangles en 34 ha — compensación 2023" }
        ],
        factores: [
            { tipo: "tourism", icono: "plane", titulo: "Turismo Moderado", valor: "+12%", desc: "Crecimiento del turismo comunitario." },
            { tipo: "hotel", icono: "hotel", titulo: "Bajo Desarrollo", valor: "Mínimo", desc: "Poca construcción hotelera en la zona." },
            { tipo: "erosion", icono: "waves", titulo: "Erosión Costera", valor: "Medio", desc: "Riesgo moderado por nivel del mar." },
            { tipo: "urban", icono: "tree-deciduous", titulo: "Conservación", valor: "Presión activa", desc: "Corregimiento administrativo incluye Manzanillo del Mar. Presión de urbanizaciones de lujo desde el aeropuerto hacia el norte, documentada por EPA Cartagena." }
        ],
        chartData: {
            labels: ['2010', '2012', '2014', '2016', '2018', '2020', '2022', '2024'],
            cobertura: [100, 98, 96, 93, 91, 89, 87, 85],
            perdida: [0, 2, 4, 7, 9, 11, 13, 15],
            ganancia: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5]
        },
        sparkline: [100, 98, 96, 93, 91, 89, 87, 85],
        badgeType: "type-manglar", badgeText: "Manglar",
        rank: 3, lossPercent: 15, lossHa: "~280", lossRate: "~20 ha/año",
        tourismLabel: "Medio", tourismDetail: "+12% anual",
        riskClass: "medium",
        pressureScores: { turismo: 6, hotelero: 4, erosion: 8, urbanizacion: 6 },
        progressBars: [
            { label: "Presión urbana", value: 45, type: "danger" },
            { label: "Turismo comunitario", value: 52, type: "danger" },
            { label: "Conservación", value: 55, type: "conservation" }
        ]
    },
    baru: {
        nombre: "Barú / Playas Blancas", tipo: "Zona costera",
        coords: { lat: 10.1800, lng: -75.6200, zoom: 13 },
        bounds: [[10.14, -75.67], [10.23, -75.57]],
        descripcion: `Playa Blanca sufre de <strong>invasión de 2.4 km de playa concesionada</strong> por establecimientos sin permiso ambiental, que vierten aguas residuales directamente a las 7 lagunas costeras. CARDIQUE confirmó contaminación por coliformes en febrero 2025 (Auto 0096). La tala ilegal de mangles para construir hostales es documentada por Semana y CORPLAYA.`,
        erosion: "~0.8 m",
        stats: { perdida: "200 ha", turismo: "Muy Alto", riesgo: "ALTO" },
        highlights: [
            { icon: "circle-x", text: "2.4 km de playa invadidos ilegalmente (CORPLAYA)" },
            { icon: "droplet", text: "7 lagunas con coliformes (CARDIQUE, Auto 0096, feb 2025)" },
            { icon: "fish", text: "Destrucción de corales" }
        ],
        factores: [
            { tipo: "tourism", icono: "plane", titulo: "Turismo Masivo", valor: "+30%", desc: "Miles de visitantes diarios sin control." },
            { tipo: "hotel", icono: "hotel", titulo: "Construcción Ilegal", valor: "2.4 km invadidos", desc: "2.4 km de los 800m concesionados a CORPLAYA están invadidos por establecimientos sin autorización. Fuente: El Universal, 2024." },
            { tipo: "erosion", icono: "waves", titulo: "Contaminación", valor: "Alta", desc: "CARDIQUE activó Auto 0096 (13 feb 2025) por coliformes en Ciénaga de Portonaito. Residuos plásticos, combustibles y aguas servidas. Fuente: El Tiempo, 2025." },
            { tipo: "urban", icono: "tree-deciduous", titulo: "Deforestación", valor: "12%", desc: "Pérdida de vegetación costera." }
        ],
        chartData: {
            labels: ['2010', '2012', '2014', '2016', '2018', '2020', '2022', '2024'],
            cobertura: [100, 98, 96, 94, 92, 91, 89, 88],
            perdida: [0, 2, 4, 6, 8, 9, 11, 12],
            ganancia: [0, 0.3, 0.6, 0.9, 1.2, 1.5, 1.8, 2]
        },
        sparkline: [100, 98, 96, 94, 92, 91, 89, 88],
        badgeType: "type-coastal", badgeText: "Costera",
        rank: 2, lossPercent: 12, lossHa: "200", lossRate: "14 ha/año",
        tourismLabel: "Muy Alto", tourismDetail: "+30% anual",
        riskClass: "high",
        pressureScores: { turismo: 10, hotelero: 9, erosion: 8, urbanizacion: 6 },
        progressBars: [
            { label: "Turismo masivo", value: 96, type: "danger" },
            { label: "Construcción ilegal", value: 88, type: "danger" },
            { label: "Conservación", value: 48, type: "conservation" }
        ]
    }
};

/* === GLOBALS === */
let map, mainChart, comparisonCharts = {}, currentZone = 'cartagena';
const BOUNDS = L.latLngBounds([[10.10, -75.72], [10.52, -75.42]]);

/* === INIT === */
document.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') lucide.createIcons();
    createParticles();
    initMap();
    initMainChart();
    loadZone('cartagena');
    initEventListeners();
    initScrollObserver();
    initAnimationObserver();
});

/* === PARTICLES === */
function createParticles() {
    const c = document.getElementById('heroParticles');
    if (!c) return;
    for (let i = 0; i < 15; i++) {
        const p = document.createElement('div');
        p.className = 'leaf-particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDuration = (8 + Math.random() * 12) + 's';
        p.style.animationDelay = (Math.random() * 10) + 's';
        p.style.width = (8 + Math.random() * 10) + 'px';
        p.style.height = p.style.width;
        c.appendChild(p);
    }
}

/* === MAP === */
function initMap() {
    map = L.map('map', {
        zoomControl: true,
        maxBounds: BOUNDS,
        maxBoundsViscosity: 1.0,
        minZoom: 11,
        maxZoom: 16
    }).fitBounds(BOUNDS);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap',
        bounds: BOUNDS
    }).addTo(map);

    // Zone rectangles
    Object.keys(ZONAS_DATA).forEach(key => {
        const z = ZONAS_DATA[key];
        if (!z.bounds) return;
        const color = key === 'tierra-bomba' ? '#E63946' : key === 'boquilla' ? '#2A9D8F' : key === 'baru' ? '#F4A261' : '#2D5A3D';
        L.rectangle(z.bounds, {
            color: color, weight: 2, opacity: 0.7,
            fillColor: color, fillOpacity: 0.12,
            dashArray: key === currentZone ? '' : '6,4'
        }).addTo(map).bindPopup(`<strong>${z.nombre}</strong><br><small>${z.tipo}</small>`);

        L.marker([z.coords.lat, z.coords.lng], { title: z.nombre }).addTo(map)
            .bindPopup(`<strong>${z.nombre}</strong><br><small>${z.tipo}</small>`)
            .on('click', () => { document.querySelector(`[data-zone="${key}"]`).click(); });
    });

    setTimeout(() => map.invalidateSize(), 300);
}

function flyToZone(key) {
    const z = ZONAS_DATA[key];
    if (z.bounds) map.flyToBounds(z.bounds, { duration: 1.2, padding: [20, 20] });
    else map.flyTo([z.coords.lat, z.coords.lng], z.coords.zoom, { duration: 1.2 });
    setTimeout(() => map.invalidateSize(), 500);
}

/* === MAIN CHART === */
function initMainChart() {
    const ctx = document.getElementById('forestChart').getContext('2d');
    const grad = ctx.createLinearGradient(0, 0, 0, 350);
    grad.addColorStop(0, 'rgba(45,90,61,0.25)');
    grad.addColorStop(1, 'rgba(45,90,61,0)');

    mainChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [], datasets: [
                { label: 'Índice de cobertura (base 2010 = 100)', data: [], borderColor: '#2D5A3D', backgroundColor: grad, borderWidth: 3, fill: true, tension: 0.4, pointRadius: 4, pointHoverRadius: 7, pointBackgroundColor: '#2D5A3D', pointBorderColor: '#fff', pointBorderWidth: 2 },
                { label: 'Pérdida relativa acumulada', data: [], borderColor: '#E63946', backgroundColor: 'transparent', borderWidth: 3, borderDash: [5, 5], fill: false, tension: 0.4, pointRadius: 4, pointHoverRadius: 6, pointBackgroundColor: '#E63946', pointBorderColor: '#fff', pointBorderWidth: 2 },
                { label: 'Recuperación relativa', data: [], borderColor: '#4A90E2', backgroundColor: 'transparent', borderWidth: 3, fill: false, tension: 0.4, pointRadius: 4, pointHoverRadius: 6, pointBackgroundColor: '#4A90E2', pointBorderColor: '#fff', pointBorderWidth: 2 }
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: { legend: { display: false }, tooltip: { backgroundColor: 'rgba(26,60,39,0.9)', titleFont: { family: 'Montserrat', size: 13 }, bodyFont: { family: 'Montserrat', size: 12 }, cornerRadius: 10, padding: 12 } },
            scales: { y: { min: 0, max: 105, title: { display: true, text: 'Índice relativo (2010 = 100)', font: { size: 11 }, color: '#6B7A6A' }, ticks: { stepSize: 10 }, grid: { color: 'rgba(0,0,0,0.04)', drawBorder: false } }, x: { grid: { display: false, drawBorder: false } } },
            animation: { duration: 800 }
        }
    });
}

function updateMainChart(key, year) {
    const d = ZONAS_DATA[key].chartData;
    const i = d.labels.indexOf(year.toString());
    const idx = i >= 0 ? i : d.labels.length - 1;
    mainChart.data.labels = d.labels.slice(0, idx + 1);
    mainChart.data.datasets[0].data = d.cobertura.slice(0, idx + 1);
    mainChart.data.datasets[1].data = d.perdida.slice(0, idx + 1);
    mainChart.data.datasets[2].data = d.ganancia.slice(0, idx + 1);
    mainChart.update();
}

/* === LOAD ZONE === */
function loadZone(key) {
    const d = ZONAS_DATA[key];
    currentZone = key;

    document.querySelectorAll('.zone-btn').forEach(b => b.classList.toggle('active', b.dataset.zone === key));

    document.getElementById('story-title').innerHTML = `${d.nombre}: ${d.tipo === 'Área urbana' ? 'La presión urbana' : d.tipo === 'Isla costera' ? 'Turismo vs Naturaleza' : 'Resistencia y Conservación'}`;
    document.getElementById('story-badge').textContent = d.tipo;
    document.getElementById('story-desc').innerHTML = d.descripcion;

    document.getElementById('stat-loss').textContent = d.stats.perdida.split(' ')[0];
    document.querySelector('#stat-loss').parentElement.querySelector('.stat-unit').textContent = d.stats.perdida.split(' ')[1] || '';
    document.getElementById('stat-tourism').textContent = d.stats.turismo;
    document.getElementById('stat-risk').textContent = d.stats.riesgo;
    document.getElementById('stat-co2').textContent = d.erosion;
    document.querySelector('#stat-co2').parentElement.querySelector('.stat-unit').textContent = 'm/año';

    const hl = document.getElementById('story-highlights');
    hl.innerHTML = d.highlights.map(h => `<div class="highlight-box fade-in"><i data-lucide="${h.icon}"></i><span>${h.text}</span></div>`).join('');

    const fg = document.getElementById('factors-grid');
    fg.innerHTML = d.factores.map(f => `<div class="factor-card ${f.tipo} fade-in"><div class="factor-header"><i data-lucide="${f.icono}"></i><h4>${f.titulo}</h4></div><div class="factor-value">${f.valor}</div><p class="factor-desc">${f.desc}</p></div>`).join('');

    updateMainChart(key, document.getElementById('year-slider').value);
    flyToZone(key);
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

/* === EVENTS === */
function initEventListeners() {
    document.querySelectorAll('.zone-btn').forEach(b => b.addEventListener('click', () => loadZone(b.dataset.zone)));
    document.querySelectorAll('.zone-chip').forEach(b => b.addEventListener('click', () => {
        loadZone(b.dataset.zone);
        document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' });
    }));
    document.getElementById('year-slider').addEventListener('input', e => {
        document.getElementById('year-display').textContent = e.target.value;
        updateMainChart(currentZone, e.target.value);
    });
}

/* === SCROLL OBSERVER === */
function initScrollObserver() {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                buildComparisonCards();
                initComparisonCharts();
                buildLossStats();
                buildPressureView();
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.05 });
    const cs = document.getElementById('comparisonSection');
    if (cs) obs.observe(cs);

    document.querySelectorAll('.tab-btn').forEach(b => b.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(x => x.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        document.getElementById(`tab-${b.dataset.tab}`).classList.add('active');
    }));
}

/* === ANIMATION OBSERVER === */
function initAnimationObserver() {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const delay = parseInt(e.target.dataset.delay) || 0;
                setTimeout(() => e.target.classList.add('animated'), delay);
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('[data-animate]').forEach(el => obs.observe(el));
}

/* === BUILD COMPARISON CARDS === */
function buildComparisonCards() {
    const grid = document.getElementById('comparisonGrid');
    if (!grid || grid.children.length > 0) return;
    const order = ['tierra-bomba', 'cartagena', 'baru', 'boquilla'];
    const riskLabels = { critical: 'CRÍTICO', high: 'ALTO', medium: 'MEDIO', low: 'BAJO' };

    order.forEach((key, i) => {
        const z = ZONAS_DATA[key];
        const card = document.createElement('div');
        card.className = `compare-card${z.featured ? ' featured' : ''}`;
        card.dataset.zone = key;

        let html = '';
        if (z.featured) html += `<div class="featured-badge"><i data-lucide="triangle-alert"></i> Mayor impacto</div>`;
        html += `<div class="card-header"><div><h3>${z.nombre}</h3><span class="badge ${z.badgeType}">${z.badgeText}</span></div><div class="ranking-badge rank-${z.rank}">${z.rank}°</div></div>`;
        html += `<div class="mini-chart-container"><canvas id="spark-${key}"></canvas></div>`;
        html += `<div class="metrics-grid">`;
        html += `<div class="metric-item"><div class="metric-label">Pérdida total</div><div class="metric-value loss${z.lossPercent >= 25 ? ' critical' : z.lossPercent <= 5 ? ' low' : ''}">-${z.lossPercent}%</div><div class="metric-detail">${z.lossHa} ha</div></div>`;
        html += `<div class="metric-item"><div class="metric-label">Turismo</div><div class="metric-value tourism">${z.tourismLabel}</div><div class="metric-detail">${z.tourismDetail}</div></div>`;
        html += `<div class="metric-item"><div class="metric-label">Riesgo erosión</div><div class="metric-value risk ${z.riskClass}">${riskLabels[z.riskClass] || z.riskClass}</div></div>`;
        html += `</div>`;
        html += `<div class="progress-bars">`;
        z.progressBars.forEach(p => {
            html += `<div class="progress-item"><div class="progress-label"><span>${p.label}</span><span class="progress-value">${p.value}%</span></div><div class="progress-bar"><div class="progress-fill${p.type === 'conservation' ? ' conservation' : ''}" style="--progress:${p.value}%"></div></div></div>`;
        });
        html += `</div>`;
        card.innerHTML = html;
        grid.appendChild(card);

        setTimeout(() => card.classList.add('animate-in'), 150 * (i + 1));
    });
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

/* === SPARKLINES === */
function initComparisonCharts() {
    ['cartagena', 'tierra-bomba', 'boquilla', 'baru'].forEach(key => {
        const canvas = document.getElementById(`spark-${key}`);
        if (!canvas || comparisonCharts[key]) return;
        const ctx = canvas.getContext('2d');
        const data = ZONAS_DATA[key].sparkline;
        let color = key === 'tierra-bomba' || key === 'cartagena' ? '#E63946' : '#2D5A3D';
        const grad = ctx.createLinearGradient(0, 0, 0, 110);
        grad.addColorStop(0, color === '#E63946' ? 'rgba(230,57,70,0.15)' : 'rgba(45,90,61,0.15)');
        grad.addColorStop(1, 'rgba(255,255,255,0)');

        comparisonCharts[key] = new Chart(ctx, {
            type: 'line',
            data: { labels: ['2010', '2012', '2014', '2016', '2018', '2020', '2022', '2024'], datasets: [{ data, borderColor: color, backgroundColor: grad, fill: true, tension: 0.4, pointRadius: 0, borderWidth: 2 }] },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { enabled: false } }, scales: { x: { display: false }, y: { display: false } }, animation: { duration: 1500 } }
        });
    });
}

/* === LOSS STATS === */
function buildLossStats() {
    const grid = document.getElementById('lossStatsGrid');
    if (!grid || grid.children.length > 0) return;
    const order = [['tierra-bomba', 'critical'], ['cartagena', ''], ['baru', ''], ['boquilla', 'low']];
    order.forEach(([key, cls]) => {
        const z = ZONAS_DATA[key];
        grid.innerHTML += `<div class="loss-stat"><div class="loss-stat-header"><span class="loss-stat-zone">${z.nombre}</span><span class="loss-stat-value ${cls}">-${z.lossPercent}%</span></div><div class="loss-stat-bar"><div class="loss-stat-fill ${cls}" style="width:${z.lossPercent}%"></div></div><div class="loss-stat-details"><span>${z.lossHa} hectáreas perdidas</span><span>Tasa: ${z.lossRate}</span></div></div>`;
    });

    // Bar chart
    setTimeout(() => {
        const c = document.getElementById('lossComparisonChart');
        if (!c) return;
        new Chart(c.getContext('2d'), {
            type: 'bar',
            data: { labels: ['Tierra Bomba', 'Cartagena', 'Barú', 'La Boquilla'], datasets: [{ label: '% Pérdida', data: [25, 17, 12, 5], backgroundColor: ['#B91C1C', '#E63946', '#F4A261', '#2A9D8F'], borderRadius: 10, barThickness: 50 }] },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, max: 30, grid: { display: false } }, x: { grid: { display: false } } }, animation: { duration: 1500 } }
        });
    }, 300);
}

/* === PRESSURE VIEW === */
function buildPressureView() {
    // Radar chart
    setTimeout(() => {
        const c = document.getElementById('pressureRadarChart');
        if (!c) return;
        const FACTOR_DESCRIPTIONS = {
            'Turismo': 'Intensidad del flujo turístico y su impacto\ndirecto sobre ecosistemas costeros',
            'Desarrollo Hotelero': 'Presencia de construcción hotelera\nen zonas de manglar o playa',
            'Erosión Costera': 'Tasa de retroceso de línea de costa\n(fuente: INVEMAR / INGEOMINAS)',
            'Urbanización': 'Expansión de asentamientos formales\ne informales sobre ecosistemas'
        };
        new Chart(c.getContext('2d'), {
            type: 'radar',
            data: {
                labels: ['Turismo', 'Desarrollo Hotelero', 'Erosión Costera', 'Urbanización'],
                datasets: [
                    { label: 'Cartagena', data: [9, 8, 7, 9], borderColor: '#2D5A3D', backgroundColor: 'rgba(45,90,61,0.1)', borderWidth: 2, pointBackgroundColor: '#2D5A3D' },
                    { label: 'Tierra Bomba', data: [8, 10, 10, 7], borderColor: '#E63946', backgroundColor: 'rgba(230,57,70,0.1)', borderWidth: 2, pointBackgroundColor: '#E63946' },
                    { label: 'La Boquilla', data: [6, 4, 8, 6], borderColor: '#2A9D8F', backgroundColor: 'rgba(42,157,143,0.1)', borderWidth: 2, pointBackgroundColor: '#2A9D8F' },
                    { label: 'Barú', data: [10, 9, 8, 6], borderColor: '#4A90E2', backgroundColor: 'rgba(74,144,226,0.1)', borderWidth: 2, pointBackgroundColor: '#4A90E2' }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: { r: { beginAtZero: true, max: 10, ticks: { stepSize: 2, font: { size: 11 } }, grid: { color: 'rgba(0,0,0,0.06)' }, pointLabels: { font: { size: 13, weight: '600' } } } },
                plugins: {
                    legend: { position: 'bottom', labels: { padding: 20, usePointStyle: true, font: { size: 12 } } },
                    tooltip: {
                        enabled: true,
                        backgroundColor: 'rgba(26,60,39,0.92)',
                        titleFont: { family: 'Montserrat', size: 13, weight: '600' },
                        bodyFont: { family: 'Montserrat', size: 11 },
                        padding: 12,
                        cornerRadius: 10,
                        callbacks: {
                            title: function (items) {
                                const label = items[0]?.label || '';
                                return label;
                            },
                            afterTitle: function (items) {
                                const label = items[0]?.label || '';
                                return FACTOR_DESCRIPTIONS[label] || '';
                            },
                            label: function (item) {
                                const zoneName = item.dataset.label || '';
                                const value = item.raw;
                                return `  ${zoneName}: ${value}/10`;
                            }
                        }
                    }
                },
                animation: { duration: 1500 }
            }
        });
    }, 400);

    // Pressure cards
    const pd = document.getElementById('pressureDetails');
    if (!pd || pd.children.length > 0) return;
    const zones = [['cartagena', 8.25, 'high'], ['tierra-bomba', 8.75, 'critical'], ['boquilla', 6.0, 'medium'], ['baru', 8.25, 'high']];
    zones.forEach(([key, score, cls]) => {
        const z = ZONAS_DATA[key];
        const scores = z.pressureScores;
        const div = document.createElement('div');
        div.className = 'pressure-card';
        div.setAttribute('data-zone', key);
        div.innerHTML = `
          <h4>${z.nombre}</h4>
          <div class="pressure-score ${cls}">${score}</div>
          <div class="pressure-label">Índice promedio</div>
          <button class="pressure-detail-btn" onclick="togglePressureDetail(this)">
            Ver factores ▾
          </button>
          <div class="pressure-detail-body" style="display:none;margin-top:0.75rem">
            <div class="pressure-factor-row">
              <span>Turismo</span>
              <span class="pf-val">${scores.turismo}/10</span>
              <div class="pf-bar" style="--w:${scores.turismo * 10}%"></div>
            </div>
            <div class="pressure-factor-row">
              <span>Hotelero</span>
              <span class="pf-val">${scores.hotelero}/10</span>
              <div class="pf-bar" style="--w:${scores.hotelero * 10}%"></div>
            </div>
            <div class="pressure-factor-row">
              <span>Erosión</span>
              <span class="pf-val">${scores.erosion}/10</span>
              <div class="pf-bar" style="--w:${scores.erosion * 10}%"></div>
            </div>
            <div class="pressure-factor-row">
              <span>Urbaniz.</span>
              <span class="pf-val">${scores.urbanizacion}/10</span>
              <div class="pf-bar" style="--w:${scores.urbanizacion * 10}%"></div>
            </div>
          </div>
        `;
        pd.appendChild(div);
    });
}

function togglePressureDetail(btn) {
    const body = btn.nextElementSibling;
    const isOpen = body.style.display === 'block';
    body.style.display = isOpen ? 'none' : 'block';
    btn.textContent = isOpen ? 'Ver factores ▾' : 'Ocultar ▴';
}