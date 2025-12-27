const tl = gsap.timeline();

tl.set("body", { overflow: "hidden" });

tl.to("#fs", {
  height: 0,
  duration: 1,
  ease: Circ.easeInOut
})
.to("#elem1", {
  height: "100%",
  duration: 1,
  top: 0,
  ease: Circ.easeInOut
}, "-=1")
.to("#elem2", {
  height: "100%",
  top: 0,
  duration: 1,
  ease: Circ.easeInOut
})
.to("#elem2", {
  height: "0%",
  duration: 1,
  ease: Circ.easeInOut
})
.to("#elem1", {
  height: "0%",
  duration: 0,
  top: 0,
  ease: Circ.easeInOut
}, "-=1")

.set(["#fs", "#elem1", "#elem2"], {
  display: "none"
})

.set("body", { overflow: "auto" });
