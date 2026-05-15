/* ============================================
   DATOS DE LAS ZONAS (Coordenadas exactas y datos reales)
   ============================================ */
const ZONAS_DATA = {
    cartagena: {
        nombre: "Cartagena",
        tipo: "Área urbana",
        coords: { lat: 10.3997, lng: -75.5144, zoom: 13 }, // Centro histórico
        descripcion: `La expansión urbana desmedida ha consumido manglares históricos en la zona de El Pozón y la Ciénaga de la Virgen. La ciudad ha perdido el <strong>17% de su cobertura forestal</strong> desde el año 2000.`,
        stats: { perdida: "3,100 ha", turismo: "4.8M", riesgo: "ALTO", co2: "1.0 Mt" },
        highlights: [
            { icon: "building-2", text: "Desarrollo hotelero en zonas de manglar" },
            { icon: "users", text: "Turismo masivo (+17% anual)" },
            { icon: "waves", text: "Erosión costera acelerada" }
        ],
        factores: [
            { tipo: "tourism", icono: "plane", titulo: "Turismo Internacional", valor: "+22%", desc: "734,901 visitantes internacionales en 2024." },
            { tipo: "hotel", icono: "hotel", titulo: "Desarrollo Hotelero", valor: "4 nuevos", desc: "Proyectos en zonas de riesgo ambiental." },
            { tipo: "erosion", icono: "waves", titulo: "Erosión Costera", valor: "55% costa", desc: "Afectación en zonas periurbanas." },
            { tipo: "urban", icono: "circle-help", titulo: "Urbanización Informal", valor: "Sin control", desc: "Asentamientos en bordes de manglar." }
        ],
        chartData: {
            labels: ['2010', '2012', '2014', '2016', '2018', '2020', '2022', '2024'],
            cobertura: [100, 97, 94, 91, 88, 85, 82, 80], // Verde
            perdida: [0, 3, 6, 9, 12, 15, 18, 20],       // Roja
            ganancia: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5]   // Azul
        },
        sparkline: [100, 97, 94, 91, 88, 85, 82, 80]
    },
    
    'tierra-bomba': {
        nombre: "Tierra Bomba",
        tipo: "Isla costera",
        coords: { lat: 10.4300, lng: -75.5700, zoom: 14 }, // Centro de la isla (ajustado)
        descripcion: `La isla enfrenta una crisis ambiental sin precedentes debido a la construcción de megaproyectos hoteleros como el Four Seasons. Ha perdido más del <strong>25% de su cobertura vegetal</strong>.`,
        stats: { perdida: "450 ha", turismo: "Alto", riesgo: "CRÍTICO", co2: "0.3 Mt" },
        highlights: [
            { icon: "triangle-alert", text: "+100 viviendas destruidas por erosión" },
            { icon: "anchor", text: "Destrucción de manglares para hoteles" },
            { icon: "ship", text: "Presión turística en aumento" }
        ],
        factores: [
            { tipo: "tourism", icono: "plane", titulo: "Boom Turístico", valor: "+30%", desc: "Crecimiento acelerado del turismo de lujo." },
            { tipo: "hotel", icono: "hotel", titulo: "Megaproyectos", valor: "2024-2026", desc: "Four Seasons y Hilton impactando la costa." },
            { tipo: "erosion", icono: "waves", titulo: "Erosión Severa", valor: "Crítico", desc: "Pérdida drástica de línea de costa." },
            { tipo: "urban", icono: "tree-deciduous", titulo: "Deforestación", valor: "25%", desc: "Pérdida acelerada de cobertura nativa." }
        ],
        chartData: {
            labels: ['2010', '2012', '2014', '2016', '2018', '2020', '2022', '2024'],
            cobertura: [100, 96, 92, 88, 84, 80, 77, 75],
            perdida: [0, 4, 8, 12, 16, 20, 23, 25],
            ganancia: [0, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.5]
        },
        sparkline: [100, 96, 92, 88, 84, 80, 77, 75]
    },
    
    boquilla: {
        nombre: "La Boquilla",
        tipo: "Corregimiento manglar",
        coords: { lat: 10.4650, lng: -75.5300, zoom: 14 }, // Corregimiento específico (ajustado)
        descripcion: `Representa un caso de <strong>resistencia comunitaria</strong>. A pesar de la presión turística, la comunidad ha logrado conservar gran parte del manglar gracias a prácticas de pesca sostenible, aunque la erosión avanza.`,
        stats: { perdida: "120 ha", turismo: "Medio", riesgo: "MEDIO", co2: "0.08 Mt" },
        highlights: [
            { icon: "users", text: "Resistencia comunitaria ancestral" },
            { icon: "fish", text: "Pesca artesanal sostenible" },
            { icon: "waves", text: "Erosión moderada pero constante" }
        ],
        factores: [
            { tipo: "tourism", icono: "plane", titulo: "Turismo Moderado", valor: "+12%", desc: "Crecimiento del turismo comunitario." },
            { tipo: "hotel", icono: "hotel", titulo: "Bajo Desarrollo", valor: "Mínimo", desc: "Poca construcción hotelera en la zona." },
            { tipo: "erosion", icono: "waves", titulo: "Erosión Costera", valor: "Medio", desc: "Riesgo moderado por nivel del mar." },
            { tipo: "urban", icono: "tree-deciduous", titulo: "Conservación", valor: "95% manglar", desc: "Alta conservación por la comunidad." }
        ],
        chartData: {
            labels: ['2010', '2012', '2014', '2016', '2018', '2020', '2022', '2024'],
            cobertura: [100, 99, 98, 97, 97, 96, 96, 95],
            perdida: [0, 1, 2, 3, 3, 4, 4, 5],
            ganancia: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5]
        },
        sparkline: [100, 99, 98, 97, 97, 96, 96, 95]
    },
    
    baru: {
        nombre: "Barú / Playas Blancas",
        tipo: "Zona costera conservada",
        coords: { lat: 10.2400, lng: -75.6900, zoom: 13 }, // Punta de Barú (ajustado)
        descripcion: `Playa Blanca sufre de <strong>contaminación y construcción ilegal</strong>. Más de 200 establecimientos operan sin permisos, vertiendo aguas residuales a las lagunas y manglares.`,
        stats: { perdida: "200 ha", turismo: "Muy Alto", riesgo: "ALTO", co2: "0.15 Mt" },
        highlights: [
            { icon: "circle-x", text: "+200 establecimientos ilegales" },
            { icon: "droplet", text: "Contaminación severa de lagunas" },
            { icon: "fish", text: "Destrucción de corales" }
        ],
        factores: [
            { tipo: "tourism", icono: "plane", titulo: "Turismo Masivo", valor: "+30%", desc: "Miles de visitantes diarios sin control." },
            { tipo: "hotel", icono: "hotel", titulo: "Construcción Ilegal", valor: "200+", desc: "Locales sin permisos en zona de manglar." },
            { tipo: "erosion", icono: "waves", titulo: "Contaminación", valor: "Alta", desc: "Vertidos directos sin tratamiento." },
            { tipo: "urban", icono: "tree-deciduous", titulo: "Deforestación", valor: "12%", desc: "Pérdida de vegetación costera." }
        ],
        chartData: {
            labels: ['2010', '2012', '2014', '2016', '2018', '2020', '2022', '2024'],
            cobertura: [100, 98, 96, 94, 92, 91, 89, 88],
            perdida: [0, 2, 4, 6, 8, 9, 11, 12],
            ganancia: [0, 0.3, 0.6, 0.9, 1.2, 1.5, 1.8, 2]
        },
        sparkline: [100, 98, 96, 94, 92, 91, 89, 88]
    }
};

