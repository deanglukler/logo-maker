'use client';

import { DownloadButton } from '@/components/downloadButton';
import { Button } from '@/components/ui/button';
import { useAppProvider } from '@/providers/app-provider';
import { Menu } from 'lucide-react';
import { useState } from 'react';

// import SearchModal from '@/components/search-modal'
// import Notifications from '@/components/dropdown-notifications'
// import DropdownHelp from '@/components/dropdown-help'
// import ThemeToggle from '@/components/theme-toggle'
// import DropdownProfile from '@/components/dropdown-profile'

export default function Header() {
    const { sidebarOpen, setSidebarOpen } = useAppProvider();
    const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);

    return (
        <header className='sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30'>
            <div className='px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16 -mb-px'>
                    {/* Header: Left side */}
                    <div className='flex'>
                        {/* Hamburger button */}
                        <Button
                            className='text-primary hover:text-slate-600 lg:hidden'
                            variant={'ghost'}
                            aria-controls='sidebar'
                            aria-expanded={sidebarOpen}
                            onClick={() => {
                                setSidebarOpen(!sidebarOpen);
                            }}
                        >
                            <span className='sr-only'>Open sidebar</span>
                            <Menu size={24} />
                        </Button>
                    </div>

                    {/* Header: Right side */}
                    <div className='flex items-center space-x-3'>
                        <div>
                            <button
                                className={`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full ml-3 ${
                                    searchModalOpen && 'bg-slate-200'
                                }`}
                                onClick={() => {
                                    setSearchModalOpen(true);
                                }}
                            >
                                <span className='sr-only'>Search</span>
                                <svg
                                    className='w-4 h-4'
                                    viewBox='0 0 16 16'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        className='fill-current text-slate-500 dark:text-slate-400'
                                        d='M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z'
                                    />
                                    <path
                                        className='fill-current text-slate-400 dark:text-slate-500'
                                        d='M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z'
                                    />
                                </svg>
                            </button>
                            {/* <SearchModal
                                isOpen={searchModalOpen}
                                setIsOpen={setSearchModalOpen}
                            /> */}
                        </div>
                        {/* <Notifications align='right' />
                        <DropdownHelp align='right' />
                        <ThemeToggle /> */}
                        {/*  Divider */}
                        <hr className='w-px h-6 bg-slate-200 dark:bg-slate-700 border-none' />
                        {/* <DropdownProfile align='right' /> */}
                        <DownloadButton />
                    </div>
                </div>
            </div>
        </header>
    );
}
