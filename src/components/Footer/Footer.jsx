import "./_footer.scss";
const Footer = () => {
  return (
    <footer className="aj-footer py-4 mt-auto">
      <div className="d-flex justify-content-center">
         <p className="mb-2 mb-md-0">&copy; {new Date().getFullYear()} Web Media Docs. All rights reserved.</p> 
        {/* <div>
          <a href="#" className="text-white text-decoration-none me-3">Privacy Policy</a>
          <a href="#" className="text-white text-decoration-none me-3">Terms</a>
          <a href="#" className="text-white text-decoration-none">Contact</a>
        </div> */}
        {/* <div className="row">
            <div className="col-4">Company & Address</div>
            <div className="col-4">Tutorials</div>
            <div className="col-4">Etc</div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
