document.addEventListener("DOMContentLoaded", function(){
    const tabKeliling = document.getElementById('tabKeliling');
    const tabLuas = document.getElementById('tabLuas');
    const validateFormLuas = document.querySelector('.validate-form-luas');
    const validateFormKeliling = document.querySelector('.validate-form-keliling');
    const hitungLuas = document.getElementById('hitungLuas');
    const resetLuas = document.getElementById('resetLuas');
    const hitungKeliling = document.getElementById('hitungKeliling');
    const resetKeliling = document.getElementById('resetKeliling');
    const resultLuas = document.getElementById('resultLuas');
    const resultKeliling = document.getElementById('resultKeliling');

    tabLuas.addEventListener('click', function() {
        tabLuas.classList.add('active');
        tabKeliling.classList.remove('active');
        validateFormLuas.style.display = 'flex';
        validateFormKeliling.style.display = 'none';
    });

    tabKeliling.addEventListener('click', function() {
        tabKeliling.classList.add('active');
        tabLuas.classList.remove('active');
        validateFormKeliling.style.display = 'flex';
        validateFormLuas.style.display = 'none';
    });

    hitungLuas.addEventListener('click', function() {
        const alas = parseFloat(document.getElementById('alas').value);
        const tinggi = parseFloat(document.getElementById('tinggi').value);

        if(isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
            alert("ERROR... Angka yang harus anda masukkan tidak boleh negative ataupun bernilai huruf");
            return;
        }

        const luas = 0.5 * alas * tinggi;
        resultLuas.value = `${luas.toFixed(2)} meter persegi`;
    });

    resetLuas.addEventListener('click', function() {
        document.getElementById('formLuas').reset();
        resultLuas.value = '';
    });

    hitungKeliling.addEventListener('click', function() {
        const sisiA = parseFloat(document.getElementById('sisiA').value);
        const sisiB = parseFloat(document.getElementById('sisiB').value);
        const sisiC = parseFloat(document.getElementById('sisiC').value);

        if(isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC) || sisiA <= 0 || sisiB <= 0 || sisiC <=0 ){
            alert("ERROR... Angka yang harus anda masukkan tidak boleh negative ataupun bernilai huruf");
            return;
        }

        const keliling = sisiA + sisiB + sisiC;
        resultKeliling.value = `${keliling.toFixed(2)} meter`;
    });

    resetKeliling.addEventListener('click', function() {
        document.getElementById('formKeliling').reset();
        resultKeliling.value = '';
    });

    tabLuas.classList.add('active');
    validateFormLuas.style.display = 'flex';
    validateFormKeliling.style.display = 'none';
});