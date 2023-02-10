const postListEl = document.querySelector(".post-list");
const id = localStorage.getItem("id");

async function renderPosts() {
  const anime = await fetch(`https://api.jikan.moe/v4/anime`);
  const animeData = await anime.json();

  // when u want to convert every element of an array into smth like html, we map
  postListEl.innerHTML = animeData.data.map((post) => postHTML(post)).join("");
  //why join? .join('') lets us convert an array into a string, which innerHTML can read and set. innderHTML cannot setup arrays
  function postHTML(post) {
    return `<div class="post">
        <div class="post__title">
        <img src="${post.images.jpg.small_image_url}" alt="">
      </div>
      <p class="post__title">
        ${post.title}
      </p>
      <p class="post__body">
        Post hi
      </p>

        </div>`;
  }
}

// async function onSearchChange(event) {
//   const id = event.target.value;
//   renderPosts();
// }

setTimeout(() => {
  renderPosts();
}, 1000);