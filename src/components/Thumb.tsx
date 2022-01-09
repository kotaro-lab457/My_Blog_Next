import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Date from './Time';

import { listProps } from '@Modules/index';

const Thumb: React.FC<listProps> = (props) => {
  return (
    <>
      <Link href={`/posts/${props.list.paths}`}>
        <div className='shadow-lg'>
          <Image priority src={`/images/${props.list.thumb}`} height={200} width={300} />
          <div className='text-left px-2'>
            <small>
              <Date dateString={props.list.date} />
            </small>
            <span className='text-sm ml-2'>{props.list.category}</span>
            <p>{props.list.title}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Thumb;
