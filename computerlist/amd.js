const computers = [//리스트 만들기
    {
       id: 3,
       가격: '420,000원',
       type: 'AMD',
       용량: '256GB',
       url: 'images/42.jpg'
    },
    {
       id: 4,
       가격: '460,000원',
       type: 'AMD',
       용량: '512GB',
       url: 'images/46.jpg'
    },
 ]
 
 const list = document.getElementById('list');
 
 function showList(val='') {
    list.innerHTML = '';
    const res = computers.forEach(computers => {
       if(computers.가격.includes(val)) {
          const li = document.createElement('li');
          li.innerHTML = `
             <img src='${computers.url}' alt='${computers.가격}'>
             <p>가격 : ${computers.가격}</p>
             <p>용량 : ${computers.용량}</p>
             <p>type : ${computers.type}</p>
          
          `
          list.appendChild(li);
       }

       else if(computers.type.includes(val)) {
         const li = document.createElement('li');
         li.innerHTML = `
            <img src='${computers.url}' alt='${computers.가격}'>
            <p>가격 : ${computers.가격}</p>
            <p>용량 : ${computers.용량}</p>
            <p>type : ${computers.type}</p>
         
         `
         list.appendChild(li);
      }

      else if(computers.용량.includes(val)) {
         const li = document.createElement('li');
         li.innerHTML = `
            <img src='${computers.url}' alt='${computers.가격}'>
            <p>가격 : ${computers.가격}</p>
            <p>용량 : ${computers.용량}</p>
            <p>type : ${computers.type}</p>
         
         `
         list.appendChild(li);
      }

       
    })

    
    
    // showList끝
 }
 


 showList();
 
 //검색기능
 const searchInput = document.getElementById('search');
 const searchBtn = document.getElementById('searchBtn');
 
 searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const val = searchInput.value;
    console.log(val);
    showList(val);
 })