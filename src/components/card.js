import axios from "axios";

const Card = (article) => {

  const card = document.createElement('div');
  const cardHeadline = document.createElement('div');
  const cardAuthorCon = document.createElement('div');
  const cardImgCon = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardAuthor = document.createElement('span');

  card.appendChild(cardHeadline);
  card.appendChild(cardAuthorCon);
  cardAuthorCon.appendChild(cardImgCon);
  cardAuthorCon.appendChild(cardAuthor);
  cardImgCon.appendChild(cardImg);

  card.classList.add('card');
  cardHeadline.classList.add('headline');
  cardAuthorCon.classList.add('author');
  cardImgCon.classList.add('img-container');

  cardHeadline.textContent = article.headline;
  cardImg.src = article.authorPhoto;
  cardAuthor.textContent = article.authorName;

  card.addEventListener('click', event => {
    console.log(article.headline);
  });

  return card;

} 

// console.log(Card);

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

const cardAppender = (selector) => {
  const cardEntry = document.querySelector(selector);
  axios.get(`http://localhost:5000/api/articles`).then(res => {
    // console.log(res.data.articles);

  // Attempt 3

      // const artList = res.data.articles;
      // console.log(artList);

      // cardEntry.appendChild(artList[0]);

  // Attempt 4
      // const bootstrap = artList.bootstrap;
      // const javascript = artList.javascript;
      // const jquery = artList.jquery;
      // const node = artList.node;
      // const technology = artList.technology;
      // console.log(bootstrap[0]);

      // const array = [bootstrap, javascript, jquery, node, technology];
      // console.log(array);
        
      // for(let i = 0; i < array.length; i++){

      // } 

      cardEntry.appendChild(artList[0]);
})
  .catch(err => {
    console.error(err);
  })

}

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!

  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //


export { Card, cardAppender }
