const unreadCount = document.querySelector("header h1 span");
const markAllAsRead = document.querySelector("header p");
const cards = document.querySelectorAll("article");
const unreadRedDot = document.querySelectorAll(".unread--red-dot");
const privateMessage = document.querySelector(".private-message");

unreadCount.textContent = 0;

markAllAsRead.addEventListener("click", () => {
  cards.forEach((card) => {
    const cardIsUnread = card.classList.contains("unread");
    if (cardIsUnread) {
      unreadCount.textContent = 0;
      card.classList.remove("unread");
    }
  });
  unreadRedDot.forEach((dot) => {
    dot.remove();
  });
});

cards.forEach((card, index) => {
  card.classList.contains("unread") ? unreadCount.textContent++ : null;

  card.addEventListener("click", () => {
    const cardIsUnread = card.classList.contains("unread");
    if (cardIsUnread) {
      card.classList.remove("unread");
      unreadCount.textContent--;
    }
    unreadRedDot.forEach((dot, dotIndex) => {
      index == dotIndex ? dot.remove() : null;
    });
  });
});

privateMessage.addEventListener("click", () => {
  const hidden = document.querySelector(".private-message--hidden");
  hidden.classList.toggle("private-message--show");
});

/* You can add a hidden message at every card if you want */

/*const cards = document.querySelectorAll("article span:nth-child(3)");
cards.forEach((citem, cindex) => {
  const hidden = document.querySelectorAll(".private-message--hidden");
  citem.addEventListener("click", () => {
    hidden.forEach((hitem, hindex) => {
      if (cindex == hindex) {
        hitem.classList.toggle("private-message--show");
        console.log(hitem);
      }
    });
  });
});*/
