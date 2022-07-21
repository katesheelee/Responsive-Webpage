



import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

let scrollTracker = document.querySelector(".scroll-tracker");

let scrollTrackingTimeline = new ScrollTimeline({
	source: document.scrollingElement,
	orientation: "block",
	scrollOffsets: [CSS.percent(5), CSS.percent(100)],
});

scrollTracker.animate(
	{
		transform: ["scaleX(0)", "scaleX(1)"],
	},
	{
		duration: 2,
		timeline: scrollTrackingTimeline,
	}
);

let animatedImages = document.querySelectorAll(".rotate");

animatedImages.forEach((image) => {
	let animatedImageTimeline = new ScrollTimeline({
		scrollOffsets: [
			{ target: image, edge: "end", threshold: "0" },
			{ target: image, edge: "start", threshold: "1" },
		],
	});
	image.animate(
		{
			transform: [
				" perspective(1000px) rotateX(30deg)",
				"perspective(1000px)rotate(0)",
			],
			opacity: ["0", "1"],
		},
		{
			duration: 1,
			timeline: animatedImageTimeline,
		}
	);
});

