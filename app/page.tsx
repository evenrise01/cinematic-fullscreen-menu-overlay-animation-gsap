"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

//TODO: check why links only appear once with the menu animation then disappear
export default function Home() {
  useGSAP(() => {
    // DOM element selectors
    const container = document.querySelector(".container");
    const menuToggle = document.querySelector(".menu-toggle");
    const menuOverlay = document.querySelector(".menu-overlay");
    const menuContent = document.querySelector(".menu-content");
    const menuPreviewImg = document.querySelector(".menu-preview-img");
    const menuLinks = document.querySelectorAll(".link a");
    let isMenuOpen = false;
    let isAnimating = false;

    menuToggle?.addEventListener("click", () => {
      if (!isMenuOpen) openMenu();
      else closeMenu();
    });

    function cleanupPreviewImages() {
      const previewImages = menuPreviewImg?.querySelectorAll("img");

      if (previewImages && previewImages.length > 3) {
        for (let i = 0; i < previewImages.length - 3; i++) {
          menuPreviewImg?.removeChild(previewImages[i]);
        }
      }
    }

    function resetPreviewImg() {
      if (menuPreviewImg) {
        menuPreviewImg.innerHTML = "";
        const defaultPreviewImg = document.createElement("img");
        defaultPreviewImg.src = "/img-1.jpg";
        menuPreviewImg.appendChild(defaultPreviewImg);
      }
    }

    function animateMenuToggle(isOpening: boolean) {
      const open = document.querySelector("p#menu-open");
      const close = document.querySelector("p#menu-close");

      gsap.to(isOpening ? open : close, {
        x: isOpening ? -5 : 5,
        y: isOpening ? -10 : 10,
        rotation: isOpening ? -5 : 5,
        opacity: 0,
        delay: 0.25,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(isOpening ? close : open, {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        delay: 0.5,
        duration: 0.5,
        ease: "power2.out",
      });
    }

    function openMenu() {
      if (isAnimating || isMenuOpen) return;
      isAnimating = true;

      gsap.to(container, {
        rotation: 10,
        x: 300,
        y: 450,
        scale: 1.5,
        duration: 1.25,
        ease: "power4.inOut",
      });

      animateMenuToggle(true);

      gsap.to(menuContent, {
        rotation: 0,
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.25,
        ease: "power4.inOut",
      });

      gsap.to([".link a", ".social a"], {
        y: "0%",
        opacity: 1,
        duration: 1,
        delay: 0.75,
        stagger: 0.1,
        ease: "power3.inOut",
      });

      gsap.to(menuOverlay, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)",
        duration: 1.25,
        ease: "power4.inOut",
        onComplete: () => {
          isMenuOpen = true;
          isAnimating = false;
        },
      });
    }

    function closeMenu() {
      if (isAnimating || !isMenuOpen) return;
      isAnimating = true;

      gsap.to(container, {
        rotation: 0,
        x: 0,
        y: 0,
        scale: 1,
        duration: 1.25,
        ease: "power4.inOut",
      });

      animateMenuToggle(false);

      gsap.to(menuContent, {
        rotation: -15,
        x: -100,
        y: -100,
        opacity: 0.25,
        scale: 1.5,
        duration: 1.25,
        ease: "power4.inOut",
      });

      gsap.to([".link a", ".social a"], {
        y: "100%",
        opacity: 0,
        duration: 1,
        delay: 0.25,
        stagger: 0.1,
        ease: "power3.inOut",
      });

      gsap.to(menuOverlay, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1.25,
        ease: "power4.inOut",
        onComplete: () => {
          isMenuOpen = false;
          isAnimating = false;
          gsap.set([".link a", ".social a"], { y: "120%", opacity: 0.25 });
          resetPreviewImg();
        },
      });
    }

    menuLinks?.forEach((link) => {
      link.addEventListener("mouseover", () => {
        if (!isMenuOpen || isAnimating) return;

        const imgSrc = link.getAttribute("data-img");
        if (!imgSrc) return;

        const previewImages = menuPreviewImg?.querySelectorAll("img");
        if (
          previewImages &&
          previewImages.length > 0 &&
          previewImages[previewImages.length - 1].src.endsWith(imgSrc)
        )
          return;

        const newPreviewImg = document.createElement("img");
        newPreviewImg.src = imgSrc;
        newPreviewImg.style.opacity = "0";
        newPreviewImg.style.transform = "scale(1.25) rotate(10deg)";

        menuPreviewImg?.appendChild(newPreviewImg);
        cleanupPreviewImages();

        gsap.to(newPreviewImg, {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.75,
          ease: "power2.out",
        });
      });
    });
  }, {});
  return (
    <>
      <nav>
        <div className="logo">
          <a href="#">Evenrise</a>
        </div>

        <div className="menu-toggle">
          <p id="menu-open">Menu</p>
          <p id="menu-close">Close</p>
        </div>
      </nav>
      {/* Clip path to the the menu-overlay and tilt animation to the menu-content*/}
      <div className="menu-overlay">
        <div className="menu-content">
          <div className="menu-items">
            <div className="col-lg">
              <div className="menu-preview-img">
                <Image src="/img-1.jpg" alt="" width={400} height={300} />
              </div>
            </div>
            <div className="col-sm">
              <div className="menu-links">
                <div className="link">
                  <a href="#" data-img="/img-1.jpg">
                    Visions
                  </a>
                </div>

                <div className="link">
                  <a href="#" data-img="/img-2.jpg">
                    Core
                  </a>
                </div>

                <div className="link">
                  <a href="#" data-img="/img-3.jpg">
                    Signals
                  </a>
                </div>

                <div className="link">
                  <a href="#" data-img="/img-4.jpg">
                    Connect
                  </a>
                </div>
              </div>
              <div className="menu-socials">
                <div className="social">
                  <a href="#" data-img="/img-1.jpg">
                    Behance
                  </a>
                </div>

                <div className="social">
                  <a href="#" data-img="/img-2.jpg">
                    Dribble
                  </a>
                </div>

                <div className="social">
                  <a href="#" data-img="/img-3.jpg">
                    Instagram
                  </a>
                </div>

                <div className="social">
                  <a href="#" data-img="/img-4.jpg">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-footer">
            <div className="col-lg">
              <a href="#">Run Sequence</a>
            </div>
            <div className="col-sm">
              <a href="#">Origin</a>
              <a href="#">Join Signal</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="hero">
          <div className="hero-img">
            <Image src="/hero.jpg" alt="" width={800} height={600} />
          </div>
          <h1>Elevate your websites with Intention.</h1>
        </section>
      </div>
    </>
  );
}
