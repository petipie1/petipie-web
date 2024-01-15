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

      //help dialog
      howItWorks: "How the platform works?",
      close: "Close",
      helpFirstScan: "1. Very first QR code scan",
      helpFirstScan1: `When the QR tag is scanned for the first time, 
      you have the possibility to fill in all of your and your pet's information.`,
      helpFirstScan2: `Filling in the data is quite simple and divided into two sections. To the first one (with the green color) you will
      fill in the data of your pet. While the other section below (orange color) fill in your personal data. Some
      the data are optional, only cellphone number is mandatory (since in case the dog or cat gets lost, you must have a form of contact).`,
      helpFirstScan3: `After making sure that the data is correct, click the "Finish" button at the bottom to confirm.
      Attention, after this step the data cannot
      be changed by you, but you must contact us for any changes, corrections or updates.`,
      helpSecondScan: "2. After initial configuration",
      helpSecondScan1: `After confirming the data, the tag is ready to be worn or put in the pet's collar. The tag can be scanned with the camera of any smartphone,
      and it will show your data and the pet's. Based on what you have filled out, whoever scans it can contact you by phone, Whatsapp, Email or Instagram by clicking the corresponding icons (below the dog/cat name)`,
      helpAvatar: "3. Avatar and BG color",
      helpAvatar1: `When you select the breed, the corresponding avatar will automatically appear. Also optional is the selection of the background color which can be changed by cliking
      the pencil icon (✏️).`,
      helpAvatar2: `If you do not find your pet's breed in the list,
      then you can select the "Other" option and enter the breed manually.`,
      helpLocation: "4. Location tracking",
      helpLocation1: `you must have email added to have this functionality as
      the gps location will be sent to you by email.`,
      helpLocation2: `If someone scans the tag around your dog/cat's collar, he/she can notify you of the real location by clicking the "Send Location" button.
      You will immediately receive an email with a link to the location that you can view on Google Maps.`,
      helpLocation3: `The medallion is not a GPS tracker, so it is not possible to track it in real time all the time.
      If it were like that, we would compete with Apple (maybe one day, who knows :D).`,
      helpContact: "5. Contact us for more info",
      helpContact1:
        "For more information, you can contact us on phone number and Whatsapp:",
      helpContact2: "as well as on Instagram:",
      important: "Important: ",
      clarification: "Clarification: ",

      //
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

      // help dialog
      howItWorks: "Si funksionon?",
      close: "Mbyll",
      helpFirstScan: "1. Skanimi per here te pare i QR kodit",
      helpFirstScan1: `Kur medalioni skanohet per here te pare, ju keni mundesi te
      plotesoni te gjitha te dhenat tuaja dhe te 4-putroshit.`,
      helpFirstScan2: `Plotesimi i te dhenave eshte mjaft i thjeshte dhe i ndare ne dy seksione. Tek i pari (me ngjyren jeshile) ju do te 
      plotesoni te dhenat e qenit apo maces. Ndersa seksioni tjeter me poshte (ngjyre portokalli) plotesoni te dhenat tuaja personale. Disa 
      te dhena jane opsionale, vetem nr. i tel eshte i detyrueshem (pasi ne rast se qeni ose macja humbet, duhet te keni nje forme kontakti).`,
      helpFirstScan3: `Pasi te siguroheni qe te dhenat jane te sakta, klikoni butonin ne fund "Perfundo" per te konfirmuar te dhenat.
      Kujdes, pas ketij hapi te dhenat nuk mund te 
      ndryshohen nga ju por duhet te na kontaktoni ne per cdo ndryshim, korrigjim apo per perditesimin e tyre.`,
      helpSecondScan: "2. Pas skanimit fillestar",
      helpSecondScan1: `Pas konfirmimit te te dhenave, medalioni eshte gati te vihet ne qafore. Medalioni mund te skanohet me kameran e cdo smartphone, 
      dhe do te shfaqe te dhenat tuaja dhe 4-putroshit. Ne baze te asaj qe ju keni plotesuar, kushdo qe e skanon ate mund t'ju kontaktoje ju me ane te tel, Whatsapp, Email apo Instagram duke klikuar ikonat perkatese (poshte emrit te qenit/maces)`,
      helpAvatar: "3. Avatari dhe ngjyra",
      helpAvatar1: `Kur ju zgjidhni rracen, automatikisht do t'ju shfaqet avatari i perngjashem. Gjithashtu opsionale eshte dhe pezgjedhja e ngjyres se background dukje klikuar
      tek ikona e lapsit (✏️).`,
      helpAvatar2: `Nese nuk e gjeni rracen perkatese te 4-putroshit tek lista, 
      atehre mund te zgjidhni opsionin "Tjeter" dhe te shkruani rracen manualisht.`,
      helpLocation: "4. Dergo lokacionin",
      helpLocation1: `ju duhet te keni te plotesuar email per te pasur kete funksionalitet pasi
      lokacioni ju vjen ne email.`,
      helpLocation2: `Nese dikush e skanon medalionin ne qaforen e qenit/maces suaj, ai/ajo mund t'ju njoftoje per lokacionin real duke klikuar butonin "Dergo lokacionin". 
      Menjehere ju do te merrni nje email me linkun e lokacionit qe mund ta shikonin ne Google Maps.`,
      helpLocation3: `Medalioni nuk eshte nje GPS tracker, pra nuk eshte i mundur gjurmimi ne kohe reale gjate gjithe kohes.
      Nese do te ishte ashtu, do te konkuronim Apple (mbase nje dite, s'i dihet :D).`,
      helpContact: "5. Na kontaktoni per me teper",
      helpContact1:
        "Per me teper info mund te na kontaktoni ne nr tel dhe Whatsapp:",
      helpContact2: "si dhe ne Instagram:",
      important: "E rendesishme: ",
      clarification: "Sqarim: ",
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
