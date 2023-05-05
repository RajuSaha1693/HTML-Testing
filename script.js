function convertStringToObject(str) {
    const [propName, propValue] = str.split(':');
    const propArray = propName.split('.');
    const identifier=propArray.find(item=>item.includes('(@'));
    const identityIndex=propArray.indexOf(identifier);
    propArray.splice(identityIndex,1);
    const identifierObj=identifier.replace('=',' ')
    const identifierData=identifierObj.replace(/[^a-zA-Z ]/g, "").replace(' ',':').split(':');
    const obj={};
    obj[identifierData[0]]=identifierData[1]    
    const restobj = {};
    let currentObj = restobj;
    
    for (let i = 0; i < propArray.length; i++) {
      const part = propArray[i];
      if (i === propArray.length - 1) {
        currentObj[part] = propValue;
      } else {
        currentObj[part] = {};
        currentObj = currentObj[part];
      }
    }
    const ide=propArray[0];
    const result={
        [ide]:{
            ...obj,...restobj.name
        }
    }
     return result;
  }
  
  const json = convertStringToObject('name.(@add=data).other.val:15');
  console.log(json); 
    
// {name :{
//     "add":"data",
//     other:{ 
//         val: '15' }
//     }
// }
// { name: { other: { val: '15' }, 'add': 'data' } }