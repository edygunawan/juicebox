import React from 'react'

type HeaderProps = {
  step: number;
};

const Header: React.FC<HeaderProps> = ({
  step = 0
}) => {
  return (
    <div className="grid grid-cols-12 gap-4 p-5">
      <div className="col-span-3">
        {
          step ? (
            <button className="bg-white bg-opacity-10 text-white p-4 rounded-full flex items-center justify-center mr-auto">
              <object data="./arrow-left.svg" type="image/svg+xml" className="w-6 h-6"></object>
            </button>
          ) : null
        }
      </div>
      <div className="col-span-6">
        <div className="logo-annimation logo-annimation flex flex-row item-center justify-center">
          <div className="flex items-center justify-center p-[2px]">
            <img src="./logo/jj.png" alt="j"></img>
          </div>
          <div className="flex items-center justify-center p-[2px]">
            <img src="./logo/u.png" alt="u"></img>
          </div>
          <div className="flex items-center justify-center p-[2px] pb-[8px]">
            <img src="./logo/ii.png" alt="i"></img>
          </div>
          <div className="flex items-center justify-center p-[2px]">
            <img src="./logo/c.png" alt="c"></img>
          </div>
          <div className="flex items-center justify-center p-[2px]">
            <img src="./logo/e.png" alt="e"></img>
          </div>
          <div className="flex items-center justify-center p-[2px] pb-[8px]">
            <img src="./logo/b.png" alt="b"></img>
          </div>
          <div className="flex items-center justify-center p-[2px]">
            <img src="./logo/o.png" alt="o"></img>
          </div>
          <div className="flex items-center justify-center p-[2px]">
            <img src="./logo/x.png" alt="x"></img>
          </div>          
        </div>
      </div>
      <div className="col-span-3">
        <button className="bg-white bg-opacity-10 text-white p-4 rounded-full flex items-center justify-center ml-auto">
          <object data="./refresh.svg" type="image/svg+xml" className="w-6 h-6"></object>
        </button>
      </div>
    </div>
  );
};

export default Header