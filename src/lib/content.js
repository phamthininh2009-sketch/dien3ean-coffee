import { supabase } from "./supabaseClient";

function mapRegion(r) {
  return {
    slug: r.slug,
    name: r.name,
    altitude: r.altitude,
    flavorTag: r.flavor_tag,
    desc: r.description,
    image: r.image_url,
  };
}

function mapProduct(p) {
  return {
    slug: p.slug,
    name: p.name,
    weight: p.weight,
    desc: p.description,
    flavor: p.flavor,
    roast: p.roast,
    form: p.form,
    image: p.image_url,
  };
}

function mapProductCategory(c) {
  return { key: c.key, name: c.name, image: c.image_url };
}

function mapLocation(l) {
  return {
    key: l.key,
    tag: l.tag,
    name: l.name,
    address: l.address,
    hours: l.hours,
    services: l.services,
    mapLink: l.map_link,
    image: l.image_url,
  };
}

function mapBlogCategory(b) {
  return { key: b.key, name: b.name, desc: b.description, image: b.image_url };
}

export async function fetchRegions() {
  const { data, error } = await supabase
    .from("regions")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return data.map(mapRegion);
}

export async function fetchProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return data.map(mapProduct);
}

export async function fetchProductCategories() {
  const { data, error } = await supabase
    .from("product_categories")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return data.map(mapProductCategory);
}

export async function fetchLocations() {
  const { data, error } = await supabase
    .from("locations")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return data.map(mapLocation);
}

export async function fetchBlogCategories() {
  const { data, error } = await supabase
    .from("blog_categories")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return data.map(mapBlogCategory);
}

export async function fetchPublishedBlogPosts() {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*, blog_categories(name, key)")
    .not("published_at", "is", null)
    .order("published_at", { ascending: false });
  if (error) throw error;
  return data;
}

export async function submitContactMessage({ name, phone, email, message }) {
  const { error } = await supabase
    .from("contact_messages")
    .insert({ name, phone, email, message });
  if (error) throw error;
}
