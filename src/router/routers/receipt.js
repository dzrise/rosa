const receiptRoutes = {
	path: "/receipt",
	component: () => import(/* webpackChunkName: "Receipts" */ "@/pages/Receipts/Receipts.vue"),
	name: "Чеки",
	children: [
		{
			path: "",
			component: () => import(/* webpackChunkName: "ReceiptsList" */ "@/modules/Receipts/ReceiptsList.vue"),
			name: "Список чеков"
		},
		{
			path: ":id",
			component: () => import(/* webpackChunkName: "Receipt" */ "@/pages/Receipts/Receipt.vue"),
			name: "Чек"
		}
	]
};
export { receiptRoutes };
