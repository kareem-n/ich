let lightBoxItems = document.querySelectorAll(".lightBox-item");
let lightBoxImg = document.querySelector(".lightBox .lightBox-img");
let lightBox = document.querySelector(".lightBox");
let lightItemClose = document.getElementById("lightItemClose");

let arrowUp = document.getElementById("arrowUp");

let navlinks = document.querySelectorAll("#navlinks li");

let medicalMenu = document.querySelector("#src_spesialis");
let doctorMenu = document.querySelector("#src_dokter");

let jadalBtn = document.getElementById("jadwal");
let query = "";
jadalBtn.addEventListener("click", function () {
  searchJadwal();
});

console.log(0);

async function searchJadwal() {
  let response = await fetch("http://api4test.my.id:5000/api/v1/opensql", {
    method: "POST",
    body: `SELECT * from tbl_d_jadwal_praktek as a inner join tb_employee as b on a.kode_dokter=b.id_emp where kode_pegawai_group='NAKES'and b.nama='${doctorMenu.value}'`,
  });
  response = await response.json();
  localStorage.setItem("doctor", JSON.stringify(response));
  window.location.href = `pages/doctor_detail.html`;
}

let medicalResponse = [];

async function fetchData(q, element) {
  let response = await fetch("http://api4test.my.id:5000/api/v1/opensql", {
    method: "POST",
    body: q,
  });
  response = await response.json();
  medicalResponse = response;
  display(medicalResponse, element);
}
// medical services
query = `SELECT kode, nama from tbl_poli`;
fetchData(query, medicalMenu);

query = `SELECT * from tb_employee where kode_pegawai_group = 'NAKES'`;
fetchData(query, doctorMenu);

function display(arr, element) {
  let temp = ``;

  for (let i = 0; i < arr.length; i++) {
    temp += `
    <option

          value="${arr[i].nama}"
          selected=""
          data-select2-id="select2-data-5-qw63"
        >
        ${arr[i].nama}
    </option>`;
  }
  element.innerHTML = temp;
}

let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (this.scrollY > 150) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});

console.log(arrowUp);

arrowUp.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

arrowUp.addEventListener("mouseover", function () {
  this.classList.remove("opacity-75");
});

arrowUp.addEventListener("mouseleave", function () {
  this.classList.add("opacity-75");
});

lightItemClose.addEventListener("click", function () {
  lightBox.classList.add("d-none");
});

for (let i = 0; i < lightBoxItems.length; i++) {
  lightBoxItems[i].addEventListener("click", function () {
    lightBox.classList.remove("d-none");
    lightBoxImg.src = this.getAttribute("src");
  });
}
