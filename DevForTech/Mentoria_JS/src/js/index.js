function salvar(){
    let texto = document.getElementById("dados").value;

    let titulo = document.getElementById("nome").value;

    let blob = new Blob([texto],
    {
        type:"text/plain;charset=utf-8"

    });
    saveAs(blob,titulo + ".txt");
}