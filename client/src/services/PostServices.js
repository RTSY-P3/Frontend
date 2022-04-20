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

  export const CreateComment = async (data) => {
    try { 
      const res = await Client.post('/comments', data)
      return res.data
    } catch (error) {
      throw error
    }
  }

export const GetYourPosts = async () => {
    try {
        const res = await Client.get('/projects/myprojects/:user_id')
        return res.data 
    } catch (error) {
        throw error 
    }
}

export const GetComments = async () => {
    try {
        const res = await Client.get('/projects/comments')
        return res.data
    } catch (error) {
        throw error
    }
}

export const DeleteProject = async (projectId) => {
  try {
    const res = await Client.delete(`projects/${projectId}`)
    console.log(`Delete Project:`, res)
    return res.data
  } catch (error) {
    throw error
  }
}