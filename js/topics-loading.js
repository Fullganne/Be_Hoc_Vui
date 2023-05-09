// Chứa các bài khởi động(topics)
const topicList = document.querySelector(".list-topic__content");

const topics = [];

//add các bài khởi động vào topic để xử lí thêm clâsss
for(let i = 0; i < topicList.children.length; ++i) {
    topics[i] = topicList.children[i];
}

//Thêm class(CSS)
topics.forEach((topic, index) => {
    topic.classList.add("topic-item");
    topic.classList.add("col-12");
    topic.classList.add("col-md-5");

    topic.removeAttribute("disabled"); // clean (nếu reset)

    // Nhét số tự động
    topic.setAttribute("topic", index);
    topic.setAttribute("onclick", `openCalculator(1, ${index})`);
});

topics.forEach((ele) => { //Đã click -> set = đã học -> tối màu
    ele.addEventListener("click", () => {
        ele.classList.add("learned");
        ele.disabled = true;
        ele.setAttribute("learned", true);
        AllTopics("hidden");
        openCalculator(ele.getAttribute("topic")); //By the corresponding topic
    });
});

function AllTopics(state) {
    if (state == "show") { //Hiện khởi động
        topics.forEach(topic => {
            topic.classList.remove("went-off");
        })
        calculator.classList.add("calculator-hide");
        setTimeout(() => {
            calculator.style.display = "none";
        }, 750);
    }

    if (state == "hidden") { //Ẩn khởi động
        topics.forEach(topic => {
            topic.classList.add("went-off");
            setTimeout(() => {
                calculator.style.display = "flex";
            }, 750);
        })
    }

    return;
};