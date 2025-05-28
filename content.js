function insertRepoElements() {
    const username = document.querySelector('meta[name="user-login"]')?.getAttribute('content');
    if (!username) return;
    const link = `https://github.com/${username}?tab=repositories`;

    // const att = `<a href="https://github.com/${username}?tab=repositories">Repo List ${username}</a>`;
    // const turboDiv = document.querySelector('div[data-turbo-body]');
    // if (turboDiv && !document.getElementById('repo-link-div')) {
    //     const newDiv = document.createElement('p');
    //     newDiv.id = 'repo-link-div'; // ID setzen!
    //
    //     newDiv.innerHTML = att;
    //     turboDiv.insertBefore(newDiv, turboDiv.firstChild);
    // }

    const toolBar = document.getElementsByClassName('AppHeader-actions')[0];
    if (toolBar && !document.getElementById('repo-toolbar-link')) {
        const newDiv2 = document.createElement("span");
        newDiv2.id = 'repo-toolbar-link'; // ID setzen!

        newDiv2.innerHTML = `<a href="${link}"
           data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;ISSUES_HEADER&quot;,&quot;label&quot;:null}"
           id="icon-button-3687d1cc-80c1-4c31-b4e2-eeadc62caa2e"
           aria-labelledby="tooltip-47f31707-50b4-481b-ac1a-ed582bf40eb5" data-view-component="true"
           class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted" 
           style="background: linear-gradient(black, purple);">

            <svg aria-hidden="true" focusable="false" class="octicon octicon-repo Octicon-sc-9kayk9-0"
                 viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block"
                 overflow="visible" style="vertical-align: text-bottom;">
                <path
                    d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
            </svg>
        </a>`;
        toolBar.insertBefore(newDiv2, toolBar.firstChild);
    }


    console.log("Github Repo Extension Loaded ... ");
}

// Initial ausführen
insertRepoElements();

// Beobachte DOM-Änderungen
const observer = new MutationObserver(() => {
    insertRepoElements();
});
observer.observe(document.body, {childList: true, subtree: true});