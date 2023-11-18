import Button from "./Button";
import Card from "./Card";
import Review from "./Review";

import image1 from "../assets/image-1.png";
import image2 from "../assets/image-2.png";
import image3 from "../assets/image-3.png";
import image4 from "../assets/image-4.png";
import avatar from "../assets/avatar.png";

function Main() {
  return (
    <main>
      <section className="box bg-brand-500 text-base-white">
        <section className="container grid items-center md:grid-cols-2 content gap-7xl">
          <section className="flex flex-col items-start gap-12">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h1 className="text-yellow-300">Little Lemon</h1>
                <h3 className="text-yellow-50">Chicago</h3>
              </div>
              <p className="text-text-xl">
                Powerful, self-serve product and growth analytics to help you
                convert, engage, and retain more.
              </p>
            </div>
            <Button color="secondary" size="lg">
              Get started
            </Button>
          </section>
          <section>
            <img
              className="rounded-2xl aspect-square w-sm"
              src={image1}
              alt=""
            />
          </section>
        </section>
      </section>
      <section className="container box">
        <section className="flex flex-col content gap-6xl">
          <section className="flex items-center justify-between">
            <h2>This weeks special!</h2>
            <Button>Online Menu</Button>
          </section>
          <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-6xl">
            <Card
              image={image2}
              title="Greek salad"
              price="12.99"
              description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
            />
            <Card
              image={image2}
              title="Bruchetta"
              price="$5.99"
              description="Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
            />
            <Card
              image={image2}
              title="Greek salad"
              price="12.99"
              description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
            />
          </section>
        </section>
      </section>
      <section className="container box">
        <section className="flex flex-col content gap-6xl">
          <section className="flex items-center justify-center">
            <h3>Testimonials</h3>
          </section>
          <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-6xl">
            <Review
              avatar={avatar}
              title="Onha"
              description="Really good salad. It was so delicious that i couldn’t event imagine."
              rating={5}
            />
            <Review
              avatar={avatar}
              title="Onha"
              description="Really good salad. It was so delicious that i couldn’t event imagine."
              rating={4}
            />
            <Review
              avatar={avatar}
              title="Onha"
              description="Really good salad. It was so delicious that i couldn’t event imagine."
              rating={5}
            />
          </section>
        </section>
      </section>
      <section className="overflow-hidden bg-yellow-200 box">
        <section className="container grid md:grid-cols-2 content gap-6xl">
          <section className="flex flex-col gap-3xl">
            <div className="flex flex-col gap-2xl">
              <h2>Little Lemon</h2>
              <h4>Chicago</h4>
            </div>
            <p className="text-yellow-700 text-text-xl">
              Welcome to our restaurant! We are happy to provide you with
              healthy and delicious dishes of all kinds.
            </p>
          </section>
          <section>
            <img className="rounded-2xl w-3/4" src={image3} alt="" />
            <img
              className="rounded-2xl w-3/4 relative -mt-[60%] left-1/4"
              src={image4}
              alt=""
            />
          </section>
        </section>
      </section>
    </main>
  );
}

export default Main;
