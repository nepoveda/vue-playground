import {ref, computed, type Ref, type UnwrapRef} from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task',  {
  state:() => {
    return {
      name: null,
      detail: null,
      isDone: false
    }
  }

})

interface taskInfo {
  name: string,
  detail: string,
  idDone: boolean
}
