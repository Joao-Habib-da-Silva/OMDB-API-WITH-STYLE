async function Search() {
    const value = window.document.getElementById("value").value.toLowerCase()
    const content = window.document.getElementById("content")
    content.classList.toggle("open")
    try {
        const link = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=3338e32b&t=${value}`)
        if(!link.ok) {
            throw new Error("Erro no Fetch tente Novamente")
        }
        const data = await link.json()
        const imag = window.document.getElementById("image")
        const plot = window.document.getElementById("plot")
        const title = window.document.getElementById("title")
        const year = window.document.getElementById("year")
        const genre = window.document.getElementById("Genre")
       const rottent = window.document.getElementById("RottenTomatoes")
        const poster = data.Poster
       imag.src= poster
       plot.textContent = data.Plot
       title.textContent = data.Title
       year.textContent = data.Year
       genre.textContent = data.Genre

    }catch(error) {
        console.error("Erro tente novamente")
    }
}