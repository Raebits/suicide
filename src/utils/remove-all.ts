import fs from 'fs-extra'

/**
 * Remove all files and folder
 * @param path - input the path string
 * @returns Promise of removal process
 */
const removeAll = (path: string, force: boolean = false) => {
  try{
    console.log(`I am going to remove ${path}`)
    return fs.rm(path, { recursive: true, force: force })
  }catch(error){
    console.error(error)
    throw error
  }
}

export default removeAll