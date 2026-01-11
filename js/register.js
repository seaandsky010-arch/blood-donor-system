// 🔹 SUPABASE CONFIG
const SUPABASE_URL = "https://rsrnswmklyozahtihlqv.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzcm5zd21rbHlvemFodGlobHF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxMjI0MDksImV4cCI6MjA4MzY5ODQwOX0.0foO0rg1EP3Jns8e3uZvT41v-y-4m_frJnGyXEOJUY8";

// 🔹 REGISTER FORM
document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault(); // 🔥 MOST IMPORTANT

  const data = {
    name: document.getElementById("name").value,
    roll_no: document.getElementById("roll_no").value,
    department: document.getElementById("department").value,
    year: document.getElementById("year").value,
    blood_group: document.getElementById("blood_group").value,
    phone: document.getElementById("phone").value,
    available: document.getElementById("available").checked
  };

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/students`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Prefer": "return=minimal"
      },
      body: JSON.stringify(data)
    });

    if (!res.ok) {
      const err = await res.text();
      alert("Error: " + err);
      return;
    }

    alert("Registered successfully ✅");
    document.getElementById("registerForm").reset();

  } catch (error) {
    alert("Network error ❌");
    console.error(error);
  }
});