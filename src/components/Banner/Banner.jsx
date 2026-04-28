import "./Banner.css"
import { useState } from "react";

const Banner = () => {
  const referralLink = "https://www.example.com/referral/sameerbhai123456789";
  const referralCode = "E745C798S49";
  const [linkCopied, setLinkCopied] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);

  const copyToClipboard = (text, setLinkCopied) => {
    setLinkCopied(true);
    navigator.clipboard.writeText(text);
    setTimeout(() => setLinkCopied(false), 1000);
  }; 

  return (
    <div className="mt-20 px-12 mb-10">
      <div className='grid'>
        <div className="grid-card">
          <img src='https://png.pngtree.com/png-vector/20241217/ourmid/pngtree-clipart-of-a-money-bag-filled-with-gold-coins-featuring-dollar-png-image_14789520.png' alt="total balance"/>
          <div className="card-text">
            <p>$9,568.00</p>
            <p>Total Balance</p>
          </div>
        </div>
        <div className="grid-card">
          <img src='https://t4.ftcdn.net/jpg/03/98/03/85/360_F_398038584_za88Cc4owDrBZHjK4qwMk40og3hgv1Wk.jpg' alt="discount"/>
          <div className="card-text">
            <p>60%</p>
            <p>Discount Percentage</p>
          </div>
        </div>
        <div className="grid-card">
          <img src='https://t4.ftcdn.net/jpg/03/76/22/13/360_F_376221393_BCtZD6rjPuXpPZiMPv2ybJyfyjje0Xv2.jpg' alt="referal"/>
          <div className="card-text">
            <p>300</p>
            <p>Total Referal</p>
          </div>
        </div>
        <div className="grid-card">
          <img src='https://static.vecteezy.com/system/resources/previews/057/979/174/non_2x/elegant-price-tag-icon-with-a-percentage-discount-and-isolated-background-vector.jpg' alt="discount amount"/>
          <div className="card-text">
            <p>$300</p>
            <p>Discount Amount</p>
          </div>
        </div>
        <div className="grid-card">
          <img src='https://legaldev.in/assets/img/services/commission-income.webp' alt="comission"/>
          <div className="card-text">
            <p>$465.00</p>
            <p>Comission Amount</p>
          </div>
        </div>
        <div className="grid-card">
          <img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/gross-total-income-icon-svg-download-png-6619708.png' alt="total earning"/>
          <div className="card-text">
            <p>$158.00</p>
            <p>Total Earning</p>
          </div>
        </div>
        <div className="grid-card">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-vBKT1LaQUD_yhe9nskhLvnS3jsFmNV7ngg&s' alt="comission discount"/>
          <div className="card-text">
            <p>40%</p>
            <p>Comission Discount</p>
          </div>
        </div>
        <div className="grid-card">
          <img src='https://static.vecteezy.com/system/resources/previews/035/863/764/non_2x/3d-receipt-with-checkmark-money-bank-card-and-calculator-success-financial-transaction-render-paper-invoice-and-money-total-bill-shopping-payment-checkout-money-transfer-illustration-vector.jpg' alt="total transfer"/>
          <div className="card-text">
            <p>$534.00</p>
            <p>Total Bank Transfer</p>
          </div>
        </div>
      </div>
      <div className="sub-card">
        <div className="sub-card-text">
            <p className="text-gray-800">Service</p>
            <p className="text-blue-800 font-bold">some service</p>
        </div>
        <div className="sub-card-text">
            <p className="text-gray-800">Your Referals</p>
            <p className="text-blue-800 font-bold">0+ 0</p>
        </div>
        <div className="sub-card-text">
            <p className="text-gray-800">Active Referals</p>
            <p className="text-blue-800 font-bold">0+ 0</p>
        </div>
        <div className="sub-card-text">
            <p className="text-gray-800">Total Ref.Earnings</p>
            <p className="text-blue-800 font-bold">$0.00</p>
        </div>
      </div>
      <p className="font-bold text-xl mt-6 mb-6">Refer Friends And Earn More !!</p>
      <div className="flex justify-between items-center">
        <div className="referals">
            <p className="font-bold text-lg text-gray-600">Your Referal Link</p>
            <div className="referal-code-copy">
                <input type='search' value={referralLink} readOnly/>
                <button className={`${linkCopied?"bg-green-500": "bg-blue-500"}`} onClick={()=>copyToClipboard(referralLink,setLinkCopied)}>
                  {linkCopied?"Copied!":"Copy"}
                </button>
            </div>
        </div>
        <div className="referals">
            <p className="font-bold text-lg text-gray-600">Your Referal Code</p>
            <div className="referal-code-copy">
                <input type='search' value={referralCode} readOnly/>
                <button className={`${codeCopied?"bg-green-500": "bg-blue-500"}`} onClick={()=>copyToClipboard(referralCode,setCodeCopied)}>
                  {codeCopied?"Copied!":"Copy"}
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
