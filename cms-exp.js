const exp=[
    {
        'code':'04',
        'name':'xyz'
    },
    {
        'code':'01',
        'name':'abc'
    },
    {
        'code':'02',
        'name':'pqr'
    }
    
]
const cover={
    '01':{
        'name':'abc long'
    },
    '02':{
        'name':'pqr long'
    },
    '03':{
        'name':'ijk long'
    },
    '04':{
        'name':'xyz long',
    }
};


(()=>{
   const res=Object.keys(cover);
   const todisplay=[];
   exp.map(item=>{
    todisplay.push(item.code)
   })
   const filterData=res.filter(item=>todisplay.includes(item))
   console.log(filterData)
   const result=filterData.map(item=>{
    let keyid=item
    return 'Package Name :'+ cover[item].name
   })
   console.log(result)
})();