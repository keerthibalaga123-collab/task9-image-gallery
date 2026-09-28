/* =========================================
   IMAGE GALLERY - TASK 9
========================================= */


// Get all gallery images
const galleryItems =
    document.querySelectorAll(".gallery-item");


// Get lightbox elements
const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxTitle =
    document.getElementById("lightboxTitle");

const imageCounter =
    document.getElementById("imageCounter");

const closeBtn =
    document.getElementById("closeBtn");

const prevBtn =
    document.getElementById("prevBtn");

const nextBtn =
    document.getElementById("nextBtn");


// Store current image index
let currentIndex = 0;


/* =========================================
   OPEN LIGHTBOX
========================================= */

function openLightbox(index) {

    currentIndex = index;

    const item =
        galleryItems[currentIndex];

    const image =
        item.querySelector("img");

    const title =
        item.querySelector("h3");


    // Set large image
    lightboxImage.src = image.src;


    // Set alt text
    lightboxImage.alt = image.alt;


    // Set title
    lightboxTitle.textContent =
        title.textContent;


    // Set counter
    imageCounter.textContent =
        `${currentIndex + 1} / ${galleryItems.length}`;


    // Show lightbox
    lightbox.classList.add("active");


    // Accessibility
    lightbox.setAttribute(
        "aria-hidden",
        "false"
    );


    // Prevent background scrolling
    document.body.style.overflow = "hidden";
}


/* =========================================
   CLOSE LIGHTBOX
========================================= */

function closeLightbox() {

    lightbox.classList.remove("active");


    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );


    // Restore scrolling
    document.body.style.overflow = "";
}


/* =========================================
   SHOW NEXT IMAGE
========================================= */

function showNextImage() {

    currentIndex++;

    if (
        currentIndex >=
        galleryItems.length
    ) {
        currentIndex = 0;
    }


    updateLightbox();
}


/* =========================================
   SHOW PREVIOUS IMAGE
========================================= */

function showPreviousImage() {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex =
            galleryItems.length - 1;
    }


    updateLightbox();
}


/* =========================================
   UPDATE LIGHTBOX
========================================= */

function updateLightbox() {

    const item =
        galleryItems[currentIndex];

    const image =
        item.querySelector("img");

    const title =
        item.querySelector("h3");


    lightboxImage.src =
        image.src;


    lightboxImage.alt =
        image.alt;


    lightboxTitle.textContent =
        title.textContent;


    imageCounter.textContent =
        `${currentIndex + 1} / ${galleryItems.length}`;
}


/* =========================================
   IMAGE CLICK EVENTS
========================================= */

galleryItems.forEach(
    (item, index) => {

        item.addEventListener(
            "click",
            () => {

                openLightbox(index);

            }
        );

    }
);


/* =========================================
   BUTTON EVENTS
========================================= */

closeBtn.addEventListener(
    "click",
    closeLightbox
);


nextBtn.addEventListener(
    "click",
    showNextImage
);


prevBtn.addEventListener(
    "click",
    showPreviousImage
);


/* =========================================
   CLOSE WHEN CLICKING OUTSIDE IMAGE
========================================= */

lightbox.addEventListener(
    "click",
    (event) => {

        if (
            event.target === lightbox
        ) {

            closeLightbox();

        }

    }
);


/* =========================================
   KEYBOARD CONTROLS
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        // Escape → Close
        if (
            event.key === "Escape"
        ) {

            closeLightbox();

        }


        // Right arrow → Next
        if (
            event.key === "ArrowRight"
        ) {

            if (
                lightbox.classList.contains(
                    "active"
                )
            ) {

                showNextImage();

            }

        }


        // Left arrow → Previous
        if (
            event.key === "ArrowLeft"
        ) {

            if (
                lightbox.classList.contains(
                    "active"
                )
            ) {

                showPreviousImage();

            }

        }

    }
);