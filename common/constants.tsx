const petData = {
  name: "Roko",
  city: "Tirane",
  orderCode: "dori1992",
  contactUsIntead: false,
  missingMessage: "Please contact me ASAP!!!",
  imageUrl: null,
  info: "Hi, I am Roko and I am using Petipie to be safe. In case I went missing, please contact my owner, she is very kind and will give you a tip.",
  breed: "",
  ownerInfo: {
    name: "Ada",
    contact: {
      phone: "0686284516",
      whatsapp: "+355688803602",
      instagram: "desara_ndreko",
      email: "dorianmusaj@gmail.com",
    },
  },
  styles: {
    avatarBg: "Lush",
  },
  createdAt: "2022-05-31T16:09:15.652098Z",
  updatedAt: "2022-05-31T16:09:15.655003Z",
};

export const petResponse = {
  externalId: "a12d4614-962e-4310-8b89-3262f0847436",
  id: "a12d4614-962e-4310-8b89-3262f0847436",
  status: "New",
  subscriptionEndDate: "2024-10-27 12:03:06.111 +0100",
  data: petData,
};

export const petipieContact = {
  phone: "0686284516",
  whatsapp: "0686284516",
  instagram: "nadotwins",
  email: "dorianmusaj@gmail.com",
};

export const Breed = {
  // Dog: {
  Rottweiler: "Rottweiler",
  Chihuahua: "Chihuahua",
  Husky: "Husky",
  Golden: "Golden",
  Maltese: "Maltese",
  Eskimo: "Eskimo",
  Dalmatian: "Dalmatian",
  Poodle: "Poodle",
  Pug: "Pug",
  Pomerian: "Pomerian",
  Pitbull: "Pitbull",
  "Yorkshire Terrier": "Yorkshire Terrier",
  Doberman: "Doberman",
  Corgi: "Corgi",
  "Chow chow": "Chow chow",
  Bullmastiff: "Bullmastiff",
  "German Shepherd": "German Shepherd",
  Bulldog: "Bulldog",
  Tjeter: "Tjeter",
  // },
  // Cat: {
  MaineCoon: "MaineCoon",
  Persian: "Persian",
  Ginger: "Ginger",
  Scotish: "Scotish",
  Tuxedo: "Tuxedo",
  Siamese: "Siamese",
  Tjetër: "Tjetër",
  // }
};

export const BreedIcons: KeyValueObject = {
  Rottweiler: "/icons/ic_rottweiler.png",
  Chihuahua: "/icons/ic_chihuahua.png",
  Husky: "/icons/ic_husky.png",
  Golden: "/icons/ic_golden.png",
  Bullmastiff: "/icons/ic_bullmastiff.png",
  Maltese: "/icons/ic_maltese.png",
  Eskimo: "/icons/ic_eskimo.png",
  Dalmatian: "/icons/ic_dalmatian.png",
  Poodle: "/icons/ic_poodle.png",
  Pug: "/icons/ic_pugy.png",
  Pomerian: "/icons/ic_pomerian.png",
  Pitbull: "/icons/ic_pitbull.png",
  "Yorkshire Terrier": "/icons/ic_yorkshire-terrier.png",
  Doberman: "/icons/ic_doberman.png",
  Corgi: "/icons/ic_corgi.png",
  "Chow chow": "/icons/ic_chow-chow.png",
  "German Shepherd": "/icons/ic_german-sheperd.png",
  Bulldog: "/icons/ic_bullmastiff.png",
  MaineCoon: "/icons/ic_maine-coon.png",
  Persian: "/icons/ic_persian.png",
  Ginger: "/icons/ic_ginger.png",
  Scotish: "/icons/ic_scotish.png",
  Tuxedo: "/icons/ic_tuxedo.png",
  Siamese: "/icons/ic_siamese.png",
  Tjeter: "/ProfilePicStandard.png",
  Tjetër: "/icons/ic_tjeter.png",
};

type KeyValueObject = {
  [key: string]: string;
};

