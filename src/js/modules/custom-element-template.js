// Create a class for the element
class CustomElementTemplate extends HTMLElement {
    
    // Set style
    static get style() {
        return `
        <style>
        custom-element-template {
            display: inline-block;
            float: left;
            margin: 0.5em;
            border-radius: 3px;
            background: #FFF;
            box-shadow: 0 1px 3px rgba(0,0,0,0.25);
            font-family: Helvetica, arial, sans-serif;
            -webkit-font-smoothing: antialiased;
          }

          p {
            font-size: 100px;
          }
          
          custom-element-template::slotted(.product-img) {
            cursor: pointer;
            background: #FFF;
            margin: 0.5em;
          }
          
          custom-element-template::slotted(.product-name) {
            display: block;
            text-align: center;
            text-decoration: none;
            color: #08C;
            border-top: 1px solid #EEE;
            font-weight: bold;
            padding: 0.75em 0;
          }
          </style>
        `;
    }

    constructor(){
        // Always call super first in constructor
        super();

        // Create a shadow root
        var shadow = this.attachShadow({mode: 'open'});
        // Add a style
        shadow.innerHTML = CustomElementTemplate.style;

        var text = document.createElement('p');
        text.innerText = 'i im custom element template.';
        shadow.appendChild(text);

        // Create a standard img element
        // and it's attibuetes
        console.log(this);
        this.img = document.createElement('img');
        this.img.alt = this.getAttribute('data-name');
        this.img.src = this.getAttribute('data-img');
        this.img.width = '150';
        this.img.height = '150';
        this.img.className = 'product-img';

        // Add the image to the shadow root.
        shadow.appendChild(this.img);

        // Add an event listener to the image.
        this.img.addEventListener('click', () => {
            // windonws.location = this.getAttribute('data-url');
            console.log('Hi.');
        });
        
        // Create a link to the product
        var link = document.createElement('a');
        link.innerText = this.getAttribute('data-name');
        link.href = this.getAttribute('data-url');
        link.className = 'prodcuct-name';

        // Add the link to tha shadow root
        shadow.appendChild(link);
    }

    connectedCallback(){
        this.img.alt = this.getAttribute('data-name');
        this.img.src = this.getAttribute('data-img');
    }
}

// Define the new Element
customElements.define('custom-element-template',CustomElementTemplate);