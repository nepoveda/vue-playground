import {defineStore} from 'pinia'

export interface TaskInfo {
  id?: string,
  name: string,
  detail: string,
  isDone: boolean
}

export const useTaskStore = defineStore('tasks', {
  state: () => {
    return {
      tasks: [] as TaskInfo[],
    }
  },
  actions: {
    add(task: Omit<TaskInfo, 'id'>) {
      const newTask: TaskInfo = {...task, id: crypto.randomUUID()}
      this.tasks.push(newTask)
    },
  },
})
