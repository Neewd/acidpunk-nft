import { HeartIcon } from '@heroicons/react/solid'

const Footer = () => {

    return (
        <div className="flex items-center justify-center mt-8">
            <p className="font-semibold">
                Made with
            </p>
            <HeartIcon className="w-4 h-4 text-red-700 mx-1"/>
            <p className="font-semibold">
                by the Rockstars Community
            </p>
        </div>
    )
}

export default Footer;