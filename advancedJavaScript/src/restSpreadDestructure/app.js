    let sayi1 = 10;
    sayi1 = "Ünal Hami Demir"
    let student = {id:1, name:"Ünal Hami Demir"}
            //console.log(student);


    function save (puan=85,ogrenci) {
   
        //console.log(ogrenci.name + " : " + puan)
    
}
save(undefined,student); 

let students = ["ÜNAL DEMİR","OGÜN DEMİR","ÜMİT OKAN"]

    //console.log(students)

let students2 = [student,students,{id:1, name:"Yaşar"},"Trabzon",{city:"Maçka"}]
   // console.log(students2)

//rest konusu
//c# karşılıgı params
//java daki karsılıgı varArgs
let showProducts = function (id,...products) {
    //console.log(id)
    //console.log(products[0])    
}

//console.log(typeof showProducts)
//showProducts(10,["ÜNAL ","HAMİ","DEMİR"])

//spread = ayrıştırma anlamında.
let points = [1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//Destructuring
let populations = [10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
    
}
someFunction(populations)
let category = {id:1, name:"İçecek"}
//console.log(category.id)
//console.log(category.["name"])

let {id,name} = category
console.log(id)
console.log("Name")

//Redux