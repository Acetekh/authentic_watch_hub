

// WhatsApp order — add product details to message and replace number with actual contact
function orderViaWhatsApp(productName, price) {
    const phoneNumber = "+2348109948221";
    const message = `Hello AWH! I am interested in purchasing the following timepiece:%0A%0A*Model:* ${productName}%0A*Price:* ${price}%0A%0AIs this still available?`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Mobile nav
const toggle = document.getElementById('mobile-toggle');
const mobileNav = document.getElementById('mobile-nav');
const iconOpen = document.getElementById('icon-open');
const iconClose = document.getElementById('icon-close');
toggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    iconOpen.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
});
document.querySelectorAll('.mobile-link').forEach(l => {
    l.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        iconOpen.classList.remove('hidden');
        iconClose.classList.add('hidden');
    });
});

//    animate hero text on load
window.addEventListener('load', () => {
    const heroText = document.querySelector('header h1');
    heroText.classList.add('reveal');
    setTimeout(() => heroText.classList.add('active'), 500);
});

(function () {
    const btn = document.getElementById("luxuryScrollTop");

    if (btn) {
        window.addEventListener("scroll", () => {
            // If user scrolls more than 300px, show the button
            if (window.scrollY > 300) {
                btn.classList.remove("scroll-btn-hidden");
                btn.classList.add("scroll-btn-visible");
            } else {
                btn.classList.remove("scroll-btn-visible");
                btn.classList.add("scroll-btn-hidden");
            }
        });

        btn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
})();


// animated counters
function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 2000;
    const start = performance.now();

    function update(now) {
        const progress = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4); // ease out quart
        const value = target * ease;
        el.textContent = prefix + (Number.isInteger(target) ? Math.floor(value) : value.toFixed(1)) + suffix;
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

/* Observer fires counter when element enters viewport */
const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            animateCounter(e.target);
            counterObserver.unobserve(e.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));






const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    ring.style.transform = `translate(${mouseX - 18}px, ${mouseY - 18}px)`;
});

document.querySelectorAll('a, button, .watch-card, .group').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
});


//  slider show
// Function for Nav Buttons
function scrollSlider(distance) {
    const slider = document.getElementById('slider');
    slider.scrollBy({
        left: distance,
        behavior: 'smooth'
    });
}

// Keep your existing Drag-to-Scroll logic below this
const slider = document.getElementById('slider');
if (slider) {
    let isDown = false, startX, scrollLeft;
    // ... (rest of your existing mousedown/move/up events)
}

//  faq toggle
function handleAccordion(element) {
    const allItems = document.querySelectorAll('.faq-item');
    const clickedAnswer = element.querySelector('.faq-answer');
    const clickedIcon = element.querySelector('i');

   
    const isOpen = clickedAnswer.style.maxHeight && clickedAnswer.style.maxHeight !== '0px';

    
    allItems.forEach(item => {
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('i');
        
        answer.style.maxHeight = '0px';
        icon.style.transform = 'rotate(0deg)';
        icon.classList.replace('fa-minus', 'fa-plus');
    });

    //
    if (!isOpen) {
        clickedAnswer.style.maxHeight = clickedAnswer.scrollHeight + "px";
        clickedIcon.style.transform = 'rotate(180deg)';
        clickedIcon.classList.replace('fa-plus', 'fa-minus');
    }
}
// 1. THE SHOP LIST (The "Menu")

