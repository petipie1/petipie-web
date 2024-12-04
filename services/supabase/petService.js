import supabase from "./supabase";

export async function getPet(id) {
  const { data, error } = await supabase
    .from("Pets")
    .select("*")
    .eq("ExternalId", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Pet not found");
  }

  return data;
}

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
