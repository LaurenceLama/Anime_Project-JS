// we get anime api's from Jikan, I need to request to get an api data, How? Idk how, pls know it on the next line (6:15pm feb.7)
// lost track on finding the right line to request, but we now know HOW to do it 7:38pm , next is the what line to request
// FINALLY, https://api.jikan.moe/v4/anime/{id}/full , I have staring at this copy paste code AND IT DOES NOT WORK THE FIRST TIME, BUT ITS ALL GOOD I AM NOT MAD JUST
// DO this: basically that {id} has to be replaced with a Number(calling the id inside the api storage itself)
// if DO this does not work: what I did was to copy everything before {id} and start from there(putting a number I menubar, also not all numbers work but yeah, Imma learn how to call the 'anime' itself [if possible]) 8:26pm
let anime;
async function main() {
  const animeWrapper = document.querySelector(".wrapper");
  
  animeWrapper.classList += ' books__loading'
  if (!anime) {
    animeList = await getAnime();
  }
  animeWrapper.classList.remove('books__loading')
  
  console.log(animeList);
  // Turns out, I AM IN BABYYYYYYYYYYYY 9:53pm (Honestly this took by this time cuz I just came back from a dinner break)
  // its within my vicinity all along https://api.jikan.moe/v4/anime
  // yeh, it does nor work, I copy pasted my working js code from the library book thing, turns out the link being fetched is wrong itself, nt

  const dataHTML = animeList.map((anime) => {
      return `<div class="result__content--wrapper" onclick= idkYet()>
                        <figure>
                        <img src="${anime.images.jpg.image_url}" alt="" class="content__img">
                        </figure>
                        <div class="content">
                            <h2 class="content__title">${anime.title}</h2>
                            <h3 class="content__sub-title">subtitle</h3>
                            <p class="content__para">synopsis</p>
                        </div>
                    </div>`;
    })
    .join("");
    animeWrapper.innerHTML = dataHTML
}

setTimeout(() => {
  main();
}, 1000);
// when things get rough, go here (my last resort, I think)
// yep, just used the last resort, idk if it will work(IT SHOULD), I hope it will(IF IT DO NOT, HMMMMMMMMMMM)
// just reorganized some of the numberings and needed data I want to present, thanks to that mal_id: no. representing every anime with its contents, I only HAVE TO REORGANIZE IT 1 BY 1, its ma solution so no blames, I just want this to work is all PLSSSS

