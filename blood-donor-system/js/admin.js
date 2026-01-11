// ⚠️ REPLACE WITH YOUR REAL DETAILS
const SUPABASE_URL = "https://rsrnswmklyozahtihlqv.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzcm5zd21rbHlvemFodGlobHF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxMjI0MDksImV4cCI6MjA4MzY5ODQwOX0.0foO0rg1EP3Jns8e3uZvT41v-y-4m_frJnGyXEOJUY8";

// ✅ CREATE CLIENT ONLY ONCE
const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

const donorList = document.getElementById("donorList");
const bloodFilter = document.getElementById("bloodFilter");
const clearFilter = document.getElementById("clearFilter");

// Load donors
async function loadDonors(blood = "") {
  donorList.innerHTML = "<p class='loading'>Loading donors...</p>";

  let query = supabaseClient
    .from("students")
    .select("*")
    .order("created_at", { ascending: false });

  if (blood !== "") {
    query = query.eq("blood_group", blood);
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    donorList.innerHTML = "<p class='error'>Error loading donors</p>";
    return;
  }

  if (!data || data.length === 0) {
    donorList.innerHTML = "<p class='empty'>No donors found</p>";
    return;
  }

  donorList.innerHTML = "";

  data.forEach(d => {
    donorList.innerHTML += `
      <div class="card">
        <h3>${d.name}</h3>
        <p><b>Roll No:</b> ${d.roll_no}</p>
        <p><b>Department:</b> ${d.department}</p>
        <p><b>Year:</b> ${d.year}</p>
        <p><b>Blood:</b> ${d.blood_group}</p>
        <p><b>Phone:</b> ${d.phone}</p>
        <p class="status ${d.available ? "yes" : "no"}">
          ${d.available ? "✅ Available" : "❌ Not Available"}
        </p>
      </div>
    `;
  });
}

// Events
bloodFilter.addEventListener("change", () => {
  loadDonors(bloodFilter.value);
});

clearFilter.addEventListener("click", () => {
  bloodFilter.value = "";
  loadDonors();
});

// Initial load
loadDonors();