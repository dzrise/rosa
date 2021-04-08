import { createStore, createLogger } from "vuex";
// import createPersistedState from "vuex-persistedstate";
import Categories from "@/store/modules/Categories";
import Products from "@/store/modules/Products";
import Sections from "@/store/modules/Sections";
import Cart from "@/store/modules/Cart";
import Users from "@/store/modules/Users";
import Languages from "@/store/modules/Languages";
import Global from "@/store/modules/Global";
import Receipts from "./modules/Receipts";
import Places from "./modules/Places";
import Packages from "./modules/Packages";
import Hotels from "./modules/Hotels";
import bedTypes from "./modules/BedTypes";
import foodTypes from "./modules/FoodTypes";
import hotelBrands from "./modules/HotelBrands";
import facilities from "./modules/Facilities";
import locations from "./modules/Locations";

import state from "@/store/modules/state";
import mutations from "@/store/modules/mutations";
import getters from "@/store/modules/getters";
import actions from "@/store/modules/actions";

const store = createStore({
	namespaced: true,
	state,
	mutations,
	getters,
	actions,
	modules: {
		users: Users,
		settings: Global,
		categories: Categories,
		products: Products,
		packages: Packages,
		cart: Cart,
		sections: Sections,
		languages: Languages,
		receipts: Receipts,
		places: Places,
		hotels: Hotels,
		bedTypes,
		foodTypes,
		hotelBrands,
		facilities,
		locations
		// baskets: Baskets,
		// user: User,
		// orders: Orders,
	},
	plugins: [
		createLogger({
			collapsed: false,
			filter(mutation, stateBefore, stateAfter) {
				return mutation.type !== "aBlocklistedMutation";
			},
			actionFilter(action, state) {
				return action.type !== "aBlocklistedAction";
			},
			transformer(state) {
				return state.subTree;
			},
			mutationTransformer(mutation) {
				return mutation.type;
			},
			actionTransformer(action) {
				return action.type;
			},
			logActions: true,
			logMutations: true,
			logger: console
		})
		// createPersistedState()
	]

	//plugins: [createPersistedState()],
});

export default store;
