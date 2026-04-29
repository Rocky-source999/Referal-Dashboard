import Banner from '../Banner/Banner'
import { useApi } from '../Context/ApiContext'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import ReferalData from '../ReferalData/ReferalData'
import TopBanner from '../TopBanner/TopBanner'
import { useState } from 'react'


const Home = () => {
  const data = useApi()
  const[userInput, setUserInput]=useState("")
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const lastIndex = currentPage * rowsPerPage;
  const firstIndex = lastIndex - rowsPerPage;
  const totalPages = Math.ceil(data.length / rowsPerPage);
  

  const searchInput=(e)=>{
    setUserInput(e.target.value)
  }
  const filteredData = data?.filter((item) => {
  const name = item.name || item.Name || "";
  return name.toLowerCase().includes(userInput.toLowerCase());
  });

  const currentData = filteredData.slice(firstIndex, lastIndex);

  return (
    <div>
      <Header/>
      <TopBanner searchinput={searchInput} userinput={userInput}/>
      <Banner/>
      <ReferalData data={currentData} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages}/>
      <Footer/>
    </div>
  )
}

export default Home