/* ============================================
   VARIABLES GLOBALES
   ============================================ */
let map;
let mainChart;
let comparisonCharts = {};
let currentZone = 'cartagena';
let isDataLoaded = false;

/* ============================================
   INICIALIZACIÓN
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar iconos
    if (typeof lucide !== 'undefined') lucide.createIcons();
    
    initMap();
    initMainChart();
    
    // Cargar la primera zona por defecto después de la gráfica
    setTimeout(() => {
        updateMainChart('cartagena', '2024');
    }, 100);
    
    initEventListeners();
    initScrollObserver();
});

/* ============================================
   MAPA (Leaflet)
   ============================================ */
function initMap() {
    // Mapa centrado en la Bahía de Cartagena por defecto
    map = L.map('map', {
        zoomControl: true
    }).setView([10.40, -75.55], 12);
    
    // Capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(map);
    
    // Agregar capas de deforestación simuladas
    addDeforestationLayers();
    
    // Agregar marcadores de las zonas
    addZoneMarkers();
}

function addDeforestationLayers() {
    // Cartagena - zona de deforestación
    L.circleMarker([10.3997, -75.5144], {
        radius: 25,
        fillColor: '#E63946',
        color: '#B91C1C',
        weight: 2,
        opacity: 0.8,
        fillOpacity: 0.4
    }).addTo(map).bindPopup('Cartagena: Zona de deforestación');
    
    // Tierra Bomba - zona crítica
    L.circleMarker([10.4300, -75.5700], {
        radius: 30,
        fillColor: '#E63946',
        color: '#B91C1C',
        weight: 2,
        opacity: 0.8,
        fillOpacity: 0.5
    }).addTo(map).bindPopup('Tierra Bomba: Zona crítica');
    
    // La Boquilla - zona de manglares
    L.circleMarker([10.4650, -75.5300], {
        radius: 20,
        fillColor: '#2A9D8F',
        color: '#1a6b5e',
        weight: 2,
        opacity: 0.8,
        fillOpacity: 0.4
    }).addTo(map).bindPopup('La Boquilla: Manglar conservado');
    
    // Barú - zona de presión
    L.circleMarker([10.2400, -75.6900], {
        radius: 22,
        fillColor: '#F4A261',
        color: '#d17528',
        weight: 2,
        opacity: 0.8,
        fillOpacity: 0.4
    }).addTo(map).bindPopup('Barú: Zona de presión turística');
}

