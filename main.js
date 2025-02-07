
  let images = document.querySelectorAll(".frame img");
        let buttons = document.querySelectorAll(".navi button");
        let index = 0;
        let autoSwitch;

        function showImage(i) {
            // Remove current active classes
            images[index].classList.remove("active");
            buttons[index].classList.remove("active");

            // Show new image
            index = i;
            images[index].classList.add("active");
            buttons[index].classList.add("active");

            // Restart auto-switching
            clearInterval(autoSwitch);
            autoSwitch = setInterval(nextImage, 2000);
        }

        function nextImage() {
            let nextIndex = (index + 1) % images.length;
            showImage(nextIndex);
        }

        // Start automatic switching
        autoSwitch = setInterval(nextImage, 2000);