export const PetImages: KeyValueObject = {
  // Dogs

  Rottweiler:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1695155600/dog/rottweiler_frecgk.png",
  Chihuahua:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1695155601/dog/chihuahua_dak1sp.png",
  Husky:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1695155609/dog/husky_yxvh7z.png",
  Golden:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1694863024/dog/golden_retriever_hr2x6h.png",
  Bullmastiff:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1695157719/dog/bullmastiff_n29jju.png",
  Maltese:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1695155598/dog/maltese_juc6ci.png",
  Eskimo:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1695155597/dog/eskimo_juljlb.png",
  Dalmatian:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1695155602/dog/dalmatian_wvlxee.png",
  Poodle:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1695155599/dog/poodle_phwrjm.png",
  Pug: "https://res.cloudinary.com/dps35nlwa/image/upload/v1695155600/dog/pugy_u9i1mx.png",
  Pomerian:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1695155599/dog/pomerian_fggfsa.png",
  Pitbull:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1695155598/dog/pitbull_whai4p.png",
  "Yorkshire Terrier":
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1695157720/dog/yorkshire-terrier_i2wfue.png",
  Doberman:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1695155597/dog/doberman_vicsnz.png",
  Corgi:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1695157719/dog/corgi_rcffad.png",
  "Chow chow":
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1695155602/dog/chow-chow_bccmzh.png",
  "German Shepherd":
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1695155597/dog/german-sheperd_zgooxn.png",
  Bulldog:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1695157719/dog/bullmastiff_n29jju.png",
  Tjeter: "/ProfilePicStandard.png",

  // Cats

  MaineCoon:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1695412091/cat/cat_xxeqys.png",
  Persian:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1695412092/cat/cat-5_d3umsr.png",
  Siamese:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1695412092/cat/cat-6_aatusy.png",
  Ginger:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1695412092/cat/cat-4_jhy1op.png",
  Scotish:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1695412092/cat/cat-3_e6lmtv.png",
  Tuxedo:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1695412091/cat/cat-2_bvmtgo.png",
  Tjetër:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1695414596/cat/dog_1_jnzmqo.png",
};

export const colors = [
  { name: "Pinky", start: "#FF007A", end: "#FF8EF4" },
  { name: "Yellowish", start: "#FFB800", end: "#FFEA2F" },
  { name: "Orange", start: "#FF2626", end: "#FFECA9" },
  { name: "Raspberry Blue", start: "#00B4DB", end: "#3D7588" },
  { name: "Sweet Morning", start: "#FF5F6D", end: "#FFC371" },
  { name: "Lush", start: "#56AB2F", end: "#A8E063" },
  { name: "Quepal", start: "#11998E", end: "#38EF7D" },
  { name: "Citrus Peel", start: "#F37335", end: "#FDC830" },
  { name: "Blue Ocean", start: "#184BFF", end: "#69D8F0" },
  { name: "Blue Sea", start: "#30A8FF", end: "#8FF8FF" },
];

export const Citites = ["Tirane", "Durres", "Vlore", "Elbasan", "Berat"];

export const menuItems = [
  { title: "Si funksionon?", url: "#what-is" },
  { title: "Porosit", url: "#order-form" },
  // { title: "Te humbur", url: "some-url" },
  // { title: "Rreth nesh", url: "some-url" },
  { title: "Kontakt", url: "#footer" },
];

export const orderData = [
  {
    petId: "fd8e2442-7fbb-4839-ad01-dfd9cdb1f8cf",
    status: "Awaiting",
    orderCode: null,
    name: "Dorian",
    phone: "+355686284516",
    address: "Rruga Mine Peza",
    items: {
      city: "Vlore",
      info: "esht i bukur",
      name: "Bernard",
      breed: "Dalmatian",
      gender: "Femer",
      styles: {
        avatarBg: "Sweet Morning",
      },
      orderCode: "dori1992",
      ownerInfo: {
        name: "Dorian",
        address: "Rruga Mine Peza",
        contact: {
          email: "",
          phone: "+355686284516",
          whatsapp: "",
          instagram: "",
        },
      },
      missingMessage: "Ju lutem kontaktoni sa me shpejte nese e gjeni!",
      contactUsIntead: false,
    },
    total: 0,
    currency: null,
    id: "bda987b9-a63b-41b6-87c7-168449f6ba07",
    createdAt: "2023-10-21T17:42:44.574506Z",
    updatedAt: "2023-10-21T17:42:44.581812Z",
  },
];
