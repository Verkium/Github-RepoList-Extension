(async function() {
    await new Promise(r => setTimeout(r, 100)); // Warte 1 Sekunde

    const turboDiv = document.querySelector('div[data-turbo-body]');
    if (turboDiv) {
        const newDiv = document.createElement('p');
        const username = document.querySelector('meta[name="user-login"]')?.getAttribute('content');
        newDiv.innerHTML = `<a href="https://github.com/${username}?tab=repositories">Repo List ${username}</a>`;
        turboDiv.insertBefore(newDiv, turboDiv.firstChild);
    }

    console.log("Github Repo Extension Loaded ... ");
})();