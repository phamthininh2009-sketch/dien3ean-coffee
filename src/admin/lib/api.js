import { supabase } from "../../lib/supabaseClient";

export async function listRows(table, orderBy = "sort_order") {
  const { data, error } = await supabase.from(table).select("*").order(orderBy, { ascending: true });
  if (error) throw error;
  return data;
}

export async function insertRow(table, values) {
  const { data, error } = await supabase.from(table).insert(values).select().single();
  if (error) throw error;
  return data;
}

export async function updateRow(table, id, values) {
  const { data, error } = await supabase.from(table).update(values).eq("id", id).select().single();
  if (error) throw error;
  return data;
}

export async function deleteRow(table, id) {
  const { error } = await supabase.from(table).delete().eq("id", id);
  if (error) throw error;
}

export async function listSettings() {
  const { data, error } = await supabase.from("site_settings").select("*").order("sort_order");
  if (error) throw error;
  return data;
}

export async function saveSetting(key, value) {
  const { error } = await supabase.from("site_settings").update({ value }).eq("key", key);
  if (error) throw error;
}

export async function listMessages() {
  const { data, error } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data;
}

export async function setMessageStatus(id, status) {
  const { error } = await supabase.from("contact_messages").update({ status }).eq("id", id);
  if (error) throw error;
}

const SAFE_CHARS = /[^a-z0-9.-]/g;

export async function uploadImage(file) {
  const ext = (file.name.split(".").pop() || "jpg").toLowerCase();
  const base = file.name
    .replace(/\.[^.]+$/, "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d")
    .replace(SAFE_CHARS, "-")
    .replace(/-+/g, "-")
    .slice(0, 40);
  const path = `${Date.now()}-${base || "anh"}.${ext}`;

  const { error } = await supabase.storage.from("media").upload(path, file, {
    cacheControl: "31536000",
    upsert: false,
  });
  if (error) throw error;

  const { data } = supabase.storage.from("media").getPublicUrl(path);
  return data.publicUrl;
}
