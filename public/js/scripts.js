// O HTML Será construido com as funções daqui
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/data');
        const data = await response.json();
        document.getElementById('name').textContent = data.nome;
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
    }
});
