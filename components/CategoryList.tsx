import React from "react";
import Link from "next/link"

const CategoryList = (props: {category: string}) => {
  return (
    <>
      <div>
        <Link href={`/categories/${props.category}`}>
          {props.category}
        </Link>
      </div>
    </>
  )
}

export default CategoryList;