export default function Footer() {
  return (
  <footer className="bg-footer">
     <div className="flex gap-3 justify-center">
                <img className="mt-48 md:mt-60" src="./assets/logo-footer.png" alt=""/>
              </div>
      <div className="footer bg-footer text-[#FFFFFFE6] flex-row md:justify-evenly lg:justify-evenly py-8">
  <nav className="lg:justify-self-start md:justify-self-center justify-self-center">
    <h6 className="text-lg font-semibold">About Us</h6>
    <p className="text-gray-400 text-lg">We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
  </nav>
  <div className="space-y-4 lg:justify-self-start md:justify-self-center justify-self-center mr-32">
     <h3 className="text-lg font-semibold">Quick Links</h3>
     <ul className="space-y-2 text-gray-400 text-lg">
       <li><a href="#">. Home</a></li>
       <li><a href="#">. Services</a></li>
       <li><a href="#">. About</a></li>
       <li><a href="#">. Contact</a></li>
     </ul>
   </div>
  <form className="lg:justify-self-start md:justify-self-center justify-self-center">
    <h6 className="text-lg font-semibold text-colors">Subscribe</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="text-gray-400  text-lg">Subscribe to our newsletter for the latest updates.</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="Enter your email"
          className="input input-bordered join-item bg-colors" />
        <button className="btn btn-primary join-item bg-gradient-to-r from-orange-300 to-orange-400 text-black font-bold text-lg">Subscribe</button>
      </div>
    </fieldset>
  </form>
</div>
<div className="flex justify-center">
<aside className="footer footer-center p-4 text-gray-400 text-lg">
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</div>
  </footer>
  )
}




