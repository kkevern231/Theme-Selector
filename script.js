document.getElementById("dark").addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--body-background-color",
    "black"
  );
  document.documentElement.style.setProperty(
    "--section-background-color",
    "grey"
  );
  document.documentElement.style.setProperty("--text-color", "white");
});

document.getElementById("light").addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--body-background-color",
    "white"
  );
  document.documentElement.style.setProperty(
    "--section-background-color",
    "lightgrey"
  );
  document.documentElement.style.setProperty("--text - color", "black");
});
