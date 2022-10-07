import { createI18n } from "vue-i18n";
import messages from "./messages";
import store from "../store/store";

const i18n = createI18n({
    locale: store.getters.locale,
    messages: messages
});

export default i18n;