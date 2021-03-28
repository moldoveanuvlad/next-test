import Link from 'next/link'

// ssr generation
export const getServerSideProps = async props => {
  const getData = async () => {
    const res = await fetch('https://dummyapi.io/data/api/user?limit=10', {
      headers: {
        'Content-Type': 'application/json',
        'app-id': '60567311548f4a040a19ecf0'
      }
    })
    return res.json()
  }
  const users = await getData()

  return {
    props: { users: users.data }
  }
}

const Users = ({ users }) => {
  return (
    <>
      <div className='container'>
        <h1>Welcome to the NextJS workshop</h1>
        <hr />
        <h2>Our student list today is:</h2>
      </div>
      <div className='container'>
        <ul>
          {users && users.map(user => (
            <li key={user.id}>
              <h3>{user.firstName} {user.lastName}</h3>

              <Link href={`/dynamic-router/users/${user.id}`}>View details</Link>
            </li>)
          )}
        </ul>
      </div>
    </>
  )
}
export default Users
