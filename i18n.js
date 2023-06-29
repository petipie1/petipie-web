import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "search": "Search",
      "callWaiterTitle": "Call the waiter",
      "callWaiterMsg": "Call the waiter to your umbrella/sunbed?",
      "oopsTitle": "Oops, by mistake?",
      "oopsMsg": "You just ordered a few moments ago, please let's wait a bit :D",
      "oopsWaiterMsg": "You just called the waiter a few moments ago, please let's wait a bit :D",
      "orderConfirmedTitle": "Order confirmed.",
      "orderConfirmedMsg": "Waiter is coming, please stay there :)",
      "waiterComingTitle": "Waiter called",
      "waiterComingMsg": "Please wait for the waiter to come.",
      "yes": "YES",
      "no": "NO",
      "continue": "Continue",
      "order": "Order",
      "notes": "Notes",
      "Drinks": "Drinks",
      "Cocktails": "Cocktails",
      "Our Suggestions": "Top picks for you",
      "For Kids": "For Kids",
      "Beers": "Beers",
      "Wine": "Wine",
      "Coffee": "Coffee",
      "Desserts": "Desserts",
      "Soft Drinks": "Soft Drinks",
      "Alcoohlic Drinks": "Alcoohlic Drinks",
      "Other": "Other",
      "Snacks": "Snacks",
      "Pizza & Sandwich": "Pizza & Sandwich",
      "Breakfast": "Breakfast",
      "Albanian": "Shqip",
      "English": "Anglisht",
      "Promotions": "Promotions",
      "Pizza": "Pizza",
      "Ice Cream": "Ice Cream"
    }
  },
  al: {
    translation: {
      "search": "Kerko",
      "callWaiterTitle": "Therrisni kamarierin",
      "callWaiterMsg": "Doni te therrisni kamarierin tek çadra?",
      "oopsTitle": "Oops, gabimisht?",
      "oopsMsg": "Ju porositet para pak momentesh, ju lutem prisni pak :D",
      "oopsWaiterMsg": "Ju therritet kamarierin para pak momentesh, ju lutem prisni pak :D",
      "orderConfirmedTitle": "Porosia u konfirmua.",
      "orderConfirmedMsg": "Kamarieri po vjen, ju lutem qendroni ne cader :)",
      "waiterComingTitle": "U njoftua",
      "waiterComingMsg": "Kamarieri u njoftua dhe do të vijë per pak.",
      "yes": "PO",
      "no": "JO",
      "continue": "Vazhdo",
      "order": "Porosit",
      "notes": "Shenime",
      "Drinks": "Pije",
      "Cocktails": "Koktejle",
      "Our Suggestions": "Te Preferuarat",
      "For Kids": "Per Femije",
      "Beers": "Birra",
      "Wine": "Verë",
      "Coffee": "Kafe",
      "Desserts": "Embelsira",
      "Soft Drinks": "Pije Freskuese",
      "Alcoohlic Drinks": "Pije Alooklike",
      "Other": "Te tjera",
      "Snacks": "Snacks",
      "Pizza & Sandwich": "Pica & Sanduic",
      "Breakfast": "Mengjesi",
      "Albanian": "Albanian",
      "English": "English",
      "Promotions": "Promocione",
      "Pizza": "Pica",
      "Ice Cream": "Akullore"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;