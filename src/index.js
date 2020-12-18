//Import css stylesheet
import './master-styles.css'

//------------------------ Tooltip ------------------------
import Tooltip from './classes/tooltip'

const tooltip = new Tooltip(document.querySelector('.tooltips'));
tooltip.init();

//----------------------- Dropdown -----------------------
import Dropdown from './classes/dropdown'

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
});

//------------------------- Tabs -------------------------
import Tabs from './classes/tabs'

const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();