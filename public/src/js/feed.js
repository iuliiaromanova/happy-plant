var shareImageButton = document.querySelector('#share-image-button');
var createPostArea = document.querySelector('#create-post');
var closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');
let sharedMomentsArea = document.querySelector('#shared-moments');

function openCreatePostModal() {
  createPostArea.style.display = 'block';
}

function closeCreatePostModal() {
  createPostArea.style.display = 'none';
}

shareImageButton.addEventListener('click', openCreatePostModal);

closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);

function createCard(card) {
  let cardWrapper = document.createElement('div');
  cardWrapper.className = 'shared-moment-card mdl-card mdl-shadow--2dp';
  let cardTitle = document.createElement('div');
  cardTitle.className = 'mdl-card__title';
  let image = new Image();
  image.src = card.image_id;
  cardTitle.style.backgroundImage = 'url('+ image.src +')';
//  cardTitle.style.backgroundImage = 'url("/src/images/pflanze-1.jpg")';
  cardTitle.style.backgroundSize = 'cover';
  cardTitle.style.height = '180px';
  cardWrapper.appendChild(cardTitle);
  let cardTitleTextElement = document.createElement('h2');
  cardTitleTextElement.className = 'mdl-card__title-text';
  cardTitleTextElement.textContent = card.title;
//  cardTitleTextElement.textContent = 'Rosetten-Dickblatt, Aeonium arboreum';
  cardTitle.appendChild(cardTitleTextElement);
  let cardSupportingText = document.createElement('div');
  cardSupportingText.className = 'mdl-card__supporting-text';
  cardSupportingText.textContent = card.location;
//  cardSupportingText.textContent = 'Rosetten-Dickblatt';
  cardSupportingText.style.textAlign = 'center';
  cardWrapper.appendChild(cardSupportingText);
  componentHandler.upgradeElement(cardWrapper);
  sharedMomentsArea.appendChild(cardWrapper);
}

function updateUI(data) {
    for(let card of data)
    {
       createCard(card);
    }

}

fetch('http://localhost:3001/posts')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      updateUI(data);
    });