function addZoneMarkers() {
    const zones = ['cartagena', 'tierra-bomba', 'boquilla', 'baru'];
    
    zones.forEach(key => {
        const zone = ZONAS_DATA[key];
        
        // Crear marcador principal
        const marker = L.marker([zone.coords.lat, zone.coords.lng], {
            title: zone.nombre
        }).addTo(map);
        
        // Popup con información
        const popupContent = `<strong>${zone.nombre}</strong><br><small>${zone.tipo}</small>`;
        marker.bindPopup(popupContent);
        
        // Evento click para seleccionar zona
        marker.on('click', () => {
            document.querySelector(`[data-zone="${key}"]`).click();
        });
    });
}

function flyToZone(zoneKey) {
    const zone = ZONAS_DATA[zoneKey];
    map.flyTo([zone.coords.lat, zone.coords.lng], zone.coords.zoom, {
        duration: 1.5,
        easeLinearity: 0.25
    });
}

/* ============================================
   GRÁFICA PRINCIPAL (Chart.js) - 3 LÍNEAS
   ============================================ */
function initMainChart() {
    const ctx = document.getElementById('forestChart').getContext('2d');
    
    // Crear gradientes para el área bajo la curva
    const gradientGreen = ctx.createLinearGradient(0, 0, 0, 400);
    gradientGreen.addColorStop(0, 'rgba(45, 90, 61, 0.3)');
    gradientGreen.addColorStop(1, 'rgba(45, 90, 61, 0.0)');
    
    mainChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                {
                    label: 'Cobertura Total (%)',
                    data: [],
                    borderColor: '#2D5A3D',
                    backgroundColor: gradientGreen,
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 4,
                    pointHoverRadius: 7,
                    pointBackgroundColor: '#2D5A3D',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                },
                {
                    label: 'Pérdida Acumulada (%)',
                    data: [],
                    borderColor: '#E63946',
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    borderDash: [5, 5],
                    fill: false,
                    tension: 0.4,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    pointBackgroundColor: '#E63946',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                },
                {
                    label: 'Ganancia Forestal (%)',
                    data: [],
                    borderColor: '#4A90E2',
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    fill: false,
                    tension: 0.4,
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    pointBackgroundColor: '#4A90E2',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(33, 37, 41, 0.9)',
                    titleFont: { family: 'Montserrat', size: 13 },
                    bodyFont: { family: 'Montserrat', size: 12 },
                    cornerRadius: 8,
                    padding: 12,
                    boxPadding: 10
                }
            },
            scales: {
                y: {
                    min: 0, max: 105,
                    ticks: { stepSize: 10 },
                    grid: { color: 'rgba(0,0,0,0.05)', drawBorder: false }
                },
                x: {
                    grid: { display: false, drawBorder: false }
                }
            },
            animation: { duration: 800 }
        }
    });
}

