const Footer=()=>{
    const year = new Date().getFullYear();
    return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a href="https://www.linkedin.com/in/madhur-chauhan-862325216/" target="_blank">
        Madhur Chauhan
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <strong>
        Food<span>Villa</span>
      </strong>
    </div>
  );
};

export default Footer;