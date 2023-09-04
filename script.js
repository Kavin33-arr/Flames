
const submitel=document.querySelector('button');
const name1=document.querySelector('#first_name');
const finalstate=document.querySelector('.final');
let moveforward=0;
const flamesBox=document.querySelectorAll('li');
const userdiv=document.querySelector('.user-credentials');
const main1=document.querySelector('#main1');
const main2=document.querySelector('#main2');
const ul=document.querySelector('ul');
const body=document.body;
//console.log(userdiv.children[0]);
window.onload=function(){
    name1.focus();
    
};





let l=1;


document.addEventListener("keypress",function(Event){
    if((Event.key==="Enter") &&(l<3)){
                  userdiv.children[l].firstElementChild.focus();
                    l+=1;
        if(l==3){
            submitel.style.background="green";
        }
    }

});



















let songs=["தாமரை மேல நீர்துளி போல் தலைவனும் தலைவியும் வாழ்வதென்ன ? நண்பர்கள் போலே வாழ்வதற்கு மாலையும் மேளமும் தேவையென்ன ?",
"ஆசை வந்து என்னை ஆட்டி வைத்த பாவம் மற்றவரை நான் ஏன் குத்தம் சொல்ல வேணும்",
"உன் உதட்டுக்குள் இருக்கும் ஒரு வார்த்தை அதை சொல்லிவிட்டால் தொடங்கும் என் வாழ்கை",
"என்னோடு வா வீடு வரைக்கும் என் வீட்டை பார் என்னை பிடிக்கும்",
"பெண் இல்லாத ஊரிலே அடி ஆண் பூக்கேட்பதில்லை பெண் இல்லாத ஊரிலே கொடிதான் பூப்பூப்பதில்லை ",
"Chinnanchiru Koottukkulle Sorgam Irukku Ada Chinnach Chinna Anbil Thaanae Jeevan Innum Irukku ",
"Sara Sara Saara Kathu Veesum Podhu Sir ah Paarthu Paesum Podhu Sara Paambu Pola Nenju Saththam Poduthey..",
"Kannukoru vannakili Kaadhukoru gaana kuyil Nenjukoru vanji kodinee dhaan amma...",
"Vaanam illamale boomi undagalaam varthai ilaamale bashai undagalaam kadhal ilamal ponal vazhkai undaguma? ",
" Thamarai mele neer thuli pol, thalaivanum thalaiviyum vaazhvedenna",
"Nammai Pola Nenjam Konda Annan Thambi Yaarum Illai Thannai Pola Ennai Ennum Neeyum Naanum Oor Thaai Pillai ",

"kaettuko Luck kaal kilo Loss kaal kilo Labour kaal kilo saethukko bakthi kaal kilo Hope kaal kilo Talent Kaal kilo yellaam dhaan saerthu kattinaal periya pottalam Secret of success",
"Aethu bandha paasam; Ellaam veli vaesam, Kaasu panam vandha; Nesam sile maasam.",
"Ullathil nalla ullam; Urangaadhenbadhu, Vallavan vaguthadhadaa, Karna… Varuvadhai edhirkolladaa.",
"Endhan kaadhal enna venru sollaamal aenga aenga azhugai vandhadhu; endhan sogam unnai thaakkum enrennum boadhu vandha azhugai ninradhu.",
"Uyarndha idathil irukumpothu ulagam unnai madhikum; un nilamai konjam irangivandhal nilalumkooda midhikum",
"ஒரு வண்ணத்துப்பூச்சி எந்தன் வழிதேடி வந்தது அதன் வண்ணங்கள் மட்டும் இன்று விரலோடு உள்ளது",
"idhayam enbathu sathai than endral eri thazhal thindru vidum anbin karuvi idhayam endram saavai vendru vidum",
"Endhan kaayam ennna vendru sollamal enga enga azhugai vanthathu enthan sogam unnai thaakum endrennum bothu vantha azhugai nindrathu",
"Kulu Kulu Poigal Solli Enai Velvaaye,Athu Therinthum Kooda Anbe,Manam Athaiyethan Ethirparkkum.",
"inimel Veetil Thinamum Nadakkum, Naadagam Inithidume Olinthidum Enaiye Unathu Vizhigal, Thediye Azhainthidume",
"Kalai Ezhundhadhum En Kangal Mudhalil, Thedi Pidippadhundhan Mugame, Thookkam Varugaiyil Kan Parkkum Kadaisi,Katchikkul Nirpadhum Un Mugame",
"Vennilave Velli Velli Nilave, Pogum Idam Ellame Kooda Kooda Vanthai, Vennilave Velli Velli Nilave,Natchathira Pattalam Koottikondu Vantha",
"Nil endru nee sonnal en kaalam nagaradhey Nee soodum poovellam oru podhum udhiradhey Kadhal enai ketka villa Ketkathadhu kadhal illa",
"Unnodu nadakkum ovvoru nodikkum arthangal sernthiduthey Yen kalai neram yen maalai vaanam nee indri kainthiduthey",
"Thulaa Thattil Unnai Vaithu Nigar Seyya Ponnai Vaithaal Thoola Baaram Thorkaadho... Perazhagey",
"Katrile Adum Kagidham Nan, Neethan Ennai Kadidhamakinai,Anbil Thodanghi Anbil Mudikiren Enkalangarai Vilakame,",
"Nan Pagal Iravu Nee Kathir Nilavu En Urakangalil Nee Muthar Kanava Nee Vendume Endha Nilaiyilum Enakena Nee Podhume",
"Oru velli kolusu pola Indha boomi sinungum keela.Aniyaadha vairam pola Andha vaanam minungum Mela.",
"Parakkum Rasaaliye Rasaaliye Nillu Ingu Nee Vegama Naan Vegama Sollu Gadigaaram Poi Sollum Endre Naan Kanden Kizhakellam Merkagida Kandene"
];
let rand;
//console.log(songs.length);
function random_num(){
rand=Math.floor(Math.random()*songs.length);
return rand;
}