// use my library ecommerce thing for guide
function getAnime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          url: "https://myanimelist.net/anime/1/Cowboy_Bebop",
          images: {
            jpg: {
              image_url: "https://cdn.myanimelist.net/images/anime/4/19644.jpg",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/4/19644t.jpg",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/4/19644l.jpg",
            },
            webp: {
              image_url:
                "https://cdn.myanimelist.net/images/anime/4/19644.webp",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/4/19644t.webp",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/4/19644l.webp",
            },
          },
          title: "Cowboy Bebop",
          title_japanese: "カウボーイビバップ",
          episodes: 26,
          status: "Finished Airing",
          rank: 38,
          synopsis:
            "Crime is timeless. By the year 2071, humanity has expanded across the galaxy, filling the surface of other planets with settlements like those on Earth. These new societies are plagued by murder, drug use, and theft, and intergalactic outlaws are hunted by a growing number of tough bounty hunters.\n\nSpike Spiegel and Jet Black pursue criminals throughout space to make a humble living. Beneath his goofy and aloof demeanor, Spike is haunted by the weight of his violent past. Meanwhile, Jet manages his own troubled memories while taking care of Spike and the Bebop, their ship. The duo is joined by the beautiful con artist Faye Valentine, odd child Edward Wong Hau Pepelu Tivrusky IV, and Ein, a bioengineered Welsh Corgi.\n\nWhile developing bonds and working to catch a colorful cast of criminals, the Bebop crew's lives are disrupted by a menace from Spike's past. As a rival's maniacal plot continues to unravel, Spike must choose between life with his newfound family or revenge for his old wounds.\n\n[Written by MAL Rewrite]",
          background:
            "When Cowboy Bebop first aired in spring of 1998 on TV Tokyo, only episodes 2, 3, 7-15, and 18 were broadcast, it was concluded with a recap special known as Yose Atsume Blues. This was due to anime censorship having increased following the big controversies over Evangelion, as a result most of the series was pulled from the air due to violent content. Satellite channel WOWOW picked up the series in the fall of that year and aired it in its entirety uncensored. Cowboy Bebop was not a ratings hit in Japan, but sold over 19,000 DVD units in the initial release run, and 81,000 overall. Protagonist Spike Spiegel won Best Male Character, and Megumi Hayashibara won Best Voice Actor for her role as Faye Valentine in the 1999 and 2000 Anime Grand Prix, respectively. Cowboy Bebop's biggest influence has been in the United States, where it premiered on Adult Swim in 2001 with many reruns since. The show's heavy Western influence struck a chord with American viewers, where it became a \"gateway drug\" to anime aimed at adult audiences.",
          season: "spring",
          year: 1998,
          genres: [
            {
              mal_id: 1,
              type: "anime",
              name: "Action",
              url: "https://myanimelist.net/anime/genre/1/Action",
            },
            {
              mal_id: 46,
              type: "anime",
              name: "Award Winning",
              url: "https://myanimelist.net/anime/genre/46/Award_Winning",
            },
            {
              mal_id: 24,
              type: "anime",
              name: "Sci-Fi",
              url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
            },
          ],
          demographics: [],
        },
        {
          id: 2,
          url: "https://myanimelist.net/anime/5/Cowboy_Bebop__Tengoku_no_Tobira",
          images: {
            jpg: {
              image_url:
                "https://cdn.myanimelist.net/images/anime/1439/93480.jpg",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/1439/93480t.jpg",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/1439/93480l.jpg",
            },
            webp: {
              image_url:
                "https://cdn.myanimelist.net/images/anime/1439/93480.webp",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/1439/93480t.webp",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/1439/93480l.webp",
            },
          },
          title: "Cowboy Bebop: Tengoku no Tobira",
          title_japanese: "カウボーイビバップ 天国の扉",
          episodes: 1,
          status: "Finished Airing",
          airing: false,
          rank: 184,
          synopsis:
            "Another day, another bounty—such is the life of the often unlucky crew of the Bebop. However, this routine is interrupted when Faye, who is chasing a fairly worthless target on Mars, witnesses an oil tanker suddenly explode, causing mass hysteria. As casualties mount due to a strange disease spreading through the smoke from the blast, a whopping three hundred million woolong price is placed on the head of the supposed perpetrator.\n\nWith lives at stake and a solution to their money problems in sight, the Bebop crew springs into action. Spike, Jet, Faye, and Edward, followed closely by Ein, split up to pursue different leads across Alba City. Through their individual investigations, they discover a cover-up scheme involving a pharmaceutical company, revealing a plot that reaches much further than the ragtag team of bounty hunters could have realized.\n\n[Written by MAL Rewrite]",
          background: null,
          season: null,
          year: null,
          genres: [
            {
              mal_id: 1,
              type: "anime",
              name: "Action",
              url: "https://myanimelist.net/anime/genre/1/Action",
            },
            {
              mal_id: 24,
              type: "anime",
              name: "Sci-Fi",
              url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
            },
          ],
          demographics: [],
        },
        {
          id: 3,
          url: "https://myanimelist.net/anime/6/Trigun",
          images: {
            jpg: {
              image_url: "https://cdn.myanimelist.net/images/anime/7/20310.jpg",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/7/20310t.jpg",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/7/20310l.jpg",
            },
            webp: {
              image_url:
                "https://cdn.myanimelist.net/images/anime/7/20310.webp",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/7/20310t.webp",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/7/20310l.webp",
            },
          },
          title: "Trigun",
          title_japanese: "トライガン",
          episodes: 26,
          status: "Finished Airing",
          rank: 316,
          synopsis:
            "Vash the Stampede is the man with a $$60,000,000,000 bounty on his head. The reason: he's a merciless villain who lays waste to all those that oppose him and flattens entire cities for fun, garnering him the title \"The Humanoid Typhoon.\" He leaves a trail of death and destruction wherever he goes, and anyone can count themselves dead if they so much as make eye contact—or so the rumors say. In actuality, Vash is a huge softie who claims to have never taken a life and avoids violence at all costs.\n\nWith his crazy doughnut obsession and buffoonish attitude in tow, Vash traverses the wasteland of the planet Gunsmoke, all the while followed by two insurance agents, Meryl Stryfe and Milly Thompson, who attempt to minimize his impact on the public. But soon, their misadventures evolve into life-or-death situations as a group of legendary assassins are summoned to bring about suffering to the trio. Vash's agonizing past will be unraveled and his morality and principles pushed to the breaking point.\n\n[Written by MAL Rewrite]",
          background:
            "The Japanese release by Victor Entertainment has different openings relating to the specific episode it's played on. The initial Geneon Entertainment USA (then known as Pioneer) releases on VHS and DVD (singles, Signature Series, and box set) used only the first opening on each episode. This was due to the Japanese licensor providing them clean materials for only the first opening to put the English credits on. Geneon later fixed this mistake on their Limited Edition tin releases in 2005/2006, as well as on the Remix singles. Following Geneon USA's demise in late 2007, the show went out of print. When FUNimation Entertainment picked up the show in 2010 and released it, they repeated Geneon's mistake of using only the first opening on every episode. This mistake was later fixed in 2013 on the Anime Classics re-release.",
          season: "spring",
          year: 1998,
          genres: [
            {
              mal_id: 1,
              type: "anime",
              name: "Action",
              url: "https://myanimelist.net/anime/genre/1/Action",
            },
            {
              mal_id: 2,
              type: "anime",
              name: "Adventure",
              url: "https://myanimelist.net/anime/genre/2/Adventure",
            },
            {
              mal_id: 24,
              type: "anime",
              name: "Sci-Fi",
              url: "https://myanimelist.net/anime/genre/24/Sci-Fi",
            },
          ],
          demographics: [
            {
              mal_id: 27,
              type: "anime",
              name: "Shounen",
              url: "https://myanimelist.net/anime/genre/27/Shounen",
            },
          ],
        },
        {
          id: 4,
          url: "https://myanimelist.net/anime/7/Witch_Hunter_Robin",
          images: {
            jpg: {
              image_url:
                "https://cdn.myanimelist.net/images/anime/10/19969.jpg",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/10/19969t.jpg",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/10/19969l.jpg",
            },
            webp: {
              image_url:
                "https://cdn.myanimelist.net/images/anime/10/19969.webp",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/10/19969t.webp",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/10/19969l.webp",
            },
          },
          title: "Witch Hunter Robin",
          title_japanese: "Witch Hunter ROBIN (ウイッチハンターロビン)",
          episodes: 26,
          status: "Finished Airing",
          rank: 2816,
          synopsis:
            "Robin Sena is a powerful craft user drafted into the STNJ—a group of specialized hunters that fight deadly beings known as Witches. Though her fire power is great, she's got a lot to learn about her powers and working with her cool and aloof partner, Amon. But the truth about the Witches and herself will leave Robin on an entirely new path that she never expected!\n\n(Source: Funimation)",
          background: null,
          season: "summer",
          year: 2002,
          genres: [
            {
              mal_id: 1,
              type: "anime",
              name: "Action",
              url: "https://myanimelist.net/anime/genre/1/Action",
            },
            {
              mal_id: 8,
              type: "anime",
              name: "Drama",
              url: "https://myanimelist.net/anime/genre/8/Drama",
            },
            {
              mal_id: 7,
              type: "anime",
              name: "Mystery",
              url: "https://myanimelist.net/anime/genre/7/Mystery",
            },
            {
              mal_id: 37,
              type: "anime",
              name: "Supernatural",
              url: "https://myanimelist.net/anime/genre/37/Supernatural",
            },
          ],
          demographics: [],
        },
        {
          id: 5,
          url: "https://myanimelist.net/anime/8/Bouken_Ou_Beet",
          images: {
            jpg: {
              image_url: "https://cdn.myanimelist.net/images/anime/7/21569.jpg",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/7/21569t.jpg",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/7/21569l.jpg",
            },
            webp: {
              image_url:
                "https://cdn.myanimelist.net/images/anime/7/21569.webp",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/7/21569t.webp",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/7/21569l.webp",
            },
          },
          title: "Bouken Ou Beet",
          title_japanese: "冒険王ビィト",
          episodes: 52,
          status: "Finished Airing",
          rank: 4304,
          synopsis:
            "It is the dark century and the people are suffering under the rule of the devil, Vandel, who is able to manipulate monsters. The Vandel Busters are a group of people who hunt these devils, and among them, the Zenon Squad is known to be the strongest busters on the continent. A young boy, Beet, dreams of joining the Zenon Squad. However, one day, as a result of Beet's fault, the Zenon squad was defeated by the devil, Beltose. The five dying busters sacrificed their life power into their five weapons, Saiga. After giving their weapons to Beet, they passed away. Years have passed since then and the young Vandel Buster, Beet, begins his adventure to carry out the Zenon Squad's will to put an end to the dark century.",
          background: null,
          season: "fall",
          year: 2004,
          genres: [
            {
              mal_id: 2,
              type: "anime",
              name: "Adventure",
              url: "https://myanimelist.net/anime/genre/2/Adventure",
            },
            {
              mal_id: 10,
              type: "anime",
              name: "Fantasy",
              url: "https://myanimelist.net/anime/genre/10/Fantasy",
            },
            {
              mal_id: 37,
              type: "anime",
              name: "Supernatural",
              url: "https://myanimelist.net/anime/genre/37/Supernatural",
            },
          ],
          demographics: [
            {
              mal_id: 27,
              type: "anime",
              name: "Shounen",
              url: "https://myanimelist.net/anime/genre/27/Shounen",
            },
          ],
        },
        {
          id: 6,
          url: "https://myanimelist.net/anime/15/Eyeshield_21",
          images: {
            jpg: {
              image_url:
                "https://cdn.myanimelist.net/images/anime/12/66961.jpg",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/12/66961t.jpg",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/12/66961l.jpg",
            },
            webp: {
              image_url:
                "https://cdn.myanimelist.net/images/anime/12/66961.webp",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/12/66961t.webp",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/12/66961l.webp",
            },
          },
          title: "Eyeshield 21",
          title_japanese: "アイシールド21",
          episodes: 145,
          status: "Finished Airing",
          rank: 701,
          synopsis:
            "Shy, reserved, and small-statured, Deimon High School student Sena Kobayakawa is the perfect target for bullies. However, as a result of running errands throughout his life, Sena has become agile and developed a skill for avoiding crowds of people. After the cunning Youichi Hiruma—captain of the Deimon Devil Bats football team—witnesses Sena's rapid legs in motion, he coerces the timid boy into joining his squad.\n\nAs Hiruma wants to conceal Sena's identity from other clubs, Sena is forced to hide under the visored helmet of \"Eyeshield 21,\" a mysterious running back wearing the number 21 jersey. The legendary Eyeshield 21 can supposedly run at the speed of light and has achieved remarkable feats in the United States during his time at the Notre Dame College.\n\nAccustomed to avoiding his problems in the past, Sena's specialty might just help him become the new secret weapon of the Deimon Devil Bats. As he interacts with his teammates, Sena gradually gains more self-confidence and forges valuable bonds along the way.\n\n[Written by MAL Rewrite]",
          background:
            "Eyeshield 21 was original scheduled to stream in North America on Toonami Jetstream and NFL Rush in collaboration with the National Football League, but the plan fell through and the anime made its debut only on Toonami Jetstream, which later dropped the series. It would then become available in its entirety on Crunchyroll. Sentai Filmworks later licensed and released the first 52 episodes on DVD from 2010 to 2011.",
          season: "spring",
          year: 2005,
          genres: [
            {
              mal_id: 30,
              type: "anime",
              name: "Sports",
              url: "https://myanimelist.net/anime/genre/30/Sports",
            },
          ],
          demographics: [
            {
              mal_id: 27,
              type: "anime",
              name: "Shounen",
              url: "https://myanimelist.net/anime/genre/27/Shounen",
            },
          ],
        },
        {
          id: 7,
          url: "https://myanimelist.net/anime/16/Hachimitsu_to_Clover",
          images: {
            jpg: {
              image_url:
                "https://cdn.myanimelist.net/images/anime/11/73923.jpg",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/11/73923t.jpg",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/11/73923l.jpg",
            },
            webp: {
              image_url:
                "https://cdn.myanimelist.net/images/anime/11/73923.webp",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/11/73923t.webp",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/11/73923l.webp",
            },
          },
          title: "Hachimitsu to Clover",
          title_japanese: "ハチミツとクローバー",
          episodes: 24,
          status: "Finished Airing",
          rank: 572,
          synopsis:
            "Yuuta Takemoto, a sophomore at an arts college, shares a cheap apartment with two seniors—the eccentric Shinobu Morita, who keeps failing to graduate due to his absenteeism, and the sensible Takumi Mayama, who acts as a proper senior to Takemoto, often looking out for him.\n\nTakemoto had not given much thought to his future until one fine spring day, when he meets the endearing Hagumi Hanamoto and falls in love at first sight. Incredibly gifted in the arts, Hagumi enrolls in Takemoto's university and soon befriends the popular pottery student Ayumi Yamada. Ayumi is already well acquainted with the three flatmates and secretly harbors deep feelings for one of them.\n\nHachimitsu to Clover is a heartwarming tale of youth, love, soul-searching, and self-discovery, intricately woven through the complex relationships between five dear friends.\n\n[Written by MAL Rewrite]",
          background:
            "Hachimitsu to Clover was the first anime to air on Fuji Television's noitaminA block.",
          season: "spring",
          year: 2005,
          genres: [
            {
              mal_id: 4,
              type: "anime",
              name: "Comedy",
              url: "https://myanimelist.net/anime/genre/4/Comedy",
            },
            {
              mal_id: 8,
              type: "anime",
              name: "Drama",
              url: "https://myanimelist.net/anime/genre/8/Drama",
            },
            {
              mal_id: 22,
              type: "anime",
              name: "Romance",
              url: "https://myanimelist.net/anime/genre/22/Romance",
            },
          ],
          demographics: [
            {
              mal_id: 43,
              type: "anime",
              name: "Josei",
              url: "https://myanimelist.net/anime/genre/43/Josei",
            },
          ],
        },
        {
          id: 8,
          url: "https://myanimelist.net/anime/17/Hungry_Heart__Wild_Striker",
          images: {
            jpg: {
              image_url:
                "https://cdn.myanimelist.net/images/anime/12/49655.jpg",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/12/49655t.jpg",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/12/49655l.jpg",
            },
            webp: {
              image_url:
                "https://cdn.myanimelist.net/images/anime/12/49655.webp",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/12/49655t.webp",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/12/49655l.webp",
            },
          },
          title: "Hungry Heart: Wild Striker",
          title_japanese: "ハングリーハート Wild Striker",
          episodes: 52,
          status: "Finished Airing",
          rank: 1567,
          synopsis:
            "As the younger brother of Japanese soccer star Seisuke Kanou, Kyousuke was always expected to grow as a soccer player at the same pace his brother did—an expectation that proved too difficult to meet. Having fallen behind, he now lives in the shadow of his brother's success.\n\nEntering his freshman year at Jouyou Akanegaoka High School, Kyousuke vows never to play soccer again. However, Miki Tsujiwaki, the captain of the girls' soccer team, and Mori Kazuto, the manager of the boys' team, recognize Kyousuke's potential and want to see his return to the game for their own reasons.\n\nWith an opportunity to play soccer again, Kyousuke must either remain steadfast in his decision to abandon the sport he once loved, or allow himself to reignite that flame to become the best striker in the world.\n\n[Written by MAL Rewrite]",
          background:
            "Hungry Heart: Wild Striker was released on DVD by Pony Canyon in Japan from February 19, 2003 to March 17, 2004.",
          season: "fall",
          year: 2002,
          genres: [
            {
              mal_id: 4,
              type: "anime",
              name: "Comedy",
              url: "https://myanimelist.net/anime/genre/4/Comedy",
            },
            {
              mal_id: 36,
              type: "anime",
              name: "Slice of Life",
              url: "https://myanimelist.net/anime/genre/36/Slice_of_Life",
            },
            {
              mal_id: 30,
              type: "anime",
              name: "Sports",
              url: "https://myanimelist.net/anime/genre/30/Sports",
            },
          ],
          demographics: [
            {
              mal_id: 27,
              type: "anime",
              name: "Shounen",
              url: "https://myanimelist.net/anime/genre/27/Shounen",
            },
          ],
        },
        {
          id: 9,
          url: "https://myanimelist.net/anime/18/Initial_D_Fourth_Stage",
          images: {
            jpg: {
              image_url: "https://cdn.myanimelist.net/images/anime/9/10521.jpg",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/9/10521t.jpg",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/9/10521l.jpg",
            },
            webp: {
              image_url:
                "https://cdn.myanimelist.net/images/anime/9/10521.webp",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/9/10521t.webp",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/9/10521l.webp",
            },
          },
          title: "Initial D Fourth Stage",
          title_japanese: "頭文字〈イニシャル〉D FOURTH STAGE",
          episodes: 24,
          status: "Finished Airing",
          rank: 404,
          synopsis:
            'Takumi Fujiwara finally joins Ryousuke and Keisuke Takahashi to create "Project D." Their goal is twofold: Ryousuke wants to develop his "High-Speed Street Racing Theory," while Keisuke and Takumi aim at improving their driving skills by facing powerful opponents on dangerous roads. The idea of Project D is to challenge street racing teams from other prefectures to improve both their uphill and downhill records. In order to attract the attention of the best racing teams, Ryousuke creates a dedicated website to announce the future battles of Project D and post the team\'s results.\n\nThe fourth season of Initial D details the hardships and successes of the members of Project D as they try to become the best street racing team outside of Gunma Prefecture.\n\n[Written by MAL Rewrite]',
          background: null,
          season: "spring",
          year: 2004,
          genres: [
            {
              mal_id: 1,
              type: "anime",
              name: "Action",
              url: "https://myanimelist.net/anime/genre/1/Action",
            },
            {
              mal_id: 8,
              type: "anime",
              name: "Drama",
              url: "https://myanimelist.net/anime/genre/8/Drama",
            },
          ],
          demographics: [
            {
              mal_id: 42,
              type: "anime",
              name: "Seinen",
              url: "https://myanimelist.net/anime/genre/42/Seinen",
            },
          ],
        },
        {
          id: 10,
          url: "https://myanimelist.net/anime/19/Monster",
          images: {
            jpg: {
              image_url:
                "https://cdn.myanimelist.net/images/anime/10/18793.jpg",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/10/18793t.jpg",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/10/18793l.jpg",
            },
            webp: {
              image_url:
                "https://cdn.myanimelist.net/images/anime/10/18793.webp",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/10/18793t.webp",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/10/18793l.webp",
            },
          },
          title: "Monster",
          title_japanese: "モンスター",
          episodes: 74,
          status: "Finished Airing",
          rank: 24,
          synopsis:
            "Dr. Kenzou Tenma, an elite neurosurgeon recently engaged to his hospital director's daughter, is well on his way to ascending the hospital hierarchy. That is until one night, a seemingly small event changes Dr. Tenma's life forever. While preparing to perform surgery on someone, he gets a call from the hospital director telling him to switch patients and instead perform life-saving brain surgery on a famous performer. His fellow doctors, fiancée, and the hospital director applaud his accomplishment; but because of the switch, a poor immigrant worker is dead, causing Dr. Tenma to have a crisis of conscience.\n\nSo when a similar situation arises, Dr. Tenma stands his ground and chooses to perform surgery on the young boy Johan Liebert instead of the town's mayor. Unfortunately, this choice leads to serious ramifications for Dr. Tenma—losing his social standing being one of them. However, with the mysterious death of the director and two other doctors, Dr. Tenma's position is restored. With no evidence to convict him, he is released and goes on to attain the position of hospital director. \n\nNine years later when Dr. Tenma saves the life of a criminal, his past comes back to haunt him—once again, he comes face to face with the monster he operated on. He must now embark on a quest of pursuit to make amends for the havoc spread by the one he saved.\n\n[Written by MAL Rewrite]",
          background: null,
          season: "spring",
          year: 2004,
          genres: [
            {
              mal_id: 8,
              type: "anime",
              name: "Drama",
              url: "https://myanimelist.net/anime/genre/8/Drama",
            },
            {
              mal_id: 7,
              type: "anime",
              name: "Mystery",
              url: "https://myanimelist.net/anime/genre/7/Mystery",
            },
            {
              mal_id: 41,
              type: "anime",
              name: "Suspense",
              url: "https://myanimelist.net/anime/genre/41/Suspense",
            },
          ],
          demographics: [
            {
              mal_id: 42,
              type: "anime",
              name: "Seinen",
              url: "https://myanimelist.net/anime/genre/42/Seinen",
            },
          ],
        },
        {
          id: 11,
          url: "https://myanimelist.net/anime/20/Naruto",
          images: {
            jpg: {
              image_url:
                "https://cdn.myanimelist.net/images/anime/13/17405.jpg",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/13/17405t.jpg",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/13/17405l.jpg",
            },
            webp: {
              image_url:
                "https://cdn.myanimelist.net/images/anime/13/17405.webp",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/13/17405t.webp",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/13/17405l.webp",
            },
          },
          title: "Naruto",
          title_japanese: "ナルト",
          episodes: 220,
          status: "Finished Airing",
          rank: 604,
          synopsis:
            "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto.\n\nNow, Naruto is a hyperactive and knuckle-headed ninja still living in Konohagakure. Shunned because of the Kyuubi inside him, Naruto struggles to find his place in the village, while his burning desire to become the Hokage of Konohagakure leads him not only to some great new friends, but also some deadly foes.\n\n[Written by MAL Rewrite]",
          background:
            'Naruto received numerous awards during its airing, including the "Best Full-Length Animation Program Award" in the Third UStv Awards and the 38th "Best Animated Show" in IGN\'s Top 100 Animated Series.',
          season: "fall",
          year: 2002,
          genres: [
            {
              mal_id: 1,
              type: "anime",
              name: "Action",
              url: "https://myanimelist.net/anime/genre/1/Action",
            },
            {
              mal_id: 2,
              type: "anime",
              name: "Adventure",
              url: "https://myanimelist.net/anime/genre/2/Adventure",
            },
            {
              mal_id: 10,
              type: "anime",
              name: "Fantasy",
              url: "https://myanimelist.net/anime/genre/10/Fantasy",
            },
          ],
          demographics: [
            {
              mal_id: 27,
              type: "anime",
              name: "Shounen",
              url: "https://myanimelist.net/anime/genre/27/Shounen",
            },
          ],
        },
        {
          id: 12,
          url: "https://myanimelist.net/anime/21/One_Piece",
          images: {
            jpg: {
              image_url: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/6/73245t.jpg",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/6/73245l.jpg",
            },
            webp: {
              image_url:
                "https://cdn.myanimelist.net/images/anime/6/73245.webp",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/6/73245t.webp",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/6/73245l.webp",
            },
          },
          title: "One Piece",
          title_japanese: "ONE PIECE",
          episodes: null,
          status: "Currently Airing",
          rank: 56,
          synopsis:
            'Gol D. Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.\n\nEnter Monkey D. Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy\'s reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece.\n\n[Written by MAL Rewrite]',
          background:
            "Several anime-original arcs have been adapted into light novels, and the series has inspired 50+ video games as of 2022.",
          season: "fall",
          year: 1999,
          genres: [
            {
              mal_id: 1,
              type: "anime",
              name: "Action",
              url: "https://myanimelist.net/anime/genre/1/Action",
            },
            {
              mal_id: 2,
              type: "anime",
              name: "Adventure",
              url: "https://myanimelist.net/anime/genre/2/Adventure",
            },
            {
              mal_id: 10,
              type: "anime",
              name: "Fantasy",
              url: "https://myanimelist.net/anime/genre/10/Fantasy",
            },
          ],
          demographics: [
            {
              mal_id: 27,
              type: "anime",
              name: "Shounen",
              url: "https://myanimelist.net/anime/genre/27/Shounen",
            },
          ],
        },
        {
          id: 13,
          url: "https://myanimelist.net/anime/22/Tennis_no_Ouji-sama",
          images: {
            jpg: {
              image_url: "https://cdn.myanimelist.net/images/anime/6/21624.jpg",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/6/21624t.jpg",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/6/21624l.jpg",
            },
            webp: {
              image_url:
                "https://cdn.myanimelist.net/images/anime/6/21624.webp",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/6/21624t.webp",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/6/21624l.webp",
            },
          },
          title: "Tennis no Ouji-sama",
          title_japanese: "テニスの王子様",
          episodes: 178,
          status: "Finished Airing",
          rank: 798,
          synopsis:
            "At the request of his father, tennis prodigy Ryouma Echizen has returned from America and is ready to take the Japanese tennis scene by storm. Aiming to become the best tennis player in the country, he enrolls in Seishun Academy—home to one of the best middle school tennis teams in Japan. \n\nAfter Ryouma catches the captain's eye, he finds himself playing for a spot on the starting lineup in the intra-school ranking matches despite only being a freshman. Due to his age, the rest of the Seishun Boys' Tennis Team are initially reluctant to accept him, but his skill and determination convinces them to let him in.\n\nArmed with their new \"super rookie,\" Seishun sets out to claim a spot in the National Tournament, hoping to take the coveted title for themselves. In order to do so, the team must qualify by playing through the Tokyo Prefectural and Kanto Regionals. Yet, the road ahead of them is shared by a plethora of strong schools, each playing tennis in unique ways for their own reasons. Ryouma and his teammates must learn to cooperate if they want to become the champions they aspire to be.\n\n[Written by MAL Rewrite]",
          background:
            "On April 24, 2007, Viz Media released the first DVD box set in the United States. An additional three box sets have been released since January 15, 2008. However, these four sets only contain 50 of the 178 episodes. On April 2, 2021, Funimation obtained licensing rights to the series and announced a new dub was in the works.",
          season: "fall",
          year: 2001,
          genres: [
            {
              mal_id: 30,
              type: "anime",
              name: "Sports",
              url: "https://myanimelist.net/anime/genre/30/Sports",
            },
          ],
          demographics: [
            {
              mal_id: 27,
              type: "anime",
              name: "Shounen",
              url: "https://myanimelist.net/anime/genre/27/Shounen",
            },
          ],
        },
        {
          id: 14,
          url: "https://myanimelist.net/anime/23/Ring_ni_Kakero_1",
          images: {
            jpg: {
              image_url:
                "https://cdn.myanimelist.net/images/anime/1146/124743.jpg",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/1146/124743t.jpg",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/1146/124743l.jpg",
            },
            webp: {
              image_url:
                "https://cdn.myanimelist.net/images/anime/1146/124743.webp",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/1146/124743t.webp",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/1146/124743l.webp",
            },
          },
          title: "Ring ni Kakero 1",
          title_japanese: "リングにかけろ１",
          episodes: 12,
          status: "Finished Airing",
          rank: 7280,
          synopsis:
            "In order to fulfill their dead father's wish, the siblings, Takane Kiku and Takane Ryuji aims for the champopn title of the boxing arena. The sister, Kiku, will act as the trainer while her brother, Ryuji, will concentrate on the role of the boxer and learn the Boomerang. His battle with many rivals has led to the growth and maturity of Ryuji. The junior high boxing tournament has began and Ryuji will be fighting with his arch-rival, Kenzaki Jun. The battle begins.\n\n(Source: ANN)",
          background: null,
          season: "fall",
          year: 2004,
          genres: [
            {
              mal_id: 1,
              type: "anime",
              name: "Action",
              url: "https://myanimelist.net/anime/genre/1/Action",
            },
            {
              mal_id: 30,
              type: "anime",
              name: "Sports",
              url: "https://myanimelist.net/anime/genre/30/Sports",
            },
          ],
          demographics: [
            {
              mal_id: 27,
              type: "anime",
              name: "Shounen",
              url: "https://myanimelist.net/anime/genre/27/Shounen",
            },
          ],
        },
        {
          id: 15,
          url: "https://myanimelist.net/anime/24/School_Rumble",
          images: {
            jpg: {
              image_url: "https://cdn.myanimelist.net/images/anime/4/75488.jpg",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/4/75488t.jpg",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/4/75488l.jpg",
            },
            webp: {
              image_url:
                "https://cdn.myanimelist.net/images/anime/4/75488.webp",
              small_image_url:
                "https://cdn.myanimelist.net/images/anime/4/75488t.webp",
              large_image_url:
                "https://cdn.myanimelist.net/images/anime/4/75488l.webp",
            },
          },
          title: "School Rumble",
          title_japanese: "スクールランブル",
          episodes: 26,
          status: "Finished Airing",
          rank: 742,
          synopsis:
            'Just the words "I love you," and everything changes—such is the nature of the bittersweet trials of high school romance. Tenma Tsukamoto, a second year, is on a quest to confess her feelings to the boy she likes. Kenji Harima, a delinquent with a sizable reputation, is in a similar situation, as he cannot properly convey his feelings to the one he loves. Between school, friends, rivalries, and hobbies, these two will find that high school romance is no walk in the park, especially as misunderstandings further complicate their plight.\n\nSchool Rumble is a high-octane romantic comedy full of relatable situations, as Tenma and Kenji both try to win the hearts of those they desire.\n\n[Written by MAL Rewrite]',
          background:
            "Based on the manga serialized in the Weekly Shonen Magazine, drawn by Jin Kobayashi.",
          season: "fall",
          year: 2004,
          genres: [
            {
              mal_id: 4,
              type: "anime",
              name: "Comedy",
              url: "https://myanimelist.net/anime/genre/4/Comedy",
            },
            {
              mal_id: 22,
              type: "anime",
              name: "Romance",
              url: "https://myanimelist.net/anime/genre/22/Romance",
            },
          ],
          demographics: [
            {
              mal_id: 27,
              type: "anime",
              name: "Shounen",
              url: "https://myanimelist.net/anime/genre/27/Shounen",
            },
          ],
        },
      ]);
    }, 1000);
  });
}
