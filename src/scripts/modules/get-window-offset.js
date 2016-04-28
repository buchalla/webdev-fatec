export default function getWindowOffset() {
	var offset = {};

	offset.x = window.scrollX;
	offset.y = window.scrollY;

	return offset;
}
