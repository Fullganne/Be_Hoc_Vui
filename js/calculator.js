const topics = document.querySelectorAll(".topic-item");
console.log(topics);

topics.forEach((ele) => {
    ele.addEventListener("click", () => {
        ele.classList.add("learned");
        AllTopics("hidden");
        openCalculator(ele.getAttribute("topic")); //White the corresponding topic
    })
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