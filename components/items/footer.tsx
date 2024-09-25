export default function Footer() {
  return (
    <footer className="bg-gray-100 py-[30px]">
      <div className="container flex flex-col md:flex-row justify-between p-[10px] text-[13px]">
        <div className="flex w-[100%] gap-[20px] justify-around">
          <div>
            <p className="text-[12px] font-[600]  mb-[10px] md:mb-[24px] uppercase">
              collections
            </p>
            <div className="flex flex-col gap-2">
              <p>Black teas</p>
              <p>Breen teas </p>
              <p>White teas</p>
              <p>Herbal teas</p>
              <p>Matcha</p>
              <p>Chai</p>
              <p>Oolong</p>
              <p>Rooibos</p>
              <p>Teaware</p>
            </div>
          </div>
          <div>
            <p className="text-[12px] md:text-[14px] font-[600]  mb-[10px] md:mb-[24px] uppercase">
              learn
            </p>
            <div className="flex flex-col gap-3">
              <p>About us</p>
              <p>About our teas</p>
              <p>Tea academy</p>
            </div>
          </div>

          <div>
            <p className="text-[12px] md:text-[14px] font-[600]  mb-[10px] md:mb-[24px] uppercase">
              customer service
            </p>
            <div className="flex flex-col gap-3">
              <p>Ordering and payment</p>
              <p>Delivery</p>
              <p>Privacy and policy</p>
              <p>Terms and condition</p>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-2">
            <p className=" text-[12px] font-[600] md:text-[14px] mb-[10px] md:mb-[24px] uppercase">
              contact us
            </p>
            <div className="flex flex-col gap-3">
              <p>3 Falahi, Falahi St, Pasdaran Ave, Shiraz, Fars Provieence</p>
              <p>Email: amoopur@gmail.com</p>
              <p>Tel: +98 9173038406 </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
