
const products = [
    { id: 1, name: "Royal Frame Wall Mirror", category: "drawing", material: "wooden", image: "images for main page/Royal Frame Wall Mirror 2.png", desc: "An opulent, hand-carved wooden frame mirror perfect for grand living spaces.", size: "48 x 60 inches", shape: "Rectangular", finish: "Mahogany Polish", usage: "Grand Living Mirrors", features: "Hand-carved floral motifs, 5mm Silver Glass." },
    { id: 2, name: "Grand Estate Mirror", category: "drawing", material: "wooden", image: "images for main page/Grand Estate Mirror.webp", desc: "A large statement piece featuring intricate woodwork and a deep frame.", size: "60 x 80 inches", shape: "Rectangular", finish: "Antique Walnut", usage: "Grand Living Mirrors", features: "Heavy-duty hanging hardware included." },
    { id: 3, name: "Full Length Dressing Mirror", category: "dressing", material: "wooden", image: "images for main page/full length dressing mirror.jpg", desc: "Elegant full-length floor mirror with a wooden easel stand.", size: "20 x 65 inches", shape: "Rectangular", finish: "Natural Oak", usage: "Dressing & Vanity Mirrors", features: "Lean or wall mount option, non-slip feet." },
    { id: 4, name: "Oval Bedroom Mirror", category: "bedroom", material: "wooden", image: "images for main page/oval bedroom mirror.jpg", desc: "Timeless oval wooden frame mirror for bedside or wall.", size: "24 x 36 inches", shape: "Oval", finish: "Distressed White", usage: "Luxury Bedroom Mirrors", features: "Keyhole hanger, lightweight MDF frame." },
    { id: 5, name: "Rustic Barn Door Mirror", category: "drawing", material: "wooden", image: "images for main page/Rustic Barn Door Mirror.jpg", desc: "Reclaimed wood frame with sliding barn door accents.", size: "36 x 60 inches", shape: "Rectangular", finish: "Reclaimed Timber", usage: "Grand Living Mirrors", features: "Hand-hewn texture, iron hardware." },
    { id: 6, name: "Minimalist Geo Mirror", category: "drawing", material: "acrylic", image: "images for main page/Minimalist Geo Mirror.jpg", desc: "Modern geometric design with a seamless acrylic edge.", size: "40 x 40 inches", shape: "Octagonal", finish: "Clear Acrylic", usage: "Grand Living Mirrors", features: "Shatterproof, easy clean surface." },
    { id: 7, name: "Tri-Fold Vanity Mirror", category: "dressing", material: "acrylic", image: "images for main page/Tri-Fold Vanity Mirror 3.jfif", desc: "Compact tri-fold design with side magnification panels.", size: "12 x 14 inches (closed)", shape: "Rectangular", finish: "Rose Gold Acrylic", usage: "Dressing & Vanity Mirrors", features: "1x/2x/3x magnification, stand included." },
    { id: 8, name: "Round Beveled Mirror", category: "bathroom", material: "acrylic", image: "images for main page/Round Beveled Mirror.webp", desc: "Frameless circular mirror with elegant beveled edges.", size: "24 inches Diameter", shape: "Round", finish: "Polished Edge", usage: "Signature Bath Mirrors", features: "High-quality float glass, metal clips." },
    { id: 9, name: "Minimal Acrylic Edge Mirror", category: "bedroom", material: "acrylic", image: "images for main page/Minimal Acrylic Edge Mirror.webp", desc: "Contemporary square mirror with clear acrylic edge detail.", size: "36 x 36 inches", shape: "Square", finish: "Transparent", usage: "Luxury Bedroom Mirrors", features: "Seamless joints, high transparency." },
    { id: 10, name: "Floating Rectangular Mirror", category: "bedroom", material: "acrylic", image: "images for main page/Floating Rectangular Mirror.jpg", desc: "Modern floating glass mirror with frosted border.", size: "24 x 48 inches", shape: "Rectangular", finish: "Frosted Acrylic", usage: "Luxury Bedroom Mirrors", features: "Silk-screen printed border, adhesive mount." },
    { id: 11, name: "Art Deco Arch", category: "drawing", material: "metal", image: "images for main page/Art Deco Arch.jpg", desc: "Geometric gold-finished metal frame arch mirror inspired by 1920s design.", size: "36 x 72 inches", shape: "Arched", finish: "Brushed Gold", usage: "Grand Living Mirrors", features: "Steel construction, lightweight." },
    { id: 12, name: "Anti-Fog Bathroom Mirror", category: "bathroom", material: "metal", image: "images for main page/Anti-Fog Bathroom Mirror.webp", desc: "Polished chrome framed mirror with heated anti-fog technology.", size: "24 x 36 inches", shape: "Rectangular", finish: "Polished Chrome", usage: "Signature Bath Mirrors", features: "Demister pad built-in, rust-proof aluminum." },
    { id: 13, name: "Matte Black Wall Mirror", category: "bathroom", material: "metal", image: "images for main page/Matte Black Wall Mirror.jpg", desc: "Sleek matte black frame for modern industrial bathrooms.", size: "30 x 40 inches", shape: "Rectangular", finish: "Matte Black", usage: "Signature Bath Mirrors", features: "Powder-coated steel, corrosion resistant." },
    { id: 14, name: "Metal Border Round Mirror", category: "bedroom", material: "metal", image: "images for main page/Metal Border Round Mirror.jpg", desc: "Industrial style round mirror with a thick black metal rim.", size: "30 inches Diameter", shape: "Round", finish: "Powder Black", usage: "Luxury Bedroom Mirrors", features: "Flat glass, sturdy backplate." },
    { id: 15, name: "Rotatable Tabletop Mirror", category: "dressing", material: "metal", image: "images for main page/Rotatable Tabletop Mirror.jpg", desc: "Double-sided round mirror on a weighted brass stand.", size: "8 inches Diameter", shape: "Round", finish: "Brushed Brass", usage: "Dressing & Vanity Mirrors", features: "Normal/5x magnification, 360-degree swivel." },
    { id: 16, name: "LED Vanity Mirror", category: "bathroom", material: "led", image: "images for main page/LED Vanity Mirror.jpg", desc: "Backlit circular mirror providing shadow-free lighting.", size: "32 inches Diameter", shape: "Round", finish: "White Aluminum", usage: "Signature Bath Mirrors", features: "Touch dimmer switch, 3000K-6000K temp." },
    { id: 17, name: "Smart Touch Mirror", category: "bathroom", material: "led", image: "images for main page/Smart Touch Mirror.jpg", desc: "Vertical rectangular mirror with integrated touch controls.", size: "20 x 40 inches", shape: "Rectangular", finish: "Silver Frame", usage: "Signature Bath Mirrors", features: "Integrated LED strip, memory function." },
    { id: 18, name: "Hollywood Glow Mirror", category: "dressing", material: "led", image: "images for main page/Hollywood Glow Mirror.jpg", desc: "Classic vanity mirror surrounded by dimmable LED bulbs.", size: "24 x 30 inches", shape: "Rectangular", finish: "Pearlescent Frame", usage: "Dressing & Vanity Mirrors", features: "12x LED bulbs, 360-degree rotation base." },
    { id: 19, name: "Slimline LED Mirror", category: "dressing", material: "led", image: "images for main page/Slimline LED Mirror.webp", desc: "Ultra-thin profile mirror with front-facing LED light bar.", size: "24 x 36 inches", shape: "Rectangular", finish: "Silver", usage: "Dressing & Vanity Mirrors", features: "Touch sensor, cool white light." },
    { id: 20, name: "Infinity Light Mirror", category: "drawing", material: "led", image: "images for main page/Infinity Light Mirror.jpg", desc: "Creates an infinite tunnel of light effect for modern hallways.", size: "36 x 48 inches", shape: "Rectangular", finish: "Chrome", usage: "Grand Living Mirrors", features: "Multi-color LEDs, remote control." },
    { id: 21, name: "Smart Bluetooth Mirror", category: "dressing", material: "bluetooth", image: "images for main page/Smart Bluetooth Mirror.jpg", desc: "High-fidelity integrated speakers and LED touch controls.", size: "28 x 36 inches", shape: "Rectangular", finish: "Glass/Aluminum", usage: "Dressing & Vanity Mirrors", features: "Bluetooth 5.0, IP44 waterproof, Time/Temp display." },
    { id: 22, name: "Audio Bathroom Mirror", category: "bathroom", material: "bluetooth", image: "images for main page/Audio Bathroom Mirror.jpg", desc: "Waterproof speaker system integrated into a defogging bathroom mirror.", size: "24 x 32 inches", shape: "Rectangular", finish: "White", usage: "Signature Bath Mirrors", features: "Stereo sound, built-in microphone." },
    { id: 23, name: "Gym Smart Mirror", category: "dressing", material: "bluetooth", image: "images for main page/Gym Smart Mirror.webp", desc: "Full-length mirror with sync capability for workout music.", size: "24 x 64 inches", shape: "Rectangular", finish: "Black Aluminum", usage: "Dressing & Vanity Mirrors", features: "360° sound, bass boost." },
    { id: 24, name: "Vanity Audio Pro", category: "dressing", material: "bluetooth", image: "images for main page/Vanity Audio Pro.jpg", desc: "Professional grade audio mirror for makeup artists.", size: "30 x 40 inches", shape: "Square", finish: "Rose Gold", usage: "Dressing & Vanity Mirrors", features: "AptX HD audio, voice control." },
    { id: 25, name: "Shower Speaker Mirror", category: "bathroom", material: "bluetooth", image: "images for main page/Shower Speaker Mirror.jpg", desc: "Compact mirror for shower stalls with removable Bluetooth speaker.", size: "12 x 18 inches", shape: "Oval", finish: "Plastic Coated", usage: "Signature Bath Mirrors", features: "Suction cup mount, water resistant." },
    { id: 26, name: "Venetian Baroque Mirror", category: "drawing", material: "metal", image: "images for main page/Venetian Baroque Mirror.jpg", desc: "An ornate, intricately designed mirror featuring a scrolling acanthus leaf motif in a distressed gold finish.", size: "50 x 70 inches", shape: "Rectangular", finish: "Antique Gold", usage: "Grand Living Mirrors", features: "Hand-finished metal frame, moisture resistant." },
    { id: 27, name: "Infinity Cinema Mirror", category: "dressing", material: "bluetooth", image: "images for main page/Infinity Cinema Mirror.webp", desc: "Wide-angle mirror with integrated surround sound lighting, perfect for home theaters.", size: "40 x 80 inches", shape: "Rectangular", finish: "Matte Black", usage: "Dressing & Vanity Mirrors", features: "Syncs with audio systems, remote control." }
];

