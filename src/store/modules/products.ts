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
      nameEN: "Milk",
      groupId: 1,
    },
    {
      id: 2,
      nameEN: "Cheese",
      groupId: 1,
    },
  ],
  categories: [
    {
      id: 1,
      nameEN: 'Milk products'
    }
  ]
});

const getters = {
  productsByGroupId: (state: State) => (groupId: string | number) => {
      return state.all.filter((item: Product) => item.groupId === groupId)
  }
};

const actions = {};

const mutations = {};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
