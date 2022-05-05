var a = Number(prompt("enter number"));
if(a<0)
{
alert("a is less than zero");
}
else
{
    alert("a is greater than zero")
}

function display()
{
    console.log("hello world");
}

display();

var add = function(a,b)
{
    var c=a+b;
    return c;
}

var r =add(5,6);
console.log(r);

var sub = function(d)
{
    var g = r-d;
    return g;
}

var r =sub(4);
console.log(r);

var student=
{
    name:"Ravi",
    class:7,
    all_rounder:true,
    age:16,
    GF:["shivani","nimra","shivangi"]
}

console.log(student.GF);

var arr = [
{
    name:"bhavna",
    rollno:69
},
{
    name:"chanda",
    rollno:4
},
20,["car","sex","pussy"]];
arr.push(40);
console.log(arr);
arr.pop();
console.log(arr);

var arr=["cat","dog","bat","set","sex"];

var count=0;
while(count<arr.length)
{
    console.log(arr[count]);
    count++;
}

count=0;

do
{
    console.log(arr[count]);
    count++;
}
while(count<arr.length)


for(var i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

function loop(i)
{
    console.log(i);
}

arr.forEach(loop);

const normalArray = [1,2,3,4,6,10];

const mapArray = normalArray.map((num) => {
    return num * 2;
});
console.log(mapArray);

normalArray.forEach((num) => {
    console.log(num * 2);
});

const filterArray = normalArray.filter((num) => {
    return num > 2 && num < 8;
});
console.log(filterArray);

const reduceArray = normalArray.reduce((accumulator,num) => {
    return accumulator * num;
},1);
console.log(reduceArray);