const projects = [
    { id: 1, title: "The SoHo Penthouse", category: "drawing", material: "wooden", image: "images for main page/Royal Frame Wall Mirror.jpg", description: "A stunning renovation of a classic New York penthouse living room, featuring a bespoke 8-foot hand-carved Mahogany mirror.", room: "Grand Living Room", mirror: "Royal Frame Wall Mirror", features: "Hand-carved floral motifs", date: "March 2025" },
    { id: 2, title: "Manhattan Spa Bathroom", category: "bathroom", material: "led", image: "images for main page/LED Vanity Mirror.jpg", description: "Transformed a compact city bathroom into a luxury spa retreat with a backlit circular LED mirror.", room: "Signature Bath", mirror: "LED Vanity Mirror", features: "Backlit circular, Touch dimmer", date: "Feb 2025" },
    { id: 3, title: "Fashion Designer's Loft", category: "dressing", material: "bluetooth", image: "images for main page/Smart Bluetooth Mirror.jpg", description: "Designed for a high-fashion client with integrated Bluetooth speakers and adjustable LED temperature.", room: "Dressing & Vanity", mirror: "Smart Bluetooth Mirror", features: "Bluetooth 5.0, IP44 waterproof", date: "Jan 2025" },
    { id: 4, title: "Minimalist West Village Bedroom", category: "bedroom", material: "acrylic", image: "images for main page/Minimal Acrylic Edge Mirror.jpg", description: "A serene bedroom renovation focusing on light and space with a floor-to-ceiling frameless acrylic mirror.", room: "Luxury Bedroom", mirror: "Minimal Acrylic Edge Mirror", features: "Frameless, Seamless joints", date: "Dec 2024" },
    { id: 5, title: "Art Deco Townhouse Entry", category: "drawing", material: "metal", image: "images for main page/Art Deco Arch Mirror.jpg", description: "Restoration of a 1920s townhouse entrance featuring a geometric gold-finished metal arch mirror.", room: "Entry & Foyer", mirror: "Art Deco Arch Mirror", features: "Steel construction, Brushed Gold", date: "Nov 2024" },
    { id: 6, title: "The Chelsea Loft Gym", category: "drawing", material: "metal", image: "images for main page/Full Length Wall Mirror.jpg", description: "A high-energy space featuring a full-length wall-to-ceiling mirror to maximize visual space and light.", room: "Home Gym / Yoga", mirror: "Full Length Wall Mirror", features: "Tempered glass, safety backing", date: "Oct 2024" },
    { id: 7, title: "The SoHo Spa Retreat", category: "bathroom", material: "led", image: "images for main page/Backlit Infinity Mirror.jfif", description: "Tranquility meets technology with this soft-glowing backlit mirror installation for a master bath.", room: "Master Spa", mirror: "Backlit Infinity Mirror", features: "Dimmable LEDs, moisture resistant", date: "Sept 2024" },
    { id: 8, title: "The Park Avenue Penthouse Foyer", category: "drawing", material: "wooden", image: "images for main page/Custom Estate Mirror.jpeg", description: "An architectural centerpiece featuring a 10-foot tall hand-carved mahogany frame with gold leaf accents.", room: "Grand Foyer", mirror: "Custom Estate Mirror", features: "Gold leaf finish, 10ft height", date: "Aug 2024" }
];


