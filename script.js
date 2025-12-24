function login() {
  const passwordCorrecta = "ANITZACORONELSAJAMI";
  const password = document.getElementById("password").value;
  const mensaje = document.getElementById("mensaje");

  if (password === passwordCorrecta) {
      localStorage.setItem("acceso", "permitido");
      window.location.href = "index.html";
  } else {
      mensaje.style.color = "red";
      mensaje.textContent = "❌ Contraseña incorrecta";
  }
}

function protegerPagina() {
  if (localStorage.getItem("acceso") !== "permitido") {
      window.location.href = "login.html";
  }
}

function cerrarSesion() {
  localStorage.removeItem("acceso");
  window.location.href = "login.html";
}
function sonidoNetflixSuave() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "sine";        // sonido suave
  osc.frequency.setValueAtTime(90, ctx.currentTime); // grave tipo Netflix

  gain.gain.setValueAtTime(0.0001, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.4, ctx.currentTime + 0.08);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.9);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 1);
}
function animarEntrada() {
  document.body.classList.add("fade-in");
}
function abrirModal(img) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-img").src = img.src;
  document.getElementById("modal-desc").textContent = img.dataset.desc;
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}
