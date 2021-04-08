import { ref, watch } from "vue";
import { immutablySwapItems } from "@/services";

export function useSortable(elements, context) {
	let items = ref(elements);

	watch(
		() => elements,
		newValue => {
			if (newValue) {
				items.value = newValue;
			}
		}
	);

	function onDragStart(event, id) {
		event.dataTransfer.dropEffect = "move";
		event.dataTransfer.effectAllowed = "move";
		event.dataTransfer.setData("itemId", id.toString());
	}

	function onDrop(event, index) {
		const itemId = parseInt(event.dataTransfer.getData("itemId"));
		items.value = immutablySwapItems(items.value, itemId, index);
	}

	function addOperatingConditions() {
		context.emit("add-condition");
	}

	function handlerRemoveOperatingConditions(id) {
		context.emit("remove-condition", id);
	}

	return {
		items,
		onDragStart,
		onDrop,
		addOperatingConditions,
		handlerRemoveOperatingConditions
	};
}
