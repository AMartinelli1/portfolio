document.addEventListener("DOMContentLoaded", () => {
  const segmented = document.querySelector(".segmented");
  const buttons = document.querySelectorAll(".seg-btn");
  const studentView = document.getElementById("studentView");
  const athleteView = document.getElementById("athleteView");

  // Safety check
  if (!segmented || buttons.length === 0 || !studentView || !athleteView) return;

  function setView(view) {
    segmented.dataset.active = view;

    buttons.forEach((btn) => {
      const active = btn.dataset.view === view;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });

    studentView.classList.toggle("is-visible", view === "student");
    athleteView.classList.toggle("is-visible", view === "athlete");

    document.body.classList.toggle("athlete-mode", view === "athlete");
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => setView(btn.dataset.view));
  });

  setView("student");
});

  // Student inner tabs (About / Resume)
  const studentTabs = document.querySelectorAll(".student-tab");
  const aboutTab = document.getElementById("aboutTab");
  const resumeTab = document.getElementById("resumeTab");

  function setStudentTab(tab) {
    studentTabs.forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.tab === tab);
    });

    if (aboutTab && resumeTab) {
      aboutTab.classList.toggle("is-visible", tab === "about");
      resumeTab.classList.toggle("is-visible", tab === "resume");
    }
  }

  studentTabs.forEach((btn) => {
    btn.addEventListener("click", () => setStudentTab(btn.dataset.tab));
  });

  // default
  setStudentTab("about");