import * as React from 'react';
import Image from 'next/image';

export interface IArchiveProps {
}

export default function Archive (props: IArchiveProps) {
  return (
    <div>
      <Image src={"/archive/archive.png"} alt="GDELT archive background" width={1200} height={400} />
    </div>
  );
}
