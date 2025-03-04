<div> 
   <h1 className="font-bold">
ADOPTLY </h1>

   <h2>
   Live Link : https://adoptly-85d31.web.app </h2> 
   <p>Admin Email: rakib@gmail.com</p>
   <p>Admin password : 123456</p>
    <h3 className="font-semibold">Server Side</h3>
    <a href="https://github.com/mahmudrkb/adoptly-server-12" target="_blank"
      >Backend Github Link</a
    > 
    <br>

<a href="https://adoptly-server.vercel.app" target="_blank">Vercel Link</a>

   <div> 
 <h3 className="font-semibold">Description</h3>
 <p>Adoply is a modern pet adoption platform that connects pet lovers with animals in need of a home. Users can explore pets based on categories, add pets for adoption, and manage their adoption status seamlessly.</p>
 </div>

</div>
<div>
    <h3 className="font-semibold"> Technologies</h3>
      <ul>
        <li>Html</li>
        <li>Css</li>
        <li>React</li>
        <li>Node</li>
        <li>Express</li>
        <li>MongoDB</li>
      </ul>
</div>
<div>
    <h3 className="font-semibold"> Purpose</h3>
      <ul>
        <li>Connecting People with Pets</li>
        <li>Promoting Pet Adoption</li>
        <li> Building a Community</li>
        <li> Adoption facility</li>
      </ul>
</div>

<div>
    <h3 className="font-semibold">Key  Feature</h3>
    <ul>
    <li> Adoption Request  </li>
    <li> Pay Donation   </li>
      <li>User Authentication</li>
      <li> jwt  secure</li>
      <li> Add pets,update, delete </li>
      <li> Add Donation Campaign ,update delete</li>
    </ul>
</div>

<div>
    <h3 className="font-semibold">NPM Packages</h3>
    <ul>
     <li> React-icons</li>
     <li>React-hook form </li>
     <li>Date-fns </li>
     <li>React-select </li>
     <li>React-modal </li>
     <li>others </li>
    </ul>
</div>

<div>
 <h3 className="font-semibold"> Key Page </h3>
  <h5>1.Home Page:</h5>
  <p>Dynamic statistics  (Pet Adoption, Pet Category, About Us, FAQ, Contact Us )</p>

  <h5>2.Pet Listing:</h5>
  <p>This page displays all available pets for adoption. Each pet card includes an image, name, age, location, and a short description, along with an option to view more details or initiate the adoption process. </p>
  <h5>3.Donation Campaigns:</h5>
  <p>This section highlights various donation campaigns aimed at supporting rescued and homeless pets. Users can explore ongoing campaigns, learn about their goals, and contribute to help provide food, medical care, and shelter for pets in need.</p>
  <h5>6.Dashboard:</h5>
  <p>The dashboard provides an overview of user activities, including added pets, adoption requests, and donation history. Depending on user roles , it may include features like managing listed pets, tracking adoption status, and monitoring donations. Admins will have additional controls to approve adoptions, manage users, and oversee donation campaigns.</p>
  </div>

  <div>

 <h3 class="font-semibold">Frontend Technologies:</h3>
  <ul>
    <li><strong>React.js</strong> – For building the user interface efficiently with reusable components.</li>
    <li><strong>React Router</strong> – For seamless navigation between different pages (e.g., Home, Pet Listing, Dashboard).</li>
    <li><strong>Context API / Redux</strong> – For state management (e.g., managing pet data, user authentication).</li>
    <li><strong>Tailwind CSS / Bootstrap</strong> – For styling and making the UI responsive.</li>
    <li><strong>Formik & Yup</strong> – For form handling and validation (e.g., adding pets).</li>
    <li><strong>React-Select</strong> – For dropdown selections (e.g., pet categories).</li>
    <li><strong>React-Toastify</strong> – For displaying success/error notifications.</li>
    <li><strong>Cloudinary / ImgBB API</strong> – For pet image uploads.</li>
    <li><strong>React Quill / Markdown Editor</strong> – For handling long descriptions in pet listings.</li>
    <li><strong>Framer Motion</strong> – For animations and smooth UI interactions.</li>
  </ul>
  </div>
  
