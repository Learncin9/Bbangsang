class CustomTitle extends HTMLElement {
    connectedCallback() {
        const TINY_SCREEN = 300;
        
        if (screen.width > TINY_SCREEN) {
            this.innerHTML = '<span class="red">Bb</span>ang<span class="blue">S</span>ang';
        } else {
            this.innerHTML = '<span class="red">Bb</span>ang<br/><span class="blue">S</span>ang';
        }
    }
}

customElements.define('custom-title', CustomTitle);

class CustomAnchorTD extends HTMLElement {
    connectedCallback() {
        let txt = this.getAttribute('txt');
        let link = this.getAttribute('link');
        
        this.innerHTML = `<td><a href='${link}'>${txt}</a></td>`;
    }
}

customElements.define('a-td', CustomAnchorTD);