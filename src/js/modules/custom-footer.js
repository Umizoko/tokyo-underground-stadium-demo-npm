// 
// CustomのFooter
// 
class CustomFooter extends HTMLElement {

    static get style() {
        return `
            <style>
                footer {
                    background-color: #0B0B0B;
                }

                .footer__title {
                    padding: 100px;
                    margin: 0;
                    font-size: 18px;
                    text-align: center;
                    color: white;
                }
                
                @media screen and (max-width: 1000px) {
                    .footer__title {
                        padding-right: 0;
                        padding-left: 0;
                    }
                }
            </style>
        `;
    }

    constructor() {

        super();

        // Create a shadow root
        var shadow = this.attachShadow({
            mode: 'open'
        });
        // Add a style
        shadow.innerHTML = CustomFooter.style;

        document.addEventListener('DOMContentLoaded', () => {

            var footer = document.createElement('footer');

            shadow.appendChild(footer);

            
            var div = document.createElement('div');
            div.className = 'footer';
    
            footer.appendChild(div);

            
            var p = document.createElement('p');
            p.innerText = this.getAttribute('data-title');
            p.className = 'footer__title';
    
            div.appendChild(p);
        });
    }

    connectedCallback(){
        console.log('connected callback.');
    }

    disconnectedCallback(){
        console.log('disconnected callback.');
    }
}

customElements.define('custom-footer', CustomFooter);