(function interactionPopup() {
  const popup = document.querySelector(".popup");
  const popupForm = document.querySelector(".popup__form");
  const openEditProfile = document.querySelector(".profile__btn");
  const popupClose = document.querySelector(".popup__close");
  const nameInput = document.querySelector(".popup__input_type_name");
  const userName = document.querySelector(".profile__name");
  const jobInput = document.querySelector(".popup__input_type_job");
  const userJob = document.querySelector(".profile__profession");
  const hearthIconCollection = document.getElementsByClassName("element__btn");

  // функция добавления события по клику на каждую кнопку по id
  const addEventHearthButton = (index) => {
    // объявление
    hearthIconCollection[index].addEventListener("click", () => {
      if (
        hearthIconCollection[index].classList.contains(
          "element__btn_type_disactive"
        )
      ) {
        hearthIconCollection[index].classList.remove(
          "element__btn_type_disactive"
        );
        hearthIconCollection[index].classList.add("element__btn_type_active");
      } else {
        hearthIconCollection[index].classList.remove(
          "element__btn_type_active"
        );
        hearthIconCollection[index].classList.add(
          "element__btn_type_disactive"
        );
      }
    });
  };

  for (let index = 0; index < hearthIconCollection.length; index++) {
    addEventHearthButton(index); // вызов
  }

  const togglePopupHandler = () => {
    popup.classList.toggle("popup_type_opened");
  };

  openEditProfile.addEventListener("click", togglePopupHandler);
  popupClose.addEventListener("click", togglePopupHandler);

  nameInput.value = userName.textContent;

  const submitForm = (event) => {
    event.preventDefault();

    togglePopupHandler();

    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;
  };

  popupForm.addEventListener("submit", submitForm);

  jobInput.value = userJob.textContent;
})();
