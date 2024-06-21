export default function Footer() {
  return (
    <footer className="bg-gray-100 py-[30px]">
      <div className="container text-[13px]">
        <div className="flex justify-between">
          <div>
            <p className="text-[14px] mb-[24px] uppercase">collections</p>
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
            <p className="text-[14px] mb-[24px] uppercase">learn</p>
            <div className="flex flex-col gap-3">
              <p>About us</p>
              <p>About our teas</p>
              <p>Tea academy</p>
            </div>
          </div>

          <div>
            <p className="text-[14px] mb-[24px] uppercase">customer service</p>
            <div className="flex flex-col gap-3">
              <p>Ordering and payment</p>
              <p>Delivery</p>
              <p>Privacy and policy</p>
              <p>Terms and condition</p>
            </div>
          </div>

          <div>
            <p className="text-[14px] mb-[24px] uppercase">contact us</p>
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
