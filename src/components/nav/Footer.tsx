
import { Image } from '@chakra-ui/react';




export function Footer() {
  return (
    <footer className="text-white relative">
      
      <div className="relative z-10 px-8 pb-5 pt-2 sm:pt-0 bg-back">
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 items-center justify-between">
          <div className="flex items-center justify-center">
            <div className="ml-2 w-12 sm:w-16 h-12 sm:h-16">
            <Image src={"/app-logo.svg"} width={80} height={16} alt="" />
            </div>
            <div className="text-lg sm:text-xl font-medium ml-4 space-y-1 text-black ">
              <div>Built with</div>
              <div>Hyperlane</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  linkCol: 'flex flex-col gap-2',
  linkItem: 'flex items-center capitalize text-decoration-none hover:underline underline-offset-2',
};
