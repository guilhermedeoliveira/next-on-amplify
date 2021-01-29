import { useEffect } from 'react'

import userRepository from 'api/modules/user/repositories/user.repository'
import { User } from 'models'

const useGetUserById = (userId: User['id']) => {
  useEffect(() => {
    userRepository.selectUserById(userId)
  }, [userId])
}

export default useGetUserById
