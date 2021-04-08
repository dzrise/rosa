import store from "@/store/store";

let loading;

export async function fetchHotelBrands() {
	loading = true;
	await store.dispatch("hotelBrands/fetchHotelBrands");
	loading = false;

	return { loading };
}

export async function fetchHotelBrand(payload) {
	loading = true;
	await store.dispatch("hotelBrands/fetchHotelBrand", payload);
	loading = false;

	return { loading };
}

export async function addHotelBrand(hotelBrands) {
	await store.dispatch("hotelBrands/addHotelBrand", hotelBrands);
}

export async function removeHotelBrand(payload) {
	await store.dispatch("hotelBrands/removeHotelBrand", payload);
}

export async function editHotelBrand(payload) {
	await store.dispatch("hotelBrands/editHotelBrand", payload);
}
