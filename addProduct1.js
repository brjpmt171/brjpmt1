const validProduct=()=>{
    const name=document.getElementById('pname');
    const catagory=document.getElementById('pcatagory');
    const price=document.getElementById('pprice');
    const sku=document.getElementById('psku');
    const qnt=document.getElementById('pqnt');
    
    if(name.value==''){
        document.getElementById('pname').focus();
        alert('Product NAME is required !!!')
        return false;
    }
    else if(catagory.value==''){
        document.getElementById('pcatagory').focus();
        alert('Product CATAGORY is required !!!')
        return false;
    }
    else if(sku.value==''){
        document.getElementById('psku').focus();
        alert('Product SKU NO is required !!!')
        return false;
    }

    if(name.value!='' && catagory.value!='' && sku.value!='' && qnt.value!='' && price.value!=''){
        var productObj={
            name:name.value,
            catagory:catagory.value,
            price:price.value,
            sku:sku.value,
            qnt:qnt.value
        };
        localStorage.setItem(localStorage.length+1,JSON.stringify(productObj));
        name.value="";
        catagory.value="";
        price.value="";
        sku.value="";
        qnt.value="";
    }
}
const showProduct=()=>{
    if(localStorage.length==0){
        document.getElementById('showTable').innerHTML='No Data Available';
    }
    else{
        for(let i=localStorage.length;i>0;i--){
            let count=i-1;
           let content=
           `<tr>
                <td>${localStorage.length-i+1}</td>
                <td>${JSON.parse(localStorage.getItem(localStorage.key(i-1))).name}</td>
                <td>${JSON.parse(localStorage.getItem(localStorage.key(i-1))).catagory}</td>
                <td>${JSON.parse(localStorage.getItem(localStorage.key(i-1))).price}</td>
                <td>${JSON.parse(localStorage.getItem(localStorage.key(i-1))).sku}</td>
                <td>${JSON.parse(localStorage.getItem(localStorage.key(i-1))).qnt}</td>
                <td><input type="button" value="Delete" onclick='del(${localStorage.key(i-1)})' /></td>
                <td><input type="button" value="Edit" onclick='edt(${localStorage.key(i-1)})' /></td>
            </tr>`;
            document.getElementById('showTable').innerHTML+=content;
        }
    }
}

const del=(a)=>{
    localStorage.removeItem(a);
    window.location='productDetails.html';
}
const edt=(a)=>{
    let pdt=JSON.parse(localStorage.getItem(a));
    localStorage.removeItem(a);
    localStorage.setItem('edit-item',JSON.stringify(pdt));
    window.location='addProduct.html';
}
const editProduct=()=>{
    const _item=localStorage.getItem('edit-item');
    console.log(_item);
    if(_item!=null){
        document.getElementById('pname').value=JSON.parse(_item).name;
        document.getElementById('pcatagory').value=JSON.parse(_item).catagory;
        document.getElementById('pprice').value=JSON.parse(_item).price;
        document.getElementById('psku').value=JSON.parse(_item).sku;
        document.getElementById('pqnt').value=JSON.parse(_item).qnt;
    }
    localStorage.removeItem('edit-item');
}
