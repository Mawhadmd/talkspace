import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div>
            <Link href="/">
    <div className=" uppercase text-4xl font-extrabold">
      <span className="text-mainTextColor">
        T<span className="text-secondAccent">a</span>
        lk
      </span>
      <span className="text-accentColor">
        Sp<span className="text-secondAccent">a</span>ce
      </span>
    </div>
  </Link>
        </div>
    );
}

export default Logo;