<div>
  <h3 class="font-semibold">Authentication</h3>

  <h5>Register a User</h5>
  <p><strong>POST /register</strong> - Registers a new user in the system.</p>

  <h5>Login</h5>
  <p><strong>POST /users</strong> - Authenticates a user and provides a JWT token.</p>

  <h5>Logout</h5>
  <p><strong>POST /logout</strong> - Logs out the user and clears the authentication token from cookies.</p>

  <h5>JWT Authentication</h5>
  <p><strong>GET /jwt</strong> - Verifies the JWT token from cookies to authenticate the user.</p>
  </div>

  <div>
      <h2>Dashboard Admin Routes</h2>
      <div>
        <h3 className="semi-bold">Admin Home</h3>
        <ul>
          <li>Show Total User</li>
          <li>Show Total Pets</li>
          <li>Show Total Donations</li>
        </ul>
      </div>

   <div>
        <h3 className="semi-bold">All User</h3>
        <ul>
          <p>Admin can control all user </p>
          <li>User Role Update</li>
          <li>Make Admin</li>
          <li>Normal user</li>
          <li>Delete User</li>
        </ul>
    </div>

  <div>
        <h3 className="semi-bold">All Pets</h3>
        <ul>
          <p>Admin can control all Pets </p>
          <li>Pet adopted  Update</li>
          <li>Pet Delete</li>
          <li>Pet Card update </li>
           </ul>

   </div>

  <div>
        <h3 className="semi-bold">All Donations</h3>
        <p>
          Admin see all donation  and Amount
        </p>
    </div>
</div>
<div>
      <h2>Dashboard User Routes</h2>
      <div>
        <h3 className="semi-bold">Add Pets</h3>
        <li>
          <span className="semi-bold">Route:</span>
          dashboard/add-pet
        </li>
        <li>
          This route allows users to add a new pet to the system. Users can
          provide details such as the pet's name, breed, age, and any other
          relevant information. This is typically used by pet owners or shelters
          to list pets available for adoption.
        </li>
      </div>

  <div>
        <h3 className="semi-bold">My Added Pets</h3>
        <li>
           <span className="semi-bold">Route:</span>
          dashboard/my-pet
        </li>
        <li>
          This route displays a list of pets added by the logged-in user. It
          provides an overview of all the pets they have registered in the
          system, along with options to edit or remove them.
        </li>
      </div>
      <div>
        <h3 className="semi-bold">Adoption Request</h3>
        <li>
           <span className="semi-bold">Route:</span>
          /dashboard/adoptionRequest
        </li>
        <li>
          This route allows users to submit adoption requests for pets listed on the platform. Users can select a pet and provide their contact information or other required details to initiate the adoption process.
        </li>
      </div>
      <div>
        <h3 className="semi-bold">Create Donation Campaign</h3>
        <li>
          <span className="semi-bold">Route:</span>
          /dashboard/add-donation
        </li>
        <li>
          This route enables users to create a donation campaign for a specific cause, such as supporting a shelter or funding medical care for pets. Users can set a goal, provide a description, and upload images or videos to promote the campaign.
        </li>
      </div>
      <div>
        <h3 className="semi-bold">My Donation Campaigns</h3>
        <li>
          <span className="semi-bold">Route:</span>
          /dashboard/my-campaigns
        </li>
        <li>
          This route displays a list of donation campaigns created by the logged-in user. It provides details such as the campaign's progress, funds raised, and options to edit or manage the campaign.
        </li>
      </div>
      <div>
        <h3 className="semi-bold">My Donations</h3>
        <li>
           <span className="semi-bold">Route:</span>
         /dashboard/paymentsHistory
        </li>
        <li>
          This route shows a history of donations made by the logged-in user. It includes details such as the donation amount, date, and the campaign or cause the donation was made to.
        </li>
      </div>

</div>
