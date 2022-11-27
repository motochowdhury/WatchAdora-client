import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";

export default function BookingModal({ isOpen, setIsOpen, book }) {
  const { _id, name, productName, email, resalePrice } = book;
  const { register, handleSubmit, reset } = useForm();

  // Save Booking
  const saveBooking = ({ phone, meetingLocation }) => {
    const bookingData = {
      productId: _id,
      productName,
      email,
      resalePrice,
      phone,
      meetingLocation,
    };

    console.log(bookingData);
    reset();
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900">
                    Booking {productName}
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit(saveBooking)}>
                      <div className="w-9/12 mx-auto space-y-2">
                        <input
                          readOnly
                          defaultValue={name}
                          className="border text-sm font-roboto w-full rounded outline-none px-2 py-1"
                          type="text"
                        />
                        <input
                          readOnly
                          defaultValue={email}
                          className="border text-sm font-roboto w-full rounded outline-none px-2 py-1"
                          type="text"
                        />
                        <input
                          readOnly
                          defaultValue={`$${resalePrice}`}
                          className="border text-sm font-roboto w-full rounded outline-none px-2 py-1"
                          type="text"
                        />
                        <input
                          required
                          placeholder="Phone"
                          className="border text-sm font-roboto w-full rounded outline-none px-2 py-1"
                          type="text"
                          {...register("phone")}
                        />
                        <input
                          required
                          placeholder="meeting Location"
                          className="border text-sm font-roboto w-full rounded outline-none px-2 py-1"
                          type="text"
                          {...register("meetingLocation")}
                        />
                      </div>
                      <div className="mt-4 flex justify-center space-x-4">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={() => setIsOpen(false)}>
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-green-300 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                          onClick={() => setIsOpen(false)}>
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
