const people = [
  {
    name: "AL-Mahmud Rakib",
    role: "Co-Founder / CEO",
    imageUrl: "https://simgbb.com/avatar/7d2XZZqF5TqV.jpg",
  },
  {
    name: "Michael Thompson",
    role: "Co-Founder / Director of Operations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Sarah Johnson",
    role: "Head of Pet Care Services",
    imageUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Emily Davis",
    role: "Adoption Coordinator",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQigJKoUDG7RElsrstXMsEsmMBZBV4YGh6W7Q&s",
  },
  {
    name: "James Lee",
    role: "Veterinarian",
    imageUrl:
      "https://www.asianjunkie.com/wp-content/uploads/2018/08/James3.jpg",
  },
  {
    name: "Olivia Brown",
    role: "Volunteer Coordinator",
    imageUrl:
      "https://thumbs.dreamstime.com/b/man-feeling-suspicious-face-expression-emotion-hesitating-facial-studio-shot-white-isolated-background-copy-space-90927117.jpg",
  },
];

const About = () => {
  return (
    <div id="about">
      <div className=" container mx-auto py-10   p-3 ">
        <div className=" lg:flex   gap-10 ">
          <div className="">
            <h2 className="text-pretty text-3xl font-semibold  text-gray-900 sm:text-4xl">
              Meet our leadership
            </h2>
            <p className="mt-6 max-w-md text-gray-600">
              At  ADOPTLY, our mission is to connect loving homes
              with pets in need. We work closely with shelters and rescue
              organizations to ensure every pet receives the care and attention
              they deserve before finding their forever family. Our dedicated
              team provides a seamless adoption experience, offering support,
              resources, and guidance every step of the way. From adopting to
              post-adoption care, we're here to help you give a pet the life
              they deserve. Join us in making a difference—adopt today and give
              a pet a second chance at happiness.
            </p>
          </div>
         <div>
         <ul
            role="list"
            className="grid gap-x-4 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex  items-center gap-x-6">
                  <img
                    alt=""
                    src={person.imageUrl}
                    className="size-16  rounded-full"
                  />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm/6 font-semibold text-teal-300">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
         </div>
        </div>
      </div> 
    </div>
  );
};

export default About;
