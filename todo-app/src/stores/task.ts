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
  getters: {
    active: (state) => state.tasks.filter(task => !task.isDone),
    completed: (state) => state.tasks.filter(task => task.isDone),
  },
  actions: {
    add(task: Omit<TaskInfo, 'id'>) {
      const newTask: TaskInfo = {...task, id: crypto.randomUUID()}
      this.tasks.push(newTask)
    },
    remove(id?: string) {
      if (!id) return
      this.tasks = this.tasks.filter(task => task.id !== id)
    },
  },
})
