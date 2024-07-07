document.addEventListener('DOMContentLoaded', () => {
    
    const selectedcategories = JSON.parse(localStorage.getItem('selectedcat')) || [];
    const ul = document.getElementById('sc');
    let select = document.getElementById('select');
    let final = document.querySelector('.arrangedlist');
    



    selectedcategories.forEach(category => {
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.textContent = category;

        let removebtn = document.createElement('button');
        removebtn.classList.add('removebtn');
        removebtn.textContent = '-';

        removebtn.addEventListener('click', function () {
            li.remove();
            removecat(category);
            updatebackbtn();
            updatemessage();
            updateoptions();
            removearrangedlist(category);
            
        });

        li.appendChild(p);
        ul.appendChild(li);
        li.appendChild(removebtn);

        let option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        select.appendChild(option);  

        function removearrangedlist(category) {
            const itemsToRemove = document.querySelectorAll('.arrangedlist li');
            itemsToRemove.forEach(item => {
                if (item.textContent.trim() === category) {
                    item.remove();
                }
            });
        }
    });


    select.addEventListener('change',(e)=>{
    let listfinal = document.createElement('li');
    listfinal.classList.add('finallist');
    listfinal.textContent = e.target.value;
    final.appendChild(listfinal)
    select.remove(select.selectedIndex);
    })


    const printButton = document.querySelector('.print');
    printButton.addEventListener('click', () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const items = Array.from(final.querySelectorAll('.finallist')).map(li => li.textContent);

        doc.setFontSize(16);
        doc.text(20, 20, 'Final List');
        doc.setFontSize(12);

        items.forEach((item, index) => {
            doc.text(20, 30 + index * 10, `${index + 1}. ${item}`);
        });

        doc.save('arranged_list.pdf');
    });

    
});


function removecat(category){
    let selectedcategories = JSON.parse(localStorage.getItem('selectedcat')) || [];
    selectedcategories = selectedcategories.filter(item => item !== category);
    localStorage.setItem('selectedcat', JSON.stringify(selectedcategories));
}


let backbtn = document.querySelector('.backbtn');

function updatebackbtn(){
    const selectedcategories = JSON.parse(localStorage.getItem('selectedcat')) || [];
    backbtn.textContent = "Back < (" + selectedcategories.length + ")";
}


function updatemessage(){
    let pp = document.querySelector('.more');
    const selectedcategories = JSON.parse(localStorage.getItem('selectedcat')) || [];
    if(selectedcategories.length==0){
        pp.textContent = "Add Categories!";
    }
}


document.addEventListener('DOMContentLoaded', ()=>{
    updatebackbtn();
    updatemessage();
});


function updateoptions(){
    const selectedCategories = JSON.parse(localStorage.getItem('selectedcat')) || [];
    const select = document.getElementById('select');
    select.innerHTML = '<option value="D">Select in Desired order</option>';

    selectedCategories.forEach(category => {
        let option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        select.appendChild(option);
    });
}


