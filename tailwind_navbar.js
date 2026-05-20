// tailwind_navbar.js - Enhanced with animations and hover effects
function createNavbar() {
    const navHTML = `
    <nav class="bg-black border-b border-orange-600 sticky top-0 z-50 px-6 py-2 transition-all duration-300" id="mainNav">
        <div class="max-w-7xl mx-auto flex items-center">
            
            <!-- Left Links -->
            <div class="flex-1">
                <ul class="hidden lg:flex items-center space-x-6 font-bold uppercase tracking-widest text-[11px] text-white">
                    <li class="relative group">
                        <a href="tailwind.html" class="hover:text-orange-500 transition-colors duration-300 py-2 block relative">
                            Home
                            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li class="text-zinc-700">|</li>
                    <li class="relative group">
                        <a href="tailwind_menu.html" class="hover:text-orange-500 transition-colors duration-300 py-2 block relative">
                            Menu
                            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li class="text-zinc-700">|</li>
                    <li class="relative group">
                        <a href="tailwind_aboutus.html" class="hover:text-orange-500 transition-colors duration-300 py-2 block relative">
                            About Us
                            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Logo Center -->
            <div class="flex-shrink-0 relative z-50 -mb-8 px-4">
                <a href="tailwind.html" class="block rounded-b-2xl group">
                    <img src="logo copy.png" alt="Hot 'N Sizzle Logo" class="h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(234,88,12,0.5)]">
                </a>
            </div>

            <!-- Right Links -->
            <div class="flex-1 flex items-center justify-end space-x-6">
                <ul class="hidden lg:flex items-center space-x-6 font-bold uppercase tracking-widest text-[11px] text-white">
                    <li class="relative group">
                        <a href="tailwind_contact.html" class="hover:text-orange-500 transition-colors duration-300 py-2 block relative">
                            Contact
                            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li class="text-zinc-700">|</li>
                    <li class="relative group">
                        <a href="tailwind_feedback.html" class="hover:text-orange-500 transition-colors duration-300 py-2 block relative">
                            Feedback
                            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                </ul>
                
                <a href="tailwind_order.html" class="bg-orange-600 px-6 py-2.5 rounded-full font-black text-xs uppercase text-white hover:bg-white hover:text-orange-600 transition-all duration-300 shadow-lg shadow-orange-900/40 whitespace-nowrap hover:shadow-[0_0_20px_rgba(234,88,12,0.6)] hover:scale-105 active:scale-95">
                    Reserve Now
                </a>
                
                <!-- Mobile Menu Button -->
                <button onclick="toggleMobileMenu()" class="lg:hidden text-orange-500 text-2xl hover:text-orange-400 transition-colors p-2">
                    <i class="fas fa-bars"></i>
                </button>
            </div>

        </div>
        
        <!-- Mobile Menu -->
        <div id="mobileMenu" class="hidden lg:hidden mt-4 pb-4 border-t border-zinc-800 pt-4">
            <div class="flex flex-col space-y-3">
                <a href="tailwind.html" class="text-white hover:text-orange-500 font-bold uppercase text-sm tracking-wider transition-colors">Home</a>
                <a href="tailwind_menu.html" class="text-white hover:text-orange-500 font-bold uppercase text-sm tracking-wider transition-colors">Menu</a>
                <a href="tailwind_aboutus.html" class="text-white hover:text-orange-500 font-bold uppercase text-sm tracking-wider transition-colors">About Us</a>
                <a href="tailwind_contact.html" class="text-white hover:text-orange-500 font-bold uppercase text-sm tracking-wider transition-colors">Contact</a>
                <a href="tailwind_feedback.html" class="text-white hover:text-orange-500 font-bold uppercase text-sm tracking-wider transition-colors">Feedback</a>
                <a href="tailwind_order.html" class="text-orange-500 font-bold uppercase text-sm tracking-wider">Reserve Now</a>
            </div>
        </div>
    </nav>
    `;

    // Insert at the very beginning of body
    document.body.insertAdjacentHTML('afterbegin', navHTML);
    
    // Add scroll effect to navbar
    initScrollEffects();
}

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

// Scroll effects for navbar
function initScrollEffects() {
    let lastScroll = 0;
    const nav = document.getElementById('mainNav');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolled
        if (currentScroll > 50) {
            nav.classList.add('shadow-lg', 'shadow-orange-900/20');
            nav.classList.add('bg-black/95', 'backdrop-blur-sm');
        } else {
            nav.classList.remove('shadow-lg', 'shadow-orange-900/20');
            nav.classList.remove('bg-black/95', 'backdrop-blur-sm');
        }
        
        lastScroll = currentScroll;
    });
}

// Initialize on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createNavbar);
} else {
    createNavbar();
}