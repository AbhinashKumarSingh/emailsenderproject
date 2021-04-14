const sgmail=require('@sendgrid/mail');

const api='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'

sgmail.setApiKey(api);
const  userdata =[
   { email: 'singhabhinash840@gmail.com',
    name: 'abhinash',
    status: 'Pass'
},
    { email: 'newfarmkart@gmail.com',
    name: 'abhi',
    status: 'Fail'

}
    //

]
//console.log(userdata.length);
var a=[],b=[];
//
for(var i=0;i<userdata.length;i++)
{
   console.log(userdata[i]['email']);

    if(userdata[i]['status']==='Pass')
    {a.push(userdata[i]['email']);
//console.log("0");}
}
else{
    b.push(userdata[i]['email']);
}
}
console.log(b);
console.log(a);
const arr={status: 200,
    message: "Suitable",
        aaraywithpass: a,
        arrawithFail: b

}
//const m=new Set(userdata);
const message={
    to: userdata,
    from: 'singhabhinash840@gmail.com',
    subject: 'Hello from abhinash',
    //text: 'Hello fro me',
    html: '<h1>Hi </h1> <b>me</b> <h1>from abhi</h1>',
};
sgmail
.sendMultiple(message)
.then(respose =>{
console.log(arr);
})
.catch(error => console.log(error.message));