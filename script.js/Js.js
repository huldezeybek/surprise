// Sayfadaki elementleri seçiyoruz
const heartWrapper = document.getElementById('heartWrapper');
const theHeart = document.getElementById('theHeart');
const heartText = document.getElementById('heartText');
const finalMessage = document.getElementById('finalMessage');

// Başlangıç değişkenleri
let clickCount = 0;
let currentScale = 1; // Başlangıç büyüklüğü
const maxClicks = 8; // Kaç tıklamada patlama olacağı

// Kalbe tıklandığında çalışacak fonksiyon
heartWrapper.addEventListener('click', () => {
    // Eğer patlama zaten olduysa, daha fazla tıklamayı engelle
    if (clickCount >= maxClicks) return;

    clickCount++;

    // 1. Kalbi Büyüt
    // Her tıklamada %20 (0.2) büyütelim
    currentScale += 0.2; 
    heartWrapper.style.transform = `scale(${currentScale})`;

    // 2. Patlama Kontrolü (7 veya 8 basım sonrasında)
    if (clickCount >= maxClicks) {
        // --- SEVGİ PATLAMASI! ---
        
        // Kalbi ve eski metni gizle
        heartWrapper.style.display = 'none';

        // Final mesajını göster
        finalMessage.classList.remove('hidden');
        // Küçük bir gecikmeyle animasyonu başlat (daha güzel görünür)
        setTimeout(() => {
            finalMessage.classList.add('visible');
        }, 10);

        // Kalplerin uçuştuğu efekti başlat!
        startHeartExplosion();
    }
});

// Kalp patlaması efekti için fonksiyon (Particles.js kütüphanesini kullanır)
function startHeartExplosion() {
    // Bu kısım Particles.js kütüphanesinin ayarlarıdır.
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 100, // Kaç tane kalp uçuşsun
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#e91e63" // Kalplerin rengi
            },
            "shape": {
                "type": "heart", // Şekil tipi: Kalp (Bu kütüphanenin özel bir şeklidir)
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.7,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 15, // Kalplerin boyutu
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false // Kalpler birbirine bağlanmasın
            },
            "move": {
                "enable": true,
                "speed": 6, // Kalplerin uçuş hızı
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out", // Ekrandan çıkıp gitsinler
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false
                },
                "onclick": {
                    "enable": false
                },
                "resize": true
            }
        },
        "retina_detect": true
    });
}