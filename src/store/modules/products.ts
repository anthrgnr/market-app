import type Category from "@/types/Category";
import type Product from "@/types/Product";

interface State {
  all: Array<Product>,
  categories: Array<Category>
}

const state = () => ({
  all: [
    {
      id: 1,
      nameEN: 'Milk',
      nameRU: 'Молоко',
      nameDE: 'Milch',
      groupId: 1,
    },
    {
      id: 2,
      nameEN: 'Cheese',
      nameRU: 'Сыр',
      nameDE: 'Käse',
      groupId: 1,
    },
    {
      id: 3,
      nameEN: 'Eggs',
      nameRU: 'Яйца',
      nameDE: 'Eier',
      groupId: 1,
    },
    {
      id: 4,
      nameEN: 'Yogurt',
      nameRU: 'Йогурт',
      nameDE: 'Jogurt',
      groupId: 1,
    },
    {
      id: 5,
      nameEN: 'Cream',
      nameRU: 'Сливки',
      nameDE: 'Sahne',
      groupId: 1,
    },
    {
      id: 6,
      nameEN: 'Sour cream',
      nameRU: 'Сметана',
      nameDE: 'Saure Sahne',
      groupId: 1,
    },
    {
      id: 7,
      nameEN: 'Butter',
      nameRU: 'Масло',
      nameDE: 'Butter',
      groupId: 1,
    },
    {
      id: 8,
      nameEN: 'Curd',
      nameRU: 'Творог',
      nameDE: 'Quark',
      groupId: 1,
    },
    {
      id: 9,
      nameEN: 'Tomatoes',
      nameRU: 'Помидоры',
      nameDE: 'Tomaten',
      groupId: 2,
    },
    {
      id: 10,
      nameEN: 'Cucumber',
      nameRU: 'Огурец',
      nameDE: 'Gurken',
      groupId: 2,
    },
    {
      id: 11,
      nameEN: 'Potatoes',
      nameRU: 'Картофель',
      nameDE: 'Kartoffel',
      groupId: 2,
    },
    {
      id: 12,
      nameEN: 'Carrot',
      nameRU: 'Мокровь',
      nameDE: 'Möhre',
      groupId: 2,
    },
    {
      id: 13,
      nameEN: 'Beet',
      nameRU: 'Свекла',
      nameDE: 'Rote Bete',
      groupId: 2,
    },
    {
      id: 14,
      nameEN: 'Onion',
      nameRU: 'Лук',
      nameDE: 'Zwiebeln',
      groupId: 2,
    },
    {
      id: 15,
      nameEN: 'Garlic',
      nameRU: 'Чеснок',
      nameDE: 'Knoblauch',
      groupId: 2,
    },
    {
      id: 16,
      nameEN: 'Pepper',
      nameRU: 'Перец',
      nameDE: 'Paprika',
      groupId: 2,
    },
    {
      id: 17,
      nameEN: 'Cabbage',
      nameRU: 'Капуста',
      nameDE: 'Kohl',
      groupId: 2,
    },
    {
      id: 18,
      nameEN: 'Eggplant',
      nameRU: 'Баклажан',
      nameDE: 'Aubergine',
      groupId: 2,
    },
    {
      id: 19,
      nameEN: 'Apples',
      nameRU: 'Яблоки',
      nameDE: 'Äpfel',
      groupId: 3,
    },
    {
      id: 20,
      nameEN: 'Bananas',
      nameRU: 'Бананы',
      nameDE: 'Bananen',
      groupId: 3,
    },
    {
      id: 21,
      nameEN: 'Pear',
      nameRU: 'Груша',
      nameDE: 'Birne',
      groupId: 3,
    },
    {
      id: 22,
      nameEN: 'Tangerines',
      nameRU: 'Мандарины',
      nameDE: 'Mandarine',
      groupId: 3,
    },
    {
      id: 23,
      nameEN: 'Lemon',
      nameRU: 'Лимон',
      nameDE: 'Citrone',
      groupId: 3,
    },
    {
      id: 24,
      nameEN: 'Oranges',
      nameRU: 'Апельсины',
      nameDE: 'Orangen',
      groupId: 3,
    },
    {
      id: 25,
      nameEN: 'Grapefruits',
      nameRU: 'Грейпфрут',
      nameDE: 'Grapefruite',
      groupId: 3,
    },
    {
      id: 26,
      nameEN: 'Avocado',
      nameRU: 'Авокадо',
      nameDE: 'Avocado',
      groupId: 3,
    },
    {
      id: 27,
      nameEN: 'Kiwi',
      nameRU: 'Киви',
      nameDE: 'Kiwi',
      groupId: 3,
    },
    {
      id: 28,
      nameEN: 'Pineapple',
      nameRU: 'Ананас',
      nameDE: 'Ananas',
      groupId: 3,
    },
    {
      id: 29,
      nameEN: 'Strawberries',
      nameRU: 'Клубника',
      nameDE: 'Erdbeeren',
      groupId: 3,
    },
    {
      id: 30,
      nameEN: 'Raspberries',
      nameRU: 'Малина',
      nameDE: 'Himbeeren',
      groupId: 3,
    },
    {
      id: 31,
      nameEN: 'Bluberries',
      nameRU: 'Голубика',
      nameDE: 'Blaubeeren',
      groupId: 3,
    },
    {
      id: 32,
      nameEN: 'Grape',
      nameRU: 'Виноград',
      nameDE: 'Weintrauben',
      groupId: 3,
    },
    {
      id: 33,
      nameEN: 'Watermelon',
      nameRU: 'Арбуз',
      nameDE: 'Wassermelone',
      groupId: 3,
    },
    {
      id: 32,
      nameEN: 'Melon',
      nameRU: 'Дыня',
      nameDE: 'Hönigmelone',
      groupId: 3,
    },
  ],
  categories: [
    {
      id: 1,
      nameEN: 'Dairy & Eggs',
      nameRU: 'Молочные продукты & Яйца',
      nameDE: 'Milchprodukte & Eier',
      icon: 'fa-solid fa-egg'
    },
    {
      id: 2,
      nameEN: 'Vegetables',
      nameRU: 'Овощи',
      nameDE: 'Gemüse',
      icon: 'fa-solid fa-carrot'
    },
    {
      id: 3,
      nameEN: 'Fruits & Berries',
      nameRU: 'Фрукты & Ягоды',
      nameDE: 'Obst & Beeren',
      icon: 'fa-solid fa-apple-whole'
    },
    {
      id: 4,
      nameEN: 'Beverages',
      nameRU: 'Напитки',
      nameDE: 'Getränke',
      icon: 'fa-solid fa-martini-glass-citrus'
    },
    {
      id: 5,
      nameEN: 'Meat',
      nameRU: 'Мясо',
      nameDE: 'Fleisch',
      icon: 'fa-solid fa-burger'
    },
    {
      id: 6,
      nameEN: 'Bread & Bakery',
      nameRU: 'Хлеб & Выпечка',
      nameDE: 'Brot & Bäkerei',
      icon: 'fa-solid fa-bread-slice'
    },
    {
      id: 7,
      nameEN: 'Pasta & Cereal',
      nameRU: 'Макароны & Крупы',
      nameDE: 'Teigwaren & Grütze',
      icon: 'fa-solid fa-bowl-rice'
    },
    {
      id: 8,
      nameEN: 'Fish & Seafood',
      nameRU: 'Рыба & Морепродукты',
      nameDE: 'Fisch & Meeresfrüchte',
      icon: 'fa-solid fa-shrimp'
    },
    {
      id: 9,
      nameEN: 'Baking',
      nameRU: 'Выпечка',
      nameDE: 'Backen',
      icon: 'fa-solid fa-cookie-bite'
    },
    {
      id: 10,
      nameEN: 'Sweets',
      nameRU: 'Сладости',
      nameDE: 'Süssigkeiten',
      icon: 'fa-solid fa-cake-candles'
    },
    {
      id: 11,
      nameEN: 'Frozen foods',
      nameRU: 'Заморозка',
      nameDE: 'Gefrorenes Essen',
      icon: 'fa-solid fa-snowflake'
    },
    {
      id: 12,
      nameEN: 'Condiments & Spices',
      nameRU: 'Соусы & Специи',
      nameDE: 'Gewürze',
      icon: 'fa-solid fa-pepper-hot'
    },
    {
      id: 13,
      nameEN: 'Snacks',
      nameRU: 'Снеки',
      nameDE: 'Snacks',
      icon: 'fa-solid fa-people-pulling'
    },
    {
      id: 14,
      nameEN: 'Canned goods',
      nameRU: 'Консервы',
      nameDE: 'Konserve',
      icon: 'fa-solid fa-jar'
    }
  ]
});

const getters = {
  productsByGroupId: (state: State) => (groupId: string | number) => {
    return state.all.filter((item: Product) => item.groupId === groupId);
  },
  checkedProductsByGroupId: (state: State) => (groupId: string | number) => {
    return state.all.filter((item: Product) => item.groupId === groupId && item.inBasket);
  },
  checkedCategories: (state: State) => {
    return state.categories.filter((category: Category) => category.hasChecked);
  }
};

const mutations = {
  setInBasket: (state: State, payload: { id: string | number, inBasket: boolean }) => {
    const item = state.all.find((item: Product) => payload.id === item.id);
    const category = state.categories.find((category: Category) => category.id === item!.groupId);
    item!.inBasket = payload.inBasket;
    if (payload.inBasket) { category!.hasChecked = true; }
    else {
      const hasChecked = state.all.filter((item: Product) => item.groupId === category?.id)
        .some((item: Product) => item.inBasket);
      category!.hasChecked = hasChecked;
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations
};
