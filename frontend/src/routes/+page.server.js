import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("caregivers").select();
  return {
    caregivers: data ?? [],
  };
}