const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", addEvent)
form.addEventListener("change", saveData)

function addEvent() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, 5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("O dia de hoje já foi inserido!🛑")
    return
  }
  alert("Dia adicionado com sucesso!✔️")

  nlwSetup.addDay(today)
}

function saveData() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

nlwSetup.setData(data)
nlwSetup.load()
