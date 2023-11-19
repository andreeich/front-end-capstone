import PropTypes from "prop-types";

import Button from "./Button";

function Card({ image, title, price, description }) {
  return (
    <article className="flex flex-col gap-2xl">
      <header>
        <img className="w-full rounded-2xl" src={image} alt={title} />
      </header>
      <main className="flex flex-col flex-1 gap-md">
        <div className="flex items-center justify-between">
          <h4>{title}</h4>
          <h6 className="text-orange-500">${price}</h6>
        </div>
        <p className="text-gray-600 line-clamp-4 text-text-md">{description}</p>
      </main>
      <footer>
        <Button color="tertiary">Order Online</Button>
      </footer>
    </article>
  );
}
Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
};

export default Card;
