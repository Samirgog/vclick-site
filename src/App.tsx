import { useEffect } from "react";

const howItWorks = [
  {
    title: "Создайте каталог",
    description:
      "Бизнес настраивает каталог, позиции, ссылки и QR-коды через Telegram-бота, а клиентская витрина открывается в удобном mini app.",
  },
  {
    title: "Поделитесь входной точкой",
    description:
      "Отправьте ссылку или разместите QR-код, чтобы клиент попал в Telegram и сразу открыл mini app без установки отдельного приложения.",
  },
  {
    title: "Получайте и обрабатывайте заказы",
    description:
      "Клиент оформляет заказ в пару кликов, а сотрудники получают уведомления и ведут работу прямо в Telegram-боте.",
  },
];

const featureCards = [
  "Без сайта",
  "Без приложений",
  "Mini app для клиента и бизнеса",
  "Telegram-бот для команды",
];

const metrics = [
  { value: "3 роли", label: "клиент, бизнес и сотрудники в одной системе" },
  { value: "Mini app", label: "для бизнеса и клиента с быстрым интерфейсом" },
  { value: "Telegram-бот", label: "для сотрудников без другой оболочки" },
];

const audienceScreens = {
  client: [
    "/images/client/client-0-entry.PNG",
    "/images/client/client-1-menu.PNG",
    "/images/client/client-2-added-to-cart-items.PNG",
    "/images/client/client-3-cart.PNG",
    "/images/client/client-4-order-confirmation.PNG",
  ],
  business: [
    "/images/business/business-0-entry.PNG",
    "/images/business/business-0-list-catalogs.PNG",
    "/images/business/business-1-flowers-catalog-settings.PNG",
    "/images/business/business-1-flowers-items-settings.PNG",
    "/images/business/business-1-qr-code.PNG",
    "/images/business/business-2-restaurant-catalog-settings.PNG",
    "/images/business/business-2-restaurant-direct-link-and-tables.PNG",
    "/images/business/business-2-restaurant-items-settings.PNG",
    "/images/business/business-2-restaurant-pin-to-foodcourt-settings.PNG",
    "/images/business/business-2-restaurant-qr-code.PNG",
  ],
  stuff: [
    "/images/stuff/stuff-0-entry.PNG",
    "/images/stuff/stuff-1-start-shift.PNG",
    "/images/stuff/stuff-2-orders-notifications.PNG",
    "/images/stuff/stuff-3-finish-shift.PNG",
  ],
} as const;

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative overflow-hidden bg-ink text-white">
      <BackgroundGlow />
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <AudienceSection
          id="clients"
          eyebrow="Для клиентов"
          title="Переход из Telegram в mini app, где заказ ощущается мгновенным."
          description="Клиент заходит через Telegram, открывает удобный mini app и проходит путь от входной точки до подтверждения заказа без регистрации и без скачивания отдельного приложения."
          benefits={[
            "Без регистрации",
            "Mini app внутри Telegram",
            "Оформление в пару кликов",
          ]}
          imageAlt="Клиентский mini app Вклик"
          screens={audienceScreens.client}
          mode="miniapp"
        />
        <AudienceSection
          id="business"
          eyebrow="Для бизнеса"
          title="Управляйте каталогом и входными точками в Telegram, а работайте в удобном mini app."
          description="Владелец или администратор заходит через Telegram и открывает mini app, где можно собирать каталоги, настраивать товары, публиковать ссылки и QR-коды для быстрого запуска продаж."
          benefits={[
            "Каталоги и позиции",
            "Ссылки и QR-коды",
            "Mini app для управления",
          ]}
          imageAlt="Бизнес mini app Вклик"
          screens={audienceScreens.business}
          mode="miniapp"
          reverse
        />
        <AudienceSection
          id="staff"
          eyebrow="Для сотрудников"
          title="Команда работает только через Telegram-бота и не переключается между оболочками."
          description="Сотрудники получают уведомления, начинают смену, контролируют поток заказов и завершают работу прямо в Telegram-боте. Никакой отдельной панели или mini app для персонала не требуется."
          benefits={[
            "Только Telegram-бот",
            "Уведомления по заказам",
            "Быстрая работа по сменам",
          ]}
          imageAlt="Бот для сотрудников Вклик"
          screens={audienceScreens.stuff}
          mode="bot"
        />
        <AdvantageSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-3 font-display text-lg tracking-wide text-white"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-panel">
            <img
              src="/images/logo.png"
              alt="Логотип Вклик"
              className="m-[2px] h-full w-full rounded-[12px] object-contain"
            />
          </span>
          Вклик
        </a>
        <nav className="hidden items-center gap-6 text-sm text-mist md:flex">
          <a href="#how" className="transition hover:text-white">
            Как это работает
          </a>
          <a href="#clients" className="transition hover:text-white">
            Клиентам
          </a>
          <a href="#business" className="transition hover:text-white">
            Бизнесу
          </a>
          <a href="#staff" className="transition hover:text-white">
            Сотрудникам
          </a>
        </nav>
        <a
          href="https://t.me/v_click_business_bot"
          className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/15"
        >
          Попробовать
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28 lg:pt-24">
        <div className="relative z-10">
          <div
            data-reveal
            className="reveal max-w-fit rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-100"
          >
            Все в один клик
          </div>
          <h1
            data-reveal
            className="reveal mt-6 max-w-4xl font-display text-5xl font-semibold leading-none tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Принимайте заказы в один клик прямо в Telegram
          </h1>
          <p
            data-reveal
            className="reveal mt-6 max-w-2xl text-base leading-8 text-mist sm:text-lg"
          >
            Вклик соединяет Telegram-ботов и mini app в единую систему: бизнес
            управляет продажами, клиент быстро оформляет заказ, а сотрудники
            обрабатывают его прямо в Telegram.
          </p>
          <div
            data-reveal
            className="reveal mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="https://t.me/v_click_business_bot"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-100"
            >
              Попробовать
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
            >
              Как это работает
            </a>
          </div>
          <div data-reveal className="reveal mt-12 grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.value}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-panel backdrop-blur"
              >
                <div className="text-2xl font-semibold text-white">
                  {metric.value}
                </div>
                <p className="mt-2 text-sm leading-6 text-mist">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal className="reveal relative">
          <div className="absolute inset-0 rounded-[2rem] bg-hero-radial blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-5 shadow-glow backdrop-blur-xl sm:p-6">
            <div className="grid gap-5">
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-sky-100">
                  Telegram native
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/85">
                  Mini app + bot
                </span>
              </div>
              <div className="compatibility-frame w-full max-w-none">
                <div className="compatibility-glow" />
                <img
                  src="/images/vklik-telegram-logo.png"
                  alt="Совместимость Вклик и Telegram"
                  className="relative z-10 h-auto w-full rounded-[1.15rem] object-cover"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-white/10 bg-slate-950/60 p-4">
                  <div className="text-xs uppercase tracking-[0.22em] text-sky-100/80">
                    Для бизнеса и клиента
                  </div>
                  <div className="mt-3 text-lg font-semibold text-white">
                    Вход через Telegram, удобство через mini app
                  </div>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-slate-950/60 p-4">
                  <div className="text-xs uppercase tracking-[0.22em] text-sky-100/80">
                    Для сотрудников
                  </div>
                  <div className="mt-3 text-lg font-semibold text-white">
                    Вся операционка живет прямо в Telegram-боте
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section
      id="how"
      className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <SectionIntro
        eyebrow="Как это работает"
        title="Telegram становится точкой входа, mini app — удобным интерфейсом, бот — рабочим каналом команды."
        description="Вклик выстраивает понятный путь: бизнес настраивает продажи, клиент быстро делает заказ, а сотрудники ведут операционную работу в Telegram без лишних переключений."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {howItWorks.map((item, index) => (
          <div
            key={item.title}
            data-reveal
            className="reveal group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-panel backdrop-blur transition hover:-translate-y-1 hover:border-white/20"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-lg font-semibold text-white">
              0{index + 1}
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-white">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-mist">
              {item.description}
            </p>
            <div className="mt-6 h-px w-full bg-gradient-to-r from-sky-400/60 to-transparent group-hover:animate-pulseLine" />
          </div>
        ))}
      </div>
    </section>
  );
}

type AudienceSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  benefits: string[];
  imageAlt: string;
  screens: readonly string[];
  mode: "miniapp" | "bot";
  reverse?: boolean;
};

function AudienceSection({
  id,
  eyebrow,
  title,
  description,
  benefits,
  imageAlt,
  screens,
  mode,
  reverse = false,
}: AudienceSectionProps) {
  return (
    <section
      id={id}
      className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <div
        className={`grid items-center gap-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-panel backdrop-blur-xl md:p-8 lg:grid-cols-2 lg:p-10 ${
          reverse
            ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
            : ""
        }`}
      >
        <div data-reveal className="reveal">
          <div className="text-sm uppercase tracking-[0.24em] text-sky-200/80">
            {eyebrow}
          </div>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-mist">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {benefits.map((benefit) => (
              <span
                key={benefit}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white"
              >
                {benefit}
              </span>
            ))}
          </div>
          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-4">
            <div className="text-sm font-medium text-white">
              {mode === "miniapp"
                ? "Открывается как mini app внутри Telegram"
                : "Работает как Telegram-бот для команды"}
            </div>
            <p className="mt-2 text-sm leading-7 text-mist">
              {mode === "miniapp"
                ? "Интерфейс выглядит как полноценное приложение, но пользователь остается в экосистеме Telegram."
                : "Сотрудники получают сообщения, уведомления и рабочие статусы без отдельной панели управления."}
            </p>
          </div>
        </div>
        <div data-reveal className="reveal">
          <FloatingScreens
            screens={screens}
            imageAlt={imageAlt}
            badge={mode === "miniapp" ? "Mini app" : "Bot only"}
          />
        </div>
      </div>
    </section>
  );
}

