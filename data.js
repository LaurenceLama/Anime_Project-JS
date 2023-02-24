const postListEl = document.querySelector(".post-list");
const id = localStorage.getItem("id");

async function renderPosts(id) {
  const anime = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
  const animeData = await anime.json();
  const animeArr = animeData.data;

  // since this logs the data I already need, I do not even need to map it(console is logging a single object which is my needed details). idc how simple it is and I still spent hours debugging it, shoutout to FSE dc community!
  console.log(animeArr);


  // when u want to convert 'every element'(meaning multiple values or objects) of an array into smth like html, we map. (YEH,,, WE DONT, UNMAP, NOT MAP, NO MAP  -feb. 13, 2023)
  // postListEl.innerHTML = animeArr.map((post) => postHTML(post)).join(""); //pretty somewhat sure this line is what causes the error, idk how to fix tho, I feel its staring at me and I cannot find it. yep it IS staring right at me
  postListEl.innerHTML = postHTML(animeArr)
  function postHTML(post) {
    return `<div class="post">
      <div class="post__title">
        <figure class="anime__post--wrapper">
          <img src="${post.images.jpg.image_url}" alt="" id="anime__post--img">
        </figure>
        <div class="post__title--details">
          <h1 class="post__title">${post.title}</h1>
          <h2 class="post__episodes">Episodes: ${post.episodes}</h2>
          <h2 class="post__score">Score: ${post.score}</h2>
        </div>
      </div>
      <h3 class="post__synopsis">
        Background story: ${post.synopsis}
      </h3>
    </div>`;
  }
}

async function onSearchChange(event) {
  const id = event.target.value;
  renderPosts(id);
}

setTimeout(() => {
  renderPosts(id);
}, 1000);

/** 
 * LESSON LEARNED (SLUMP KILLER):
 * when in slump, define problem (not the reason I got stuck)
 * when problem defined, define the used solution to know why it is problem (the reason I got stuck, i did not define solution)
 * when solution defined and proven as problem, I think you should know the cause of the PROBLEM(solution defined n proven as problem)
 * knowing the cause of problem will let us analyze the, yes, as to formulate or adjust the working-solution that is working 
 * 
 * NOTES
 * my previous solution was to try all solutions I know, hoping one of it would solve it
 * if none worked, I resort to finding other solutions, like searching, resetting, and did not analyze
 * actually I did analyze, define problem, but DID NOT DEFINE SOLUTION TO KNOW WHY IT IS PROBLEM
 * learn from lesson learned LEZGO
 */