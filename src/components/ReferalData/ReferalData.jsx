import "./ReferalData.css"

const ReferalData = ({ data, currentPage, setCurrentPage, totalPages }) => {

  return (
    <div className='flex flex-col gap-5 mt-10'>
        <h1 className='text-3xl font-bold text-center mb-6'>Referal Data</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Service Name</th>
                    <th>Date</th>
                    <th>Profit</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((item)=>(
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.service_name}</td>
                    <td>{item.date}</td>
                    <td>{item.profit}</td>
                </tr>
                ))}
            </tbody>
        </table>
        <div className="pagination">
            <button className='page-button' onClick={() => setCurrentPage((p) => p - 1)} disabled={currentPage === 1}>
                Prev
            </button>
            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, i) => (
            <button key={i} onClick={() => setCurrentPage(i + 1)} className='numbers' 
            style={{fontWeight: currentPage === i + 1 ? "bold" : "normal"}}>
            {i + 1}
            </button>
            ))}
            <button className='page-button'  onClick={() => setCurrentPage((p) => p + 1)} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    </div>
  )
}

export default ReferalData