function showToast(msg) {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.innerText = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }
}

function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 50));
    }
}

function initHamburger() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            hamburger.querySelector('i').classList.toggle('fa-bars');
            hamburger.querySelector('i').classList.toggle('fa-times');
        });
    }
}


function renderHomeProducts() {
    const productGrid = document.getElementById('product-grid');
    const typeButtons = document.querySelectorAll('#type-filters .filter-btn');
    const materialButtons = document.querySelectorAll('#material-filters .filter-btn');
    let currentTypeFilter = 'all';
    let currentMaterialFilter = 'all';

    function render() {
        productGrid.innerHTML = '';
        const filtered = products.filter(p => {
            const typeMatch = currentTypeFilter === 'all' || p.category === currentTypeFilter;
            const materialMatch = currentMaterialFilter === 'all' || p.material === currentMaterialFilter;
            return typeMatch && materialMatch;
        });

        if (filtered.length === 0) {
            productGrid.innerHTML = '<p class="text-center" style="grid-column: 1/-1; padding: 20px;">No mirrors found.</p>';
            return;
        }

        filtered.forEach((product, index) => {
            const card = document.createElement('div');
            card.className = 'product-card reveal active';
            card.style.animationDelay = `${index * 0.05}s`;
            card.innerHTML = `
                <div class="card-image-wrapper">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="card-content">
                    <div>
                        <div class="card-category">${product.usage}</div>
                        <h3 class="card-title">${product.name}</h3>
                        <span class="card-material">${product.material.charAt(0).toUpperCase() + product.material.slice(1)}</span>
                        <p style="font-size: 0.9rem; color: var(--color-text-secondary);">${product.desc}</p>
                    </div>
                    <div class="card-actions">
                        <button class="btn btn-sm btn-primary" onclick="showDetails('${product.name}')">View Details</button>
                        <button class="btn btn-sm" onclick="downloadDoc(${product.id})"><i class="fas fa-file-word"></i> Specs</button>
                    </div>
                </div>
            `;
            productGrid.appendChild(card);
        });
    }

    function handleFilterClick(e) {
        const btn = e.target;
        const group = btn.dataset.group;
        const filter = btn.dataset.filter;
        if (group === 'type') {
            currentTypeFilter = filter;
            typeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        } else {
            currentMaterialFilter = filter;
            materialButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }
        render();
    }

    if (typeButtons) typeButtons.forEach(btn => btn.addEventListener('click', handleFilterClick));
    if (materialButtons) materialButtons.forEach(btn => btn.addEventListener('click', handleFilterClick));

    r
    render();
}

