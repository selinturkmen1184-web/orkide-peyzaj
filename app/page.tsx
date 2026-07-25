"use client";

import type { FormEvent, ReactNode } from "react";
import Image from "next/image";

const phoneDisplay = "0532 794 30 52";
const phone = "905327943052";

const navItems = [
  ["Hizmetler", "#hizmetler"],
  ["Süreç", "#surec"],
  ["Yaklaşım", "#projeler"],
  ["S.S.S.", "#sss"],
];

const services = [
  {
    number: "01",
    title: "Peyzaj Planlama & Proje",
    text: "Arazinin güneş, rüzgâr, toprak ve su koşullarını analiz ediyor; uygulamadan önce bahçenizi çizimlerle görünür hâle getiriyoruz.",
    points: ["Yerinde keşif ve ölçüm", "2B bitkilendirme planı", "3B görselleştirme"],
  },
  {
    number: "02",
    title: "Bahçe Düzenleme & Uygulama",
    text: "Toprak hazırlığından yürüyüş yoluna, bitkilendirmeden aydınlatmaya kadar bütün uygulamayı tek ekip ve tek takvimle yönetiyoruz.",
    points: ["Toprak hazırlığı ve drenaj", "Taş, bordür ve istinat işleri", "Aydınlatma ve su öğeleri"],
  },
  {
    number: "03",
    title: "Otomatik Sulama",
    text: "Bitki gruplarına göre hesaplanan sprink ve damlama sistemleriyle bahçenizin ihtiyacı kadar, doğru zamanda sulanmasını sağlıyoruz.",
    points: ["Sprink ve damlama projesi", "Zaman ayarlı kontrol", "Bakım ve arıza servisi"],
  },
  {
    number: "04",
    title: "Ağaç & Çit Budama",
    text: "Meyve ve süs ağaçlarında doğru mevsimde doğru tekniği uyguluyor, alanı budama atıklarıyla bırakmadan temiz teslim ediyoruz.",
    points: ["Şekil ve gençleştirme", "Çit ve form kesimi", "Tehlikeli dal alımı"],
  },
  {
    number: "05",
    title: "Çim Serimi & Rulo Çim",
    text: "Zemin tesviyesinden ilk biçime kadar süreci yönetiyor; iklime uygun rulo ya da tohumlu çimle alanı hızla yeşile döndürüyoruz.",
    points: ["Zemin tesviyesi", "Rulo ve tohumlu çim", "Gübreleme ve havalandırma"],
  },
  {
    number: "06",
    title: "Periyodik Bahçe Bakımı",
    text: "Villa, site ve iş yerleri için çim biçimi, budama, gübreleme ve sulama kontrollerini planlı bir bakım takvimine bağlıyoruz.",
    points: ["Aylık ve mevsimlik plan", "Hastalık ve zararlı takibi", "Site bakım hizmeti"],
  },
];

const process = [
  {
    number: "01",
    title: "Ücretsiz keşif",
    text: "Bahçenize geliyor; alanı, ihtiyaçları ve bütçenizi birlikte netleştiriyoruz.",
  },
  {
    number: "02",
    title: "Tasarım & teklif",
    text: "Çözümü görselleştiriyor, kalem kalem ve sürpriz içermeyen teklif sunuyoruz.",
  },
  {
    number: "03",
    title: "Uygulama",
    text: "Kendi ekibimizle, anlaşılan takvimde çalışıyor ve ilerlemeyi düzenli paylaşıyoruz.",
  },
  {
    number: "04",
    title: "Teslim & bakım",
    text: "Alanı temiz teslim ediyor, bakım planını ve yazılı garanti koşullarını aktarıyoruz.",
  },
];

const audiences = [
  {
    title: "Villa & müstakil ev",
    text: "Bahçeyi ailenizin yaşam biçimine göre kurgular; çimden pergolaya bütün detayları tek planda toplarız.",
    icon: "home",
  },
  {
    title: "Site & toplu yaşam",
    text: "Ortak alanları yıl boyu düzenli tutan uygulama ve sözleşmeli bakım programları oluştururuz.",
    icon: "buildings",
  },
  {
    title: "Otel, iş yeri & kamu",
    text: "Markanızın ilk izlenimini güçlendiren, az bakım ve su isteyen dört mevsim çözümler kurarız.",
    icon: "briefcase",
  },
];

