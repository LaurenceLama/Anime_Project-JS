const postListEl = document.querySelector(".post-list");
const id = localStorage.getItem("id");

async function renderPosts() {
  const anime = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
  const animeData = await anime.json();
  const animeArr = Object.entries(animeData.data);
  console.log(animeArr);
  // console.log(Object.values(animeData.data).map((post) => postHTML(post)).join(""));
// kinda understood the concepts of Object.keys,entries,and values. Basically this is my object-to-array converter. However, from my understanding, the function for mapping still does not work cuz my chosen api has arrays on objects on objects on arrays(not accurate btw, but my point remains)
// LETS TRY OTHER API'S LEZGOOOO, 


  // when u want to convert every element of an array into smth like html, we map
  postListEl.innerHTML = animeArr.map((post) => postHTML(post)).join(""); //pretty somewhat sure this line is what causes the error, idk how to fix tho, I feel its staring at me and I cannot find it

  //why join? .join('') lets us convert an array into a string, which innerHTML can read and set. innderHTML cannot setup arrays
  function postHTML(post) {
    return `<div class="post">
        <div class="post__title">
        <img src="" alt="">
      </div>
      <p class="post__title">
        ${post.title}
      </p>
      <p class="post__body">
        ${post.episodes}
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
