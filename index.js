(function () {
  const popup = document.querySelector(".popup");
  const popupForm = document.querySelector(".popup__form");
  const openEditProfile = document.querySelector(".profile__btn");
  const popupClose = document.querySelector(".popup__close");
  // воспользуюсь стрелочной ф-цией, хоть мы их не проходили пока,
  // для визуального удобства
  const openPopupHandler = () => {
    popup.classList.add("popup_type_opened");
  };
  const closePopupHandler = () => {
    popup.classList.remove("popup_type_opened");
  };

  openEditProfile.addEventListener("click", openPopupHandler);
  popupClose.addEventListener("click", closePopupHandler);

  //--------------------------
  const formElement = document.querySelector(".popup__input");

  const saveButton = document.querySelector(".popup__save");

  const nameInput = document.querySelector(".popup__input_type_name");
  let userName = document.querySelector(".profile__name");

  nameInput.value = userName.textContent;

  saveButton.addEventListener("click", (event) => {
    event.preventDefault();
    closePopupHandler();

    userName.textContent = nameInput.value;
  });

  const jobInput = document.querySelector(".popup__input_type_job");
  let userJob = document.querySelector(".profile__profession");

  jobInput.value = userJob.textContent;

  saveButton.addEventListener("click", (event) => {
    event.preventDefault();
    closePopupHandler();

    userJob.textContent = jobInput.value;
  });

  // получаем коллекцию всех кнопок
  const hearthIconCollection = document.getElementsByClassName("element__btn");
  // console.dir(hearthIconCollection);
  // console.log(hearthIconCollection);

  // функция добавления события по клику на каждую кнопку по id
  function addEventHearthButton(index) {
    hearthIconCollection[index].addEventListener("click", () => {
      // условие для добавления и удаления класса - toggle
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
  }

  // пробегаемся в цикле по коллекции hearthIconCollection и вызываем ф-ию
  // addEventHearthButton в которую передаем индекс кнопки (id)
  for (let index = 0; index < hearthIconCollection.length; index++) {
    addEventHearthButton(index);
  }
})();
