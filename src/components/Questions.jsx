import { useState, useEffect } from "react";
import "./Questions.css";
import loading from "../images/loading.gif";

function Questions() {
    let response = [];
    let copyres = response;
    const [user, setUser] = useState("");
    const [name, setName] = useState("");
    const [rating, setRating] = useState("");
    const [link, setLink] = useState("");
    // const [questionTag, setQuestionTag] = useState("strings"); //use to add tags in the future

    const userdata = async (user) => {
          let data = await fetch(
            `https://codeforces.com/api/user.info?handles=${user}`
          );
          data = await data.json();
          return data;
    };

    const finduser = async (user) => {
        let solvedquestion = await fetch(
          ` https://codeforces.com/api/user.status?handle=${user}`
        );
        let data = await solvedquestion.json();
        return data;
    };

    const onchangeinput = async (e) => {
        setUser(e.target.value);
    };

    const onclicksearch = async (e) => {
        response = await getQuestions();
        // console.log("working");
        const Userdata = await userdata(user);
        const ibox = document.getElementById("invisible");
        ibox.style.display = "flex";
        setName(user);
        setRating(Userdata.result[0].maxRating);
        // console.log(Userdata.result[0]);
        setLink(Userdata.result[0].avatar);
        setcolor(user);
        e.preventDefault();
    };

    const setcolor = async (user) => {
        // console.log(user);
        const a = await finduser(user);
        let arr = a.result;
        let solved = [];
        for (let i = 0; i <= 15; i++) {
          let div = document.getElementById(`${i}${1}`);
          solved.push(div.innerHTML);
        }
        for(let i=0;i<=15;i++) {
          let div = document.getElementById(`${i}${1}`).parentElement;
          let bo=true;
          arr.forEach((element)=>{
            if (element.problem.name === solved[i]) {
              if (element.verdict === "OK") {
                bo=false;
                div.style.backgroundColor = "#29fd53";
                div.style.color = "white";
              } else if (
                element.verdict === "WRONG" &&
                div.style.backgroundColor != "green"
              ) {
                div.style.backgroundColor = "red";
              }
            }
          })
          if(bo)
          {
            div.style.backgroundColor = "#333";
            div.style.color = "white";
          }
        }
    };
    
    useEffect(()=> {
        async function fetchdata(){
          const spinner = document.getElementById("spinner");
          const inner = document.getElementById("innercontainer");
          inner.style.display = "none";
          spinner.style.display = "block";
          response = await getQuestions();
          // console.log(response);
          copyres = response;
          spinner.style.display = "none";
          inner.style.display = "block";
        }
        fetchdata();
      }, []);

    const onclick800 = async () => {
        const spinner = document.getElementById("spinner");
        const inner = document.getElementById("innercontainer");
        inner.style.display = "none";
        spinner.style.display = "block";
        response = await getQuestions();
        let c = 0;
        for (let i = 1; i <= 15; i++) {
          let idx = document.getElementById(`${i}${0}`);
          idx.innerHTML = i;
          let name = document.getElementById(`${i}${1}`);
          name.innerHTML = `${response.q800[c].name}`;
          let rating = document.getElementById(`${i}${3}`);
          rating.innerHTML = 800;
          let frequency = document.getElementById(`${i}${2}`);
          frequency.innerHTML = `${response.q800[c].submissions}`;
          let s = "";
          let tags = document.getElementById(`${i}${4}`);
          response.q800[c].tags.forEach((element, index) => {
            s += element[0].toUpperCase() + element.substring(1);
            if (index === response.q800[c].tags.length - 1) {
            } else {
              s += ", ";
            }
          });
          if (user === "") {
          } else {
            // console.log(user);
            setcolor(user);
          }
          tags.innerHTML = s;
          c++;
        }
        spinner.style.display = "none";
        inner.style.display = "block";
        // id.style.display = "none";
        // console.log(response);
      };

    const onclick900 = async () => {
    const spinner = document.getElementById("spinner");
    const inner = document.getElementById("innercontainer");
    inner.style.display = "none";
    spinner.style.display = "block";
    response = await getQuestions();
    let c = 0;
    for (let i = 1; i <= 15; i++) {
        let idx = document.getElementById(`${i}${0}`);
        idx.innerHTML = i;
        let name = document.getElementById(`${i}${1}`);
        name.innerHTML = `${response.q900[c].name}`;
        let rating = document.getElementById(`${i}${3}`);
        rating.innerHTML = 900;
        let frequency = document.getElementById(`${i}${2}`);
        frequency.innerHTML = `${response.q900[c].submissions}`;
        let s = "";
        let tags = document.getElementById(`${i}${4}`);
        response.q900[c].tags.forEach((element, index) => {
        s += element[0].toUpperCase() + element.substring(1);
        if (index === response.q900[c].tags.length - 1) {
        } else {
            s += ", ";
        }
        });
        if (user === "") {
        } else {
        // console.log(user);
        setcolor(user);
        }
        tags.innerHTML = s;
        c++;
    }
    spinner.style.display = "none";
    inner.style.display = "block";
    // id.style.display = "none";
    // console.log(response);
    };

      const onclick1000 = async () => {
        const spinner = document.getElementById("spinner");
        const inner = document.getElementById("innercontainer");
        inner.style.display = "none";
        spinner.style.display = "block";
        response = await getQuestions();
        let c = 0;
        for (let i = 1; i <= 15; i++) {
          let idx = document.getElementById(`${i}${0}`);
          idx.innerHTML = i;
          let name = document.getElementById(`${i}${1}`);
          name.innerHTML = `${response.q1000[c].name}`;
          let rating = document.getElementById(`${i}${3}`);
          rating.innerHTML = 1000;
          let frequency = document.getElementById(`${i}${2}`);
          frequency.innerHTML = `${response.q1000[c].submissions}`;
          let s = "";
          let tags = document.getElementById(`${i}${4}`);
          response.q1000[c].tags.forEach((element, index) => {
            s += element[0].toUpperCase() + element.substring(1);
            if (index === response.q1000[c].tags.length - 1) {
            } else {
              s += ", ";
            }
          });
          if (user === "") {
          } else {
            // console.log(user);
            setcolor(user);
          }
          tags.innerHTML = s;
          c++;
        }
        spinner.style.display = "none";
        inner.style.display = "block";
        // id.style.display = "none";
        // console.log(response);
      };

      const onclick1100 = async () => {
        const spinner = document.getElementById("spinner");
        const inner = document.getElementById("innercontainer");
        inner.style.display = "none";
        spinner.style.display = "block";
        response = await getQuestions();
        let c = 0;
        for (let i = 1; i <= 15; i++) {
          let idx = document.getElementById(`${i}${0}`);
          idx.innerHTML = i;
          let name = document.getElementById(`${i}${1}`);
          name.innerHTML = `${response.q1100[c].name}`;
          let rating = document.getElementById(`${i}${3}`);
          rating.innerHTML = 1100;
          let frequency = document.getElementById(`${i}${2}`);
          frequency.innerHTML = `${response.q1100[c].submissions}`;
          let s = "";
          let tags = document.getElementById(`${i}${4}`);
          response.q1100[c].tags.forEach((element, index) => {
            s += element[0].toUpperCase() + element.substring(1);
            if (index === response.q1100[c].tags.length - 1) {
            } else {
              s += ", ";
            }
          });
          if (user === "") {
          } else {
            // console.log(user);
            setcolor(user);
          }
          tags.innerHTML = s;
          c++;
        }
        spinner.style.display = "none";
        inner.style.display = "block";
        // id.style.display = "none";
        // console.log(response);
      };

      const onclick1200 = async () => {
        const spinner = document.getElementById("spinner");
        const inner = document.getElementById("innercontainer");
        inner.style.display = "none";
        spinner.style.display = "block";
        response = await getQuestions();
        let c = 0;
        for (let i = 1; i <= 15; i++) {
          let idx = document.getElementById(`${i}${0}`);
          idx.innerHTML = i;
          let name = document.getElementById(`${i}${1}`);
          name.innerHTML = `${response.q1200[c].name}`;
          let rating = document.getElementById(`${i}${3}`);
          rating.innerHTML = 1200;
          let frequency = document.getElementById(`${i}${2}`);
          frequency.innerHTML = `${response.q1200[c].submissions}`;
          let s = "";
          let tags = document.getElementById(`${i}${4}`);
          response.q1200[c].tags.forEach((element, index) => {
            s += element[0].toUpperCase() + element.substring(1);
            if (index === response.q1200[c].tags.length - 1) {
            } else {
              s += ", ";
            }
          });
          if (user === "") {
          } else {
            // console.log(user);
            setcolor(user);
          }
          tags.innerHTML = s;
          c++;
        }
        spinner.style.display = "none";
        inner.style.display = "block";
        // id.style.display = "none";
        // console.log(response);
      };


      const onclick1300 = async () => {
        const spinner = document.getElementById("spinner");
        const inner = document.getElementById("innercontainer");
        inner.style.display = "none";
        spinner.style.display = "block";
        response = await getQuestions();
        let c = 0;
        for (let i = 1; i <= 15; i++) {
          let idx = document.getElementById(`${i}${0}`);
          idx.innerHTML = i;
          let name = document.getElementById(`${i}${1}`);
          name.innerHTML = `${response.q1300[c].name}`;
          let rating = document.getElementById(`${i}${3}`);
          rating.innerHTML = 1300;
          let frequency = document.getElementById(`${i}${2}`);
          frequency.innerHTML = `${response.q1300[c].submissions}`;
          let s = "";
          let tags = document.getElementById(`${i}${4}`);
          response.q1300[c].tags.forEach((element, index) => {
            s += element[0].toUpperCase() + element.substring(1);
            if (index === response.q1300[c].tags.length - 1) {
            } else {
              s += ", ";
            }
          });
          if (user === "") {
          } else {
            // console.log(user);
            setcolor(user);
          }
          tags.innerHTML = s;
          c++;
        }
        spinner.style.display = "none";
        inner.style.display = "block";
        // id.style.display = "none";
        // console.log(response);
      };

      const onclick1400 = async () => {
        const spinner = document.getElementById("spinner");
        const inner = document.getElementById("innercontainer");
        inner.style.display = "none";
        spinner.style.display = "block";
        response = await getQuestions();
        let c = 0;
        for (let i = 1; i <= 15; i++) {
          let idx = document.getElementById(`${i}${0}`);
          idx.innerHTML = i;
          let name = document.getElementById(`${i}${1}`);
          name.innerHTML = `${response.q1400[c].name}`;
          let rating = document.getElementById(`${i}${3}`);
          rating.innerHTML = 1400;
          let frequency = document.getElementById(`${i}${2}`);
          frequency.innerHTML = `${response.q1400[c].submissions}`;
          let s = "";
          let tags = document.getElementById(`${i}${4}`);
          response.q1400[c].tags.forEach((element, index) => {
            s += element[0].toUpperCase() + element.substring(1);
            if (index === response.q1400[c].tags.length - 1) {
            } else {
              s += ", ";
            }
          });
          if (user === "") {
          } else {
            // console.log(user);
            setcolor(user);
          }
          tags.innerHTML = s;
          c++;
        }
        spinner.style.display = "none";
        inner.style.display = "block";
        // id.style.display = "none";
        // console.log(response);
      };

      const onclick1500 = async () => {
        const spinner = document.getElementById("spinner");
        const inner = document.getElementById("innercontainer");
        inner.style.display = "none";
        spinner.style.display = "block";
        response = await getQuestions();
        let c = 0;
        for (let i = 1; i <= 15; i++) {
          let idx = document.getElementById(`${i}${0}`);
          idx.innerHTML = i;
          let name = document.getElementById(`${i}${1}`);
          name.innerHTML = `${response.q1500[c].name}`;
          let rating = document.getElementById(`${i}${3}`);
          rating.innerHTML = 1500;
          let frequency = document.getElementById(`${i}${2}`);
          frequency.innerHTML = `${response.q1500[c].submissions}`;
          let s = "";
          let tags = document.getElementById(`${i}${4}`);
          response.q1500[c].tags.forEach((element, index) => {
            s += element[0].toUpperCase() + element.substring(1);
            if (index === response.q1500[c].tags.length - 1) {
            } else {
              s += ", ";
            }
          });
          if (user === "") {
          } else {
            // console.log(user);
            setcolor(user);
          }
          tags.innerHTML = s;
          c++;
        }
        spinner.style.display = "none";
        inner.style.display = "block";
        // id.style.display = "none";
        // console.log(response);
      };

      const onclick1600 = async () => {
        const spinner = document.getElementById("spinner");
        const inner = document.getElementById("innercontainer");
        inner.style.display = "none";
        spinner.style.display = "block";
        response = await getQuestions();
        let c = 0;
        for (let i = 1; i <= 15; i++) {
          let idx = document.getElementById(`${i}${0}`);
          idx.innerHTML = i;
          let name = document.getElementById(`${i}${1}`);
          name.innerHTML = `${response.q1600[c].name}`;
          let rating = document.getElementById(`${i}${3}`);
          rating.innerHTML = 1600;
          let frequency = document.getElementById(`${i}${2}`);
          frequency.innerHTML = `${response.q1600[c].submissions}`;
          let s = "";
          let tags = document.getElementById(`${i}${4}`);
          response.q1600[c].tags.forEach((element, index) => {
            s += element[0].toUpperCase() + element.substring(1);
            if (index === response.q1600[c].tags.length - 1) {
            } else {
              s += ", ";
            }
          });
          if (user === "") {
          } else {
            // console.log(user);
            setcolor(user);
          }
          tags.innerHTML = s;
          c++;
        }
        spinner.style.display = "none";
        inner.style.display = "block";
        // id.style.display = "none";
        // console.log(response);
      };

      const onclick1700 = async () => {
        const spinner = document.getElementById("spinner");
        const inner = document.getElementById("innercontainer");
        inner.style.display = "none";
        spinner.style.display = "block";
        response = await getQuestions();
        let c = 0;
        for (let i = 1; i <= 15; i++) {
          let idx = document.getElementById(`${i}${0}`);
          idx.innerHTML = i;
          let name = document.getElementById(`${i}${1}`);
          name.innerHTML = `${response.q1700[c].name}`;
          let rating = document.getElementById(`${i}${3}`);
          rating.innerHTML = 1700;
          let frequency = document.getElementById(`${i}${2}`);
          frequency.innerHTML = `${response.q1700[c].submissions}`;
          let s = "";
          let tags = document.getElementById(`${i}${4}`);
          response.q1700[c].tags.forEach((element, index) => {
            s += element[0].toUpperCase() + element.substring(1);
            if (index === response.q1700[c].tags.length - 1) {
            } else {
              s += ", ";
            }
          });
          if (user === "") {
          } else {
            // console.log(user);
            setcolor(user);
          }
          tags.innerHTML = s;
          c++;
        }
        spinner.style.display = "none";
        inner.style.display = "block";
        // id.style.display = "none";
        // console.log(response);
      };


      const onclick1800 = async () => {
        const spinner = document.getElementById("spinner");
        const inner = document.getElementById("innercontainer");
        inner.style.display = "none";
        spinner.style.display = "block";
        response = await getQuestions();
        let c = 0;
        for (let i = 1; i <= 15; i++) {
          let idx = document.getElementById(`${i}${0}`);
          idx.innerHTML = i;
          let name = document.getElementById(`${i}${1}`);
          name.innerHTML = `${response.q1800[c].name}`;
          let rating = document.getElementById(`${i}${3}`);
          rating.innerHTML = 1800;
          let frequency = document.getElementById(`${i}${2}`);
          frequency.innerHTML = `${response.q1800[c].submissions}`;
          let s = "";
          let tags = document.getElementById(`${i}${4}`);
          response.q1800[c].tags.forEach((element, index) => {
            s += element[0].toUpperCase() + element.substring(1);
            if (index === response.q1800[c].tags.length - 1) {
            } else {
              s += ", ";
            }
          });
          if (user === "") {
          } else {
            // console.log(user);
            setcolor(user);
          }
          tags.innerHTML = s;
          c++;
        }
        spinner.style.display = "none";
        inner.style.display = "block";
        // id.style.display = "none";
        // console.log(response);
      };

      const onclick1900 = async () => {
        const spinner = document.getElementById("spinner");
        const inner = document.getElementById("innercontainer");
        inner.style.display = "none";
        spinner.style.display = "block";
        response = await getQuestions();
        let c = 0;
        for (let i = 1; i <= 15; i++) {
          let idx = document.getElementById(`${i}${0}`);
          idx.innerHTML = i;
          let name = document.getElementById(`${i}${1}`);
          name.innerHTML = `${response.q1900[c].name}`;
          let rating = document.getElementById(`${i}${3}`);
          rating.innerHTML = 1900;
          let frequency = document.getElementById(`${i}${2}`);
          frequency.innerHTML = `${response.q1900[c].submissions}`;
          let s = "";
          let tags = document.getElementById(`${i}${4}`);
          response.q1900[c].tags.forEach((element, index) => {
            s += element[0].toUpperCase() + element.substring(1);
            if (index === response.q1900[c].tags.length - 1) {
            } else {
              s += ", ";
            }
          });
          if (user === "") {
          } else {
            // console.log(user);
            setcolor(user);
          }
          tags.innerHTML = s;
          c++;
        }
        spinner.style.display = "none";
        inner.style.display = "block";
        // id.style.display = "none";
        // console.log(response);
      };

      const onclick2000 = async () => {
        const spinner = document.getElementById("spinner");
        const inner = document.getElementById("innercontainer");
        inner.style.display = "none";
        spinner.style.display = "block";
        response = await getQuestions();
        let c = 0;
        for (let i = 1; i <= 15; i++) {
          let idx = document.getElementById(`${i}${0}`);
          idx.innerHTML = i;
          let name = document.getElementById(`${i}${1}`);
          name.innerHTML = `${response.q2000[c].name}`;
          let rating = document.getElementById(`${i}${3}`);
          rating.innerHTML = 2000;
          let frequency = document.getElementById(`${i}${2}`);
          frequency.innerHTML = `${response.q2000[c].submissions}`;
          let s = "";
          let tags = document.getElementById(`${i}${4}`);
          response.q2000[c].tags.forEach((element, index) => {
            s += element[0].toUpperCase() + element.substring(1);
            if (index === response.q2000[c].tags.length - 1) {
            } else {
              s += ", ";
            }
          });
          if (user === "") {
          } else {
            // console.log(user);
            setcolor(user);
          }
          tags.innerHTML = s;
          c++;
        }
        spinner.style.display = "none";
        inner.style.display = "block";
        // id.style.display = "none";
        // console.log(response);
      };

    const getQuestions = async () => {
        let id = document.getElementById("spinner");
        let questions = await fetch(
          `https://codeforces.com/api/problemset.problems?tags=`
        );
        questions = await questions.json();
        let q800 = [];
        let q900 = [];
        let q1000 = [];
        let q1100 = [];
        let q1200 = [];
        let q1300 = [];
        let q1400 = [];
        let q1500 = [];
        let q1600 = [];
        let q1700 = [];
        let q1800 = [];
        let q1900 = [];
        let q2000 = [];
        let problems = questions.result.problems;
        let stats = questions.result.problemStatistics;
        problems.forEach((element, index) => {
          let temp = {
            name: element.name,
            tags: element.tags,
            submissions: stats[index].solvedCount,
          };
          switch (element.rating) {
            case 800:
              q800.push(temp);
              break;
            case 900:
              q900.push(temp);
              break;
            case 1000:
              q1000.push(temp);
              break;
            case 1100:
              q1100.push(temp);
              break;
            case 1200:
              q1200.push(temp);
              break;
            case 1300:
              q1300.push(temp);
              break;
            case 1400:
              q1400.push(temp);
              break;
            case 1500:
              q1500.push(temp);
              break;
            case 1600:
              q1600.push(temp);
              break;
            case 1700:
              q1700.push(temp);
              break;
            case 1800:
              q1800.push(temp);
              break;
            case 1900:
              q1900.push(temp);
              break;
            case 2000:
              q2000.push(temp);
              break;
            default:
              break;
          }
        });
        // q1800.forEach((element)=>{
        //     console.log(element);
        // })
        // console.log(questions);
        q800.sort(function (a, b) {
          const lastperson = a.submissions;
          const nextperson = b.submissions;
          if (lastperson > nextperson) {
            return -1;
          } else {
            return 1;
          }
        });
        q900.sort(function(a,b){
          const lastperson=a.submissions;
          const nextperson=b.submissions;
          if(lastperson>nextperson)
          {
            return -1;
          }
          else
          {
            return 1;
          }
        });
        q1000.sort(function(a,b){
          const lastperson=a.submissions;
          const nextperson=b.submissions;
          if(lastperson>nextperson)
          {
            return -1;
          }
          else
          {
            return 1;
          }
        });
        q1100.sort(function(a,b){
          const lastperson=a.submissions;
          const nextperson=b.submissions;
          if(lastperson>nextperson)
          {
            return -1;
          }
          else
          {
            return 1;
          }
        });
        q1200.sort(function(a,b){
          const lastperson=a.submissions;
          const nextperson=b.submissions;
          if(lastperson>nextperson)
          {
            return -1;
          }
          else
          {
            return 1;
          }
        });
        q1300.sort(function(a,b){
          const lastperson=a.submissions;
          const nextperson=b.submissions;
          if(lastperson>nextperson)
          {
            return -1;
          }
          else
          {
            return 1;
          }
        });
        q1400.sort(function(a,b){
          const lastperson=a.submissions;
          const nextperson=b.submissions;
          if(lastperson>nextperson)
          {
            return -1;
          }
          else
          {
            return 1;
          }
        });
        q1500.sort(function(a,b){
          const lastperson=a.submissions;
          const nextperson=b.submissions;
          if(lastperson>nextperson)
          {
            return -1;
          }
          else
          {
            return 1;
          }
        });
        q1600.sort(function(a,b){
          const lastperson=a.submissions;
          const nextperson=b.submissions;
          if(lastperson>nextperson)
          {
            return -1;
          }
          else
          {
            return 1;
          }
        });
        q1700.sort(function(a,b){
          const lastperson=a.submissions;
          const nextperson=b.submissions;
          if(lastperson>nextperson)
          {
            return -1;
          }
          else
          {
            return 1;
          }
        });
        q1800.sort(function(a,b){
          const lastperson=a.submissions;
          const nextperson=b.submissions;
          if(lastperson>nextperson)
          {
            return -1;
          }
          else
          {
            return 1;
          }
        });
        q1900.sort(function(a,b){
          const lastperson=a.submissions;
          const nextperson=b.submissions;
          if(lastperson>nextperson)
          {
            return -1;
          }
          else
          {
            return 1;
          }
        });
        q2000.sort(function(a,b){
          const lastperson=a.submissions;
          const nextperson=b.submissions;
          if(lastperson>nextperson)
          {
            return -1;
          }
          else
          {
            return 1;
          }
        });
        const res = {
          q800,
          q900,
          q1000,
          q1100,
          q1200,
          q1300,
          q1400,
          q1500,
          q1600,
          q1700,
          q1800,
          q1900,
          q2000,
        };
        let c = 0;
        for (let i = 1; i <= 15; i++) {
          let idx = document.getElementById(`${i}${0}`);
          idx.innerHTML = i;
          let name = document.getElementById(`${i}${1}`);
          name.innerHTML = `${res.q800[c].name}`;
          let rating = document.getElementById(`${i}${3}`);
          rating.innerHTML = 800;
          let frequency = document.getElementById(`${i}${2}`);
          frequency.innerHTML = `${res.q800[c].submissions}`;
          let s = "";
          let tags = document.getElementById(`${i}${4}`);
          res.q800[c].tags.forEach((element, index) => {
            s += element[0].toUpperCase() + element.substring(1);
            if (index === res.q800[c].tags.length - 1) {
            } else {
              s += ", ";
            }
          });
          tags.innerHTML = s;
          c++;
        }
        // id.style.display = "none";
        // console.log(res);
        return res;
    };

    return (
      <>
        <div id="container">
          <div id="divform">
            <form action="submit" id="form1">
              <input
                type="text"
                name="search1"
                id="search1"
                placeholder="Codeforces Handle"
                value={user}
                onChange={onchangeinput}
              />
              <label htmlFor="search1" id="labelsearch">
                <ion-icon
                  name="search"
                  id="searchicon"
                  onClick={onclicksearch}
                ></ion-icon>
              </label>
            </form>
            {/* <div class="dropdown">
            <button class="dropbtn">Tag</button>
            <div class="dropdown-content">
              <a href="#">Binary Search</a>
              <a href="#">Bitmasks</a>
              <a href="#">Brute Force</a>
              <a href="#">combinatorics</a>
              <a href="#">constructive algorithms</a>
              <a href="#">data structures</a>
              <a href="#">dfs and similar</a>
              <a href="#">dp</a>
              <a href="#">dsu</a>
              <a href="#">geometry</a>
              <a href="#">graphs</a>
              <a href="#">greedy</a>
              <a href="#">implementation</a>
              <a href="#">interactive</a>
              <a href="#">math</a>
              <a href="#">sortings</a>
              <a href="#">strings</a>
              <a href="#">trees</a>
              <a href="#">two pointers</a>
            </div>
          </div> */}

          {/* <select 
            className = "custom-select"
            value = {questionTag}
            onChange = {(e) => {
              const selectedTag = e.target.value;
              setQuestionTag(selectedTag);
            }}>
            <option value = "implementation">implementation</option>
            <option value = "strings">strings</option>
            <option value = "strings">strings</option>
            <option value = "strings">strings</option>
            <option value = "strings">strings</option>
            <option value = "strings">strings</option>
            <option value = "strings">strings</option>
            <option value = "strings">strings</option>
            <option value = "strings">strings</option>
            <option value = "strings">strings</option>
            <option value = "strings">strings</option>
            <option value = "strings">strings</option>
            <option value = "strings">strings</option>
            <option value = "strings">strings</option>
            <option value = "strings">strings</option>
            <option value = "strings">strings</option>

          </select> */}
          </div>
          <div id="invisible">
            <div id="one">
              <img src={link} alt="" />
            </div>
            <div id="two">
              <div id="codename">{name}</div>
              <div id="group">
                <div id="rating">Max. Rating: </div>
                <div id="coderating">{rating}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div id="options">
            <div className="first">
              <button onClick={onclick800} className="option">
                800
              </button>
              <button onClick={onclick900} className="option">
                900
              </button>
              <button onClick={onclick1000} className="option">
                1000
              </button>
              <button onClick={onclick1100} className="option">
                1100
              </button>
              <button onClick={onclick1200} className="option">
                1200
              </button>
              <button onClick={onclick1300} className="option">
                1300
              </button>
              <button onClick={onclick1400} className="option">
                1400
              </button>
            </div>
  
            <div className="first">
              <button onClick={onclick1500} className="option">
                1500
              </button>
              <button onClick={onclick1600} className="option">
                1600
              </button>
              <button onClick={onclick1700} className="option">
                1700
              </button>
              <button onClick={onclick1800} className="option">
                1800
              </button>
              <button onClick={onclick1900} className="option">
                1900
              </button>
              <button onClick={onclick2000} className="option">
                2000
              </button>
            </div>
          </div>
  
          <div id="inner">
            <div id="spinner">
              <img src={loading} alt="spinner" id="gif" />
            </div>
            <div id="innercontainer">
              <div className="list list1">
                <div className="elements0" id="00">
                  Index
                </div>
                <div className="elements1" id="01">
                  Problem
                </div>
                <div className="elements2" id="02">
                  Frequency
                </div>
                <div className="elements3" id="03">
                  Rating
                </div>
                <div className="elements4" id="04">
                  Tags
                </div>
              </div>
              <div className="list">
                <div className="elements0" id="10"></div>
                <div className="elements1" id="11"></div>
                <div className="elements2" id="12"></div>
                <div className="elements3" id="13"></div>
                <div className="elements4" id="14"></div>
              </div>
              <div className="list">
                <div className="elements0" id="20"></div>
                <div className="elements1" id="21"></div>
                <div className="elements2" id="22"></div>
                <div className="elements3" id="23"></div>
                <div className="elements4" id="24"></div>
              </div>
              <div className="list">
                <div className="elements0" id="30"></div>
                <div className="elements1" id="31"></div>
                <div className="elements2" id="32"></div>
                <div className="elements3" id="33"></div>
                <div className="elements4" id="34"></div>
              </div>
              <div className="list">
                <div className="elements0" id="40"></div>
                <div className="elements1" id="41"></div>
                <div className="elements2" id="42"></div>
                <div className="elements3" id="43"></div>
                <div className="elements4" id="44"></div>
              </div>
              <div className="list">
                <div className="elements0" id="50"></div>
                <div className="elements1" id="51"></div>
                <div className="elements2" id="52"></div>
                <div className="elements3" id="53"></div>
                <div className="elements4" id="54"></div>
              </div>
              <div className="list">
                <div className="elements0" id="60"></div>
                <div className="elements1" id="61"></div>
                <div className="elements2" id="62"></div>
                <div className="elements3" id="63"></div>
                <div className="elements4" id="64"></div>
              </div>
              <div className="list">
                <div className="elements0" id="70"></div>
                <div className="elements1" id="71"></div>
                <div className="elements2" id="72"></div>
                <div className="elements3" id="73"></div>
                <div className="elements4" id="74"></div>
              </div>
              <div className="list">
                <div className="elements0" id="80"></div>
                <div className="elements1" id="81"></div>
                <div className="elements2" id="82"></div>
                <div className="elements3" id="83"></div>
                <div className="elements4" id="84"></div>
              </div>
              <div className="list">
                <div className="elements0" id="90"></div>
                <div className="elements1" id="91"></div>
                <div className="elements2" id="92"></div>
                <div className="elements3" id="93"></div>
                <div className="elements4" id="94"></div>
              </div>
              <div className="list">
                <div className="elements0" id="100"></div>
                <div className="elements1" id="101"></div>
                <div className="elements2" id="102"></div>
                <div className="elements3" id="103"></div>
                <div className="elements4" id="104"></div>
              </div>
              <div className="list">
                <div className="elements0" id="110"></div>
                <div className="elements1" id="111"></div>
                <div className="elements2" id="112"></div>
                <div className="elements3" id="113"></div>
                <div className="elements4" id="114"></div>
              </div>
              <div className="list">
                <div className="elements0" id="120"></div>
                <div className="elements1" id="121"></div>
                <div className="elements2" id="122"></div>
                <div className="elements3" id="123"></div>
                <div className="elements4" id="124"></div>
              </div>
              <div className="list">
                <div className="elements0" id="130"></div>
                <div className="elements1" id="131"></div>
                <div className="elements2" id="132"></div>
                <div className="elements3" id="133"></div>
                <div className="elements4" id="134"></div>
              </div>
              <div className="list">
                <div className="elements0" id="140"></div>
                <div className="elements1" id="141"></div>
                <div className="elements2" id="142"></div>
                <div className="elements3" id="143"></div>
                <div className="elements4" id="144"></div>
              </div>
              <div className="list">
                <div className="elements0" id="150"></div>
                <div className="elements1" id="151"></div>
                <div className="elements2" id="152"></div>
                <div className="elements3" id="153"></div>
                <div className="elements4" id="154"></div>
              </div>
              <div id="space"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Questions;
