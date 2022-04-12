import { getDir, removeAll } from "./utils"

/**
 * Suicide JS
 * @returns Promise of removal process
 */
const main = async () => {
  try{
    console.log(getDir())
    return removeAll(getDir())
  } catch(error) {
    console.error(error)
    throw error
  }
}

export default main