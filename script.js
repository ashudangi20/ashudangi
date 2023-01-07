/** @format */

var arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap(){
  let arrA=arr;
  arrA.map((item)=>{
    if(item.profession=="developer"){
      console.log(item);
    }
  }
  )
  }

function PrintDeveloperbyForEach() {
  let arrB=arr;
  arrB.forEach((item)=>{
    if(item.profession=="developer"){
      console.log(item);
    }
})
}

function addData() { 
  let arrz= [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  let employe={id :4, name :"susan", age :"20", profession :"intern"};
 arrz.push(employe)
 console.log(arrz);

}

function removeAdmin(){
  let arrx=[
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
for(let i=0;i<arrx.length;i++){
  if(arrx[i].profession == "admin"){
    arrx.splice(i,1);
  }
}
console.log(arrx);
}


function concatenateArray() {
  let arry=arr;
  let brr = [
    { id: 5, name: "cena", age: "28", profession: "artist" },
    { id: 6, name: "jill", age: "30", profession: "singer" },
    { id: 7, name: "arjun", age: "29", profession: "actor" },
  ];
const x= arry.concat(brr);
console.log(x);

}



