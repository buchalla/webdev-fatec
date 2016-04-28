import getWindowOffset from "./get-window-offset";

const FakeParallax = (($win, $doc) => {

	var $parallax = Array.from($doc.querySelectorAll(".parallax")),
		windowDidScroll;

	function start() {
		bindEvents();
	}

	function bindEvents() {
		$win.addEventListener("scroll", moveSection);
	}

	function moveSection() {
		var offset = getWindowOffset();

		$parallax.forEach($section => {
			var $contentBlock = $section;
			$contentBlock.style.top = -(offset.y / 2.5) + "px";
			$contentBlock.style.opacity = 1 - (offset.y / 1000);
		});
	}

	return { start }

})(window, document);

export default FakeParallax;