const faqs = [
  {
    q: "Keşif ve fiyat teklifi ücretli mi?",
    a: "Hayır. Hizmet bölgelerimiz içindeki ilk keşif ve fiyat teklifi ücretsizdir. Alanı yerinde gördükten sonra ihtiyaçları ve seçenekleri birlikte netleştiririz.",
  },
  {
    q: "Bir bahçe düzenlemesi ne kadar sürer?",
    a: "Süre; alanın büyüklüğü, altyapı ihtiyacı ve seçilen uygulamalara göre değişir. Keşif sonrası teklifinizde başlangıç ve tahmini teslim takvimi açıkça yer alır.",
  },
  {
    q: "Sadece budama veya sulama sistemi yaptırabilir miyim?",
    a: "Evet. Komple peyzaj uygulamasının yanında budama, rulo çim, sulama sistemi ve dönemsel bakım gibi tekil hizmetleri de üstleniyoruz.",
  },
  {
    q: "Uygulama sonrası bakım desteği veriyor musunuz?",
    a: "Evet. Teslimde temel bakım takvimini paylaşır; ihtiyaca göre aylık veya mevsimlik profesyonel bakım planı oluştururuz.",
  },
  {
    q: "Hangi bölgelerde hizmet veriyorsunuz?",
    a: "Antalya, Muğla, İzmir, Aydın, Denizli, Mersin, Manisa ve Isparta başta olmak üzere Ege ve Akdeniz Bölgeleri genelinde hizmet veriyoruz.",
  },
];

const gallery = [
  {
    src: "/images/hero-villa.jpg",
    title: "Villa bahçesi",
    text: "Sakin, dengeli ve dört mevsim yaşayan dış mekânlar",
    className: "galleryLarge",
  },
  {
    src: "/images/project-path.jpg",
    title: "Doğal yürüyüş yolu",
    text: "Bitki dokusuyla bütünleşen malzeme seçimi",
    className: "",
  },
  {
    src: "/images/project-fern.jpg",
    title: "Yoğun bitkilendirme",
    text: "Katmanlı yeşil doku ve güçlü mevsim etkisi",
    className: "",
  },
  {
    src: "/images/project-stone.jpg",
    title: "Bahçe aydınlatması",
    text: "Gündüz kadar geceleri de yaşayan bahçeler",
    className: "galleryWide",
  },
];

function Icon({
  name,
  size = 20,
}: {
  name: string;
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const paths: Record<string, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.08 9.91a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.9Z" />
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </>
    ),
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </>
    ),
    buildings: (
      <>
        <path d="M4 21V6l8-3v18" />
        <path d="M12 9h8v12" />
        <path d="M7 9h2M7 13h2M7 17h2M15 12h2M15 16h2" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
      </>
    ),
    map: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
  };

  return <svg {...common}>{paths[name]}</svg>;
}

function Logo() {
  return (
    <span className="brand">
      <span className="brandMark" aria-hidden="true">
        <svg viewBox="0 0 48 48">
          <path d="M24 8c6 4 9 9 8 15-5 0-9-2-12-6-2 5-5 8-10 10 1-9 5-15 14-19Z" />
          <path d="M15 30c6-2 11-1 15 3-3 4-8 6-15 5-3-2-3-5 0-8Z" />
          <path d="M30 25c5-2 9-1 12 3-2 5-6 8-12 8-3-3-3-7 0-11Z" />
        </svg>
      </span>
      <span>
        <strong>Orkide Peyzaj</strong>
        <small>Plan · Proje · Uygulama</small>
      </span>
    </span>
  );
}

function CtaLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <a className={`button ${secondary ? "buttonSecondary" : ""}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" />
    </a>
  );
}

function ContactForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Merhaba Orkide Peyzaj, ücretsiz keşif talep ediyorum.",
      `Ad Soyad: ${data.get("name") || "-"}`,
      `Telefon: ${data.get("phone") || "-"}`,
      `Hizmet: ${data.get("service") || "-"}`,
      `Yaklaşık alan: ${data.get("area") || "-"} m²`,
      `İlçe / Semt: ${data.get("location") || "-"}`,
      `Not: ${data.get("note") || "-"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form className="contactForm" onSubmit={submit}>
      <div className="formIntro">
        <span>Ücretsiz keşif formu</span>
        <p>Form, talebinizi doğrudan WhatsApp üzerinden bize iletir.</p>
      </div>
      <div className="formGrid">
        <label>
          <span>Ad Soyad *</span>
          <input name="name" placeholder="Adınız Soyadınız" required />
        </label>
        <label>
          <span>Telefon *</span>
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            placeholder="05xx xxx xx xx"
            required
          />
        </label>
        <label className="full">
          <span>İlgilendiğiniz hizmet *</span>
          <select name="service" defaultValue="" required>
            <option value="" disabled>
              Hizmet seçiniz
            </option>
            {services.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Diğer / Emin değilim">Diğer / Emin değilim</option>
          </select>
        </label>
        <label>
          <span>Yaklaşık alan</span>
          <input name="area" type="number" min="1" placeholder="Örn. 250" />
        </label>
        <label>
          <span>İlçe / Semt</span>
          <input name="location" placeholder="Örn. Konyaaltı" />
        </label>
        <label className="full">
          <span>Kısaca ne yaptırmak istiyorsunuz?</span>
          <textarea
            name="note"
            rows={4}
            placeholder="Örn. 300 m² bahçeye rulo çim, otomatik sulama ve çit bitkisi düşünüyoruz."
          />
        </label>
      </div>
      <button className="formSubmit" type="submit">
        <span>Talebi WhatsApp’tan gönder</span>
        <Icon name="arrow" />
      </button>
      <small className="privacy">
        Bilgileriniz yalnızca size dönüş yapmak için kullanılır.
      </small>
    </form>
  );
}

export default function Home() {
  return (
    <>
      <header className="siteHeader">
        <a href="#top" aria-label="Orkide Peyzaj ana sayfa">
          <Logo />
        </a>
        <nav className="desktopNav" aria-label="Ana menü">
          {navItems.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>
        <div className="headerActions">
          <a className="headerPhone" href={`tel:+${phone}`}>
            <Icon name="phone" size={17} />
            {phoneDisplay}
          </a>
          <a className="headerCta" href="#iletisim">
            Ücretsiz keşif
          </a>
        </div>
        <details className="mobileMenu">
          <summary aria-label="Menüyü aç">
            <Icon name="menu" size={24} />
          </summary>
          <nav aria-label="Mobil menü">
            {navItems.map(([label, href]) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
            <a href="#iletisim">Ücretsiz keşif</a>
          </nav>
        </details>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="heroImage" role="img" aria-label="Peyzaj düzenlemesi yapılmış geniş villa bahçesi" />
          <div className="heroShade" />
          <div className="heroContent shell">
            <div className="heroCopy">
              <p className="eyebrow light">
                <span />
                1997’den beri · Ege & Akdeniz
              </p>
              <h1 id="hero-title">
                Doğayı
                <em> yaşam alanınıza</em>
                taşıyoruz.
              </h1>
              <p className="heroLead">
                Plandan projeye, uygulamadan bakıma kadar bahçenizin tamamını
                tek elden üstleniyoruz. Ne alacağınızı işe başlamadan önce net
                biçimde görüyorsunuz.
              </p>
              <div className="heroButtons">
                <CtaLink href="#iletisim">Ücretsiz keşif isteyin</CtaLink>
                <a className="textLink lightLink" href={`tel:+${phone}`}>
                  <Icon name="phone" size={18} />
                  {phoneDisplay}
                </a>
              </div>
            </div>
            <div className="heroNote">
              <span className="heroNoteLabel">Tek elden</span>
              <strong>Planlama, uygulama ve yıl boyu bakım.</strong>
              <a href="#hizmetler">
                Hizmetleri inceleyin <Icon name="arrow" size={17} />
              </a>
            </div>
          </div>
          <div className="heroScroll">
            <span>Keşfet</span>
            <i />
          </div>
        </section>

        <section className="trustBar" aria-label="Hizmet özeti">
          <div className="shell trustGrid">
            <div>
              <strong>1997</strong>
              <span>yılından beri sahada</span>
            </div>
            <div>
              <strong>Ücretsiz</strong>
              <span>keşif ve fiyat teklifi</span>
            </div>
            <div>
              <strong>Tek ekip</strong>
              <span>proje, uygulama ve bakım</span>
            </div>
            <div>
              <strong>8 il</strong>
              <span>Ege & Akdeniz genelinde</span>
            </div>
          </div>
        </section>

        <section className="intro section">
          <div className="shell introGrid">
            <div>
              <p className="eyebrow">
                <span />
                Orkide yaklaşımı
              </p>
              <span className="yearWatermark">27+</span>
            </div>
            <div className="introStatement">
              <h2>
                İyi bir bahçe yalnızca güzel görünmez;{" "}
                <em>yaşamınıza iyi gelir.</em>
              </h2>
              <div className="introBody">
                <p>
                  Her araziyi kendi iklimi, toprağı ve kullanım biçimiyle ele
                  alıyoruz. Doğru bitkiyi doğru yere yerleştiriyor; bakım yükünü
                  ve su tüketimini daha tasarım aşamasında düşünüyoruz.
                </p>
                <p>
                  Sonuç; ilk gün etkileyici, yıllar geçtikçe daha da karakterli
                  hâle gelen, sürdürülebilir bir dış mekân.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="services section" id="hizmetler">
          <div className="shell">
            <div className="sectionHeading">
              <div>
                <p className="eyebrow light">
                  <span />
                  Hizmetlerimiz
                </p>
                <h2>Bahçenin tamamı, tek ekipten.</h2>
              </div>
              <p>
                Tasarımı bir firmaya, uygulamayı başka bir ekibe yaptırmanız
                gerekmez. Projeden son bitkiye kadar sorumluluk tek adreste.
              </p>
            </div>

            <div className="serviceGrid">
              {services.map((service) => (
                <article className="serviceCard" key={service.number}>
                  <span className="serviceNumber">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>
                        <Icon name="check" size={18} />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a href="#iletisim" aria-label={`${service.title} için teklif alın`}>
                    Teklif alın <Icon name="arrow" size={18} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process section" id="surec">
          <div className="shell">
            <div className="processIntro">
              <div>
                <p className="eyebrow">
                  <span />
                  Nasıl çalışıyoruz
                </p>
                <h2>
                  İlk telefondan teslimata
                  <em> dört net adım.</em>
                </h2>
              </div>
              <div className="processPromise">
                <strong>Belirsizliği ortadan kaldırıyoruz.</strong>
                <p>
                  Süreyi, kapsamı ve maliyeti baştan yazıyor; uygulama boyunca
                  düzenli iletişim kuruyoruz.
                </p>
              </div>
            </div>
            <ol className="processList">
              {process.map((item) => (
                <li key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ol>
            <div className="promiseStrip">
              <div>
                <Icon name="check" />
                <span>
                  <strong>Tek elden sorumluluk</strong>
                  Tasarım ve uygulama aynı ekipte
                </span>
              </div>
              <div>
                <Icon name="check" />
                <span>
                  <strong>Sürpriz maliyet yok</strong>
                  Kalem kalem yazılı teklif
                </span>
              </div>
              <div>
                <Icon name="check" />
                <span>
                  <strong>Yazılı garanti</strong>
                  Kapsamı baştan net koşullar
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="gallery section" id="projeler">
          <div className="shell">
            <div className="sectionHeading galleryHeading">
              <div>
                <p className="eyebrow">
                  <span />
                  Tasarım yaklaşımımız
                </p>
                <h2>Doğal, zamansız ve size ait.</h2>
              </div>
              <p>
                Villa bahçelerinden ortak yaşam alanlarına; malzeme, bitki ve
                ışığı aynı hikâyenin parçaları olarak tasarlıyoruz.
              </p>
            </div>
            <div className="galleryGrid">
              {gallery.map((item) => (
                <figure className={item.className} key={item.src}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes={
                      item.className === "galleryWide"
                        ? "(max-width: 800px) 100vw, 1200px"
                        : "(max-width: 800px) 100vw, 600px"
                    }
                  />
                  <figcaption>
                    <span>
                      <strong>{item.title}</strong>
                      {item.text}
                    </span>
                    <small>Temsili görsel</small>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="audience section">
          <div className="shell">
            <div className="sectionHeading compact">
              <div>
                <p className="eyebrow">
                  <span />
                  Kimler için çalışıyoruz
                </p>
                <h2>Her ölçekte aynı özen.</h2>
              </div>
            </div>
            <div className="audienceGrid">
              {audiences.map((audience) => (
                <article key={audience.title}>
                  <span className="audienceIcon">
                    <Icon name={audience.icon} size={28} />
                  </span>
                  <h3>{audience.title}</h3>
                  <p>{audience.text}</p>
                  <a href="#iletisim">
                    Keşif planlayın <Icon name="arrow" size={18} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="regionBanner">
          <div className="regionImage" />
          <div className="shell regionContent">
            <div>
              <p className="eyebrow light">
                <span />
                Hizmet bölgelerimiz
              </p>
              <h2>Ege’den Akdeniz’e, bahçenize geliyoruz.</h2>
            </div>
            <div className="regionInfo">
              <Icon name="map" size={26} />
              <p>
                Antalya · Muğla · İzmir · Aydın · Denizli · Mersin · Manisa ·
                Isparta
              </p>
              <a href="#iletisim">
                Bölgenizi sorun <Icon name="arrow" size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="faq section" id="sss">
          <div className="shell faqGrid">
            <div className="faqIntro">
              <p className="eyebrow">
                <span />
                S.S.S.
              </p>
              <h2>Aklınızdaki soruları netleştirelim.</h2>
              <p>
                Aradığınız cevabı bulamadıysanız doğrudan arayın; telefonda da
                memnuniyetle yardımcı oluyoruz.
              </p>
              <a className="textLink" href={`tel:+${phone}`}>
                <Icon name="phone" size={18} />
                {phoneDisplay}
              </a>
            </div>
            <div className="faqList">
              {faqs.map((item, index) => (
                <details key={item.q} open={index === 0}>
                  <summary>
                    <span>{item.q}</span>
                    <i />
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section" id="iletisim">
          <div className="shell contactGrid">
            <div className="contactCopy">
              <p className="eyebrow light">
                <span />
                Ücretsiz keşif
              </p>
              <h2>
                Bahçenizi birlikte
                <em> hayal edelim.</em>
              </h2>
              <p>
                Formu doldurun ya da doğrudan arayın. Genellikle aynı gün içinde
                dönüş yapıyor, uygun bir günde bahçenize geliyoruz.
              </p>
              <div className="contactDetails">
                <a href={`tel:+${phone}`}>
                  <span>
                    <Icon name="phone" size={22} />
                  </span>
                  <small>Telefon</small>
                  <strong>{phoneDisplay}</strong>
                </a>
                <a
                  href={`https://wa.me/${phone}?text=${encodeURIComponent(
                    "Merhaba Orkide Peyzaj, bahçem için bilgi almak istiyorum.",
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="whatsappDot">WA</span>
                  <small>WhatsApp</small>
                  <strong>Hemen yazın</strong>
                </a>
                <div>
                  <span>
                    <Icon name="clock" size={22} />
                  </span>
                  <small>Çalışma saatleri</small>
                  <strong>Pzt–Cmt, 08:00–18:00</strong>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footerTop">
          <div className="footerBrand">
            <Logo />
            <p>
              Güzel bir yaşam için Orkide Peyzaj. Ege ve Akdeniz genelinde
              peyzaj tasarımı, uygulama, sulama ve bakım hizmetleri.
            </p>
          </div>
          <div>
            <h2>Keşfet</h2>
            <nav aria-label="Alt menü">
              {navItems.map(([label, href]) => (
                <a href={href} key={href}>
                  {label}
                </a>
              ))}
              <a href="#iletisim">İletişim</a>
            </nav>
          </div>
          <div>
            <h2>İletişim</h2>
            <a href={`tel:+${phone}`}>{phoneDisplay}</a>
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(
                "Merhaba Orkide Peyzaj, bilgi almak istiyorum.",
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp ile yazın
            </a>
            <span>Pzt–Cmt, 08:00–18:00</span>
          </div>
          <div>
            <h2>Hizmet bölgeleri</h2>
            <span>Antalya, Muğla, İzmir, Aydın, Denizli, Mersin, Manisa ve Isparta.</span>
          </div>
        </div>
        <div className="shell footerBottom">
          <span>© 2026 Orkide Peyzaj. Tüm hakları saklıdır.</span>
          <a href="#top">Yukarı dön ↑</a>
        </div>
      </footer>

      <a
        className="floatingWhatsapp"
        href={`https://wa.me/${phone}?text=${encodeURIComponent(
          "Merhaba Orkide Peyzaj, bahçem için bilgi almak istiyorum.",
        )}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp üzerinden yazın"
      >
        <span>WA</span>
        <strong>Hızlı iletişim</strong>
      </a>
    </>
  );
}
