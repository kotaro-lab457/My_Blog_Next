import React from "react";
import Link from "next/link"

const CategoryList = (props: any) => {
  return (
    <>
      <div>
        <p>下にカテゴリー名が入る。</p>
        {/* <Link href={`/categories/${}`}></Link> */}
        <Link href={`/categories/${props.category}`}>{props.category}</Link>
      </div>
    </>
  )
}

export default CategoryList;