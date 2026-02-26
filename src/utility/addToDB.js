const getStoredBook = () =>{

    const storedBookSTR = localStorage.getItem("readlist");

    if (storedBookSTR){
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else{
        return [];
    }

}

const addToStoredBook = (id) =>{
    const storedBookData = getStoredBook();
    if (storedBookData.includes(id)){
        alert('This id already exists!!')
    }
    else{
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readlist",data);
        
    }

}

export {addToStoredBook,getStoredBook};