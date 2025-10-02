import React from 'react';
import Client1 from '../assets/Client1.png';
import Client2 from '../assets/client2.png';
import Client3 from '../assets/client3.png';
import Client4 from '../assets/client4.png';
import Client5 from '../assets/client5.png';
import Client6 from '../assets/client6.png';
import Client7 from '../assets/client7.png';
import Client8 from '../assets/client8.png';
import Client9 from '../assets/client9.png';




const ClientList = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-3xl font-semibold text-gray-900 dark:text-white">
              Trusted by the world’s most innovative teams
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                alt="Transistor"
                src={Client1}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:hidden"
              />
              {/* <img
                alt="Transistor"
                src={Client1}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain not-dark:hidden lg:col-span-1"
              /> */}

              <img
                alt="Reform"
                src={Client2}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:hidden"
              />
              {/* <img
                alt="Reform"
                src={Client2}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain not-dark:hidden lg:col-span-1"
              /> */}

              <img
                alt="Tuple"
                src={Client3}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:hidden"
              />
              {/* <img
                alt="Tuple"
                src={Client4}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain not-dark:hidden lg:col-span-1"
              /> */}

              <img
                alt="SavvyCal"
                src={Client5}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 dark:hidden"
              />
              {/* <img
                alt="SavvyCal"
                src={Client5}
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain not-dark:hidden sm:col-start-2 lg:col-span-1"
              /> */}

              <img
                alt="Statamic"
                src={Client6}
                width={158}
                height={48}
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 dark:hidden"
              />
              {/* <img
                alt="Statamic"
                src={Client6}
                width={158}
                height={48}
                className="col-span-2 col-start-2 max-h-12 w-full object-contain not-dark:hidden sm:col-start-auto lg:col-span-1"
              /> */}

              <img
                alt="Statamic"
                src={Client7}
                width={158}
                height={48}
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 dark:hidden"
              />
              {/* <img
                alt="Statamic"
                src={Client7}
                width={158}
                height={48}
                className="col-span-2 col-start-2 max-h-12 w-full object-contain not-dark:hidden sm:col-start-auto lg:col-span-1"
              /> */}

              <img
                alt="Statamic"
                src={Client8}
                width={158}
                height={48}
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 dark:hidden"
              />
              {/* <img
                alt="Statamic"
                src={Client8}
                width={158}
                height={48}
                className="col-span-2 col-start-2 max-h-12 w-full object-contain not-dark:hidden sm:col-start-auto lg:col-span-1"
              /> */}

              <img
                alt="Statamic"
                src={Client9}
                width={158}
                height={48}
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 dark:hidden"
              />
              {/* <img
                alt="Statamic"
                src={Client9}
                width={158}
                height={48}
                className="col-span-2 col-start-2 max-h-12 w-full object-contain not-dark:hidden sm:col-start-auto lg:col-span-1"
              /> */}
            </div>
          </div>
  )
}

export default ClientList