function updateMainChart(zoneKey, year) {
    const data = ZONAS_DATA[zoneKey].chartData;
    const yearIndex = data.labels.indexOf(year.toString());
    
    // Filtrar datos hasta el año seleccionado
    const labels = data.labels.slice(0, yearIndex + 1);
    const cobertura = data.cobertura.slice(0, yearIndex + 1);
    const perdida = data.perdida.slice(0, yearIndex + 1);
    const ganancia = data.ganancia.slice(0, yearIndex + 1);
    
    mainChart.data.labels = labels;
    mainChart.data.datasets[0].data = cobertura;
    mainChart.data.datasets[1].data = perdida;
    mainChart.data.datasets[2].data = ganancia;
    
    mainChart.update();
}

/* ============================================
   LÓGICA DE CARGA Y TRANSICIÓN
   ============================================ */
function loadZone(zoneKey) {
    const data = ZONAS_DATA[zoneKey];
    currentZone = zoneKey;
    
    // Si es la primera vez, mostrar la sección de datos
    if (!isDataLoaded) {
        const placeholder = document.getElementById('placeholderState');
        const dataSection = document.getElementById('dataSection');
        
        placeholder.style.opacity = '0';
        setTimeout(() => {
            placeholder.style.display = 'none';
            dataSection.classList.remove('hidden');
            dataSection.style.opacity = '0';
            dataSection.style.transform = 'translateY(20px)';
            
            // Forzar reflow para animación
            void dataSection.offsetWidth;
            
            dataSection.style.transition = 'all 0.6s ease';
            dataSection.style.opacity = '1';
            dataSection.style.transform = 'translateY(0)';
            
            isDataLoaded = true;
            
            // Actualizar iconos del nuevo contenido
            if (typeof lucide !== 'undefined') lucide.createIcons();
        }, 300);
    }
    
    // Actualizar UI del Sidebar
    document.querySelectorAll('.zone-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.zone === zoneKey);
    });
    
    // Actualizar Contenido del Storytelling
    document.getElementById('story-title').innerHTML = `${data.nombre}: ${data.tipo === 'Área urbana' ? 'La presión urbana' : data.tipo === 'Isla costera' ? 'Turismo vs Naturaleza' : 'Resistencia y Conservación'}`;
    document.getElementById('story-badge').textContent = data.tipo;
    document.getElementById('story-desc').innerHTML = data.descripcion;
    
    // Actualizar Stats
    document.getElementById('stat-loss').textContent = data.stats.perdida.split(' ')[0];
    document.querySelector('#stat-loss').parentElement.querySelector('.stat-unit').textContent = data.stats.perdida.split(' ')[1] || '';
    document.getElementById('stat-tourism').textContent = data.stats.turismo;
    document.getElementById('stat-risk').textContent = data.stats.riesgo;
    document.getElementById('stat-co2').textContent = data.stats.co2.split(' ')[0];
    
    // Actualizar Highlights
    const highlightsContainer = document.getElementById('story-highlights');
    highlightsContainer.innerHTML = data.highlights.map(h => `
        <div class="highlight-box fade-in">
            <i data-lucide="${h.icon}"></i>
            <span>${h.text}</span>
        </div>
    `).join('');
    
    // Actualizar Factores
    const factorsContainer = document.getElementById('factors-grid');
    factorsContainer.innerHTML = data.factores.map(f => `
        <div class="factor-card ${f.tipo} fade-in">
            <div class="factor-header">
                <i data-lucide="${f.icono}"></i>
                <h4>${f.titulo}</h4>
            </div>
            <div class="factor-value">${f.valor}</div>
            <p class="factor-desc">${f.desc}</p>
        </div>
    `).join('');
    
    // Actualizar Gráfica
    updateMainChart(zoneKey, document.getElementById('year-slider').value);
    
    // Mover Mapa
    flyToZone(zoneKey);
    
    // Re-inicializar iconos
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

