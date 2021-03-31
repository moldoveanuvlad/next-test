import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'

// static generation
export const getStaticProps = props => {
  // always the same classroom number
  const classRoomNumber = Math.floor(Math.random() * 10)
  const userResponse = [{
    id: '5tVxgsqPCjv2Ul5Rc7gw',
    email: 'abigail.liu@example.com',
    lastName: 'Liu',
    title: 'miss',
    picture: 'https://randomuser.me/api/portraits/women/83.jpg',
    firstName: 'Abigail'
  },
  {
    id: '6wy6UNkZueJfIUfq88d5',
    picture: 'https://randomuser.me/api/portraits/women/32.jpg',
    firstName: 'Melanie',
    email: 'melanie.pilz@example.com',
    title: 'miss',
    lastName: 'Pilz'
  },
  {
    id: '7DbXNPWlNDR4QYVvFZjr',
    email: 'evan.carlson@example.com',
    firstName: 'Evan',
    picture: 'https://randomuser.me/api/portraits/men/80.jpg',
    lastName: 'Carlson',
    title: 'mr'
  }]

  return {
    props: { users: userResponse, classRoomNumber }
  }
}

// server side rendering
// export const getServerSideProps = props => {
// always a different classroom number
// const classRoomNumber = Math.floor(Math.random()*10)
//   const userResponse = [{
//     "id": "5tVxgsqPCjv2Ul5Rc7gw",
//     "email": "abigail.liu@example.com",
//     "lastName": "Liu",
//     "title": "miss",
//     "picture": "https://randomuser.me/api/portraits/women/83.jpg",
//     "firstName": "Abigail"
// },
// {
//     "id": "6wy6UNkZueJfIUfq88d5",
//     "picture": "https://randomuser.me/api/portraits/women/32.jpg",
//     "firstName": "Melanie",
//     "email": "melanie.pilz@example.com",
//     "title": "miss",
//     "lastName": "Pilz"
// },
// {
//     "id": "7DbXNPWlNDR4QYVvFZjr",
//     "email": "evan.carlson@example.com",
//     "firstName": "Evan",
//     "picture": "https://randomuser.me/api/portraits/men/80.jpg",
//     "lastName": "Carlson",
//     "title": "mr"
// }]

// return {
//   props: {users: userResponse}
// }
// }
export default function Home ({ users, classRoomNumber }) {
  return (
    <>
      <div className='container'>
        <h1>Welcome to the NextJS workshop</h1>
        <hr />
        <h2>Our student list today is:</h2>
      </div>
      <div className='container'>
        <p>Please go to class {classRoomNumber}</p>
        <ul>
          {users && users.map(user => (
            <li key={user.id}>
              <h3>{user.title} {user.firstName} {user.lastName}</h3>
              <p>{user.email}</p>
              <img src={user.picture} />
            </li>)
          )}
        </ul>
      </div>
    </>
  )
}
