(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _changeHeaderOnScroll = require("./modules/change-header-on-scroll");

var _changeHeaderOnScroll2 = _interopRequireDefault(_changeHeaderOnScroll);

var _fakeParallax = require("./modules/fake-parallax");

var _fakeParallax2 = _interopRequireDefault(_fakeParallax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
	_changeHeaderOnScroll2.default.start();
	_fakeParallax2.default.start();
});

},{"./modules/change-header-on-scroll":2,"./modules/fake-parallax":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getWindowOffset = require("./get-window-offset");

var _getWindowOffset2 = _interopRequireDefault(_getWindowOffset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FakeParallax = function ($win, $doc) {

	var $mainHeader = $doc.querySelector(".main-header"),
	    $firstSectionHeight = $doc.querySelectorAll(".content-section")[0].offsetHeight,
	    windowDidScroll;

	function start() {
		bindEvents();
	}

	function bindEvents() {
		$win.addEventListener("scroll", function (event) {
			if (windowDidScroll) {
				clearTimeout(windowDidScroll);
				windowDidScroll = null;
			}

			windowDidScroll = setTimeout(onWindowScroll, 200);
		});
	}

	function onWindowScroll() {
		var offset = (0, _getWindowOffset2.default)();

		if (offset.y >= $firstSectionHeight) {
			$mainHeader.classList.add("-active");
		} else {
			$mainHeader.classList.remove("-active");
		}
	}

	return { start: start };
}(window, document);

exports.default = FakeParallax;

},{"./get-window-offset":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getWindowOffset = require("./get-window-offset");

var _getWindowOffset2 = _interopRequireDefault(_getWindowOffset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FakeParallax = function ($win, $doc) {

	var $parallax = Array.from($doc.querySelectorAll(".parallax")),
	    windowDidScroll;

	function start() {
		bindEvents();
	}

	function bindEvents() {
		$win.addEventListener("scroll", moveSection);
	}

	function moveSection() {
		var offset = (0, _getWindowOffset2.default)();

		$parallax.forEach(function ($section) {
			var $contentBlock = $section;
			$contentBlock.style.top = -(offset.y / 2.5) + "px";
			$contentBlock.style.opacity = 1 - offset.y / 1000;
		});
	}

	return { start: start };
}(window, document);

exports.default = FakeParallax;

},{"./get-window-offset":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = getWindowOffset;
function getWindowOffset() {
	var offset = {};

	offset.x = window.scrollX;
	offset.y = window.scrollY;

	return offset;
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9ob21lLmpzIiwic3JjL3NjcmlwdHMvbW9kdWxlcy9jaGFuZ2UtaGVhZGVyLW9uLXNjcm9sbC5qcyIsInNyYy9zY3JpcHRzL21vZHVsZXMvZmFrZS1wYXJhbGxheC5qcyIsInNyYy9zY3JpcHRzL21vZHVsZXMvZ2V0LXdpbmRvdy1vZmZzZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVMsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDbkQsZ0NBQXFCLEtBQXJCO0FBQ0Esd0JBQWEsS0FBYjtBQUNBLENBSEQ7Ozs7Ozs7OztBQ0hBOzs7Ozs7QUFFQSxJQUFNLGVBQWdCLFVBQUMsSUFBRCxFQUFPLElBQVAsRUFBZ0I7O0FBRXJDLEtBQUksY0FBYyxLQUFLLGFBQUwsQ0FBbUIsY0FBbkIsQ0FBbEI7S0FDSSxzQkFBc0IsS0FBSyxnQkFBTCxDQUFzQixrQkFBdEIsRUFBMEMsQ0FBMUMsRUFBNkMsWUFEdkU7S0FFSSxlQUZKOztBQUlBLFVBQVMsS0FBVCxHQUFpQjtBQUNoQjtBQUNBOztBQUVELFVBQVMsVUFBVCxHQUFzQjtBQUNyQixPQUFLLGdCQUFMLENBQXNCLFFBQXRCLEVBQWdDLGlCQUFTO0FBQ3hDLE9BQUksZUFBSixFQUFxQjtBQUNwQixpQkFBYSxlQUFiO0FBQ0Esc0JBQWtCLElBQWxCO0FBQ0E7O0FBRUQscUJBQWtCLFdBQVcsY0FBWCxFQUEyQixHQUEzQixDQUFsQjtBQUNBLEdBUEQ7QUFRQTs7QUFFRCxVQUFTLGNBQVQsR0FBMEI7QUFDekIsTUFBSSxTQUFTLGdDQUFiOztBQUVBLE1BQUksT0FBTyxDQUFQLElBQVksbUJBQWhCLEVBQXFDO0FBQ3BDLGVBQVksU0FBWixDQUFzQixHQUF0QixDQUEwQixTQUExQjtBQUNBLEdBRkQsTUFFTztBQUNOLGVBQVksU0FBWixDQUFzQixNQUF0QixDQUE2QixTQUE3QjtBQUNBO0FBQ0Q7O0FBRUQsUUFBTyxFQUFFLFlBQUYsRUFBUDtBQUVBLENBakNvQixDQWlDbEIsTUFqQ2tCLEVBaUNWLFFBakNVLENBQXJCOztrQkFtQ2UsWTs7Ozs7Ozs7O0FDckNmOzs7Ozs7QUFFQSxJQUFNLGVBQWdCLFVBQUMsSUFBRCxFQUFPLElBQVAsRUFBZ0I7O0FBRXJDLEtBQUksWUFBWSxNQUFNLElBQU4sQ0FBVyxLQUFLLGdCQUFMLENBQXNCLFdBQXRCLENBQVgsQ0FBaEI7S0FDQyxlQUREOztBQUdBLFVBQVMsS0FBVCxHQUFpQjtBQUNoQjtBQUNBOztBQUVELFVBQVMsVUFBVCxHQUFzQjtBQUNyQixPQUFLLGdCQUFMLENBQXNCLFFBQXRCLEVBQWdDLFdBQWhDO0FBQ0E7O0FBRUQsVUFBUyxXQUFULEdBQXVCO0FBQ3RCLE1BQUksU0FBUyxnQ0FBYjs7QUFFQSxZQUFVLE9BQVYsQ0FBa0Isb0JBQVk7QUFDN0IsT0FBSSxnQkFBZ0IsUUFBcEI7QUFDQSxpQkFBYyxLQUFkLENBQW9CLEdBQXBCLEdBQTBCLEVBQUUsT0FBTyxDQUFQLEdBQVcsR0FBYixJQUFvQixJQUE5QztBQUNBLGlCQUFjLEtBQWQsQ0FBb0IsT0FBcEIsR0FBOEIsSUFBSyxPQUFPLENBQVAsR0FBVyxJQUE5QztBQUNBLEdBSkQ7QUFLQTs7QUFFRCxRQUFPLEVBQUUsWUFBRixFQUFQO0FBRUEsQ0F6Qm9CLENBeUJsQixNQXpCa0IsRUF5QlYsUUF6QlUsQ0FBckI7O2tCQTJCZSxZOzs7Ozs7OztrQkM3QlMsZTtBQUFULFNBQVMsZUFBVCxHQUEyQjtBQUN6QyxLQUFJLFNBQVMsRUFBYjs7QUFFQSxRQUFPLENBQVAsR0FBVyxPQUFPLE9BQWxCO0FBQ0EsUUFBTyxDQUFQLEdBQVcsT0FBTyxPQUFsQjs7QUFFQSxRQUFPLE1BQVA7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgQ2hhbmdlSGVhZGVyT25TY3JvbGwgZnJvbSBcIi4vbW9kdWxlcy9jaGFuZ2UtaGVhZGVyLW9uLXNjcm9sbFwiO1xuaW1wb3J0IEZha2VQYXJhbGxheCBmcm9tIFwiLi9tb2R1bGVzL2Zha2UtcGFyYWxsYXhcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXHRDaGFuZ2VIZWFkZXJPblNjcm9sbC5zdGFydCgpO1xuXHRGYWtlUGFyYWxsYXguc3RhcnQoKTtcbn0pO1xuIiwiaW1wb3J0IGdldFdpbmRvd09mZnNldCBmcm9tIFwiLi9nZXQtd2luZG93LW9mZnNldFwiO1xuXG5jb25zdCBGYWtlUGFyYWxsYXggPSAoKCR3aW4sICRkb2MpID0+IHtcblxuXHR2YXIgJG1haW5IZWFkZXIgPSAkZG9jLnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1oZWFkZXJcIiksXG5cdCAgICAkZmlyc3RTZWN0aW9uSGVpZ2h0ID0gJGRvYy5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnRlbnQtc2VjdGlvblwiKVswXS5vZmZzZXRIZWlnaHQsXG5cdCAgICB3aW5kb3dEaWRTY3JvbGw7XG5cblx0ZnVuY3Rpb24gc3RhcnQoKSB7XG5cdFx0YmluZEV2ZW50cygpO1xuXHR9XG5cblx0ZnVuY3Rpb24gYmluZEV2ZW50cygpIHtcblx0XHQkd2luLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZXZlbnQgPT4ge1xuXHRcdFx0aWYgKHdpbmRvd0RpZFNjcm9sbCkge1xuXHRcdFx0XHRjbGVhclRpbWVvdXQod2luZG93RGlkU2Nyb2xsKTtcblx0XHRcdFx0d2luZG93RGlkU2Nyb2xsID0gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0d2luZG93RGlkU2Nyb2xsID0gc2V0VGltZW91dChvbldpbmRvd1Njcm9sbCwgMjAwKTtcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIG9uV2luZG93U2Nyb2xsKCkge1xuXHRcdHZhciBvZmZzZXQgPSBnZXRXaW5kb3dPZmZzZXQoKTtcblxuXHRcdGlmIChvZmZzZXQueSA+PSAkZmlyc3RTZWN0aW9uSGVpZ2h0KSB7XG5cdFx0XHQkbWFpbkhlYWRlci5jbGFzc0xpc3QuYWRkKFwiLWFjdGl2ZVwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JG1haW5IZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcIi1hY3RpdmVcIik7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHsgc3RhcnQgfVxuXG59KSh3aW5kb3csIGRvY3VtZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgRmFrZVBhcmFsbGF4O1xuIiwiaW1wb3J0IGdldFdpbmRvd09mZnNldCBmcm9tIFwiLi9nZXQtd2luZG93LW9mZnNldFwiO1xuXG5jb25zdCBGYWtlUGFyYWxsYXggPSAoKCR3aW4sICRkb2MpID0+IHtcblxuXHR2YXIgJHBhcmFsbGF4ID0gQXJyYXkuZnJvbSgkZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFyYWxsYXhcIikpLFxuXHRcdHdpbmRvd0RpZFNjcm9sbDtcblxuXHRmdW5jdGlvbiBzdGFydCgpIHtcblx0XHRiaW5kRXZlbnRzKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xuXHRcdCR3aW4uYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBtb3ZlU2VjdGlvbik7XG5cdH1cblxuXHRmdW5jdGlvbiBtb3ZlU2VjdGlvbigpIHtcblx0XHR2YXIgb2Zmc2V0ID0gZ2V0V2luZG93T2Zmc2V0KCk7XG5cblx0XHQkcGFyYWxsYXguZm9yRWFjaCgkc2VjdGlvbiA9PiB7XG5cdFx0XHR2YXIgJGNvbnRlbnRCbG9jayA9ICRzZWN0aW9uO1xuXHRcdFx0JGNvbnRlbnRCbG9jay5zdHlsZS50b3AgPSAtKG9mZnNldC55IC8gMi41KSArIFwicHhcIjtcblx0XHRcdCRjb250ZW50QmxvY2suc3R5bGUub3BhY2l0eSA9IDEgLSAob2Zmc2V0LnkgLyAxMDAwKTtcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiB7IHN0YXJ0IH1cblxufSkod2luZG93LCBkb2N1bWVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IEZha2VQYXJhbGxheDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFdpbmRvd09mZnNldCgpIHtcblx0dmFyIG9mZnNldCA9IHt9O1xuXG5cdG9mZnNldC54ID0gd2luZG93LnNjcm9sbFg7XG5cdG9mZnNldC55ID0gd2luZG93LnNjcm9sbFk7XG5cblx0cmV0dXJuIG9mZnNldDtcbn1cbiJdfQ==
