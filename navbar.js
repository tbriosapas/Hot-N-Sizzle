// navbar.js - Responsive Layout with Customer Auth Integrated
function createNavbar() {
    const token = localStorage.getItem('cust_token');
    const name = localStorage.getItem('cust_name');

    // Desktop Authentication Markup Section
    let desktopAuth = `
        <a href="auth.html" class="bg-orange-600 px-6 py-2.5 rounded-full font-black text-xs uppercase text-white hover:bg-white hover:text-orange-600 transition-all duration-300 shadow-lg shadow-orange-900/40 whitespace-nowrap">
            Sign In
        </a>
    `;

    // Mobile Authentication Markup Section
    let mobileAuth = `
        <a href="auth.html" class="mobile-link flex items-center gap-4 px-4 py-3.5 text-white hover:text-orange-500 hover:bg-orange-600/10 rounded-xl transition-all duration-200">
            <span class="w-9 h-9 bg-zinc-900 rounded-lg flex items-center justify-center"><i class="fas fa-user-lock text-sm text-zinc-500"></i></span>
            <span class="font-bold uppercase tracking-wider text-sm">Sign In / Register</span>
            <i class="fas fa-chevron-right ml-auto text-zinc-700 text-xs"></i>
        </a>
    `;

    if (token && name) {
        desktopAuth = `
            <div class="flex items-center gap-3 text-sm border-l border-zinc-800 pl-4">
                <span class="text-zinc-400 font-medium">Hi, <strong class="text-orange-500 font-black uppercase">${name}</strong></span>
                <button onclick="logoutCustomer()" class="text-[10px] uppercase font-bold tracking-wider text-zinc-500 hover:text-white underline transition">
                    Logout
                </button>
            </div>
        `;

        mobileAuth = `
            <div class="flex items-center justify-between px-4 py-3.5 bg-zinc-900/50 rounded-xl border border-zinc-900">
                <div class="flex items-center gap-3">
                    <span class="w-9 h-9 bg-orange-600/10 text-orange-500 rounded-lg flex items-center justify-center font-black"><i class="fas fa-user"></i></span>
                    <div>
                        <p class="text-[9px] font-bold text-zinc-500 uppercase tracking-wider">Authenticated User</p>
                        <p class="font-black text-white text-sm uppercase">${name}</p>
                    </div>
                </div>
                <button onclick="logoutCustomer()" class="text-xs font-bold text-orange-500 hover:underline">Logout</button>
            </div>
        `;
    }

    const navHTML = `
    <nav class="bg-black border-b border-orange-600 sticky top-0 z-50 px-6 py-2">
        <div class="max-w-7xl mx-auto flex items-center">
            
            <div class="lg:hidden flex-1">
                <button onclick="toggleMobileMenu()" class="text-orange-500 hover:text-orange-400 transition-colors p-2" id="mobileMenuBtn">
                    <div class="w-6 h-5 flex flex-col justify-between relative">
                        <span id="bar1" class="w-full h-0.5 bg-current transform transition-all duration-300 origin-left"></span>
                        <span id="bar2" class="w-full h-0.5 bg-current transition-all duration-300"></span>
                        <span id="bar3" class="w-full h-0.5 bg-current transform transition-all duration-300 origin-left"></span>
                    </div>
                </button>
            </div>

            <div class="hidden lg:flex flex-1 items-center space-x-6 font-bold uppercase tracking-widest text-[11px] text-white">
                <li class="list-none"><a href="index.html" class="hover:text-orange-500 transition">Home</a></li>
                <li class="list-none text-zinc-700">|</li>
                <li class="list-none"><a href="order.html" class="hover:text-orange-500 transition">Order Now</a></li>
                <li class="list-none text-zinc-700">|</li>
                <li class="list-none"><a href="aboutus.html" class="hover:text-orange-500 transition">About Us</a></li>
            </div>

            <div class="flex-shrink-0 relative z-50 lg:-mb-8 px-4">
                <a href="evaluation.html" class="block rounded-b-2xl relative group cursor-default sm:cursor-pointer select-none" title="Operational Portal">
                    <img src="logo copy.png" alt="Hot 'N Sizzle Logo" class="h-16 lg:h-24 w-auto object-contain transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 group-active:scale-95">
                    <span class="absolute bottom-1 lg:-bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_6px_#ea580c]"></span>
                </a>
            </div>

            <div class="hidden lg:flex flex-1 items-center justify-end space-x-6 font-bold uppercase tracking-widest text-[11px] text-white">
                <li class="list-none"><a href="contact.html" class="hover:text-orange-500 transition">Contact</a></li>
                <li class="list-none text-zinc-700">|</li>
                <li class="list-none"><a href="feedback.html" class="hover:text-orange-500 transition">Feedback</a></li>
                <li class="list-none text-zinc-700">|</li>
                ${desktopAuth}
            </div>

            <div class="lg:hidden flex-1 flex justify-end">
                <a href="order.html" class="bg-orange-600 px-4 py-2 rounded-full font-black text-[10px] uppercase text-white hover:bg-orange-500 transition-colors shadow-lg">
                    Order
                </a>
            </div>

        </div>

        <div id="mobileMenuOverlay" class="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 hidden opacity-0 transition-opacity duration-300 lg:hidden" onclick="toggleMobileMenu()"></div>
        
        <div id="mobileMenuPanel" class="fixed top-[72px] left-0 right-0 bg-zinc-950 border-b-2 border-orange-600 shadow-2xl shadow-orange-600/20 transform -translate-y-[120%] transition-transform duration-300 ease-out z-50 lg:hidden">
            <div class="px-6 py-6 space-y-1">
                
                <div class="mb-4 pb-3 border-b border-zinc-800">
                    <p class="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em]">Navigation Menu</p>
                </div>

                <a href="index.html" class="mobile-link flex items-center gap-4 px-4 py-3.5 text-white hover:text-orange-500 hover:bg-orange-600/10 rounded-xl transition-all duration-200">
                    <span class="w-9 h-9 bg-zinc-900 rounded-lg flex items-center justify-center"><i class="fas fa-home text-sm text-zinc-500"></i></span>
                    <span class="font-bold uppercase tracking-wider text-sm">Home</span>
                    <i class="fas fa-chevron-right ml-auto text-zinc-700 text-xs"></i>
                </a>

                <a href="order.html" class="mobile-link flex items-center gap-4 px-4 py-3.5 text-white hover:text-orange-500 hover:bg-orange-600/10 rounded-xl transition-all duration-200">
                    <span class="w-9 h-9 bg-zinc-900 rounded-lg flex items-center justify-center"><i class="fas fa-utensils text-sm text-zinc-500"></i></span>
                    <span class="font-bold uppercase tracking-wider text-sm">Order & Reserve</span>
                    <i class="fas fa-chevron-right ml-auto text-zinc-700 text-xs"></i>
                </a>

                <a href="aboutus.html" class="mobile-link flex items-center gap-4 px-4 py-3.5 text-white hover:text-orange-500 hover:bg-orange-600/10 rounded-xl transition-all duration-200">
                    <span class="w-9 h-9 bg-zinc-900 rounded-lg flex items-center justify-center"><i class="fas fa-users text-sm text-zinc-500"></i></span>
                    <span class="font-bold uppercase tracking-wider text-sm">About Us</span>
                    <i class="fas fa-chevron-right ml-auto text-zinc-700 text-xs"></i>
                </a>

                <a href="contact.html" class="mobile-link flex items-center gap-4 px-4 py-3.5 text-white hover:text-orange-500 hover:bg-orange-600/10 rounded-xl transition-all duration-200">
                    <span class="w-9 h-9 bg-zinc-900 rounded-lg flex items-center justify-center"><i class="fas fa-map-marker-alt text-sm text-zinc-500"></i></span>
                    <span class="font-bold uppercase tracking-wider text-sm">Contact</span>
                    <i class="fas fa-chevron-right ml-auto text-zinc-700 text-xs"></i>
                </a>

                <a href="feedback.html" class="mobile-link flex items-center gap-4 px-4 py-3.5 text-white hover:text-orange-500 hover:bg-orange-600/10 rounded-xl transition-all duration-200">
                    <span class="w-9 h-9 bg-zinc-900 rounded-lg flex items-center justify-center"><i class="fas fa-comment-dots text-sm text-zinc-500"></i></span>
                    <span class="font-bold uppercase tracking-wider text-sm">Feedback</span>
                    <i class="fas fa-chevron-right ml-auto text-zinc-700 text-xs"></i>
                </a>

                <div class="mt-5 pt-4 border-t border-zinc-800 space-y-3">
                    ${mobileAuth}
                </div>
            </div>
        </div>
    </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navHTML);
}

function toggleMobileMenu() {
    const panel = document.getElementById('mobileMenuPanel');
    const overlay = document.getElementById('mobileMenuOverlay');
    const bar1 = document.getElementById('bar1');
    const bar2 = document.getElementById('bar2');
    const bar3 = document.getElementById('bar3');
    
    const isOpen = !panel.classList.contains('-translate-y-[120%]');
    
    if (isOpen) {
        panel.classList.add('-translate-y-[120%]');
        overlay.classList.add('opacity-0');
        setTimeout(() => overlay.classList.add('hidden'), 300);
        bar1.classList.remove('rotate-45', 'translate-y-[2px]');
        bar2.classList.remove('opacity-0');
        bar3.classList.remove('-rotate-45', '-translate-y-[2px]');
        document.body.style.overflow = '';
    } else {
        overlay.classList.remove('hidden');
        requestAnimationFrame(() => overlay.classList.remove('opacity-0'));
        panel.classList.remove('-translate-y-[120%]');
        bar1.classList.add('rotate-45', 'translate-y-[2px]');
        bar2.classList.add('opacity-0');
        bar3.classList.add('-rotate-45', '-translate-y-[2px]');
        document.body.style.overflow = 'hidden';
    }
}

function logoutCustomer() {
    localStorage.removeItem('cust_token');
    localStorage.removeItem('cust_name');
    localStorage.removeItem('sb_user_id');
    alert("Logged out securely.");
    window.location.reload();
}

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        const panel = document.getElementById('mobileMenuPanel');
        if (panel && !panel.classList.contains('-translate-y-[120%]')) {
            toggleMobileMenu();
        }
    }
});

// Global navigation visibility manager
function manageGlobalNavbar() {
    // Check if the user is authenticated
    const isLoggedIn = !!localStorage.getItem('cust_token');
    
    // Select all links inside your navigation container
    const navLinks = document.querySelectorAll('nav a, .navbar a, #nav-menu a');
    
    navLinks.forEach(link => {
        const linkText = link.textContent.trim().toLowerCase();
        
        // MODIFIED: Checks if the link text CONTAINS 'order' or equals 'feedback'
        if (linkText.includes('order') || linkText === 'feedback') {
            if (isLoggedIn) {
                link.style.display = ''; 
                link.classList.remove('hidden'); 
            } else {
                link.style.display = 'none'; 
                link.classList.add('hidden'); 
            }
        }
    });
}

// Automatically trigger the visibility sweep on every single page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', manageGlobalNavbar);
} else {
    manageGlobalNavbar();
}
window.onload = createNavbar;
