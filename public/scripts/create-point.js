
function populateUFs() {

    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(res => res.json()).then(states => {
        for(state of states) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

populateUFs()


function getCities(event) {

    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value
    const indexOfSelectedState  = event.target.selectedIndex

    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value> Selecione a cidade</option>"
    citySelect.disabled = true

    fetch(url).then(res => res.json()).then(cities => {

        
        for(const city of cities) {
            
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    })
}


 document
     .querySelector("select[name=uf]")
     .addEventListener("change", getCities)

//itens de coleta
const itemsToCollect = document.querySelectorAll(".items-grid")

for (const item of itemsToCollect) {

    item.addEventListener("click", handleSelectedItem)
    
}

const collectedItems = document.querySelector("input[name=items")

// lógica da seleção dos itens
let selectedItems = []
function handleSelectedItem(event) {

    const itemLi = event.target

    itemLi.classList.toggle("selected")

    const itemId = itemLi.target.dataset.id

    //Verifica se existem itens selecionados, se sim
    //pega todos os itens selecionados
    const alreadySelected = selectedItems.findIndex( item => {
        return item == itemId
    })

    //se já estiver selecionado,
    if (alreadySelected != -1 ) {
        // tirar da seleção
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })

        selectedItems = filteredItems
    } else {
        // se não estar selecionado
        // adicionar a seleção
        selectedItems.push(itemId)
    }

    //atualizar o input escondido
    collectedItems.value = selectedItems




}











