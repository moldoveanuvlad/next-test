import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { BackButton } from './styles'

// This function gets called at build time
export async function getStaticPaths () {
  // Call an external API endpoint to get users
  const res = await fetch('https://dummyapi.io/data/api/user?limit=10', {
    headers: {
      'Content-Type': 'application/json',
      'app-id': '60567311548f4a040a19ecf0'
    }
  })
  const users = await res.json()
  // Get the users we want to pre-render based on users req
  const paths = users.data.map((user) => ({
    params: { id: user.id }
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export const getStaticProps = async context => {
  const id = context.params?.id

  const getData = async () => {
    const data = await fetch(`https://dummyapi.io/data/api/user/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'app-id': '60567311548f4a040a19ecf0'
      }
    })
    return data.json()
  }
  const userProfile = await getData()
  return {
    props: { userProfile }
  }
}

const User = ({ userProfile }) => {
  const router = useRouter()
  const { id, phone, lastName, firstName, location: { state }, email, gender, picture, dateOfBirth, title } = userProfile
  const onHandleBackClick = () => {
    router.back()
  }
  return (
    <>
      <h1>User ID: {id}</h1>
      <div>
        <h3>Name: {title} {firstName} {lastName}</h3>
        <p>Gender: {gender}</p>
        <p>Email: {email}</p>
        <p>Phome: {phone}</p>
        <p>DOB: {dateOfBirth}</p>
        <p>State: {state}</p>
        <div className='img-container'>
          <img src={picture} width='500' />
        </div>
      </div>
      <BackButton disabled onClick={onHandleBackClick}>Go back</BackButton>
    </>
  )
}
export default User
