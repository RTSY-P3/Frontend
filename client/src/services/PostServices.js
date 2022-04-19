import Client from './api'

export const GetPosts = async () => {
    try {
        const res = await Client.get('/projects')
        return res.data
    } catch (error) {
        throw error
    }
}

export const CreateProject = async (data) => {
    try { 
      const res = await Client.post('/projects', data)
      return res.data
    } catch (error) {
      throw error
    }
  }