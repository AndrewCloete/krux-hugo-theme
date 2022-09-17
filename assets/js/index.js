import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

const parallax = document.querySelector(".parallax");

const scrollTrackingTimeline = new ScrollTimeline({
  orientation: "block",
  scrollOffsets: [CSS.percent(0), CSS.percent(100)],
});

parallax.animate(
  {
    backgroundPositionY: ["0%", "-20%"],
  },
  {
    duration: 1,
    timeline: scrollTrackingTimeline,
  }
);
