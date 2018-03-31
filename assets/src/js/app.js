import 'font-awesome/scss/font-awesome.scss'; 
import '../scss/app.scss';

window.Popper = require('popper.js');
window.bootstrap = require('bootstrap');


if (module.hot) module.hot.accept();
const $ = window.jQuery;

class StarterClass {

    /**
    *  Initialize all JS
    */
    static init() {
       
        $(() => {
            this.foo();
        });
     
    }

    static foo() {

    }

}

StarterClass.init();