const watches = [
    {
        id: "rolex oyster perpetual day-date", 
        brand: "rolex",
        name: "rolex oyster Day-date",
        price: "$ 14,800.00",
        img: "https://i.pinimg.com/1200x/3b/81/90/3b8190f3f570458b143642b3577a5fe9.jpg",
        size: "41mm"
    },
     {
        id: "Hublot Big Bang Unico",
        brand: "hublot",
        name: "Big Bang Unico",
        price: "$ 13,000.00",
        img: "https://i.pinimg.com/1200x/bb/ac/94/bbac94a09c743c043ef1351a821a86ba.jpg",
        size: "41mm"
    },
    {
        id: "rolex oyster perpetual", 
        brand: "rolex",
        name: "Oyster Perpetual Datejust",
        price: "$ 14,800.00",
        img: "https://i.pinimg.com/1200x/fe/81/5a/fe815ae64a150a717fd0a85fbc7b3027.jpg",
        size: "41mm"
    },
    {
        id: "cartier santos",
        brand: "cartier",
        name: "Santos de Cartier",
        price: "$ 7,200.00",
        img: "https://i.pinimg.com/1200x/d7/ed/bd/d7edbdfc2e7ea51f13b6cbf081d4670e.jpg",
        size: "39.8mm"
    },
     {
        id: "Santos de Cartier Hand-Wound Skeleton",
        brand: "cartier",
        name: "Santos de Cartier Skeleton",
        price: "$ 70,000.00",
        img: "https://i.pinimg.com/1200x/ec/e7/eb/ece7eb97db72b8463eed3d7fc19f122e.jpg",
        size: "39.8mm"
    },
    
    {
        id: "Hublot Classic Fusion Black Magic",
        brand: "hublot",
        name: "Hublot Classic Fusion Black Magic",
        price: "$ 95,000.00",
        img: "https://i.pinimg.com/736x/2b/7d/76/2b7d76a69f7ccd1f819833a3cfbd3fad.jpg",
        size: "40mm"
    },
     {
        id: "Cartier Skeleton",
        brand: "cartier",
        name: "Cartier Skeleton Green",
        price: "$ 7,200.00",
        img: "https://i.pinimg.com/736x/6b/c8/b9/6bc8b9a2cbbddd1da3f2a604dc2300d6.jpg",
        size: "39.8mm"
    },
    {
        id: "hublot-big-bang",
        brand: "hublot",
        name: "Big Bang",
        price: "$ 13,000.00",
        img: "https://asset.bucherer.com/image/upload/c_limit,f_auto,w_1280/Assets/Watches/LVMH/Hublot/Manual/1332-237-5_FP.png",
        size: "41mm"

    },
   ,
     {
        id: "rolex Oystersteel", 
        brand: "rolex",
        name: "Oystersteel Lady-Datejus",
        price: "$ 43,800.00",
        img: "https://i.pinimg.com/1200x/30/23/e2/3023e2c5e12a5563a7b620a601c524ce.jpg",
        size: "41mm"
    }
    

];

// 2. THE RENDER FUNCTION (The "Waiter")
function renderShop(filter = 'all') {
    const grid = document.getElementById('shop-grid');
    grid.innerHTML = ''; 

    // Filtering logic
    const filtered = filter === 'all' 
        ? watches 
        : watches.filter(w => w.brand.toLowerCase() === filter.toLowerCase());

    filtered.forEach(watch => {
        grid.innerHTML += `
            <div class="group cursor-pointer" onclick="window.location.href='product-details.html?watch=${watch.id}'">
                <!-- Kept your exact classes, just added square brackets around [4/5] so Tailwind reads it -->
                <div class="relative aspect-4/5 bg-zinc-900 overflow-hidden mb-6 border border-white/5">
                    <img src="${watch.img}" class="w-full h-full object-cover group-hover:scale-110 transition duration-1000">
                    <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-500"></div>
                </div>
                <div class="text-center px-2">
                    <p class="text-luxury-copper uppercase tracking-[0.3em] text-[10px] mb-2">${watch.brand}</p>
                    <h3 class="serif text-1xl mb-1">${watch.name}</h3>
                    <p class="text-white font-light tracking-widest text-sm">${watch.price}</p>
                </div>
            </div>
        `;
    });
}
function filterShop(brand, btnElement) {
    // UI: Reset all buttons to default style
    const allBtns = document.querySelectorAll('.filter-btn');
    allBtns.forEach(btn => {
        btn.classList.remove('border-luxury-copper', 'text-luxury-copper');
        btn.classList.add('border-white/10', 'text-white');
    });

    // UI: Highlight the clicked button
    btnElement.classList.add('border-luxury-copper', 'text-luxury-copper');
    btnElement.classList.remove('border-white/10', 'text-white');

    // Logic: Render the filtered list
    renderShop(brand);
}

// 3. THE INITIAL LOAD
window.onload = () => renderShop('all');

// year in footer
document.getElementById('current-year').innerText = new Date().getFullYear();