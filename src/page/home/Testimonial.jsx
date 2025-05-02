import React from "react";

const Testimonial = () => {
  const review = [
    {
      name: "Rahat Hossain",
      location: "Dhaka, Bangladesh",
      image: "https://i.ibb.co/r0rL4sF/user1.jpg",
      shortDescription:
        "I adopted a cat from Adoply. She is now a big part of my life. A wonderful experience!",
      petImage: "https://i.ibb.co/3RW5Jt8/cat1.jpg",
    },
    {
      name: "Sabrina Sultana",
      location: "Chattogram, Bangladesh",
      image: "https://i.ibb.co/gFxVph1/user2.jpg",
      shortDescription:
        "Bruno the dog has taken away my loneliness. Thank you, Adoply!",
      petImage: "https://i.ibb.co/Zgyr7DL/dog1.jpg",
    },
    {
      name: "Tanvir Islam",
      location: "Rajshahi, Bangladesh",
      image: "https://i.ibb.co/J2hXZ0r/user3.jpg",
      shortDescription: "Helped my son adopt his first bunny. He's overjoyed!",
      petImage: "https://i.ibb.co/3CRyVL0/rabbit1.jpg",
    },
    {
      name: "Nahida Parvin",
      location: "Khulna, Bangladesh",
      image: "https://i.ibb.co/Wn0bfct/user4.jpg",
      shortDescription: "I used to fear dogs, but now Milo is my best friend.",
      petImage: "https://i.ibb.co/7NNytrz/dog2.jpg",
    },
    {
      name: "Sajedul Karim",
      location: "Sylhet, Bangladesh",
      image: "https://i.ibb.co/sWx8fG4/user5.jpg",
      shortDescription:
        "Adopting my favorite fish from Adoply was a smooth and delightful process.",
      petImage: "https://i.ibb.co/4g8TFT6/fish1.jpg",
    },
  ];

  return (
    <section>
      <div className="container mx-auto p-3 py-10">
        <div className="text-center gap-6 xl:flex justify-between lg:text-left">
          <div>
            <h1 className="text-4xl font-bold ">Testimonial</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

         <div>
         {review.map((review) => (
            <div className="card bg-base-200 rounded-lg p-4 max-w-96 shadow-xl">
              <figure>
                <img className="rounded-t-xl" src={review.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{review.name}</h2>
                <p>{review.shortDescription}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
         </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
