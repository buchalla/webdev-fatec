import getWindowOffset from "./get-window-offset";

const FakeParallax = (($win, $doc) => {

	var $mainHeader = $doc.querySelector(".main-header"),
	    $firstSectionHeight = $doc.querySelectorAll(".content-section")[0].offsetHeight,
	    windowDidScroll;

	function start() {
		bindEvents();
	}

	function bindEvents() {
		$win.addEventListener("scroll", event => {
			if (windowDidScroll) {
				clearTimeout(windowDidScroll);
				windowDidScroll = null;
			}

			windowDidScroll = setTimeout(onWindowScroll, 200);
		});
	}

	function onWindowScroll() {
		var offset = getWindowOffset();

		if (offset.y >= $firstSectionHeight) {
			$mainHeader.classList.add("-active");
		} else {
			$mainHeader.classList.remove("-active");
		}
	}

	return { start }

})(window, document);

export default FakeParallax;
