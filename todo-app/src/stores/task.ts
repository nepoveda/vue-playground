import {defineStore} from 'pinia'

interface taskInfo {
  id?: string,
  name: string,
  detail: string,
  idDone: boolean
}

export const useTaskStore = defineStore('tasks', {
  state: () => {
    return {
      tasks: [] as taskInfo[],
    }
  },
  actions: {
    add(task: taskInfo) {
      task.id = crypto.randomUUID()
      this.tasks.push(task)
    }
  }
})
