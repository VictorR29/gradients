const btn = document.querySelector(".btn-hex");

btn.addEventListener("click", () => {
  const hexTex1 = document.getElementById("hex-color1");
  const hexTex2 = document.getElementById("hex-color2");
  const hexNumber = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  let hexCode1 = "";
  let hexCode2 = "";
  let ramdonIndex = 0;

  for (let i = 0; i < 6; i++) {
    ramdonIndex = Math.floor(Math.random() * hexNumber.length);
    hexCode1 += hexNumber[ramdonIndex];
    ramdonIndex = Math.floor(Math.random() * hexNumber.length);
    hexCode2 += hexNumber[ramdonIndex];
  }

  document.body.style.background = `linear-gradient(to right, #${hexCode1}, #${hexCode2})`;
  hexTex1.textContent = hexCode1 + ",";
  hexTex2.textContent = hexCode2;
});
