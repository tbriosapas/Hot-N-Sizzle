// tailwind_navbar.js - Desktop unchanged, mobile enhanced
function createNavbar() {
    const navHTML = `
    <nav class="bg-black border-b border-orange-600 sticky top-0 z-50 px-6 py-2">
        <div class="max-w-7xl mx-auto flex items-center">
            
            <!-- MOBILE: Hamburger (left) -->
            <div class="lg:hidden flex-1">
                <button onclick="toggleMobileMenu()" class="text-orange-500 hover:text-orange-400 transition-colors p-2" id="mobileMenuBtn">
                    <div class="w-6 h-5 flex flex-col justify-between relative">
                        <span id="bar1" class="w-full h-0.5 bg-current transform transition-all duration-300 origin-left"></span>
                        <span id="bar2" class="w-full h-0.5 bg-current transition-all duration-300"></span>
                        <span id="bar3" class="w-full h-0.5 bg-current transform transition-all duration-300 origin-left"></span>
                    </div>
                </button>
            </div>

            <!-- DESKTOP: Left links (your original) -->
            <div class="hidden lg:flex flex-1 items-center space-x-6 font-bold uppercase tracking-widest text-[11px] text-white">
                <li class="list-none"><a href="tailwind.html" class="hover:text-orange-500 transition">Home</a></li>
                <li class="list-none text-zinc-700">|</li>
                <li class="list-none"><a href="tailwind_menu.html" class="hover:text-orange-500 transition">Menu</a></li>
                <li class="list-none text-zinc-700">|</li>
                <li class="list-none"><a href="tailwind_aboutus.html" class="hover:text-orange-500 transition">About Us</a></li>
            </div>

            <!-- LOGO: Center (your original) -->
            <div class="flex-shrink-0 relative z-50 lg:-mb-8 px-4">
                <a href="tailwind.html" class="block rounded-b-2xl">
                    <img src="logo copy.png" alt="Hot 'N Sizzle Logo" class="h-16 lg:h-24 w-auto object-contain hover:scale-105 transition-transform duration-300">
                </a>
            </div>

            <!-- DESKTOP: Right links (your original) -->
            <div class="hidden lg:flex flex-1 items-center justify-end space-x-6 font-bold uppercase tracking-widest text-[11px] text-white">
                <li class="list-none"><a href="tailwind_contact.html" class="hover:text-orange-500 transition">Contact</a></li>
                <li class="list-none text-zinc-700">|</li>
                <li class="list-none"><a href="tailwind_feedback.html" class="hover:text-orange-500 transition">Feedback</a></li>
                <a href="tailwind_order.html" class="bg-orange-600 px-6 py-2.5 rounded-full font-black text-xs uppercase text-white hover:bg-white hover:text-orange-600 transition-all duration-300 shadow-lg shadow-orange-900/40 whitespace-nowrap">
                    Reserve Now
                </a>
            </div>

            <!-- MOBILE: Order button (right) -->
            <div class="lg:hidden flex-1 flex justify-end">
                <a href="tailwind_order.html" class="bg-orange-600 px-4 py-2 rounded-full font-black text-[10px] uppercase text-white hover:bg-orange-500 transition-colors shadow-lg">
                    Order
                </a>
            </div>

        </div>

        <!-- MOBILE MENU: Full screen slide-down -->
        <div id="mobileMenuOverlay" class="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 hidden opacity-0 transition-opacity duration-300 lg:hidden" onclick="toggleMobileMenu()"></div>
        
        <div id="mobileMenuPanel" class="fixed top-[72px] left-0 right-0 bg-zinc-950 border-b-2 border-orange-600 shadow-2xl shadow-orange-600/20 transform -translate-y-[120%] transition-transform duration-300 ease-out z-50 lg:hidden">
            <div class="px-6 py-6 space-y-1">
                
                <div class="mb-4 pb-3 border-b border-zinc-800">
                    <p class="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em]">Menu</p>
                </div>

                <a href="tailwind.html" class="mobile-link flex items-center gap-4 px-4 py-3.5 text-white hover:text-orange-500 hover:bg-orange-600/10 rounded-xl transition-all duration-200">
                    <span class="w-9 h-9 bg-zinc-900 rounded-lg flex items-center justify-center"><i class="fas fa-home text-sm text-zinc-500"></i></span>
                    <span class="font-bold uppercase tracking-wider text-sm">Home</span>
                    <i class="fas fa-chevron-right ml-auto text-zinc-700 text-xs"></i>
                </a>

                <a href="tailwind_menu.html" class="mobile-link flex items-center gap-4 px-4 py-3.5 text-white hover:text-orange-500 hover:bg-orange-600/10 rounded-xl transition-all duration-200">
                    <span class="w-9 h-9 bg-zinc-900 rounded-lg flex items-center justify-center"><i class="fas fa-utensils text-sm text-zinc-500"></i></span>
                    <span class="font-bold uppercase tracking-wider text-sm">Menu</span>
                    <i class="fas fa-chevron-right ml-auto text-zinc-700 text-xs"></i>
                </a>

                <a href="tailwind_aboutus.html" class="mobile-link flex items-center gap-4 px-4 py-3.5 text-white hover:text-orange-500 hover:bg-orange-600/10 rounded-xl transition-all duration-200">
                    <span class="w-9 h-9 bg-zinc-900 rounded-lg flex items-center justify-center"><i class="fas fa-users text-sm text-zinc-500"></i></span>
                    <span class="font-bold uppercase tracking-wider text-sm">About Us</span>
                    <i class="fas fa-chevron-right ml-auto text-zinc-700 text-xs"></i>
                </a>

                <a href="tailwind_contact.html" class="mobile-link flex items-center gap-4 px-4 py-3.5 text-white hover:text-orange-500 hover:bg-orange-600/10 rounded-xl transition-all duration-200">
                    <span class="w-9 h-9 bg-zinc-900 rounded-lg flex items-center justify-center"><i class="fas fa-map-marker-alt text-sm text-zinc-500"></i></span>
                    <span class="font-bold uppercase tracking-wider text-sm">Contact</span>
                    <i class="fas fa-chevron-right ml-auto text-zinc-700 text-xs"></i>
                </a>

                <a href="tailwind_feedback.html" class="mobile-link flex items-center gap-4 px-4 py-3.5 text-white hover:text-orange-500 hover:bg-orange-600/10 rounded-xl transition-all duration-200">
                    <span class="w-9 h-9 bg-zinc-900 rounded-lg flex items-center justify-center"><i class="fas fa-comment-dots text-sm text-zinc-500"></i></span>
                    <span class="font-bold uppercase tracking-wider text-sm">Feedback</span>
                    <i class="fas fa-chevron-right ml-auto text-zinc-700 text-xs"></i>
                </a>

                <div class="mt-5 pt-4 border-t border-zinc-800">
                    <a href="tailwind_order.html" class="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-black uppercase tracking-wider rounded-xl shadow-lg shadow-orange-600/30 active:scale-95 transition-transform">
                        <i class="fas fa-calendar-check"></i>
                        Reserve / Order Now
                    </a>
                </div>

                <div class="mt-4 flex items-center justify-center gap-6 text-zinc-500 text-xs">
                    <span><i class="fas fa-phone text-orange-500 mr-1"></i> 0929 864 9669</span>
                    <span><i class="fas fa-clock text-orange-500 mr-1"></i> 10AM - 10PM</span>
                </div>
            </div>
        </div>
    </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navHTML);
}

// Toggle mobile menu with hamburger animation
function toggleMobileMenu() {
    const panel = document.getElementById('mobileMenuPanel');
    const overlay = document.getElementById('mobileMenuOverlay');
    const bar1 = document.getElementById('bar1');
    const bar2 = document.getElementById('bar2');
    const bar3 = document.getElementById('bar3');
    
    const isOpen = !panel.classList.contains('-translate-y-[120%]');
    
    if (isOpen) {
        // CLOSE
        panel.classList.add('-translate-y-[120%]');
        overlay.classList.add('opacity-0');
        setTimeout(() => overlay.classList.add('hidden'), 300);
        
        // Hamburger
        bar1.classList.remove('rotate-45', 'translate-y-[2px]');
        bar2.classList.remove('opacity-0');
        bar3.classList.remove('-rotate-45', '-translate-y-[2px]');
        
        document.body.style.overflow = '';
    } else {
        // OPEN
        overlay.classList.remove('hidden');
        requestAnimationFrame(() => overlay.classList.remove('opacity-0'));
        panel.classList.remove('-translate-y-[120%]');
        
        // X animation
        bar1.classList.add('rotate-45', 'translate-y-[2px]');
        bar2.classList.add('opacity-0');
        bar3.classList.add('-rotate-45', '-translate-y-[2px]');
        
        document.body.style.overflow = 'hidden';
    }
}

// Auto-close on resize to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        const panel = document.getElementById('mobileMenuPanel');
        if (panel && !panel.classList.contains('-translate-y-[120%]')) {
            toggleMobileMenu();
        }
    }
});

window.onload = createNavbar;