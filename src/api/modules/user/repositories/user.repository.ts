import { DataStore } from '@aws-amplify/datastore'

import { User } from 'models'
import { logger } from 'lib/utils'

const insertUser = async (user: Omit<User, 'id'>): Promise<void> => {
  try {
    const savedUser = await DataStore.save(new User(user))
    logger(`user ${savedUser} created successfully`)
  } catch (error) {
    logger({ error })
  }
}

const selectUserById = async (userId: User['id']): Promise<User> => {
  try {
    const user = await DataStore.query(User, userId)
    return user
  } catch (error) {
    logger({ error })
  }
}

export default {
  insertUser,
  selectUserById,
}
