window.addEventListener("load", () => {
  let card = document.getElementsByClassName("card");
  let nowCard = -1;
  for (let i = 0; i < 4; i++) {
    card[i].addEventListener("click", (event) => {
      // card.add
      // alert(window.pageYOffset + card[i].getBoundingClientRect().top);
      event.stopPropagation();
      if (nowCard === -1) {
        nowCard = i;
        card[i].classList.add("open");
        card[i].style.top =
          card[i].getBoundingClientRect().top * -1 + 100 + "px";
        return;
      }
      card[nowCard].style.top = "50px";
      card[nowCard].classList.remove("open");
      if (nowCard === i) {
        nowCard = -1;
        return;
      }
      nowCard = i;
      card[i].style.top = card[i].getBoundingClientRect().top * -1 + 100 + "px";
      card[i].classList.add("open");
      //alert(window.pageYOffset + card[i].getBoundingClientRect().top);
    });
    // card[i].addEventListener("mouseout", () => {
    //   card[i].style.top = "50px";
    // });
  }
  document.body.addEventListener("click", () => {
    if (nowCard === -1) return;
    card[nowCard].style.top = "50px";
    card[nowCard].classList.remove("open");
    nowCard = -1;
  });
  window.addEventListener("scroll", () => {
    //alert(pageYOffset);
  });
});
