import {Bookmark  } from "lucide-react";
import Card from "./components/Card";
const App = () => {
const jobs = [
  {
    companyName: "Google",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    time: "30 days ago",
    post: "Graphics Designer",
    tag1: "Part Time",
    tag2: "Flexible Schedule",
    address: "Kochi, India",
    salary: "$150-220K"
  },
  {
    companyName: "Microsoft",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    time: "25 days ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Remote Work",
    address: "Bengaluru, India",
    salary: "$140-200K"
  },
  {
    companyName: "Amazon",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    time: "20 days ago",
    post: "Frontend Developer",
    tag1: "Contract",
    tag2: "Flexible Schedule",
    address: "Hyderabad, India",
    salary: "$130-180K"
  },
  {
    companyName: "Apple",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    time: "15 days ago",
    post: "Product Designer",
    tag1: "Part Time",
    tag2: "On-Site",
    address: "Mumbai, India",
    salary: "$160-210K"
  },
  {
    companyName: "Meta",
    companyLogo: "https://imgs.search.brave.com/rat-RPCmN1svsgIxZD6al0jOjVVY1-TnOeZc9t-ddPg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2l0eXBuZy5jb20v/cHVibGljL3VwbG9h/ZHMvcHJldmlldy9k/b3dubG9hZC1oZC1t/ZXRhLWZhY2Vib29r/LWxvZ28tcG5nLTcw/MTc1MTY5NDc3NzA2/N2hxcXdtM2Rvcmgu/cG5n",
    time: "10 days ago",
    post: "Visual Designer",
    tag1: "Full Time",
    tag2: "Flexible Schedule",
    address: "Delhi, India",
    salary: "$150-220K"
  },
  {
    companyName: "Netflix",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    time: "8 days ago",
    post: "Motion Graphics Artist",
    tag1: "Contract",
    tag2: "Remote Work",
    address: "Pune, India",
    salary: "$120-170K"
  },
  {
    companyName: "Adobe",
    companyLogo: "https://imgs.search.brave.com/nD3yKjOY9c2xNAOXoGzR2sFxNjutwgRAjaqLjhWa1pA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDYvQWRvYmUtTG9n/by0xOTkzLTIwMTQt/NzAweDM5NC5wbmc",
    time: "5 days ago",
    post: "Creative Designer",
    tag1: "Full Time",
    tag2: "Flexible Schedule",
    address: "Chennai, India",
    salary: "$140-190K"
  },
  {
    companyName: "IBM",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    time: "3 days ago",
    post: "Design Consultant",
    tag1: "Part Time",
    tag2: "Remote Work",
    address: "Kolkata, India",
    salary: "$130-180K"
  },
  {
    companyName: "Tesla",
    companyLogo: "https://imgs.search.brave.com/PvITyPz6FxejokbZdwPBeuq5f2xiqP_6MH_iniRCGnw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdiLzgw/L2IzLzdiODBiMzI3/Njg2NmYyMjU4YjU3/MGFhNmMwN2U1NGNh/LmpwZw",
    time: "2 days ago",
    post: "Industrial Designer",
    tag1: "Full Time",
    tag2: "On-Site",
    address: "Noida, India",
    salary: "$160-220K"
  },
  {
    companyName: "Samsung",
    companyLogo: "https://imgs.search.brave.com/s9LLgnsgsA6NVtwrDPY4UXlvtQLCAJYiS5UWldVYky0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/Ly1zYW1zdW5nLWxv/Z28tdHJhbnNwYXJl/bnQtOS5wbmc",
    time: "1 day ago",
    post: "Graphics Engineer",
    tag1: "Contract",
    tag2: "Flexible Schedule",
    address: "Gurgaon, India",
    salary: "$140-200K"
  }
];



  return (
    <div className="min-h-screen min-w-screen bg-zinc-900 text-black p-5 flex gap-5 flex-wrap ">
      {
        jobs.map((e)=>{
              return <Card data={e}/>
        })
      }
    
     

      </div>
  )
}

export default App
