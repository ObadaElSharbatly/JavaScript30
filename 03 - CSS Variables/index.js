function main() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach(input => {
    input.addEventListener("change", changeValues);
    input.addEventListener("mousemove", changeValues);
  });
}

function changeValues() {
  const sizing = this.dataset.sizing || "";
  const varName = this.name;
  const value = this.value;

  document.documentElement.style.setProperty(
    `--${varName}`,
    ` ${value}${sizing}`
  );
}

window.addEventListener("load", main);
