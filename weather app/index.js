

//df2b95ab3a2df38e3c49e6a1250bb478
//439d4b804bc8187953eb36d2a8c26a02

let city= document.getElementById('city');

let submit=document.getElementById('submit');
submit.addEventListener('click',()=>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=df2b95ab3a2df38e3c49e6a1250bb478&units=metric`).then(data=>{
        return data.json();
    }).then(data2=>{
        console.log(data2);
        let details=document.getElementById('details');
        let str=`<ul> The weather forecast of ${city.value} is </ul>
                <li>Location : ${data2.name}</li>
                <li>Temp in Celcius : ${data2.main.temp}</li>
                <li>Description : ${data2.weather[0].description}</li>
    </ul>`
    details.innerHTML=str;
    })
  

}

)