const team = [
  { name: "คุณแสงเหนือ บุญรัตน์", role: "เลขที่ 35 ม.3/4", dept: "ฝ่าย Creator", img: "https://i.postimg.cc/5y2bv39H/49843.jpg", bio: "ดูแลการดำเนินงานทั่วทั้งองค์กรให้เป็นไปอย่างมีประสิทธิภาพ" },
  { name: "คุณธนเดช ปฤชานนท์ ", role: "เลขที่15 ม3/4", dept: "ฝ่ายสนับสนุน ความคิด", img: "https://i.postimg.cc/tn12yfHs/1.jpg", bio: "บริหารการเงิน การลงทุน และวางแผนกลยุทธ์เชิงงบประมาณ" },
  { name: "คุณกิตติ์อธิศ ศิริโรจน์ชัยกุล", role: "เลขที่ 5 ม.3/4", dept: "ฝ่าย Designer", img: "https://i.postimg.cc/VdCDV3gb/87958.jpg", bio: "ขับเคลื่อนแบรนด์และสร้างประสบการณ์ลูกค้าที่น่าจดจำ" },
  { name: "คุณปภาวิน โชคอำนวยทรัพย์ ", role: "เลขที่ 23 ม.3/4", dept: "ฝ่ายงานเอกสาร", img: "https://i.postimg.cc/nM53THvG/100870.jpg", bio: "วางรากฐานเทคโนโลยีและนวัตกรรมเพื่ออนาคต" },
  { name: "คุณบรรณพล อารยะรัตนกูล", role: "เลขที่ 21 ม.3/4", dept: "ผู้ช่วยหัวหน้า", img: "Screenshot 2026-05-28 115938.png", bio: "ดูแลวัฒนธรรมองค์กรและพัฒนาศักยภาพของทีมงาน" }

];

const grid = document.getElementById("teamGrid");
grid.innerHTML = team.map((p, i) => `
  <li class="member reveal">
    <div class="member-photo">
      <img src="${p.img}" alt="${p.name}" width="896" height="1152" loading="lazy" />
      <span class="member-num">0${i + 2}</span>
    </div>
    <div class="member-info">
      <p class="member-dept">${p.dept}</p>
      <h3 class="member-name">${p.name}</h3>
      <p class="member-role">${p.role}</p>
      <p class="member-bio">${p.bio}</p>
    </div>
  </li>
`).join("");

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");
menuBtn?.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
