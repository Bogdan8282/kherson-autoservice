document.querySelector(".intro__button").addEventListener("click", function () {
  document.querySelector(".benefits").scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".phone").forEach(function (phoneElement) {
  phoneElement.addEventListener("click", function () {
    var tempInput = document.createElement("input");
    tempInput.value = "0988628268";
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    var notification = document.getElementById("notification");
    notification.classList.add("show");

    setTimeout(function () {
      notification.classList.remove("show");
    }, 2000);
  });
});
