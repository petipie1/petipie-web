import { activePets } from "common/constants";
import supabase from "./supabase";

export async function getPet(id) {
  // const { data, error } = await supabase
  //   .from("Pets")
  //   .select("*")
  //   .eq("ExternalId", id)
  //   .single();

  // if (error) {
  //   console.error(error);
  //   throw new Error("Pet not found");
  // }
  
  const data = findPetByExternalId(id);

  if (!data) {
    throw new Error("Pet not founddd");
  }

  return data;
}

const findPetByExternalId = (externalId) => {
  // Loop through the activePets object
  for (const petId in activePets) {
    if (activePets[petId].ExternalId === externalId) {
      return activePets[petId];  // Return the matching pet record
    }
  }
  return null;  // Return null if no match is found
};

export async function activatePet(petData, id) {
  console.log("ExternalIdt: ", id);
  const { data, error } = await supabase
    .from("Pets")
    .update({
      Data: petData,
      Status: "Active",
    })
    .eq("ExternalId", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("Pet not found");
  }

  console.log("petData", data);

  return data;
}
