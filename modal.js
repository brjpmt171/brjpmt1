const main=()=>{
    $(document).ready(()=>{
        $('#show').hide();
     });
}
const savedata=()=>{
    const name=document.getElementById('name');
    const address=document.getElementById('address');
    const phoneno=document.getElementById('phoneno');
    const email=document.getElementById('email');
    if(name.value!='' && address.value!='' && phoneno.value!='' && email.value!=''){
        sessionStorage.setItem('name',name.value);
        sessionStorage.setItem('address',address.value);
        sessionStorage.setItem('phoneno',phoneno.value);
        sessionStorage.setItem('email',email.value);
    }
}

const showdata=()=>{
   

    const name=sessionStorage.getItem('name');
    const address=sessionStorage.getItem('address');
    const phoneno=sessionStorage.getItem('phoneno');
    const email=sessionStorage.getItem('email');

    console.log(name);
    $(document).ready(()=>{
        $('#show').show();
    })
    //document.getElementById('name').value=name;
    let content = 
`<div class="card" style="width:400px">
<div class="row">    
        <div class="col-md-2"><img src="usericon.png" alt="Smiley face" height="100" width="80"></div>
        <div class="col-md-6">
        <div><label>Name:</label>${name}</div>
        <div><label>Address:</label>${address}</div>
        <div><label>Mobile No:</label>${phoneno}</div>
        <div><label>Email:</label>${email}</div>
    </div>
</div>
</div>`;
    document.getElementById('show').innerHTML=content;
    
}