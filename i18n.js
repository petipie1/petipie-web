import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      search: "Search",
      orderConfirmedTitle: "Order confirmed.",
      yes: "YES",
      no: "NO",
      continue: "Continue",
      order: "Order",
      notes: "Notes",
      "Our Suggestions": "Top picks for you",
      Other: "Other",
      Albanian: "Shqip",
      English: "Anglisht",
      Promotions: "Promotions",
      finish: "Finish",
      Male: "Male",
      Female: "Female",
      confirm: "Confirm",
      cancel: "Cancel",
      city: "City",
      address: "Address",
      belongsTo: "Belongs to",
      information: "INFORMATION",
      Mashkull: "Male",
      Femer: "Female",

      //pet form
      formPetData: "Pet information:",
      formPetName: "Pet name",
      formPetGender: "Gender",
      formPetBreed: "Breed",
      formPetInfo: "Info/Description",
      formOwnerInfo: "Your information:",
      formOwnerName: "Name",
      formOwnerCity: "City (optional)",
      formOwnerAddress: "Address (optional)",
      formOwnerEmail: "Email (optional)",
      formOwnerInstagram: "Instagram (optional)",
      formPetBreedDog: "Dog 🐶",
      formPetBreedCat: "Cat 🐱",
      formPetConfirmTitle: "Confirm information?",
      formPetConfirmMessage1:
        "Are you sure to continue? After this step, if you want to update any data you have to contact us on Whatsapp:",
      formPetConfirmMessage2: " or email ",
      formPetConfirmMessagePhone: "+355683303005 ",
      formPetConfirmMessageEmail: "petipie.contact@gmail.com",
      sendLocationButton: "Send location",
      sendLocationTitle: "Send Location?",
      sendLocationMessage:
        "By confirming you will send the GPS location to the pet owner.",
      locationSentMessage: "Location sent successfully!",
      locationNotSentMessage:
        "Location not sent, please double check location settings!",
    },
  },
  al: {
    translation: {
      search: "Kerko",
      oopsTitle: "Oops, gabimisht?",
      orderConfirmedTitle: "Porosia u konfirmua.",
      yes: "PO",
      no: "JO",
      continue: "Vazhdo",
      order: "Porosit",
      notes: "Shenime",
      "Our Suggestions": "Te Preferuarat",
      Other: "Te tjera",
      Albanian: "Albanian",
      English: "English",
      Promotions: "Promocione",
      //pet form
      formPetData: "Të dhënat e qenit/maces:",
      formPetName: "Emri i qenit/maces",
      formPetGender: "Gjinia",
      formPetBreed: "Rraca",
      formPetInfo: "Info/Pershkrim",
      formOwnerInfo: "Të dhënat personale:",
      formOwnerName: "Emri",
      formOwnerCity: "Qyteti (opsional)",
      formOwnerAddress: "Adresa  (opsional)",
      formOwnerEmail: "Email (opsional)",
      formOwnerInstagram: "Instagram (opsional)",
      formPetBreedDog: "Qen 🐶",
      formPetBreedCat: "Mace 🐱",
      formPetConfirmTitle: "Konfirmoni të dhënat?",
      formPetConfirmMessage1:
        "Jeni të sigurt të vazhdoni? Pas këtij hapi të dhënat nuk mund të ndryshohen nga ju por duhet të kontaktoni suportin",
      formPetConfirmMessage2: " ose në email ",
      formPetConfirmMessagePhone: "0683303005",
      formPetConfirmMessageEmail: "petipie.contact@gmail.com",
      sendLocationButton: "Dergo lokacionin",
      sendLocationTitle: "Dergo lokacionin?",
      sendLocationMessage:
        "Duke konfirmuar, ju do te dergoni lokacionin e GPS tek pronari/pronarja.",
      locationSentMessage: "Lokacioni u dergua me sukses!",
      locationNotSentMessage: "Lokacioni nuk u dergua, rishikoni settings!",
      // ndryshohen nga ju por duhet të kontaktoni suportin",
      // <strong> 0683303005 </strong>
      // ose ne email <strong>petipie.contact@gmail.com </strong>`,
      // Generic
      "Please wait...": "Ju lutem prisni...",
      finish: "Perfundo",
      Male: "Mashkull",
      Female: "Femer",
      confirm: "Konfirmo",
      cancel: "Anullo",
      city: "Qyteti",
      address: "Adresa",
      belongsTo: "I perket",
      information: "INFORMACION",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "al", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
