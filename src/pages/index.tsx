import { useEffect } from 'react'
// import { DataStore } from '@aws-amplify/datastore'
// import { User } from './../../models'
import Form from 'shared/components/Form'

const Home = () => {
  // const [user, setUser] = useState([])

  useEffect(() => {
    const fetchUser = async () => {
      // const models = await DataStore.query(User)
      // setUser(models)
      // console.log({ models })
    }

    fetchUser()
  }, [])

  // console.log({ user })

  return (
    <main className="">
      <h1 className="mb-20 flex pt-16">
        Welcome to Home <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <Form />
    </main>
  )
}

export default Home
