let data= [
    {
        Q: "Which of the following was a map that was in Team Fortress 2 at launch?",
        soln: "ans2",
        a:"Hoodoo",
        b:"Gravel Pit",
        c:"Gold Rush",
        d:"Upward"
    },
    {
        Q: "What year did Albrecht D&uuml;rer create the painting &quot;The Young Hare&quot;?",
        soln: "ans1",
        a:"1502",
        b:"1702",
        C:"1402",
        d:"1602"
    },
    {
        Q: "Found in the Marvel Comics fictional universe, what is the name of the nearly indestructible metal that coats Wolverine&#039;s bones and claws?",
        soln: "ans3",
         
        a:"Titanium",
        b:"Vibranium",
        c:"Adamantium",
        d:"Carbonadium"
        
    },
    {
        Q: "Which of these bands is the oldest?",
        soln: "ans4",
        
        a:"AC/DC",
        b:"Metallica",
        c:"Red Hot Chili Peppers",
        d:"Pink Floyd"
        
    },
    {
        Q: "The collapse of the Soviet Union took place in which year?",
        soln: "ans2",
         
        a: "1992",
        b:"1991",
        c:"1891",
        d:"1990"
        
    },

    {
        Q: "When did the last episode of &quot;Futurama&quot; air before returning in 2023?",
        soln: "ans4",
         
        a:"December 25, 2010",
        b:"March 28, 1999",
        c:"November 4, 2021",
        d:"September 4, 2013"
        
    },
    {
        Q: "Which of the following sports is not part of the triathlon?",
        soln: "ans1",
        a:"Horse-Riding",
        b:"Cycling",
        c:"Swimming",
        d:"Running"
        
    },
    {
        Q: "What song is played during the ending credits of Guitar Hero: World Tour?",
        soln: "ans2",
         
        a:"King Crimson - 21st Century Schizoid Man",
        b:"Dream Theater - Pull Me Under",
        c:"Dragonforce - Through The Fire &amp; The Flames",
        d:"Lynyrd Skynyrd - Free Bird"
        
    },
    {

        Q: "What is the official language of Brazil?",
        soln: "ans2",
         
        a:"Brazilian",
        b:"Portugese",
        c:"Spanish",
        d:"English"
        
    },
    {
        Q: "The LS1 engine is how many cubic inches?",
        soln: "ans2",
         
        a:"350",
        b:"346",
        c:"355",
        d:"360"
        
    },
    {
        Q: "Which Elite Four member from the first generation of Pok&eacute;mon became the champion in the next generation?",
        soln: "ans1",
        a:"Lance",
        b:"Agatha",
        c:"Bruno",
        d:"Lorelei"
        
    },
    {
        Q: "What machine element is located in the center of fidget spinners?",
        soln: "ans3",
         
        a:"Axles",
        b:"Gears",
        c:"Bearings",
        d:"Belts"
        
    },
    {
        
        Q: "All of the following programs are classified as raster graphics editors EXCEPT:",
        soln: "ans3",
         
        a:"Paint.NET",
        b:"GIMP",
        c:"Inkscape",
        d:"Adobe Photoshop"
        
    },
    {
      
        Q: "Which one of these is scientific term for &quot;Brain Freeze&quot;?",
        soln: "ans3",
        
        a:"Hyacinthoides Italica",
        b:"Amaranthus Retroflexus",
        c:"Sphenopalatine Ganglioneuralgia",
        d:"Amblyomma Americanum"
        
    },
    {
        
        Q: "How many countries share a land border with Luxembourg?",
        soln: "ans3",
         
        a:"4",
        b:"2",
        c:"3",
        d:"5"
        
    },
    {
     
        Q: "What is Solid Snake&#039;s real name?",
        soln: "ans1",
        a:"David",
        b:"Solid Snake",
        c:"John",
        d:"Huey"
        
    },
    {
        Q: "What is the capital of Mauritius?",
        soln: "ans1",
        a:"Port Louis",
        b:"Port Moresby",
        c:"Port Vila",
        d:"Port-au-Prince"
        
    },
    {
        Q: "Which city features all of their professional sports teams&#039; jersey&#039;s with the same color scheme?",
        soln: "ans3",
         
        a:"New York",
        b:"Seattle",
        c:"Pittsburgh",
        d:"Tampa Bay"
        
    },
    {
        Q: "In the TV Show &quot;Donkey Kong Country&quot;, which episode did the song &quot;Eddie, Let Me Go Back To My Home&quot; play in?",
        soln: "ans4",
         
        a:"Message In A Bottle Show",
        b:"To The Moon Baboon",
        c:"Ape-Nesia",
        d:"It&#039;s a Wonderful Life"
        
    },
    {
       
        Q: "In the 1976 film &#039;Taxi Driver&#039;, how many guns did Travis buy from the salesman?",
        soln: "ans4",
         
        a:"2",
        b:"6",
        c:"1",
        d:"4"
        
    },
    {
       
        Q: "Danganronpa Another Episode: Ultra Despair Girls is set after which Danganronpa game?",
        soln: "ans1",
        a:"Danganronpa: Trigger Happy Havoc",
        b:"Danganronpa 2: Goodbye Despair",
        c:"Danganronpa V3: Killing Harmony",
        d:"Danganronpa 3: The End of Hope&#039;s Peak High School"
        
    },
  
    {
        
        Q: "Which of these is NOT a province in China?",
        soln: "ans2",
         
        a:"Fujian",
        b:"Yangtze",
        c:"Sichuan",
        d:"Guangdong"
        
    },
    {
        
        Q: "Which of the following is not one of the Greek Fates?",
        soln: "ans1",
        a:"Narcissus",
        b:"Clotho",
        c:"Atropos",
        d:"Lachesis"
    },
    {
       
        Q: "In Magic: The Gathering, what card&#039;s flavor text is &quot;Catch!&quot;?",
        soln: "ans4",
        a:"Stone-Throwing Devils",
        b:"Ember Shot",
        c:"Throwing Knife",
        d:"LavaAxe"
    },
    {
        
        Q: "In WarioWare: Smooth Moves, which one of these is NOT a Form?",
        soln: "ans3",
        a:"The Discard",
        b:"The Elephant",
        c:"The Hotshot",
        d:"The Mohawk"
    }
]

   
    let ques= document.getElementById("q");
    let option1=document.getElementById("opt1");
    let option2=document.getElementById("opt2");
    let option3=document.getElementById("opt3");
    let option4=document.getElementById("opt4");

    let num=0;
    let score=0;
    let myScore=document.querySelector(".myScore");
    let Time=document.querySelector(".MyTime");
    let des=document.querySelector(".btn");
    let answers=document.querySelectorAll(".options");

    ques.innerHTML=data[num].Q;
    option1.innerHTML=data[num].a;
    option2.innerHTML=data[num].b;
    option3.innerHTML=data[num].c;
    option4.innerHTML=data[num].d;

    var timer;
    var time=document.getElementById("time");

    function clock(){
        var sec=0;
        timer=setInterval(()=>{
            time.innerHTML=sec+"sec";
            sec++;
            if(sec>=500){
                clearInterval(timer);
                showResult();
            }
        },1000);
    }
    

    function checkAns(){
        let ans;
        answers.forEach((CurElement)=>{
            if(CurElement.checked){
                ans=CurElement.id;
                console.log(ans);
            }
        })
        return ans;
    }
    function disselect(){
        answers.forEach((CurElement)=>{
            CurElement.checked=false;
            }
        )
    }


    function next(){
        let given=checkAns();
        disselect();
        if(given==data[num].soln){
            score++;
        }
        num++;
        if(num<data.length){
        ques.innerHTML=data[num].Q;
        option1.innerHTML=data[num].a;
        option2.innerHTML=data[num].b;
        option3.innerHTML=data[num].c;
        option4.innerHTML=data[num].d;
        }
        else{
            clearInterval(timer);
            showResult();
        }
        
    }
    function showResult() {
        myScore.innerHTML = `Your Score: ${score}/${data.length} <br/>
            <button class="button" onclick="location.reload()">Again</button>`;

        Time.innerHTML=`Your Time:${sec}seconds`;
        document.getElementById("nxt").style.display = "none";
        des.style.backgroundColor = "black";
    }
    clock();