function showDetails(name) { showToast(`Viewing ${name}`); }

function downloadDoc(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    const content = `CLEAR REFLECTIONS - PRODUCT SPECIFICATION SHEET\n\nName: ${product.name}\nID: CR-${product.id}\nSize: ${product.size}\nMaterial: ${product.material}\nFeatures: ${product.features}`;
    const blob = new Blob([content], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${product.name.replace(/\s+/g, '_')}_Specs.doc`;
    document.body.appendChild(link);
    link.click();
    showToast(`Downloading specs...`);
}

function renderProjectsPage() {
    const showcaseContainer = document.getElementById('project-showcase');

    function render() {
        showcaseContainer.innerHTML = '';
        const projectList = projects;

        if (projectList.length === 0) {
            showcaseContainer.innerHTML = '<p class="text-center" style="padding:40px;">No projects found.</p>';
            return;
        }

        projectList.forEach((project, index) => {
            const row = document.createElement('div');
            row.className = `project-row ${index % 2 !== 0 ? 'reverse' : ''}`;
            row.innerHTML = `
                <div class="project-image"><img src="${project.image}" alt="${project.title}"></div>
                <div class="project-details">
                    <span class="project-category">${project.room}</span>
                    <h3>${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-meta">
                        <div class="meta-item"><span class="meta-label">Mirror Type</span><span class="meta-value">${project.mirror}</span></div>
                        <div class="meta-item"><span class="meta-label">Key Features</span><span class="meta-value">${project.features}</span></div>
                        <div class="meta-item"><span class="meta-label">Completion</span><span class="meta-value">${project.date}</span></div>
                        <div class="meta-item" style="margin-top:20px;">
                            <a href="contact.html" class="btn btn-sm btn-primary">Inquire About This Project</a>
                        </div>
                    </div>
                </div>
            `;
            showcaseContainer.appendChild(row);
            setTimeout(() => row.classList.add('active'), 100 + (index * 200));
        });
    }

    render();


    if (document.querySelectorAll('.reveal').length > 0) {
        window.addEventListener('scroll', () => {
            var reveals = document.querySelectorAll('.reveal');
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add('active');
                }
            }
        });
    }
}


function initContactPage() {

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        alert("Your Location:\nLatitude: " + lat + "\nLongitude: " + lng);

    }

    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.");
                break;
            default:
                alert("An unknown error occurred.");
        }
    }

    window.getLocation = getLocation;
}


document.addEventListener('DOMContentLoaded', () => {


    initScrollReveal();
    initNavbar();
    initHamburger();


    if (document.getElementById('product-grid')) {
        renderHomeProducts();
    }


    if (document.getElementById('project-showcase')) {
        renderProjectsPage();
    }

    if (document.querySelector('.contact-info')) {
        initContactPage();
    }
});