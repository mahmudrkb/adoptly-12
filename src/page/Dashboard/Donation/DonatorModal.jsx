import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Avatar,
  CardBody,
} from "@material-tailwind/react";
import { MdPreview } from "react-icons/md";

const DonatorModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <button button onClick={handleOpen}>
        <MdPreview className="h-6 text-teal-600 w-6" />
      </button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody divider>
          <h1 className="text-2xl fond-bold">The List of Donators</h1>
          <CardBody className="  px-0">
            <table className="   w-full min-w-max  table-auto text-left">
              <thead>
                <tr className=" bg-teal-300  text-white">
                  <th className="border-y border-gray-100 p-4">
                    <Typography
                      variant="small"
                      className="font-normal leading-none "
                    >
                      #
                    </Typography>
                  </th>
                  <th className="border-y border-blue-gray-100 p-4">
                    <Typography
                      variant="small"
                      className="font-normal leading-none "
                    >
                      Image
                    </Typography>
                  </th>
                 
                  <th className="border-y border-blue-gray-100 p-4">
                    <Typography
                      variant="small"
                      className="font-normal leading-none text-center "
                    >
                Name
                    </Typography>
                  </th>
                  <th className="border-y border-blue-gray-100 p-4">
                    <Typography
                      variant="small"
                      className="font-normal leading-none text-center "
                    >
                      Amount
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr>
                  <td className="">
                    <Typography variant="small" className="font-normal ml-4">
                      {/* {index + 1} */} 1
                    </Typography>
                  </td>
                  <td className="">
                    <div className="flex items-center gap-3">
                      {/* <Avatar 
                        // src={donation.image}
                        // alt={donation.name}
                        size="sm"
                      /> image */}
                      image
                     
                    </div>
                  </td>
                  <td className=" ">
                    <Typography variant="small" className="font-normal text-center">
                      {/* {index + 1} */}  name
                    </Typography>
                  </td>
                  <td className="">
                    <Typography variant="small" className="font-normal text-center">
                      {/* {index + 1} */} amount
                    </Typography>
                  </td>
                  
                </tr>
              </tbody>
            </table>
          </CardBody>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default DonatorModal;
