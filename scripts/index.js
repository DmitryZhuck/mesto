//замена querySelector
const query = (id) => document.querySelector(id);
//
const popup = query("#profile-edit");
const popupForm = query(".popup__form");
const openEditProfile = query(".profile__btn");
const popupClose = query(".popup__close");
const nameInput = query(".popup__input_type_name");
const userName = query(".profile__name");
const jobInput = query(".popup__input_type_job");
const userJob = query(".profile__profession");
// LIKE
const likeBtn = document.querySelectorAll(".element__btn");
const likeCard = (e) => {
  e.target.classList.toggle("element__btn_type_disactive");
  e.target.classList.toggle("element__btn_type_active");
};
likeBtn.forEach((button) => button.addEventListener("click", likeCard));

const togglePopupHandler = () => popup.classList.toggle("popup_type_opened");

const handleOpen = () => {
  togglePopupHandler();

  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
};

const submitForm = (e) => {
  e.preventDefault();
  togglePopupHandler();

  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
};
// изменить имя
popupForm.addEventListener("submit", submitForm);
// открыть/закрыть попап
popupClose.addEventListener("click", togglePopupHandler);
openEditProfile.addEventListener("click", handleOpen);

//
// 5 SPRINT //
const popupCreate = query("#create");
const popupFormCreate = query("#popup-create");
const openCreate = query(".profile__add"); //кнопка [ + ]
const inputPlaceName = query("#input-place");
const inputPlaceLink = query("#input-link");
const popupSaveButton = query("#popup-btn_create");
const closeCreate = query("#popup-create_close");
//открыть/закрыть создание каррточки
const togglePopupCreateHandler = () => popupCreate.classList.toggle("popup_type_opened");

openCreate.addEventListener("click", togglePopupCreateHandler);
closeCreate.addEventListener("click", togglePopupCreateHandler);

let modalImg = document.querySelectorAll("#img-mod");

const createCardFunc = () => {
  const template = query("#template");
  //замена templay.content.querySelector
  const tQuery = (id) => template.content.querySelector(id);
  //
  const templateElem = tQuery(".element");
  const templateCaption = tQuery(".element__caption");
  const templatePhoto = tQuery(".element__img");
  const templateText = tQuery(".element__text");
  const templateDelete = tQuery("#delete-btn");
  templateDelete.addEventListener("click", removeElement);
  const templateLike = tQuery("#like-btn");
  templateLike.addEventListener("click", likeCard);
  // add value to input
  templatePhoto.src = inputPlaceLink.value;
  templateText.textContent = inputPlaceName.value;

  popupFormCreate.reset();
  return templateElem;
};

const elements = query(".elements");
const addCard = (card) => elements.prepend(card);

const cardCreateHandler = (e) => {
  e.preventDefault();
  addCard(createCardFunc());
  togglePopupCreateHandler();

  // Вынести в функцию и вызвать здесь и внизу - этот цикл чтобы добавлялось к новой карточке
  for (let element of elements.children) {
    element.addEventListener("click", (e) => handleOpenModal(e, element));
  }
};

popupFormCreate.addEventListener("submit", cardCreateHandler);

// УДАЛЕНИЕ КАРТОЧКИ
const deleteButton = document.querySelectorAll(".element__btn_type_delete");
const element = document.querySelectorAll(".element");
//ф-ция удаления
const removeElement = (e) => e.target.closest(".element").remove();
deleteButton.forEach((btn) => btn.addEventListener("click", removeElement));

// for (let i = 0; i < deleteButton.length; i++) {
//   deleteButton[i].addEventListener("click", removeElement);
// }

// ОТКРЫТИЕ КАРТИНОК ПО КЛИКУ
const modal = query(".modal");
// const modalBody = query(".modal__body");
const modalClose = query(".modal__close"); //кнопка закрытия Х
const modalOpenImg = query("#myImg");
//картинки из Element, то на что жмем
modal.style.opacity = 0;
modal.style.visibility = "hidden";

const toggleModalHandler = () => {
  // console.dir(modal.style);
  if (modal.style.opacity === "0") {
    // console.log("open");
    modal.style.opacity = 1;
    modal.style.visibility = "visible";
  } else {
    // console.log("close");
    modal.style.opacity = 0;
    modal.style.visibility = "hidden";
  }
};
//закртыие картинки
modalClose.addEventListener("click", toggleModalHandler); // по крестику
//
const modalCaption = document.querySelector(".modal__caption"); // МОДАЛЬНАЯ ПОДПИСЬ
const modalText = document.querySelectorAll(".element__text"); //ПОДПИСЬ У ФОТОГРАФИЙ
const modalTextContent = modalText.forEach((txt) => {
  modalCaption.textContent = txt.textContent;
});

// открытие картинки
function handleOpenModal(e, element) {
  toggleModalHandler();
  modalOpenImg.src = e.target.src;
  modalCaption.textContent = element.children[2].children[0].innerHTML; // доступ к тексту в верстке
  // console.log("element", element);
  // console.log("element.children[2]", element.children[2]);
}

for (let element of elements.children) {
  element.addEventListener("click", (e) => handleOpenModal(e, element));
}
