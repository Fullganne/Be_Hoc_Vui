const topicList = document.querySelector(".list-topic__content");
// const topics = document.querySelectorAll(".topic-item");
const topics = [];
// topicList.children.forEach((topic) => {
//     topic.classList.add("topic-item col-12 col-md-5");
// })

for(let i = 0; i < topicList.children.length - 1; ++i) {
    topics[i] = topicList.children[i];
}

topics.forEach((topic, index) => {
    topic.classList.add("topic-item");
    topic.classList.add("col-12");
    topic.classList.add("col-md-5");

    topic.setAttribute("topic", index);
    topic.setAttribute("onclick", `openCalculator(1, ${index})`);
});


topics.forEach((ele) => {
    ele.addEventListener("click", () => {
        ele.classList.add("learned");
        AllTopics("hidden");
        openCalculator(ele.getAttribute("topic")); //By the corresponding topic
    })

    // ele.classList.add("topic-item, col-12, col-md-5");
});

function AllTopics(state) {
    if (state == "show") {
        topics.forEach(topic => {
            topic.classList.remove("went-off");
            console.log("show");
        })
    }

    if (state == "hidden") {
        topics.forEach(topic => {
            topic.classList.add("went-off");
            topic.classList.remove("ông-già");
        })
    }

    return;
};