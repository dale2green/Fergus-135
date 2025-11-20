const imageFilenames = [
  
  "fergus-36.jpg",
  "fergus-38.jpg",
  "fergus-39.jpg",
  "fergus-46.jpg",
  "fergus-48.jpg",
  "fergus-51.jpg",
  "fergus-57.jpg",
  "fergus-01.jpg",
  "fergus-15.jpg",
  "fergus-33.jpg"
];

const photoGrid = document.getElementById("photo-grid");
const modal = document.getElementById("photo-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

imageFilenames.forEach(filename => {
  const img = document.createElement("img");
  img.src = `./images/event-photos/${filename}`;
  img.alt = filename.replace(/\.jpg|\.png/, "").replace(/([A-Z])/g, " $1").trim();
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
  photoGrid.appendChild(img);
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = event => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};