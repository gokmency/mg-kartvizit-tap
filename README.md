# MG İklimlendirme — Dijital Kartvizit (NFC Tap)

**MG İklimlendirme (Isıtma & Soğutma Sistemleri)** için özel olarak tasarlanmış, mobil öncelikli (mobile-first), NFC ve QR kod ile tek dokunuşta açılabilen modern dijital kartvizit web uygulaması.

---

## Özellikler

- **Mobil Öncelikli & Ultra Hızlı**: Telefonlarda NFC kart veya QR okutulduğunda anında yüklenen optimize edilmiş tek sayfa deneyimi.
- **Orijinal Marka İkonları**:
  - **WhatsApp**: Tek tıkla hızlı mesaj başlatma (`#25D366` resmi yeşil ikon).
  - **Instagram**: Resmi renk geçişli degrade kamera ikonu ile profile doğrudan erişim.
  - **Google Haritalar**: Orijinal 4 renkli Google Maps iğnesi ile ofise tek tıkla yol tarifi.
  - **Doğrudan Arama**: Mobil cep telefonu ve ofis sabit hattı için hızlı arama butonları.
  - **Web & E-Posta**: Kurumsal web sitesi ve doğrudan e-posta gönderme bağlantıları.
- **Rehbere Kaydet (vCard - .vcf)**: Tek dokunuşla tüm iletişim bilgilerini akıllı telefon rehberine indirme ve ekleme.
- **Kurumsal Tasarım**: MG İklimlendirme kırmızı (ısıtma) ve mavi (soğutma) dinamik renk paleti, koyu lacivert tonları, zarif kartlar ve akıcı mikro-animasyonlar.
- **Tamamen Bağımsız & Yerel**: Harici SaaS veya servis sağlayıcı bağımlılığı olmaksızın kendi sunucunuzda veya Cloudflare/Vercel üzerinde barındırılabilir.

---

## Kullanılan Teknolojiler

- **Framework**: [TanStack Start](https://tanstack.com/start) (Full-stack React)
- **UI Kütüphanesi**: React 19
- **Stil & CSS**: Tailwind CSS v4
- **İkonlar**: Resmi Marka Vektörleri & Lucide Icons
- **Sunucu & Dağıtım**: Nitro / Vite

---

## Kurulum ve Yerel Çalıştırma

Projeyi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin:

### Gereksinimler
- Node.js (v20 veya üzeri)
- npm, pnpm veya bun

### 1. Bağımlılıkları Yükleyin
```bash
npm install
```

### 2. Geliştirme Sunucusunu Başlatın
```bash
npm run dev
```

Tarayıcınızda açın:
```
http://localhost:3000
```
*(veya terminalde belirtilen port)*

### 3. Canlı / Üretim Sürümü (Build)
```bash
npm run build
npm run preview
```

---

## Lisans ve Haklar

Bu proje **MG İklimlendirme** adına hazırlanmıştır.  
Tasarım & Geliştirme: [Grainz Digital](https://grainzdigital.com)

