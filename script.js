const team = [
  { name: "คุณแสงเหนือ บุญรัตน์", role: "Chief Operating Officer", dept: "ฝ่าย Designer", img: "https://i.postimg.cc/5y2bv39H/49843.jpg", bio: "ดูแลการดำเนินงานทั่วทั้งองค์กรให้เป็นไปอย่างมีประสิทธิภาพ" },
  { name: "คุณวรัญญู ทองดี", role: "Chief Financial Officer", dept: "ฝ่ายการเงิน", img: "exec-cfo.jpg", bio: "บริหารการเงิน การลงทุน และวางแผนกลยุทธ์เชิงงบประมาณ" },
  { name: "คุณพิมพ์ชนก ภัทรกุล", role: "Chief Marketing Officer", dept: "ฝ่ายการตลาด", img: "exec-cmo.jpg", bio: "ขับเคลื่อนแบรนด์และสร้างประสบการณ์ลูกค้าที่น่าจดจำ" },
  { name: "คุณธีรเดช เจริญพงศ์", role: "Chief Technology Officer", dept: "ฝ่ายเทคโนโลยี", img: "exec-cto.jpg", bio: "วางรากฐานเทคโนโลยีและนวัตกรรมเพื่ออนาคต" },
  { name: "คุณสุนิสา วงศ์เกษม", role: "Head of People", dept: "ฝ่ายทรัพยากรบุคคล", img: "exec-hr.jpg", bio: "ดูแลวัฒนธรรมองค์กรและพัฒนาศักยภาพของทีมงาน" },
  { name: "คุณภาณุพงศ์ ชัยพร", role: "Head of Sales", dept: "ฝ่ายขาย", img: "exec-sales.jpg", bio: "นำทีมขายและขยายความสัมพันธ์กับพันธมิตรเชิงกลยุทธ์" },
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
