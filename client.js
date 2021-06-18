let data = [];
let eatable = ["banana", "apple", "kiwi", "apricot", "tomato", "Avocado", "Bilberry", "Blackberry", "Blackcurrant", "Black sapote", "Canistel", "Cherry", "Damson", "Date", "Durian", "Egg Fruit", "Elderberry", "Guava", "Honeyberry", "Kumquat", "Lemon", "Lime", "Mango", "Nectarine", "Papaya"]

for (let i = 0; i < eatable.length; i++) {
    data.push({ width: parseInt(Math.random() * eatable.length), text: eatable[i] })
}
const maxWidth = Math.max(...data.map(item => item.width))

let svg = document.querySelector("svg");
let svgHeight = svg.getAttribute("height", svg.setAttribute("height", 500))
let svgWidth = svg.getAttribute("width", svg.setAttribute("width", 500))

for (let i = 0; i < data.length; i++) {
    let margin = { top: 3, bottom: 3, left: 3, right: 3 }
    let barHeight = svgHeight / data.length - margin.top     // yScale
    let barWidth = data[i].width * svgWidth / maxWidth;      // xScale

    svg.innerHTML += `<g class="bar" >
                    <rect width="${barWidth}" height="${barHeight}" y="${i * (barHeight + margin.top)}"rx="10"rx="10"></rect>
                    <text x="${barWidth + margin.left}" y="${i * (barHeight + margin.top)}"dy="0.8em">${data[i].text}</text>
                </g>`
}
