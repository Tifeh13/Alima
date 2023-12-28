let dropDownIcon = document.querySelector(".drop-down");

dropDownIcon.addEventListener("click", function () {
  let dropdownList = dropDownIcon
    .closest(".popular")
    .querySelector(".drop-down-list");
  dropdownList.style.display =
    dropdownList.style.display === "block" ? "none" : "block";
});
