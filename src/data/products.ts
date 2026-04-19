export interface ProductOption {
  label: string;
  values: string[];
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  price: number;
  priceLabel: string;
  badge?: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  options: ProductOption[];
  images: { url: string; alt: string }[];
}

export const products: Product[] = [
  {
    id: 'roksen',
    name: 'Роксен',
    subtitle: 'Угловой диван на заказ',
    category: 'Угловые диваны',
    price: 89000,
    priceLabel: 'от 89 000 ₽',
    badge: 'Хит продаж',
    description:
      'Диван «Роксен» — это воплощение комфорта и современного стиля. Глубокая посадка, широкие подлокотники и съёмные чехлы делают его идеальным выбором для семей. Изготавливается строго по вашим размерам.',
    features: [
      'Каркас из массива берёзы — прочный и долговечный',
      'Наполнитель: пружинный блок + пенополиуретан 35 кг/м³',
      'Съёмный и стирающийся чехол',
      'Механизм трансформации «дельфин» или «еврокнижка»',
      'Ящик для хранения постельного белья',
      'Изготовление от 10 рабочих дней',
    ],
    specs: [
      { label: 'Габариты', value: '280 × 195 × 85 см' },
      { label: 'Спальное место', value: '200 × 140 см' },
      { label: 'Высота сиденья', value: '42 см' },
      { label: 'Высота спинки', value: '85 см' },
      { label: 'Ткань', value: 'Велюр, рогожка, жаккард, ткань кат. 1–5' },
      { label: 'Ножки', value: 'Металл хром / дерево венге / дерево бук' },
      { label: 'Гарантия', value: '3 года' },
      { label: 'Производство', value: 'Россия, Кемерово' },
    ],
    options: [
      {
        label: 'Расположение угла',
        values: ['Правый', 'Левый'],
      },
      {
        label: 'Механизм',
        values: ['Еврокнижка', 'Дельфин', 'Без механизма'],
      },
      {
        label: 'Ткань',
        values: ['Велюр бежевый', 'Велюр серый', 'Велюр оливковый', 'Рогожка коричневая', 'Жаккард'],
      },
      {
        label: 'Ножки',
        values: ['Хром', 'Дерево бук', 'Дерево венге'],
      },
    ],
    images: [
      {
        url: 'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/01e4b35b-7a69-43a5-8731-b05899125dc4.jpg',
        alt: 'Диван Роксен — вид спереди',
      },
      {
        url: 'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/09ae768e-159e-48cf-9a3e-a80077dae9df.jpg',
        alt: 'Диван Роксен — вид сбоку',
      },
      {
        url: 'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/d7d41a56-ce02-4119-b8c0-dd1db070c8bf.jpg',
        alt: 'Диван Роксен — детали обивки',
      },
      {
        url: 'https://cdn.poehali.dev/projects/0f55b065-18d0-4e34-b9d4-06970c3f84ce/files/70cf36fb-1067-4cca-b102-be4f796aaed8.jpg',
        alt: 'Диван Роксен в интерьере',
      },
    ],
  },
];

export const getProduct = (id: string) => products.find(p => p.id === id);
