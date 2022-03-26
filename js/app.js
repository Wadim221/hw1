const box = document.querySelectorAll(".box");
const boxes = document.querySelectorAll(".box");



box.forEach((e) => {
    e.addEventListener("click", () => {
        squareChanger();
    });
});





const squareChanger = () => {
    box.forEach((e, index) => {
        setTimeout(() => {
            e.classList.toggle("box--active");
        }, index * 600);
    });
};

