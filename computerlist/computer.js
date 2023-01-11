const computers = [//리스트 만들기
    {
       id: 1,
       가격: '330,000원',
       type: 'INTEL',
       용량: '256GB',
       url: 'images/36.jpg'
    },
    {
       id: 2,
       가격: '390,000원',
       type: 'AMD',
       용량: '256GB',
       url: 'images/39.jpg'
    },
    {
      id: 3,
      가격: '530,000원',
      type: 'INTEL',
      용량: '512GB',
      url: 'images/36.jpg'
   },
   {
      id: 4,
      가격: '590,000원',
      type: 'AMD',
      용량: '256GB',
      url: 'images/39.jpg'
   },
   {
      id: 5,
      가격: '730,000원',
      type: 'INTEL',
      용량: '512GB',
      url: 'images/36.jpg'
   },
   {
      id: 6,
      가격: '790,000원',
      type: 'AMD',
      용량: '1TB',
      url: 'images/39.jpg'
   },
   {
      id: 7,
      가격: '830,000원',
      type: 'INTEL',
      용량: '512GB',
      url: 'images/36.jpg'
   },
   {
      id: 8,
      가격: '890,000원',
      type: 'AMD',
      용량: '1TB',
      url: 'images/39.jpg'
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