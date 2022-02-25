import { Fragment, useState } from 'react'
import { Menu, Transition, Popover } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { LightningBoltIcon } from '@heroicons/react/solid'
import  useAppContext from '../../context/state';
import { useGetLoginInfo, useGetNetworkConfig, logout, getAccountBalance, getAddress, getAccount } from '@elrondnetwork/dapp-core';
import { useEffect } from 'react'
import * as  erdjs from '@elrondnetwork/erdjs';

const navigation = [
  { name: 'Roadmap', href: '#roadmap', current: false },
  { name: 'Contract', href: '#contract', current: false },
  { name: 'Team', href: '#team', current: false }
]

const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(' ')
}

const displayEgld = (egldBalance: string) => {
    const numberOfEgld = Number.parseInt(egldBalance) / 100000000000000000;
    return Math.round((numberOfEgld + Number.EPSILON) * 1000) / 10000;
}

const Navbar = () => {

    const  { openModal, setModalName, modalOpen, closeModal } = useAppContext();
    const { isLoggedIn } = useGetLoginInfo();
    const { proxy } = useGetNetworkConfig();
    const [egldBalance, setEgldBalance] = useState(0);
    const [rstBalance, setRstBalance] = useState(0);

    const openUnlockModal = () => {
        setModalName('Unlock');
        openModal();
    }

    const onHandleLogout = () => {
        logout("/");
    }

    useEffect(() => {
        (async () => {
            if (isLoggedIn) {
                if (modalOpen) {
                    closeModal()
                }
                const address = await getAddress();
                const balance = await getAccountBalance(address);
                const esdtList = await proxy.getAddressEsdtList(new erdjs.Address(address));
                const tokenEntry: any = Object.entries(esdtList).find(([tokenIdentifier, value]) => tokenIdentifier.startsWith('RST'));
                if (tokenEntry) {
                    setRstBalance(tokenEntry[1].balance)
                }
                setEgldBalance(displayEgld(balance));
            }
        })();
    }, [isLoggedIn])

    const goToAnchor = (item: { name: string, href: string, current: boolean}) => {
      const element = document.getElementById(item.href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
      });
      }
    }

    return (
        <>          
          <header>
            <Popover className="relative bg-darkGrey">
              <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <a href="#">
                    <span className="sr-only">Acid Punk</span>
                    <svg width="54" height="76" viewBox="0 0 54 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.9304 35.7207L26.45 10.2314L35.1567 25.5148H23.1501L17.3118 35.7207H52.9L32.5421 0H20.3579L0 35.7207H11.9304Z" fill="#00FEDB"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M42.5772 40.2793H8.30899V53.0367H3.23222V63.2426H8.30899V76H18.4626V63.2426H42.5772C45.7248 63.2426 48.4155 62.12 50.6493 59.8747C52.8831 57.6294 54 54.9248 54 51.761C54 48.5971 52.8831 45.8926 50.6493 43.6473C48.4155 41.402 45.7248 40.2793 42.5772 40.2793ZM18.4626 53.0367V50.4852H42.5772C42.9326 50.4852 43.2288 50.6128 43.4657 50.868C43.7195 51.1061 43.8464 51.4038 43.8464 51.761C43.8464 52.1182 43.7195 52.4244 43.4657 52.6795C43.2288 52.9176 42.9326 53.0367 42.5772 53.0367H18.4626Z" fill="#00FEDB"/>
                    </svg>

                  </a>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden md:flex space-x-10">
                  {navigation.map((item) => (
                    <a key={item.name} onClick={() => goToAnchor(item)} className="uppercase text-base font-medium text-white hover:text-white font-Montserrat hover:cursor-pointer">
                      {item.name}
                    </a>
                  ))}
                </Popover.Group>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {
                        isLoggedIn ? 
                        (
                            <>
                                <p className="">
                                    { rstBalance } RST
                                </p>
                                <span className="mx-2">
                                    /
                                </span> 
                                <p className="mr-2">
                                    { egldBalance } EGLD
                                </p>
                            </>
                        ) : null
                    }
                    {
                        !isLoggedIn ? 
                        (
                            <button
                                type="button"
                                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-2"
                                onClick={openUnlockModal}
                            >
                                <LightningBoltIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                Login
                            </button>
                        ) : (
                            <Menu as="div" className="ml-3 relative">
                                <div>
                                    <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <Menu.Item>
                                        {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                        >
                                            Your Profile
                                        </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            onClick={onHandleLogout}
                                        >
                                            Logout
                                        </a>
                                        )}
                                    </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu> 
                        )
                    }
                  </div>
                </div>
              </div>
              <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                          />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Close menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      
                    </div>
                    <div className="py-6 px-5">
                      <div className="grid grid-cols-2 gap-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="text-2xl font-medium text-gray-900 hover:text-gray-700"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                          Sign up
                        </a>
                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                          Existing customer?
                          <a href="#" className="text-gray-900">
                            Sign in
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </header>
        </>
    )
}

export default Navbar;



