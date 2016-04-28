import ChangeHeaderOnScroll from "./modules/change-header-on-scroll";
import FakeParallax from "./modules/fake-parallax";

document.addEventListener("DOMContentLoaded", () => {
	ChangeHeaderOnScroll.start();
	FakeParallax.start();
});
