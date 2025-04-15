function verificarConexion() {
  const estado = navigator.onLine 
    ? "✅ Estás conectado a Internet." 
    : "❌ No estás conectado a Internet.";
  document.getElementById("estadoConexion").textContent = estado;
}
