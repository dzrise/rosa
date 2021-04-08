export function immutablySwapItems(items, firstIndex, secondIndex) {
	const results = items.slice();
	const firstItem = items[firstIndex];
	results[firstIndex] = items[secondIndex];
	results[secondIndex] = firstItem;
	return results;
}
