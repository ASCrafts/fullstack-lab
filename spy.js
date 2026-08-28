// Ex 5: highlight the menu link of whichever section is on screen
var spy = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting)
      document.querySelectorAll("#spy a").forEach(function (a) {
        a.classList.toggle("active", a.hash == "#" + e.target.id)
      })
  })
}, { threshold: 0.5 });

document.querySelectorAll("section").forEach(function (s) { spy.observe(s) });
