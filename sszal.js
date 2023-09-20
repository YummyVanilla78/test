if (window.location.pathname.slice(1)) {
      window.location.href = 'http://404.sszal.kro.kr';
    }
    document.addEventListener("DOMContentLoaded", function () {
      const sszalImage = document.getElementById("sszal");
      const gifCursor = document.getElementById("gifCursor");

      sszalImage.addEventListener("mouseenter", () => {
        gifCursor.style.display = "block";
      });

      sszalImage.addEventListener("mouseleave", () => {
        gifCursor.style.display = "none";
      });

      document.addEventListener("mousemove", (e) => {
        gifCursor.style.left = e.clientX + "px";
        gifCursor.style.top = e.clientY + "px";
      });
    });
