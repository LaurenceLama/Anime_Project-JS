// we get anime api's from Jikan, I need to request to get an api data, How? Idk how, pls know it on the next line (6:15pm feb.7)
// lost track on finding the right line to request, but we now know HOW to do it 7:38pm , next is the what line to request
// FINALLY, https://api.jikan.moe/v4/anime/{id}/full , I have staring at this copy paste code AND IT DOES NOT WORK THE FIRST TIME, BUT ITS ALL GOOD I AM NOT MAD JUST
// DO this: basically that {id} has to be replaced with a Number(calling the id inside the api storage itself)
// if DO this does not work: what I did was to copy everything before {id} and start from there(putting a number I menubar, also not all numbers work but yeah, Imma learn how to call the 'anime' itself [if possible]) 8:26pm
const animeListEl = document.querySelector(".wrapper");
// let wait;
// const animeWrapper = document.querySelector(".wrapper");

async function main() {
  const anime = await fetch(
    "https://animechan.vercel.app/api/quotes/anime?title=naruto"
  );
  const animeData = await anime.json();
  animeListEl.innerHTML = animeData.map((data) => animeHTML(data)).join("");
    // console.log(animeData.map((user) => `<a class="another-wrapper" onclick="showUserPosts()">
    //                 <div class="content__img--wrapper">
    //                   <img src="" alt="" class="content__img">
    //                   <div class="content">
    //                   <h2 class="content__title">NAuto</h2>
    //                   <h3 class="content__sub-title">subtitle</h3>
    //                   <div class="content__ranking">Rank</div>
    //                   </div>
    //                 </div>
    //             </a>`))
  console.log(animeListEl);
}


//   animeWrapper.classList += " books__loading";
//   if (!wait) {
//   }
//   animeWrapper.classList.remove("books__loading");


// setTimeout(() => {
  main();
// }, 1000);

// Turns out, I AM IN BABYYYYYYYYYYYY 9:53pm (Honestly this took by this time cuz I just came back from a dinner break)
// its within my vicinity all along https://api.jikan.moe/v4/anime
// yeh, it does nor work, I copy pasted my working js code from the library book thing, turns out the link being fetched is wrong itself, nt

function animeHTML(data) {
  return `<a class="another-wrapper" onclick="showUserPosts()">
                    <div class="content__img--wrapper">
                      <img src="" alt="" class="content__img">
                      <div class="content">
                      <h2 class="content__title">NAuto</h2>
                      <h3 class="content__sub-title">subtitle</h3>
                      <div class="content__ranking">Rank</div>
                      </div>
                    </div>
                </a>`;
}

// // Link routed  to user details, how to route to a new page in vanilla javascript
// function showUserPosts(id) {
//   localStorage.setItem("id", id);
//   window.location.href = `${window.location.origin}/data.html`;
// }
