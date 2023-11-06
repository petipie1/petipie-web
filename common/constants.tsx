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
  Bulldog: "Bulldog",
  Bullmastiff: "Bullmastiff",
  Chihuahua: "Chihuahua",
  "Chow chow": "Chow chow",
  Corgi: "Corgi",
  Dalmatian: "Dalmatian",
  Doberman: "Doberman",
  Husky: "Husky",
  "German Shepherd": "German Shepherd",
  Golden: "Golden",
  Eskimo: "Eskimo",
  Maltese: "Maltese",
  Poodle: "Poodle",
  Pomerian: "Pomerian",
  Pitbull: "Pitbull",
  Pug: "Pug",
  Rottweiler: "Rottweiler",
  "Yorkshire Terrier": "Yorkshire Terrier",
  Tjeter: "Tjeter",
  // },
  // Cat: {
  British: "British",
  Ginger: "Ginger",
  MaineCoon: "MaineCoon",
  Persian: "Persian",
  Scotish: "Scotish",
  Siamese: "Siamese",
  Tuxedo: "Tuxedo",
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
  British: "/icons/ic_british.png",
  MaineCoon: "/icons/ic_maine-coon.png",
  Persian: "/icons/ic_persian.png",
  Ginger: "/icons/ic_ginger.png",
  Scotish: "/icons/ic_scotish.png",
  Tuxedo: "/icons/ic_tuxedo.png",
  Siamese: "/icons/ic_siamese.png",
  Tjeter: "/ProfilePicStandard.png",
  Tjetër: "/ProfilePicStandard.png",
};

type KeyValueObject = {
  [key: string]: string;
};

export const PetImages: KeyValueObject = {
  // Dogs

  Rottweiler:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1699265527/dog/rottweiler_zabdqj.png",
  Chihuahua:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1699266773/dog/chihuahua_nzhks8.png",
  Husky:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1699266780/dog/husky_hafn0s.png",
  Golden:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1699266779/dog/golden_eljawm.png",
  Bullmastiff:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1699266772/dog/bullmastiff_eamqmd.png",
  Maltese:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1699266768/dog/maltese_szwmmg.png",
  Eskimo:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1699266777/dog/eskimo_jwpllr.png",
  Dalmatian:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1699266775/dog/dalmatian_svtew0.png",
  Poodle:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1699267547/dog/poodle-dog_wrbqir.png",
  Pug: "https://res.cloudinary.com/dps35nlwa/image/upload/v1699266770/dog/pugy_rz4ljx.png",
  Pomerian:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1699266769/dog/pomerian_gh1hh7.png",
  Pitbull:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1699266768/dog/pitbull_sejqnh.png",
  "Yorkshire Terrier":
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1699266771/dog/yorkshire-terrier_i2wfue_ybeuk0.png",
  Doberman:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1699266776/dog/doberman_t6psik.png",
  Corgi:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1699266774/dog/corgi_nr7hhl.png",
  "Chow chow":
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1699266773/dog/chow-chow_nnolzj.png",
  "German Shepherd":
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1699266778/dog/german-sheperd_krxu6z.png",
  Bulldog:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1699266772/dog/bullmastiff_eamqmd.png",
  Tjeter: "/ProfilePicStandard.png",

  // Cats

  British:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1699267400/cat/british-shorthair_rkyjy8.png",
  MaineCoon:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1699267274/cat/maine_coon_bv074u.png",
  Persian:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1699267273/cat/persian_l0aztq.png",
  Siamese:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1699267276/cat/cat-6_y1pfxr.png",
  Ginger:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1699267273/cat/ginger_y9czeq.png",
  Scotish:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1699267274/cat/scotish_hpiuh0.png",
  Tuxedo:
    "https://res.cloudinary.com/dps35nlwa/image/upload/v1699267275/cat/tuxedo_uzg3ut.png",
  Tjetër: "/ProfilePicStandard.png",
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
