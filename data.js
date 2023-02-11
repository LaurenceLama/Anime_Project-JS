const postListEl = document.querySelector(".post-list");
const id = localStorage.getItem("id");

async function renderPosts() {
  const anime = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
  const animeData = await anime.json();
  console.log(animeData.data);
  // console.log(animeData.data.map((post) => postHTML(post)).join(""));

  // when u want to convert every element of an array into smth like html, we map
  postListEl.innerHTML = animeData.data.map((post) => postHTML(post)).join(""); //pretty somewhat sure this line is what causes the error, idk how to fix tho, I feel its staring at me and I cannot find it

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