function checkString(name){

    let string='';
    for(let i=0;i<name.length;i++){
        if(isNaN(name[i]==true)){
            return false;
        }
        else if(/[a-zA-z]/.test(name[i])){
            string+=name[i];
        }
        else{
            if(name[i]==' '){
                string=string;
            }
            else{
            return false;}
        }
    }
    return string;
}

function submitfn(Event){
    //string validation
    const first=document.querySelector("#first_name");
    const second=document.querySelector("#second_name");
    let name1=first.value;
    let name2=second.value;
    
    let your_name=checkString(name1);
    let others_name=checkString(name2);
    
    if(your_name==false){
        alert(`Check your name please :${name1}`);
        Event.stopPropagation();
    }
    else if(others_name==false){
        alert(`Check the other one name:${name2}`);
       
    }
    else{
        moveforward=1;
        
    }
    your_name=your_name.toLowerCase();
    others_name=others_name.toLowerCase();
    console.log(your_name,others_name);
//Count Occurence
    let unique=new Set(your_name);
    let uniquearray=Array.from(unique);
    console.log(typeof unique);
    let cancel=0;
    let totalletter=your_name.length+others_name.length;
    for(let i=0;i<uniquearray.length;i++){
        //console.log(uniquearray[i]);
        let count1=0;
        let count2=0
        for(let j=0;j<your_name.length;j++){
            if(uniquearray[i]===your_name[j]){
                count1+=1
            }
        }
        for(let j=0;j<others_name.length;j++){
            if(uniquearray[i]===others_name[j]){
                count2+=1
            }
        }
        if(count1>count2){
            cancel+=(count2*2);
           // console.log('total',total);
        }
        else{
            cancel+=(count1*2);
            //console.log('total',total);
        }
    }
    let key=totalletter -cancel;
    //console.log('total',key);

    if(key==0){
        alert("Please provide two different Names or You guys have same set of characters");
        moveforward=0;
        
    }
    if(moveforward===1){
    userdiv.style.visibility='hidden';
    for(let listnum=0;listnum<flamesBox.length;listnum++){
    flamesBox[listnum].classList.add("motion");
    flamesBox[listnum].value=listnum;
}








//flames Engine
    let ptr=0;
    let index=0;
    let counOfWords=key;

    for(let box=0;box<5;box++){
        while(ptr!==counOfWords){
            if(index==5){
                if(flamesBox[index].value===-1){
                    index=0;
                }
                else{
                    
                    ptr+=1;
                    if(ptr===counOfWords){
                        index+=1;                         
                        break;

                    }
                    else{
                        index=0;
                        
                    }
                }
            }
            else{
                if(flamesBox[index].value===-1){
                    index+=1;
                
                }
                else{
                    index+=1;
                    ptr+=1;
                }
            
            }
        }
        flamesBox[index-1].value=-1;
        flamesBox[index-1].classList.add('flow');
        ptr=0;
        if((index-1)==5){
            index=0
        }
        
    }

let ans=''
  for(let i=0;i<flamesBox.length;i++){
    if(flamesBox[i].value>-1){
         ans=flamesBox[i].textContent;
    }
   }
   rand=random_num();
   finalstate.classList.add("motion");
   //console.log(rand);
    main1.textContent=`Hi,${name1}!`;
    //
    let newElement;
    let nextElement;
   //finalstate.classList.add('finals');
   switch(ans){
    
    case 'F':
        setTimeout(()=>{
        ul.remove();
        main2.textContent=`You and ${name2} are Friends!`;
        finalstate.classList.remove('final')
        setTimeout(()=>{finalstate.classList.add('finals')},1);        
        newElement = document.createElement("p");
         nextElement = document.createElement("p");
         newElement.textContent = "The line that brings you both together is ";
         nextElement.textContent=songs[rand];
        nextElement.style.color="black";
        nextElement.style.fontSize="20px";
        nextElement.style.alignContent="justify";
         newElement.style.color="black";
         newElement.style.fontSize="25px";
        newElement.style.alignContent="center";
        nextElement.style.fontStyle="bold";
        finalstate.appendChild(newElement);
        finalstate.appendChild(nextElement);},3000);
        //finalstate.classList.add('finalnote');
        break;
    case 'L':
        setTimeout(()=>{
        ul.remove();
        main2.textContent=`You and ${name2} are meant to love each other!`;
        finalstate.classList.remove('final')
        setTimeout(()=>{finalstate.classList.add('finals')},1);
        newElement = document.createElement("p");
        nextElement = document.createElement("p");
        newElement.textContent = "The line that brings you both together is ";
        nextElement.textContent=songs[rand];
       nextElement.style.color="black";
       nextElement.style.fontSize="20px";
       nextElement.style.alignContent="justify";
        newElement.style.color="black";
        newElement.style.fontSize="25px";
       newElement.style.alignContent="center";
       nextElement.style.fontStyle="bold";
       finalstate.appendChild(newElement);
       finalstate.appendChild(nextElement);},3000);
        //finalstate.classList.add('finalnote');

        break;
    case 'A':
        setTimeout(()=>{
        ul.remove();
        main2.textContent=`You and ${name2} are affectionate towards each other!`;
        finalstate.classList.remove('final')
        setTimeout(()=>{finalstate.classList.add('finals')},1);
        newElement = document.createElement("p");
        nextElement = document.createElement("p");
        newElement.textContent = "The line that brings you both together is ";
        nextElement.textContent=songs[rand];
       nextElement.style.color="black";
       nextElement.style.fontSize="20px";
       nextElement.style.alignContent="justify";
        newElement.style.color="black";
        newElement.style.fontSize="25px";
       newElement.style.alignContent="center";
       nextElement.style.fontStyle="bold";
       finalstate.appendChild(newElement);
       finalstate.appendChild(nextElement);},3000);
        //finalstate.classList.add('finalnote');
        break;
    case 'M':
        setTimeout(()=>{
        ul.remove();
        main2.textContent=`You and ${name2} are to be Married!`;
        //document.querySelector('#info').style.visibility="visible";
        //document.querySelector('#info').textContent="HI";
        finalstate.classList.remove('final')
        setTimeout(()=>{finalstate.classList.add('finals')},1);
         newElement = document.createElement("p");
         nextElement = document.createElement("p");
         newElement.textContent = "The line that brings you both together is ";
         nextElement.textContent=songs[rand];
        nextElement.style.color="black";
        nextElement.style.fontSize="20px";
        nextElement.style.alignContent="justify";
         newElement.style.color="black";
         newElement.style.fontSize="25px";
        newElement.style.alignContent="center";
        nextElement.style.fontStyle="bold";
        finalstate.appendChild(newElement);
        finalstate.appendChild(nextElement);},3000);
        //finalstate.classList.add('finalnote');
        break;
    case 'E':
        setTimeout(()=>{
        ul.remove();
        main2.textContent=`You and ${name2} are Enemies`;
        finalstate.classList.remove('final')
        setTimeout(()=>{finalstate.classList.add('finals')},1);
        newElement = document.createElement("p");
        nextElement = document.createElement("p");
        newElement.textContent = "The line that brings you both together is ";
        nextElement.textContent=songs[rand];
       nextElement.style.color="black";
       nextElement.style.fontSize="20px";
       nextElement.style.alignContent="justify";
        newElement.style.color="black";
        newElement.style.fontSize="25px";
       newElement.style.alignContent="center";
       nextElement.style.fontStyle="bold";
       finalstate.appendChild(newElement);
       finalstate.appendChild(nextElement);},3000);
       // finalstate.classList.add('finalnote');
        break;
    case 'S':
        setTimeout(()=>{
        ul.remove();
        main2.textContent=`You and ${name2} are meant to be Siblings`;
        finalstate.classList.remove('final')
        setTimeout(()=>{finalstate.classList.add('finals')},1);
        newElement = document.createElement("p");
        nextElement = document.createElement("p");
        newElement.textContent = "The line that brings you both together is ";
        nextElement.textContent=songs[rand];
       nextElement.style.color="black";
       nextElement.style.fontSize="20px";
       nextElement.style.alignContent="justify";
        newElement.style.color="black";
        newElement.style.fontSize="25px";
       newElement.style.alignContent="center";
       nextElement.style.fontStyle="bold";
       finalstate.appendChild(newElement);
       finalstate.appendChild(nextElement);},3000);
       // finalstate.classList.add('finalnote');
       break;        
    
   }
}
}
submitel.addEventListener('click',submitfn);
