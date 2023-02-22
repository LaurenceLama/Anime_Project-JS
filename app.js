// we get anime api's from Jikan, I need to request to get an api data, How? Idk how, pls know it on the next line (6:15pm feb.7)
// lost track on finding the right line to request, but we now know HOW to do it 7:38pm , next is the what line to request
// FINALLY, https://api.jikan.moe/v4/anime/{id}/full , I have staring at this copy paste code AND IT DOES NOT WORK THE FIRST TIME, BUT ITS ALL GOOD I AM NOT MAD JUST
// DO this: basically that {id} has to be replaced with a Number(calling the id inside the api storage itself)
// if DO this does not work: what I did was to copy everything before {id} and start from there(putting a number I menubar, also not all numbers work but yeah, Imma learn how to call the 'anime' itself [if possible]) 8:26pm
let anime;
const animeListEl = document.querySelector(".wrapper");

async function renderAnime(sorting) {
  const animeWrapper = document.querySelector(".wrapper");

  animeWrapper.classList += " books__loading";
  if (!anime) {
    const anime = await fetch("https://api.jikan.moe/v4/anime");
    const animeData = await anime.json();
    

  // Sort function
  // so when sorting functions, line orders matter, my plan was to put it below everything but still inside renderAnime, but I have analyzed(with some luck, or just TnE) that if this function goes below the animeHTML, it will not go according to yeah
  if (sorting === "Rank") {
    animeData.data.sort((a, b) => a.rank - b.rank);
  }
  else if (sorting === "alphabetical") {
    // animeData.data.sort((a, b) => a.title - b.title); deduced that with score as the value, concludes us that sorting will only sort values and NOT values in a string
    animeData.data.sort((a, b) => a.score - b.score)
  }
  else if (sorting === "non-alphabetical") {
    // animeData.data.sort((a, b) => a.title - b.title); deduced that with score as the value, concludes us that sorting will only sort values and NOT values in a string
    animeData.data.sort((a, b) => b.episodes - a.episodes)
  }
  // else if (sorting === "non-alphabetical") { // could not (or just got lazy) to debug how to sort string values
  //   animeData.data.title.sort()
  // }

  // Filter function (this is gonna cost me too much time, mb, college things get in the way rn)
  // if (sorting === 'action') {
  //   animeData.data.filter((element) => element !== 'action')
  // }



  // so this log shows basically an opened api data, but since the data are enclosed on an Array(or idk object, probably object), we map
  // console.log(animeData)
  
  animeListEl.innerHTML = animeData.data.map((user) => animeHTML(user)).join("");
  
    //   one thing I have realized in this wasting times is when there is error and console tells it is on the innerHTML parent, its not there. It is mostly from the faulty website url. And knowing that not all websites work, probably means that MAYBE .map is not always the answer. Or maybe the request thing needs to be done which I do not know of.
    //   console.log(animeData.data) IMMA END THIS SLUMP, .data was all it took just to make this project longer DAMN OK IM GOOD im good, btw that data depends on the array name to be your chosen so it may be something else
  }
  animeWrapper.classList.remove("books__loading");

  // Turns out, I AM IN BABYYYYYYYYYYYY 9:53pm (Honestly this took by this time cuz I just came back from a dinner break)
  // its within my vicinity all along https://api.jikan.moe/v4/anime
  // now it works lezgoooooooooooooooooooooooo

  function animeHTML(anime) {
    return `<a class="another-wrapper" onclick="showUserPosts(${anime.mal_id})">
                      <div class="content__img--wrapper">
                        <img src="${anime.images.jpg.image_url}" alt="" class="content__img">
                        <div class="content">
                        <h2 class="content__title">${anime.title}</h2>
                        <div class="content__ranking">Rank: ${anime.rank}</div>
                        </div>
                      </div>
                  </a>`;
  }
}

async function sortAnime(event) {
  const sort = event.target.value
  renderAnime(sort)
}

// Link routed  to user details, how to route to a new page in vanilla javascript
function showUserPosts(mal_id) {
  localStorage.setItem("id", mal_id);
  window.location.href = `${window.location.origin}/data.html`;
}

setTimeout(() => {
  renderAnime();
}, 100);

//  when things get rough, go here (my last resort, I think)
//  yep, just used the last resort, idk if it will work(IT SHOULD), I hope it will(IF IT DO NOT, HMMMMMMMMMMM)
//  just reorganized some of the numberings and needed data I want to present, thanks to that mal_id: no. representing every anime with its contents, I only HAVE TO REORGANIZE IT 1 BY 1, its ma solution so no blames, I just want this to work is all PLSSSS