/* ============================================
   EVENT LISTENERS
   ============================================ */
function initEventListeners() {
    // Botones de zonas
    document.querySelectorAll('.zone-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            loadZone(btn.dataset.zone);
        });
    });
    
    // Slider de Año
    document.getElementById('year-slider').addEventListener('input', (e) => {
        const year = e.target.value;
        document.getElementById('year-display').textContent = year;
        updateMainChart(currentZone, year);
    });
}

/* ============================================
   OBSERVER DE SCROLL (Para la sección de comparación)
   ============================================ */
function initScrollObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                initComparisonCharts(); // Inicializar sparklines cuando sean visibles
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const compSection = document.getElementById('comparisonSection');
    if (compSection) observer.observe(compSection);
    
    // Tabs de la sección de comparación
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
        });
    });
}

/* ============================================
   SPARKLINES (Mini gráficas de la sección comparativa)
   ============================================ */
function initComparisonCharts() {
    const zones = ['cartagena', 'tierra-bomba', 'boquilla', 'baru'];
    
    zones.forEach(key => {
        const canvas = document.getElementById(`spark-${key.replace('-', '-')}`);
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const data = ZONAS_DATA[key].sparkline;
        const labels = ['2010', '2012', '2014', '2016', '2018', '2020', '2022', '2024'];
        
        // Color según la pérdida
        let color = '#2D5A3D';
        if (key === 'tierra-bomba') color = '#E63946'; // Rojo porque pierde más
        else if (key === 'cartagena') color = '#E63946';
        
        if (comparisonCharts[key]) return; // Evitar recrear si ya existe
        
        comparisonCharts[key] = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    borderColor: color,
                    backgroundColor: color === '#E63946' ? 'rgba(230, 57, 70, 0.1)' : 'rgba(45, 90, 61, 0.1)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false }, tooltip: { enabled: false } },
                scales: { x: { display: false }, y: { display: false } },
                animation: { duration: 1500 }
            }
        });
    });
}

/* ============================================
   GRÁFICA DE BARRAS (Pérdida comparativa)
   ============================================ */
// Inicialización de la gráfica de barras en el tab "Pérdida Forestal"
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const lossCanvas = document.getElementById('lossComparisonChart');
        if (!lossCanvas) return;
        
        const ctx = lossCanvas.getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Tierra Bomba', 'Cartagena', 'Barú', 'La Boquilla'],
                datasets: [{
                    label: '% Pérdida Forestal',
                    data: [25, 17, 12, 5],
                    backgroundColor: [
                        '#B91C1C', // Crítico
                        '#E63946', // Alto
                        '#F4A261', // Medio
                        '#2A9D8F'  // Bajo
                    ],
                    borderRadius: 8,
                    barThickness: 50
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: { beginAtZero: true, max: 30, grid: { display: false } },
                    x: { grid: { display: false } }
                },
                animation: { duration: 1500 }
            }
        });
    }, 1000); // Pequeño delay para asegurar que el tab se renderice
});