import "animate.css";

const GiftGridItem = ({ title, url }) => {
  return (
    <div className="animate__animated animate__fadeInDown card ">
      <p>{title}</p>
      <img src={url} alt={title} />
    </div>
  );
};

export default GiftGridItem;
