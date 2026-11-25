// Facts for the homepage: only from veon/client.json (C-008, C-010, C-011, company.business_lines, products_services, socials).

export const hotline = { label: "(048) 730-00-30", href: "tel:+380487300030" };
export const ambulance = {
  short: "9000",
  shortHref: "tel:9000",
  city: "(048) 752-9-000",
  cityHref: "tel:+380487529000",
};
export const mobiles = [
  { label: "(096) 380-30-30", href: "tel:+380963803030" },
  { label: "(063) 380-30-30", href: "tel:+380633803030" },
  { label: "(066) 380-30-30", href: "tel:+380663803030" },
];
export const email = { label: "help@odrex-med.com", href: "mailto:help@odrex-med.com" };
export const messengers = [
  { name: "Viber", label: "odrex-med", href: "viber://pa?chatURI=odrex-med" },
  { name: "Telegram", label: "@ODREX_MED_bot", href: "https://t.me/ODREX_MED_bot" },
  { name: "WhatsApp", label: "+380 66 981 52 30", href: "https://wa.me/380669815230" },
];
export const socials = [
  { name: "Facebook", href: "https://www.facebook.com/odrexmed" },
  { name: "Instagram", href: "https://www.instagram.com/odrexmed/" },
  { name: "YouTube", href: "https://www.youtube.com/@odrexmed" },
];

export type City = "odesa" | "pivdenne" | "chornomorsk";
export interface Address {
  id: string;
  city: City;
  cityName: string;
  street: string;
  short: string;
  type: string;
  hours: string;
  main?: boolean;
}

// Order along the coast line: south-west → north-east (concept: order on the scheme is a client decision).
export const addresses: Address[] = [
  { id: "chornomorsk", city: "chornomorsk", cityName: "Чорноморськ", street: "вул. Захисників України, 23", short: "Чорноморськ", type: "Поліклініка всієї сім'ї", hours: "Графік уточнюйте за телефоном" },
  { id: "filatova", city: "odesa", cityName: "Одеса", street: "вул. Філатова, 38", short: "Філатова", type: "Багатопрофільна лікарня", hours: "Пн–Сб 8:00–20:00" },
  { id: "rozkydailivska", city: "odesa", cityName: "Одеса", street: "вул. Розкидайлівська, 69/71", short: "Розкидайлівська", type: "Головний медичний дім · приймальне відділення", hours: "Пн–Нд цілодобово", main: true },
  { id: "sakharova", city: "odesa", cityName: "Одеса", street: "вул. Академіка Сахарова, 1Б/2", short: "Сахарова", type: "Поліклініка всієї сім'ї", hours: "Графік уточнюйте за телефоном" },
  { id: "raiduzhnyi", city: "odesa", cityName: "Одеса", street: "ж/м «Райдужний», 19/2", short: "Райдужний", type: "Поліклініка всієї сім'ї", hours: "Графік уточнюйте за телефоном" },
  { id: "pivdenne", city: "pivdenne", cityName: "Південне", street: "вул. Шевченка, 18/4", short: "Південне", type: "Поліклініка всієї сім'ї", hours: "Графік уточнюйте за телефоном" },
];

export const mapHref = (a: Address) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${a.street}, ${a.cityName}, Одеська область`)}`;

export interface Group { id: string; title: string; items: string[]; }

export const groups: Group[] = [
  { id: "stacionar", title: "Стаціонар і хірургія", items: ["Багатопрофільний стаціонар", "Приймальне відділення", "Інтенсивна терапія", "Загальна хірургія", "Ендоскопічна хірургія", "Ендокринна хірургія", "Торакальна хірургія", "Судинна хірургія", "Онкохірургія", "Нейрохірургія", "Пластична хірургія", "Баріатрія"] },
  { id: "diagnostyka", title: "Діагностика", items: ["КТ", "МРТ", "Рентген", "Мамографія", "УЗД", "Ендоскопія, у т. ч. капсульна", "ЕЕГ", "Лабораторія", "Алерготести", "Кабінет діагностики слуху"] },
  { id: "kardio", title: "Кардіологія і кардіохірургія", items: ["Кардіологія", "Кардіохірургія", "Хірургія серця та магістральних судин", "Аритмологія", "Інтервенційна радіологія"] },
  { id: "insult", title: "Інсульт і неврологія", items: ["Центр лікування інсультів", "Неврологія"] },
  { id: "onko", title: "Онкологія", items: ["Онкологія", "Мамологія", "Гематологія"] },
  { id: "pediatriya", title: "Педіатрія", items: ["Дитяча поліклініка", "Дитячий стаціонар", "Дитяча хірургія та урологія", "Дитяча ортопедія і травматологія"] },
  { id: "simeyna-med", title: "Сімейна медицина", items: ["Сімейний лікар", "Декларація з сімейним лікарем (НСЗУ)", "4 поліклініки всієї сім'ї"] },
  { id: "zhinoche", title: "Жіноче здоров'я та амбулаторні напрями", items: ["Жіноча консультація", "Гінекологія", "Урологія", "Ендокринологія", "Гастроентерологія", "ЛОР", "Офтальмологія", "Дерматологія", "Пульмонологія", "Нефрологія", "Проктологія", "Психологія"] },
  { id: "reabilitaciya", title: "Реабілітація", items: ["Реабілітаційний стаціонар", "Фізіотерапія та реабілітація"] },
  { id: "stomatologiya", title: "Стоматологія Sirius Dent", items: ["Стоматологія", "Щелепно-лицева хірургія"] },
  { id: "vyprobuvannya", title: "Клінічні випробування", items: ["Клінічні випробування"] },
];

export const checkups = ["Базовий", "Кардіо", "Спортивний", "Онко", "Жіночий гормональний", "Вагітність", "Дитячий"];
export const screenings = ["Пренатальний", "Чоловіче здоров'я", "Шийка матки", "Щитоподібна залоза", "Родимки"];