function FloatingScreens({
  screens,
  imageAlt,
  badge,
}: {
  screens: readonly string[];
  imageAlt: string;
  badge: string;
}) {
  const visibleScreens = screens.slice(0, 5);

  return (
    <div className="relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.16),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-4 sm:p-6">
      <div className="absolute inset-x-10 top-0 h-24 rounded-full bg-sky-300/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-fuchsia-400/10 blur-3xl" />
      <div className="relative mb-5 flex items-center justify-between">
        <div>
          <div className="text-sm text-mist">UX-поток интерфейса</div>
          <div className="mt-1 text-lg font-semibold text-white">
            {imageAlt}
          </div>
        </div>
        <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-sky-100">
          {badge}
        </div>
      </div>
      <div className="relative min-h-[460px] sm:min-h-[560px]">
        {visibleScreens.map((screen, index) => {
          const positions = [
            "left-[1%] top-[14%] rotate-[-12deg]",
            "left-[20%] top-[2%] rotate-[-5deg]",
            "left-[42%] top-[10%] rotate-[6deg]",
            "left-[14%] top-[42%] rotate-[9deg]",
            "left-[56%] top-[36%] rotate-[-8deg]",
          ];

          return (
            <div
              key={screen}
              className={`floating-card absolute w-[36%] min-w-[118px] max-w-[190px] ${positions[index] ?? positions[0]}`}
              style={{
                animationDelay: `${index * 0.8}s`,
                zIndex: index + 1,
              }}
            >
              <div className="group relative">
                <div className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-sky-300/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
                <div className="screen-shell relative overflow-hidden rounded-[1.9rem] border border-white/12 bg-slate-950/90 p-2 shadow-[0_24px_60px_rgba(4,8,20,0.55)] transition duration-500 group-hover:scale-105 group-hover:-translate-y-2 group-hover:border-sky-200/30">
                  <div className="mb-2 flex items-center gap-1.5 px-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                  </div>
                  <img
                    src={screen}
                    alt={`${imageAlt} экран ${index + 1}`}
                    className="aspect-[9/19.5] w-full rounded-[1.35rem] object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AdvantageSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div data-reveal className="reveal">
          <div className="text-sm uppercase tracking-[0.24em] text-sky-200/80">
            Преимущества
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
            Продажи запускаются быстро, а опыт ощущается как полноценный
            цифровой продукт.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-mist">
            Вклик не заставляет выбирать между простотой Telegram и качественным
            интерфейсом. Бизнес и клиент получают mini app внутри привычной
            среды, а сотрудники остаются в боте и не теряют скорость в работе.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {featureCards.map((card) => (
            <div
              key={card}
              data-reveal
              className="reveal rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/[0.03] p-6 shadow-panel transition hover:-translate-y-1 hover:border-sky-200/20"
            >
              <div className="text-xl font-semibold text-white">{card}</div>
              <p className="mt-3 text-sm leading-7 text-mist">
                {card === "Без сайта" &&
                  "Запускайте каталог и прием заказов без отдельной витрины и длинной разработки."}
                {card === "Без приложений" &&
                  "Пользователю не нужно ничего устанавливать: вход происходит через Telegram."}
                {card === "Mini app для клиента и бизнеса" &&
                  "Бизнес и клиенты получают быстрый интерфейс mini app с ощущением нативного продукта."}
                {card === "Telegram-бот для команды" &&
                  "Сотрудники работают прямо в боте: уведомления, смены и обработка заказов всегда под рукой."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24">
      <div
        data-reveal
        className="reveal relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-sky-400/15 via-white/8 to-fuchsia-400/15 px-6 py-10 shadow-glow sm:px-10 sm:py-12"
      >
        <div className="absolute inset-x-0 top-0 h-24 bg-white/10 blur-3xl" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.24em] text-sky-100/80">
              Start now
            </div>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold text-white sm:text-4xl">
              Начните принимать заказы уже сегодня
            </h2>
          </div>
          <a
            href="https://t.me/v_click_business_bot"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-100"
          >
            Перейти в Telegram
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="font-display text-xl text-white">Вклик</div>
          <p className="mt-4 max-w-md text-sm leading-7 text-mist">
            Платформа внутри Telegram, где клиент и бизнес используют mini app,
            а сотрудники работают через бота и обрабатывают заказы в одном
            потоке.
          </p>
        </div>
        <div className="lg:justify-self-end">
          <div className="text-sm text-mist">Контакты</div>
          <div className="mt-4 space-y-3 text-sm text-white">
            <a
              className="block transition hover:text-sky-100"
              href="mailto:hello@vclick.app"
            >
              hello@vclick.app
            </a>
            <a
              className="block transition hover:text-sky-100"
              href="https://t.me/vclick"
            >
              t.me/v_click_business_bot
            </a>
          </div>
          <div className="mt-6 text-xs text-mist/80">
            © 2026 Вклик. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div data-reveal className="reveal max-w-3xl">
      <div className="text-sm uppercase tracking-[0.24em] text-sky-200/80">
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-mist">{description}</p>
    </div>
  );
}

function PanelRow({ title, value }: { title: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <span className="text-sm text-mist">{title}</span>
      <span className="text-sm font-medium text-white">{value}</span>
    </div>
  );
}

function BackgroundGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-[-14rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-sky-400/15 blur-[120px]" />
      <div className="absolute right-[-8rem] top-[16rem] h-[20rem] w-[20rem] rounded-full bg-fuchsia-400/10 blur-[120px]" />
      <div className="absolute left-[-8rem] top-[42rem] h-[20rem] w-[20rem] rounded-full bg-cyan-300/10 blur-[120px]" />
    </div>
  );
}

export default App;
