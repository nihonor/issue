import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const IssueButton = () => {
  return (
    <div>
       <Button>
        {" "}
        <Link href="/issues/new"> New issue</Link>
      </Button>
    </div>
  )
}

export default IssueButton
