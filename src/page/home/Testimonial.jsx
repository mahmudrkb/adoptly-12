import React from "react";
import Marquee from "react-fast-marquee";

const Testimonial = () => {
  const review = [
    {
      name: "AL Mahmud Rakib",
      location: "Dhaka, Bangladesh",
      image: "https://simgbb.com/avatar/7d2XZZqF5TqV.jpg",
      shortDescription:
        "I adopted a cat from Adoply. She is now a big part of my life. A wonderful experience!",
      petImage: "https://i.ibb.co.com/9qfFCwv/pet-17.jpg",
    },
    {
      name: "Sabrina Sultana",
      location: "Chattogram, Bangladesh",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      shortDescription:
        "Bruno the dog has taken away my loneliness. Thank you, Adoply!",
      petImage: "https://i.ibb.co.com/9HTS8fw0/pet-11.jpg",
    },
    {
      name: "Tanvir Islam",
      location: "Rajshahi, Bangladesh",
      image: "https://thumbs.dreamstime.com/b/man-feeling-suspicious-face-expression-emotion-hesitating-facial-studio-shot-white-isolated-background-copy-space-90927117.jpg",
      shortDescription: "Helped my son adopt his first bunny. He's overjoyed!",
      petImage: "https://i.ibb.co.com/1RyHDZG/pet-15.jpg",
    },
    {
      name: "Nahida Parvin",
      location: "Khulna, Bangladesh",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQigJKoUDG7RElsrstXMsEsmMBZBV4YGh6W7Q&s",
      shortDescription: "I used to fear dogs, but now Milo is my best friend.",
      petImage: "https://i.ibb.co.com/KzWRT9S/pet-10.jpg",
    },
    {
      name: "Sajedul Karim",
      location: "Sylhet, Bangladesh",
      image: "https://www.asianjunkie.com/wp-content/uploads/2018/08/James3.jpg",
      shortDescription:
        "Adopting my favorite fish from Adoply was a smooth and delightful process.",
      petImage: "https://i.ibb.co.com/Mkx3XRT/download-3.jpg",
    },
  ];

  return (
    <section className="bg-gray-200 dark:bg-blue-gray-900 dark:text-white">
      <div className="container mx-auto p-3 py-10">
        <div className=" gap-3    p-5 ">
          <div className=" max-w-3xl  space-y-2">
            <h1 className="text-4xl font-bold ">Testimonial</h1>
            <p>At Adoply, we believe every adoption is the beginning of a beautiful story. Hear from our happy adopters who have welcomed a new furry (or finned!) friend into their homes. Their heartfelt experiences inspire others to choose adoption and give pets a second chance at love and care.</p>
          </div>

         <div className="mt-5 ">
         <Marquee>
         {review.map((review) => (
            <div className="card mx-2  dark:bg-blue-gray-800 bg-gray-50  space-y-3 rounded-lg p-4 max-w-96 shadow-xl">
              <figure className="object-cover">
                <img className="rounded-t-xl w-full h-44 object-cover " src={review.petImage} alt="image" />
              </figure>
              <div className="card-body">
              
                <p>{review.shortDescription}</p>
                <div className="card-actions mt-3 justify-end">
                  <div className="avatar">
                    <div className=" flex gap-3 rounded-full">
                      <img 
                      className="w-12 rounded-full"
                       src={review.image} />
                     <div>
                     <h4>{review.name}</h4>
                     <address>{review.location}</address>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </Marquee>
         </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
