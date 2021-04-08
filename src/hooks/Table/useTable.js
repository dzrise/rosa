import { useRoute, useRouter } from "vue-router";
import { reactive, computed, ref } from "vue";

export function useBaseTable(props, context) {
	const router = useRouter();
	const route = useRoute();
	const queryPage = ref(+route.query.page || 0);
	const tablePageParams = reactive({
		total: props.table.items.length,
		itemsOnPage: 10,
		currentPage: queryPage.value
	});

	const totalPages = computed(() => Math.floor(tablePageParams.total / tablePageParams.itemsOnPage));
	const displayItems = computed(() => {
		const size = tablePageParams.itemsOnPage;
		const paginationArr = props.table.items.slice();
		const result = [];
		paginationArr.forEach((_, index) => {
			const item = paginationArr.slice(index * size, index * size + size);
			if (item.length) {
				result.push(item);
			}
		});
		return {
			page: tablePageParams.currentPage,
			items: result[tablePageParams.currentPage]
		};
	});

	const toCurrentItem = id => {
		router.push(`${props.routeName}/${id}`);
	};

	const handlerChangePage = page => {
		router.push({ query: { page: page } });
		tablePageParams.currentPage = page;
	};

	const handlerChangeTotalItemsOnPage = total => {
		if (tablePageParams.currentPage <= totalPages.value) {
			tablePageParams.itemsOnPage = total;
		}
		if (tablePageParams.currentPage > totalPages.value) {
			router.push({ query: { page: 1 } });
		}
	};
	const handlerRemove = id => {
		context.emit("on-remove", id);
	};
	return {
		toCurrentItem,
		handlerChangePage,
		handlerChangeTotalItemsOnPage,
		handlerRemove,
		totalPages,
		displayItems,
		tablePageParams
	};
}
