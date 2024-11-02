import WebTable from './table/index';
import WebTableColumn from './table-column/index';
import WebInput from './input/index';
// import WebForm from './form/index';
// import WebFormItem from './form-item/index';
import WebDialog from './dialog/index';

const components = [WebTable, WebTableColumn, WebInput, WebDialog];
// @ts-ignore
const install = function (Vue) {
    components.forEach((component) => {
        Vue.component(component.name, component);
    });
};

export default {
    version: '^2.7.2',
    install,
    WebTable,
    WebTableColumn,
    WebInput,
    WebDialog
    // WebForm,
    // WebFormItem
};
