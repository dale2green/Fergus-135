
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".navbar-nav");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});




document.addEventListener("DOMContentLoaded", () => {
  // Officer List Rendering
  const officers = [
    { title: "Worshipful Master", name: "Michael Bacon" },
    { title: "Senior Warden", name: "Dale Green" },
    { title: "Junior Warden", name: "Rufus Rogers" },
    { title: "Senior Deacon", name: "Ryan Franklin" },
    { title: "Junior Deacon", name: "Duncan Lowrey" },
    { title: "Senior Steward", name: "Bo Huff" },
    { title: "Junior Steward", name: "Michael Kissel" },
    { title: "Tyler", name: "Dalton Hicks" },
    { title: "Secretary", name: "Brad Johnson" },
    { title: "Treasurer", name: "Tony Keys" },
    { title: "Chaplain", name: "Cledus Jones" },
    { title: "Director of Work", name: "John Deaton" },
    { title: "Asst Dir of Work", name: "Jarrod Rowe" }
  ];

  const officerList = document.getElementById("officer-list");
  officers.forEach(officer => {
    if (!officer.name) return;
    const li = document.createElement("li");
    li.className = "chairs";
    li.innerHTML = `<strong>${officer.title}</strong>: ${officer.name}`;
    officerList.appendChild(li);
  });

  // Carousel Looping Scroll
  const carousel = document.querySelector(".org-carousel");
  const rightBtn = document.querySelector(".scroll-btn.right");
  const leftBtn = document.querySelector(".scroll-btn.left");
  const cardWidth = 260 + 16;

  if (carousel && rightBtn && leftBtn) {
    const cards = Array.from(carousel.children);
    const firstCard = cards[0].cloneNode(true);
    const lastCard = cards[cards.length - 1].cloneNode(true);

    carousel.appendChild(firstCard);
    carousel.insertBefore(lastCard, cards[0]);

    carousel.scrollLeft = cardWidth;

    rightBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: cardWidth, behavior: "smooth" });

      setTimeout(() => {
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth - cardWidth;
        if (carousel.scrollLeft >= maxScrollLeft) {
          carousel.scrollTo({ left: cardWidth, behavior: "auto" });
        }
      }, 400);
    });

    leftBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: -cardWidth, behavior: "smooth" });

      setTimeout(() => {
        if (carousel.scrollLeft <= 0) {
          const realLastOffset = carousel.scrollWidth - carousel.clientWidth - cardWidth;
          carousel.scrollTo({ left: realLastOffset, behavior: "auto" });
        }
      }, 400);
    });
  }
});


// const officers = [
//   { title: "Worshipful Master", name: "Michael Bacon" },
//   { title: "Senior Warden", name: "Dale Green" },
//   { title: "Junior Warden", name: "Rufus Rogers" },
//   { title: "Senior Deacon", name: "Ryan Franklin" },
//   { title: "Junior Deacon", name: "Duncan Lowrey" },
//   { title: "Senior Steward", name: "Bo Huff" },
//   { title: "Junior Steward", name: "Michael Kissel" },
//   { title: "Tyler", name: "Dalton Hicks" },
//   { title: "Secretary", name: "Brad Johnson" },
//   { title: "Treasurer", name: "Tony Keys" },
//   { title: "Chaplain", name: "Cledus Jones" },
//   { title: "Director of Work", name: "John Deaton"},
//   { title: "Asst Dir of Work", name: "Jarrod Rowe"}
// ];

// const officerList = document.getElementById("officer-list");

// officers.forEach(officer => {
//   if (!officer.name) return; // Skip if name is empty

//   const li = document.createElement("li");
//   li.className = "chairs";
//   li.innerHTML = `<strong>${officer.title}</strong>: ${officer.name}`;
//   officerList.appendChild(li);
// });

// // Carousel Arrow Control
// document.addEventListener("DOMContentLoaded", () => {
//   const carousel = document.querySelector(".org-carousel");
//   const rightBtn = document.querySelector(".scroll-btn.right");
//   const leftBtn = document.querySelector(".scroll-btn.left");

//   const cardWidth = 260 + 16; // card width + gap

//   if (carousel && rightBtn && leftBtn) {
//     // Clone first and last cards
//     const firstCard = carousel.children[0].cloneNode(true);
//     const lastCard = carousel.children[carousel.children.length - 1].cloneNode(true);

//     carousel.appendChild(firstCard); // for right loop
//     carousel.insertBefore(lastCard, carousel.children[0]); // for left loop

//     // Adjust scroll position to account for prepended clone
//     carousel.scrollLeft = cardWidth;

//     rightBtn.addEventListener("click", () => {
//       carousel.scrollBy({ left: cardWidth, behavior: "smooth" });

//       setTimeout(() => {
//         const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth - cardWidth;
//         if (carousel.scrollLeft >= maxScrollLeft) {
//           // Reset to real first card
//           carousel.scrollTo({ left: cardWidth, behavior: "auto" });
//         }
//       }, 400);
//     });

//     leftBtn.addEventListener("click", () => {
//       carousel.scrollBy({ left: -cardWidth, behavior: "smooth" });

//       setTimeout(() => {
//         if (carousel.scrollLeft <= 0) {
//           // Reset to real last card
//           const realLastCardOffset = carousel.scrollWidth - carousel.clientWidth - cardWidth;
//           carousel.scrollTo({ left: realLastCardOffset, behavior: "auto" });
//         }
//       }, 400);
//     });
//   }
// });

