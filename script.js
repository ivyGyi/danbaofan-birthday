const opening = document.getElementById("opening");
const enterBtn = document.getElementById("enterBtn");
const bgMusic = document.getElementById("bgMusic");

enterBtn.addEventListener("click", () => {
    opening.classList.add("hide");
    bgMusic.volume = 0.3;
    bgMusic.play();
});

const pages = document.querySelectorAll(".book-page");
const prevBtn = document.getElementById("prevPageBtn");
const nextBtn = document.getElementById("nextPageBtn");
const pageCount = document.getElementById("pageCount");

let pageIndex = 0;

let hasClickedPageButton = false;

function showPage(index) {
  pages.forEach(page => page.classList.remove("active"));
  pages[index].classList.add("active");

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === pages.length - 1;

  pageCount.innerText = `${index + 1} / ${pages.length}`;

  if (hasClickedPageButton) {
    pages[index].scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

prevBtn.addEventListener("click", () => {
    hasClickedPageButton = true;
    if (pageIndex > 0) {
        pageIndex--;
        showPage(pageIndex);
    }
});

nextBtn.addEventListener("click", () => {
    hasClickedPageButton = true;
    if (pageIndex < pages.length - 1) {
        pageIndex++;
        showPage(pageIndex);
    }
});

showPage(pageIndex);
