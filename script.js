document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-plan]").forEach((link) => {
  link.addEventListener("click", () => {
    const plan = link.dataset.plan;
    const subject = encodeURIComponent(`CatsMC hosting interest: ${plan}`);
    const body = encodeURIComponent(
      `Hi CatsMC,\n\nI'm interested in the ${plan} plan.\n\nPlease let me know when hosting is available.`
    );

    // Demo contact action. Replace with your real email or signup system.
    link.href = `mailto:hello@catsmc.dev?subject=${subject}&body=${body}`;
  });
});
