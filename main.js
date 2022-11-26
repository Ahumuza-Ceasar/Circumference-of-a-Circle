const PI =Math.PI

document.getElementById('btn').onclick =  function (){
    let radius = document.getElementById('radius').value 
    let circumference = (PI * 2 *radius).toFixed(2)
    
    document.getElementById('answer').innerHTML ="Circumference Of the circle is : " + circumference
    
}