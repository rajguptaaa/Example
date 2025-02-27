const cardsContainer = document.getElementById("root");
const API_KEY = "";

const showYoutubeCards = (data) => {
    const { videos } = data;

    for (let i = 0; i < videos.length; i++) {
        const card = document.createElement("div");
        card.className = "search-result-card";
        card.innerHTML = `
            <img
                src="${videos[i].thumbnails[0].url}">
            <div class="right-part">
                <p>${videos[i].title}</p>
                <p class="channel-name">${videos[i].author}</p>
                <p>${videos[i].description}</p>
            </div>
        `; // ES6  - template literals

        card.addEventListener("click", () => {
            window.open(`youtubeVideoPage.html?id=${videos[i].video_id}`, "_blank");
        });

        cardsContainer.appendChild(card);
    }
};

const getData = async (txt) => {
    try {
        const options = {
            headers: {
                "x-rapidapi-host": "youtube138.p.rapidapi.com",
                "x-rapidapi-key": '4873f19498msh6f4de67b5626175p14c464jsnc00dc4a06f5f'
            },
        };
        const res = await fetch(`https://youtube138.p.rapidapi.com/auto-complete/?qyery=${txt}`, options);
        const dataObj = await res.json();
        showYoutubeCards(dataObj);
    } catch (err) {
        console.log(err);
        alert("Something went wrong!");
    }
};

const handleSearch = () => {
    cardsContainer.innerHTML = ``;
    const searchText = document.getElementById("input-box").value;
    getData(searchText);
};
